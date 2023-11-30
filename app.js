const questionPanel = document.querySelector('.rate');
const resultPanel = document.querySelector('.result');
const ratingNumbers = document.querySelectorAll('span[data-number]');
const submitButton = document.querySelector('.button');
const resultNum = document.querySelector('.result-num');
let rating = 0;

ratingNumbers.forEach((item) => {
  item.addEventListener('click', () => {
    ratingNumbers.forEach((item) => item.classList.remove('selected'));
    item.classList.add('selected');
    rating = item.dataset.number;
  });
});

submitButton.addEventListener('click', () => {
  if (!rating) {
    alert('Please Select A Number!');
    return;
  }
  questionPanel.classList.add('hidden');
  resultPanel.classList.remove('hidden');
  resultNum.innerText = rating;
});
