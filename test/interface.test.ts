describe("Interface", function() {
    it("Should support typescript interface", function(){
        interface Person {
            id: number
            age: number
        }

        const people: Person = {
            id: 21,
            age: 22,

        }
        console.log("🚀 ~ it ~ people:", people)
    })
})