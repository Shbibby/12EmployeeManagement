DROP DATABASE IF EXISTS employeeTracker;
CREATE database employeeTracker;

USE employeeTracker;

CREATE TABLE employee (
id INT NOT NULL auto_increment,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INT NOT NULL,
manager_id INT NULL,
primary key (id),
foreign key (role_id) references role (id),
foreign key (manager_id) references employee (id)
);

CREATE TABLE role (
id INT NOT NULL auto_increment,
title VARCHAR(30) NOT NULL,
salary DECIMAL NOT NULL,
department_id INT NOT NULL,
primary key (id),
foreign key (department_id) references department (id)
);

CREATE TABLE department (
id INT NOT NULL auto_increment,
name VARCHAR(30) NOT NULL,
primary key (id)
);