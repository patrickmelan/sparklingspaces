'use client';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';
import { Button } from './button';
import { Textarea } from './textarea';

const Contact = () => {

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const templateParams = {
		from_name: name,
		message: message,
		from_email: email
	}

	const serviceId = 'service_1v3snof';
	const publicKey = 'FP7E91fnhgZ1pIeek';
	const templateId = 'template_rm9vqbu';
	
    const recaptchaRef = useRef()

	function sendEmail(){
		//e.preventDefault();
        

		//const captchaValue = recaptchaRef.current ? recaptchaRef.current.getValue() : null;
		/*
        if (!captchaValue) {
			alert('Please complete the reCAPTCHA');
		} else {
			emailjs.send(serviceId, templateId, templateParams, publicKey)
			.then(
				() => {
					console.log('SUCCESS!');
					setEmail('');
					setMessage('');
					setName('');
				},
				(error) => {
					console.log('FAILED...', error.text);
				},
			);
		}*/

		
	};




	return (
		<div className="pb-4 md:pb-0 flex items-center justify-center">
			<div className="w-full max-w-md p-8 rounded-lg bg-white shadow-xl">
				<h2 className="mb-4 text-4xl text-turqoise">Contact Us</h2>
				<form action="#" onSubmit={sendEmail} className="space-y-8">
					<div>
						<label htmlFor="email" className="block mb-2 text-sm font-medium">Name</label>
						<input type="text" value={name} onChange={(e) => {setName(e.target.value)}} id="email" className="shadow-sm  border-turqoise border-[1px] rounded-lg text-black text-sm block w-full p-2.5" placeholder="What's your name?" required />
					</div>
					<div>
						<label htmlFor="subject" className="block mb-2 text-sm font-medium">Email</label>
						<input type="email" value={email} onChange={(e) => {setEmail(e.target.value)}} id="subject" className="block p-3 w-full text-sm  border-turqoise border-[1px] rounded-lg text-black shadow-sm" placeholder="What's your email?" required />
					</div>
					<div className="sm:col-span-2">
						<label htmlFor="message" className="block mb-2 text-sm font-medium">Your message</label>
						<Textarea id="message" maxLength={350} value={message} onChange={(e) => {setMessage(e.target.value)}}  className="block p-2.5 w-full max-h-40 text-sm border-turqoise border-[1px] rounded-lg text-black shadow-sm" placeholder="Type message here...   "></Textarea>
					</div>
					
					<Button type="submit" onClick={() => sendEmail} className="px-5 text-sm w-full font-medium text-center bg-primaryblue hover:bg-yellow-500 duration-300">Send message</Button>
				</form>
			</div>
		</div>
	);
};

export default Contact;

/**
 * <div className="flex justify-center">
						{//<ReCAPTCHA ref={recaptchaRef} sitekey={process.env.REACT_APP_SITE_KEY} />
                        }
					</div>
 */