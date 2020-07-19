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

  let newPost = new Array();
  newPost[0] = title();
  newPost[1] = position();
  newPost[2] = city();
  newPost[3] = fee();

  for (let i = 0; i < newPost.length; i++) {
    if (!newPost[i]) {
      alert("필수 입력란을 모두 입력해 주세요.");
      return;
    }
  }

  let tbody = document.body.querySelector("tbody");

  if (tbody) {
    let newRow = tbody.insertRow(0);

    let titleCell = newRow.insertCell(0);
    titleCell.setAttribute("class", "title");
    titleCell.innerHTML = newPost[0];

    let positionCell = newRow.insertCell(1);
    positionCell.innerHTML = newPost[1];

    let cityCell = newRow.insertCell(2);
    cityCell.innerHTML = newPost[2];

    let feeCell = newRow.insertCell(3);
    feeCell.innerHTML = newPost[3];

    let attachmentCell = newRow.insertCell(4);
    // attachmentCell.innerHTML
    let deleteCell = newRow.insertCell(5);
  }
}

function clearForm() {}
