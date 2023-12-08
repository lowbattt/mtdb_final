// // // // module.exports = (req, res) => {
// // // //     res.render('watchlist')
// // // // }

// // // // controllers/watchlistController.js
// // // const express = require('express');
// // // // const router = express.Router();
// // // const getMovies = require('./getMovies');

// // // const watchlistController = async (req, res) => {
// // //   try {
// // //     // Assuming you have a mechanism to fetch movies in the watchlist for the current user
// // //     // This is just a placeholder; you'll need to adapt this based on your authentication and watchlist logic
// // //     const movieIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// // //         21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,];
        
// // //     // Call the getMovies function to retrieve an array of watchlist movie details
// // //     const watchlistMovieDetails = await getMovies(watchlistMovieIds);

// // //     // Separate the details as needed...
// // //     const watchlistMovieNames = watchlistMovieDetails.map(movie => movie.name);
// // //     const watchlistMovieRates = watchlistMovieDetails.map(movie => movie.rate);
// // //     const watchlistMovieGenre1 = watchlistMovieDetails.map(movie => movie.genre1);
// // //     const watchlistMovieGenre2 = watchlistMovieDetails.map(movie => movie.genre2);
// // //     const watchlistMovieDescription = watchlistMovieDetails.map(movie => movie.description);
// // //     const watchlistMovieWriter = watchlistMovieDetails.map(movie => movie.writer);
// // //     const watchlistMovieStars = watchlistMovieDetails.map(movie => movie.stars);
// // //     const watchlistMovieImages = watchlistMovieDetails.map(movie => movie.images); 
// // //     const watchlistMovieVideos = watchlistMovieDetails.map(movie => movie.videos); 

// // //     // Render the watchlist template with watchlist movie details
// // //     res.render('watchlist', { watchlistMovieNames, watchlistMovieRates, watchlistMovieGenre1, watchlistMovieGenre2, watchlistMovieDescription, watchlistMovieWriter, watchlistMovieStars, watchlistMovieImages, watchlistMovieVideos });

// // //   } catch (error) {
// // //     console.error('Error:', error);
// // //     res.status(500).json({ error: 'Internal server error' });
// // //   }
// // // };

// // // // router.get('/', watchlistController);

// // // module.exports = watchlistController;


// // // controllers/watchlistController.js

// // // // controllers/watchlistController.js
// // const express = require('express');
// // const router = express.Router();
// // const getMovies = require('./getMovies');

// // const watchlistController = async (req, res) => {
// //   try {
// //     // Assuming you have a mechanism to fetch movies in the watchlist for the current user
// //     // This is just a placeholder; you'll need to adapt this based on your authentication and watchlist logic
// //     const watchlistMovieIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// //         21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40];
        
// //     // Call the getMovies function to retrieve an array of watchlist movie details
// //     const watchlistMovieDetails = await getMovies(watchlistMovieIds);

// //     // Separate the details as needed...
// //     const watchlistMovieNames = watchlistMovieDetails.map(movie => movie.name);
// //     const watchlistMovieRates = watchlistMovieDetails.map(movie => movie.rate);
// //     const watchlistMovieGenre1 = watchlistMovieDetails.map(movie => movie.genre1);
// //     const watchlistMovieGenre2 = watchlistMovieDetails.map(movie => movie.genre2);
// //     const watchlistMovieDescription = watchlistMovieDetails.map(movie => movie.description);
// //     const watchlistMovieWriter = watchlistMovieDetails.map(movie => movie.writer);
// //     const watchlistMovieStars = watchlistMovieDetails.map(movie => movie.stars);
// //     const watchlistMovieImages = watchlistMovieDetails.map(movie => movie.images); 
// //     const watchlistMovieVideos = watchlistMovieDetails.map(movie => movie.videos); 

// //     // Render the watchlist template with watchlist movie details
// //     res.render('watchlist', { watchlistMovieNames, watchlistMovieRates, watchlistMovieGenre1, watchlistMovieGenre2, watchlistMovieDescription, watchlistMovieWriter, watchlistMovieStars, watchlistMovieImages, watchlistMovieVideos });

// //   } catch (error) {
// //     console.error('Error:', error);
// //     res.status(500).json({ error: 'Internal server error' });
// //   }
// // };

// // router.get('/', watchlistController);

// // module.exports = router;

// // controllers/watchlistController.js

// const express = require('express');
// const router = express.Router();
// const getMovies = require('./getMovies');

// const watchlistController = async (req, res) => {
//   try {
//     // Assuming you have a mechanism to fetch movies in the watchlist for the current user
//     // This is just a placeholder; you'll need to adapt this based on your authentication and watchlist logic
//     const watchlistMovieIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
//         21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40];
        
//     // Call the getMovies function to retrieve an array of watchlist movie details
//     const watchlistMovieDetails = await getMovies(watchlistMovieIds);

//     // Separate the details as needed...
//     const watchlistMovieNames = watchlistMovieDetails.map(movie => movie.name);
//     const watchlistMovieRates = watchlistMovieDetails.map(movie => movie.rate);
//     const watchlistMovieGenre1 = watchlistMovieDetails.map(movie => movie.genre1);
//     const watchlistMovieGenre2 = watchlistMovieDetails.map(movie => movie.genre2);
//     const watchlistMovieDescription = watchlistMovieDetails.map(movie => movie.description);
//     const watchlistMovieWriter = watchlistMovieDetails.map(movie => movie.writer);
//     const watchlistMovieStars = watchlistMovieDetails.map(movie => movie.stars);
//     const watchlistMovieImages = watchlistMovieDetails.map(movie => movie.images); 
//     const watchlistMovieVideos = watchlistMovieDetails.map(movie => movie.videos); 

//     // Render the watchlist template with watchlist movie details
//     res.render('watchlist', { watchlistMovieNames, watchlistMovieRates, watchlistMovieGenre1, watchlistMovieGenre2, watchlistMovieDescription, watchlistMovieWriter, watchlistMovieStars, watchlistMovieImages, watchlistMovieVideos });

//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };

// router.get('/', watchlistController);

// module.exports = router;


// controllers/watchlistController.js
// const express = require('express');
// const router = express.Router();
// const getMovies = require('./getMovies');

// const watchlistController = async (req, res) => {
//   try {
//     // Assuming you have a mechanism to fetch movies in the watchlist for the current user
//     // This is just a placeholder; you'll need to adapt this based on your authentication and watchlist logic
//     const watchlistMovieIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
//         21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40];
        
//     // Call the getMovies function to retrieve an array of watchlist movie details
//     const watchlistMovieDetails = await getMovies(watchlistMovieIds);

//     // Separate the details as needed...
//     const watchlistMovieNames = watchlistMovieDetails.map(movie => movie.name);
//     const watchlistMovieRates = watchlistMovieDetails.map(movie => movie.rate);
//     const watchlistMovieGenre1 = watchlistMovieDetails.map(movie => movie.genre1);
//     const watchlistMovieGenre2 = watchlistMovieDetails.map(movie => movie.genre2);
//     const watchlistMovieDescription = watchlistMovieDetails.map(movie => movie.description);
//     const watchlistMovieWriter = watchlistMovieDetails.map(movie => movie.writer);
//     const watchlistMovieStars = watchlistMovieDetails.map(movie => movie.stars);
//     const watchlistMovieImages = watchlistMovieDetails.map(movie => movie.images); 
//     const watchlistMovieVideos = watchlistMovieDetails.map(movie => movie.videos); 

//     // Render the watchlist template with watchlist movie details
//     res.render('watchlist', { watchlistMovieNames, watchlistMovieRates, watchlistMovieGenre1, watchlistMovieGenre2, watchlistMovieDescription, watchlistMovieWriter, watchlistMovieStars, watchlistMovieImages, watchlistMovieVideos });

//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };

// module.exports = router.get('/', watchlistController);


// const express = require('express');
// const router = express.Router();
// const getMovies = require('./getMovies');

// const watchlistController = async (req, res) => {
//   try {
//     // Assuming movie IDs you want to retrieve
//     const movieIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
//       21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40];
//     const movieDetails = await getMovies(movieIds);

//     // Separate the details as needed...
//     const movieNames = movieDetails.map(movie => movie.name);
//     const movieRates = movieDetails.map(movie => movie.rate);
//     const movieGenre1 = movieDetails.map(movie => movie.genre1);
//     const movieGenre2 = movieDetails.map(movie => movie.genre2);
//     const movieDescription = movieDetails.map(movie => movie.description);
//     const movieWriter = movieDetails.map(movie => movie.writer);
//     const movieStars = movieDetails.map(movie => movie.stars);
//     const movieImages = movieDetails.map(movie => movie.images);
//     const movieVideos = movieDetails.map(movie => movie.videos);

//     // Render the index template with movie details
//     res.render('watchlist', { movieNames, movieRates, movieGenre1, movieGenre2, movieDescription, movieWriter, movieStars, movieImages, movieVideos });

//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };

// module.exports = router.get('/', watchlistController);


// const express = require('express');
// const router = express.Router();
// const getMovies = require('./getMovies');

// const watchlistController = async (req, res) => {
//   try {
//     // Assuming movie IDs you want to retrieve
//     const movieIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
//       21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40];
//     const movieDetails = await getMovies(movieIds);

//     // Separate the details as needed...
//     const movieNames = movieDetails.map(movie => movie.name);
//     const movieRates = movieDetails.map(movie => movie.rate);
//     const movieGenre1 = movieDetails.map(movie => movie.genre1);
//     const movieGenre2 = movieDetails.map(movie => movie.genre2);
//     const movieDescription = movieDetails.map(movie => movie.description);
//     const movieWriter = movieDetails.map(movie => movie.writer);
//     const movieStars = movieDetails.map(movie => movie.stars);
//     const movieImages = movieDetails.map(movie => movie.images);
//     const movieVideos = movieDetails.map(movie => movie.videos);

//     // Render the index template with movie details
//     res.render('watchlist', { movieNames, movieRates, movieGenre1, movieGenre2, movieDescription, movieWriter, movieStars, movieImages, movieVideos });

//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };

// router.get('/', watchlistController);

// module.exports = router;


const express = require('express');
const router = express.Router();
const getMovies = require('./getMovies');

router.get('/', async (req, res) => {
  try {
    // Assuming movie IDs you want to retrieve
    const movieIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40];
    const movieDetails = await getMovies(movieIds);

    // Add movieId to each movieDetails object
    const watchlistMovieDetails = movieDetails.map(movie => ({
      ...movie,
      movieId: movie.id, // Use the appropriate property as the movieId
    }));

    // Separate the details as needed...
    const movieNames = watchlistMovieDetails.map(movie => movie.name);
    const movieRates = watchlistMovieDetails.map(movie => movie.rate);
    const movieGenre1 = watchlistMovieDetails.map(movie => movie.genre1);
    const movieGenre2 = watchlistMovieDetails.map(movie => movie.genre2);
    const movieDescription = watchlistMovieDetails.map(movie => movie.description);
    const movieWriter = watchlistMovieDetails.map(movie => movie.writer);
    const movieStars = watchlistMovieDetails.map(movie => movie.stars);
    const movieImages = watchlistMovieDetails.map(movie => movie.images);
    const movieVideos = watchlistMovieDetails.map(movie => movie.videos);

    // Render the watchlist template with movie details
    res.render('watchlist', {
      movieNames,
      movieRates,
      movieGenre1,
      movieGenre2,
      movieDescription,
      movieWriter,
      movieStars,
      movieImages,
      movieVideos,
    });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
