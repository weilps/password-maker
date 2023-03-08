const dataLowercase = "qwertyuiopasdfghjklzxcvbnm";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "éèêëēėęçćčßśš~!@#$%^&*()_+=-`'\"|<>?/,.";
const rangeValue = document.getElementById("password-length");
const passwordOutput = document.getElementById("password-output");

const generatePassword = () => {
  let data = [];
  let password = "";

  if (lowercase.checked) data.push(...dataLowercase);
  if (uppercase.checked) data.push(...dataUppercase);
  if (numbers.checked) data.push(...dataNumbers);
  if (symbols.checked) data.push(...dataSymbols);

  if (data.length === 0) {
    alert("Please select criteria !");
    return;
  }
  for (i = 0; i < rangeValue.value; i++) {
    password += data[Math.floor(Math.random() * data.length)];
  }

  passwordOutput.value = password;
  navigator.clipboard.writeText(passwordOutput.value);
  window.getSelection().removeAllRanges();

  generateButton.textContent = "Copied !";

  setTimeout(() => {
    generateButton.textContent = "Generate password";
  }, 3000);
};

generateButton.addEventListener("click", generatePassword);
