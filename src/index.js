import _ from 'lodash';
import "../scss/style.scss";

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'Elias'], ' ');

  return element;
}

document.body.appendChild(component());