// function createSelection(val, key) {
//   const option = document.createElement('option');
//   option.innerText = val.name;
//   option.value = key;
//   document.getElementById('selectOption').appendChild(option);
// }

export function createSelection(val, key) {
  const option = document.createElement('option');
  option.innerText = val.name;
  option.value = key;
  document.getElementById('selectOption').appendChild(option);
}

//  export module { createSelection };