const obj = {
    a: 1,
    b: 2,
    c: 3,
    Mama: 5,
};
function test(obj) {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
            console.log((key)+":"+(obj[key]));
            }
      }
}

test (obj)
