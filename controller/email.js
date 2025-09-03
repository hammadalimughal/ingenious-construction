const express = require('express')
const router = express.Router()
const sendMail = require('../controller/sendmail')


router.post('/sendmail', async (req, res) => {
    try {
        const { firstName, lastName, subject, email, phone, message } = req.body
        const ipAddress = req.clientIp
        const userInfoResponse = await fetch(`https://ipinfo.io/${ipAddress}/json`);
        var result
        if(userInfoResponse.ok){
            result = await userInfoResponse.json()
        }
        const { city, region, country, loc, org, postal, timezone } = result ? result : {}
        const html = `
    <div style="border-top:0px solid transparent;border-left:0px solid transparent;border-bottom:0px solid transparent;border-right:0px solid transparent;padding-top:5px;padding-bottom:5px;padding-right:0px;padding-left:0px">
        <div
            style="color:#555555;font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;line-height:1.2;padding-top:30px;padding-right:25px;padding-bottom:0px;padding-left:25px">
            <div
            style="line-height:1.2;font-size:12px;color:#555555;font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif">
            <p style="margin:0;font-size:24px;line-height:1.2;word-break:break-word;margin-top:0;margin-bottom:0">
                <span style="font-size:24px"><strong>New form submission on Ingenious Construction</strong></span>
            </p>
            </div>
        </div>
        <div
            style="color:#000000;font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;line-height:1.5;padding-top:10px;padding-right:25px;padding-bottom:10px;padding-left:25px">
            <div
            style="line-height:1.5;font-size:12px;color:#000000;font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif">
            <p style="margin:0;font-size:14px;line-height:1.5;word-break:break-word;margin-top:0;margin-bottom:0">
                <span style="color:#999999">First Name</span>
            </p>
            <span
                style="margin:0;font-size:16px;line-height:1.5;word-break:break-word;margin-top:0;margin-bottom:0;font-size:16px">
                ${firstName}
            </span>
            </div>
        </div>
        <div
            style="color:#000000;font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;line-height:1.5;padding-top:10px;padding-right:25px;padding-bottom:10px;padding-left:25px">
            <div
            style="line-height:1.5;font-size:12px;color:#000000;font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif">
            <p style="margin:0;font-size:14px;line-height:1.5;word-break:break-word;margin-top:0;margin-bottom:0">
                <span style="color:#999999">Last Name</span>
            </p>
            <span
                style="margin:0;font-size:16px;line-height:1.5;word-break:break-word;margin-top:0;margin-bottom:0;font-size:16px">
                ${lastName}
            </span>
            </div>
        </div>
        <div
            style="color:#000000;font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;line-height:1.5;padding-top:10px;padding-right:25px;padding-bottom:10px;padding-left:25px">
            <div
            style="line-height:1.5;font-size:12px;color:#000000;font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif">
            <p style="margin:0;font-size:14px;line-height:1.5;word-break:break-word;margin-top:0;margin-bottom:0">
                <span style="color:#999999">Email</span>
            </p>
            <span
                style="margin:0;font-size:16px;line-height:1.5;word-break:break-word;margin-top:0;margin-bottom:0;font-size:16px">
                <a href="mailto:${email}">${email}</a>
            </span>
            </div>
        </div>
        <div
            style="color:#000000;font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;line-height:1.5;padding-top:10px;padding-right:25px;padding-bottom:10px;padding-left:25px">
            <div
            style="line-height:1.5;font-size:12px;color:#000000;font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif">
            <p style="margin:0;font-size:14px;line-height:1.5;word-break:break-word;margin-top:0;margin-bottom:0">
                <span style="color:#999999">Phone</span>
            </p>
            <span
                style="margin:0;font-size:16px;line-height:1.5;word-break:break-word;margin-top:0;margin-bottom:0;font-size:16px">
                <a href="tel:${phone}">${phone}</a>
            </span>
            </div>
        </div>
        <div
            style="color:#000000;font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;line-height:1.5;padding-top:10px;padding-right:25px;padding-bottom:10px;padding-left:25px">
            <div
            style="line-height:1.5;font-size:12px;color:#000000;font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif">
            <p style="margin:0;font-size:14px;line-height:1.5;word-break:break-word;margin-top:0;margin-bottom:0">
                <span style="color:#999999">Subject</span>
            </p>
            <span
                style="margin:0;font-size:16px;line-height:1.5;word-break:break-word;margin-top:0;margin-bottom:0;font-size:16px">
                ${subject}
            </span>
            </div>
        </div>
        <div
            style="color:#000000;font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;line-height:1.5;padding-top:10px;padding-right:25px;padding-bottom:10px;padding-left:25px">
            <div
            style="line-height:1.5;font-size:12px;color:#000000;font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif">
            <p style="margin:0;font-size:14px;line-height:1.5;word-break:break-word;margin-top:0;margin-bottom:0">
                <span style="color:#999999">Message</span>
            </p>
            <span
                style="margin:0;font-size:16px;line-height:1.5;word-break:break-word;margin-top:0;margin-bottom:0;font-size:16px">
                ${message}
            </span>
            </div>
        </div>
        <div
            style="color:#000000;font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;line-height:1.5;padding-top:10px;padding-right:25px;padding-bottom:10px;padding-left:25px">
            <div
            style="line-height:1.5;font-size:12px;color:#000000;font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif">
            <p style="margin:0;font-size:14px;line-height:1.5;word-break:break-word;margin-top:0;margin-bottom:0">
                <span style="color:#999999">Ip Address</span>
            </p>
            <span
                style="margin:0;font-size:16px;line-height:1.5;word-break:break-word;margin-top:0;margin-bottom:0;font-size:16px">
                ${ipAddress}
            </span>
            </div>
        </div>
        <div
            style="color:#000000;font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;line-height:1.5;padding-top:10px;padding-right:25px;padding-bottom:10px;padding-left:25px">
            <div
            style="line-height:1.5;font-size:12px;color:#000000;font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif">
            <p style="margin:0;font-size:14px;line-height:1.5;word-break:break-word;margin-top:0;margin-bottom:0">
                <span style="color:#999999">City</span>
            </p>
            <span
                style="margin:0;font-size:16px;line-height:1.5;word-break:break-word;margin-top:0;margin-bottom:0;font-size:16px">
                ${city}
            </span>
            </div>
        </div>
        <div
            style="color:#000000;font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;line-height:1.5;padding-top:10px;padding-right:25px;padding-bottom:10px;padding-left:25px">
            <div
            style="line-height:1.5;font-size:12px;color:#000000;font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif">
            <p style="margin:0;font-size:14px;line-height:1.5;word-break:break-word;margin-top:0;margin-bottom:0">
                <span style="color:#999999">Region</span>
            </p>
            <span
                style="margin:0;font-size:16px;line-height:1.5;word-break:break-word;margin-top:0;margin-bottom:0;font-size:16px">
                ${region}
            </span>
            </div>
        </div>
        <div
            style="color:#000000;font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;line-height:1.5;padding-top:10px;padding-right:25px;padding-bottom:10px;padding-left:25px">
            <div
            style="line-height:1.5;font-size:12px;color:#000000;font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif">
            <p style="margin:0;font-size:14px;line-height:1.5;word-break:break-word;margin-top:0;margin-bottom:0">
                <span style="color:#999999">Country</span>
            </p>
            <span
                style="margin:0;font-size:16px;line-height:1.5;word-break:break-word;margin-top:0;margin-bottom:0;font-size:16px">
                ${country}
            </span>
            </div>
        </div>
        <div
            style="color:#000000;font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;line-height:1.5;padding-top:10px;padding-right:25px;padding-bottom:10px;padding-left:25px">
            <div
            style="line-height:1.5;font-size:12px;color:#000000;font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif">
            <p style="margin:0;font-size:14px;line-height:1.5;word-break:break-word;margin-top:0;margin-bottom:0">
                <span style="color:#999999">Location</span>
            </p>
            <span
                style="margin:0;font-size:16px;line-height:1.5;word-break:break-word;margin-top:0;margin-bottom:0;font-size:16px">
                ${loc}
            </span>
            </div>
        </div>
        <div
            style="color:#000000;font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;line-height:1.5;padding-top:10px;padding-right:25px;padding-bottom:10px;padding-left:25px">
            <div
            style="line-height:1.5;font-size:12px;color:#000000;font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif">
            <p style="margin:0;font-size:14px;line-height:1.5;word-break:break-word;margin-top:0;margin-bottom:0">
                <span style="color:#999999">Organization</span>
            </p>
            <span
                style="margin:0;font-size:16px;line-height:1.5;word-break:break-word;margin-top:0;margin-bottom:0;font-size:16px">
                ${org}
            </span>
            </div>
        </div>
        <div
            style="color:#000000;font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;line-height:1.5;padding-top:10px;padding-right:25px;padding-bottom:10px;padding-left:25px">
            <div
            style="line-height:1.5;font-size:12px;color:#000000;font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif">
            <p style="margin:0;font-size:14px;line-height:1.5;word-break:break-word;margin-top:0;margin-bottom:0">
                <span style="color:#999999">Postal</span>
            </p>
            <span
                style="margin:0;font-size:16px;line-height:1.5;word-break:break-word;margin-top:0;margin-bottom:0;font-size:16px">
                ${postal}
            </span>
            </div>
        </div>
        <div
            style="color:#000000;font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif;line-height:1.5;padding-top:10px;padding-right:25px;padding-bottom:10px;padding-left:25px">
            <div
            style="line-height:1.5;font-size:12px;color:#000000;font-family:Open Sans,Helvetica Neue,Helvetica,Arial,sans-serif">
            <p style="margin:0;font-size:14px;line-height:1.5;word-break:break-word;margin-top:0;margin-bottom:0">
                <span style="color:#999999">Time Zone</span>
            </p>
            <span
                style="margin:0;font-size:16px;line-height:1.5;word-break:break-word;margin-top:0;margin-bottom:0;font-size:16px">
                ${timezone}
            </span>
            </div>
        </div>
    </div>`
        const info = await sendMail('info@ingenious-construction.com', subject, html)
        res.status(200).redirect('/thankyou')
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router