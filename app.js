const screen = document.querySelector('#screen');
const ac_btn = document.querySelector('#ac');
const pm_btn = document.querySelector('#plus_minus')
const percent_btn = document.querySelector('#percent');
const plus_btn = document.querySelector('#plus');
const equal_btn = document.querySelector('#equal');
const minus_btn = document.querySelector('#minus');
const multiply_btn = document.querySelector('#multiply');
const divide_btn = document.querySelector('#divide');

const zero_btn = document.querySelector('#zero');
const one_btn = document.querySelector('#one');
const two_btn = document.querySelector('#two');
const three_btn = document.querySelector('#three');
const four_btn = document.querySelector('#four');
const five_btn = document.querySelector('#five');
const six_btn = document.querySelector('#six');
const seven_btn = document.querySelector('#seven');
const eight_btn = document.querySelector('#eight');
const nine_btn = document.querySelector('#nine');

let val = 0;
let temp_val =0;
let operator = null;

function updateScreen(n) {
  if(val === 0){
    screen.textContent = n;
    ac_btn.textContent = 'C'
    val = n;
    console.log(n);
  } else {
    screen.textContent = val.toString() + n.toString();
    ac_btn.textContent = 'C'
    val = parseInt(val.toString() + n.toString());
    console.log(n);
  }
}

function setPlusMinus() {
    val *= -1;
    screen.textContent = val;
}

function setPercent() {
  val /= 100;
  screen.textContent = val;
}

function equals(){
if(operator === 'plus'){
  val = temp_val + val;
  screen.textContent = val;
}else if(operator === 'minus'){
  val = temp_val - val;
  screen.textContent = val;
} else if(operator === 'multiply'){
  val = temp_val * val;
  screen.textContent = val;
} else if(operator === 'divide'){
  val = temp_val/val;
  screen.textContent = val;
}
}

ac_btn.addEventListener('click',function(e) {
  screen.textContent = 0;
  ac_btn.textContent = 'AC'
  val =0;
  console.log('AC');
});

pm_btn.addEventListener('click',function(e) {
  setPlusMinus();
});

percent_btn.addEventListener('click',function(e) {
  setPercent();
});

plus_btn.addEventListener('click',function(e) {
  temp_val = val
  operator = 'plus';
  val = 0;
});

minus_btn.addEventListener('click',function(e) {
  temp_val = val
  operator = 'minus';
  val = 0;
});

multiply_btn.addEventListener('click',function(e) {
  temp_val = val
  operator = 'multiply';
  val = 0;
});

divide_btn.addEventListener('click',function(e) {
  temp_val = val
  operator = 'divide';
  val = 0;
});

equal_btn.addEventListener('click',function(e) {
  equals()
});

zero_btn.addEventListener('click',function(e) {
  updateScreen(0);
});

one_btn.addEventListener('click', function(e){
  updateScreen(1);
});

two_btn.addEventListener('click', function(e){
  updateScreen(2);
});

three_btn.addEventListener('click', function(e){
  updateScreen(3);
});

four_btn.addEventListener('click', function(e){
  updateScreen(4);
});

five_btn.addEventListener('click', function(e){
  updateScreen(5);
});

six_btn.addEventListener('click', function(e){
  updateScreen(6);
});

seven_btn.addEventListener('click',function(e) {
 updateScreen(7);
});

eight_btn.addEventListener('click',function(e) {
 updateScreen(8);
});

nine_btn.addEventListener('click',function(e) {
 updateScreen(9);
});
