import supertest from "supertest"
import app from "../../index";

import {createJWTToken} from "../../helpers/authentication"

const request = supertest(app)
const token: string = createJWTToken(1, "test1@gamil.com")

describe("User handler: ", () => {
  it("/user should add user ", () => {
    const data = {
        user_name:"eman",
        email:"test1@gamil.com",
        f_name: "eman",
        l_name: "ahmed",
        password: "1234"
    }
    request
      .post("/api/users")
      .set("Authorization", `Bearer ${token}`)
      .send(data)
      .expect("Content-Type", "application/json")
      .expect(201)
      .expect({
        statusCode: 200,
        message: "congratulations user added successfully ^^",
        data: {
            user_name:"eman",
            email:"test1@gamil.com",
            f_name: "eman",
            l_name: "ahmed",
            password: "1234"
        },
        token
      })
  })

  it("api/users should update user", () => {
    const data ={
        user_name:"eman2",
        email:"test1@gamil.com",
        f_name: "eman",
        l_name: "ahmed",
        password: "1234"
    }
    request
      .get("/api/users")
      .set("Authorization", `Bearer ${token}`)
      .expect("Content-Type", "application/json")
      .expect(data)
  });

  it("should get all users /api/users ", () => {
   
    request
      .get("/api/users")
      .set("Authorization", `Bearer ${token}`)
      .expect({
        statusCode: 200,
      messege: 'congratulations',
        data: [{
            user_name:"eman",
            email:"test1@gamil.com",
            f_name: "eman",
            l_name: "ahmed",
            password: "1234"
        }]
      })
  })

  it("should get specific user /api/users/1 ", () => {
    const data = {
        user_name:"eman2",
        email:"test1@gamil.com",
        f_name: "eman",
        l_name: "ahmed",
        password: "1234"
    }
    request
      .put("/api/users")
      .set("Authorization", `Bearer ${token}`)
      .send(data)
      .expect({
        statusCode: 200,
      messege: 'congratulations',
        data: {
            user_name:"eman",
            email:"test1@gamil.com",
            f_name: "eman",
            l_name: "ahmed",
            password: "1234"
        }
      })
  })
})