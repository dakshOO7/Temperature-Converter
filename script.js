function convertTemperature() {
    var celsius = parseFloat(document.getElementById("celsius").value);
    
    if (isNaN(celsius)) {
        alert("Please enter a valid number for Celsius temperature.");
        return;
    }

    var fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("result").innerText = celsius + " Celsius is equal to " + fahrenheit.toFixed(2) + " Fahrenheit.";
}
