import Address from './address';
import Store from './store';

describe("Store unit tests", () => {

    it("Should throw an error when id is empty", () => {
        expect(() => {
            let store = new Store("", "1234567890", "Loja 1", "mail@store.com");
        }).toThrowError("O ID é obrigatório.");
    });

    it("Should throw an error when name is empty", () => {
        expect(() => {
            let store = new Store("1", "1234567890", "", "mail@store.com");
        }).toThrowError('O nome da loja é obrigatório.')
    });

    it("Should throw an error when email is empty", () => {
        expect(() => {
            let store = new Store("1", "1234567890", "Loja 1", "");
        }).toThrowError('O e-mail da loja é obrigatório.')
    });

    it("Should throw an error when CNPJ is empty", () => {
        expect(() => {
            let store = new Store("1", "", "Loja 1", "mail@store.com");
        }).toThrowError('O CNPJ é obrigatório.')
    });

    it("Should change name", () => {
        //Arrange
        let store = new Store("1", "1234567890", "Loja 1", "mail@store.com");
        //Act
        store.changeName("Loja 2");
        //Assert
        expect(store.name).toBe("Loja 2");
    });

    it("Should change email", () => {

        let store = new Store("1", "1234567890", "Loja 1", "mail@store.com");
        let newEmail = "newemail@mail.com"
        store.changeEmail(newEmail);

        expect(store.email).toBe(newEmail);
    });

    // it("Should set address", () => {
    //     const store = new Store("1", "1234567890", "Loja 1", "mail@store.com");
    //     const address = new Address('Street one', 31, 'Neighbour', '0000-000', 'city', 'SP');

    //     store.address = address;

    //     expect(store.address).toBe(address);
    // });

});