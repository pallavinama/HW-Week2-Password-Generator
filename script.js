var generateBtn = document.querySelector("#generate");
var finalresult = "";

// Adding event listener to generate button and calling Writepassword Function
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword()
 {
  var passwordText = document.querySelector("#password");
  passwordText.value ="Your Secure Password";
  // Alerting the User that they will be prompted to provide criteria and to confirm their choices
  alert("You will be prompted with several password criteria selections:");
  var passwordLength = prompt("Please provide password length between 8 and 128 characters:");

  var passwordLengthChar = "";
  for(var i=0; i<passwordLength.length; i++){
    passwordLengthChar = passwordLength.charAt(i);
    //alert(i+" passwordLengthChar "+passwordLengthChar);
    if (passwordLengthChar != "0" && passwordLengthChar != "1" && passwordLengthChar != "2" &&
        passwordLengthChar != "3" && passwordLengthChar != "4" && passwordLengthChar != "5" && passwordLengthChar != "6" &&
        passwordLengthChar != "7" && passwordLengthChar != "8" && passwordLengthChar != "9"){
        alert("You must enter a numeric value between 8 and 128. Please click on generate password and try again");
        return;
    }
  }
  
  if (passwordLength < 8 || passwordLength > 128){
    alert("The password length must be between 8 and 128. Please click on generate password and try again");
    return;
  }

  var includeLowercase = confirm("Do you want to include Lowercase?");
  var includeUppercase = confirm("Do you want to include Uppercase?");
  var includeNumbers = confirm("Do you want to include Numbers?");
  var includeSpecialChars = confirm("Do you want to include Special characters?");
  

  // Check condition - If user doesn't provide any criteria they will be alerted again to select criteria
  if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecialChars)
  {
      alert("You must select atleast one character type. Please click on generate password and try again.");
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
    
    for (var i = password.length; i < passwordLength; i++) {
        character = Math.floor(Math.random() * all.length);
        password += all.substring(character, character + 1);
    }
    finalresult = password;
}