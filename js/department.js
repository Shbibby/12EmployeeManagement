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
          name: answer
        },
        function(err, res) {
          if (err) throw err;
        }
      );
    });
  //
}

module.exports = departmentJS;