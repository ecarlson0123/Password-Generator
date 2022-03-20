// Assignment Code
var lowercase="abcdefghijklmnopqrstuvwxyz"
var capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "0123456789"
var specialCharacters= ["!",'"',"#","$","%","&","'","(",")","*","+","," ,"-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"]

var generateBtn = document.querySelector("#generate");

var passwordInfo = {
  length: 0,
  text:"empty" ,
  special:false,
  num:false ,
  lower:false ,
  caps:false ,
  reset: function(){
    this.length= 0;
    this.text="empty" ;
    this.special=false;
    this.num=false ;
    this.lower=false ;
    this.caps=false ;

  }

}

var test

var setLength = function (){
  var len=window.prompt("How many characters would you like your password to be?");
  if(Number.isInteger(Number(len))){
    if (len<8 || len>128){
      window.alert("Your input does not fit the criteria. \nYour input must be: \n-An integer between 8 and 128.");
      setLength();
    }
    else{
      var confirmLength = window.confirm("Are you sure you want your password to be " + len + " characters long?")
      if(confirmLength){
        len=Number(len);
        passwordInfo.length=len
      }
      else{
        setLength();
      }
    }
  }
  else{
    window.alert("Your input does not fit the criteria. \nYour input must be: \n-An integer between 8 and 128.");
    setLength();
  }
}

var setCriteria = function(){
  var confirmSpecial= window.confirm("Use special characters in your password?");
  var confirmCaps= window.confirm("Use capital letters in your password?");
  var confirmLower= window.confirm("Use lowercase letters in your password?");
  var confirmNumbers= window.confirm("Use numbers in your password?");
  var criteria = [confirmSpecial, confirmCaps, confirmLower, confirmNumbers]
  var prompt = "Please confirm these criteria are correct. If incorrect, select CANCEL."
  var types=0;
  for(i=0; i<criteria.length; i++){
    var criteriaLoop = criteria[i];
    if(criteriaLoop){
      types+=1
    }
    switch(i){
      case 0:
        prompt=prompt+"\n-Special characters: ";
        if(criteriaLoop){
          prompt=prompt+"YES";
        }
        else{
          prompt=prompt+"NO";
        }
        break;
      case 1:
        prompt=prompt+"\n-Capital letters: ";
        if(criteriaLoop){
          prompt=prompt+"YES";
        }
        else{
          prompt=prompt+"NO";
        }
        break;
      case 2:
        prompt=prompt+"\n-Lowercase letters: ";
        if(criteriaLoop){
          prompt=prompt+"YES";
        }
        else{
          prompt=prompt+"NO";
        }
        break;
      case 3:
        prompt=prompt+"\n-Numbers: ";
        if(criteriaLoop){
          prompt=prompt+"YES";
        }
        else{
          prompt=prompt+"NO";
        }
        break;
    }
  }
  if(types<1){
    window.alert("Please select at least one data typa to include in your password.");
    setCriteria();
  }
  else{
    var confirmCriteria=window.confirm(prompt);
    if(confirmCriteria){
      passwordInfo.special=confirmSpecial;
      passwordInfo.caps= confirmCaps;
      passwordInfo.lower=confirmLower;
      passwordInfo.num=confirmNumbers;
    }
    else{
      setCriteria();
    }
  }
}

var createPassord= function(){
  var typeSelections=[passwordInfo.special, passwordInfo.caps, passwordInfo.lower, passwordInfo.num]
  var availableTypes = []
  for(i=0; i<typeSelections.length; i++){
    switch(i){
      case 0:
        if(typeSelections[i]){
          availableTypes.push("special")
          break;
        }
        else{
          break;
        }
      case 1:
        if(typeSelections[i]){
          availableTypes.push("caps")
          break;
        }
        else{
          break;
        }
      case 2:
        if(typeSelections[i]){
          availableTypes.push("lowercase")
          break;
        }
        else{
          break;
        }
      case 3:
        if(typeSelections[i]){
          availableTypes.push("numbers")
          break;
        }
        else{
          break;
        }

    }
  }
  for(i=0; i<=passwordInfo.length; i++){
    var charType=availableTypes[Math.floor(Math.random()*availableTypes.length)];
    console.log(passwordInfo.text);
    console.log(charType);
    console.log(i)
    switch(charType){
      case "special":
        var index=Math.floor(Math.random()*specialCharacters.length);
        passwordInfo.text=passwordInfo.text+specialCharacters[index];
        break;
      case "caps":
        var index=Math.floor(Math.random()*capitalLetters.length);
        passwordInfo.text=passwordInfo.text+capitalLetters[index];
        break;
      case "lowercase":
        var index=Math.floor(Math.random()*lowercase.length);
        passwordInfo.text=passwordInfo.text+ lowercase[index];
        break;
      case "numbers":
        var index=Math.floor(Math.random()*numbers.length);
        passwordInfo.text=passwordInfo.text+numbers[index];
        break;
  }
  }
  passwordInfo.text=passwordInfo.text.substring(5,(passwordInfo.text.length-1));
  console.log(passwordInfo.text.length)
}

var generatePassword = function (){
  passwordInfo.reset();
 setLength();
 setCriteria();
 createPassord();
 return passwordInfo.text
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
