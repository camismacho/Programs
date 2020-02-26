/*Author: Joseph Camacho-Terrazas*/
/*DataDB.sql*/

insert into Players values('Jared Goff',1001,'Rams','QB',22,4638,600000);
insert into Players values('Leonard Fournette',1002,'Jaguars','RB',30,500,200000);
insert into Players values('Julio Jones',1003,'Falcons','WR',6,1394,300000);
insert into Players values('Matthew Stafford',1004,'Lions','QB',19,2499,1500000);
insert into Players values('Devin Singletary',1005,'Bills','RB',2,775,100000);

insert into Games values(501,'2008-05-13','Levis Stadium','W',15000,2000000);
insert into Games values(502,'2010-08-19','Gilette Stadium','L',10000,6000000);
insert into Games values(503,'2015-10-16','Barclays Center','T',30000,9000000);
insert into Games values(504,'2013-03-01','Metlife Stadium','L',5000,1000000);
insert into Games values(505,'2014-09-25','FedEx Field','L',19000,5000000);

insert into Play values(1001, 501);
insert into Play values(1002, 502);
insert into Play values(1003, 503);
insert into Play values(1004, 504);
insert into Play values(1005, 505);
