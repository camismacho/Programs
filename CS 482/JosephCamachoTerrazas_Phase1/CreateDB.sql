/*Author: Joseph Camacho-Terrazas*/
/*CreateDB.sql*/

create table Players (
    Name varchar(64),
    PlayerID integer UNIQUE,
    TeamName varchar(128), 
    Position char(2), 
    Touchdowns integer,
    TotalYards integer,
    Salary integer,
    PRIMARY KEY(PlayerID),
    CHECK (Position = 'QB' OR Position = 'RB' OR Position = 'WR')
);

create table Games (
    GameID integer UNIQUE,
    Date date,
    Stadium varchar(128),
    Result char(2),
    Attendance integer,
    TicketRevenue integer,
    PRIMARY KEY(GameID),
    CHECK (Result = 'W' OR Result = 'L' OR Result = 'T')
);

create table Play (
    PlayerID integer,
    GameID integer,
    FOREIGN KEY (PlayerID) REFERENCES Players(PlayerID),
    FOREIGN KEY (GameID) REFERENCES Games(GameID)
);
