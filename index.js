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
    
    emailjs.sendForm("service_64d12im", "template_ejxp884", templateParams)
        .then(function(response) {
            // Remplacez le message de console.log par une alerte de succès
            alert("Email envoyé avec succès!");
            // Vous pouvez également ajouter d'autres actions à effectuer après le succès de l'envoi.
        })
        .catch(function(error) {
            // Remplacez le message de console.log par une alerte d'erreur
            alert("Erreur lors de l'envoi de l'email");
            // Vous pouvez également ajouter d'autres actions à effectuer en cas d'erreur d'envoi.
        });
}
