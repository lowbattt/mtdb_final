// module.exports = (req, res) => {
//     res.render('categorydetail')
// }

const getMovies = require('./getMovies');

const CategoryTV = async (req, res) => {
  try {
    // Assuming movie IDs you want to retrieve
    const movieIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,];
    // Call the getMovies function to retrieve an array of movie details (including names and ratings)
    const movieDetails = await getMovies(movieIds);

    // Separate the names and ratings into separate arrays
    const movieNames = movieDetails.map(movie => movie.name);
    const movieRates = movieDetails.map(movie => movie.rate);
    const movieGenre1 = movieDetails.map(movie => movie.genre1);
    const movieGenre2 = movieDetails.map(movie => movie.genre2);
    const movieDescription = movieDetails.map(movie => movie.description);
    const movieWriter = movieDetails.map(movie => movie.writer);
    const movieStars = movieDetails.map(movie => movie.stars);
    const movieImages = movieDetails.map(movie => movie.images);
    const movieVideos = movieDetails.map(movie => movie.videos); 


res.render('categoryTV', { movieNames, movieRates, movieGenre1, movieGenre2, movieDescription, movieWriter, movieStars, movieImages, movieVideos });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = CategoryTV;
