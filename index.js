import {Header, Nav, Main, Footer} from "./components";

import * as state from "./store";

function render (st = state.Home) {
  document.querySelector('#root').innerHTML = `
  ${Header(st)}
  ${Nav(st)}
  ${Main(st)}
  ${Footer()}
  `;
}
render();
