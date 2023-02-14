import Address from "./address";
import User from "./user";

describe("User unit tests", () => {

    it("Should throw an error when id is empty", () => {
        expect(() => {
            let user = new User("", "Pedro", "test@mail.com");
        }).toThrowError("O ID é obrigatório.");
    });

    it("Should throw an error when name is empty", () => {
        expect(() => {
            let user = new User("1", "", "test@mail.com");
        }).toThrowError("O nome é obrigatório.");
    });

    it("Should throw an error when email is empty", () => {
        expect(() => {
            let user = new User("1", "Pedro", "");
        }).toThrowError("O email é obrigatório.");
    });

    it("Should change name", () => {
        //Arrange
        let user = new User("1", "Pedro", "test@mail.com");
        //Act
        user.changeName("Amanda");
        //Assert
        expect(user.name).toBe("Amanda");
    });

    it("Should change email", () => {

        let user = new User("1", "Pedro", "test@mail.com");
        let newEmail = "newemail@mail.com"
        user.changeEmail(newEmail);

        expect(user.email).toBe(newEmail);
    });

    // it("Should set address", () => {
    //     const user = new User("1", "Pedro", "test@mail.com");
    //     const address = new Address('Street one', 31, 'Neighbour', '0000-000', 'city', 'SP');

    //     user.address = address;

    //     expect(user.address).toBe(address);
    // });
    
    it("Should activate user", () => {
        const user = new User("1", "Pedro", "test@mail.com");
        
        user.activate();

        expect(user.isActive()).toBe(true);
    });

    it("Should deactivate user", () => {
        const user = new User("1", "Pedro", "test@mail.com");
        
        user.deactivate();

        expect(user.isActive()).toBe(false);
    });

}); 