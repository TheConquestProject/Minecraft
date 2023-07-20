function sendMail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    
    var templateParams = {
        name: name,
        email: email,
        message: message,
        reply_to: email
    };
    
    // Utilisez emailjs.sendForm pour envoyer l'e-mail
    emailjs.sendForm("service_64d12im", "template_ejxp884", templateParams)
        .then(function(response) {
            // Gérer le succès de l'envoi de l'e-mail ici
            alert("Email envoyé avec succès!");
        })
        .catch(function(error) {
            // Gérer les erreurs d'envoi de l'e-mail ici
            alert("Erreur lors de l'envoi de l'e-mail");
        });

    return false; // Empêche le formulaire de se soumettre normalement
}
