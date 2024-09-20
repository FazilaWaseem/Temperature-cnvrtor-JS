function temperatureconvertor (){
    let value =  parseFloat (document.getElementById("value").value)
    let from = document.getElementById("fromOptions").value
    let to= document.getElementById("toOptions").value
     let convrt


     if (from === "Celsius" && to === "Fahrenheit"){
        convrt = (value * 9/5 + 32);

     } else if (from === "Fahrenheit" && to === "Celsius"){
        convrt = (value - 32) * (5 / 9);
     }  else convrt = value;

    
    
     document.getElementById("convrt").innerHTML = convrt.toFixed(2);
}


