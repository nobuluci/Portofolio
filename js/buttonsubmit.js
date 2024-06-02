function message()
{
    var Name = document.getElementById('name');
    var email = document.getElementById('email');
    var msg = document.getElementById('msg');
    const success = document.getElementById('success');
    const danger = document.getElementById('danger');

    if(Name.value === ' ' || email.value === '' || msg.value === '')
    {
        danger.style.display = 'block';
   }

   else{
    setTimeout(() => {
        Name.value = '';
        email.value = '';
        msg.value = '';
    }, 2000);

    success.style.display = 'block'
  }

  setTimeout(() => {
    danger.style.display = 'none';
    success.style.display = 'none';
  }, 2000)
}
/*==================== Email Recive ============================*/
function sendMail() {
  var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("msg").value,
  };

const serviceID = "service_v0wip5m";
const templateID = "template_igyzsvo";

emailjs
   .send(serviceID,templateID,params)
   .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("msg").value = "";
      console.log(res);
  })
.catch((err) => console.log(err));
}