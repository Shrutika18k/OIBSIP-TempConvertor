const celsiusField = document.querySelector("#celsius");
const degree = document.querySelector("#degree");
const convertButton = document.querySelector("#convert-button");
const tempType = document.querySelector("#temp-type");

window.addEventListener("load",()=>{
    degree.value = "";
    celsiusField.innerHTML = "";

})

convertButton.addEventListener("click", (e) =>{
    e.preventDefault();
    convertToCelsius();
    
})

function convertToCelsius(){
let inputValue = degree.value;

if(tempType.value === "fahrenheit"){
    const fahrenheitTocelsius = (inputValue *9/5) + 32;
    celsiusField.innerHTML = `${fahrenheitTocelsius.toFixed(3)} &deg;c`;
}

else if(tempType.value === "kelvin") {
    const kelvinTocelsius = inputValue -273.15;
    celsiusField.innerHTML = `${kelvinTocelsius.toFixed(3)} &deg;c`;
}
}