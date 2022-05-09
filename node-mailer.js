const nodemailer = require("nodemailer");

const email = {
    "host": "smtp.mailtrap.io",
    "port": 2525,
    "secure": false,
    "auth": {
       "user": "c37d668888d38f", // generated ethereal user
      "pass": "3cbdf842fbb2e5", // generated ethereal password
    }
}

const send =  async (data) => {
    nodemailer.createTransport(email).sendMail(data, function(error, info){
        if(error) {
            console.log(error);
        }else{
            console.log(info);
            return info.response;
        }
    });
};

const content = {
    from: "chul8747@dsm.hs.kr",
    to: "dlwjdgh1207@dsm.hs.kr",
    subject: "test",
    html: "<h2>test - nodemailer</h2>"
};

send(content);