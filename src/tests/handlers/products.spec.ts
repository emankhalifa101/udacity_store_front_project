import supertest from "supertest"
import app from "../../index"

import {createJWTToken} from "../../helpers/authentication"


const request = supertest(app)
const token: string = createJWTToken(1, "bearer")

describe("product handler: ", () => {
    let data = {
        "name": "p10",
        "price": 200,
        "description": "p6666",
        "category": "c2"
    }
  it(" should add product", () => {
    
    request
      .post("/api/products")
      .set("Authorization", `Bearer ${token}`)
      .send(data)
      .expect("Content-Type", "application/json")
      .expect(201)
      .expect({
        statusCode: 200,
        message: 'congratulations product added successfully ^^',
        data: {
            "name": "p10",
            "price": 200,
            "description": "p6666",
            "category": "c2"
        },
        token
      })
  })

  it(" should get all product", () => {
    request
      .get("/api/products")
      .set("Authorization", `Bearer ${token}`)
      .expect("Content-Type", "application/json")
      .expect([data])
  })

  it("should update product", () => {
    data.name= "product50"
    request
      .put("/api/productsList")
      .set("Authorization", `Bearer ${token}`)
      .send(data)
      .expect({
        statusCode: 200,
        message: "D",
        data: {
            "name": "product50",
            "price": 200,
            "description": "p6666",
            "category": "c2"
        }
      })
  })
})