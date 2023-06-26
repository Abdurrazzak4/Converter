/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const convertBtnEl = document.getElementById("convert-btn")
const numberInputEl = document.getElementById("number-input")
const length = document.getElementById("length")
const volume = document.getElementById("volume")
const mass = document.getElementById("mass")


convertBtnEl.addEventListener("click", ()=>{
    inputValue = numberInputEl.value
    length.innerHTML ="Length (Meter/Feet)" + `<div id="length-scale">${inputValue} meters = ${((inputValue)*3.281).toFixed(2)} feet | ${inputValue} feet = ${((inputValue)/3.281).toFixed(2)} meters</div>`
})
convertBtnEl.addEventListener("click", ()=>{
    inputValue = numberInputEl.value
    volume.innerHTML ="Volume (Liters/Gallons)"+ `<div id="volume-scale">${inputValue} liters = ${((inputValue)*0.264).toFixed(2)} gallons | ${inputValue} gallons = ${((inputValue)/0.264).toFixed(2)} liters</div>`
})

convertBtnEl.addEventListener("click", ()=>{
    inputValue = numberInputEl.value
    mass.innerHTML ="Mass (Kilograms/Pounds)"+ `<div id="mass-scale">${inputValue} kilos = ${((inputValue)*2.204).toFixed(2)} pounds | ${inputValue} pounds = ${((inputValue)/2.204).toFixed(2)} kilos</div>`
})
