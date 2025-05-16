const text = document.getElementById("text");
const form = document.getElementById("form");
const shift_input = document.getElementById("shift");
const response_display = document.getElementById("encryptedText");
const response_wrapper = document.getElementById("encryptedTextWrapper");
const copy_button = document.getElementById("copyBtn");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  ceaser_cipher(text.value, shift_input.value);
});

shift_input.addEventListener("input", () => {
  shift_input.value = shift_input.value.replace(/[^0-9]/g, "");
  shift_input.value = shift_input.value.slice(0, 1);
});

copy_button.addEventListener("click", async (e) => {
  const text_to_copy = response_display.innerText;

  if (text_to_copy) {
    try {
      await navigator.clipboard.writeText(text_to_copy);
      copy_button.innerHTML = `<img src="./icons/icons8-check-mark-24.png">`;

      setTimeout(() => {
        copy_button.innerHTML = `<img src="./icons/icons8-copy-24.png">`;
      }, 1500);
    } catch (e) {
      copy_button.innerText = "error";
      setTimeout(() => {
        copy_button.innerText = `<img src="./icons/icons8-copy-24.png">`;
      }, 1500);
    }
  }
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
  response_wrapper.classList.remove("hidden");
}
