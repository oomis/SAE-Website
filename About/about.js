const mailgun = require("mailgun-js");
const DOMAIN = 'https://app.mailgun.com/app/sending/domains/sandboxbf9adbf9c317472b86607b72c4f66501.mailgun.org';
const api_key=' fc322301f0fccb01b8e0c997413436b6-87c34c41-b55b4a41';
const mg = mailgun({apiKey: api_key, domain: DOMAIN});
const data = {
	from: 'Mailgun, me@samples.mailgun.org',
	to: 'shreyapd06@gmail.com',
	subject: 'Hello',
	text: 'Testing some Mailgun awesomness!'
};
mg.messages().send(data, function (error, body) {
	console.log(body);
});

