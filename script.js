document.addEventListener("DOMContentLoaded", function onDomReady() { //Wait till the html is all loaded(except for vids and imgs, and then be ready on command)
    
    var answer = 13;  

    // Grab all the elements by their IDs
    var inputField = document.getElementById("captcha-input");
    var submitButton = document.getElementById("captcha-btn");
    var errorMsg = document.getElementById("captcha-error");
    var contact = document.getElementById("contact-info");
    var puzzle = document.getElementById("puzzle");

    // When the button is clicked, run this function:
    submitButton.addEventListener("click", function onSubmitClick() {
      //  Get what the user typed (it's a string)
      var userText = inputField.value;

      //  Turn it into a number (base 10)
      var userNumber = parseInt(userText, 10); // same as number()

      //  Compare it to the correct answer
      if (userNumber === answer) {
        //  If correct, hide the puzzle and show contacts
        puzzle.style.display = "none";
        contact.style.display = "block";
      } else {
        //  If wrong, show the error message
        errorMsg.style.display = "block";
      }
    });
  });
  