function codename(e) {
  let a = document.querySelector("select#question1").value;
  let b = document.querySelector("select#question2").value;
  let c = document.querySelector("select#question3").value;
  let d = document.querySelector("select#question4").value;
  let f = document.querySelector("select#question5").value;
console.log("did it run")
    if (a === "yes1" || b != "yes2" || c != "yes3" || d != "yes4" || f != "yes5") {
      return "Javascript";
    }else if (a === "no1" || b === "yes2" || c === "no3" || d === "no4" || f === "no5") {
      return "C#";
    }else if (a != "yes1" || b != "yes2" || c === "yes3" || d != "yes4" || f != "yes5") {
      return "python";
    }else if (a != "yes1" || b != "yes2" || c != "yes3" || d === "yes4" || f != "yes5") {
      return "You can't learn all three start with one!WELL GO TAKE A DIFFERENT SURVEY THEN!!!";
    }else if (a != "yes1" || b != "yes2" || c != "yes3" || d != "yes4" || f === "yes5") {
      return "You can't learn all three start with one!";
    }else  {
      return "error";
    }
  };

window.addEventListener("load", function() {
  const form = document.getElementById("questions");
  document.querySelector("form").onsubmit = function(e) {
    e.preventDefault(); 
  const result = codename(e);
  document.getElementById("output").innerText = result;
  };
});

