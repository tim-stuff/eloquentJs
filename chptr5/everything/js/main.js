let everyFunc = (testedArray, testingFunction) => {
    for (let i=0; i< testedArray.length; i++) {
        if (!testingFunction(testedArray[i])) return false;
    }
    return true;
}

let anArray = [1,2,3,4,5,6,7,8,9];


let anArrayOfObjects = [
    {
        firstName:"Tim",
        lastName:"Daigle",
        job: "web dev",
        age: 34
    },
    {
        firstName:"Charlotte",
        lastName:"Daigle",
        job: "awesome",
        age: 28
    },
    {
        firstName:"Chris",
        lastName:"McNeese",
        job: "web dev",
        age: 37
    },
    {
        firstName:"Stephan",
        lastName:"Hilbilink",
        job: "web dev",
        age: 48
    }
];