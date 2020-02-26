/*Author: Joseph Camacho-Terrazas*/
/*DataDB.sql*/

insert into Players values('Zack Martin',1001,'Cowboys','QB',10,4500,100000);
insert into Players values('Tyron Smith',1002,'Cowboys','RB',30,500,2000);
insert into Players values('Olivier Vernon',1003,'Browns','WR',2,26,30000);
insert into Players values('Tony Gonzalez',1004,'Chiefs','QB',0,13,1500000);
insert into Players values('Andrew Whitworth',1005,'Rams','RB',14,5670,65000);

insert into Games values(501,'1995-05-13','Aggie Memorial','W',15000,2000000);
insert into Games values(502,'1996-08-19','Taco Bell Arena','L',10000,6000000);
insert into Games values(503,'1998-10-16','Barclays Center','T',30000,9000000);
insert into Games values(504,'1995-03-01','Metlife Stadium','L',5000,1000000);
insert into Games values(505,'1997-09-25','FedEx Field','L',19000,5000000);

insert into Play values(1001, 501);
insert into Play values(1002, 502);
insert into Play values(1003, 503);
insert into Play values(1004, 504);
insert into Play values(1005, 505);
