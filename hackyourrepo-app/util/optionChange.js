
export function changeElement() {
  const selectedItem = document.querySelector('#selectOption');
  let optionValue = selectedItem.options[selectedItem.selectedIndex].value;
  optionValue = Number(optionValue);
  main(optionValue);
}

