document.addEventListener("DOMContentLoaded", function () {
  const otherCheckbox = document.getElementById("otherCheckbox");
  const labelContainer = document.getElementById("labelContainer");

  const urlParams = new URLSearchParams(window.location.search);
  const otherParam = urlParams.get("other"); // パラメータ 'other' の値を取得

  if (otherParam === "true") {
    otherCheckbox.checked = true;
    insertElements();
  } else {
    otherCheckbox.checked = false;
  }

  otherCheckbox.addEventListener("change", function () {
    if (otherCheckbox.checked) {
      insertElements();
    } else {
      removeElements();
    }
  });

  // <br>タグとテキスト入力を挿入
  function insertElements() {
    removeElements();

    const br = document.createElement("br");
    br.id = "brInput";

    const textInput = document.createElement("input");
    textInput.type = "text";
    textInput.id = "textInput";
    textInput.placeholder = "入力してください";

    const parentLabel = otherCheckbox.parentElement;
    parentLabel.insertBefore(br, otherCheckbox); // <br>を挿入
    labelContainer.parentNode.insertBefore(textInput, labelContainer.nextSibling); // テキスト入力を挿入
  }

  // <br>タグととテキスト入力を削除
  function removeElements() {
    const existingBr = document.querySelector("#brInput");
    const existingText = document.querySelector("#textInput");

    if (existingBr) { existingBr.remove(); }
    if (existingText) { existingText.remove(); }
  }
});
