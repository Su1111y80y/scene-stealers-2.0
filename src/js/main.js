import tmdbService from "./services/tmdbService.js";
import config from "./config.js";
import {
  addToFavorites,
  addToWatchlist,
  isInFavorites,
  isInWatchlist,
  removeFromFavorites,
  removeFromWatchlist,
} from "./dataStorage.js";
import heartRegular from "../images/heart-regular.svg";
import heartSolid from "../images/heart-solid.svg";
import bookmarkRegular from "../images/bookmark-regular.svg";
import bookmarkSolid from "../images/bookmark-solid.svg";
import mufasaPoster from "../images/poster/mufasa.png";
import kravenPoster from "../images/poster/kraven.png";
import venomPoster from "../images/poster/venom.png";

// Mobile menu functionality
const mobileMenu = document.getElementById("mobileMenu");
const hamburger = document.getElementById("hamburger-menu");
const closeMenu = document.getElementById("closeMenu");

hamburger.addEventListener("click", () =>
  mobileMenu.classList.remove("hidden")
);
closeMenu.addEventListener("click", () => mobileMenu.classList.add("hidden"));

// Search functionality
const searchForm = document.getElementById("searchForm");
const mobileSearchForm = document.getElementById("mobileSearchForm");
const movieContainer = document.getElementById("movie-cards");
const sectionTitle = document.querySelector("#movie-container h1");

async function handleSearch(e) {
  e.preventDefault();
  const query = e.target.querySelector("input").value.trim();

  if (!query) return;

  try {
    const results = await tmdbService.searchMovies(query);
    displayMovies(results.results, "Search Results");
    mobileMenu.classList.add("hidden"); // Close mobile menu if open
  } catch (error) {
    console.error("Search failed:", error);
  }
}

searchForm.addEventListener("submit", handleSearch);
mobileSearchForm.addEventListener("submit", handleSearch);

// Movie display functionality
async function displayMovies(movies, title = "Popular Movies") {
  if (!movieContainer) return;

  sectionTitle.textContent = title;
  movieContainer.innerHTML = "";

  movies.forEach((movie) => {
    const card = createMovieCard(movie);
    movieContainer.appendChild(card);
  });
}

function createMovieCard(movie) {
  const card = document.createElement("div");
  card.className =
    "bg-white rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-all";

  card.innerHTML = `
    <img class="w-full h-auto" 
         src="${
           movie.poster_path
             ? config.imageBaseUrl + movie.poster_path
             : "./images/no-poster.jpg"
         }" 
         alt="${movie.title} Poster">
    <div class="p-4">
      <h3 class="text-xl font-bold mb-2">${movie.title}</h3>
      <p class="text-gray-700">${new Date(movie.release_date).getFullYear()}</p>
      <p class="text-gray-600 mt-2">${movie.vote_average}</p>
    </div>
    <div class="flex justify-end gap-2 p-4 bg-[#a5b4fc]">
      <button class="save-btn">
        <img src="${
          isInWatchlist(movie.id) ? bookmarkSolid : bookmarkRegular
        }" class="w-6" alt="Save">
      </button>
      <button class="fav-btn">
        <img src="${
          isInFavorites(movie.id) ? heartSolid : heartRegular
        }" class="w-8" alt="Favorite">
      </button>
    </div>
  `;

  // Add event listeners
  const favBtn = card.querySelector(".fav-btn");
  const saveBtn = card.querySelector(".save-btn");

  favBtn.addEventListener("click", () => toggleFavorite(movie, favBtn));
  saveBtn.addEventListener("click", () => toggleWatchlist(movie, saveBtn));

  return card;
}

function toggleFavorite(movie, button) {
  const img = button.querySelector("img");
  if (isInFavorites(movie.id)) {
    removeFromFavorites(movie.id);
    img.src = heartRegular;
  } else {
    addToFavorites(movie);
    img.src = heartSolid;
  }
}

function toggleWatchlist(movie, button) {
  const img = button.querySelector("img");
  if (isInWatchlist(movie.id)) {
    removeFromWatchlist(movie.id);
    img.src = bookmarkRegular;
  } else {
    addToWatchlist(movie);
    img.src = bookmarkSolid;
  }
}

// Initialize with popular movies
async function init() {
  try {
    const movies = (await tmdbService.getPopularMovies()).results;
    displayMovies(movies);
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
}

init();

document.addEventListener("DOMContentLoaded", () => {
  const heroContainer = document.getElementById("hero-content");

  // Create text container with absolute positioning
  const textContainer = document.createElement("div");
  textContainer.className = "absolute inset-x-0 top-12 z-20 text-center";

  const header = document.createElement("h1");
  header.textContent = "Welcome to SceneStealers";
  header.className =
    "text-7xl text-white font-['Bungee'] opacity-0 transform translate-y-8 transition-all duration-1000";

  const subheading = document.createElement("p");
  subheading.textContent =
    "Discover the latest movies, trending stars, and all things cinema!";
  subheading.className =
    "text-2xl text-white mt-6 opacity-0 transform translate-y-8 transition-all duration-1000";

  textContainer.appendChild(header);
  textContainer.appendChild(subheading);
  heroContainer.appendChild(textContainer);

  // Movie slideshow container with full dimensions
  const slideshowContainer = document.createElement("div");
  slideshowContainer.className =
    "relative w-full h-[700px] opacity-0 transition-opacity duration-1000";
  heroContainer.appendChild(slideshowContainer);

  // Movie Data (Use relative paths for images)
  const movies = [
    {
      title: "Mufasa: The Lion King",
      description:
        "Fortsetzung zu Disneys Realfilm-Remake Der König der Löwen von 2019. Mufasa: The Lion King wird von Barry Jenkins inszeniert.",
      poster: mufasaPoster,
    },
    {
      title: "Kraven the Hunter",
      description:
        "Sergei Kravinoff leidet unter der komplexen Beziehung zu seinem kaltherzigen und skrupellosen Vater.",
      poster: kravenPoster,
    },
    {
      title: "Venom: The Last Dance",
      description:
        "Der Reporter Eddie Brock und Venom sind auf der Flucht vor dem Gesetz und einer geheimen Spezialeinheit des US-Militärs.",
      poster: venomPoster,
    },
  ];

  // Create movie slides
  movies.forEach((movie, index) => {
    const slide = document.createElement("div");
    slide.className = "absolute inset-0 opacity-0 transition-all duration-1000";
    slide.setAttribute("data-index", index);

    slide.innerHTML = `
      <div class="relative h-full">
        <img 
          src="${movie.poster}" 
          alt="${movie.title}"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
        <div class="absolute bottom-0 left-0 right-0 p-12 transform translate-y-full transition-transform duration-700">
          <h2 class="text-5xl text-white font-bold mb-4">${movie.title}</h2>
          <p class="text-xl text-white max-w-3xl">${movie.description}</p>
        </div>
      </div>
    `;

    slideshowContainer.appendChild(slide);
  });

  // Sequential animation timing
  setTimeout(() => {
    // First animate header
    header.style.opacity = "1";
    header.style.transform = "translateY(0)";

    // Then animate subheading
    setTimeout(() => {
      subheading.style.opacity = "1";
      subheading.style.transform = "translateY(0)";

      // Show slideshow container after text animations
      setTimeout(() => {
        slideshowContainer.style.opacity = "1";
        showSlide(0);
      }, 4000); // 4 second delay before showing images
    }, 500);
  }, 300);

  function showSlide(index) {
    const slides = document.querySelectorAll("[data-index]");

    slides.forEach((slide, idx) => {
      const content = slide.querySelector(".absolute.bottom-0");
      if (idx === index) {
        slide.classList.add("opacity-100");
        slide.style.transform = "scale(1.05)";
        setTimeout(() => {
          content.style.transform = "translateY(0)";
        }, 300);
      } else {
        slide.classList.remove("opacity-100");
        slide.style.transform = "scale(1)";
        content.style.transform = "translateY(100%)";
      }
    });
  }

  // Start slideshow with longer interval
  let currentSlide = 0;
  const totalSlides = movies.length;

  setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
  }, 8000); // 8 seconds between slides
});
