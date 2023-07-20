function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_7tro358";
    const templateID = "template_ejxp884";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Votre candidature a été envoyé avec succès")
  
      })
      .catch(err=>console.log(err));
  
  }