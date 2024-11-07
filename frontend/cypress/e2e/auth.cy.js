describe('Auth flow', () => {
    beforeEach(() => {
        cy.visit('http://localhost:9000/');
    });

    it('should register a new user', () => {
        cy.contains('Зареєструватися').click();
        cy.get('input[name="username"]').type('testuser');
        cy.get('input[name="email"]').type('testuser@example.com');
        cy.get('input[name="password"]').type('Password123!');
        cy.get('input[name="passwordconfirm"]').type('Password123!');
        cy.contains('Зареєструватися').click();
        cy.url().should('include', '/register');
    });

    it('should log in an existing user', () => {
        cy.contains('Увійти').click();
        cy.get('input[name="email"]').type('testuser@example.com');
        cy.get('input[name="password"]').type('Password123!');
        cy.contains('Увійти').click();
        cy.url().should('include', '/login');
    });

    it('should handle "Увійти" or "Зареєструватися" link', () => {
        cy.contains('Увійти').click();

        cy.contains('Реєстрація').click();
    });
});
