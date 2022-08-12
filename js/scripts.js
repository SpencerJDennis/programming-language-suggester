function codename(e) {
    let a = document.querySelector("option#java").value;
    let b = document.querySelector("option#csharp").value;
    let c = document.querySelector("option#python").value;
  
  if (a === "java") {
    return "Javascript";
  }else if (b === "csharp") {
    return "C#";
  }else if (c === "python") {
    return "python";
  }
}

window.addEventListener("load", function() {
  const form = document.getElementById("questions")
  document.querySelector("form").onsubmit = function(e) {
    e.preventDefault();
    
  const result = codename(e)
  document.getElementById("output").innerText = result;
  }
});



