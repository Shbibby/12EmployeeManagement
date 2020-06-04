function addDepartment() {
  inquirer
    .prompt({
      name: "deptName",
      type: "input",
      message: "What is the name of the departments you want to add?",
    })
    .then(function(answer) {
      var query = connection.query(
        "INSERT INTO departments SET ?",
        {
          name: answer.deptName
        },
        function(err, res) {
          if (err) throw err;
        }
      );
    });
  //
}

function getDeptNames() {
  var query = "SELECT name FROM departments ORDER BY name";
  connection.query(query, function(err, res) {
    return res;
  });
}

function viewDepartments() {
  var query = "SELECT name FROM departments ORDER BY name";
  connection.query(query, function(err, res) {
    return res;
    // format to look better while viewing results
  });
}

exports.addDepartment = addDepartment;