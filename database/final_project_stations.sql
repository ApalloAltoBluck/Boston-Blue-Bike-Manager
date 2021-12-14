-- MySQL dump 10.13  Distrib 8.0.26, for macos11 (x86_64)
--
-- Host: 127.0.0.1    Database: final_project
-- ------------------------------------------------------
-- Server version	8.0.25

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `stations`
--

DROP TABLE IF EXISTS `stations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stations` (
  `station_id` int NOT NULL,
  `external_id` varchar(255) DEFAULT NULL,
  `name_` varchar(255) DEFAULT NULL,
  `short_name` varchar(255) DEFAULT NULL,
  `capacity` int DEFAULT NULL,
  `lat` double DEFAULT NULL,
  `lon` double DEFAULT NULL,
  `rental_url` varchar(255) DEFAULT NULL,
  `station_type` varchar(255) DEFAULT NULL,
  `electric_bike_surcharge_waiver` tinyint(1) DEFAULT NULL,
  `eightd_has_key_dispenser` tinyint(1) DEFAULT NULL,
  `region_id` int DEFAULT NULL,
  `has_kiosk` tinyint(1) DEFAULT NULL,
  `legacy_id` int DEFAULT NULL,
  PRIMARY KEY (`station_id`),
  KEY `region_id` (`region_id`),
  CONSTRAINT `stations_ibfk_1` FOREIGN KEY (`region_id`) REFERENCES `regions` (`region_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stations`
--

LOCK TABLES `stations` WRITE;
/*!40000 ALTER TABLE `stations` DISABLE KEYS */;
INSERT INTO `stations` VALUES (3,'f83464e4-0de8-11e7-991c-3863bb43a7d0','Colleges of the Fenway - Fenway at Avenue Louis Pasteur','B32006',16,42.34011512249236,-71.10061883926392,'https://www.bluebikes.com/app?station_id=3','classic',0,1,1,1,3),(4,'f834658f-0de8-11e7-991c-3863bb43a7d0','Northeastern University - North Parking Lot','C32000',25,42.345392,-71.069616,'https://www.bluebikes.com/app?station_id=5','classic',0,0,NULL,1,4),(5,'f83464e4-0de8-11e7-991c-3863bb43a7d0','Colleges of the Fenway - Fenway at Avenue Louis Pasteur','B32006',15,42.34011512249236,-71.10061883926392,'https://www.bluebikes.com/app?station_id=3','SUPER',0,0,1,1,NULL),(6,'f83464e4-0de8-11e7-991c-3863bb43a7d0','Colleges of the Fenway - Fenway at Avenue Louis Pasteur','B32006',15,42.34011512249236,-71.10061883926392,'https://www.bluebikes.com/app?station_id=3','classic',0,0,1,1,NULL),(7,'f83464e4-0de8-11e7-991c-3863bb43a7d0','HARVARD UNIVERSITY','B32006',15,42.34011512249236,-71.10061883926392,'https://www.bluebikes.com/app?station_id=3','classic',0,0,NULL,1,NULL);
/*!40000 ALTER TABLE `stations` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-14 17:12:46
