-- phpMyAdmin SQL Dump
-- version 4.7.1
-- https://www.phpmyadmin.net/
--
-- Hôte : sql5.freesqldatabase.com
-- Généré le :  ven. 09 juin 2023 à 21:08
-- Version du serveur :  5.5.62-0ubuntu0.14.04.1
-- Version de PHP :  7.0.33-0ubuntu0.16.04.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `sql5623886`
--
CREATE DATABASE IF NOT EXISTS `sql5623886` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `sql5623886`;

-- --------------------------------------------------------

--
-- Structure de la table `circuits`
--

CREATE TABLE `circuits` (
  `idc` int(11) NOT NULL,
  `description` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `dated` date NOT NULL,
  `datef` date NOT NULL,
  `nbparticipants` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `connexion`
--

CREATE TABLE `connexion` (
  `idcm` int(11) NOT NULL,
  `courriel` varchar(100) NOT NULL,
  `mot_de_passe` varchar(200) NOT NULL,
  `role` varchar(1) NOT NULL,
  `status` varchar(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `etapes`
--

CREATE TABLE `etapes` (
  `ide` int(11) NOT NULL,
  `idc` int(11) NOT NULL,
  `lieu` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `dated` date NOT NULL,
  `datef` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `membres`
--

CREATE TABLE `membres` (
  `idm` int(11) NOT NULL,
  `nom` varchar(100) NOT NULL,
  `prenom` varchar(100) NOT NULL,
  `courriel` varchar(100) NOT NULL,
  `sexe` varchar(100) NOT NULL,
  `date_de_naissance` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `sous_etapes`
--

CREATE TABLE `sous_etapes` (
  `ide` int(11) NOT NULL,
  `description` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `activites` varchar(200) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `circuits`
--
ALTER TABLE `circuits`
  ADD PRIMARY KEY (`idc`);

--
-- Index pour la table `connexion`
--
ALTER TABLE `connexion`
  ADD KEY `membres_idm_PK` (`idcm`);

--
-- Index pour la table `etapes`
--
ALTER TABLE `etapes`
  ADD PRIMARY KEY (`ide`),
  ADD KEY `etapes_idc_FK` (`idc`);

--
-- Index pour la table `membres`
--
ALTER TABLE `membres`
  ADD PRIMARY KEY (`idm`),
  ADD UNIQUE KEY `courriel` (`courriel`);

--
-- Index pour la table `sous_etapes`
--
ALTER TABLE `sous_etapes`
  ADD KEY `sous_etapes_ide_FK` (`ide`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `circuits`
--
ALTER TABLE `circuits`
  MODIFY `idc` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `etapes`
--
ALTER TABLE `etapes`
  MODIFY `ide` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `membres`
--
ALTER TABLE `membres`
  MODIFY `idm` int(11) NOT NULL AUTO_INCREMENT;
--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `connexion`
--
ALTER TABLE `connexion`
  ADD CONSTRAINT `membres_idm_PK` FOREIGN KEY (`idcm`) REFERENCES `membres` (`idm`);

--
-- Contraintes pour la table `etapes`
--
ALTER TABLE `etapes`
  ADD CONSTRAINT `etapes_idc_FK` FOREIGN KEY (`idc`) REFERENCES `circuits` (`idc`);

--
-- Contraintes pour la table `sous_etapes`
--
ALTER TABLE `sous_etapes`
  ADD CONSTRAINT `sous_etapes_ide_FK` FOREIGN KEY (`ide`) REFERENCES `etapes` (`ide`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
