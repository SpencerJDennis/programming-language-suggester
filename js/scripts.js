function codename(e) {
  e.preventDefault();
  let a = document.getElementById("question1").value;

  if (a === "java") {
    return "Javascript";
  }else if (a === "csharp") {
    return "C#";
  }else if (a === "python") {
    return "python";
  }
}

window.addEventListener("load", function() {
  const form = document.getElementById("question1");
  document.querySelector("form").onsubmit = function(e) {
    e.preventDefault(); 
    
    const result = codename(e);
  document.getElementById("output").innerText = result;
  };
});



