var countOfIterations = 0;

function stackFunc() {
    setTimeout(function() {
        if (countOfIterations < 3) { //condition of end
            console.log("first default action");
            countOfIterations++;
            return firstStack();
        }
        
    }, 1000)
};

function firstStack() {
    setTimeout(function() {
        console.log("firstStack action");
            return secondStack();
    }, 1000)
};

function secondStack() {
    setTimeout(function() {
        console.log("secondStack action");

        console.log("*** END OF " + countOfIterations + " ITERATION ***")
            return stackFunc();
    }, 1000)
};

function testStackFunc () {
        stackFunc();
};