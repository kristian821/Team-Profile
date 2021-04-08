const Manager = require('../lib/Manager');

test('creates a Manager object', () => {
    const manager = new Manager('Kim', '234', 'manager@example.com', '101');

    expect(manager.name).toBe('Kim');
    expect(manager.id).toBe('234');
    expect(manager.email).toBe('manager@example.com');
    expect(manager.officeNumber).toBe('101');
});

test('Manager object returns Manager as role', () => {
    const manager = new Manager('Kim', '234', 'manager@example.com', '101');

    expect(manager.getRole()).toBe('Manager');
});