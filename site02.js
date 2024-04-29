
//balanced
const testbrackets1 = "[()]{}{[()()]()}";
//balanced
const testbrackets2 = `([{}])`;
//not balanced
const testbrackets3 = "{(})[]";
//not balanced
const testbrackets4 = "[(])";
//not balanced
const testbrackets5 = "[()";
//driver function used for display and passing values.
function checkBrackets() {
    //change testbrackets here. makes easire to change in one place.
    let testbrackets = testbrackets3;
    let testbrackets2 = document.getElementById("bracketInput").value;
    //implement isBalanced function. checks if the bracket string is balanced.
    let results = isBalancedB(testbrackets);
    // the results from the input
    let results2 = isBalancedB(testbrackets2);
    //used for display no need to change
    let msg = "";
    if (results == true) {
        msg = `Brackets are balanced ==> ${testbrackets}`;
    } else {
        msg = `Brackets are NOT balanced ==> ${testbrackets}`;
    }
    //display the message
    document.getElementById("results").innerHTML = msg;
    // to display the message for the input box
    let msg2 = "";
    if (results2 == true) {
        msg2 = `Brackets are balanced ==> ${testbrackets2}`;
    } else {
        msg2 = `Brackets are NOT balanced ==> ${testbrackets2}`;
    }
    document.getElementById("results2").innerHTML = msg2;
}
//takes an array of strings and returns the longest one.
function isBalanced(brackets) {
    let stack = [];
    for (let i = 0; i < brackets.length; i++) {
        let item = brackets[i];
        if (item == '(' || item == '{' || item == '[') {
            stack.push(item);
            continue;
        } else if (item == ')' || item == '}' || item == ']') {
            if (stack.length == 0) {
                return false;
            }
            check = stack.pop();
            switch (item) {
                case '}':
                    if (check != '{') {
                        return false;
                    }
                    break;
                case ']':
                    if (check != '[') {
                        return false;
                    }
                    break;
                case ')':
                    if (check != '(') {
                        return false;
                    }
                    break;
            }
        }
    }
    return stack.length == 0;
}
function isBalancedB(brackets) {
    let stack = []
    let openedBrackets = ["(", "{", "["]
    let closedBrackets = [")", "}", "]"]
    const balancedBreckets = {
        "(" : ")",
        "{" : "}",
        "[" : "]"
     }
    for (let i =0; i < brackets.length; i++) {
        let item = brackets[i]
        if (openedBrackets.includes(item)) {
            stack.push(item);
            continue;
        }else if (closedBrackets.includes(item)) {
            if(stack.length == 0) {
                return false
            }
            check = stack.pop();
            if(balancedBreckets[check] != item) {
                return false;
            }
        }
    }
    return stack.length == 0;
}
module.exports = isBalancedB;