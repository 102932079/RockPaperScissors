-- see ERD as picture

-- Relational Schema
/*
PLAYER ( Username )
PRIMARY KEY ( Username )

SELECTION ( Choice )
PRIMARY KEY ( Choice )

TURN ( Username, DataTimePlayed, PlayerChoice, AIChoice )
PRIMARY KEY ( Username, DataTimePlayed )
FOREIGN KEY ( Username ) REFERENCES PLAYER
FOREIGN KEY ( PlayerChoice ) REFERENCES SELECTION ( Choice )
FOREIGN KEY ( AIChoice ) REFERENCES SELECTION ( Choice )
*/

-- DDL Data Definition Language

USE test

GO

IF OBJECT_ID ( 'PLAYER' ) IS NOT NULL
DROP TABLE PLAYER;

IF OBJECT_ID ( 'SELECTION' ) IS NOT NULL
DROP TABLE SELECTION;

IF OBJECT_ID ( 'TURN' ) IS NOT NULL
DROP TABLE TURN;

GO

CREATE TABLE PLAYER (
    Username    NVARCHAR ( 50 ) NOT NULL
,   PRIMARY KEY ( Username )
);
-- The PRIMARY KEY constraint uniquely identifies each record in a table. Primary keys must contain UNIQUE values, and cannot contain NULL values.
CREATE TABLE SELECTION (
    Choice  NVARCHAR ( 8 ) NOT NULL
,   PRIMARY KEY ( Choice )
);

CREATE TABLE TURN (
    Username    NVARCHAR ( 50 ) NOT NULL
,   DateTimePlayed  DateTime NOT NULL
,   PlayerChoice    NVARCHAR ( 8 ) NOT NULL CHECK( PlayerChoice IN ( 'rock', 'paper', 'scissors' ) )
,   AIChoice     NVARCHAR ( 8 ) NOT NULL CHECK( AIChoice IN ( 'rock', 'paper', 'scissors' ) )
,   PRIMARY KEY ( DateTimePlayed, Username )
,   FOREIGN KEY ( Username ) REFERENCES PLAYER
,   FOREIGN KEY ( PlayerChoice ) REFERENCES SELECTION ( Choice )
,   FOREIGN KEY ( AIChoice ) REFERENCES SELECTION ( Choice )
);