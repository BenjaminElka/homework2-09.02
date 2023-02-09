import { InfoWorker } from "./InfoWorker.js";
import { TaxCalculator } from "./taxcalculator.js";

function SubmitForm (){
    const name = document.querySelector("#nameInput").value;
    const family = document.querySelector("#familyInput").value;
    const income = document.querySelector("#incomeInput").value;
    const pension = document.querySelector("#procentInput").value;
    // const fund = document.querySelector("#fundInput").value;
const infoWorker = new InfoWorker(name,family); // doe 
const calculator = new TaxCalculator(infoWorker);
const fund = calculator.TotalFund();
document.querySelector("#resultDisplay").textContent= "your result is:"+fund;

}
document.querySelector("#submitForm").addEventListener("click",SubmitForm);