/// <reference path="../typings/index.d.ts" />
"use strict";
const index_1 = require("../src/index");
const chai = require("chai");
var StaticTools = index_1.euglena_template.being.subscribtion.StaticTools;
describe("euglena.template", () => {
    describe("being", () => {
        describe("subscribtion", () => {
            describe("StaticTools", () => {
                it("addSubscribtion", () => {
                    //given
                    let particle = { meta: { name: "Token" } };
                    let euglenaName = "idcore";
                    //when
                    let result = StaticTools.addSubscribtion(particle, euglenaName);
                    //then
                    let tools = StaticTools;
                    chai.expect(tools["subscribtionDict"]).to.has.length(1);
                    chai.expect(tools["subscribtionDict"][0]).property('particle', particle);
                    chai.expect(tools["subscribtionDict"][0]['euglenas']).to.has.length(1);
                    chai.expect(tools["subscribtionDict"][0]['euglenas']).to.contains(euglenaName);
                });
                it("removeSubscribtions", () => {
                    //given
                    let particle = { meta: { name: "Token" } };
                    let euglenaName = "idcore";
                    let result = StaticTools.addSubscribtion(particle, euglenaName);
                    //then
                    let tools = StaticTools;
                    chai.expect(tools["subscribtionDict"]).to.has.length(1);
                    chai.expect(tools["subscribtionDict"][0]).property('particle', particle);
                    chai.expect(tools["subscribtionDict"][0]['euglenas']).to.has.length(1);
                    chai.expect(tools["subscribtionDict"][0]['euglenas']).to.contains(euglenaName);
                    //when
                    StaticTools.removeSubscribtions(particle);
                    //after then
                    chai.expect(tools["subscribtionDict"]).to.has.length(1);
                    chai.expect(tools["subscribtionDict"][0]).property('particle', particle);
                    chai.expect(tools["subscribtionDict"][0]['euglenas']).to.has.length(0);
                });
            });
        });
    });
});
//# sourceMappingURL=index.js.map