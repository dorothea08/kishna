function pickRandomName() {
    const input = document.getElementById("nameList").value.trim();
    const output = document.getElementById("output");
   
    if (input === "") {
      output.innerHTML = "<p>Please enter names to pick from.</p>";
      return;
    }
   
    const names = input.split('\n').filter(name => name.trim() !== "");
    const count = names.length;
    const randomIndex = Math.floor(Math.random() * count);
    const selectedName = names[randomIndex];
   
    output.innerHTML = `
      <p>Total Names: ${count}</p>
      <p>Random Number Picked: ${randomIndex + 1}</p>
      <p class="name">${selectedName}</p>
    `;
  }
   
  function clearFields() {
    document.getElementById("nameList").value = "";
    document.getElementById("output").innerHTML = "";
  }