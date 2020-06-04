function addDepartment() {
  inquirer
    .prompt({
      name: "deptName",
      type: "input",
      message: "What is the name of the department you want to add?",
    })
    .then(function(answer) {
      var query = connection.query(
        "INSERT INTO department SET ?",
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

getDeptNames() {
  let departmentsArr;
  var query = "SELECT name FROM department ORDER BY name";
  connection.query(query, function(err, res) {
    return res;
  });
}

module.exports = departmentJS;