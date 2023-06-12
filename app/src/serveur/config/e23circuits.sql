--
-- Base de données : `e23circuits`
--
-- CREATE DATABASE IF NOT EXISTS `e23circuits` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
-- USE `e23circuits`;

-- --------------------------------------------------------

--
-- Structure de la table `circuits`
--

CREATE TABLE `circuits` (
  `idc` int(11) AUTO_INCREMENT,
  `description` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `dated` date NOT NULL,
  `datef` date NOT NULL,
  `nbparticipants` int(11) NOT NULL,
  CONSTRAINT circuits_idc_PK PRIMARY KEY(idc)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `etapes`
--

CREATE TABLE `etapes` (
  `ide` int(11) AUTO_INCREMENT,
  `idc` int(11) NOT NULL,
  `lieu` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `dated` date NOT NULL,
  `datef` date NOT NULL,
  CONSTRAINT etapes_ide_PK PRIMARY KEY(ide),
  CONSTRAINT etapes_idc_FK FOREIGN KEY(idc) REFERENCES circuits(idc)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `sous_etapes`
--

CREATE TABLE `sous_etapes` (
  `ide` int(11) NOT NULL,
  `description` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `activites` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  CONSTRAINT sous_etapes_ide_FK FOREIGN KEY(ide) REFERENCES etapes(ide)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
