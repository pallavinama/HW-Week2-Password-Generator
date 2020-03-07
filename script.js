var generateBtn = document.querySelector("#generate");
var finalresult = "";

// Write password to the #password input

function writePassword() {
  // Alerting the User that they will be prompted to provide criteria
  alert("you will be prompted for several password criteria selections depending on which a new, secure password will be generated");
  var passwordLength = prompt("Provide password length between 8 and 128 characters");
  var includeLowercase = confirm("Want to include lowercase?");
  var includeUppercase = confirm("Want to include uppercase?");
  var includeNumbers = confirm("Want to include numbers?");
  var includeSpecialChars = confirm("Want to include special characters?");
  var passwordText = document.querySelector("#password");

  // Check condition - If user doesn't provide any criteria they will be alerted again to select criteria
  if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecialChars)
  {
      alert("You must select atleast one character type. Please click on generate password and try again");
      passwordText.value = "Your Secure Password";
    }else
    {
     // Calling Function with above user selected values
      generatePassword(passwordLength,includeLowercase,includeUppercase,includeNumbers,includeSpecialChars);
      passwordText.value = finalresult;  
  }
}

function generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSpecialChars)
 {    
    var lowercase = 'abcdefghijklmnopqrstuvwxyz';
    var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var numbers = '0123456789';
    var specialChars = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';

    var all = "";
    var character = "";
    var password = '';

    if (includeLowercase){
        all = all + lowercase;
        character = Math.floor(Math.random() * lowercase.length);
        password += lowercase.substring(character, character + 1);
    }

    if (includeUppercase){
        all = all + uppercase;
        character = Math.floor(Math.random() * uppercase.length);
        password += uppercase.substring(character, character + 1);
    }

    if (includeNumbers){
        all = all + numbers;
        character = Math.floor(Math.random() * numbers.length);
        password += numbers.substring(character, character + 1);
    }                

    if (includeSpecialChars){
        all = all + specialChars;
        character = Math.floor(Math.random() * specialChars.length);
        password += specialChars.substring(character, character + 1);
    }                
    
    for (var i = password.length; i < pwdLength; i++) {
        character = Math.floor(Math.random() * all.length);
        alert("character is "+character+" value is "+all.substring(character, character + 1));
        password += all.substring(character, character + 1);
    }
    finalresult = password;
}

// Adding event listener to generate button
generateBtn.addEventListener("click", writePassword);
