function logger (mess, j) {
     var obj = {};
        obj.message = mess;
        obj.prop = j;
    return obj;
}

function testMap() {
    var mess = "Error message!";
    var args = {
        firstName:"John", 
        lastName:"Doe", 
        page:"Login"
    };

    return logger(mess, args);
}