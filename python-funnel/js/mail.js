function sendMail(){
    var params = {
        name: document.getElementById('NameUser').value,
        email: document.getElementById('EmailUser').value,
        contact: document.getElementById('ContactUser').value
    };
    var serviceId = 'service_uxdslki';
    var templateId = 'template_qots349';

    emailjs.send(serviceId, templateId, params).then((res) => {
        console.log(res);
    })
    .catch((error) => console.log(error));
}