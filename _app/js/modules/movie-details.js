export default function movieDetails() {

	const movieCard = document.querySelectorAll('.movie-list__poster-card');
	const movieDetails = document.querySelectorAll('.movie-list__information');

	movieCard.forEach((tab, index) => {
		tab.addEventListener('click', () => {
			movieDetails.forEach(content => {
				content.classList.remove('active');
			});
			movieCard.forEach((tab) => {
				tab.classList.remove('active');
			});
			movieDetails[index].classList.add('active');
			movieCard[index].classList.add('active');
		}); 
	});
}