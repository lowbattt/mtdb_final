-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Dec 05, 2023 at 06:17 PM
-- Server version: 5.7.39
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mtdb_database`
--

-- --------------------------------------------------------

--
-- Table structure for table `movies`
--

CREATE TABLE `movies` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `rate` decimal(3,2) NOT NULL,
  `genre1` varchar(50) NOT NULL,
  `genre2` varchar(50) DEFAULT NULL,
  `description` text,
  `writer` varchar(50) DEFAULT NULL,
  `stars` varchar(200) DEFAULT NULL,
  `images` varchar(255) DEFAULT '1.jpg',
  `videos` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `movies`
--

INSERT INTO `movies` (`id`, `name`, `rate`, `genre1`, `genre2`, `description`, `writer`, `stars`, `images`, `videos`) VALUES
(1, 'The Hunger Games: The Ballad of Songbirds & Snakes', '7.20', 'Action', 'Adventure', 'Coriolanus Snow mentors and develops feelings for the female District 12 tribute during the 10th Hunger Games', 'Francis Lawrence', 'Rachel Zegler, Tom Blyth Viola Davis', '1.jpg', 'https://www.youtube.com/watch?v=RDE6Uz73A7g'),
(2, 'Saltburn', '7.50', 'Comedy', 'Dramae', 'A student at Oxford University finds himself drawn into the world of a charming and aristocratic classmate, who invites him to his eccentric family sprawling estate for a summer never to be forgotten', 'Emerald Fennell', 'Barry Keoghan, Jacob Elordi, Archie Madekwe', '2.jpg', 'https://www.youtube.com/watch?v=lALMdJf6UUE'),
(3, 'Napoleon', '6.70', 'Action', 'Adventure', 'An epic that details the checkered rise and fall of French Emperor Napoleon Bonaparte and his relentless journey to power through the prism of his addictive, volatile relationship with his wife, Josephine', 'Ridley Scott', 'Joaquin Phoenix, Vanessa Kirby, Tahar Rahim', '3.jpg', 'https://www.youtube.com/watch?v=1KZ2r5qR6oA'),
(4, 'Fargo', '8.90', 'Crime', 'Drama', 'Various chronicles of deception, intrigue, and murder in and around frozen Minnesota. All of these tales mysteriously lead back one way or another to Fargo, North Dakota', 'Noah Hawley', 'Billy Bob, Thornton Martin Freeman, Allison Tolman', '4.jpg', 'https://www.youtube.com/watch?v=ju75Sd4yAZw'),
(5, 'Starfish', '9.30', 'Drama', 'Romance', ': Beautiful journey through the depths of the underwater world as we witness a gripping tale of grief and healing unfold before our eyes.', 'Akhilesh Jaiswal', 'Khushali Kumar, Tusharr Khanna, Milind Soman', '5.jpg', 'https://www.youtube.com/watch?v=C45u-8UqFmk'),
(6, 'The Killer', '6.80', 'Action', 'Adventure', 'After a fateful near-miss, an assassin battles his employers and himself, on an international manhunt he insists is not personal', 'Akhilesh Jaiswal', 'Khushali Kumar,Tusharr Khanna,Milind Soman', '6.jpg', 'https://www.youtube.com/watch?v=vs1epO_zLG8'),
(7, 'The Crown', '8.60', 'Biography', 'Drama', 'Follows the political rivalries and romance of Queen Elizabeth II reign and the events that shaped the second half of the 20th century', 'Peter Morgan', 'Claire Foy  Olivia Colman  Imelda Staunton', '7.jpg', 'https://www.youtube.com/watch?v=JWtnJjn6ng0'),
(8, 'Leo', '7.00', 'Animation', 'Comedy', 'A 74-year-old lizard named Leo and his turtle friend decide to escape from the terrarium of a Florida school classroom where they have been living for decades', 'Robert Marianetti, Robert Smigel', 'Adam Sandler, Bill Burr, Cecily Strong', '8.jpg', 'https://www.youtube.com/watch?v=sQTNRFJ9R-4'),
(9, 'Thanksgiving', '7.00', 'Horror', 'Mystery', 'After a Black Friday riot ends in tragedy, a mysterious Thanksgiving-inspired killer terrorizes Plymouth, Massachusetts - the birthplace of the infamous holiday', 'David Wachtenheim', 'Adam Sandler, Bill Burr, Cecily Strong', '9.jpg', 'https://www.youtube.com/watch?v=KbU50SdL8zA'),
(10, 'Trolls Band Together', '6.00', 'Animation', 'Adventure', 'Poppy discovers that Branch was once part of the boy band BroZone with his brothers, Floyd, John Dory, Spruce and Clay. When Floyd is kidnapped, Branch and Poppy embark on a journey to reunite his two other brothers and rescue Floyd', 'Walt Dohrn, Tim Heitz ', 'Anna Kendrick, Justin Timberlake, Kenan Thompson', '10.jpg', 'https://www.youtube.com/watch?v=ftUpFjGKuY0'),
(11, 'Barbie', '7.00', 'Comedy', 'Adventure', 'Barbie suffers a crisis that leads her to question her world and her existence', 'Greta Gerwig', 'Margot Robbie, Ryan Gosling, Issa Rae', '11.jpg', 'https://www.youtube.com/watch?v=pBk4NYhWNMM'),
(12, 'A Haunting in Venice', '7.00', 'Crime', 'Drama', 'In post-World War II Venice, Poirot, now retired and living in his own exile, reluctantly attends a seance. But when one of the guests is murdered, it is up to the former detective to once again uncover the killer', 'Kenneth Branagh', 'Kenneth Branagh, Michelle Yeoh, Jamie Dornan', '12.jpg', 'https://www.youtube.com/watch?v=yEddsSwweyE'),
(13, 'Dumb Money', '6.90', 'Biography', 'Comedy', 'David vs. Goliath tale about everyday people who flipped the script on Wall Street and got rich by turning GameStop (the video game store) into the world hottest company', 'Craig Gillespie', 'Paul Dano, Pete Davidson', '13.jpg', 'https://www.youtube.com/watch?v=bmr8YmwnZ3w'),
(14, 'Tiger 3', '7.50', 'Action', 'Adventure', 'Tiger and Zoya are back - to save the country and their family. This time it is personal.', 'Maneesh Sharma', 'Salman Khan, Katrina Kaif, Emraan Hashmi', '14.jpg', 'https://www.youtube.com/watch?v=vEjTUDjjU6A'),
(15, 'The Marvels', '6.00', 'Action', 'Adventure', 'Carol Danvers gets her powers entangled with those of Kamala Khan and Monica Rambeau, forcing them to work together to save the universe.', 'Nia DaCosta', 'rie Larson, Teyonah Parris, Iman Vellani', '15.jpg', 'https://www.youtube.com/watch?v=uwmDH12MAA4'),
(16, 'The Holdovers', '8.30', 'Comedy', 'Drama', 'A cranky history teacher at a remote prep school is forced to remain on campus over the holidays with a troubled student who has no place to go', 'Alexander Payne', 'Paul Giamatti, Dominic Sessa', '16.jpg', 'https://www.youtube.com/watch?v=AhKLpJmHhIg'),
(17, 'Priscilla', '7.00', 'Biography', 'Drama', 'When teenage Priscilla Beaulieu meets Elvis Presley, the man who is already a meteoric rock-and-roll superstar becomes someone entirely unexpected in private moments: a thrilling crush, an ally in loneliness, a vulnerable best friend', 'Sofia Coppola', 'Cailee Spaeny, Jacob Elordi  , Ari Cohen', '17.jpg', 'https://www.youtube.com/watch?v=DBWk6BohVXk'),
(18, 'Oppenheimer', '8.50', 'Biography', 'Drama', 'The story of American scientist, J. Robert Oppenheimer, and his role in the development of the atomic bomb', 'Christopher Nolan', 'Cillian Murphy, Emily Blunt, Matt Damon', '18.jpg', 'https://www.youtube.com/watch?v=dRTD5UKcQgQ'),
(19, 'Blue Beetle', '6.00', 'Sci-Fi', 'Adventure', 'An alien scarab chooses Jaime Reyes to be its symbiotic host, bestowing the recent college graduate with a suit of armor that capable of extraordinary powers, forever changing his destiny as he becomes the superhero known as Blue Beetle', 'Angel Manuel Soto', 'Xolo Maridueña, Bruna Marquezine, Becky G', '19.jpg', 'https://www.youtube.com/watch?v=FMGKLQ-Zo2k'),
(20, 'The Creator', '6.90', 'Action', 'Adventure', 'Against the backdrop of a war between humans and robots with artificial intelligence, a former soldier finds the secret weapon, a robot in the form of a young child', 'Gareth Edwards', 'John David Washington, Madeleine Yuna Voyles, Gemma Chan', '20.jpg', 'https://www.youtube.com/watch?v=O5b0t_EoIbA'),
(21, 'Interstellar', '8.70', 'Action', 'Adventure', 'When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans', 'Christopher Nolan', 'Matthew McConaughey, Anne Hathaway, Jessica Chastain', '21.jpg', 'https://www.youtube.com/watch?v=UDVtMYqUAyw'),
(22, 'Next Goal Winss', '6.50', 'Comedy', 'Drama', 'The story of the infamously terrible American Samoa soccer team, known for a brutal 2001 FIFA match they lost 31-0', 'Taika Waititi', 'Michael Fassbender, Oscar Kightley, Kaimana', '22.jpg', 'https://www.youtube.com/watch?v=pRH5u5lpArQ'),
(23, 'Jujutsu Kaisen', '8.60', 'Animation', 'Action', 'A boy swallows a cursed talisman - the finger of a demon - and becomes cursed himself. He enters a shaman school to be able to locate the demon other body parts and thus exorcise himself.', '', 'Junya Enoki, Yuma Uchida, Yûichi Nakamura', '23.jpg', 'https://www.youtube.com/watch?v=PKHQuQF1S8k'),
(24, 'Demon Slayer: Kimetsu no Yaiba - Tsuzumi Mansion Arc', '8.90', 'Animation ', 'Fantasy', 'Tanjiro ventures to the south-southeast where he encounters a cowardly young man named Zenitsu Agatsuma. He is a fellow survivor from Final Selection and his sparrow asks Tanjiro to help keep him in line', 'Haruo Sotozaki', '', '24.jpg', 'https://www.youtube.com/watch?v=O8WK1iiWPN0'),
(25, 'Spider-Man: Across the Spider-Verse', '8.70', 'Animation', 'Adventure', 'Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. When the heroes clash on how to handle a new threat, Miles must redefine what it means to be a hero.', 'Joaquim Dos Santos, Kemp Powers', 'Shameik Moore, Hailee Steinfeld, Brian Tyree Henry', '25.jpg', 'https://www.youtube.com/watch?v=shW9i6k8cB0'),
(26, 'Mission: Impossible - Dead Reckoning Part One', '7.80', 'Action', 'Adventure', 'Ethan Hunt and his IMF team must track down a dangerous weapon before it falls into the wrong hands', 'Christopher McQuarrie', 'Tom Cruise, Hayley Atwell, Ving Rhames', '26.jpg', 'https://www.youtube.com/watch?v=avz06PDqDbM'),
(27, 'A Man Called Otto', '7.50', 'Comedy', 'Drama', 'Otto is a grump who given up on life following the loss of his wife and wants to end it all. When a young family moves in nearby, he meets his match in quick-witted Marisol, leading to a friendship that will turn his world around', ' Marc Forster', 'Tom Hanks, Mariana Treviño, Rachel Keller', '27.jpg', 'https://www.youtube.com/watch?v=eFYUX9l-m5I'),
(28, 'A Avatar: The Way of Water', '7.60', 'Fantasy', 'Adventure', 'CJake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na vi race to protect their home.', 'James Cameron', 'Sam Worthington, Zoe Saldana, Sigourney Weaver', '28.jpg', 'https://www.youtube.com/watch?v=d9MyW72ELq0'),
(29, 'Babylon', '7.10', 'Thriller', 'Adventure', 'A tale of outsized ambition and outrageous excess, it traces the rise and fall of multiple characters during an era of unbridled decadence and depravity in early Hollywood', 'Damien Chazelle', 'Brad Pitt, Margot Robbie, Jean Smart', '29.jpg', 'https://www.youtube.com/watch?v=5muQK7CuFtY'),
(30, 'Plane', '6.50', 'Drama', 'History', 'A pilot finds himself caught in a war zone after he is forced to land his commercial aircraft during a terrible storm.', 'Jean-François Richet', 'Gerard Butler, Mike Colter, Tony Goldwyn', '30.jpg', 'https://www.youtube.com/watch?v=L2a0kcVHQVk'),
(31, 'Knock at the Cabin', '6.10', 'Horror', 'Mystery', 'While vacationing, a girl and her parents are taken hostage by armed strangers who demand that the family make a choice to avert the apocalypse', 'Damien Chazelle', 'Brad Pitt, Margot, Robbie Jean Smart', '31.jpg', 'https://www.youtube.com/watch?v=0wiBHEACNHs'),
(32, 'Ant-Man and the Wasp: Quantumania', '6.10', 'Action', 'Adventure', 'Scott Lang and Hope Van Dyne are dragged into the Quantum Realm, along with Hope s parents and Scott s daughter Cassie. Together they must find a way to escape, but what secrets is Hope', 'Peyton Reed', 'Paul Rudd, Evangeline Lilly, Michael Douglas', '32.jpg', 'https://www.youtube.com/watch?v=ZlNFpri-Y40'),
(33, 'Cocaine Bears', '5.90', 'Comedy', 'Thriller', 'An oddball group of cops, criminals, tourists and teens converge on a Georgia forest where a huge black bear goes on a murderous rampage after unintentionally ingesting cocaine', 'Elizabeth Banks', 'Keri Russell, Alden Ehrenreich, Shea Jackson Jr', '33.jpg', 'https://www.youtube.com/watch?v=DuWEEKeJLMI'),
(34, 'Creed III', '6.80', 'Drama', 'Sport', 'Adonis has been thriving in both his career and family life, but when a childhood friend and former boxing prodigy resurfaces, the face-off is more than just a fight', 'Michael B. Jordan', 'Michael B. Jordan, Tessa Thompson, Jonathan Majors', '34.jpg', 'https://www.youtube.com/watch?v=AHmCH7iB_IM'),
(35, 'Shazam! Fury of the Gods', '6.00', 'Action', 'Adventure', 'The film continues the story of teenage Billy Batson who, upon reciting the magic word \"SHAZAM!\" is transformed into his adult Super Hero alter ego, Shazam', 'David F. Sandberg', 'Zachary Levi, Asher Angel, Jack Dylan Grazer', '35.jpg', 'https://www.youtube.com/watch?v=Zi88i4CpHe4'),
(36, 'John Wick: Chapter 4', '7.70', 'Crime', 'Thriller', 'John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes', 'Chad Stahelski', 'Keanu Reeves, Laurence Fishburne, George Georgiou', '36.jpg', 'https://www.youtube.com/watch?v=qEVUtrk8_B4'),
(37, 'Dungeons & Dragons: Honour Among Thieves', '7.30', 'Action', 'Adventure', 'A charming thief and a band of unlikely adventurers embark on an epic quest to retrieve a lost relic, but things go dangerously awry when they run afoul of the wrong people', 'John Francis Daley, Jonathan Goldstein', 'Chris Pine, Michelle Rodriguez, Regé-Jean Page', '37.jpg', 'https://www.youtube.com/watch?v=IiMinixSXII'),
(38, 'Air', '7.40', 'Drama', 'Sport', 'Follows the history of sports marketing executive Sonny Vaccaro, and how he led Nike in its pursuit of the greatest athlete in the history of basketball, Michael Jordan', 'Ben Affleck', 'Matt Damon, Jason Bateman , Ben Affleck', '38.jpg', 'https://www.youtube.com/watch?v=Euy4Yu6B3nU'),
(39, 'Missing', '7.10', 'Drama', 'Mystery', 'Still reeling from the loss of Gamora, Peter Quill rallies his team to defend the universe and one of their own - a mission that could mean the end of the Guardians if not successful', 'N James Gunn', 'Chris Pratt, Chukwudi Iwuji, Bradley Cooper', '39.jpg', 'https://www.youtube.com/watch?v=mnjMrtGctb4'),
(40, 'Guardians of the Galaxy Vol. 3', '7.90', 'Action ', 'Adventure', 'Still reeling from the loss of Gamora, Peter Quill rallies his team to defend the universe and one of their own - a mission that could mean the end of the Guardians if not successful', 'N James Gunn', 'Chris Pratt, Chukwudi Iwuji, Bradley Cooper', '40.jpg', 'https://www.youtube.com/watch?v=u3V5KDHRQvk'),
(41, 'Hypnotic', '5.50', 'Action', 'Mystery', 'A detective investigates a mystery involving his missing daughter and a secret government program', 'Robert Rodriguez', 'Ben Affleck, Alice Braga, JD Pardo', '41.jpg', 'https://www.youtube.com/watch?v=fgU1Z_LGRzg'),
(42, 'The Flash', '6.70', 'Action', 'Mystery', 'Barry Allen uses his super speed to change the past, but his attempt to save his family creates a world without super heroes, forcing him to race for his life in order to save the future', 'Andy Muschietti', 'Ezra Miller, Michael Keaton, Sasha Calle', '42.jpg', 'https://www.youtube.com/watch?v=uQaB7a2eDOA'),
(43, 'No Hard Feelings', '6.40', 'Comedy', 'Romance', 'On the brink of losing her home, Maddie finds an intriguing job listing: helicopter parents looking for someone to bring their introverted 19-year-old son out of his shell before college. She has one summer to make him a man or die trying', 'Gene Stupnitsky', 'Jennifer Lawrence, Andrew Barth Feldman, Laura Benanti', '43.jpg', 'https://www.youtube.com/watch?v=7YltZNdnRUY'),
(44, 'Asteroid City', '6.40', 'Comedy', 'Romance', 'Following a writer on his world famous fictional play about a grieving father who travels with his tech-obsessed family to small rural Asteroid City to compete in a junior stargazing event, only to have his world view disrupted forever', 'Wes Anderson', 'Jason Schwartzman, Scarlett Johansson, Tom Hanks', '44.jpg', 'https://www.youtube.com/watch?v=15SbuNKgN-w'),
(45, 'Indiana Jones and the Dial of Destiny', '6.60', 'Action', 'Adventure', 'Archaeologist Indiana Jones races against time to retrieve a legendary artifact that can change the course of history', 'James Mangold', 'Harrison Ford, Phoebe Waller-Bridge, Antonio Banderas', '45.jpg', 'https://www.youtube.com/watch?v=eQfMbSe7F2g'),
(46, 'Animal', '7.50', 'Action', 'Crime', 'A son love for his father. Often away due to work the father is unable to comprehend the intensity of his sons love. Ironically, this fervent love and admiration for his father and family creates conflict between the father and son', 'Sandeep Reddy Vanga', 'Suresh Bandaru, Saurabh Gupta, Pranay Reddy Vanga', '46.jpg', 'https://www.youtube.com/watch?v=Dydmpfo68DA'),
(47, 'Yellowstone', '7.50', 'Drama', 'Western', 'A ranching family in Montana faces off against others encroaching on their land', 'John Linson, Taylor Sheridan', 'Kevin Costner, Luke Grimes, Kelly Reilly', '47.jpg', 'https://www.youtube.com/watch?v=suobrMPBLlo'),
(48, 'Game of Thrones', '9.20', 'Action', 'Adventure', 'Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for a millennia', 'David Benioff, D.B. Weiss', 'Emilia Clarke, Peter Dinklage, Kit Harington', '48.jpg', 'https://youtu.be/KPLWWIOCOOQ?si=0ArUwSme1Q_47YL0'),
(49, 'Invincible', '9.20', 'Action', 'Adventure', 'An adult animated series based on the Skybound/Image comic about a teenager whose father is the most powerful superhero on the planet', 'Robert Kirkman, Ryan Ottley', 'Steven Yeun, J.K. Simmons, Sandra Oh', '49.jpg', 'https://youtu.be/-bfAVpuko5o?si=Rth_2STHKDBWm8KE'),
(50, 'Godzilla Minus One', '8.50', 'Action', 'Adventure', 'Post war Japan is at its lowest point when a new crisis emerges in the form of a giant monster, baptized in the horrific power of the atomic bomb', 'Takashi Yamazaki', 'Minami Hamabe, Ryunosuke Kamiki, Sakura Ando', '50.jpg', 'https://youtu.be/r7DqccP1Q_4?si=yxL9GVjT44awZxZU');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `movies`
--
ALTER TABLE `movies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
