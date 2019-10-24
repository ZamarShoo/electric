//jQuery Mask
$(function(){
    $("#number").mask("+7 (999) 999-99-99", {placeholder: " "});
});

$(function(){
  $("#numbers").mask("+7 (999) 999-99-99", {placeholder: " "});
});

//Popup
$('.show_popup').click(function() {
    var popup_id = $('#' + $(this).attr("rel"));
    $('.ppp__window').show();
    $('.ppp_gbg').show();
  })
  $('.ppp__close').click(function() {
    $('.ppp_gbg, .ppp__window').hide();
  });

//Header Scroll for desktop
$(window).scroll(function(){
    if ($(this).scrollTop() > 800) {
        $('nav').addClass('fixed');
    } else {
        $('nav').removeClass('fixed');
    }
  });

//Header Scroll for mobile
$(window).scroll(function(){
    if ($(this).scrollTop() > 500) {
        $('menu').addClass('mobile-backcolor');
    } else {
        $('menu').removeClass('mobile-backcolor');
    }
  });

//calcOne
const socket = [
        [550, 680, 630, 790, 750, 930],
        [620, 780, 740, 920, 860, 1070],
        [840, 1050, 980, 1230, 1240, 1550]
]

let radioType = 0;
let selectType = 0;
let calcType = 1;
let metrType = 1;

var price = document.getElementById("calc-final");
var rub = document.getElementById("span__calc");

function outputCalcOne() {

  let finish = (metrType * calcType);
  if (finish == 0) {
    price.innerHTML = "Договорная";
    rub.style.display="none";
    if (window.screen.availWidth >= 824) {
      price.style.fontSize="40px";
    } else {
      price.style.fontSize="30px";
    }
  } else {
    price.innerHTML = finish;
    rub.style.display="block";
    if (window.screen.availWidth >= 824) {
      price.style.fontSize="60px";
    } else {
      price.style.fontSize="40px";
    }
  }
}

function calcOneSelect() {
  selectType = parseInt(document.getElementById("select").value);
  calcOneInput();
}

function calcOneInput() {
  var valueOfInput = document.getElementById(`input2`).value;
  if (valueOfInput <= 80) {
    calcType = socket[radioType][selectType];
  } else 
  if ((80 <= valueOfInput) && (valueOfInput < 120)) {
    calcType = socket[radioType][(selectType + 2)]
  } else
  if ((121 <= valueOfInput) && (valueOfInput < 160)) {
    calcType = socket[radioType][(selectType + 4)]
  } else
  if (160 <= valueOfInput) {
    calcType = 0
  }
  outputCalcOne();
}

function calcOneMetr() {
  metrType = document.getElementById(`input1`).value;
  calcOneInput();
}

function selectedRadio(numberOfRadio) {
  radioType = numberOfRadio;
  calcOneInput();
}

//calcTwo
let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0]
var selectedValue = 1;

function refreshValue() {
  let finishValue = 0;
  arr.forEach(function callback(currentValue) {
    finishValue += currentValue;
  });
  document.getElementById("value-final").innerHTML = finishValue;
}

function calcTwo(numberOfInput, numberInArr, valueForService) {
  caclTwoSel();
  if ((numberInArr == 0) || (numberInArr == 1)) {
    valueForService = selectedValue;
  }
  var valueOfInput = document.getElementById(`inp${numberOfInput}`).value;
  arr[numberInArr] = valueForService * valueOfInput;
  refreshValue()
}

function refresh() {
  if (arr[0] != 0) {
    var valueOfInput = document.getElementById(`inp0`).value;
    arr[0] = selectedValue * valueOfInput;
  }
  if (arr[1] != 0) {
    var valueOfInput = document.getElementById(`inp1`).value;
    arr[1] = selectedValue * valueOfInput;
  }
  refreshValue()
}

function caclTwoSel() {
  var selected = document.getElementById("selected").value
  if (selected == 0) {
    selectedValue = 350
  } else if (selected == 1) {
    selectedValue = 250
  } else if (selected == 2) {
    selectedValue = 180
  }
  refresh()
}