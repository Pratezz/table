function addExp() {
  var table = document.getElementById("tabela");
  var tecnologia = document.getElementById("tecnologia").value;
  var experiencia = document.getElementById("experiencia").value;

  if (tecnologia.length != 0 && experiencia.length != 0) {
    var row = table.insertRow(1);

    var cell1 = row.insertCell(0);
    cell1.innerHTML = tecnologia;
    var cell2 = row.insertCell(1);
    cell2.innerHTML = experiencia;
    var cell3 = row.insertCell(2);
    cell3.innerHTML = "<input type='button' id='delete' value='Delete' onclick='deleteRow(this)'/>";
  } else if (tecnologia.length == 0) {
    alert("Tecnologia is empty!");
  } else if (experiencia.length == 0) {
    alert("Experiencia is empty!");
  }
}
function deleteRow(r) {
  var i = r.parentNode.parentNode.rowIndex;
  document.getElementById("tabela").deleteRow(i);
}
