CREATE TABLE employee(
	empno INT NOT NULL,
    ename varchar(100) not null,
    job varchar(30) not null,
    mgr int,
    hiredate date,
    sal int,
    comm int,
    deptno int not null,
    PRIMARY KEY (empno)
);

INSERT INTO employee (ename, job, mgr, hiredate, sal, comm, deptno) VALUES 
("kashan", "clerk", 7902, now(), 1000, null, 1),
("usama", "salesman", 7698, now(), 1000, null, 2),
("ayub", "manager", 7902, now(), 1000, null, 2),
("ali", "clerk", 7698, now(), 1000, null, 3),
("husnain", "clerk", 7698, now(), 1000, null, 4),
("zulfiqar", "salesman", 7902, now(), 1000, null, 1),
("shahzain", "analyst", 7698, now(), 1000, null, 2),
("usman", "clerk", 7902, now(), 1000, null, 3),
("muavia", "salesman", 7902, now(), 1000, null, 4),
("hassan", "clerk", 7839, now(), 1000, null, 4),
("umer", "manager", 7902, now(), 1000, null, 1),
("farooq", "clerk", 7839, now(), 1000, null, 2),
("abdullah", "salesman", 7839, now(), 1000, null, 3),
("aisha", "analyst", 7902, now(), 1000, null, 4),
("fouzia", "clerk", 7902, now(), 1000, null, 1),
("jamal", "salesman", 7902, now(), 1000, null, 1),
("mukarram", "clerk", 7839, now(), 1000, null, 2),
("huzaifa", "manager", 7902, now(), 1000, null, 4);