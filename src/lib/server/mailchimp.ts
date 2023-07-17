import { PRIVATE_MAILCHIMP_API_KEY, PRIVATE_MAILCHIMP_LIST_ID } from '$env/static/private';
import axios from 'axios';

export const subscribe = async (email: string) => {
	const url = `https://us9.api.mailchimp.com/3.0/lists/${PRIVATE_MAILCHIMP_LIST_ID}/members`;
	try {
		const response = await axios.post(
			url,
			{
				email_address: email,
				status: 'subscribed',
				tags: ['waitlist']
			},
			{
				auth: {
					username: 'sheyzi',
					password: PRIVATE_MAILCHIMP_API_KEY
				}
			}
		);
		return response;
	} catch (err) {
		throw err;
	}
};
