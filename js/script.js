let sliderValue = 5;


function buttonPressed(){
    let input = document.getElementById("userInput").value;
    localStorage.setItem("greeting", input);
    window.location.href = "index.html";
    localStorage.setItem("numFireworks", sliderValue);
  }

  function showVal() {
    let viktField = document.querySelector(".antalFyv");
    sliderValue = document.querySelector(".slider").value;

    viktField.innerHTML = sliderValue;
    console.log(sliderValue);

  }
  showVal();