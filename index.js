import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function createDepartment(id, departmentName, location) {
   try{
    const department = await prisma.department.create({
        data: {
            id,
            departmentName,
            location
        }

    });
    console.log(`Created: ${department.departmentName} at ${department.location}`);
   } catch (error) {
    console.error(`Error creating department ${departmentName}:`, error);
   }
}


// createDepartment("DPT001", "Computer Science", "Nairobi Campus");
// createDepartment("DPT002", "Information Technology", "Mombasa Campus");
// createDepartment("DPT003", "Software Engineering", "Kisumu Campus");
// createDepartment("DPT004", "Cyber Security", "Eldoret Campus");
// createDepartment("DPT005", "Business Studies", "Nakuru Campus");
// createDepartment("DPT006", "Business and Finance", "Kisii Campus");

// 4. Get all departments
// Write a function named getDepartments that retrieves all department records from the database.

// Inside the function, use Prisma’s findMany() method on the department model to fetch the complete list of departments.

async function getDepartments(){
    const departments = await prisma.department.findMany({});
        console.log(departments);
    }
    // getDepartments()

//     5. Get department
// Write a function named getDepartment that retrieves a single department from the database based on its ID.

// The function should take one parameter, the department ID, and use Prisma;s findUnique() method to fetch the matching department record.

// If the department is found, log it to the console, if it is not found, log the message "Department not found".

async function getDepartment(id){
    const department= await prisma.department.findUnique({
        where: {id}

    });
    console.log(department);

    if(!department){
        console.log('Department not found')
    }
}
// getDepartment('DPT004')
 

// 6. Delete department
// Write a function called deleteDepartment that deletes the "Business and Finance" department with department ID "DPT006".
async function deleteDepartment(){
    const deletedDepartment = await prisma.department.delete({
        where: {
            id: "DPT006"
        }

    })
    console.log(deletedDepartment)
}
// deleteDepartment()

// 7. Update department
// Write a function named updateDepartment that updates the location of the Cyber Security department (DPT004) to "Kericho Campus".

// The function should use Prisma's update() method to find the department by its ID (DPT004) and modify the location field.

async function updateDepartment(){
    const updatedDepartment = await prisma.department.update({
        where: {
            id: "DPT004"
        },
        data: {
            location: "Kericho Campus"
        }

    })
    console.log(updatedDepartment)
}
updateDepartment()

// 8. Insert Employees
// Write a function named createEmployee that adds a new employee record to the database.

// id: a string that uniquely identifies an employee
// firstName: The employee's first name.
// lastName: The employee's last name..
// email: The employee's email address.
// salary: The employee's salary amount.
// departmentId: The ID of the department the employee belongs to. The function should use Prisma's create method to insert a new employee record into the database.

async function createEmployee(id, firstName, lastName, email, salary, departmentId){
    const employee = await prisma.employee.create({
        data: {
            id,
            firstName,
            lastName,
            email,
            salary,
            departmentId
        }
        
    })
    console.log(employee)

}
// createEmployee("EMP001", "John", "Mwangi", "john.mwangi@company.com", 65000.00, "DPT001");
// createEmployee("EMP002", "Alice", "Otieno", "alice.otieno@company.com", 92000.00, "DPT002");
// createEmployee("EMP003", "Brian", "Kariuki", "brian.kariuki@company.com", 88000.00, "DPT003");
// createEmployee("EMP004", "Grace", "Mutua", "grace.mutua@company.com", 97000.00, "DPT004");
// createEmployee("EMP005", "Kevin", "Omondi", "kevin.omondi@company.com", 66000.00, "DPT005");
// createEmployee("EMP006", "Linda", "Njeri", "linda.njeri@company.com", 91000.00, "DPT001");
// createEmployee("EMP007", "Samuel", "Kiptoo", "samuel.kiptoo@company.com", 63000.00, "DPT002");
// createEmployee("EMP008", "Mary", "Wanjiku", "mary.wanjiku@company.com", 89000.00, "DPT003");
// createEmployee("EMP009", "Peter", "Kamau", "peter.kamau@company.com", 95000.00, "DPT004");
// createEmployee("EMP010", "Faith", "Achieng", "faith.achieng@company.com", 78000.00, "DPT005");
// createEmployee("EMP011", "Ann", "Chebet", "ann.chebet@company.com", 78000.00, "DPT003");


// 9. Get all Employees
// Write a function named getEmployees that retrieves all employees from the database, including their department details.

// Your function should use Prisma's findMany() method with the include option to fetch each employee along with their related department information.
async function getEmployees() {
    const employees = await prisma.employee.findMany({
        include: {
            department: {}

        }
    })
    console.log(employees)
    
}
// getEmployees()

// 10. Retrieve Employees by Salary Range
// Write a function named getBySalaryRange that retrieves all employees whose salaries fall within a specified range.

// The function accepts two parameters:

// min: minimum salary value.
// max: maximum salary value.
// Before performing the query, add a validation check:

// if min is greater than max, throw an error "Minimum cannot be greater than maximum"
// If the values are valid, use Prisma's findMany() method to fetch all employees whose salary is between the given min and max values.


async function getBySalaryRange(min, max) {
    if (min>max){
        throw new Error("Minimum cannot be greater than Maximum")
    }
    const SalaryRange = await prisma.employee.findMany({
        where: {
            salary: {
                gte: min,
                lte: max
            }
        }

    })
    console.log(SalaryRange)
}
// getBySalaryRange(50000, 70000)

// 11. Delete Employee
// Write a function deleteEmployee that deletes the employee with id EMP011.
async function deleteEmployee() {
    const deletedEmployee = await prisma.employee.delete({
       where: {
        id: "EMP011"
       } 
    })
    console.log(deletedEmployee)
    
}
// deleteEmployee()

// 12. Update Employee
// Write a function called updateEmployee that updates the `salary of employee with id "EMP010" to 90000 respectively.
async function updateEmployee() {
    const updatedEmployee = await prisma.employee.update({
        where: {
            id: "EMP010"
        },
        data: {
            salary: 90000
        }
    })
    console.log(updatedEmployee)
    
}
updateEmployee()