"use strict";

/*
  Write here your JavaScript for HackYourRepo!
*/
const container = `<div id="container" class="container"> </div>
                   <footer class="footer">HYF Repositories</footer>`;

document.body.innerHTML = container;
const url = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';

function main(index) {
  const selection = `<section class="header" 
                <h3>HYF Repositories</h3>
                <select name="select" id="selectOption" class="select" onchange="changeElement()">
      </select>
      </section>`;
  const mainContent = `<div class="main-content">
     <section class="repo-section common-feature">        
                </section>
              <section class="contributors-section ">
              <p class="contributors-title common-feature">Contributors</p>
              
            </section>
           </div>`;
  let fetchedData;
  document.querySelector('.container').innerHTML = selection;
  fetch(url).then(response => response.json())
    .then(data => {
      fetchedData = data;
      fetchedData.forEach(function (element, key) {
        const option = document.createElement('option');
        option.innerText = element.name;
        option.value = key;
        document.getElementById('selectOption').appendChild(option);
      });
    })
    .then(selection => {
      let out = '';
      const result = fetchedData[index];
      out += `
        <div class="repo-details"><span class='title'>Repository:</span>
        <a href="https://github.com/HackYourFuture/${result.name}" target="_blank">${result.name}</a> </div>
        <div class="repo-details"><span class='title'>Description:</span>
        <span class="repo-desc">${result.description}</span></div>
        <div class="repo-details"><span class='title'>Forks:</span>
        <span class="repo-name fork">${result.forks}</span></div>
        <div class="repo-details"><span class='title'>Updated:</span>
        <span class="repo-update">${(result.updated_at).replace('Z', '').replace('T', ' ')}</span></div>
      `;

      document.querySelector('.container').innerHTML += mainContent;
      document.querySelector('.repo-section').innerHTML = out;
    })
    .then(contributors => {
      const contFetch = fetchedData[index].contributors_url;
      let list = '';
      fetch(contFetch).then(contributorsResponse => contributorsResponse.json())
        .then(contributorsData => {
          let contributorsDataFetched = contributorsData;
          const contributors = contributorsDataFetched.map(contributor => {
            list += `
            <div class = "contributor-detail common-feature"> 
              <img src ="${contributor.avatar_url}"> 
              <a class='contributor-name' href="https://github.com/${contributor.login}
              " target="_blank">${contributor.login}</a> 
              <p class='contribution'>${contributor.contributions}</p>
            </div>`;

          })
          document.querySelector('.contributors-section').innerHTML += list;
        });
    })
    .catch((error) => {
      const errorMessage = `<p class="error">${error}<p>`;
      document.querySelector('.container').innerHTML += errorMessage;
    });
}

window.onload = main(0);

function changeElement() {
  const selectedItem = document.querySelector('#selectOption');
  let optionValue = selectedItem.options[selectedItem.selectedIndex].value;
  optionValue = Number(optionValue);
  main(optionValue);
}

