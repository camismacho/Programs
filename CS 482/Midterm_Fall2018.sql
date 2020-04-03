
CREATE TABLE `midterm2018`.`emp` (
  `eid` INT NOT NULL,
  `ename` VARCHAR(255) NULL,
  `age` INT NULL,
  PRIMARY KEY (`eid`));
  
CREATE TABLE `midterm2018`.`dept` (
  `did` INT NOT NULL,
  `budget` REAL NULL,
  `managerid` INT NULL,
  PRIMARY KEY (`did`),
  INDEX `fkey_idx` (`managerid` ASC),
  CONSTRAINT `fkey`
    FOREIGN KEY (`managerid`)
    REFERENCES `midterm2018`.`emp` (`eid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
    
CREATE TABLE `midterm2018`.`works` (
  `eid` INT NOT NULL,
  `did` INT NOT NULL,
  PRIMARY KEY (`eid`, `did`),
  INDEX `fkey2_idx` (`did` ASC),
  CONSTRAINT `fkey1`
    FOREIGN KEY (`eid`)
    REFERENCES `midterm2018`.`emp` (`eid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fkey2`
    FOREIGN KEY (`did`)
    REFERENCES `midterm2018`.`dept` (`did`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

SET SQL_SAFE_UPDATES = 0;
delete from dept;
delete from works;
delete from emp;

insert into emp values (100, "john1", 45);
insert into emp values (200, "john2", 65);
insert into emp values (250, "john3", 45);
insert into emp values (300, "omid1", 35);
insert into emp values (400, "omid2", 75);
insert into emp values (500, "omid3", 75);
insert into emp values (600, "omid4", 40);
insert into emp values (700, "omid5", 50);
insert into emp values (800, "omid6", 55);

insert into dept values (1, 900000, 200);
insert into dept values (2, 2005000, 300);
insert into dept values (3, 8005000, 100);
insert into dept values (4, 6015000, 300);
insert into dept values (5, 1100000, 200);

insert into works values (100, 3);
insert into works values (100, 2);
insert into works values (200, 1);
insert into works values (200, 2);
insert into works values (200, 3);
insert into works values (200, 5);
insert into works values (300, 2);
insert into works values (300, 4);
insert into works values (400, 2);
insert into works values (500, 1);
insert into works values (600, 5);
insert into works values (700, 3);
insert into works values (700, 4);

#######################################################################################
# find the names of managers who manage only departments with budgets > 1M
# note that John2 should not be in the result set
select distinct(E.ename)
from dept D, emp E
where E.eid = D.managerID and D.managerID not in 
										(select D2.managerid
										from dept D2 
										where D2.budget < 1000000);

#######################################################################################
# If a manager manages more than one department, he or she controls the sum of all the
#budgets for those departments. Find the managerids of managers who control more than $5 million.
select d.managerid
from dept d
group by d.managerid
having sum(d.budget) > 5000000;

#######################################################################################
# Find the managerids of managers who control the largest amounts      
# Alternative 1: using Views
create view V as 
select d1.managerid, sum(d1.budget) as mBudget
	  from dept d1
	  group by d1.managerid;

select distinct V.managerid
from V
where V.mBudget = (select max(V2.mBudget) from V V2);


# Alternative 2: using ALL
select E.eid
from emp E, dept D
where E.eid = D.managerID
group by E.eid
having sum(D.budget) >= ALL (select sum(D2.budget) 
							from emp E2, dept D2 
							where E2.eid = D2.managerid 
                            group by E2.eid);

# Alternative 3: using subquery in From
# The following does not work in mySQL but it is an acceptable answer for the exam
select distinct temp1.managerid
from (select d1.managerid, sum(d1.budget) as mBudget
	  from dept d1
	  group by d1.managerid) as temp1
where temp1.mBudget = (select max(temp2.mBudget) from temp1 temp2);

#######################################################################################
# Find the highest salary in each department (if you had dname in the select/group by, that also works)
# note that, there is no salary field in this schema
select D.did, max(E.salary)
from emp E, works W, dept D
where E.eid = W.eid and W.did = D.did
group by D.did;

#######################################################################################
#Find the name of the youngest employee with age less than 60 for each department,
#in which the total number of employees is greater than the average number of employees
# NOTE: the syntactically correct query would be to ask the age of the youngest employee (and not the name)
# If you mentioned that, I have given 5 bonus points. 

# Step-wise solution:
# first, find the total number of employees in each department
select  W.did, count(W.eid)
from works W
group by W.did; 

# then find the average number of employees in each department
select avg(totEmp)
from (
select  W.did, count(W.eid) as totEmp
from works W
group by W.did) as temp;

# now lets find the departments that have total employees greater than the average number of employees in each department
select  W1.did as wDID
from works W1
group by W1.did
having count(W1.eid) > (select avg(totEmp)
						from (
							select  W2.did, count(W2.eid) as totEmp
							from works W2
							group by W2.did) as temp);

# now lets find the age of the youngest employee with age less than 60 for each department
select min(E.age), W.did
from emp E, works W
where E.eid = W.eid and E.age < 60 
group by W.did;

# Answering the final query combining the beautiful mess above
select min(E.age), W.did
from emp E, works W
where E.eid = W.eid and E.age < 60 and W.did in (select  W1.did as wDID
												from works W1
												group by W1.did
												having count(W1.eid) > (select avg(totEmp)
																		from (
																			select  W2.did, count(W2.eid) as totEmp
																			from works W2
																			group by W2.did) as temp))
group by W.did;

#######################################################################################
# Find the names of managers who manage only departments with budgets larger than 1 million,
# but at least one department with budget less than 5 million

select distinct(E.ename)
from dept D, emp E
where E.eid = D.managerID and D.managerID not in 
										(select D2.managerid
										from dept D2 
										where D2.budget < 1000000)
						  and D.managerID in
										(select D3.managerid
                                         from dept D3
                                         where D3.budget < 5000000);
