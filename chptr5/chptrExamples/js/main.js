function deepEqual (itemA,itemB) {
    // if either item is null or not an object, immediately return an exact comparison
    if ( itemA === null || itemB === null || typeof itemA !== "object" || typeof itemB !== "object")  return itemA === itemB;

    // compare all itemA properties to itemB properties, immediately returning false
    for (keyName in itemA) {
        if (!itemB.hasOwnProperty(keyName) || !deepEqual(itemA[keyName],itemB[keyName])) return false;
    }

    // this will catch in the event that itemB has a property that itemA did not have.
    return (Object.keys(itemA).length === Object.keys(itemB).length);
}


let equalObject1 = {
    name: {
        first: "Timothy",
        middle: "Christopher",
        last: "Daigle"
    },
    age: 34,
    spouse: {
        name: {
            first: "Charlotte",
            middle: "Ruth",
            last: "Daigle"
        },
        age: 28
    },
    job: "Senior Web Developer",
    interests : ["strength training","drums","coding","video games"]
}

let equalObject2= {
    name: {
        first: "Timothy",
        middle: "Christopher",
        last: "Daigle"
    },
    age: 34,
    spouse: {
        name: {
            first: "Charlotte",
            middle: "Ruth",
            last: "Daigle"
        },
        age: 28
    },
    job: "Senior Web Developer",
    interests : ["strength training","drums","coding","video games"]
}

let unequalObject= {
    name: {
        first: "Timothy",
        middle: "Christopher",
        last: "Daigle"
    },
    age: 34,
    spouse: {
        name: {
            first: "Charlotte",
            middle: "Ruth",
            last: "Daigle"
        },
        age: 28
    },
    job: "Senior Web Developer",
    interests : ["strength training","drums","coding","video games"],
    hairColor: "sandy"
}