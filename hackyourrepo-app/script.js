
"use strict";
import { basicLayOut } from './util/basicLayOut.js';
import { createSelection } from './util/selection.js';
import { selectionOverview } from './util/selectionOverview.js';
import { contributorsView } from './util/contribution.js';

//changes the page display with change from option 
function changeElement() {
  const selectedItem = document.querySelector('#selectOption');
  let optionValue = selectedItem.options[selectedItem.selectedIndex].value;
  optionValue = Number(optionValue);
  main(optionValue);
}
//main function calls all utility functions
function main(index) {
  const url = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';
  let fetchedData;
  fetch(url).then(response => response.json())
    .then(data => {
      fetchedData = data;
      fetchedData.forEach(function (element, key) {
        createSelection(element, key)
      })
    }).then(selection => {
      const result = fetchedData[index];
      selectionOverview(result.name, result.description, result.forks, result.updated_at);
    }).then(contributions => {
      const contFetch = fetchedData[index].contributors_url;
      contributorsView(contFetch);

    }).catch((error) => {
      const errorMessage = `<p class="error">${error}<p>`;
      document.querySelector('.container').innerHTML += errorMessage;
      console.log(error);
    });
}

window.changeElement = changeElement;
window.addEventListener('load', function () {
  basicLayOut();
  main(0);
});
