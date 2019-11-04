import {Header, Nav, Main, Footer} from "./components";

import * as state from "./store";

import { capitalize } from "lodash";

import { auth, db } from "./firebase";

db.ref("stlparks-f70a0").once("value")
  .then((snapshot) => console.log(snapshot))
  .catch((err) => console.error(err.message))

  const query = db.ref("stlparks-f70a0").orderByKey();
  query.once("value").then(snapShot => {
    console.log();
    // snapShot.forEach(childSnapshot => {
    //   const childData = childSnapshot.val();
    //   state.BeerData.push(childData);
    // });
  })

function render (st = state.Home) {
  document.querySelector('#root').innerHTML = `
  ${Header(st)}
  ${Nav(st)}
  ${Main(st)}
  ${Footer()}
  `;

  // const links = document.querySelectorAll("nav a");

  // links.forEach(link => link.addEventListener("click", event => {
  //   event.preventDefault();
  //   render(state[event.target.textContent]);
  // }));

  function handleNavigation(event) {
    const component = event.target.textContent;

    event.preventDefault();

    startApp(state[capitalize(component)]);
  }
}
render();
