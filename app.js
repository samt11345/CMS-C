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
        inquirer.prompt ([
            {
                message:"what is the department name?",
name:"dept_name",
type:"input"
            }
        ]).then(function(data){
              db.query(`INSERT INTO department (name) VALUES ("${data.dept_name}");`, function (err,data){
                if (err){
                    throw err
                }
                else {
                    console.table (data)
                }
            })
        })
        }

       else if (response.option === "add a role"){ inquirer.prompt ([
        {
            message:"what is the role you would like to add?",
name:"role",
type:"input"
        },
        {message:"what is the salary of the role?",
         name:"salary",
        type:"input"},
        
            {message:"what is the department id?",
            name:"department_id",
            type:"input"},
        
    ]).then(function(data){
        // INSERT INTO role (title,salary,department_id) VALUES ("HR REP",50000,1);

          db.query(`INSERT INTO role (title,salary,department_id) VALUES ("${data.role}",${data.salary},${data.department_id});`, function(err,response){
          
            if (err){
                throw err
            }
            else {
                console.log ("here",response)
            }
        })
    })
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
           db.query("INSERT * FROM employee", function (err,data){
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