let myForLoop = (value, testFunction, bodyFunction, updateFunction) => {
    if (!testFunction(value)) return false;
    bodyFunction(value);
    myForLoop(updateFunction(value),testFunction,bodyFunction,updateFunction);
}


let anArrayOfArrays = [1,2,3,4,5,6,7,8,9];
