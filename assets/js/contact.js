function sendEnquiry(enquiryForm) {
    emailjs.send("cgpalmer91_gmail_com", "pokemon_template", {
        "from_name": enquiryForm.userName.value,
        "from_email": enquiryForm.userEmail.value,
        "from_consent": enquiryForm.ageConsent.value,
        "from_enquiry": enquiryForm.reasonForEnquiry.value
    })
    .then(
        function(response) {
            console.log("Success", response);
        },
        function(error){
            console.log("Failed", error);
        });
    return false;
}