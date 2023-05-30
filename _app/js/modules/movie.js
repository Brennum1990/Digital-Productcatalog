import { sanity } from "../sanity.js";

export default async function movieList() {
	const movieContainer = document.querySelector('.movie-list');
	const query = `*[_type == 'movie'] | order(releaseDate asc) {
		title,
		slug,
		director,
		releaseDate,
		runtime,
		"imageUrl": poster.asset->url,
		tagline,
		plotSummary,
		externalId,
		genre,
	}`;

	const movieList = await sanity.fetch(query); 
		console.log(movieList)

	function renderMovieList() {
		for (const movie of movieList) {
			const movieCard = document.createElement('div');
			const movieImage = document.createElement('img');
			
			const movieInformation = document.createElement('div');
			const movieTitle = document.createElement('h1');
			const movieDirector = document.createElement('p');
			const movieReleaseDate = document.createElement('p');
			const movieRuntime = document.createElement('p');
			const moviePlotSummary = document.createElement('p');

			movieTitle.innerText = movie.title;
			movieImage.src = movie.imageUrl;
			movieCard.setAttribute('alt', `${movie.title}`);
			movieReleaseDate.innerText = movie.releaseDate;
			movieDirector.innerText = movie.director;
			movieRuntime.innerText = movie.runtime; 
			moviePlotSummary.innerText = movie.plotSummary;
		
			movieContainer.appendChild(movieCard);
			movieCard.appendChild(movieImage);
			movieContainer.appendChild(movieInformation);
			movieInformation.appendChild(movieTitle);

			movieCard.className = 'movie-list__poster-card';
			movieImage.className = 'movie-list__poster-image';
			movieInformation.className = 'movie-list__information';
			movieTitle.className = 'movie-list__title';
			movieDirector.className = 'movie-list__director';
			movieReleaseDate.className = 'movie-list__release-date';
		}
	}
	renderMovieList();
}