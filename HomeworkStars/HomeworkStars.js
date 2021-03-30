//pattern 1
function pattern1(n) {
    var res = "\n";
    for (var i = 0; i < n; i++) {
      for (var j = 0; j < n; j++) {
        res += " * ";
      }
      res += "\n";
    }
    return res;
}

//pattern 2
function pattern2(n) {
    var res = "\n";
  
    for (var i = 0; i <= n - 1; i++) {
      res += " * ";
      for (var j = 0; j < n - 2; j++) {
        if (i !== n - 1 && i !== 0) {
          res += "   ";
        } else res += " * ";
      }
      res += "* \n";
    }
    return res;
}
//pattern 3
function pattern3(n) {
    var res = "\n";
    for (var i = 0; i < n; i++) {
      res += " * ";
      for (var j = 0; j < n - 1; j++) {
        if (i === 0 || j === n - i - 2) {
          res += " * ";
        } else {
          res += "   ";
        }
      }
      res += " \n";
    }
    return res;
}

//pattern 4
function pattern4(n) {
    var res = "\n";
    for (var i = 0; i < n; i++) {
        res += " * ";
      for (var j = 0; j < n - 1; j++) {
        if (i === n - 1 || j === i - 1) {
            res += " * ";
        } else {
            res += "   ";
        }
      }
      res += " \n";
    }
    return res;
}

//pattern 5
function pattern5(n) {
    var res = "\n";
    for (var i = 0; i < n; i++) {
        res += "   ";
      for (var j = 0; j < n - 1; j++) {
        if (i === n - 1 || j === n - (i + 1)) {
            res += " * ";
        } else {
            res += "   ";
        }
      }
      res += " *\n";
    }
    return res;
}
 
//pattern 6
function pattern6(n) {
    var res = "\n";
    for (var i = 0; i < n; i++) {
        res += "   ";
      for (var j = 0; j < n - 1; j++) {
        if (i === 0 || j === i) {
            res += " * ";
        } else res += "   ";
      }
      res += " *\n";
    }
    return res;
}

//pattern 7
function pattern7(n) {
    var res = "\n";
    for (var i = 0; i < n; i++) {
        res += "   ";
      for (var j = 0; j < n; j++) {
        if (i === j || j === n - i - 1) {
            res += " * ";
        } else res += "   ";
      }
      res += " \n";
    }
    return res;
}

//pattern 8
function pattern8(n) {
    var res = "\n";
    for (var i = 0; i < n; i++) {
        res += "   ";
      for (var j = 0; j < n; j++) {
        if (i < n / 2) {
          if (i === 0 || j === i || j === n - i - 1) {
            res += " * ";
          } else {
            res += "   ";
          }
        }
      }
      res += " \n";
    }
    return res;
}

//pattern 9
function pattern9(n) {
    var res = "\n";
    for (var i = 0; i < n; i++) {
        res += "   ";
      for (var j = 0; j < n; j++) {
        if (i > n / 2 - 1) {
          if (i === n - 1 || j === i || j === n - i - 1) {
            res += " * ";
          } else {
            res += "   ";
          }
        }
      }
      res += " \n";
    }
    return res;
}