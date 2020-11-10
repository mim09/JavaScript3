url = `https://opentdb.com/api.php?amount=10`;

async function test(url, index) {
  const response = await fetch(url);
  try {
    const data = await response.json();
    const ret = await data.results;
    return ret[index];
  }
  catch (e) {
    console.log(e);
  }

}

async function layOut() {
  const getAccordion = document.getElementsByClassName('accordion');
  for (let i = 0; i < getAccordion.length; i++) {
    getAccordion[i].addEventListener('click', function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
}

async function main() {
  let accordion = '';
  for (let i = 0; i < 5; i++) {
    const randomQuestion = await test(url, Math.round(Math.random() * 10));

    const ques = decodeURIComponent(randomQuestion.question);
    accordion += `<button class="accordion">${ques}</button>
            <div class="panel">
            <p>${randomQuestion.correct_answer}</p>
            </div>`;


  }
  document.querySelector('.trivia').innerHTML += accordion;
  await layOut();
}
main();