function sendMail() {

    var params = {
        name: document.getElementById('NameUser').value,
        email: document.getElementById('EmailUser').value,
        contact: document.getElementById('ContactUser').value
    };

    console.log(params);

    grecaptcha.ready(function() {
        grecaptcha.execute('6LdRv6MpAAAAAOaNpmlgZJd-V2zBIyfsBdIrgdkB', {action: 'submit'}).then(async function(token) {
            // Add your logic to submit to your backend server here.
            console.log(token +  ' .... ');

            const verificationResult = await verifyRecaptcha(token);
            console.log(verificationResult);

            // $.ajax({
            //     type: "POST",
            //     url: 'https://www.google.com/recaptcha/api/siteverify',
            //     headers: {
            //         'Access-Control-Allow-Origin': '*',
            //         'Content-Type': 'application/json'
            //     },
            //     data: {
            //         "secret": "6LdRv6MpAAAAAHknp3Ni6dnsn4HFAU9eAWH8GbJ2",
            //         "token" : token,
            //     },
            //     success: function(data) {
            //         if(data.response.success) {
            //             window.recaptchaScore = data.response.score;
            //             console.log('user score ' + data.response.score)
            //         }
            //     },
            //     error: function() {
            //         console.log('error while getting google recaptcha score!')
            //     }
            // });

        });
      });

    // if (validateEmail(params.email)) {
    //     var serviceId = 'service_uxdslki';
    //     var templateId = 'template_qots349';

    //     emailjs.send(serviceId, templateId, params)
    //         .then((res) => {
    //             console.log(res);
    //             window.location.href = 'https://lms.ustadam.org/courses/python-master-class';
    //         })
    //         .catch((error) => console.log(error));
    // }
    // else {
    //     document.getElementById('EmailUser').focus();
    // }

}

async function verifyRecaptcha(token) {
    const response = await fetch("/.netlify/functions/recaptcha?response=" + token);
    const data = await response.json();
    return data;
}

function validateEmail(email) {
    // Regular expression for basic email validation
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}