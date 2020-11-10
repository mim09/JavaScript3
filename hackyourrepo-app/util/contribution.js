let currentPage = 1;
export function contributorsView(arg) {
  let contributorsArray = []; let pageSize = 0; let paragraph = ''; let contributorsDataFetched = {};
  fetch(arg).then(contributorsResponse => contributorsResponse.json())
    .then(contributorsData => {
      contributorsDataFetched = contributorsData;
    }).then(createArr => {
      contributorsDataFetched.forEach((element) => {
        contributorsArray.push(element);
      });
      pageSize = Math.ceil(contributorsArray.length / 5);
      for (let i = 1; i <= pageSize; i++) {
        paragraph += `<p class='pageIndex'>${i}</p>`;
      }
      document.querySelector('.page').innerHTML = ` <p class='previous'> &lt; </p>${paragraph} <p class='next'> &gt; </p> `;
    }).then(contributorsDisplay => {
      pagination(contributorsArray);
      let pages = document.querySelectorAll('.page .pageIndex');
      let previous = document.querySelector('.page .previous');
      let next = document.querySelector('.page .next');
      pages.forEach(page => {
        page.addEventListener('click', (e) => {
          pages.forEach(p => { p.classList.remove('active') });
          currentPage = e.target.innerText;
          e.target.classList.add('active');
          currentPage = Number(currentPage);
          pagination(contributorsArray);
        });
      });
      previous.addEventListener('click', () => {
        currentPage--;
        if (currentPage === 0) {
          currentPage = 1;
        }
        pages.forEach(p => {
          p.classList.remove('active');
          if (p.innerText == currentPage) {
            p.classList.add('active');
          }
        });
        pagination(contributorsArray);
      });

      next.addEventListener('click', () => {
        currentPage++;
        if (currentPage > pages.length) {
          currentPage = pages.length;
        }
        pages.forEach(p => {
          p.classList.remove('active');
          if (p.innerText == currentPage) {
            p.classList.add('active');
          }
        });
        pagination(contributorsArray);
      });
    });
}

function pagination(arr) {
  let list = '';
  let startIndex = (currentPage - 1) * 5;
  let endIndex = currentPage * 5;
  if (endIndex > arr.length) {
    endIndex = arr.length;
  }
  for (let i = startIndex; i < endIndex; i++) {

    list += `
            <div class = "contributor-detail common-feature"> 
              <img src ="${arr[i].avatar_url}"> 
              <a class='contributor-name' href="https://github.com/${arr[i].login}" target="_blank">${arr[i].login}</a> 
              <p class='contribution'>${arr[i].contributions}</p>
            </div>`;
  }
  document.querySelector('.contributors-section').innerHTML = list;
}

