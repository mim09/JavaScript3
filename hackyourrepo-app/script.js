"use strict";

/*
  Write here your JavaScript for HackYourRepo!
*/
const placeholderRepos = [
  {
    name: 'SampleRepo1',
    description: 'This repository is meant to be a sample',
    forks: 5,
    updated: '2020-05-27 12:00:00',
  },
  {
    name: 'AndAnotherOne',
    description: 'Another sample repo! Can you believe it?',
    forks: 9,
    updated: '2020-05-27 12:00:00',
  },
  {
    name: 'HYF-Is-The-Best',
    description:
      "This repository contains all things HackYourFuture. That's because HYF is amazing!!!!",
    forks: 130,
    updated: '2020-05-27 12:00:00',
  },
];
// function that iterates the above array and fills the select option with repository name
function optionData(array) {
  const select = document.getElementById('selectOption');
  array.forEach(function (element, key) {
    const option = document.createElement('option');
    option.innerText = element.name;
    option.value = key;
    select.appendChild(option);
  });
}
//when the repository name changed it calls a function to change the description 
const selected = document.querySelector('#selectOption');
selected.addEventListener('change', () => {
  const key = selected.value;
  displayContent(key); // calls function to change the details
});

function displayContent(index) {
  document.querySelector('.repository').innerHTML = placeholderRepos[index].name;
  document.querySelector('.description').innerHTML = placeholderRepos[index].description;
  document.querySelector('.forks').innerHTML = placeholderRepos[index].forks;
  document.querySelector('.updated').innerHTML = placeholderRepos[index].updated;
}

window.onload = displayContent(0); // fills the repository details with default value

optionData(placeholderRepos);