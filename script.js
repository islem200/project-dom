function getRandomHexColor() {
  // Generate a random number between 0 and 0xFFFFFF (16777215)
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);

  // Ensure the string is 6 characters long by padding with leading zeros if necessary
  return `#${randomColor.padStart(6, '0')}`;
}

document.addEventListener('DOMContentLoaded', () => {
  const colorBox = document.getElementById('color-box');
  const button = document.getElementById('change-color-btn');

  button.addEventListener('click', () => {
    colorBox.style.backgroundColor = `${getRandomHexColor()}`;
  });
});
