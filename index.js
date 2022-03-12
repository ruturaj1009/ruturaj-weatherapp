var inputval = document.querySelector("#cityinput");
var btn = document.querySelector("#add");
var descrip = document.querySelector("#description");
var city = document.querySelector("#cityoutput");
var temp = document.querySelector("#temp");
var wind = document.querySelector("#wind");

apik = "3045dd712ffe6e702e3245525ac7fa38"

function conversion(val){
    return (val-273).toFixed(2)
}

btn.addEventListener("click", function (){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+apik)

    .then(res => res.json())

    .then(data =>{

        var nameval = data['name']
        var descrip = data['weather'][0]['description']
        var temperature = data['main']['temp']
        var wndspd = data['wind']['speed']

        city.innerHTML = `<u>Weather Condition</u> <span id="sp">${nameval}</span>`
        temp.innerHTML = `<b>Temperature</b>   :   <span id="sp1">${conversion(temperature)}'C</span>`
        description.innerHTML = `<b>Sky Condition</b>  :   <span id="sp2">${descrip}</span>`
        wind.innerHTML = `<b>Wind Speed</b>    :   <span id="sp3">${wndspd} KM/H</span>`
        
    })

    .catch(err => alert('Enter Correct City Name'))
});