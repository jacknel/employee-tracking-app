const { prompt } = require("inquirer");
const db = require("./db");
require("console.table");

init();

function init() {
    displayMainMenu();
}

function displayMainMenu() {
  const choices = [
    { name: "View All Employees", value: "VIEW_EMPLOYEES" },
    { name: "Add Employee", value: "ADD_EMPLOYEE" },
    { name: "Update Employee Role", value: "UPDATE_EMPLOYEE_ROLE" },
    { name: "View All Roles", value: "VIEW_ROLES" },
    { name: "Add Role", value: "ADD_ROLE" },
    { name: "View All Departments", value: "VIEW_DEPARTMENTS" },
    { name: "Add Department", value: "ADD_DEPARTMENT" },
    { name: "Quit", value: "QUIT" }
  ];

  prompt({
    type: "list",
    name: "choice",
    message: "Pick an option.",
    choices
  }).then(({ choice }) => {
      switch (choice) {
          case "VIEW_EMPLOYEES":
              viewEmployees();
              break;
          case "ADD_EMPLOYEE":
              addEmployee();
              break;
          case "UPDATE_EMPLOYEE_ROLE":
              updateEmployeeRole();
              break;
          case "VIEW_ROLES":
              viewRoles();
              break;
          case "ADD_ROLE":
              addRole();
              break;
          case "VIEW_DEPARTMENTS":
              viewDepartments();
              break;
          case "ADD_DEPARTMENT":
              addDepartment();
              break;
          case "QUIT":
              quit();
              break;
          default:
              console.log("Invalid choice.");
              break;
      }
  });
}

function viewEmployees() {
  console.log("Viewing all employees");
  // retrieve and display all employees from the database
  db.findAllEmployees()
    .then(([rows]) => {
      let employees = rows;
      console.log("\n");
      console.table(employees);
    })
    .then(() => displayMainMenu());
}

function addEmployee() {
  console.log("Adding a new employee");
  // prompt for employee information and insert it into the database
}

function updateEmployeeRole() {
  console.log("Updating an employee's role");
  // prompt for employee id and new role, and update the employee's role in the database
}

function viewRoles() {
  console.log("Viewing all roles");
  // retrieve and display all roles from the database
}

function addRole() {
  console.log("Adding a new role");
  // prompt for role information and insert it into the database
}

function viewDepartments() {
  console.log("Viewing all departments");
  // retrieve and display all departments from the database
}

function addDepartment() {
  console.log("Adding a new department");
  // prompt for department information and insert it into the database
}

function quit() {
  console.log("Exiting the program");
  // close the program or return to main menu
}


  
