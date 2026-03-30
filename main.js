const apiKey = "30b5ecf11de0de34456f889c40cca90f";
const baseUrl = "https://api.themoviedb.org/3/movie/";
const imgUrl = "https://image.tmdb.org/t/p/w500";


async function getDetail() {
    try {
        const url = baseUrl + "687163" + "?api_key=" + apiKey;
        const res = await axios.get(url);
        const movie = res.data        
        const credits = await getCredits();
        renderDetail(movie,credits)
    } catch (error) {
        console.log("Failed to fetch",error)
    }
}

getDetail();

async function getCredits() {
    try {
        const url = baseUrl + "687163" + "/credits?api_key=" + apiKey;
        const res = await axios.get(url);
        const data = res.data;
        return data;
    } catch (error) {
        console.log("Error credits",error);
        return null;
    }
}

function renderDetail(movie,credits) {
    document.getElementById("title").textContent = movie.title;

    const poster = document.getElementById("poster");
    poster.src = imgUrl + movie.poster_path;
    poster.classList.add("w-full","sm:w-50","md:w-50");

    document.getElementById("rating")

    rating.innerHTML =
        "<img src='/IMDB_Logo_2016 1.svg' class='w-8'>" +
        "<span class='text-gray-400 font-semibold'>" +
        movie.vote_average.toFixed(1) +
        "</span>" + "<img src='/v-icon.svg'>";

    document.getElementById("overview").textContent = movie.overview;

    const genreContainer = document.getElementById("genres");

    movie.genres.forEach(function(g) {
        const span = document.createElement("span");

        span.textContent = g.name;
        span.classList.add("px-3","py-1","text-md","border","border-white","rounded-full","text-white","mr-2");

        genreContainer.appendChild(span);
    })

    const director = credits.crew.find(function(person) {
        return person.job === "Director";
    })

    document.getElementById("director").textContent =
    "Director: " + (director ? director.name : "Unknown");

    const castNames = credits.cast.slice(0,3).map(function(actor){
        return actor.name;
    })

    castText = castNames.join(", ");

    document.getElementById("cast").textContent = "Cast: " + castText;
}
