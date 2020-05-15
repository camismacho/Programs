CREATE TABLE `midterm_spring2019`.`movie` (
  `Title` VARCHAR(255) NOT NULL,
  `Year` VARCHAR(45) NULL,
  `Length` INT NULL,
  `StudioName` VARCHAR(45) NULL,
  `Budget` INT NULL,
  PRIMARY KEY (`Title`));

CREATE TABLE `midterm_spring2019`.`studio` (
  `Name` VARCHAR(255) NOT NULL,
  `TotalBudget` INT NULL,
  PRIMARY KEY (`Name`));

CREATE TABLE `midterm_spring2019`.`moviestar` (
  `Name` VARCHAR(255) NOT NULL,
  `NetWorth` INT NULL,
  PRIMARY KEY (`Name`));


CREATE TABLE `midterm_spring2019`.`starsin` (
  `movieTitle` VARCHAR(255) NOT NULL,
  `movieYear` INT NULL,
  `starName` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`movieTitle`, `starName`),
  INDEX `starName_idx` (`starName` ASC),
  CONSTRAINT `movieTitle`
    FOREIGN KEY (`movieTitle`)
    REFERENCES `midterm_spring2019`.`movie` (`Title`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `starName`
    FOREIGN KEY (`starName`)
    REFERENCES `midterm_spring2019`.`moviestar` (`Name`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

insert into studio values ('JafariStudios', 2000);
insert into studio values ('OssorginStudios', 1500);

insert into moviestar values ('Keaton', 250);
insert into moviestar values ('Galifianakis', 200);
insert into moviestar values ('Foxx', 500);
insert into moviestar values ('Waltz', 300);
insert into moviestar values ('Teller', 100);
insert into moviestar values ('Simmons', 150);
insert into moviestar values ('McConaughey', 400);
insert into moviestar values ('Hathaway', 300);
insert into moviestar values ('Arquette', 200);
insert into moviestar values ('Coltrane', 100);

insert into movie values ('Birdman', 2014, 119, 'JafariStudios', 700);
insert into movie values ('Django Unchained', 2012, 165, 'JafariStudios', 800);
insert into movie values ('Whiplash', 2014, 106, 'OssorginStudios', 300);
insert into movie values ('Interstellar', 2014, 169, 'OssorginStudios', 600);
insert into movie values ('Boyhood', 2014, 165, 'OssorginStudios', 400);

insert into starsin values ('Birdman', 2014 ,'Keaton');
insert into starsin values ('Birdman', 2014 ,'Galifianakis');
insert into starsin values ('Django Unchained', 2012,'Foxx');
insert into starsin values ('Django Unchained', 2012,'Waltz');
insert into starsin values ('Whiplash', 2014,'Teller');
insert into starsin values ('Whiplash', 2014,'Simmons');
insert into starsin values ('Interstellar', 2014,'McConaughey');
insert into starsin values ('Interstellar', 2014,'Hathaway');
insert into starsin values ('Boyhood', 2014,'Arquette');
insert into starsin values ('Boyhood', 2014,'Coltrane');

select * from starsIn;

################################################################################
################################################################################
#1
select S.starName
from Movie M2, StarsIn S
where M2.title = S.movieTitle and M2.studioName = 'JafariStudios' and M2.year = 2014;


################################################################################
################################################################################
#2

select M.name
from MovieStar M
where M.NetWorth = (select max(M2.NetWorth) from MovieStar M2);


################################################################################
################################################################################
#3

create view V1 as (select M.studioName, SUM(M.Budget) as Budget2014
from movie M
where M.year = 2014
group by M.studioName);

select * from V1 where V1.Budget2014 = (select max(V1.Budget2014) from V1);
## OR
select * from V1 where V1.Budget2014 >= ALL(select V1.Budget2014 from V1);

################################################################################
################################################################################
#4

select S.movieTitle, avg(M.netWorth)
from movieStar M, starsIn S
where M.name = S.starName
group by S.movieTitle
having avg(M.netWorth)>300;

################################################################################
################################################################################
#5

select M.title
from Movie M
where M.title LIKE 'Bo%' and M.Year = 2014;


################################################################################
################################################################################
#6

select M.studioName, sum(M.budget)
from Movie M
group by M.studioName;

M.studioNameGsum(M.budget)(LaTeX: \rhoρM(Movie))

################################################################################
################################################################################
#7

select * 
from movie M2
where M2.length > (
select M1.length
from movie M1
where M1.title = 'Birdman');

################################################################################
################################################################################
#Extra credit

create view V3 as(
select S.movieTitle, sum(M.netWorth) as SumWorth
from movieStar M, starsIn S
where M.name = S.starName
group by S.movieTitle);

select V3.movieTitle, V3.sumWorth as sumNetWorth, V.Budget
from V3, movie V
where V3.movieTitle = V.title and V.Budget < V3.SumWorth;