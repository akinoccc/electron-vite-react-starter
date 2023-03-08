import { createGlobalStyle } from 'styled-components';
export default createGlobalStyle`
html, body, ul, li, ol, dl, dd, dt, p, h1, h2, h3, h4, h5, h6, form, fieldset, legend, img {
  margin:0;
  padding:0;
}

body {
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

fieldset, c{ border:none; }

img{display: block;}

address, caption, cite, code, dfn, th, var { font-style:normal; font-weight:normal; }

ul, ol ,li{ list-style:none; }

body { color:#333; font:12px BASE "SimSun","宋体","Arial Narrow",HELVETICA; background:#fff;}

a { color:#666; text-decoration:none; }

*{box-sizing:border-box}

body,html,#root{
    height: 100%;
}

::-webkit-scrollbar{width:6px;height:4px;border-radius: 3px}
::-webkit-scrollbar-button{width:6px;height:0;border-radius: 3px}
::-webkit-scrollbar-track{background:0 0}
::-webkit-scrollbar-thumb{background:#245FD9;-webkit-transition:.3s;transition:.3s}
::-webkit-scrollbar-thumb:hover{background-color:#245FD9}
::-webkit-scrollbar-thumb:active{background-color:#245FD9}
::-webkit-scrollbar {
    width: 6px;
    height: 6px;
}
::-webkit-scrollbar-track-piece{
    background-color: transparent;
    border-radius: 3px;
}
::-webkit-scrollbar-thumb:vertical{
    height: 6px;
    background-color: #D0D0D0;
    border-radius: 3px;
}
::-webkit-scrollbar-thumb:horizontal{
    width: 6px;
    background-color: #D0D0D0;
    border-radius: 3px;
}
::-webkit-scrollbar-thumb:vertical:hover,
::-webkit-scrollbar-thumb:horizontal:hover{
    background-color: #D0D0D0;
}
`;
