const { expect, test } = require("@jest/globals")
const { off } = require("process")
const Manager = require("../lib/Manger")
test ("Can create a officeNumber value pair", () => {
    const officeNumber1 = 1
    const newManager = new Manager("bob",1,"Bob@bob.com",officeNumber1)
    expect(newManager.officeNumber).toBe(officeNumber1)
})
test ("Test Manager getRole should get Manager", () => {
    const manager1 = "Manager"
    const newManager = new Manager("bob",1,"Bob@bob.com",1)
    expect(newManager.getRole()).toBe(manager1)
})
test ("testing getOfficeNumber", () => {
    const officeNumberValue = 1
    const newManager = new Manager("bob",1,"Bob@bob.com",officeNumberValue)
    expect(newManager.getOfficeNumber()).toBe(officeNumberValue)
})
