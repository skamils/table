var elem = document.querySelector('#elem');

function createTable(parent, cols, rows) {
  var table = document.createElement('table');
  var rows = document.getElementById('rows').value;
  var cols = document.getElementById('cols').value;

  for (var i = 0; i < rows; i++) {
    var tr = document.createElement('tr');
    for (var j = 0; j < cols; j++) {
      var td = document.createElement('td');
      table.appendChild(td);
    }
    table.appendChild(tr);
  }
  elem.appendChild(table);
}

function fillTable() {
  var tds=document.querySelectorAll('td');
  for(i=0; i<tds.length ;i++){
    tds[i].innerHTML = Math.floor(Math.random() * 9);
    tds[i].classList.remove('td__orange');
  }
}

function sortTable() {
  var tds=document.querySelectorAll('td');
  for(i=0;i<tds.length;i++){
    if (tds[i].textContent%2==0) {
      tds[i].classList.toggle('td__orange');
    }
  }
}
