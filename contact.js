// Add your Gmail email address and the email subject
const recipientEmail = "riyajkafar@gmail.com";
const emailSubject = "New Contact Form Submission";

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const formData = new FormData(this);
    const formDataEntries = Array.from(formData.entries());
    
    const data = {};
    formDataEntries.forEach(entry => {
        data[entry[0]] = entry[1];
    });
    
    const emailContent = generateEmailContent(data);
    sendEmail(recipientEmail, emailSubject, emailContent);
    
    this.reset();
});

function generateEmailContent(data) {
    let content = "";
    
    for (let key in data) {
        content += `${key}: ${data[key]}\n`;
    }
    
    return content;
}

function sendEmail(email, subject, content) {
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(content)}`;
    window.location.href = mailtoLink;
}
