// Assignment Code
var generateBtn = document.querySelector("#generate");



// This function was created to select the type of characters and to call itself if no type of characters were selected 
function typeOfCharacters () {
    //declaring the variables 
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = '0123456789';
    var specialCh = '!@#$%^&*()_:"<>?/.,;-{}[]~';
    
    // Asking if the the password should contain lower case, upper case, numbers, and/or special characters. 
    if (confirm (" Would you like your password to contain lower case characters?")) {
            //passing values to a variable that will contain them all
        allbut += lowerCase;
            //ensuring that ther is at least one of this characters on the password
        passwordOnProgress += lowerCase[Math.floor(Math.random() * lowerCase.length)];
            //this counter will be substracted from the length selected to keep the length of the password
        counter ++;
    };

    if (confirm (" Would you like your password to contain upper case characters?" )) {
          //passing values to a variable that will contain them all
        allbut += upperCase;
            //ensuring that ther is at least one of this characters on the password
        passwordOnProgress += upperCase[Math.floor(Math.random() * upperCase.length)];
            //this counter will be substracted from the length selected to keep the length of the password
        counter ++;
    };

    if (confirm (" Would you like your password to contain numbers?" )) {
          //passing values to a variable that will contain them all
        allbut += numbers;
            //ensuring that ther is at least one of this characters on the password
        passwordOnProgress += numbers[Math.floor(Math.random() * numbers.length)];
            //this counter will be substracted from the length selected to keep the length of the password
        counter ++;
    };

    if (confirm (" Would you like your password to contain special characters?" )) {
        //passing values to a variable that will contain them all
        allbut += specialCh;
          //ensuring that ther is at least one of this characters on the password
        passwordOnProgress += specialCh[Math.floor(Math.random() * specialCh.length)];
          //this counter will be substracted from the length selected to keep the length of the password
        counter ++;
    }; 
    // if no character types were selected then called 
  if ( allbut === "") {
        alert ( "At least one character type has to be selected" );
        typeOfCharacters();
      };
    };


//  function to generate the password
function generatePassword(){
  let passwordLength = 0;
  allbut = "";
  passwordOnProgress = "";
  counter = 0;
  // Prompt for the password lenght until the number is between 8 and 128.
  while ( passwordLength < 8 || passwordLength > 128) {
  alert ("Please select a number between 8 and 128" );
  passwordLength = prompt("How long do you want the password to be?");
 };

  //calling the function that will ask what type of characters should the passwrod contain
  typeOfCharacters();
    
    // looping to select as many random letters as the lenght selected minus the counter.
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
