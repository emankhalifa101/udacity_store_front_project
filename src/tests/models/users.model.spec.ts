import UserModel from "../../models/users.model";

describe('UserModel Tests',()=> {
    const userModel = new UserModel();
    const user = {
        user_name:"eman",
        email:"test1@gamil.com",
        f_name: "eman",
        l_name: "ahmed",
        password: "1234"
    }
    beforeAll(async()=> {
       
    });
    afterAll(async () => {})

    it('should create user in data base',async()=> {
        const newUser = await userModel.create(user);
        expect(newUser.id).toBeTruthy();
    });

    it('should reteive all users', async()=> {
        const users = await userModel.index();
        expect(users.length).toBeGreaterThan(0);
    });

    it('should get one user',async () => {
        const user = await userModel.show(1);
        expect(user.id).toEqual(1);
    });

    it('should update user',async () => {
        const updatedUser = {
            id:1,
            email: "deda2020",
            user_name: "deda mansour",
            f_name: "deda",
            l_name: "hema",
            password: "2020"
        }
        const user = await userModel.updateUser(updatedUser);
        expect(user.email).toEqual("deda2020");  
    });

    it('should delete user',async ()=> {
        const user2 = {
            email: "dedy@d",
            user_name: "deda mansour",
            f_name: "deda",
            l_name: "hema",
            password: "2020"
        }
        await userModel.create(user2);
        await userModel.deleteUser(2);
        const user = await userModel.show(2);
        expect(user).toBeFalsy();  
    }); 
    it('should authenticate user',async ()=> {
        const authenticatedUser = await userModel.authenticateUser("deda2020", '2020');
        if(authenticatedUser) {
            expect(authenticatedUser.user_name).toBe("deda mansour")
        }
    })

})