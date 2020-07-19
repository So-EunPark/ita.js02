"use strict";

// var fileCheck = document.getElementById("bfile").value;
// if (!fileCheck) {
//   alert("파일을 첨부해 주세요");
// }

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

function afterAttach() {
  let attachWrap = document.querySelector(".attach-wrap");
  var input = attachWrap.querySelector("input");
  input.style.opacity = 0;

  input.addEventListener("change", () => {
    attachWrap.querySelector(".attached").textContent = "";
    const curFiles = input.files;
    if (curFiles.length === 0) {
      const para = document.createElement("p");
      para.textContent = "No files currently selected for upload";
      preview.appendChild(para);
    } else {
      for (const file of curFiles) {
        const trashIcon = document.createElement("a");
        trashIcon.setAttribute("class", "ico-trash");
        const fileInfo = document.createElement("p");

        fileInfo.textContent = `${file.name}`;
        attachWrap.querySelector(".attached").appendChild(trashIcon);
        attachWrap.querySelector(".attached").appendChild(fileInfo);
      }
    }
  });
  return 1;
}

function clearForm() {
  posting[0].querySelector("input").value = null;
  posting[2].querySelector("select").selectedIndex = "0";
  for (let i = 0; i < 4; i++) {
    posting[3].querySelectorAll("input")[i].checked = null;
  }
  if (posting[4].querySelector("p")) {
    posting[4].querySelector("p").textContent = "";
    posting[4].querySelector("a").removeAttribute("class");
  }
}

function textByteCheck(maxByte) {
  let text = posting[0].querySelector("input").value;
  let textLength = text.length;
  let totalByte = 0;
  let oneChar = "";

  for (let i = 0; i < textLength; i++) {
    oneChar = text.charAt(i);
    if (escape(oneChar).length > 4) {
      totalByte += 2;
    } else {
      totalByte++;
    }

    if (totalByte <= maxByte) {
      posting[0].querySelector("#count").innerHTML = totalByte;
    } else {
      alert(
        "영어 " +
          maxByte +
          "자, 한글 " +
          maxByte / 2 +
          "자 까지 입력 가능합니다."
      );
      posting[0].querySelector("input").value = text.substring(0, maxByte);
      console.log(totalByte);
    }
  }

  //   console.log(textCount);
}

function addRow() {
  let newPost = new Array();
  newPost[0] = title();
  newPost[1] = position();
  newPost[2] = city();
  newPost[3] = fee();

  for (let i = 0; i < newPost.length; i++) {
    if (!newPost[i] || newPost[i] == "") {
      alert("필수 입력란을 모두 입력해 주세요.");
      return;
    }
  }
  document.querySelector(".table-responsive").style.display = "block";

  let tbody = document.body.querySelector("tbody");

  let newRow = tbody.insertRow(0);

  let titleCell = newRow.insertCell(0);
  let positionCell = newRow.insertCell(1);
  let cityCell = newRow.insertCell(2);
  let feeCell = newRow.insertCell(3);
  let attachmentCell = newRow.insertCell(4);
  let deleteCell = newRow.insertCell(5);

  titleCell.setAttribute("class", "title");
  titleCell.innerHTML = newPost[0];
  positionCell.innerHTML = newPost[1];
  cityCell.innerHTML = newPost[2];
  feeCell.innerHTML = newPost[3];

  if (posting[4].querySelector("p")) {
    let download = document.createElement("a");
    download.setAttribute("class", "ico-down");
    attachmentCell.appendChild(download);
  }

  let deleteBtn = document.createElement("a");
  deleteBtn.setAttribute("class", "ico-trash");
  deleteCell.appendChild(deleteBtn);
  // attachmentCell.innerHTML
  // titleCell.innerHTML

  clearForm();
}
