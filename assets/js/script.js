const key = 'YOUR KEY';
const playlistId = 'YOUR FAVORITE PLAYLIST ID';

fetch(
	`https://www.googleapis.com/youtube/v3/playlistItems?key=${key}&playlistId=${playlistId}&part=snippet&maxResults=30`
)
	.then((res) => res.json())
	.then((data) => {
		results(data);
	})
	.catch((err) => {
		console.log(err);
	});

const results = (data) => {
	data.items.forEach((item) => {
		const thumbnail = item.snippet.thumbnails.medium.url;
		const title = item.snippet.title;
		const desc = item.snippet.description.substring(0, 100);
		const vid = item.snippet.resourceId.videoId;

		document.getElementById('app').innerHTML += `
			<a href="https://www.youtube.com/watch?v=${vid}" target="_blank">
				<img src="${thumbnail}" alt="thumbnail" class="thumb">
				<h4>${title}</h4>
				<p>${desc}</p>
			</a>
		`;
	});
};