const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Jordan', '345', 'engineer@example.com', 'GitJordan');

    expect(engineer.name).toBe('Jordan');
    expect(engineer.id).toBe('345');
    expect(engineer.email).toBe('engineer@example.com');
    expect(engineer.role).toBe('Engineer');
    expect(engineer.github).toBe('GitJordan');
});

test("return Engineer's GitHub username", () => {
    const engineer = new Engineer('Jordan', '345', 'engineer@example.com', 'GitJordan');

    expect(engineer.getGithub()).toBe('GitJordan');
});