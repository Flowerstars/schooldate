# ************************************************************
# Sequel Pro SQL dump
# Version 3408
#
# http://www.sequelpro.com/
# http://code.google.com/p/sequel-pro/
#
# Host: 127.0.0.1 (MySQL 5.5.9)
# Database: SchoolDate
# Generation Time: 2011-11-08 20:36:46 -0500
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table sd_academic
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sd_academic`;

CREATE TABLE `sd_academic` (
  `name` varchar(50) NOT NULL,
  `value` varchar(50) NOT NULL,
  `langcode` varchar(2) NOT NULL,
  KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `sd_academic` WRITE;
/*!40000 ALTER TABLE `sd_academic` DISABLE KEYS */;

INSERT INTO `sd_academic` (`name`, `value`, `langcode`)
VALUES
	('undergraduate','Undergraduate','en'),
	('graduate','Graduate','en'),
	('alumni','Alumni','en');

/*!40000 ALTER TABLE `sd_academic` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table sd_adminsettings
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sd_adminsettings`;

CREATE TABLE `sd_adminsettings` (
  `key` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `value` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `sd_adminsettings` WRITE;
/*!40000 ALTER TABLE `sd_adminsettings` DISABLE KEYS */;

INSERT INTO `sd_adminsettings` (`key`, `value`)
VALUES
	(X'6C696B6573',X'476F696E6720746F20746865206D6F766965733B44616E63696E673B536D6F6B696E672055703B4C697374656E696E6720746F204D757369633B417474656E64696E6720436F6E63657274733B417474656E64696E672053706F7274696E67204576656E743B52656164696E673B416476656E747572652053706F7274733B54726176656C696E673B4578706572696D656E74696E67205769746820466F6F643B50686F746F6772617068793B496E646F6F722053706F727473');

/*!40000 ALTER TABLE `sd_adminsettings` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table sd_bodytypes
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sd_bodytypes`;

CREATE TABLE `sd_bodytypes` (
  `name` varchar(50) NOT NULL,
  `value` varchar(50) NOT NULL,
  `langcode` varchar(2) NOT NULL,
  KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `sd_bodytypes` WRITE;
/*!40000 ALTER TABLE `sd_bodytypes` DISABLE KEYS */;

INSERT INTO `sd_bodytypes` (`name`, `value`, `langcode`)
VALUES
	('slender','Slender','en'),
	('toned','Toned','en'),
	('built','Built','en'),
	('average','Average','en'),
	('heavyset','Heavyset','en');

/*!40000 ALTER TABLE `sd_bodytypes` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table sd_drinkings
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sd_drinkings`;

CREATE TABLE `sd_drinkings` (
  `name` varchar(50) NOT NULL,
  `value` varchar(50) NOT NULL,
  `langcode` varchar(2) NOT NULL,
  KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `sd_drinkings` WRITE;
/*!40000 ALTER TABLE `sd_drinkings` DISABLE KEYS */;

INSERT INTO `sd_drinkings` (`name`, `value`, `langcode`)
VALUES
	('very often','Yes &ndash; I drink very often','en'),
	('socially','Yes &ndash; I drink socially','en'),
	('no','No &ndash; I do not drink','en');

/*!40000 ALTER TABLE `sd_drinkings` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table sd_ethnicities
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sd_ethnicities`;

CREATE TABLE `sd_ethnicities` (
  `name` varchar(50) NOT NULL,
  `value` varchar(50) NOT NULL,
  `langcode` varchar(2) NOT NULL DEFAULT 'en',
  KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `sd_ethnicities` WRITE;
/*!40000 ALTER TABLE `sd_ethnicities` DISABLE KEYS */;

INSERT INTO `sd_ethnicities` (`name`, `value`, `langcode`)
VALUES
	('african-american','African-American','en'),
	('asian','Asian','en'),
	('white','white','en'),
	('indian','Indian','en'),
	('hispanic','Hispanic','en'),
	('middle-eastern','Middle-Eastern','en'),
	('native american','Native American','en');

/*!40000 ALTER TABLE `sd_ethnicities` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table sd_eyecolors
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sd_eyecolors`;

CREATE TABLE `sd_eyecolors` (
  `name` varchar(50) NOT NULL,
  `value` varchar(50) NOT NULL,
  `langcode` varchar(2) NOT NULL,
  KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `sd_eyecolors` WRITE;
/*!40000 ALTER TABLE `sd_eyecolors` DISABLE KEYS */;

INSERT INTO `sd_eyecolors` (`name`, `value`, `langcode`)
VALUES
	('black','Black','en'),
	('blue','Blue','en'),
	('brown','Brown','en'),
	('green','Green','en'),
	('grey','Grey','en'),
	('hazel','Hazel','en');

/*!40000 ALTER TABLE `sd_eyecolors` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table sd_faiths
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sd_faiths`;

CREATE TABLE `sd_faiths` (
  `name` varchar(50) NOT NULL,
  `value` varchar(50) NOT NULL,
  `langcode` varchar(2) NOT NULL DEFAULT 'en',
  KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `sd_faiths` WRITE;
/*!40000 ALTER TABLE `sd_faiths` DISABLE KEYS */;

INSERT INTO `sd_faiths` (`name`, `value`, `langcode`)
VALUES
	('agnostic','Agnostic','en'),
	('athiest','Athiest','en'),
	('buddhist','Buddhist','en'),
	('catholic','Catholic','en'),
	('christian','Christian','en'),
	('hindu','Hindu','en'),
	('jewish','Jewish','en'),
	('muslim','Muslim','en'),
	('other','Other','en');

/*!40000 ALTER TABLE `sd_faiths` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table sd_freetimes
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sd_freetimes`;

CREATE TABLE `sd_freetimes` (
  `name` varchar(50) NOT NULL,
  `value` varchar(50) NOT NULL,
  `langcode` varchar(2) NOT NULL,
  KEY `name` (`name`,`langcode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `sd_freetimes` WRITE;
/*!40000 ALTER TABLE `sd_freetimes` DISABLE KEYS */;

INSERT INTO `sd_freetimes` (`name`, `value`, `langcode`)
VALUES
	('hangout','I like to hang out with friends','en'),
	('music','I like listening to music','en'),
	('books','I like to read books','en'),
	('longwalks','I like to go on long walks','en'),
	('ice-cream','I love ice-cream','en'),
	('cinema','I love going to the movies','en'),
	('smoking','I love smoking up','en'),
	('clubbing','I like to go clubbing','en'),
	('jog','Love a good jog',''),
	('football','Like watching football','en'),
	('consoles','I love PS3/XBOX','en'),
	('science','Science interests me','en'),
	('shopping','I LOVE shopping','en');

/*!40000 ALTER TABLE `sd_freetimes` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table sd_haircolors
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sd_haircolors`;

CREATE TABLE `sd_haircolors` (
  `name` varchar(50) NOT NULL,
  `value` varchar(50) NOT NULL,
  `langcode` varchar(2) NOT NULL,
  KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `sd_haircolors` WRITE;
/*!40000 ALTER TABLE `sd_haircolors` DISABLE KEYS */;

INSERT INTO `sd_haircolors` (`name`, `value`, `langcode`)
VALUES
	('black','Black','en'),
	('blonde','Blonde','en'),
	('dark-blonde','Dark blonde','en'),
	('light-brown','Light brown','en'),
	('dark-brown','Dark brown','en'),
	('auburn-red','Auburn / red','en'),
	('grey','Grey','en'),
	('bald','Bald','en');

/*!40000 ALTER TABLE `sd_haircolors` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table sd_heights
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sd_heights`;

CREATE TABLE `sd_heights` (
  `name` varchar(50) NOT NULL,
  `value` varchar(50) NOT NULL,
  `langcode` varchar(2) NOT NULL DEFAULT 'en',
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `sd_heights` WRITE;
/*!40000 ALTER TABLE `sd_heights` DISABLE KEYS */;

INSERT INTO `sd_heights` (`name`, `value`, `langcode`)
VALUES
	('same','Same height as me','en'),
	('shorter','Shorter than me','en'),
	('taller','Taller than me','en');

/*!40000 ALTER TABLE `sd_heights` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table sd_horoscopes
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sd_horoscopes`;

CREATE TABLE `sd_horoscopes` (
  `name` varchar(50) NOT NULL,
  `value` varchar(50) NOT NULL,
  `date` date NOT NULL,
  `langcode` varchar(2) NOT NULL,
  KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `sd_horoscopes` WRITE;
/*!40000 ALTER TABLE `sd_horoscopes` DISABLE KEYS */;

INSERT INTO `sd_horoscopes` (`name`, `value`, `date`, `langcode`)
VALUES
	('aries','Aries','2011-03-21','en'),
	('taurus','Taurus','2011-04-21','en'),
	('gemini','Gemini','2011-05-22','en'),
	('cancer','Cancer','2011-06-22','en'),
	('leo','Leo','2011-07-23','en'),
	('virgo','Virgo','2011-08-23','en'),
	('libra','Libra','2011-09-22','en'),
	('scorpio','Scorpio','2011-10-23','en'),
	('sagittarius','Sagittarius','2011-11-22','en'),
	('capricorn','Capricorn','2011-12-22','en'),
	('aquarius','Aquarius','2012-01-21','en'),
	('pisces','Pisces','2012-02-20','en');

/*!40000 ALTER TABLE `sd_horoscopes` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table sd_members
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sd_members`;

CREATE TABLE `sd_members` (
  `memberid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `email` varchar(75) NOT NULL,
  `salt` varchar(6) NOT NULL,
  `password` varchar(64) NOT NULL,
  `account` enum('freemium','premium') NOT NULL,
  `registration` datetime NOT NULL,
  `gender` varchar(10) NOT NULL,
  `interested` varchar(10) NOT NULL,
  `verification` varchar(40) NOT NULL,
  `verified` tinyint(1) NOT NULL DEFAULT '0',
  `active` tinyint(1) unsigned NOT NULL DEFAULT '1',
  PRIMARY KEY (`memberid`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `sd_members` WRITE;
/*!40000 ALTER TABLE `sd_members` DISABLE KEYS */;

INSERT INTO `sd_members` (`memberid`, `username`, `email`, `salt`, `password`, `account`, `registration`, `gender`, `interested`, `verification`, `verified`, `active`)
VALUES
	(1,'wardpeet','warrepeeters@gmail.com','25fd52','38c02f5b644ea48d8948edd461d03b72041f7754808f2ba129cc3ed42e7b6148','premium','2011-08-05 21:23:38','male','women','WN6SXU*@Yc#(w1d!RL&V9_A=)HZKxvsD5z8Ch7%$',1,1),
	(2,'wardpeet2','wardpeeters@julliard.edu','a566ff','c795c0a1dd3fe7bacd6113ff2ce27561081c11f6f1c329b8c3abcae1d0ada6b8','freemium','2011-09-16 12:41:32','male','women','UQHm)$M%@I=REt(a+JPO_94khFs0L2dY8KWq#v*y',0,1);

/*!40000 ALTER TABLE `sd_members` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table sd_messages
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sd_messages`;

CREATE TABLE `sd_messages` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `sender` int(10) unsigned NOT NULL,
  `receiver` int(10) unsigned NOT NULL,
  `date` datetime NOT NULL,
  `message` text NOT NULL,
  `read` tinyint(1) NOT NULL,
  `startid` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `sd_messages` WRITE;
/*!40000 ALTER TABLE `sd_messages` DISABLE KEYS */;

INSERT INTO `sd_messages` (`id`, `sender`, `receiver`, `date`, `message`, `read`, `startid`)
VALUES
	(1,2,1,'2011-09-20 08:00:00','Hey I was wondering if we could go check out the Museum sometime this weekend? I hear they\'ve this new exhibit - something about Mummies..',1,NULL),
	(2,1,2,'2011-09-20 14:00:00','Hey I was wondering if we could go check out the Museum sometime this weekend? I hear they\'ve this new exhibit - something about Mummies..',1,1),
	(37,1,2,'2011-09-21 23:00:05','last reply',0,1),
	(38,1,1,'2011-09-28 23:30:08','test',0,0),
	(39,1,1,'2011-09-28 23:30:59','jow',0,38);

/*!40000 ALTER TABLE `sd_messages` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table sd_nationalities
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sd_nationalities`;

CREATE TABLE `sd_nationalities` (
  `name` varchar(50) NOT NULL,
  `value` varchar(50) NOT NULL,
  `langcode` varchar(2) NOT NULL,
  KEY `name` (`name`),
  KEY `name_2` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `sd_nationalities` WRITE;
/*!40000 ALTER TABLE `sd_nationalities` DISABLE KEYS */;

INSERT INTO `sd_nationalities` (`name`, `value`, `langcode`)
VALUES
	('african','African ','en'),
	('american','American\n','en'),
	('arabian','Arabian','en'),
	('argentinean','Argentinean ','en'),
	('asian','Asian','en'),
	('australian','Australian','en'),
	('belgian','Belgian','en'),
	('brazilian','Brazilian','en'),
	('british','British','en'),
	('chinese','Chinese','en'),
	('danish','Danish','en'),
	('dutch','Dutch','en'),
	('filipino','Filipino','en'),
	('finnish','Finnish','en'),
	('french','French','en'),
	('german','German','en'),
	('greek','Greek','en'),
	('guinean','Guinean','en'),
	('hungarian','Hungarian','en'),
	('indonesian','Indonesian','en'),
	('iranian','Iranian','en'),
	('iraqi','Iraqi','en'),
	('irish','Irish','en'),
	('israeli','Israeli','en'),
	('italian','Italian','en'),
	('japanese','Japanese','en'),
	('norwegian','Norwegian ','en'),
	('pakistani','Pakistani ','en'),
	('polish','Polish','en'),
	('portuguese','Portuguese','en'),
	('scottish','Scottish','en'),
	('senegalese','Senegalese','en'),
	('spanish','Spanish','en'),
	('swedish','Swedish','en'),
	('swiss','Swiss','en'),
	('thai','Thai','en'),
	('turkish','Turkish','en'),
	('vietnamese','Vietnamese','en'),
	('welsh','Welsh','en'),
	('other','Other','en');

/*!40000 ALTER TABLE `sd_nationalities` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table sd_photos
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sd_photos`;

CREATE TABLE `sd_photos` (
  `username` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `filename` varchar(100) NOT NULL,
  `location` varchar(100) NOT NULL,
  `uploaded` datetime NOT NULL,
  `position` int(11) NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `sd_photos` WRITE;
/*!40000 ALTER TABLE `sd_photos` DISABLE KEYS */;

INSERT INTO `sd_photos` (`username`, `filename`, `location`, `uploaded`, `position`)
VALUES
	(X'7761726470656574','wardpeet.jpg','/template/images/members/','2011-09-16 00:00:00',1);

/*!40000 ALTER TABLE `sd_photos` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table sd_politicals
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sd_politicals`;

CREATE TABLE `sd_politicals` (
  `name` varchar(50) NOT NULL,
  `value` varchar(50) NOT NULL,
  `langcode` varchar(2) NOT NULL,
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `sd_politicals` WRITE;
/*!40000 ALTER TABLE `sd_politicals` DISABLE KEYS */;

INSERT INTO `sd_politicals` (`name`, `value`, `langcode`)
VALUES
	('apathetic','Apathetic','en'),
	('communist','Communist','en'),
	('democrat','Democrat','en'),
	('libertarian','Libertarian','en'),
	('moderate','Moderate','en'),
	('occupy wall street','Occupy Wall Street','en'),
	('other','Other','en'),
	('republican','Republican','en'),
	('socialist','Socialist','en'),
	('tea-party','Tea Party','en'),
	('very-conservative','Very Conservative','en'),
	('very-liberal','Very Liberal','en');

/*!40000 ALTER TABLE `sd_politicals` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table sd_profiles
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sd_profiles`;

CREATE TABLE `sd_profiles` (
  `memberid` int(11) NOT NULL,
  `online` varchar(20) NOT NULL,
  `status` varchar(50) NOT NULL,
  `school` varchar(50) NOT NULL,
  `dateofbirth` date NOT NULL,
  `height` smallint(3) NOT NULL,
  `bodytype` varchar(30) NOT NULL,
  `eyecolor` varchar(30) NOT NULL,
  `haircolor` varchar(30) NOT NULL,
  `nationality` varchar(30) NOT NULL,
  `ethnicity` varchar(50) NOT NULL,
  `political` varchar(50) NOT NULL,
  `faith` varchar(50) NOT NULL,
  `smoking` varchar(50) NOT NULL,
  `drinking` varchar(50) NOT NULL,
  `horoscope` varchar(50) NOT NULL,
  `description` text NOT NULL,
  `freetime` tinytext NOT NULL,
  `date` datetime NOT NULL,
  `secondary` varchar(75) NOT NULL,
  `newmessage` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `latestoffers` tinyint(1) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`memberid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `sd_profiles` WRITE;
/*!40000 ALTER TABLE `sd_profiles` DISABLE KEYS */;

INSERT INTO `sd_profiles` (`memberid`, `online`, `status`, `school`, `dateofbirth`, `height`, `bodytype`, `eyecolor`, `haircolor`, `nationality`, `ethnicity`, `political`, `faith`, `smoking`, `drinking`, `horoscope`, `description`, `freetime`, `date`, `secondary`, `newmessage`, `latestoffers`)
VALUES
	(1,'Online now!','alumni','Julliard','1991-09-23',170,'slender','black','black','african','african-american','apathetic','agnostic','often','often','aries','test','longwalks;smoking','0000-00-00 00:00:00','',1,0);

/*!40000 ALTER TABLE `sd_profiles` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table sd_schools
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sd_schools`;

CREATE TABLE `sd_schools` (
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `sd_schools` WRITE;
/*!40000 ALTER TABLE `sd_schools` DISABLE KEYS */;

INSERT INTO `sd_schools` (`name`, `email`)
VALUES
	('Arizona State University ',''),
	('Baruch College',''),
	('Baylor University',''),
	('Binghamton University',''),
	('Boston College',''),
	('Boston University ',''),
	('Brown University',''),
	('Buffalo University',''),
	('California Institute of Technology',''),
	('Carnegie Mellon University',''),
	('Case Western Reserve University ',''),
	('Columbia University ','columbia.edu'),
	('Cooper Union',''),
	('Cornell University',''),
	('Dartmouth College',''),
	('Drexel University ',''),
	('Duke University',''),
	('Emory University',''),
	('Farleigh Dickinson University',''),
	('Fashion Institute of Technology',''),
	('Felician College',''),
	('Florida State University ',''),
	('Fordham University','fordham.edu'),
	('George Washington University',''),
	('Georgetown University',''),
	('Georgia Institute of Technology',''),
	('Harvard College',''),
	('Hunter College',''),
	('Indiana University',''),
	('Iowa State University ',''),
	('John Jay College',''),
	('Johns Hopkins University',''),
	('Julliard','julliard.edu'),
	('Lehigh University',''),
	('Manhattan College',''),
	('Marymount Manhattan College',''),
	('Massachusetts Institute of Technology',''),
	('Michigan State University',''),
	('New York University',''),
	('North Carolina State University',''),
	('Northwestern University',''),
	('Ohio State University Columbus',''),
	('Pace University',''),
	('Parsons The New School for Design',''),
	('Pennsylvania State University University Park',''),
	('Pratt Institute',''),
	('Princeton University',''),
	('Purdue University',''),
	('Ramapo College',''),
	('Rensselaer Polytechnic Institute',''),
	('Rice University',''),
	('Rutgers University',''),
	('School of Visual Arts',''),
	('St. John\'s University',''),
	('Stanford University ',''),
	('Stony Brook University',''),
	('Syracuse University',''),
	('Texas A&M University',''),
	('The College of New Jersey',''),
	('The Juilliard School','julliard.edu'),
	('Tufts University',''),
	('University of Alabama',''),
	('University of Arizona ',''),
	('University of California Berkeley',''),
	('University of California Davis',''),
	('University of California Irvine ',''),
	('University of California Los Angeles',''),
	('University of California Santa Barbara',''),
	('University of California, Riverside ',''),
	('University of California, San Diego',''),
	('University of California, Santa Cruz',''),
	('University of Chicago',''),
	('University of Connecticut',''),
	('University of Delaware ',''),
	('University of Florida',''),
	('University of Georgia ',''),
	('University of Houston',''),
	('University of Illinois Urbana Champaign',''),
	('University of Iowa ',''),
	('University of Kansas',''),
	('University of Maryland College Park',''),
	('University of Massachusetts, Amherst',''),
	('University of Miami ',''),
	('University of Michigan Ann Arbor',''),
	('University of Minnesota',''),
	('University of North Carolina',''),
	('University of Notre Dame ',''),
	('University of Pennsylvania',''),
	('University of Pittsburgh',''),
	('University of Rochester',''),
	('University of Southern California',''),
	('University of Texas, Austin',''),
	('University of Vermont ',''),
	('University of Virginia ',''),
	('University of Washington ',''),
	('University of Wisconsin Madison',''),
	('Vanderbilt University',''),
	('Virginia Tech ',''),
	('Washington State ',''),
	('Washington University in St. Louis',''),
	('William Paterson university',''),
	('Worcester Polytechnic Institute ',''),
	('Yale University','');

/*!40000 ALTER TABLE `sd_schools` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table sd_smokings
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sd_smokings`;

CREATE TABLE `sd_smokings` (
  `name` varchar(50) NOT NULL,
  `value` varchar(50) NOT NULL,
  `langcode` varchar(2) NOT NULL,
  KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `sd_smokings` WRITE;
/*!40000 ALTER TABLE `sd_smokings` DISABLE KEYS */;

INSERT INTO `sd_smokings` (`name`, `value`, `langcode`)
VALUES
	('often','Yes &ndash; I smoke quite often','en'),
	('yes','but I’m trying to quit; only occasionally','en'),
	('no','but I don’t mind smoking','en'),
	('no','No &ndash; I do not smoke','en'),
	('socially','Yes &ndash; I smoke socially','en');

/*!40000 ALTER TABLE `sd_smokings` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table sd_wall
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sd_wall`;

CREATE TABLE `sd_wall` (
  `wid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `member` int(10) unsigned NOT NULL,
  `message` text NOT NULL,
  `tag` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`wid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `sd_wall` WRITE;
/*!40000 ALTER TABLE `sd_wall` DISABLE KEYS */;

INSERT INTO `sd_wall` (`wid`, `member`, `message`, `tag`)
VALUES
	(1,1,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard',NULL),
	(2,1,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard',NULL),
	(3,1,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard',NULL),
	(4,1,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard',NULL),
	(5,1,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard',NULL);

/*!40000 ALTER TABLE `sd_wall` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
