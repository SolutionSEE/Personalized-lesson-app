import moment from 'moment';

export const formatTime = (second, currentTime) => {
	const now = currentTime ? moment(currentTime) : moment();
	const createdAt = moment.unix(second);

	const diffInSeconds = now.diff(createdAt, 'seconds');

	const minuteThreshold = 60;
	const hourThreshold = 60 * 60;
	const dayThreshold = 60 * 60 * 24;

	let formattedTime;

	if (diffInSeconds < minuteThreshold) {
		formattedTime = `${diffInSeconds}s ago`;
	} else if (diffInSeconds < hourThreshold) {
		const minutes = Math.floor(diffInSeconds / 60);
		formattedTime = `${minutes}min${minutes > 1 ? 's' : ''} ago`;
	} else if (diffInSeconds < dayThreshold) {
		const hours = Math.floor(diffInSeconds / 3600);
		formattedTime = `${hours} hour${hours > 1 ? 's' : ''} ago`;
	} else {
		const days = Math.floor(diffInSeconds / (3600 * 24));
		formattedTime = `${days} day${days > 1 ? 's' : ''} ago`;
	}

	return formattedTime;
};
