import { Links } from "../store"


import { lowerCase } from "lodash";

function linksBuilder(linkArray) {
  let i = 0;
  let links = "";
  let link = "";

  while (i < linkArray.length) {
    link = lowerCase(linkArray[i]);

    links += `
      <li>
        <a href='/${link}'>${linkArray[i]}</a>
      </li>
    `;

    i++;
  }

  return links;
}

export default () =>
`<nav>
<span class="fas fa-bars"></span>
  <ul class="hamburger--mobile hamburger--tablet nav--desktop">
    ${linksBuilder(Links)}
  </ul>
</nav>`;















// export default function(state) {
//   return `<nav>
//     ${state.nav}
//   </nav>
//   `;
// }
