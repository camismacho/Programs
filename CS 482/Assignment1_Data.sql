create table Players (
    Name varchar(64) UNIQUE,
    PlayerID integer,
    TeamName varchar(128), 
    Position varchar(8), 
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
    Result varchar(16),
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

insert into Player values(101,"pistol pete",'1980/02/01','1990 S Espina', 'pistolpete@gmail.com', 1587548415,'center');
insert into Player values(102,"Lobo Louie",'1989/08/18','100 Vista del monte', 'LoboLouie@gmail.com', 5128479856,'center');
insert into Player values(103,"yoyo",'1993/11/06','2422 S ESpina ST', 'yoyo@gmail.com', 5199688745,'Middle');
insert into Player values(104,"mayi",'1993/11/06','9030 Markvile DR', 'mayi@gmail.com', 5122457854,'center');	
insert into Player values(105,"jack",'1970/05/16','222 l street', 'jack@gmail.com', 5122458854,'center');


create table Manager (ID integer, 
                      LoginID varchar(16),
                      Name varchar(64), 
                      Password varchar(8),
                      Birthday date, 
                      Address varchar(128), 
                      Email varchar(32), 
                      PhoneNumber char(10));
                 alter table Manager
				 add primary key(ID);
	insert into Manager values(201,1234,'Boss',128414,11/08/1986,'Las Cruces','Boss@gmail.com',5488759874);
	insert into Manager values(202,2345,'Alice',825447,08/10/1995,'El paso','Alice@gmail.com', 7845964712);
	insert into Manager values(203,8659,'BOB',201158,08/01/1980,'Las Cruces','BOB@gmail.com',5874125397);


         
           
create table Stats (PlayerID integer, 
                     Year char(4), 
                     TotalPoints integer, 
                     ASPG integer, 
                     Foreign key (PlayerID) references Player(ID) );
                     
insert into Stats values (101,2010,50,200);
insert into Stats values (101,2012,100,200);
insert into Stats values (101,2019,200,200);
insert into Stats values (101,2014,100,200);
insert into Stats values (102,2012,100,200);
insert into Stats values (102,2012,50,200);
insert into Stats values (102,2013,200,200);
insert into Stats values (105,2013,500,200);
insert into Stats values (103,2019,500,200);
insert into Stats values (103,2012,500,200);



                     
                     
create table Training (TrainingName varchar(128), 
					    Instruction varchar(128),
                        TimePeriodInHour integer);

alter table Training
add primary key(TrainingName);

create table AssignTraining (PlayerID integer,
							ManagerID integer, 
                            TrainingName varchar(128),
                            Foreign key (PlayerID) references Player(ID),
                            Foreign key (ManagerID) references Manager(ID),
                            Foreign key (TrainingName) references Training(TrainingName)); 
                            
create table Game (GameID integer, 
                    Date date,
                    Result varchar(16),
                    PlayingVenue varchar(128),
                    OpponentTeam varchar(32));
                    
alter table Game
add primary key(GameID);

insert into Game values(20101,'2016/11/05','win','The Pit','NMSU');
insert into Game values(20102,'2018/10/28','lose','PanAm','Aggies');
insert into Game values(20103,'2019/12/03','lose','The Pit','Aggies');
insert into Game values(20104,'2017/05/11','win','PanAm','NMSU');
insert into Game values(20105,'2017/12/28','win','The pit','NMSU');
               
create table Play (PlayerID integer, 
                   GameID  integer,
                   Foreign key (PlayerID) references Player(ID),
                   Foreign key (GameID) references Game(GameID));
                 
insert into Play values (101,20101);
insert into Play values (102,20101);
insert into Play values (102,20103);
insert into Play values (103,20102);
insert into Play values (103,20105);



create table Doctor (Email varchar(32), Name varchar(64), PhoneNumber char(10));

alter table Doctor 
add primary key(Email);

insert into Doctor values('paul@gmail.com','Paul',8154789874);
insert into Doctor values('mike@gmail.com','mike',8154789874);
insert into Doctor values('jack@gmail.com','jack',8154789874);
insert into Doctor values('aron@gmail.com','aron',8154789874);

create table TakeExam (PlayerID integer, 
                       DocEmail varchar(32), 
					   TestDate date, 
                       TestResult varchar(128),
                       Foreign key (PlayerID) references Player(ID), 
                       Foreign key (DocEmail) references Doctor(Email)); 
                       
insert into TakeExam values(101,'paul@gmail.com','2018/10/20','positive');
insert into TakeExam values(101,'mike@gmail.com','2016/10/10','negative');
insert into TakeExam values(102,'paul@gmail.com','2017/12/10','positive');
insert into TakeExam values(103,'aron@gmail.com','2016/09/25','negative');

          

   

    
    
create table ManagerCertificate (ManagerID integer, 
                                 CertificateId integer,
                                 Certificate blob);
	alter table ManagerCertificate
add FOREIGN KEY (ManagerID) REFERENCES Manager(ID);

insert into  ManagerCertificate values(201,1001212,"CITI");
insert into  ManagerCertificate values(202,1001213,'CITI');
insert into  ManagerCertificate values(203,1001214,'CITI');
insert into  ManagerCertificate values(202,1001213,'new');
insert into  ManagerCertificate values(203,1001216,'new');
insert into  ManagerCertificate values(203,1001215,'new1');




  

