//get random user using XMLHttpRequest

function getRandomUser() {
  const url = 'https://www.randomuser.me/api';
  const randomUser = document.getElementById('friend-name');
  const button = document.getElementById('random-axios');
  const buttonUser2 = document.getElementById('random-xml');

  function getUserXml() {
    const xhr = new XMLHttpRequest;
    xhr.responseType = 'json';
    xhr.onload = function () {
      let ran = xhr.response.results[0];
      randomUser.innerText = `Your random friend is ${ran.name.title} ${ran.name.first} ${ran.name.last} from ${ran.location.country}`;
    };
    xhr.open('GET', url);
    xhr.send();
  }

  function getUserAxios() {
    // Make a request for a user with a given ID
    axios.get(url)
      .then(function (response) {
        // handle success
        console.log(response);
        const selected = response.data.results[0];
        randomUser.innerText = `Your random friend is ${selected.name.title} ${selected.name.first} ${selected.name.last} from ${selected.location.country}`;

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })

  }

  button.addEventListener('click', getUserXml);
  buttonUser2.addEventListener('click', getUserAxios);
}

getRandomUser();


