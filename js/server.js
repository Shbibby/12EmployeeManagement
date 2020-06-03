const mysql = require("mysql");
const inquirer = require("inquirer");
  const departmentJS = require("./department");
  const roleJS = require("./role");
  const employeeJS = require("./employee");
//

var connection = mysql.createConnection({
  host: "localhost",
  // Your port; if not 3306
    port: 3306,
  // Your username
    user: "root",
  // Your password
    password: "",
  //
  database: "employee_trackerDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  whatUserDo();
});

function whatUserDo() {
  inquirer
    .prompt({
      name: "action",
      type: "rawlist",
      message: "What would you like to do?",
      choices: [
        "Add Departments/Roles/Employees",
        "View Departments/Roles/Employees",
        "Update employee roles"
      ]
    })
    .then(function(answer) {
      switch (answer.action) {
      case "Add Departments/Roles/Employees":
        addDRE();
        break;

      case "View Departments/Roles/Employees":
        viewDRE();
        break;

      case "Update employee roles":
        updateEmployee();
        break;
      }
    })
    .catch(error => {
      if(error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else when wrong
      }
    });
  //
}

function addDRE() {
  inquirer
    .prompt({
      name: "action",
      type: "rawlist",
      message: "What would you like to add?",
      choices: [
        "Department",
        "Role",
        "Employee"
      ]
    })
    .then(function(answer) {
      switch (answer.action) {
      case "Department":
        addDepartment();
        break;

      case "Role":
        addRole();
        break;

      case "Employee":
        addEmployee();
        break;
      }
    })
    .catch(error => {
      if(error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else when wrong
      }
    });
  //
}