window.addEventListener("load", function() {
  const form = document.getElementById("questions")
  document.querySelector("form").onsubmit = function(e) {
    e.preventDefault();
  let a = document.querySelector("1", "2").value;
  let b = parseInt(document.querySelector("input#inputb").value);
  let c = parseInt(document.querySelector("input#inputc").value);
  const result = checkTri(a, b, c);
  document.getElementById("output").innerText = result;
  }
});