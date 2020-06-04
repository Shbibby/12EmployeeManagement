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
          }
        )
        .then(function(answer) {
          var query = connection.query(
            "INSERT INTO employee SET ?",
            {
              first_name: answer.employeeFirst
            },
            {
              last_name: answer.employeeLast
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

module.exports = employeeJS;