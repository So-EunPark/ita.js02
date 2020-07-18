"use strict";

function addRow() {
  let tbody = document.getElementById("mytbody");
  let newRow = tbody.insertRow(0);
  let newCell = newRow.insertCell(0);

  newCell.innerHTML = "새 게시글입니다";
}

addRow();
