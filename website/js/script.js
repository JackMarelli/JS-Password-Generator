function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function genera() {
  let lenght = document.getElementById("psw-len").value;
  let result = "";

  if (lenght == "" || lenght <= 0 || lenght > 20) {
    alert("Insert a correct lenght!");
  } else {
    let checkLowercase = document.getElementById("lowercase").checked;
    let checkUppercase = document.getElementById("uppercase").checked;
    let checkNumbers = document.getElementById("numbers").checked;

    let uppercases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowecases = "abcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789";

    if (checkLowercase || checkUppercase || checkNumbers) {
        let i = 0;
    while (i < lenght) {
      let rand = getRandomInt(3); //rand 0-2

      //alert("for" + i + rand);

      if (rand == 0 && checkUppercase) {
        //uppercases
        result += uppercases.charAt(getRandomInt(uppercases.length));
        i++;
      } else if (rand == 1 && checkLowercase) {
        //lowercases
        result += lowecases.charAt(getRandomInt(lowecases.length));
        i++;
      } else if (rand == 2 && checkNumbers) {
        //numbers
        result += numbers.charAt(getRandomInt(numbers.length));
        i++;
      }
    }

    document.getElementById("resultp").innerHTML = result;
    }
    else {
        alert("Select at least a char type option!");
    }
  }
}

function copia() {
  /* Get the text field */
  var copyText = document.getElementById("resultp").innerHTML;

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText);

  /* Alert the copied text */
  alert("Copied the text: " + copyText);
}