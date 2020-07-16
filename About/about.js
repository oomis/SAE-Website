const mailgun = require("mailgun-js");
const DOMAIN = '';
const api_key='';
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

