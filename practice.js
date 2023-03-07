function doesArrayIncludeItemsBetweenVals(arr, val1, val2) {
  if(!arr.length) return false;
for (let elem of arr) {
 if (elem > val1 && elem < val2 ) {
  return true;
 } else {
 return false;
 }
}
}
doesArrayIncludeItemsBetweenVals([2, 4, 2], 3, 5);