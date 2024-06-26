import request from "supertest";
import { afterAll, beforeAll, describe, it } from "vitest";
import { app } from "../app";

describe("transactions routes", () => {
  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  it("should be able to create a new transaction", async () => {
    await request(app.server)
      .post("/transactions")
      .send({
        title: "new transaction",
        amount: 4000,
        type: "credit",
      })
      .expect(201);
  });
});
