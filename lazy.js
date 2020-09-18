// Cached variable
let lazy_collection = [];
let visible_lazies = [];

const set_opacity_transitions = (arr) => {
	arr.forEach((lazy) => {
		lazy.style.opacity = 0;
		lazy.style.transition = "opacity 1.5s ease-in-out";
	});
};

// Gather all the lazy items, length and set opacity transition
const build_lazy_collection = () => {
	lazy_collection = document.querySelectorAll("[data-type=lazy]");
	set_opacity_transitions(lazy_collection);
};

// Reveal lazies
const load_lazies = () => {
	// IF all lazies visible EXIT function
	if (visible_lazies.length === lazy_collection.length) {
		return;
	}

	// IF there are unloaded lazies continue to reveal
	if (visible_lazies.length < lazy_collection.length) {
		lazy_collection.forEach((item) => {
			const ePos = item.getBoundingClientRect().top - window.innerHeight;
			if (ePos < window.scrollY && item.src.length < 1) {
				item.src = item.dataset.src;
				item.style.opacity = 1;
				visible_lazies.push(item);
			}
		});

		// Tear down and re-create eventlisters. Prevents multiple instances of the same listener
		window.removeEventListener("scroll", load_lazies);
		window.removeEventListener("resize", load_lazies);
		window.addEventListener("scroll", load_lazies);
		window.addEventListener("resize", load_lazies);
	}
};

// Initialize lazy
const lazy = () => {
	build_lazy_collection();
	load_lazies();
};

lazy();
