import {Header, Nav, Main, Footer} from "./components";

import * as state from "./store";

function render (St = state.Home) {
  document.querySelector('#root').innerHTML = `
  ${Header(st)}
  ${Nav}
  ${Main(st)}
  ${Footer}
  `;
}
