function getInvCount(arr)
{
    let inv_count = 0 ;
    for(let i=0;i<2;i++){
        for(let j=i+1;j<3;j++){
         
            // Value 0 is used for empty space
            if (arr[j][i] > 0 && arr[j][i] > arr[i][j]) {
                inv_count += 1;
            }
        }
    }
    console.log(inv_count);
    return inv_count;
}
// This function returns true
// if given 8 puzzle is solvable.
function isSolvable(puzzle)
{
    // Count inversions in given 8 puzzle
    let invCount = getInvCount(puzzle);
    // return true if inversion count is even.
    return (invCount % 2 == 0);
}
 
// Driver code
 
// Value 0 is used for empty space
puzzle = [[7, 2, 4],[5, 0, 6],[8, 3, 1]] ;
if (isSolvable(puzzle)) {
    console.log("Solvable");
} else {
    console.log("Not Solvable");
}