const mysql = require("mysql");
const inquirer = require("inquirer");
  // require("./department");
  // require("./role");
  // require("./employee");
//

var connection = mysql.createConnection({
  host: "localhost",
  // Your port; if not 3306
    port: 3306,
  // Your username
    user: "root",
  // Your password
    password: "root",
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
      type: "list",
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
        let addExit = addDRE();
        if (addExit === "exit") {
          // reset questions
        } else break;

      case "View Departments/Roles/Employees":
        let viewExit = viewDRE();
        if (viewExit === "exit") {
          // reset questions
        } else break;

      case "Update employee roles":
        let updateExit = updateEmployee();
        if (updateExit === "exit") {
          // reset questions
        } else break;
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
      type: "list",
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
        checkIfDept = addRole();
        if (checkIfDept === "You need to add a department first") {
          console.log(checkIfDept);
          return "exit";
        } else if (checkIfDept === "exit") {
          return "exit";
        } else break;

      case "Employee":
        checkIfRole = addEmployee();
        if (checkIfRole === "You need to add a role first") {
          console.log(checkIfRole);
          return "exit";
        } else if (checkIfDept === "exit") {
          return "exit";
        } else break;
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

function viewDRE() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to view?",
      choices: [
        "Departments",
        "Roles",
        "Employees"
      ]
    })
    .then(function(answer) {
      switch (answer.action) {
      case "Department":
        viewDepartments();
        break;

      case "Role":
        viewRoles();
        break;

      case "Employee":
        viewEmployees();
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

module.exports = connection;