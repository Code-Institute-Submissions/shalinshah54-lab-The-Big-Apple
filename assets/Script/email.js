function sendMail(contactForm) {
    emailjs.send("service_hkgihaf","template_tlfrord", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("Message Sent", response);
            document.getElementById("contactForm").reset();
            document.getElementById("onSubmitText").innerText = "Your message has been sent!";
        },
        function(error) {
            console.log("Message not Sent", error);
            document.getElementById("onSubmitText").innerText = "Please ensure that all fields are filled in correctly";
            document.getElementById("onSubmitText").style.color = "red";
        });
    return false;
}