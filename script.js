const text = document.getElementById("text");
const form = document.getElementById("form");
const shift_input = document.getElementById("shift");
const response_display = document.getElementById("encryptedText");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  ceaser_cipher(text.value, shift_input.value);
});

shift_input.addEventListener("input", () => {
  shift_input.value = shift_input.value.replace(/[^0-9]/g, "");
  shift_input.value = shift_input.value.slice(0, 1);
});

function isUpperCase(char) {
  return char === char.toUpperCase() && char !== char.toLowerCase();
}

function isLowercase(char) {
  return char === char.toLowerCase() && char !== char.toUpperCase();
}

function process(char, case_a_ascii_num, shift_num) {
  const ascii_position = char.charCodeAt(0);
  const shifted_position =
    ((ascii_position - case_a_ascii_num + shift_num) % 26) +
    case_a_ascii_num;
  const shifted_letter = String.fromCharCode(shifted_position);
  return shifted_letter;
}

function ceaser_cipher(text, shift) {
  let encrypted_text = "";
  for (i in text) {
    const char = text[i];

    if (isUpperCase(char)) {
      const shifted_letter = process(char, 65, Number(shift));
      encrypted_text += shifted_letter;
    } else if (isLowercase(char)) {
      const shifted_letter = process(char, 97, Number(shift));
      encrypted_text += shifted_letter;
    } else {
      encrypted_text += char;
    }
  }

  response_display.innerText = encrypted_text;
  response_display.classList.remove("hidden");
}
