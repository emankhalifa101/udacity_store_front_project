import supertest from "supertest"
import app from "../../index"

import {createJWTToken} from "../../helpers/authentication"
import User from "../../interfaces/user.interface"

const request = supertest(app)
const token: string = createJWTToken(1, "bearer")

describe("products per order handler: ", () => {
    let user = {
        user_name:"test2",
        email:"test5050@gamil.com",
        f_name: "tets2",
        l_name: "ahmed",
        password: "1234"
    }as User;
    const newProduct = {
        "name": "headset",
        "price": 1000,
        "description": "p6666",
        "category": "c5"
    }
    let newOrder = {
        "user_id": 1,
        "status":"inprogress"
      }

    const productsOrder = {
    "order_id": 1,
    "product_id": 1,
    "quantity": 9
    }  
  it("should return all products per order ", () => {
    request
      .post("/api/productsOrder")
      .set("Authorization", `Bearer ${token}`)
      .expect("Content-Type", "application/json")
      .expect(201)
      .expect([])
  })

  it("should create products order", () => {
    request
      .post("/api/products")
      .set("Authorization", `Bearer ${token}`)
      .send(newProduct)
      .expect("Content-Type", "application/json")

    request
      .post("/api/users")
      .set("Authorization", `Bearer ${token}`)
      .send(user)
      .expect("Content-Type", "application/json")

    request
      .post("/api/orders")
      .set("Authorization", `Bearer ${token}`)
      .send(newOrder)
      .expect("Content-Type", "application/json")
      .expect(200)

    request
    .post("/api/productsOrder")
    .set("Authorization", `Bearer ${token}`)
    .send(newOrder)
    .expect("Content-Type", "application/json")
    .expect(200)  
    .expect({
    statusCode: 200,
    message: "congratulations",
    data: productsOrder
    })
  })

})