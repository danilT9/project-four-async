import { fetchApi } from "./api/fetchApi";

const gallery = document.querySelector(".gallery");
const searchInput = document.getElementById("search-input");
const loadMore = document.getElementById("load-more");

localStorage.setItem("per_page", 12);
let per_page = localStorage.getItem("per_page");
let value = ""
const getImageFromApi = (value, per_page) => {
    gallery.innerHTML = ""
    return fetchApi(value, per_page).then(res => {
        const layout = res.map(image =>
        `<li class="photo-item">
            <div class="photo-card">
                <img src="${image.largeImageURL}" alt="" />
                <div class="stats">
                    <p class="stats-item">
                        <i class="material-icons">${image.likes}</i>
                    </p>
                    <p class="stats-item">
                        <i class="material-icons">${image.views}</i>
                    </p>
                    <p class="stats-item">
                        <i class="material-icons">${image.comments}</i>
                    </p>
                    <p class="stats-item">
                        <i class="material-icons">${image.downloads}</i>
                    </p>
                </div>
            </div>
        </li>`
        ).join('');
        gallery.insertAdjacentHTML("beforeend", layout);
    });
}
const searchInputDelay = (e) => {
    e.preventDefault();
    value = e.target.value;
    if (value.length === 0) {
        gallery.innerHTML = ""
    }
    getImageFromApi(value, per_page);
};
searchInput.addEventListener("input", _.debounce(searchInputDelay, 500));

loadMore.addEventListener("click", e => {
    e.preventDefault();
    per_page = Number(per_page) + Number(per_page);
    localStorage.setItem("per_page", per_page);
    getImageFromApi(value, per_page);
});
