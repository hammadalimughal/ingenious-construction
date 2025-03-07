const nodemailer = require('nodemailer');

const sendMail = async (to, subject, html) => {
    return new Promise(async (resolve, reject) => {
        const transporter = await nodemailer.createTransport({
            host: 'precondesigns.com',
            port: 465,
            secure: true, // Use true if you're using port 465 (SSL)
            auth: {
                user: 'noreply@precondesigns.com',
                pass: ';Wf2TrB)OvMi'
            },
            tls: {
                // Do not fail on invalid certs
                rejectUnauthorized: false
            }
        });

        // Construct the email message
        const mailOptions = {
            from: 'noreply@precondesigns.com',
            to: to,
            cc: [
                // `info@ingenious-construction.com`,
                `codemark.codes@gmail.com`
            ],
            subject: subject,
            html: html
        };
        var success = false
        // Send the email
        await transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                reject(error);
            } else {
                resolve(info);
            }
        });
        return success

    })
}

module.exports = sendMail