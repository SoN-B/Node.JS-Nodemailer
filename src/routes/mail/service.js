"use strict";

const mailSender = require("../../functions/mail");

exports.sendmail = (req, res) => {
    try {
        var { email } = req.query;

        let emailParam = {
            toEmail: email, // 수신할 이메일
            subject: "New Email From SnackTime", // 메일 제목
            text: `회원님! 확인메일 보내드려요!`, // 메일 내용
        };

        mailSender.sendmail(emailParam);

        return res.status(200).json({
            message: `Authentication mail is sent to ${email}`,
        });
    } catch {
        return res.status(500).json({
            message: `Failed to send authentication email to ${email}`,
        });
    }
};
