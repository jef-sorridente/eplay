import { useState } from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'

import Button from '../../components/Button'
import Card from '../../components/Card'

import barCode from '../../assets/images/boleto.png'
import creditCard from '../../assets/images/card.png'

import { usePurchaseMutation } from '../../services/api'

import * as S from './styles'

const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(false)
  const [purchase, { data, isSuccess }] = usePurchaseMutation()

  const form = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      cpf: '',
      deliveryEmail: '',
      confirmdeliveryEmail: '',
      cardOwner: '',
      cpfOwner: '',
      cardDisplayName: '',
      cardNumber: '',
      expiresMonth: '',
      expiresYear: '',
      cardCode: '',
      installments: 1
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      email: Yup.string()
        .email('E-mail inválido')
        .required('O campo é obrigatório'),
      cpf: Yup.string()
        .min(14, 'O campo precisa ter 14 caracteres')
        .max(14, 'O campo precisa ter 14 caracteres'),
      deliveryEmail: Yup.string()
        .email('E-mail inválido')
        .required('O campo é obrigatório'),
      confirmdeliveryEmail: Yup.string()
        .oneOf([Yup.ref('deliveryEmail')], 'Os e-mails são diferentes')
        .required('O campo é obrigatório'),

      cardOwner: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      cpfOwner: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      cardDisplayName: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      expiresMonth: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      expiresYear: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      cardCode: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      installments: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      )
    }),
    onSubmit: (values) => {
      purchase({
        billing: {
          document: values.cpf,
          email: values.email,
          name: values.fullName
        },
        delivery: {
          email: values.deliveryEmail
        },
        payment: {
          installments: 1,
          card: {
            active: payWithCard,
            code: Number(values.cardCode),
            name: values.cardDisplayName,
            number: values.cardNumber,
            owner: {
              document: values.cpfOwner,
              name: values.cardOwner
            },
            expires: {
              month: 1,
              year: 2025
            }
          }
        },
        products: [
          {
            id: 1,
            price: 10
          }
        ]
      })
    }
  })

  const getErrorMessage = (fuildName: string, message?: string) => {
    const isTouched = fuildName in form.touched
    const isInvalid = fuildName in form.errors

    if (isTouched && isInvalid) return message
    return ''
  }

  console.log(data)

  return (
    <div className="container">
      {isSuccess ? (
        <Card title="Muito Obrigado">
          <>
            <p>
              É com satisfação que informamos que recebemos seu pedido com
              sucesso!
              <br /> Abaixo estão os detalhes da sua compra:
              <br /> Número do pedido: {data.orderId}
              <br /> Forma de pagamento:
              {payWithCard ? 'Cartão de Crédito' : 'Boleto Bancário'}
            </p>
            <p className="margin-top">
              Caso tenha optado pelo pagamento via boleto bancário, lembre-se de
              que a confirmação pode levar até 3 dias úteis. Após a aprovação do
              pagamento, enviaremos um e-mail contendo o código de ativação do
              jogo.
            </p>
            <p className="margin-top">
              Se você optou pelo pagamento com cartão de crédito, a liberação do
              código de ativação ocorrerá após a aprovação da transação pela
              operadora do cartão. Você receberá o código no e-mail cadastrado
              em nossa loja.
            </p>
            <p className="margin-top">
              Pedimos que verifique sua caixa de entrada e a pasta de spam para
              garantir que receba nossa comunicação. Caso tenha alguma dúvida ou
              necessite de mais informações, por favor, entre em contato conosco
              através dos nossos canais de atendimento ao cliente
            </p>
            <p className="margin-top">
              Agradecemos por escolher a EPLAY e esperamos que desfrute do seu
              jogo!
            </p>
          </>
        </Card>
      ) : (
        <form>
          <Card title="Dados de cobrança">
            <>
              <S.Row>
                <S.InputGroup>
                  <label htmlFor="fullName">Nome Completo</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={form.values.fullName}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage('fullName', form.errors.fullName)}
                  </small>
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="email">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    value={form.values.email}
                  />
                  <small>{getErrorMessage('email', form.errors.email)}</small>
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="cpf">CPF</label>
                  <input
                    type="text"
                    id="cpf"
                    name="cpf"
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    value={form.values.cpf}
                  />
                  <small>{getErrorMessage('cpf', form.errors.cpf)}</small>
                </S.InputGroup>
              </S.Row>
              <h3 className="margin-top">
                Dados de entrega - conteúdo digital
              </h3>
              <S.Row>
                <S.InputGroup>
                  <label htmlFor="deliveryEmail">E-mail</label>
                  <input
                    type="email"
                    id="deliveryEmail"
                    name="deliveryEmail"
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    value={form.values.deliveryEmail}
                  />
                  <small>
                    {getErrorMessage(
                      'deliveryEmail',
                      form.errors.deliveryEmail
                    )}
                  </small>
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="confirmdeliveryEmail">
                    Confirme o e-mail
                  </label>
                  <input
                    type="email"
                    id="confirmdeliveryEmail"
                    name="confirmdeliveryEmail"
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    value={form.values.confirmdeliveryEmail}
                  />
                  <small>
                    {getErrorMessage(
                      'confirmdeliveryEmail',
                      form.errors.confirmdeliveryEmail
                    )}
                  </small>
                </S.InputGroup>
              </S.Row>
            </>
          </Card>
          <Card title="Pagamento">
            <>
              <S.TabButton
                isActive={!payWithCard}
                onClick={() => setPayWithCard(false)}
              >
                <img src={barCode} alt="boleto bancario" />
                Boleto Bancario
              </S.TabButton>
              <S.TabButton
                isActive={payWithCard}
                onClick={() => setPayWithCard(true)}
              >
                <img src={creditCard} alt="cartão" />
                Cartão de crédito
              </S.TabButton>

              <div className="margin-top">
                {!payWithCard ? (
                  <p>
                    Ao optar por essa forma de pagamento, é importante lembrar
                    que a confirmação pode levar até 3 dias úteis, devido aos
                    prazos estabelecidos pelas instituições financeiras.
                    Portanto, a liberação do código de ativação do jogo
                    adquirido ocorrerá somente após a aprovação do pagamento do
                    boleto.
                  </p>
                ) : (
                  <>
                    <S.Row>
                      <S.InputGroup>
                        <label htmlFor="cardOwner">
                          Nome do titular do cartão
                        </label>
                        <input
                          type="text"
                          id="cardOwner"
                          name="cardOwner"
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          value={form.values.cardOwner}
                        />
                        <small>
                          {getErrorMessage('cardOwner', form.errors.cardOwner)}
                        </small>
                      </S.InputGroup>
                      <S.InputGroup>
                        <label htmlFor="cpfOwner">
                          CPF do titular do cartão
                        </label>
                        <input
                          type="text"
                          id="cpfOwner"
                          name="cpfOwner"
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          value={form.values.cpfOwner}
                        />
                        {getErrorMessage('cpfOwner', form.errors.cpfOwner)}
                      </S.InputGroup>
                    </S.Row>
                    <S.Row marginTop="24px">
                      <S.InputGroup>
                        <label htmlFor="cardDisplayName">Nome no cartão</label>
                        <input
                          type="text"
                          id="cardDisplayName"
                          name="cardDisplayName"
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          value={form.values.cardDisplayName}
                        />
                        {getErrorMessage(
                          'cardDisplayName',
                          form.errors.cardDisplayName
                        )}
                      </S.InputGroup>
                      <S.InputGroup>
                        <label htmlFor="cardNumber">Número do cartão</label>
                        <input
                          type="text"
                          id="cardNumber"
                          name="cardNumber"
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          value={form.values.cardNumber}
                        />
                        {getErrorMessage('cardNumber', form.errors.cardNumber)}
                      </S.InputGroup>
                      <S.InputGroup maxWidth="123px">
                        <label htmlFor="expiresMonth">Mês de vencimento</label>
                        <input
                          type="text"
                          id="expiresMonth"
                          name="expiresMonth"
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          value={form.values.expiresMonth}
                        />
                        {getErrorMessage(
                          'expiresMonth',
                          form.errors.expiresMonth
                        )}
                      </S.InputGroup>
                      <S.InputGroup maxWidth="123px">
                        <label htmlFor="expiresYear">Ano de vencimento</label>
                        <input
                          type="text"
                          id="expiresYear"
                          name="expiresYear"
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          value={form.values.expiresYear}
                        />
                        {getErrorMessage(
                          'expiresYear',
                          form.errors.expiresYear
                        )}
                      </S.InputGroup>
                      <S.InputGroup maxWidth="48px">
                        <label htmlFor="cardCode">CVV</label>
                        <input
                          type="text"
                          id="cardCode"
                          name="cardCode"
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          value={form.values.cardCode}
                        />
                      </S.InputGroup>
                      {getErrorMessage('cardCode', form.errors.cardCode)}
                    </S.Row>
                    <S.Row marginTop="24px">
                      <S.InputGroup maxWidth="150px">
                        <label htmlFor="installments">Parcelamento</label>
                        <select
                          name="installments"
                          id="installments"
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          value={form.values.installments}
                        >
                          <option
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            value=""
                          >
                            1x de R$ 200,00
                          </option>
                          <option value="">2x de R$ 200,00</option>
                          <option value="">3x de R$ 200,00</option>
                        </select>
                        {getErrorMessage(
                          'installments',
                          form.errors.installments
                        )}
                      </S.InputGroup>
                    </S.Row>
                  </>
                )}
              </div>
            </>
          </Card>
          <Button
            type="button"
            onClick={form.handleSubmit}
            title="Clique aqui para finalizar a compra"
          >
            Finalizar compra
          </Button>
        </form>
      )}
    </div>
  )
}

export default Checkout
