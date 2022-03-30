import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    .container{
        width:80vw;
        min-height:80vh;
        margin:auto;
        text-align: center;
        padding:20px;
        margin-top:10vh;
        background: rgba( 255, 255, 255, 0.2 );
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( 3.5px );
        -webkit-backdrop-filter: blur( 3.5px );
        border-radius: 10px;
        border: 1px solid rgba( 255, 255, 255, 0.18 );
    }
    .input-form{
        display:flex;
        margin:auto;
        width: 80vw;
        margin-top: -25px;
    }
    .temp{
        width:10rem;
        font-size:50px;
        margin:auto;
        text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.774);
        margin-top:4vh;
        background-color: rgba(0, 0, 0, 0.4);
        padding:20px;
        border-radius:10px;
    }
    .date{
        font-size:3.5vw;
        text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.774);
    }
    .clouds{
        letter-spacing:5px;
        text-transform:uppercase;
        font-size:20px;
    }
    .nubes-img{
        width:10rem;
        margin-bottom:-30px;
    }
    @media(min-width: 800px){
        .date{
            font-size: 2vw;
        }
    }
`