import { sayHello } from "../src/say-hello"

describe("SayHello", function(){
    it("Should return hello angger", function(){
        expect(sayHello("Angger")).toBe("Hello Angger");
    })
})