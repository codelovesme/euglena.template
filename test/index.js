/// <reference path="../typings/index.d.ts" />
"use strict";
var index_1 = require("../src/index");
var chai = require("chai");
var tools = index_1.euglena_template.being.subscription.StaticTools;
describe("euglena.template", function () {
    describe("being", function () {
        describe("subscription", function () {
            describe("StaticTools", function () {
                it("addSubscription", function () {
                    //given
                    var particle = { meta: { name: "Token" } };
                    var euglenaName = "idcore";
                    //when
                    var result = tools.addSubscription(particle, euglenaName);
                    //then
                    chai.expect(tools["subscriptionDict"]).to.has.length(1);
                    chai.expect(tools["subscriptionDict"][0]).property('particle', particle);
                    chai.expect(tools["subscriptionDict"][0]['euglenas']).to.has.length(1);
                    chai.expect(tools["subscriptionDict"][0]['euglenas']).to.contains(euglenaName);
                });
                it("removeSubscription", function () {
                    //given
                    var particle = { meta: { name: "Token" } };
                    var euglenaName = "idcore";
                    var result = tools.addSubscription(particle, euglenaName);
                    //when
                    tools.removeSubscription(particle, euglenaName);
                    //after then
                    chai.expect(tools["subscriptionDict"]).to.has.length(1);
                    chai.expect(tools["subscriptionDict"][0]).property('particle');
                    chai.expect(tools["subscriptionDict"][0]['euglenas']).to.has.length(0);
                });
                it("removeSubscriptions", function () {
                    //given
                    var particle = { meta: { name: "Token" } };
                    var euglenaName = "idcore";
                    var result = tools.addSubscription(particle, euglenaName);
                    //when
                    tools.removeSubscriptions(particle);
                    //after then
                    chai.expect(tools["subscriptionDict"]).to.has.length(0);
                });
            });
        });
    });
});
//# sourceMappingURL=index.js.map