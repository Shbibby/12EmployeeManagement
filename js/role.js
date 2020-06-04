function addRole() {
  const deptNames = getDeptNames();

  if (deptNames === NULL) {
    return "You need to add a department first"
  }
  else
  inquirer
    .prompt({
      name: "dept",
      type: "rawlist",
      message: "Which department do you want to add a role in?",
      choices: [deptNames]
    })
    .then(function(answer) {
      var query = ""
      // mysql code to select role based off department

      inquirer
        .prompt({
          name: "roleName",
          type: "input",
          message: "What is the name of the department you want to add?",
        })
        .then(function(answer) {
          var query = connection.query(
            "INSERT INTO role SET ?",
            {
              name: answer
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

module.exports = roleJS;