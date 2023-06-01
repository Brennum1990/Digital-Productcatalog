import { sanity } from "../sanity.js";
import movieDetails from "./movie-details.js";

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
		genre[]-> {name, _id}
	}`;

	const movieList = await sanity.fetch(query); 
		console.log(movieList)

	function renderMovieList() {
		for (const movie of movieList) {
			const movieCard = document.createElement('a');
			const movieImage = document.createElement('img');
			const movieInformation = document.createElement('div');
			const movieTitle = document.createElement('h1');
			const movieList = document.createElement('ul');
			const movieTagline = document.createElement('li');
			const movieDirector = document.createElement('li');
			const movieReleaseDate = document.createElement('li');
			const movieRuntime = document.createElement('li');
			const moviePlotSummary = document.createElement('li');
			const movieGenre = document.createElement('li');

			movieTitle.innerText = movie.title;
			movieImage.src = movie.imageUrl;
			movieCard.setAttribute('alt', `${movie.title}`);
			movieCard.setAttribute('data-filter', `${movie.genre[0].name}`);
			movieTagline.innerText = movie.tagline;
			movieReleaseDate.innerText = movie.releaseDate;
			movieDirector.innerText = movie.director;
			movieRuntime.innerText = movie.runtime; 
			moviePlotSummary.innerText = movie.plotSummary;
			movieGenre.innerText = movie.genre[0].name;

			movieContainer.appendChild(movieCard);
				movieCard.appendChild(movieImage);
			movieContainer.appendChild(movieInformation);
				movieInformation.appendChild(movieTitle);
				movieInformation.appendChild(movieList);
				movieList.appendChild(movieTagline);
				movieList.appendChild(movieDirector);
				movieList.appendChild(movieReleaseDate);
				movieList.appendChild(movieRuntime);
				movieList.appendChild(moviePlotSummary);
				movieList.appendChild(movieGenre);

			movieCard.className = 'movie-list__poster-card';
			movieImage.className = 'movie-list__poster-image';
			movieInformation.className = 'movie-list__information';
			movieTitle.className = 'movie-list__title';
			movieList.className = 'movie-list__list';
			movieDirector.className = 'movie-list__director';
			movieReleaseDate.className = 'movie-list__release-date';
			movieRuntime.className = 'movie-list__runtime';
			movieTagline.className = 'movie-list__tagline';
			moviePlotSummary.className = 'movie-list__plot-summary';
			movieGenre.className = 'movie-list__genre';
		}
	}
	renderMovieList();
	movieDetails();
}