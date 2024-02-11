const input = document.getElementById("user-input");
const  checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const results = document.getElementById("results-div");

const checkNum = (str) => {
  //grouped by the variations of: "1(555)", "-555-", and "5555".
  const numRegex = /^(?:1|1 )?(?:\d{3}|\(\d{3}\))(-\d{3}-| \d{3}-|\d{3}-| \d{3} |\d{3})\d{4}$/;
  if (str === "") {
    alert("Please provide a phone number");
  } else if (str.match(numRegex)) {
    setResult(`Valid US number: ${str}`);
  } else {
    setResult(`Invalid US number: ${str}`);
  }
};

const clearValue = (el) => {
  el.innerText = "";
};

const setResult = (str) => results.innerText += "\n" + str;

checkBtn.addEventListener("click", () => checkNum(input.value));

clearBtn.addEventListener("click", () => clearValue(results));
 
