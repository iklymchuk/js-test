function testSum() {
    var result = sum(4, 5);
    assert(result === 9, 'Error! 4 + 5 != 9')
}

function assert(val, desc) {
    if (!val) {
        throw new Error(desc);
    }
}