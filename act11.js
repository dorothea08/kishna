function showForLoop() {
    let num = parseInt(document.getElementById("forNum").value);
    let string = document.getElementById("forText").value;
    let output = document.getElementById("forOutput");
    output.innerHTML = "";
 
    if(isNaN(num) || num == '\0'){
        alert("Please enter valid number.")
    }
    for (let i = 0; i < num; i++) {
        output.innerHTML += string + "<br>";
    }
}
 
function clearForFields() {
    document.getElementById("forOutput").innerHTML = "";
    document.getElementById("forNum").value = "";
    document.getElementById("forText").value = "";
}
 
function showWhileLoop() {
    let num = parseInt(document.getElementById("whileNum").value);
    let string = document.getElementById("whileText").value;
    let output = document.getElementById("whileOutput");
    output.innerHTML = "";
    let i = 0;
 
    if(isNaN(num) || num == '\0'){
        alert("Please enter valid number.")
    }
    while (i < num) {
        output.innerHTML += string + "<br>";
        i++;
    }
}
 
function clearWhileFields() {
    document.getElementById("whileOutput").innerHTML = "";
    document.getElementById("whileNum").value = "";
    document.getElementById("whileText").value = "";
}
 
function showDoWhileLoop() {
    let num = parseInt(document.getElementById("doWhileNum").value);
    let string = document.getElementById("doWhileText").value;
    let output = document.getElementById("doWhileOutput");
    output.innerHTML = "";
    let i = 0;
 
    if(isNaN(num) || num == '\0'){
        alert("Please enter valid number.")
    }
    do {
        output.innerHTML += string + "<br>";
        i++;
    } while (i < num);
}
 
function clearDoWhileFields() {
    document.getElementById("doWhileOutput").innerHTML = "";
    document.getElementById("doWhileNum").value = "";
    document.getElementById("doWhileText").value = "";
}