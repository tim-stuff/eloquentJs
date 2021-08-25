let theArray = [1,2,3]

function arrayToList(inputArray) {
    function buildListObject(current,limit) {
        if (current > limit-1) return null;
        let thisListObject = {}
        thisListObject.value = inputArray[current];
        current++;
        thisListObject.rest = buildListObject(current,limit);
        return thisListObject;
    }
    return buildListObject(0,inputArray.length);
}