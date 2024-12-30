document.addEventListener("DOMContentLoaded", function () {
    const checkbox = document.getElementById("insertBrCheckbox"); // チェックボックス
    const labelContainer = document.getElementById("labelContainer"); // ラベル

    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {  // チェックが入ったら<br>と<input>を挿入
            const br = document.createElement("br");
            br.id = "brInput";
            labelContainer.parentNode.insertBefore(br, labelContainer);
            const textInput = document.createElement("input");
            textInput.type = "text";
            textInput.id = "textInput";
            labelContainer.parentNode.insertBefore(textInput, labelContainer.nextSibling);
        } else { // チェックが外れたら削除
            const br = document.getElementById("brInput");
            if (br) {
                br.remove();
            }
            const textInput = document.getElementById("textInput");
            if (textInput) {
                textInput.remove();
            }
        }
    });
});