
//
$(document).ready(function() {
			$('#fullpage').fullpage({
				'verticalCentered': false,
				'scrollingSpeed': 600,
				'autoScrolling': false,
				'css3': true,
				'navigation': true,
				'navigationPosition': 'right',
			});
		});

// wow
$(function()
{
    new WOW().init();
    $(".rotate").textrotator();
})

const names = document.getElementById('name').value
const email = document.getElementById('email').value
const message = document.getElementById('message').value
const sendBtn = document.getElementById('send')




const botToken = '6266204092:AAHnSwz6aBXIinOlyehrbqn5bgWxP12flOA';
const chatId = '1382903105'; // The ID of the chat or user you want to send the message to
// const message = 'Hello, this is a test message!';

const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

sendBtn.addEventListener('click', ()=> {

	console.log(names)
	// axios.post(telegramApiUrl, 
	// 	chatId,
	// 	`<b> New message from portfolio</b> \n <i>Name: </i> \n</b><i>${names}\n</i> <i>Email: \n${email}</i> <i>Message: \n${message}</i>`,
	// 	{parse_mode: 'HTML'}
		
	//   )
	//   .then(response => {
	// 	console.log('Message sent:', response.data);
	//   })
	//   .catch(error => {
	// 	console.error('Error sending message:', error);
	//   });
})


