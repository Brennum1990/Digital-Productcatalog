import { sanity } from "../sanity.js";

export default async function genre() {
	const genreContainer = document.querySelector('.genre');
	const query = `*[_type == "genre"] {
		...,
		"count": count(*[_type == "movie" && references(^._id)])
	} | order(count desc) [0...11]`;

	const genres = await sanity.fetch(query); 
		console.log(genres)

	function renderGenreList() {
		for (const genre of genres) {
			const genreCard = document.createElement('li');
			const genreBtn = document.createElement('button'); 

			genreBtn.innerText = genre.name;
			genreBtn.setAttribute('alt', `${genre.name}`);
			genreBtn.setAttribute('id', `${genre.name}`);
		
			genreContainer.appendChild(genreCard);
				genreCard.appendChild(genreBtn);

			genreCard.className = 'genre__card';
			genreBtn.className = 'genre__button';
		}
	}
	renderGenreList();
}