/*  Problem statement */

/* There was a group of 41 Jewish soldiers surrounded by Roman army, 
and they didn't want to get caught. So, they sat down in a circle and came up with an algorithm. 
Everybody had a sword, and starting from person #1 in the circle, 
everybody will kill the next living person on the left. 
So, #1 will kill #2. #3 will kill #4, #5 will kill #6 and so on. 
The last living person will have to commit suicide to avoid getting caught by Romans.

The soldier called Josephus preferred to be caught over committing suicide. 
So, in the group of 41 soldiers, he chose the location where he will be the last person living.

Write a program to figure out, in a group of given N people, 
where should Josephus sit to live at the end of all internal killing.

There is a mathematical solution to this problem. 
But, your program should use the brut force method to find the position. 
The output of the program may look like this:

Solving Josephus problem for 5 soldiers:
1 kills 2
3 kills 4
5 kills 1
3 kills 5

Josephus should sit on position# 3 */

function findLastPersonPosition() {
  var soldierArr = document.getElementById("input-txt").value;
  soldierArr = soldierArr.split(",");
  console.log(soldierArr);
  var position;
  var flag = true;
  var newArr = soldierArr;
  while (flag) {
    var length = newArr.length;
    if (length % 2 == 0) {
      newArr = getArray("even", newArr);
      if (newArr.length > 1) {
        flag = true;
      } else {
        position = newArr[0];
        flag = false;
      }
    } else {
      newArr = getArray("odd", newArr);
      if (newArr.length > 1) {
        flag = true;
      } else {
        position = newArr[0];
        flag = false;
      }
    }
  }
  console.log("position:", position);
  return position;
}

function getArray(flag, arr) {
  var filterArr = [];
  if (flag == "even") {
    filterArr = arr.filter(item => item % 2 == 0);
  } else {
    filterArr = arr.filter(item => item % 2 != 0);
  }
  return filterArr;
}