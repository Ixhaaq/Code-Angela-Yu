var houseKeeper1 = {
    yearsOfExperience: 12,
    name: "Jane",
    cleaningRepertoire: ["bathroom", "lobby", "bedroom"]
}

console.log(houseKeeper1.name);


// Constructor Function {}
// first letter of first word is capitalised 
function BellBoy (name, age, hasWorkPermit, languages) {
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
}

var bellBoy1 = new BellBoy("Timmy", 19, true, ["French", "English"]); 