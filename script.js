"use strict";

let posting = document.querySelectorAll(".box");

let title = () => {
  return posting[0].querySelector("input").value;
};

let fee = () => {
  let checked = posting[1].querySelectorAll("label>input");
  for (let i = 0; i < 2; i++) {
    if (checked[i].checked) {
      return checked[i].value;
    }
  }
};

let city = () => {
  let citySelect = posting[2].querySelector("select");
  return citySelect.options[citySelect.selectedIndex].text;
};

let position = () => {
  let checkCount = posting[3].querySelectorAll("input").length;
  let positionList = new Array();

  for (let i = 0; i < checkCount; i++) {
    if (posting[3].querySelectorAll("input")[i].checked == true) {
      positionList.push(posting[3].querySelectorAll("input")[i].value);
    }
  }
  return positionList;
};

function getPosting() {
  title();
  fee();
  city();
  position();
  console.log(title(), fee(), city(), position());
}

function addRow() {
  let titleText = title();
  let positionText = position();
  let feeText = fee();
  let cityText = city();

  let tbody = document.body.querySelector("tbody");

  if (tbody) {
    let newRow = tbody.insertRow(0);

    let newTitle = newRow.insertCell(0);
    newTitle.setAttribute("class", "title");
    newTitle.innerHTML = titleText;

    let newPosition = newRow.insertCell(1);
    newPosition.innerHTML = positionText;

    let newCity = newRow.insertCell(2);
    newCity.innerHTML = cityText;

    let newFee = newRow.insertCell(3);
    newFee.innerHTML = feeText;
  }
}
