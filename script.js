// Assignment Code
var generateBtn = document.querySelector("#generate");
//declaring the variables 
var characterSelector = {
 lowerCase : "abcdefghijklmnopqrstuvwxyz",
 upperCase : "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
 numbers : '0123456789',
 specialCh : '!@#$%^&*()_:"<>?/.,;-{}[]~',
 
};

// creating function to generate the password
function generatePassword(){

  let passwordLength = 0;
  var allbut = "";
  let passwordOnProgress = "";
  let counter = 0;
  // Prompt for the password lenght until the number is between 8 and 128.
  while ( passwordLength < 8 || passwordLength > 128) {
  alert ("Please select a number between 8 and 128" );
  passwordLength = prompt("How long do you want the pasword to be?");
 };

  // Asking if the the pasword should contain lower case, upper case, numbers, and/or special characters. 
  if (lowerCaseQuest = confirm (" Would you like your pasword to contain lower case?")) {
          //passing values to a variable that will contain them all
    allbut += characterSelector.lowerCase;
        //ensuring that ther is at least one of this characters on the password
    passwordOnProgress += characterSelector.lowerCase[Math.floor(Math.random() * characterSelector.lowerCase.length)];
        //this counter will be substracted from the length selected to keep the length of the password
    counter ++;
  };

  if (upperlCaseQuest = confirm (" Would you like your pasword to contain upper case?" )) {
        //passing values to a variable that will contain them all
    allbut += characterSelector.upperCase;
        //ensuring that ther is at least one of this characters on the password
    passwordOnProgress += characterSelector.upperCase[Math.floor(Math.random() * characterSelector.upperCase.length)];
        //this counter will be substracted from the length selected to keep the length of the password
    counter ++;
  };

  if (numbersQuest = confirm (" Would you like your pasword to contain numbers?" )) {
        //passing values to a variable that will contain them all
    allbut += characterSelector.numbers;
        //ensuring that ther is at least one of this characters on the password
    passwordOnProgress += characterSelector.numbers[Math.floor(Math.random() * characterSelector.numbers.length)];
        //this counter will be substracted from the length selected to keep the length of the password
    counter ++;
  };

  if (specialChQuest = confirm (" Would you like your pasword to contain special characters?" )) {
       //passing values to a variable that will contain them all
    allbut += characterSelector.specialCh;
       //ensuring that ther is at least one of this characters on the password
    passwordOnProgress += characterSelector.specialCh[Math.floor(Math.random() * characterSelector.specialCh.length)];
       //this counter will be substracted from the length selected to keep the length of the password
    counter ++;

  }; 

    // looping to get a random letters  for the lenght selected minus the counter.
  for ( i = 0; i < passwordLength - counter; i++ ) {
    passwordOnProgress += allbut[Math.floor(Math.random() * allbut.length)];
  };


  // switching the the string into an array
  let fromStringToArray = passwordOnProgress.split("");
  // because the first letters are always going to be the options selected on that order lets shuffle the letters. 
  for ( i = 0; i < passwordOnProgress.length - 1; i++){
       //picking a random number between 0 and the length of the password 
       //leaving out the last character every time already shuffled   
      var x = Math.floor(Math.random() * (passwordOnProgress.length-1 - i));
      // storing in a new variable "z" the value of the last character 
      var z = fromStringToArray[passwordOnProgress.length -1 - i]
      // storing in the last position, not sorted yet,  the value of the random number-position 
      fromStringToArray[passwordOnProgress.length -1 - i] = fromStringToArray[x];
     // storing in the random position the value of the last position(no sorted yet)
      fromStringToArray[x] = z;  
  };
    //changing back the array to a string 
  passwordOnProgress = fromStringToArray.join("");
     //return the final password 
  return passwordOnProgress;
};



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
