const Employee = require('../lib/Employee');

test('Creates an Employee object', () => {
    const employee = new Employee('Eliot', '123', 'employee@example.com');

    expect(employee.name).toBe('Eliot');
    expect(employee.id).toBe('123');
    expect(employee.email).toBe('employee@example.com');
});

test('return name of employee', () => {
    const employee = new Employee('Eliot', '123', 'employee@example.com');

    expect(employee.getName()).toBe('Eliot');
});

test('return employee id', () => {
    const employee = new Employee('Eliot', '123', 'employee@example.com');

    expect(employee.getId()).toBe('123');
});

test('return employee email', () => {
    const employee = new Employee('Eliot', '123', 'employee@example.com');

    expect(employee.getEmail()).toBe('employee@example.com');
});

test('funtion to return role as employee', () => {
    const employee = new Employee('Eliot', '123', 'employee@example.com');

    expect(employee.getRole()).toBe('Employee');
});