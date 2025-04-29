function generateArray() {
    const input = document.getElementById("letterCount").value;
    const output = document.getElementById("output");
   
    if (input === "") {
        output.innerText = "Please enter a number from 1 to 26.";
        return;
    }
   
    const count = parseInt(input);
   
    if (isNaN(count) || count < 1 || count > 26) {
        output.innerText = "Please enter a number from 1 to 26.";
        return;
    }
   
    const alphabet = [];
    for (let i = 0; i < count; i++) {
        alphabet.push(String.fromCharCode(65 + i));
    }
   
    output.innerText = "Generated Array: [ " + alphabet.join(", ") + " ]";
  }
   
  function clearArray() {
    document.getElementById("letterCount").value = "";
    document.getElementById("output").innerHTML = "";
  }