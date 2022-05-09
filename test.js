const nodemailer = require('nodemailer');
const email = {
    host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "c37d668888d38f",
    pass: "3cbdf842fbb2e5"
    }
};

const send = async (option) =>{
    nodemailer.createTransport(email).sendMail(option, (error, info) =>{
        if(error){
            console.log(error)
        }else {
            console.log(info);
            return info.response;
        }
    });
};



let email_data = {
    from: 'chul8747@dsm.hs.kr',
    to: 'dlwjdgh1209@dsm.hs.kr',
    subject: '테스트 메일 입니다.',
    text: '정호티비'
}

send(email_data);