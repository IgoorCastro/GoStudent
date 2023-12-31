-- MySQL Script generated by MySQL Workbench
-- Fri Nov 24 01:17:48 2023
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema gostudent_v1
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema gostudent_v1
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `gostudent_v1` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `gostudent_v1` ;

-- -----------------------------------------------------
-- Table `gostudent_v1`.`administrador`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gostudent_v1`.`administrador` (
  `adm_id` INT NOT NULL,
  `adm_nome` VARCHAR(50) NOT NULL,
  `adm_email` VARCHAR(100) NOT NULL,
  `adm_senha` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`adm_id`),
  UNIQUE INDEX `adm_email` (`adm_email` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `gostudent_v1`.`curso`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gostudent_v1`.`curso` (
  `cur_id` INT NOT NULL,
  `cur_nome` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`cur_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `gostudent_v1`.`instituicao`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gostudent_v1`.`instituicao` (
  `ins_id` INT NOT NULL,
  `ins_cnpj` VARCHAR(20) NOT NULL,
  `ins_nome` VARCHAR(100) NOT NULL,
  `ins_email` VARCHAR(100) NOT NULL,
  `ins_senha` VARCHAR(20) NOT NULL,
  `ins_telefone` VARCHAR(20) NULL DEFAULT NULL,
  `ins_qtdAluno` INT NOT NULL,
  PRIMARY KEY (`ins_id`),
  UNIQUE INDEX `ins_cnpj` (`ins_cnpj` ASC) VISIBLE,
  UNIQUE INDEX `ins_email` (`ins_email` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `gostudent_v1`.`aluno`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gostudent_v1`.`aluno` (
  `alu_id` INT NOT NULL,
  `alu_ra` VARCHAR(50) NOT NULL,
  `alu_nome` VARCHAR(50) NOT NULL,
  `alu_email` VARCHAR(100) NOT NULL,
  `alu_senha` VARCHAR(20) NOT NULL,
  `alu_ativo` TINYINT(1) NOT NULL,
  `cur_id` INT NOT NULL,
  `ins_id` INT NOT NULL,
  PRIMARY KEY (`alu_id`),
  UNIQUE INDEX `alu_ra` (`alu_ra` ASC) VISIBLE,
  UNIQUE INDEX `alu_email` (`alu_email` ASC) VISIBLE,
  INDEX `cur_id` (`cur_id` ASC) VISIBLE,
  INDEX `ins_id` (`ins_id` ASC) VISIBLE,
  CONSTRAINT `aluno_ibfk_1`
    FOREIGN KEY (`cur_id`)
    REFERENCES `gostudent_v1`.`curso` (`cur_id`),
  CONSTRAINT `aluno_ibfk_2`
    FOREIGN KEY (`ins_id`)
    REFERENCES `gostudent_v1`.`instituicao` (`ins_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `gostudent_v1`.`disciplina`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gostudent_v1`.`disciplina` (
  `dis_id` INT NOT NULL,
  `dis_nome` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`dis_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `gostudent_v1`.`categoria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gostudent_v1`.`categoria` (
  `cat_id` INT NOT NULL,
  `cat_nome` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`cat_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `gostudent_v1`.`agendaaluno`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gostudent_v1`.`agendaaluno` (
  `eve_id` INT NOT NULL,
  `alu_id` INT NOT NULL,
  `dis_id` INT NOT NULL,
  `cat_id` INT NOT NULL,
  `eve_titulo` VARCHAR(100) NOT NULL,
  `eve_descricao` TEXT NULL DEFAULT NULL,
  `eve_dataHora` DATETIME NOT NULL,
  `eve_sala` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`eve_id`),
  INDEX `alu_id` (`alu_id` ASC) VISIBLE,
  INDEX `dis_id` (`dis_id` ASC) VISIBLE,
  INDEX `cat_id` (`cat_id` ASC) VISIBLE,
  CONSTRAINT `agendaaluno_ibfk_1`
    FOREIGN KEY (`alu_id`)
    REFERENCES `gostudent_v1`.`aluno` (`alu_id`),
  CONSTRAINT `agendaaluno_ibfk_2`
    FOREIGN KEY (`dis_id`)
    REFERENCES `gostudent_v1`.`disciplina` (`dis_id`),
  CONSTRAINT `agendaaluno_ibfk_3`
    FOREIGN KEY (`cat_id`)
    REFERENCES `gostudent_v1`.`categoria` (`cat_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `gostudent_v1`.`horarioaulas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gostudent_v1`.`horarioaulas` (
  `hor_id` INT NOT NULL,
  `alu_id` INT NOT NULL,
  `dis_id` INT NOT NULL,
  `hor_diaSemana` VARCHAR(15) NOT NULL,
  `hor_inicio` TIME NOT NULL,
  `hor_termino` TIME NOT NULL,
  `hor_sala` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`hor_id`),
  INDEX `alu_id` (`alu_id` ASC) VISIBLE,
  INDEX `dis_id` (`dis_id` ASC) VISIBLE,
  CONSTRAINT `horarioaulas_ibfk_1`
    FOREIGN KEY (`alu_id`)
    REFERENCES `gostudent_v1`.`aluno` (`alu_id`),
  CONSTRAINT `horarioaulas_ibfk_2`
    FOREIGN KEY (`dis_id`)
    REFERENCES `gostudent_v1`.`disciplina` (`dis_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
