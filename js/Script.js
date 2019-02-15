function findoutangle() {
var hypotenuse = parseInt(prompt("hypotenuse side"));
var opposite = parseInt(prompt("opposite side"));
var adjacent = parseInt(prompt("adjacent side"));


  if (hypotenuse === opposite && opposite === adjacent && hypotenuse === adjacent) {
    alert("Equilateral triangle");
  }
    else if (hypotenuse === opposite || opposite === adjacent || hypotenuse === adjacent) {
    alert("Isosceles triangle");
  }
  else if ((hypotenuse + opposite) <= adjacent ||(hypotenuse + adjacent) <= opposite ||(opposite + adjacent) <= hypotenuse) {
    alert("Not a definite angle");
  }
    else {
    alert("scalene");
  }
}
