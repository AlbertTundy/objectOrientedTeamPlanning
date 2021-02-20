const { expect, test } = require("@jest/globals")
const Intern = require("../lib/Intern")
test ("Can create a school value pair", () => {
    const school1 = "DU"
    const newIntern = new Intern("bob",1,"Bob@bob.com",school1)
    expect(newIntern.school).toBe(school1)
})
test ("Test Intern getRole should get Intern", () => {
    const Intern1 = "Intern"
    const newIntern = new Intern("bob",1,"Bob@bob.com","DU")
    expect(newIntern.getRole()).toBe(Intern1)
})
test ("Testing getOfficeNumber", () => {
    const schoolValue = "DU"
    const newIntern = new Intern("bob",1,"Bob@bob.com",schoolValue)
    expect(newIntern.getSchool()).toBe(schoolValue)
})
