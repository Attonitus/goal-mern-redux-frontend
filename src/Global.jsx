import {createGlobalStyle} from 'styled-components'

const GlobalStyled = createGlobalStyle`
    :root{
        font-family: 'Roboto', sans-serif;
        background-color: #2d2d2d;
        color: white;
    }
    body{
        margin: 0;
    }
    .inputAuth{
        padding-block: .5rem;
        padding-inline: 1rem;
        border-radius: .5rem;
        background-color: #2d2d2d;
        border: none;
        border-block-end: 1px solid #7e7e7e;
        font-family: 'Roboto', sans-serif;
        font-size: .9rem;
        color: white;
    }
    .buttonAuth{
        padding-block: .5rem;
        padding-inline: 1rem;
        border-radius: .5rem;
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
    }
    .errorDiv{
        background-color: #a91515;
        color: white;
        padding: 1rem;
        font-weight: 600;
        text-align: center;
        border-radius: .5rem;
    }
    .loadingDiv{
        background-color: #21a915;
        color: white;
        padding: 1rem;
        font-weight: 600;
        text-align: center;
        border-radius: .5rem;
    }
`

export default GlobalStyled
