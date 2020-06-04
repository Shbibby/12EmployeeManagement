function addRole() {
  const deptNames = getDeptNames();

  if (deptNames === NULL) {
    return "You need to add a department first"
  }
  else
  inquirer
    .prompt({
      name: "dept",
      type: "list",
      message: "Which department do you want to add a role to?",
      choices: [deptNames].push("exit to main select page")
    })
    .then(function(answer) {
      if (answer === "exit to main select page") {
        return "exit";
      }

      var query = "";
        // mysql code to add role based off department
      //

      inquirer
        .prompt(
          {
            name: "roleTitle",
            type: "input",
            message: "What is the title of the role you want to add?",
          },
          {
            name: "roleSalary",
            type: "number",
            message: "What is the salary of the role you are adding?",
          }
        )
        .then(function(answer) {
          var query = connection.query(
            "INSERT INTO role SET ?",
            {
              title: answer.roleTitle
            },
            {
              salary: answer.roleSalary
            },
            function(err, res) {
              if (err) throw err;
            }
          );
        });
      //
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

function getRoleNames() {
  var query = "SELECT title FROM roles ORDER BY title";
  connection.query(query, function(err, res) {
    return res;
  });
}

function viewRoles() {
  var query = "SELECT title FROM roles ORDER BY name";
  connection.query(query, function(err, res) {
    return res;
    // format to look better while viewing results
  });
}

function updateEmployeeRole(title, id) {
  var query = connection.query(
      "UPDATE ? FROM employees WHERE ?",
      {
        role_id: title
      },
      {
        id: id
      },
      function(err, res) {
        if (err) throw err;
      }
    );
}

module.exports = roleJS;