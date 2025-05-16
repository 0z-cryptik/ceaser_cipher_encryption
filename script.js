const text = document.getElementById("text");
const form = document.getElementById("form");
const shift_input = document.getElementById("shift");
const response_display = document.getElementById("encryptedText");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  ceaser_cipher(text.value, shift_input.value);
  console.log(shift.value);
});

shift_input.addEventListener("input", (e) => {
  shift_input.value = shift_input.value.replace(/[^0-9]/g, "");
  shift_input.value = shift_input.value.slice(0, 1);
});

function isUpperCase(char) {
  return char === char.toUpperCase() && char !== char.toLowerCase();
}

function isLowercase(char) {
  return char === char.toLowerCase() && char !== char.toUpperCase();
}

function ceaser_cipher(text, shift) {
  let shift_num = Number(shift);
  let encrypted_text = "";
  for (i in text) {
    const char = text[i];

    if (isUpperCase(char)) {
      const ascii_position = char.charCodeAt(0);
      const shifted_position =
        ((ascii_position - 65 + shift_num) % 26) + 65;
      const shifted_letter = String.fromCharCode(shifted_position);
      encrypted_text += shifted_letter;
    } else if (isLowercase(char)) {
      const ascii_position = char.charCodeAt(0);
      const shifted_position =
        ((ascii_position - 97 + shift_num) % 26) + 97;
      const shifted_letter = String.fromCharCode(shifted_position);
      encrypted_text += shifted_letter;
    } else {
      encrypted_text += char;
    }
  }

  console.log(encrypted_text);
  response_display.innerText = encrypted_text;
  response_display.classList.remove("hidden");
}
