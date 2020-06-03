function createRole() {
  console.log("Inserting a new product...\n");
  var query = connection.query(
    "INSERT INTO products SET ?",
    {
      flavor: "Rocky Road",
      price: 3.0,
      quantity: 50
    },
    function(err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " product inserted!\n");
      // Call updateProduct AFTER the INSERT completes
      updateRole();
    }
  );

  // logs the actual query being run
  console.log(query.sql);
}

function updateRole() {
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
      deleteRole();
    }
  );

  // logs the actual query being run
  console.log(query.sql);
}

function deleteRole() {
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
      readRole();
    }
  );
}

function readRole() {
  console.log("Selecting all products...\n");
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
    connection.end();
  });
}
