const inquirer = require("inquirer")
const mySql = require("mysql2")

const init = function (){
inquirer
  .prompt([
    {
      type: 'list',
      message: 'What would you like to do?',
      name: 'option',
      choices:["view all departments",
    "view all roles",
    "view all employees",
    "add a department",
    "add a role",
    "add an employee",
    "update an employee role",
    ]
    },

  

  ])
  .then((response) =>
    {
        if (response.option === "view all departments"){
            db.query("SELECT * FROM department", function (err,data){
                if (err){
                    throw err
                }
                else {
                    console.table (data)
                }
            })
        }
       else if (response.option === "view all roles"){
           db.query("SELECT * FROM role", function (err,data){
                if (err){
                    throw err
                }
                else {
                    console.table (data)
                }
            })
        }
      else  if (response.option === "view all employees"){
           db.query("SELECT * FROM employee", function (err,data){
                if (err){
                    throw err
                }
                else {
                    console.table (data)
                }
            })
        }
      else  if (response.option === "add a department"){
           db.query(`INSERT INTO department (name ) VALUES ("HR");`, function (err,data){
                if (err){
                    throw err
                }
                else {
                    console.table (data)
                }
            })
        }
       else if (response.option === "add a role"){
           db.query("SELECT * FROM role", function (err,data){
                if (err){
                    throw err
                }
                else {
                    console.table (data)
                }
            })
        }
       else if (response.option === "add an employee"){
           db.query("SELECT * FROM employee", function (err,data){
                if (err){
                    throw err
                }
                else {
                    console.table (data)
                }
            })
        }
      else  if (response.option === "update employee role"){
           db.query("SELECT * FROM role", function (err,data){
                if (err){
                    throw err
                }
                else {
                    console.table (data)
                }
            })
        }
        else {
            console.log("something went wrong")
        }
        //make if statements based on which choice they pick
        //in the uf statements run db.query
        console.log(response)
    }
  );

}

const db = mySql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'cms_db'
    },
    console.log(`Connected to the cms_db database.`)
  );
  db.connect(function(err){
    if(err) throw err
    init()
  })
  
//   db.query('SELECT COUNT(id) AS total_count FROM favorite_books GROUP BY in_stock', function (err, results) {
//     console.log(results);
//   });
  
//   db.query('SELECT SUM(quantity) AS total_in_section, MAX(quantity) AS max_quantity, MIN(quantity) AS min_quantity, AVG(quantity) AS avg_quantity FROM favorite_books GROUP BY section', function (err, results) {
//     console.log(results);
//   });