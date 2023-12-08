const fetchMovies = () => {
    // Updated code
    const movieName = document.getElementById('helloMyFriend');
    movieName.textContent = "THE HUNGER GAMES";
}

// // Function to fetch movies data
// function fetchMovies() {
//     fetch('/movies')
//         .then(response => response.json())
//         .then(data => {
//             console.log(data); // Log the retrieved data to the console
            
//             // Assuming 'movies' is an array of movie objects in your fetched data
//             const moviesList = document.getElementById('moviesList'); // Assuming you have an HTML element with id 'moviesList'
            
//             // Display movies in the DOM
//             data.forEach(movie => {
//                 const li = document.createElement('li');
//                 li.textContent = `${movie.title} - ${movie.director}`;
//                 moviesList.appendChild(li);
//             });
//         })
//         .catch(error => console.error('Error fetching data:', error));
// }
//    // console.log(data); // Log the retrieved data to the console
//             const movieName = document.getElementById('helloMyFriend');
//             movieName.textContent = "THE HUNGER GAMES"
//         })
//         .catch(error => console.error('Error fetching data:', error));
// }
