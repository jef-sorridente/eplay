import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#eee',
  preto: '#111',
  cinza: '#333',
  cinzaClaro: '#A3A3A3',
  verde: '#10AC84'
}

export const breakpoinst = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    list-style: none;
    scroll-behavior: smooth;
  }

  body{
    background-color: ${cores.preto};
    color: ${cores.branca};
    padding-top: 40px;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoinst.desktop}) {
      max-width: 80%;

    }
  }

`
