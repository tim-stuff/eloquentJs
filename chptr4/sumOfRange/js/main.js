var createRange = (start, end, increment = 1) => {
    if (increment === 0 || start === end) return [];
    if (start > end) increment = -increment;
    let rangeArray = [];
    let loopComplete = (count) => {
        return increment > 0 ? count <= end : count >= end;
    }
    //console.log(loopComplete(start));
    for (let i = start; loopComplete(i); i += increment) {
        rangeArray.push(i);
    }
    return rangeArray;
}

var sumRange = (...rangeArray) => {
    //console.log(rangeArray);
    let sumTotal = 0;
    for (let number of rangeArray) {
        sumTotal += number;
    }
    return sumTotal;
}