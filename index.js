const { prompt } = require("inquirer");
// const db = require("./db");
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
    });
  }
  
