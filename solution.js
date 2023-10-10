// your code goes here
// good luck!
class Employee {
    constructor(id, firstName, lastName, socialSecurityNumber, salary ) {
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.salary = salary
        this.socialSecurityNumber = socialSecurityNumber
    }

    generatePayslip() {
        return `Employee: ${this.id}\nName: ${this.firstName} ${this.lastName}\nSocialSecurityNumber: ${this.socialSecurityNumber}\nPay: ${this.salary/12}`
    }
}

class Manager extends Employee {
    constructor(id, firstName, lastName, taxId, salary) {
        super( id, firstName, lastName, taxId, salary )
        this.managedEmployees = [];
    }

    addManagedEmployee(addManagedEmployee) {
        this.managedEmployees.push(addManagedEmployee)
    }

    removeManagedEmployee(addManagedEmployee){
        this.managedEmployees.splice( this.managedEmployees.indexOf(addManagedEmployee), 1 )
    }

}