import request from "supertest";
import express from "express";
import { rootRouter } from "../routes";

const server = express();

server.use("/v1", rootRouter);

describe("GET /v1", function(){
    it("responds with json",function(done){
        request(server)
            .get("/v1")
            .expect("Content-Type", /json/)
            .expect(res =>{
                res.body.headers={}
            })
            .expect(
                200,
                {
                    method: "GET",
                    path: "/",
                    headers: {},
                    baseUrl:"/v1",
                    //host: "localhost",
                    ip: "::ffff:127.0.0.1",
                    message: "Handling GET request",
                                        
                }, 
                done
            );
    })
});

describe("POST /v1", function(){
    it("responds with json", function(done){
        request(server)
        .post("/v1")
        .expect("Content-Type", /json/)
        .expect(res =>{
            res.body.headers = {};
        })
        .expect(
            200,
            {
                method: "POST",
                path: "/",
                headers: {},
                baseUrl:"/v1",
                //host: "localhost",
                ip: "::ffff:127.0.0.1",
                message: "Handling POST request",
            },
            done
        );
    })
});

describe("PUT /v1", function(){
    it("responds with json", function(done){
        request(server)
        .put("/v1")
        .expect("Content-Type", /json/)
        .expect(res =>{
            res.body.headers = {};
        })
        .expect(
            200,
            {
                method: "PUT",
                path: "/",
                headers: {},
                baseUrl:"/v1",
                //host: "localhost",
                ip: "::ffff:127.0.0.1",
                message: "Handling PUT request",
            },
            done
        );
    })
});

describe("DELETE /v1", function(){
    it("responds with json", function(done){
        request(server)
        .delete("/v1")
        .expect("Content-Type", /json/)
        .expect(res =>{
            res.body.headers = {};
        })
        .expect(
            200,
            {
                method: "DELETE",
                path: "/",
                headers: {},
                baseUrl:"/v1",
                //host: "localhost",
                ip: "::ffff:127.0.0.1",
                message: "Handling DELETE request",
            },
            done
        );
    })
});