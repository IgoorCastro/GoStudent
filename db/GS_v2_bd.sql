-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: gostudent_v1
-- ------------------------------------------------------
-- Server version	8.0.34

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
-- Table structure for table `administrador`
--

DROP TABLE IF EXISTS `administrador`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `administrador` (
  `adm_id` int NOT NULL,
  `adm_nome` varchar(50) NOT NULL,
  `adm_email` varchar(100) NOT NULL,
  `adm_senha` varchar(20) NOT NULL,
  PRIMARY KEY (`adm_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `administrador`
--

LOCK TABLES `administrador` WRITE;
/*!40000 ALTER TABLE `administrador` DISABLE KEYS */;
/*!40000 ALTER TABLE `administrador` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `agendaaluno`
--

DROP TABLE IF EXISTS `agendaaluno`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `agendaaluno` (
  `eve_id` int NOT NULL,
  `alu_id` int NOT NULL,
  `dis_id` int NOT NULL,
  `cat_id` int NOT NULL,
  `eve_titulo` varchar(100) NOT NULL,
  `eve_descricao` text,
  `eve_dataHora` datetime NOT NULL,
  `eve_sala` varchar(255) DEFAULT NULL,
  `eve_notificacao` time NOT NULL DEFAULT '00:30:00',
  PRIMARY KEY (`eve_id`),
  KEY `agendaaluno_ibfk_1` (`alu_id`),
  KEY `agendaaluno_ibfk_2` (`dis_id`),
  KEY `agendaaluno_ibfk_3` (`cat_id`),
  CONSTRAINT `agendaaluno_ibfk_1` FOREIGN KEY (`alu_id`) REFERENCES `aluno` (`alu_id`),
  CONSTRAINT `agendaaluno_ibfk_2` FOREIGN KEY (`dis_id`) REFERENCES `disciplina` (`dis_id`),
  CONSTRAINT `agendaaluno_ibfk_3` FOREIGN KEY (`cat_id`) REFERENCES `categoria` (`cat_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `agendaaluno`
--

LOCK TABLES `agendaaluno` WRITE;
/*!40000 ALTER TABLE `agendaaluno` DISABLE KEYS */;
/*!40000 ALTER TABLE `agendaaluno` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `aluno`
--

DROP TABLE IF EXISTS `aluno`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `aluno` (
  `alu_id` int NOT NULL,
  `alu_ra` varchar(50) NOT NULL,
  `alu_nome` varchar(50) NOT NULL,
  `alu_email` varchar(100) NOT NULL,
  `alu_senha` varchar(20) NOT NULL,
  `alu_ativo` tinyint(1) NOT NULL,
  `cur_id` int DEFAULT NULL,
  `ins_id` int DEFAULT NULL,
  PRIMARY KEY (`alu_id`),
  KEY `cur_id` (`cur_id`),
  KEY `ins_id` (`ins_id`),
  CONSTRAINT `aluno_ibfk_1` FOREIGN KEY (`cur_id`) REFERENCES `curso` (`cur_id`),
  CONSTRAINT `aluno_ibfk_2` FOREIGN KEY (`ins_id`) REFERENCES `instituicao` (`ins_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `aluno`
--

LOCK TABLES `aluno` WRITE;
/*!40000 ALTER TABLE `aluno` DISABLE KEYS */;
/*!40000 ALTER TABLE `aluno` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categoria`
--

DROP TABLE IF EXISTS `categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categoria` (
  `cat_id` int NOT NULL,
  `cat_nome` varchar(50) NOT NULL,
  PRIMARY KEY (`cat_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria`
--

LOCK TABLES `categoria` WRITE;
/*!40000 ALTER TABLE `categoria` DISABLE KEYS */;
/*!40000 ALTER TABLE `categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `curso`
--

DROP TABLE IF EXISTS `curso`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `curso` (
  `cur_id` int NOT NULL,
  `cur_nome` varchar(50) NOT NULL,
  PRIMARY KEY (`cur_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `curso`
--

LOCK TABLES `curso` WRITE;
/*!40000 ALTER TABLE `curso` DISABLE KEYS */;
/*!40000 ALTER TABLE `curso` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `disciplina`
--

DROP TABLE IF EXISTS `disciplina`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `disciplina` (
  `dis_id` int NOT NULL,
  `dis_nome` varchar(50) NOT NULL,
  PRIMARY KEY (`dis_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `disciplina`
--

LOCK TABLES `disciplina` WRITE;
/*!40000 ALTER TABLE `disciplina` DISABLE KEYS */;
/*!40000 ALTER TABLE `disciplina` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `horarioaulas`
--

DROP TABLE IF EXISTS `horarioaulas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `horarioaulas` (
  `hor_id` int NOT NULL,
  `alu_id` int DEFAULT NULL,
  `dis_id` int DEFAULT NULL,
  `hor_diaSemana` varchar(15) NOT NULL,
  `hor_inicio` time NOT NULL,
  `hor_termino` time NOT NULL,
  `hor_sala` varchar(255) NOT NULL,
  PRIMARY KEY (`hor_id`),
  KEY `alu_id` (`alu_id`),
  KEY `dis_id` (`dis_id`),
  CONSTRAINT `horarioaulas_ibfk_1` FOREIGN KEY (`alu_id`) REFERENCES `aluno` (`alu_id`),
  CONSTRAINT `horarioaulas_ibfk_2` FOREIGN KEY (`dis_id`) REFERENCES `disciplina` (`dis_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `horarioaulas`
--

LOCK TABLES `horarioaulas` WRITE;
/*!40000 ALTER TABLE `horarioaulas` DISABLE KEYS */;
/*!40000 ALTER TABLE `horarioaulas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `instituicao`
--

DROP TABLE IF EXISTS `instituicao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `instituicao` (
  `ins_id` int NOT NULL,
  `ins_cnpj` varchar(20) NOT NULL,
  `ins_nome` varchar(100) NOT NULL,
  `ins_email` varchar(100) NOT NULL,
  `ins_senha` varchar(20) NOT NULL,
  `ins_telefone` varchar(20) NOT NULL,
  PRIMARY KEY (`ins_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `instituicao`
--

LOCK TABLES `instituicao` WRITE;
/*!40000 ALTER TABLE `instituicao` DISABLE KEYS */;
/*!40000 ALTER TABLE `instituicao` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-12 12:24:29
