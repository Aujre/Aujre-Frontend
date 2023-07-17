import { PRIVATE_MAILERLITE_TOKEN, PRIVATE_MAILERLITE_GROUP_ID } from '$env/static/private';
import axios from 'axios';

export const subscribe = async (email: string) => {
	const url = `https://connect.mailerlite.com/api/subscribers`;
	try {
		const response = await axios.post(
			url,
			{
				email,
				groups: [PRIVATE_MAILERLITE_GROUP_ID]
			},
			{
				headers: {
					Authorization: `Bearer ${PRIVATE_MAILERLITE_TOKEN}`
				}
			}
		);
		return response;
	} catch (err) {
		throw err;
	}
};
