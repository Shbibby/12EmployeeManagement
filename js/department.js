function insertDepartment(departmentName) {
  console.log("Inserting a new department...\n");
  var query = connection.query(
    "INSERT INTO department SET ?",
    {
      name: String(departmentName).slice(0,30),
    },
    function(err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " department inserted!\n");
      // Call updateProduct AFTER the INSERT completes
      updateDepartment();
    }
  );

  // logs the actual query being run
  console.log(query.sql);
}

function updateDepartment() {
  console.log("Updating all Rocky Road quantities...\n");
  var query = connection.query(
    "UPDATE products SET ? WHERE ?",
    [
      {
        quantity: 100
      },
      {
        flavor: "Rocky Road"
      }
    ],
    function(err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " products updated!\n");
      // Call deleteProduct AFTER the UPDATE completes
      deleteDepartment();
    }
  );

  // logs the actual query being run
  console.log(query.sql);
}

function deleteDepartment() {
  console.log("Deleting all strawberry icecream...\n");
  connection.query(
    "DELETE FROM products WHERE ?",
    {
      flavor: "strawberry"
    },
    function(err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " products deleted!\n");
      // Call readProducts AFTER the DELETE completes
      readDepartment();
    }
  );
}

function readDepartment() {
  console.log("Selecting all products...\n");
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
    connection.end();
  });
}
