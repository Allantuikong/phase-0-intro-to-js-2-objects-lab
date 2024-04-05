// Write your solution in this file!
const employee = {
    name: " James Bond",
    streetAddress: "Mombasa",
};

//  updateEmployeeWithKeyAndValue(employee, key, value) - Non Destructively
function updateEmployeeWithKeyAndValue(obj,key,value) {
    return {
        ...obj,
        [key]: value,
    };
}

const newEmployee = updateEmployeeWithKeyAndValue(
    employee,
    "name",
    "Jackie Chan",
);

// console.log(newEmployee);

// destructivelyUpdateEmployeeWithKeyAndValue 
function destructivelyUpdateEmployeeWithKeyAndValue(obj,key,value) {
        obj[key] = value;
        return obj;
   
}
const modifiedEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "Batman");
console.log(modifiedEmployee);
console.log(employee)

// deleteFromEmployeeByKey(employee, key) - Non Destructively

function deleteFromEmployeeByKey(obj, key) {
   const newObj = {...obj}
   delete newObj[key];
   return newObj;
};

const employee2 = deleteFromEmployeeByKey(employee,"name");
console.log(employee2);
console.log(employee);

// destructivelyDeleteFromEmployeeByKey

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];
    return obj
}

const modifyEmp = destructivelyDeleteFromEmployeeByKey(employee, "name");
console.log(modifyEmp);
console.log(employee);