function codename(event) {
  event.preventDefault();
  let a = document.getElementById("question1").value;
  let b	= document.getElementById("java").value
  let c = document.getElementById("csharp").value;
  let d = document.getElementById("python").value;
  
  if (a === b) {
    document.getElementById("output").innerText = "Javascript";
  }else if (a === c) {
    document.getElementById("output").innerText = "C#";
  }else if (a === d) {
    document.getElementById("output").innerText = "Python";
  }
}

window.addEventListener("load", function() {
  const form = document.getElementById("questions")
  form.addEventListener("submit", codename)
  //document.querySelector("form").onsubmit = codename()
  
});

