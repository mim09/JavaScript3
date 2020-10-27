
function dogPhotoGallery() {
  const url = 'https://dog.ceo/api/breeds/image/random'; // url to pick the data
  const button1 = document.getElementById('button1');
  const button2 = document.getElementById('button2');
  const dogPhoto = document.getElementById('dog-photo'); //ul

  //function to make lists to post the image that both functions can use
  function postImage(srcInfo) {
    const list = document.createElement('li');
    const image = document.createElement('img');
    image.src = srcInfo; // srcInfo is going to replace from the data below
    list.appendChild(image);
    dogPhoto.appendChild(list);
  }
  //function to pick random image using axios
  function dogPhotoUsingAxios() {
    axios.get(url)
      .then(function (response) {
        postImage(response.data.message);
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  //function to display random image using XMLHttpRequest
  function dogPhotoUsingXml() {
    const xhr = new XMLHttpRequest;
    xhr.responseType = 'json';
    xhr.onload = function () {
      if (this.readyState == 4 && this.status == 200) {
        postImage(xhr.response.message);
      }
    };
    xhr.open('GET', url);
    xhr.send();
  }
  button1.addEventListener('click', dogPhotoUsingAxios);
  button2.addEventListener('click', dogPhotoUsingXml);
}
dogPhotoGallery();

