const enterButton = document.getElementById('enter');
const input = document.getElementById('inputText');
const tableSection = document.getElementById('table-section');
const table = document.getElementById('table');
const tbody = document.getElementById('body-table');
const message = document.getElementById('message');


enterButton.addEventListener('click', (event) => {
  var valor = input.value;
 console.log(valor);
  getresults(valor);
  event.preventDefault();
});

/**
 * Llamado al backend con queryParam
 * @param {*} heightRef
 */
async function getresults(heightRef) {
  const resp = await fetch(`api?input=139`);
  const data = await resp.json();
  console.log('data from back', data);
  
  //printValues(data);
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
