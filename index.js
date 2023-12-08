// const express = require('express');
// const app = express();
// const ejs = require('ejs');
// const mongoose = require('mongoose');
// const expressSession = require('express-session');
// const flash = require('connect-flash');
// const { connectDB } = require('./middleware/sqlConnection');

// // MongoDB Connection
// mongoose.connect('mongodb+srv://admin:a12345a@cluster0.th7wdgo.mongodb.net/?retryWrites=true&w=majority', {
//   useNewUrlParser: true,
// })
//   .then(() => {
//     console.log('Connected to MongoDB');
//   })
//   .catch((err) => {
//     console.error('Error connecting to MongoDB:', err);
//   });

// global.loggedIn = null

// const mysqlConnect = connectDB()

// mysqlConnect.connect((err) => {
//   if (err) {
//     console.error('Error connecting to database:', err);
//     return;
//   }
//   console.log('Connected to MySQL database');
// });

// //Controllers
// const indexController = require('./controllers/indexController');
// const loginController = require('./controllers/loginController');
// const registerController = require('./controllers/registerController');
// const storeUserController = require('./controllers/storeUserController');
// const loginUserController = require('./controllers/loginUser');
// // const Category = require('./controllers/CategoryController')
// const UPcom = require('./controllers/upComming')
// // const watch = require('./controllers/watchlist')
// const trailer = require('./controllers/trailer')
// const profileController = require('./controllers/ProfileController')
// const Logout = require('./controllers/logoutController')
// const nav = require('./controllers/navbar')
// const getMovies = require('./controllers/getMovies')
// const watchlistController = require('./controllers/watchlistController');
// const categoryController = require('./controllers/CategoryController');



// //Category
// const categoryAction = require('./controllers/CategoryAction')
// const categoryAdventure = require('./controllers/categoryAdventure')
// const categoryFantasy = require('./controllers/CategoryFantasy')
// const categoryComedy = require('./controllers/CategoryComedy')
// const categoryDrama = require('./controllers/CategoryDrama')
// const categorySciFi = require('./controllers/CategorySciFi')
// const categoryRomance = require('./controllers/CategoryRomance')
// const CategoryHistory = require('./controllers/CategoryHistory');
// const categoryBio = require('./controllers/CategoryBio')
// const categoryThriller = require('./controllers/CategoryThriller')
// const categoryHorror = require('./controllers/CategoryHorror')
// const categoryTV = require('./controllers/CategoryTV')

  

// //Trailers
// const trailer1 = require('./controllers/trailer1')
// const trailer2 = require('./controllers/trailer2')
// const trailer3 = require('./controllers/trailer3')
// const trailer4 = require('./controllers/trailer4')
// const trailer5 = require('./controllers/trailer5')
// const trailer6 = require('./controllers/trailer6')
// const trailer7 = require('./controllers/trailer7')
// const trailer8 = require('./controllers/trailer8')
// const trailer9 = require('./controllers/trailer9')
// const trailer10 = require('./controllers/trailer10')
// const trailer11 = require('./controllers/trailer11')
// const trailer12 = require('./controllers/trailer12')
// const trailer13 = require('./controllers/trailer13')
// const trailer14 = require('./controllers/trailer14')
// const trailer15 = require('./controllers/trailer15')
// const trailer16 = require('./controllers/trailer16')
// const trailer17 = require('./controllers/trailer17')
// const trailer18 = require('./controllers/trailer18')
// const trailer19 = require('./controllers/trailer19')
// const trailer20 = require('./controllers/trailer20')
// const trailer21 = require('./controllers/trailer21')
// const trailer22 = require('./controllers/trailer22')
// const trailer23 = require('./controllers/trailer23')
// const trailer24 = require('./controllers/trailer24')
// const trailer25 = require('./controllers/trailer25')
// const trailer26 = require('./controllers/trailer26')
// const trailer27 = require('./controllers/trailer27')
// const trailer28 = require('./controllers/trailer28')
// const trailer29 = require('./controllers/trailer29')
// const trailer30 = require('./controllers/trailer30')
// const trailer31 = require('./controllers/trailer31')
// const trailer32 = require('./controllers/trailer32')
// const trailer33 = require('./controllers/trailer33')
// const trailer34 = require('./controllers/trailer34')
// const trailer35 = require('./controllers/trailer35')
// const trailer36 = require('./controllers/trailer36')
// const trailer37 = require('./controllers/trailer37')
// const trailer38 = require('./controllers/trailer38')
// const trailer39 = require('./controllers/trailer39')

// // Middleware
// const authMiddleware = require('./middleware/auth')
// const redirectMiddleware = require('./middleware/redirect');

// // app.set('views', path.join(__dirname, 'views'));
// app.use(express.static('public'))//เป็นการเข้าถึงตัว floder public เพื่อให้สามารถใช้ file ที่อยู่ใน public ได้
// app.use(express.json())// ใช้สำหรับ แปลงข้อมูลที่มีรูปแบบ JSON String ให้อยู่ในรูป JSON Objext  
// app.use(express.urlencoded())// ใช้สำหรับแปลงข้อมูลจาก form ในรูปแบบ url encode เป็น Object
// app.use(flash())

// app.use(expressSession({
//     secret: "node secret"
// }))

// app.use("*", (req, res, next) => {
//   //นำข้อมูล session ที่เข้าถึง  userId เก็บไว้ในตัวแปร loggedIn
//   loggedIn = req.session.userId
//   next()
// })

// app.use('/', router);

// app.set('view engine', 'ejs');

// app.get('/', indexController);

// // app.get('/', indexController)
// app.get('/login',redirectMiddleware, loginController)
// app.get('/logout', Logout)
// app.get('/register', registerController)
// app.post('/user/register', storeUserController)
// app.post('/user/login',loginUserController)
// // app.get('/category', Category)
// app.get('/upcoming', UPcom)
// // app.get('/watchlist', watch)
// app.get('/trailer',trailer)
// app.get('/Profile', authMiddleware, profileController)
// app.get('/nav',nav)
// app.get('/getMovies',getMovies)
// app.get('/watchlist', watchlistController);
// app.get('/category', categoryController);

// // Category
// app.get('/categoryAction', categoryAction)
// app.get('/categoryAdventure', categoryAdventure)
// app.get('/categoryFantasy', categoryFantasy)
// app.get('/categoryComedy', categoryComedy)
// app.get('/categoryDrama', categoryDrama)
// app.get('/categorySciFi', categorySciFi)
// app.get('/categoryRomance', categoryRomance)
// app.get('/categoryHistory', CategoryHistory)
// app.get('/categoryBio', categoryBio)
// app.get('/categoryThriller', categoryThriller)
// app.get('/categoryHorror', categoryHorror)
// app.get('/categoryTV', categoryTV)


// //Trailers
// app.get('/trailer1',trailer1)
// app.get('/trailer2',trailer2)
// app.get('/trailer3',trailer3)
// app.get('/trailer4',trailer4)
// app.get('/trailer5',trailer5)
// app.get('/trailer6',trailer6)
// app.get('/trailer7',trailer7)
// app.get('/trailer8',trailer8)
// app.get('/trailer9',trailer9)
// app.get('/trailer10',trailer10)
// app.get('/trailer11',trailer11)
// app.get('/trailer12',trailer12)
// app.get('/trailer13',trailer13)
// app.get('/trailer14',trailer14)
// app.get('/trailer15',trailer15)
// app.get('/trailer16',trailer16)
// app.get('/trailer17',trailer17)
// app.get('/trailer18',trailer18)
// app.get('/trailer19',trailer19)
// app.get('/trailer20',trailer20)
// app.get('/trailer21',trailer21)
// app.get('/trailer22',trailer22)
// app.get('/trailer23',trailer23)
// app.get('/trailer24',trailer24)
// app.get('/trailer25',trailer25)
// app.get('/trailer26',trailer26)
// app.get('/trailer27',trailer27)
// app.get('/trailer28',trailer28)
// app.get('/trailer29',trailer29)
// app.get('/trailer30',trailer30)
// app.get('/trailer31',trailer31)
// app.get('/trailer32',trailer32)
// app.get('/trailer33',trailer33)
// app.get('/trailer34',trailer34)
// app.get('/trailer35',trailer35)
// app.get('/trailer36',trailer36)
// app.get('/trailer37',trailer37)
// app.get('/trailer38',trailer38)
// app.get('/trailer39',trailer39)


// app.listen(4000, () => {
//     console.log("App listening on port 4000")
// })

const express = require('express');
const app = express();
const ejs = require('ejs');
const mongoose = require('mongoose');
const expressSession = require('express-session');
const flash = require('connect-flash');
const path = require('path');  // Don't forget to include the 'path' module
const { connectDB } = require('./middleware/sqlConnection');
const router = express.Router();  // Create a router object

// MongoDB Connection
mongoose.connect('mongodb+srv://admin:a12345a@cluster0.th7wdgo.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

global.loggedIn = null;

const mysqlConnect = connectDB();

mysqlConnect.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Controllers
const indexController = require('./controllers/indexController');
const loginController = require('./controllers/loginController');
const registerController = require('./controllers/registerController');
const storeUserController = require('./controllers/storeUserController');
const loginUserController = require('./controllers/loginUser');
const UPcom = require('./controllers/upComming');
const trailer = require('./controllers/trailer');
const profileController = require('./controllers/ProfileController');
const Logout = require('./controllers/logoutController');
const nav = require('./controllers/navbar');
const getMovies = require('./controllers/getMovies');
const watchlistController = require('./controllers/watchlistController');
const categoryController = require('./controllers/CategoryController');
const watchlistRouter = require('./controllers/watchlistController');


//Category
const categoryAction = require('./controllers/CategoryAction')
const categoryAdventure = require('./controllers/categoryAdventure')
const categoryFantasy = require('./controllers/CategoryFantasy')
const categoryComedy = require('./controllers/CategoryComedy')
const categoryDrama = require('./controllers/CategoryDrama')
const categorySciFi = require('./controllers/CategorySciFi')
const categoryRomance = require('./controllers/CategoryRomance')
const CategoryHistory = require('./controllers/CategoryHistory');
const categoryBio = require('./controllers/CategoryBio')
const categoryThriller = require('./controllers/CategoryThriller')
const categoryHorror = require('./controllers/CategoryHorror')
const categoryTV = require('./controllers/CategoryTV')

  

//Trailers
const trailer1 = require('./controllers/trailer1')
const trailer2 = require('./controllers/trailer2')
const trailer3 = require('./controllers/trailer3')
const trailer4 = require('./controllers/trailer4')
const trailer5 = require('./controllers/trailer5')
const trailer6 = require('./controllers/trailer6')
const trailer7 = require('./controllers/trailer7')
const trailer8 = require('./controllers/trailer8')
const trailer9 = require('./controllers/trailer9')
const trailer10 = require('./controllers/trailer10')
const trailer11 = require('./controllers/trailer11')
const trailer12 = require('./controllers/trailer12')
const trailer13 = require('./controllers/trailer13')
const trailer14 = require('./controllers/trailer14')
const trailer15 = require('./controllers/trailer15')
const trailer16 = require('./controllers/trailer16')
const trailer17 = require('./controllers/trailer17')
const trailer18 = require('./controllers/trailer18')
const trailer19 = require('./controllers/trailer19')
const trailer20 = require('./controllers/trailer20')
const trailer21 = require('./controllers/trailer21')
const trailer22 = require('./controllers/trailer22')
const trailer23 = require('./controllers/trailer23')
const trailer24 = require('./controllers/trailer24')
const trailer25 = require('./controllers/trailer25')
const trailer26 = require('./controllers/trailer26')
const trailer27 = require('./controllers/trailer27')
const trailer28 = require('./controllers/trailer28')
const trailer29 = require('./controllers/trailer29')
const trailer30 = require('./controllers/trailer30')
const trailer31 = require('./controllers/trailer31')
const trailer32 = require('./controllers/trailer32')
const trailer33 = require('./controllers/trailer33')
const trailer34 = require('./controllers/trailer34')
const trailer35 = require('./controllers/trailer35')
const trailer36 = require('./controllers/trailer36')
const trailer37 = require('./controllers/trailer37')
const trailer38 = require('./controllers/trailer38')
const trailer39 = require('./controllers/trailer39')

// Middleware
const authMiddleware = require('./middleware/auth');
const redirectMiddleware = require('./middleware/redirect');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded());
app.use(flash());

app.use(expressSession({
  secret: "node secret",
}));

app.use("*", (req, res, next) => {
  loggedIn = req.session.userId;
  next();
});

app.set('view engine', 'ejs');

// Use the router for all routes
app.use('/', router);
app.use('/watchlist', watchlistRouter);

router.get('/', indexController);
router.get('/login', redirectMiddleware, loginController);
router.get('/logout', Logout);
router.get('/register', registerController);
router.post('/user/register', storeUserController);
router.post('/user/login', loginUserController);
router.get('/upcoming', UPcom);
router.get('/trailer', trailer);
router.get('/Profile', authMiddleware, profileController);
router.get('/nav', nav);
router.get('/getMovies', getMovies);
router.get('/watchlist', watchlistController);
router.get('/category', categoryController);

// Category
router.get('/categoryAction', categoryAction);
router.get('/categoryAdventure', categoryAdventure);
router.get('/categoryFantasy', categoryFantasy);
router.get('/categoryComedy', categoryComedy);
router.get('/categoryDrama', categoryDrama);
router.get('/categorySciFi', categorySciFi);
router.get('/categoryRomance', categoryRomance);
router.get('/categoryHistory', CategoryHistory);
router.get('/categoryBio', categoryBio);
router.get('/categoryThriller', categoryThriller);
router.get('/categoryHorror', categoryHorror);
router.get('/categoryTV', categoryTV);

// Trailers
router.get('/trailer1', trailer1);
router.get('/trailer2', trailer2);
router.get('/trailer3', trailer3);
router.get('/trailer4', trailer4);
router.get('/trailer5', trailer5);
router.get('/trailer6', trailer6);
router.get('/trailer7', trailer7);
router.get('/trailer8', trailer8);
router.get('/trailer9', trailer9);
router.get('/trailer10', trailer10);
router.get('/trailer11', trailer11);
router.get('/trailer12', trailer12);
router.get('/trailer13', trailer13);
router.get('/trailer14', trailer14);
router.get('/trailer15', trailer15);
router.get('/trailer16', trailer16);
router.get('/trailer17', trailer17);
router.get('/trailer18', trailer18);
router.get('/trailer19', trailer19);
router.get('/trailer20', trailer20);
router.get('/trailer21', trailer21);
router.get('/trailer22', trailer22);
router.get('/trailer23', trailer23);
router.get('/trailer24', trailer24);
router.get('/trailer25', trailer25);
router.get('/trailer26', trailer26);
router.get('/trailer27', trailer27);
router.get('/trailer28', trailer28);
router.get('/trailer29', trailer29);
router.get('/trailer30', trailer30);
router.get('/trailer31', trailer31);
router.get('/trailer32', trailer32);
router.get('/trailer33', trailer33);
router.get('/trailer34', trailer34);
router.get('/trailer35', trailer35);
router.get('/trailer36', trailer36);
router.get('/trailer37', trailer37);
router.get('/trailer38', trailer38);
router.get('/trailer39', trailer39);


app.listen(4000, () => {
  console.log("App listening on port 4000");
});
