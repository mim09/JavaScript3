const url = 'https://xkcd.now.sh/?comic=latest';
function humor() {
  const xhr = new XMLHttpRequest;
  xhr.responseType = 'json';
  xhr.onload = function () {
    if (xhr.status === 200 && xhr.readyState === 4) {
      console.log(xhr.response);
      console.log(xhr.response.img);
      const image = document.createElement('img');
      image.src = xhr.response.img;
      document.body.appendChild(image);
    }
  };
  xhr.onerror = () => {
    console.log('Request Error...');
  };
  xhr.open('GET', url);
  xhr.send();
}
humor();

function joke() {
  axios.get(url)
    .then(function (response) {
      console.log(response);
      console.log(response.config.url);
      const image = document.createElement('img');
      image.src = response.config.url;
      document.body.appendChild(image);
    })
    .catch(function (error) {
      console.log(error);
    })
}
joke();