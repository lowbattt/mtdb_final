// Function to get movies
const {connectDB} = require('../middleware/sqlConnection')

const connection = connectDB()

const getMovies = async (ids) => {
  try {
    const query = 'SELECT id, name, rate, genre1, genre2, description, writer, stars, images, videos FROM movies WHERE id IN (?)';
    const [rows, fields] = await connection.promise().query(query, [ids]);
    return rows.map(row => ({ id: row.id, name: row.name, rate: row.rate, genre1: row.genre1, genre2: row.genre2, 
      description: row.description, writer: row.writer, stars: row.stars, images: row.images, videos: row.videos}));
  } catch (error) {
    console.error('Error executing query:', error);
    throw error;
  }
};

module.exports = getMovies;
