"use strict";

window.onload = function (){
    const btn= document.getElementById("calculateBtn");
    btn.onclick = calcTotal;
};

function calcTotal(){

    // Get the values we need.
    let daysNumber = Number(document.getElementById("days").value )

    // calculate the surcharge percentage
    let radioYes= document.getElementById("Yes");
    let surchargePercentage= 0;  
    if (radioYes.checked){
        surchargePercentage = .3;
       
      
    }else{
        surchargePercentage = 0 ;
    }
        
    
    // Calculate the options
    let optionPrice  = 0;
    if (document.getElementById("electronic").checked){

        optionPrice += 3.95;
 
    }
    if (document.getElementById("gps").checked){

        optionPrice += 2.95;
        
    }
     if (document.getElementById("Roadside").checked){

        optionPrice += 2.95;
        
     }
     
     //Calculate totals
    
    let totalCost = 0;

    let basicPrice= 29.99 * daysNumber;
    
    let options= optionPrice * daysNumber;
     
    let surchargeAmount = surchargePercentage *(options + basicPrice)

    totalCost =(options + basicPrice)*(1+surchargePercentage)
    

    //Display the values

    let over= document.getElementById("surcharge")
    over.innerHTML= surchargeAmount
   
    let total = document.getElementById("totalCost");
    total.innerHTML = totalCost;
    
    let carRental =document.getElementById("rental")
    carRental.innerHTML= basicPrice

    let optionsOutput = document.getElementById("options")
    optionsOutput.innerHTML = optionPrice 

   
    















    
// this is the begining of the return date
    let pickupDate = document.getElementById("pickupDate").value;
    let pickupDateValue = new Date(pickupDate)
      

    let millInOneDay= 100 * 60 *60 *24;
    
    let returnDateAsMS = pickupDateValue.getTime() + (daysNumber * millInOneDay);
     let returnDateAsDate = new Date(returnDateAsMS);
   // let diff= dateCal /millInOneDay
   // let diffRound =Math.round(diff);

    let retDate =document.getElementById("return")
    retDate.innerHTML = returnDateAsDate;
}