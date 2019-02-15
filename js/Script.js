var hypotenuse = parseInt(prompt("hypotenuse side"));
var opposite = parseInt(prompt("opposite side"));
var adjacent = parseInt(prompt("adjacent side"));



function findoutangle(hypotenuse,opposite,adjacent) {
  if (hypotenuse===opposite&&opposite===adjacent&&hypotenuse===adjacent) {
    alert("Equilateral triangle");
  }
    else if (hypotenuse===opposite||opposite===adjacent||hypotenuse==adjacent) {
    alert("Isosceles triangle");
  }}

  findoutangle(hypotenuse,opposite,adjacent)
