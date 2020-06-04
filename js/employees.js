function addEmployee() {
  const roleNames = getRoleNames();

  if (roleNames === NULL) {
    return "You need to add a role first"
  }
  else
  inquirer
    .prompt({
      name: "dept",
      type: "list",
      message: "Which role do you want to add an employee to?",
      choices: [roleNames].push("exit to main select page")
    })
    .then(function(answer) {
      if (answer === "exit to main select page") {
        return "exit";
      }

      var query = ""
        // mysql code to add employee based off role
      //

      inquirer
        .prompt(
          {
            name: "employeeFirst",
            type: "input",
            message: "What is the first name of the employee you want to add?",
          },
          {
            name: "employeeLast",
            type: "number",
            message: "What is the last name of the employee you want to add?",
          },
          {
            name: "employeeManagerNames",
            type: "input",
            message: `Who is the manager of the employee you want to add? 
            /n format answer as [FIRST NAME] [LAST NAME] or:
            /n type 'manager' if employee is a manager`,
          },
        )
        .then(function(answer) {
          let managerId;
          if (answer.employeeManagerNames.toLowerCase().slice(7) === "manager") {
            managerID = NULL;
          } else {
            let namesArr = answer.employeeManagerNames.split(' ');
              let firstName = namesArr[0];
              let lastName = namesArr[1];
            managerID = getManagerByNames(firstName, lastName);
          }
          
          var query = connection.query(
            "INSERT INTO employees SET ?",
            {
              first_name: answer.employeeFirst
            },
            {
              last_name: answer.employeeLast
            },
            {
              manager_id: managerID
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

function getManagerByNames(first, last) {
  let managerArr;

  var query = connection.query(
    "SELECT id FROM employees WHERE ? AND ? ORDER BY id", 
    {
      first_name: first
    },
    {
      last_name: last
    },
    function(err, res) {
    return res;
  });
}

function viewEmployees() {
  var query = "SELECT first_name AND last_name FROM departments ORDER BY last_name";
  connection.query(query, function(err, res) {
    return res;
    // format to look better while viewing results
  });
}


module.exports = employeeJS;