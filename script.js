// Get references to the form and display area
var Form = document.getElementById("Resumeform");
var myresumeDynamic = document.getElementById("resume-display");
// Handle form submission
Form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload
    // Get form data, collect input values
    var nameInput = document.getElementById("name");
    var phoneInput = document.getElementById("phone");
    var emailInput = document.getElementById("email");
    var linkedInInput = document.getElementById("linkedIn");
    var websiteInput = document.getElementById("website");
    var educationInput = document.getElementById("educ");
    var experienceInput = document.getElementById("exp");
    var trainingInput = document.getElementById("train");
    var certificateInput = document.getElementById("cert");
    var awardInput = document.getElementById("award");
    var membershipInput = document.getElementById("mem");
    var skillsInput = document.getElementById("skill");
    if (!nameInput || !emailInput) {
        alert("Please fill out all required fields.");
        return;
    }
    var name = nameInput.value;
    var phone = (phoneInput === null || phoneInput === void 0 ? void 0 : phoneInput.value) || '';
    var emailAddress = emailInput.value;
    var linkedInID = (linkedInInput === null || linkedInInput === void 0 ? void 0 : linkedInInput.value) || '';
    var website = (websiteInput === null || websiteInput === void 0 ? void 0 : websiteInput.value) || '';
    var education = (educationInput === null || educationInput === void 0 ? void 0 : educationInput.value) || '';
    var experience = (experienceInput === null || experienceInput === void 0 ? void 0 : experienceInput.value) || '';
    var training = (trainingInput === null || trainingInput === void 0 ? void 0 : trainingInput.value) || '';
    var certificate = (certificateInput === null || certificateInput === void 0 ? void 0 : certificateInput.value) || '';
    var award = (awardInput === null || awardInput === void 0 ? void 0 : awardInput.value) || '';
    var membership = (membershipInput === null || membershipInput === void 0 ? void 0 : membershipInput.value) || '';
    var skills = (skillsInput === null || skillsInput === void 0 ? void 0 : skillsInput.value) || '';
    // Generate resume dynamically
    var resumeHTML = "\n    <h2><b>RESUME</b></h2>    \n    <h3><b>Personal Information</b></h3>\n    <p><b>Name:</b> ".concat(name, "</p>\n    <p><b>Phone:</b> ").concat(phone, "</p>\n    <p><b>Email:</b> ").concat(emailAddress, "</p>\n    <p><b>LinkedIn ID:</b> ").concat(linkedInID, "</p>\n    <p><b>Website:</b> ").concat(website, "</p>\n    \n    <h3><b>Educational Information</b></h3>\n    <p>").concat(education, "</p>\n\n    <h3><b>Experience</b></h3>\n    <p>").concat(experience, "</p>\n\n    <h3><b>Workshops/ Conferences/ Training/ Courses</b></h3>\n    <p>").concat(training, "</p>\n\n    <h3><b>Certifications</b></h3>\n    <p>").concat(certificate, "</p>\n\n    <h3><b>Honors and Awards</b></h3>\n    <p>").concat(award, "</p>\n\n    <h3><b>Memberships</b></h3>\n    <p>").concat(membership, "</p>\n\n    <h3><b>Skills</b></h3>\n    <p>").concat(skills, "</p>\n    ");
    // Display resume 
    if (myresumeDynamic) {
        myresumeDynamic.innerHTML = resumeHTML;
        Form.reset(); // Clear the form after submission
    }
    else {
        console.error("Resume display element not found");
    }
});
