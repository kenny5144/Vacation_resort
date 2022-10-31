"use strict";

window.onload = function (){
  let estimateBtn = document.getElementById("Estimate");
  estimateBtn.onclick= getRoomRate;

};
function getRoomRate(){
    const divValidOutput = document.getElementById("validOutput");
   
    let checkInDateInput = document.getElementById("checkInDate");
    let checkInDate =new Date(checkInDateInput.value);
    let checkInDateMonth = checkInDate.getMonth();
    console.log(checkInDateMonth)
    let roomRate;
    let queenRoom = document.getElementById("queen")
    let kingsRoom = document.getElementById("king")
    let suiteRoom = document.getElementById("Suite")
    let roomGuest = Number(document.getElementById("roomGuest").value);
    let roomGuestMessage= document.getElementById
    ("roomGuestMessage")
    let isRoomOvercrouded = false;
    
    let roomType;
    if(queenRoom.checked){ roomType = "Q";}
    if(kingsRoom.checked){ roomType = "K";}
    if(suiteRoom.checked){ roomType = "S";}

    let roomRateType;
    if(checkInDateMonth >= 5 && checkInDateMonth <= 7){ 
        roomRateType = "Summer";
    }
    else{
        roomRateType = "Other";
    }

    if(roomType == "Q"){
        if(roomRateType == "Summer") {roomRate = 250;}
        if(roomRateType == "Other") {roomRate = 150;}
    }
    else if ( roomType == "K"){
        if(roomRateType == "Summer") {roomRate = 250;}
        if(roomRateType == "Other") {roomRate = 150;}
    }
    else if (roomType == "S"){
        if(roomRateType == "Summer") {roomRate = 350;}
        if(roomRateType == "Other") {roomRate = 210;}
    }


    // if (checkInDate.getMonth() >=5 && checkInDate.getMonth() <= 7  ){
    //     roomRate = 250;

    // }else{
    //     roomRate = 150;
    // };
    let numberOfNight = document.getElementById("nights").value;
    let promoCode = document.getElementById("code").value;
    let promoCodeDiscountPercent;
    if (promoCode == "AAA/Senior"){
        promoCodeDiscountPercent = .1;
        
    }else if (promoCode == "Military" ){
        promoCodeDiscountPercent= .2;
        
        
    }else{
        promoCodeDiscountPercent=0;
        
    };
    // this is for the people that will be in the room 
    if (roomType = "Q") {
        if (roomGuest >5){
            // roomGuestMessage.innerHTML= "this room doesnt support the number of guest ";
            isRoomOvercrouded = true;
        }

    }else if(roomType ="K"){
        if (roomGuest >2){
            // roomGuestMessage.innerHTML="This room doesnt support the number of guest";
            isRoomOvercrouded = true;
        }

    }else if(roomType ="S"){
        if (roomGuest >6){
            isRoomOvercrouded = true;
        }
    }
 
    let taxPecentage =0.12;

    let discount  = document.getElementById("discount");
    let discountPrice  = document.getElementById("discountedPrice");
    let taxOutput  = document.getElementById("tax");
    let totalCostOutput = document.getElementById("totalCost");
    let originalRoomCostOutput =document.getElementById("originalRoomCost");

    let originalRoomCost =( roomRate * numberOfNight).toFixed();
    let discountCalc;
    let discountPriceCalc;
    let taxOutputCalc;
    let totalCost;

    let preDiscountCost = (roomRate * numberOfNight).toFixed(2);

    //discount amount is the amount of the discount, not a total.  i.e. if the preDiscountAmount is 100, and the discount is 0.1 (10%), the discountAmount will be 10.
    let discountAmount = (preDiscountCost * promoCodeDiscountPercent).toFixed(2);
    
    let postDiscountTotal = (preDiscountCost - discountAmount).toFixed(2);

    discountCalc= (originalRoomCost* promoCodeDiscountPercent).toFixed();
    discountPriceCalc= Number(originalRoomCost* (1-promoCodeDiscountPercent).toFixed(2)) ;
    taxOutputCalc= Number((discountPriceCalc * taxPecentage).toFixed(2));
    

    totalCost= (discountPriceCalc + taxOutputCalc);

    //decide if the room is overcrouded or not and put into this variable:
  
    //do calculation

    if(isRoomOvercrouded){
        displayOvercroudedError();
    }
    else{
        displayValidValues();
    }


    function displayValidValues(){
        roomGuestMessage.innerHTML="";

        divValidOutput.hidden = false;
      
        discount.innerHTML=` Discount ${discountCalc}`;
        discountPrice.innerHTML=`Discount Price = ${discountPriceCalc}`;
        taxOutput.innerHTML= `Tax = ${taxOutputCalc}`;
        totalCostOutput.innerHTML=`Total = ${totalCost}`;
        originalRoomCostOutput.innerHTML= originalRoomCost;
    }

    function displayOvercroudedError(){
        roomGuestMessage.innerHTML="This room doesnt support the number of guest";
        divValidOutput.hidden = true;
      
    }

}

