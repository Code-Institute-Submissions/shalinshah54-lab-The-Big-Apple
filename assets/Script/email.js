function sendMail(contactForm) {
    emailjs.send("service_hkgihaf","template_tlfrord", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "message_travels": contactForm.messagesummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;
}