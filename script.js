const input = document.querySelector('#text-input');
const button = document.querySelector('button');
const result = document.querySelector('#result');

const h1 = document.querySelector('h1');
const body = document.querySelector('body');

function cleanUp(str) {
  const regex = /[,_\s-.\/()]/gi;
  return str.replace(regex, '').toLowerCase();
};

function checkPalindrome(possPal) {
  const cleanPossPal = cleanUp(possPal.value);
  const reversePossPal = cleanPossPal.split('').reverse().join('');

  if (cleanPossPal === reversePossPal) {
    result.style.background = '#196931';
    result.style.color = '#B2E938';
    body.style.background = '#B2E938';
    h1.style.color = '#196931';
    result.innerText = possPal.value + ' is a palindrome';
  } else {
    result.style.background = '#000000';
    result.style.color = '#94080B';
    body.style.background = '#94080B';
    h1.style.color = '#000000';
    result.innerText = possPal.value + ' is not a palindrome';
  };
};

button.addEventListener('click', function() {
  if (input.value) {
    checkPalindrome(input);
  } else {
    alert('Please input a value')
    result.style.background = '#000000';
    result.style.color = '#FFFFFF';
    body.style.background = '#000000';
    h1.style.color = '#000000';
    result.innerText = 'Enter a possible palindrome';
  };
});

