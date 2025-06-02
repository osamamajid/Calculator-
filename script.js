let input = document.getElementById("input");
let buttons = document.querySelectorAll("button");
let string = "";

buttons.forEach(button => {
  button.addEventListener("click", (e) => {
    let value = e.target.innerHTML;

    if (value === "=") {
      let resultString = string.replace(/×/g, '*').replace(/÷/g, '/');
      string = safeEval(resultString);
      input.value = string;
    } else if (value === "Ac") {
      string = "";
      input.value = string;
    } else if (value === "Del") {
      string = string.slice(0, -1);
      input.value = string;
    } else {
      string += value;
      input.value = string;
    }
  });
});
