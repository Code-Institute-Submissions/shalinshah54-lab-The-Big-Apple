//credit to tony-reddington 
function sendMail(contactForm) {
  emailjs.send("the-Big-Apple","template_tlfrord", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "message": contactForm.message.value // const for the emailjs
      })
      .then(
        function (response) {
          console.log("Message sent succesfully", response);
          document.getElementById("contactForm").reset(); // reset the form if the msg passes through
          document.getElementById("onSubmitText").innerText = "Your message has been sent!"; // calling a function if the message is correct.
        },
        function (error) {
          console.log("Message not sent", error);
          document.getElementById("onSubmitText").innerText = "Please ensure that all fields are filled in correctly";
          document.getElementById("onSubmitText").style.color = "red"; // if an error occurs then the msg pops with a red text
        }
      );
    return false;
  }