var randomstring = require("randomstring");


function generateOtp(otp_len)
{
    const secretToken = randomstring.generate({
    length:otp_len,
    charset: 'numeric'
    });

return (secretToken);
}


exports.generateOtp = generateOtp;

    