function checkValidity(min, max, tries){
    var checkMin, checkMax, checkTries, res
    if(min < 0 || min > 200 || min > max){
        checkMin = false
    }else{
        checkMin = true
    }
    if(max < 0 || max > 200){
        checkMax = false
    }else{
        checkMax = true
    }
    if(tries < 0 || tries > 15){
        checkTries = false
    }else{
        checkTries = true
    }
    if (checkMin && checkMax && checkTries){
        res = true
    }else {
        res = false
    }
    return res
}
console.log(checkValidity(51, 52, 6));