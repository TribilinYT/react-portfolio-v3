import { createGlobalStyle } from "styled-components";

import CyberpunkWoff from './Cyberpunk.woff'
import CyberpunkWoff2 from './Cyberpunk.woff2'

export default createGlobalStyle`
    @font-face {
        font-family: 'Cyberpunk';
        src: local('Cyberpunk'), local('cyberpunk'),
        url(${CyberpunkWoff}) format('woff'),
        url(${CyberpunkWoff2}) format('woff2');
        font-weight: 300;
        font-style: normal;
    }
`