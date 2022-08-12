function codename(event) {
  event.preventDefault();
  let a = document.querySelector("select#question1").value;
  let b = document.querySelector("select#question2").value;
  let c = document.querySelector("select#question3").value;
  let d = document.querySelector("select#question4").value;
  let e = document.querySelector("select#question5").value;

    if (a === "yes1")(b === "no2")(c === "no3")(d === "no4")(e === "no5"); {
      return "Javascript"
      
    }else if (a === "no1")(b === "yes2")(c === "no3")(d === "no4")(e === "no5"); {
      return "Javascript"
    
    }
  };

window.addEventListener("load", function() {
  const form = document.getElementById("questions")
  document.querySelector("form").onsubmit = function(event) {
    event.preventDefault();
  const result = codename(event);
  document.getElementById("output").innerText = result;
  }
});
