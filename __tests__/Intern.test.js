const Intern = require('../lib/Intern');

test('creates intern object', () => {
    const intern = new Intern('Kacie', '456', 'intern@example.com', 'EWU');

    expect(intern.name).toBe('Kacie');
    expect(intern.id).toBe('456');
    expect(intern.email).toBe('intern@example.com');
    expect(intern.school).toBe('EWU');
    expect(intern.role).toBe('Intern');
});

test("return Inter's school", () => {
    const intern = new Intern('Kacie', '456', 'intern@example.com', 'EWU');

    expect(intern.getSchool()).toBe('EWU');
});