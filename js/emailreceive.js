function sendEmail(){
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("msg").value,
    };

    const serviceID = "service_l9lezik";
    const templateID = "template_ll7lkeu";

    emailjs
    .send(serviceID,templateID,params)
    .then((res) => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("msg").value = "";
        console.log(res);
        alert("Your message sent successfully!");
    })
    .catch((err) => console.log(err));
} 

