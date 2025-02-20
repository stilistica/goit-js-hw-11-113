export function renderGallery(images) {
	const gallery = document.querySelector('.gallery');
	const markup = images
.map(image => {
  return `<div class="photo-card">
            <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
            <div class="info">
              <p><strong>Likes:</strong> ${image.likes}</p>
              <p><strong>Views:</strong> ${image.views}</p>
              <p><strong>Comments:</strong> ${image.comments}</p>
              <p><strong>Downloads:</strong> ${image.downloads}</p>
            </div>
          </div>`;
})
.join('');

	gallery.innerHTML = markup;
}