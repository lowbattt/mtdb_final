// Function to get movies
const {connectDB} = require('../middleware/sqlConnection')

const connection = connectDB()

// const getMovies = async (req, res) => {
//     try {
//       // const [rows, fields] = await connection.promise().query('SELECT * FROM movies');
//       // const [rows, fields] = await connection.promise().query('SELECT * FROM movies WHERE id = 1 AND name = "The Hunger Games: The Ballad of Songbirds & Snakes"');
//       const [rows, fields] = await mysqlConnect.promise().query('SELECT name FROM movies WHERE id = 1');
//       // return rows[0].name; // Assuming you expect only one result, so you take the first row's name
      
//       res.status(200).json(rows);
//     } catch (error) {
//       console.error('Error executing query:', error);
//       res.status(500).json({ error: 'Internal server error' });
//     }
//   };

// getMovies.js


// const getMovies = async () => {
//   try {
//     const [rows, fields] = await connection.promise().query('SELECT name FROM movies WHERE id = 1');
//     return rows[0].name; // Assuming you expect only one result, so you take the first row's name
//   } catch (error) {
//     console.error('Error executing query:', error);
//     throw error; // Re-throw the error to handle it in the calling function
//   }
// };


// module.exports = getMovies


// const getMovies = async (ids) => {
//   try {
//     const query = 'SELECT name FROM movies WHERE id IN (?)';
//     const [rows, fields] = await connection.promise().query(query, [ids]);
//     return rows.map(row => row.name);
//   } catch (error) {
//     console.error('Error executing query:', error);
//     throw error;
//   }
// };

// module.exports = getMovies

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
