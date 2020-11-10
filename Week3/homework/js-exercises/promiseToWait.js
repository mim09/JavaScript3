// Exercise A
function getData(url) {
  fetch(url)
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log(error));
}

getData('https://randomfox.ca/floof/');


async function getDataAsync(url) {
  const response = await fetch(url);
  try {
    const json = await response.json();
    console.log(json);
  }
  catch (e) {
    console.log("error " + e);
  }
}
getDataAsync('https://randomfox.ca/floof/');

//Exercise B
const arrayOfWords = ['cucumber', 'tomatos', 'avocado', 989];

const makeAllCaps = array => {
  return new Promise((resolve, reject) => {
    let capsArray = array.map(word => {
      if (typeof word === 'string') {
        return word.toUpperCase();
      } else {
        reject('Error: Not all items in the array are strings!');
      }
    });
    resolve(capsArray);
  });
};

makeAllCaps(arrayOfWords)
  .then(result => console.log(result))
  .catch(error => console.log(error));

async function makeCapsAsync(array) {
  const result = await array.map(word => {
    try {
      if (typeof word === 'string') {
        return word.toUpperCase();
      }
      else {
        throw new TypeError('Error: Not all items in the array are strings!')
      }
    }
    catch (e) {
      return (e.message)
    }
  });
  return result;
}

async function main() {
  const ret = await makeCapsAsync(arrayOfWords);
  console.log(ret);
}
main();