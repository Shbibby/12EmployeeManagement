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
      message: "Which department do you want to add a role in?",
      choices: [roleNames]
    })
    .then(function(answer) {
      if (answer === exit) {
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
            name: "employeeManagerId",
            type: "input",
            message: "Who is the manager of the employee you want to add? [FIRST NAME] [LAST NAME]",
          }
        )
        .then(function(answer) {
          let managerID = getManagerByNames();

          var query = connection.query(
            "INSERT INTO employee SET ?",
            {
              first_name: answer.employeeFirst
            },
            {
              last_name: answer.employeeLast
            },
            {
              manager_id: managerId
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
    "SELECT id FROM employee WHERE ? AND ? ORDER BY id", 
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

module.exports = employeeJS;