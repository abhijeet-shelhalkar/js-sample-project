// count the chars in given string

var inputStr = "abhijeetsureshraoshelhalkar";
var obj = {};
function charCounter(str) {
  var charArr = str.split("");
  for (var i = 0; i < charArr.length; i++) {
    var key = charArr[i];
    if (obj.hasOwnProperty(key)) {
      obj[key] = obj[key] + 1;
    } else {
      obj[key] = 1;
    }
  }
  console.log(obj);
}

charCounter(inputStr);

var users = [
  { name: "abhijeet", address: "pune", age: "30" },
  { name: "sujeet", address: "nagar", age: "28" },
  { name: "akshay", address: "basmath", age: "26" },
  { name: "abhilash", address: "karanja", age: "25" },
  { name: "sumit", address: "nagpur", age: "29" },
];