const { expect, test } = require("@jest/globals")
const Employee = require("../lib/Employee")

test("Can create a new employee.",() => {
    const employee = new Employee()
    expect(typeof(employee)).toBe("object")
    //can call object any name       
})
test("Can create a new employee name.",() => {
    const name = "Bob"
    const newEmployee = new Employee(name)
    expect(newEmployee.name).toBe(name)       
})
test("Can create a new employee id.",() => {
    const id1 = 42
    const newEmployee = new Employee("Bob",id1)
    expect(newEmployee.id).toBe(id1)
    //can call object any name       
})
test("Can create a new employee email.",() => {
    const email1 = "Bob@bob.com"
    const newEmployee = new Employee("Bob",1,email1)
    expect(newEmployee.email).toBe(email1)       
})
test("Employee is returning name with constructor", () => {
    const name = "Bob"
    const employee = new Employee(name)
    expect(employee.name).toBe(name)
})
test("Testing getName()", () => {
    const name = "Bob"
    const employee = new Employee(name)
    expect(employee.getName()).toBe(name)
})
test("Testing getId()", () => {
    const id = 42
    const testId = new Employee("name",id)
    expect(testId.getId()).toBe(id)
})

test("Testing getEmail()", () => {
    const email = "Bob@bob.com"
    const emailTest = new Employee("name",1,email)
    expect(emailTest.getEmail()).toBe(email)
})