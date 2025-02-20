import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { fetchImages } from "./js/pixabay-api";
import { renderGallery } from "./js/render-functions";

const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader-wrapper');

form.addEventListener('submit', (event) => {
	event.preventDefault();

	const query = form.searchQuery.value.trim();


	if (!query) {
		iziToast.warning({
			message: "Please enter a search query",
			position: "topRight",
	});
		return;
	}

	gallery.innerHTML = '';
	loader.style.display = 'flex';


	fetchImages(query)
	.then(images => {
		if (images.length === 0) {
			iziToast.info({
				message: "Sorry, there are no images matching your search query",
				position: "topRight",
		});
			return;
		}
		console.log(images.length)
		renderGallery(images);

	})
	.catch(error => {
		iziToast.error({
			title: "Error",
			message: "Something went wrong. Please try again later.",
			position: "topRight",
	});
		console.error('Error', error);
	})
	.finally(() => {
		form.searchQuery.value = '';
		loader.style.display = 'none';
	});
});