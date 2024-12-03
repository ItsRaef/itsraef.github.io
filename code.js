function somme() {
  document.getElementById("rus").disabled = false;
  document.getElementById("rus").value =
    parseInt(document.getElementById("e1").value) +
    parseInt(document.getElementById("e2").value);
}
function mult() {
  document.getElementById("rus").disabled = false;
  document.getElementById("rus").value =
    parseInt(document.getElementById("e1").value) *
    parseInt(document.getElementById("e2").value);
}
function sous() {
  document.getElementById("rus").disabled = false;
  document.getElementById("rus").value =
    parseInt(document.getElementById("e1").value) -
    parseInt(document.getElementById("e2").value);
}
function div() {
  document.getElementById("rus").disabled = false;
  document.getElementById("rus").value =
    parseInt(document.getElementById("e1").value) /
    parseInt(document.getElementById("e2").value);
}
function aff1() {
  document.getElementById("b1").disabled = false;
}
function aff2() {
  document.getElementById("b2").disabled = false;
}
function aff3() {
  document.getElementById("b3").disabled = false;
}
function aff4() {
  document.getElementById("b4").disabled = false;
}