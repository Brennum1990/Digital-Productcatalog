export default function filter() {
	const movieCard = document.querySelectorAll('');
	const movieDetails = document.getElementById('');

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

// I failed at the attempt of referencing Sanitys genre id to my navbar buttons :/