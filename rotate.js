function rotate(arr, k) {
  for (var i = 0; i < k; i++) {
    for (var j = 0; j < arr.length - 1; j++) {
      var temp = arr[j];
      arr[j + 1] = temp;
      arr[j] = arr[arr.length - 1];

    }
  }
  console.log(arr);
}

rotate([1, 2, 3, 4, 5, 6, 7], 3);