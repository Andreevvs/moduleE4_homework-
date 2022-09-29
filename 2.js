const obj = {
    a: 1,
    b: "",
    c: 3,
    "Mama": "5",
};
const str = "bq";
function test(str, obj) {
        for (let key in obj) {
            if (key == str) {
                  result = "True";
              break;
            }
            else {
             result = "False";
           }
        }
  console.log (result);
 }

test (str, obj)
