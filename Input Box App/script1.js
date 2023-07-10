function addText() {
    var inputText = document.getElementById("inputBox").value;
    var outputDiv = document.getElementById("output");

    if (inputText !== "") {
        var textNode = document.createTextNode(inputText);
        var paragraph = document.createElement("p");
        paragraph.appendChild(textNode);
        outputDiv.appendChild(paragraph);
    }

    document.getElementById("inputBox").value = "";
}