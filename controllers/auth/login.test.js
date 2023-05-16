const request = require('supertest');
const app = require('../../app')
const mongoose = require("mongoose");

const { DB_HOST, PORT = 3000 } = process.env;

const initializeDatabaseConnection = async (DB_HOST, PORT) => {
    mongoose.set('strictQuery', true);
    await mongoose.connect(DB_HOST)
        .then(() => {
            app.listen(PORT, () => {
                console.log(`Database connection successful`)
            })
        })
        .catch(error => {
            console.log(error.message);
            process.exit(1);
        })
}

describe("test login function", () => {
    beforeAll(() => {
        initializeDatabaseConnection(DB_HOST, PORT);
    });

    test("відповідь повина мати статус-код 200, у відповіді повинен повертатися токен, у відповіді повинен повертатися об'єкт user з 2 полями email и subscription з типом даних String", async () => {
        const response = await request(app).post("/api/users/login").send({
            email: "example@example.com",
            password: "examplepassword"
        });
        expect(response.status).toBe(200);
        expect(typeof response.body.token).toBe("string");
        expect(typeof response.body.user.email).toBe("string");
        expect(typeof response.body.user.subscription).toBe("string");
    })

    afterAll(async () => {
        app.close;
    });
})
