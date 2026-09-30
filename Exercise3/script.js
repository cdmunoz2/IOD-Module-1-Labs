function changeColumn1() {
    const column = document.getElementById("column1");
    const heading = document.getElementById("heading1");
    const input = document.getElementById("textInput1");

    column.style.backgroundColor = "Tan";
    heading.textContent = input.value;
}

function changeColumn2() {
    const column = document.getElementById("column2");
    const heading = document.getElementById("heading2");
    const input = document.getElementById("textInput2");

    column.style.backgroundColor = "SeaShell";
    heading.textContent = input.value;
}