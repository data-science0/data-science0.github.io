function sendMail(){
    var params = {
        name: document.getElementById('NameUser'),
        email: document.getElementById('EmailUser'),
        contact: document.getElementById('ContactUser')
    };
    var serviceId = 'service_uxdslki';
    var templateId = 'template_qots349';

    emailjs.send(serviceId, templateId, params).then((res) => {
        console.log(res);
    })
    .catch((error) => console.log(error));
}