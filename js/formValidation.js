/*
Author: Colin Hoffman

Notes: This code is not yet portable.
*/




//HERE IS WHERE MY GLOBAL VARS ARE DELARED AND INIT
var fullName = document.getElementById("nameinput"), streetAddress = document.getElementById("addrinput"),
    elCity = document.getElementById("cityinput"), email = document.getElementById("emailinput"),
    phone = document.getElementById("phoneinput"), thinCrust = document.getElementById("thin"),
    thickCrust = document.getElementById("thick"), size = document.getElementById("size"),
    cheese = document.getElementById("cheese"), pepperoni = document.getElementById("pepperoni"),
    sausage = document.getElementById("sausage"), greenpep = document.getElementById("greenpep"),
    onion = document.getElementById("onion"), xcheese = document.getElementById("xcheese"),
    instructions = document.getElementById("instructions"),
    
    //HERE I CREATED RegExp OBJECTS TO HELP ME VALIDATE PARTS OF THE FORM
    hasANumber = new RegExp("[0-9]+"),
    hasAOddChar = new RegExp("[!@#$%^&*()_+=<>?]+"), hasAOddEmailChar = new RegExp("[!#$%^&*()?><=]+"),
    
    //THIS IS PART OF MY JARRY RIGED WAY OF CHECKING THE DROPDOWN BOX
    wasSizeClicked = 0;

//(START OF ONCHANGE FUNCTIONS) HERE I MADE FUNCTIONS TO CHECK EACH FIELD SEPERETLY AS IT IS BEING FILLED OUT
function nameValidation(){
    
    //FIRST I CHECK TO SEE IF IT HAS A VALUE
     if(fullName.value == ""){
         document.getElementById("nameAlert").textContent = "You Must Enter A Name!";
         document.getElementById("nameAlert").style.visibility = "visible";
     
     //NEXT I CHECK TO SEE IF THE USER ENTERED NUMBERS FOR A NAME
     }else if(hasANumber.test(fullName.value)){
         document.getElementById("nameAlert").textContent = "Names are not numbers!";
         document.getElementById("nameAlert").style.visibility = "visible";
         
     }else if(hasAOddChar.test(fullName.value)){
         document.getElementById("nameAlert").textContent = "You can't put anthing crazy in your name!";
         document.getElementById("nameAlert").style.visibility = "visible";
     
     //IF ALL THE TEST WHERE PASSED THE ERROR MESSEGE WILL BE SET TO HIDDEN
     }else{
         document.getElementById("nameAlert").style.visibility = "hidden";
     }
}//END OF NAMEVALIDATION FUNCTION





function addrValidation(){
    
    //HERE I CHECK FOR A VALUE
    if(streetAddress.value == ""){
        
        document.getElementById("addrAlert").textContent = "You must enter a address!";
        document.getElementById("addrAlert").style.visibility = "visible";
        
     //HERE I CHECK TO SEE IF THERE WAS ANY ODD CHARS ENTERED   
    }else if(hasAOddChar.test(streetAddress.value)){
        
         document.getElementById("addrAlert").textContent = "You can't put anthing crazy in your address!";
         document.getElementById("addrAlert").style.visibility = "visible";
        
      //IF EVERYTHING PASSED THE MESSEGE IS SET TO HIDDEN  
     }else{
         
        document.getElementById("addrAlert").style.visibility = "hidden";
    }
}//END OF ADDRVALIDATION FUNCTION





function citValidation(){
    
    //HERE I CHECK IF THERE IS A VALUE
    if(elCity.value == ""){
        
        document.getElementById("citAlert").textContent = "You must enter a city!";
        document.getElementById("citAlert").style.visibility = "visible";
     
     //HERE I CHECK IF THERE WAS A NUMBER ENTERED
    }else if(hasANumber.test(elCity.value)){
        
         document.getElementById("citAlert").textContent = "Cities are not numbers!";
         document.getElementById("citAlert").style.visibility = "visible";
     
      //HERE I CHECK FOR ODD CHARS
     }else if(hasAOddChar.test(elCity.value)){
        
         document.getElementById("citAlert").textContent = "You can't put anthing crazy in your city name!";
         document.getElementById("citAlert").style.visibility = "visible";
        
     //IF EVERYTHING PASSED MESSEGE IS HIDDEN
     }else{
         
        document.getElementById("citAlert").style.visibility = "hidden";
    }
}//END OF CITVALIDATION FUNCTION






function emValidation(){
    
    //HERE I CHECK TO SEE IF EMAIL HAS A VALUE
     if(email.value == ""){
         
         document.getElementById("emAlert").textContent = "You Must Enter A E-Mail!";
         document.getElementById("emAlert").style.visibility = "visible";
     
     //HERE I CHECK TO SEE IF THERE ARE ANY ODD CHARS FOR EMAILS THAT IS
     }else if (hasAOddEmailChar.test(email.value)){
         
         document.getElementById("emAlert").textContent = "You Must Enter A E-Mail with out anthing crazy in it!";
         document.getElementById("emAlert").style.visibility = "visible";
         
     //IF ALL PASSED MESSEGE IS HIDDEN	
     }else{
         
        document.getElementById("emAlert").style.visibility = "hidden";
    }
}//END OF EMVALIDATION





function phoneVal(){
    
    //HERE IF CHECKED IF IT HAD A VALUE
    if(phone.value == ""){
        document.getElementById("phAlert").textContent = "You Must Enter A Phone Number";
        document.getElementById("phAlert").style.visibility = "visible";
        
     //HERE I CHECKED IF THE INPUT WAS IS A NUMBER
    }else if(!hasANumber.test(phone.value)){
        document.getElementById("phAlert").textContent = "You Must Enter A Phone NUMBER not phone letters!";
        document.getElementById("phAlert").style.visibility = "visible";
        
    //HERE I AM CHECKING IF THE PHONENUMBER IS THEN DIGITS
    }else if(phone.value.length != 10){
        document.getElementById("phAlert").textContent = "We only accept 10 digit phone numbers!";
        document.getElementById("phAlert").style.visibility = "visible";
    }
    //IF PASSED MESSEGE IS HIDDEN
    else{
         
        document.getElementById("phAlert").style.visibility = "hidden";
    }
}//END OF PHONEVAL


//THIS IS THE END OF THE SECTION OF MY JAVASCRIPT CODE WHERE I WRITTEN INDIVIDUAL TESTS


//THIS IS THE READY FUNCTION WHICH IS CALLED ON SUBMISSION OF THE FORM
function ready(){
    
    //THESE VARS COULD NOT BE DECLARED GLOBALY, SINCE THEY NEED TO BE SET AT THE TIME THE FUNCTION IS CALLED
     var thnCrust = document.getElementById("thin").checked,
            dpDish = document.getElementById("thick").checked,
         isChz = document.getElementById("cheese").checked,
            isPep = document.getElementById("pepperoni").checked,
         isSus = document.getElementById("sausage").checked,
            isGre = document.getElementById("greenpep").checked,
         isOin = document.getElementById("onion").checked,
         isExt = document.getElementById("xcheese").checked,
         flg = 0;
    
    //HERE IS AN IF ELSE BLOCK THAT CHECKS PORTIONS OF THE CODE I WAS NOT SURE HOW TO TEST INDIVIDUALY
    
    //Errors with the name
    if(document.getElementById("nameAlert").style.visibility === "hidden" && fullName.value == ""){
        document.getElementById("nameAlert").textContent = "You Must Enter A Value!";
        document.getElementById("nameAlert").style.visibility = "visible";
    }else if(document.getElementById("nameAlert").style.visibility === "visible" && fullName.value == ""){
         document.getElementById("nameAlert").textContent = "You Must Enter A Value!";
         document.getElementById("nameAlert").style.visibility = "visible";
    }else if(fullName.value != "" && document.getElementById("nameAlert").style.visibility === "visible"){
        document.getElementById("nameAlert").textContent = "You forgot to fix your error!";
        document.getElementById("nameAlert").style.visibility = "visible";
    }
    else{
        document.getElementById("nameAlert").style.visibility = "hidden";
        flg++;
    }
    
    //Errors with address
    if(document.getElementById("addrAlert").style.visibility === "hidden" && streetAddress.value == ""){
        document.getElementById("addrAlert").textContent = "You Must Enter A Value!";
        document.getElementById("addrAlert").style.visibility = "visible";
    }else if(document.getElementById("addrAlert").style.visibility === "visible" && streetAddress.value == ""){
     document.getElementById("addrAlert").textContent = "You Must Enter A Value!";
     document.getElementById("addrAlert").style.visibility = "visible";
    }else if(streetAddress.value != "" && document.getElementById("addrAlert").style.visibility === "visible"){
        document.getElementById("addrAlert").textContent = "You forgot to fix your error!";
        document.getElementById("addrAlert").style.visibility = "visible";
    }else{
        document.getElementById("addrAlert").style.visibility = "hidden";
        flg++;
    }
    
    //Errors with city
    if(document.getElementById("citAlert").style.visibility === "hidden" && elCity.value == ""){
       document.getElementById("citAlert").textContent = "You Must Enter A Value!";
       document.getElementById("citAlert").style.visibility = "visible";
    }else if(document.getElementById("citAlert").style.visibility === "visible" && elCity.value == ""){
         document.getElementById("citAlert").textContent = "You Must Enter A Value!";
         document.getElementById("citAlert").style.visibility = "visible";
    }else if (elCity.value != "" && document.getElementById("citAlert").style.visibility === "visible"){
       document.getElementById("citAlert").textContent = "You forgot to fix your error!!";
       document.getElementById("citAlert").style.visibility = "visible"
    }
    else{
        document.getElementById("citAlert").style.visibility = "hidden";
        flg++;
    }
    
    //Errors with Email
    if(document.getElementById("emAlert").style.visibility === "hidden" && email.value == ""){
        document.getElementById("emAlert").textContent = "You Must Enter A Value!";
        document.getElementById("emAlert").style.visibility = "visible";
    }else if(document.getElementById("emAlert").style.visibility === "visible" && email.value == ""){
         document.getElementById("emAlert").textContent = "You Must Enter A Value!";
         document.getElementById("emAlert").style.visibility = "visible";			   
    }else if(email.value != "" && document.getElementById("emAlert").style.visibility === "visible"){
        document.getElementById("emAlert").textContent = "You Must Enter A Value!";
        document.getElementById("emAlert").style.visibility = "visible";
    }else{
        document.getElementById("emAlert").style.visibility = "hidden";
        flg++;
    }
    
    //Errors with Phone
    if(document.getElementById("phAlert").style.visibility === "hidden" && phone.value == ""){
       document.getElementById("phAlert").textContent = "You Must Enter A Value!";
       document.getElementById("phAlert").style.visibility = "visible";
    }else if(document.getElementById("phAlert").style.visibility === "visible" && phone.value == ""){
         document.getElementById("phAlert").textContent = "You Must Enter A Value!";
         document.getElementById("phAlert").style.visibility = "visible";
    }
    else if(phone.value != "" && document.getElementById("phAlert").style.visibility === "visible"){
       document.getElementById("phAlert").textContent = "You Must Enter A Value!";
       document.getElementById("phAlert").style.visibility = "visible";
    }else{
       document.getElementById("phAlert").style.visibility = "hidden";
       flg++;
    }
    
    //Errors with radio
    if(thnCrust === false && dpDish === false){
        document.getElementById("crustSizeAlert").textContent = "You Must Select A Value!";
        document.getElementById("crustSizeAlert").style.visibility = "visible";
        
    }else{
        document.getElementById("crustSizeAlert").style.visibility = "hidden";
        flg++;
    }
    
    //Errors with size
    if(wasSizeClicked == 0){
        document.getElementById("pizzaSizeDropDownAlert").textContent = "You Must Select A Value!";
        document.getElementById("pizzaSizeDropDownAlert").style.visibility = "visible";
        
    }else{
       document.getElementById("pizzaSizeDropDownAlert").style.visibility = "hidden";
       flg++;
    }
    
    //Errors with toppings
    if(isChz === false && isPep === false && isSus === false && isGre === false && isOin === false && isExt === false){
        document.getElementById("toppingsCheckBoxAlert").textContent = "You Must Select A Value!";
        document.getElementById("toppingsCheckBoxAlert").style.visibility = "visible";
        
    }else{
        document.getElementById("toppingsCheckBoxAlert").style.visibility = "hidden";
        flg++;
    }
    
    if(flg == 8){
     return true;
    }else{
        return false;
    }

}//This is the end of the ready() function


//THIS IS MY ODD WAY OF CHECKING IF THE CHECKBOX WAS CLICKED
function wasClicked(){
    //THIS VAR WAS DECLARED AND INIT WITH A GLOB SCOPE
    ++wasSizeClicked;
}