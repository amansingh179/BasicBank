

var sender;
var x;


document.getElementById(`btn-1`).addEventListener("click", function () {
  x = 'T';
  sender="Tejas";
  fnc1();
});

document.getElementById(`btn-2`).addEventListener("click", function () {
  x = 'R';
  sender="Rahul";
  fnc1();
});

document.getElementById(`btn-3`).addEventListener("click", function () {
  x = 'J';
  sender="Jai";
  fnc1();
});

document.getElementById(`btn-4`).addEventListener("click", function () {
  x = 'S';
  sender="SRam";
  fnc1();
});

document.getElementById(`btn-5`).addEventListener("click", function () {
  x = 'N';
  sender="Namesh";
  fnc1();
});

document.getElementById(`btn-6`).addEventListener("click", function () {
  x = 'D';
  sender="Dhanjay";
  fnc1();
});

document.getElementById(`btn-7`).addEventListener("click", function () {
  x = 'A';
  sender="Aamy";
  fnc1();
});

document.getElementById(`btn-8`).addEventListener("click", function () {
  x = 'U';
  sender="Unmed";
  fnc1();
});

document.getElementById(`btn-9`).addEventListener("click", function () {
  x = 'r';
  sender="ryan";
  fnc1();
});

document.getElementById(`btn-10`).addEventListener("click", function () {
  x = 'M';
  sender="Mehul";
  fnc1();
});




var reciever;
var amount;
function fnc1() {
  var a = prompt("enter you recipient");
   reciever=a;

  var b = prompt("enter you amount");

amount=b;


  var c = a[0];

  var d = document.getElementById(c).innerText;
  var f = document.getElementById(x).innerText;
  if (Number(f) < Number(b)) {
    confirm('Insufficient Balance');

  }
  else {
    var ans1 = Number(f) - Number(b);
    var ans2 = Number(d) + Number(b);

    localStorage.setItem('key1',sender);
    localStorage.setItem('key2',reciever);
    localStorage.setItem('key3',amount);

    document.getElementById(c).innerText = ans2;
    document.getElementById(x).innerText = ans1;
    confirm('You have successfully Completed the Transaction');
    
  }
}
