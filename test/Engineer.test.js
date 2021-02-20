const { expect, test } = require("@jest/globals")
const Engineer = require("../lib/Engineer")
test ("Can create a github value pair", () => {
    const github1 = "github"
    const newEngineer = new Engineer("bob",1,"Bob@bob.com",github1)
    expect(newEngineer.github).toBe(github1)
})
test ("Test engineer getRole should get engineer", () => {
    const returnValue = "Engineer"
    const newEngineer = new Engineer("bob",1,"Bob@bob.com","github")
    expect(newEngineer.getRole()).toBe(returnValue)
})
test ("Get github", () => {
    const githubValue = "github"
    const newEngineer = new Engineer("bob",1,"Bob@bob.com",githubValue)
    expect(newEngineer.getGithub()).toBe(githubValue)
})
