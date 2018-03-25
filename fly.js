/////////////////////////////////////////////////////
///             Question  1                 /////////
/////////////////////////////////////////////////////
//Determine if a string is a a palindrome


function palindrome(word) {
    word = word.toLowerCase().replace(/[^\w]/g, "");
    var reversed = word.split("").reverse().join("");
    if (reversed === word) {
        return "Y";
    } else {
        return "N";
    }
}
/////////////////////////////////////////////////////
///             Question  2                 /////////
////////////     DRONE   ////////////////////////////

function fly(commands) {
  var location = [0, 0];
  console.log(location);

  commands = commands.split(" ");
  for(var command of commands) {
    if(command === "N") {
      location[1]++;
    } else if (command === "S") {
      location[1]--;
    } else if (command === "E") {
      location[0]++;
    } else if (command === "W") {
      location[0]--;
    }
    console.log(location);
  }
  var num = (location[0]**2 + location[1]**2 )**(1/2);
  console.log(num.toFixed(2)) //had to print out only two decimals
}


directions = "N N W N"
fly(directions)

/////////////////////////////////////////////////////
///             Question  3                /////////
////////////      TAXICAB    ////////////////////////

function cubeSum(n) {

  var maxIter = 1500
  var map = {}
  var taxiNums = [];

//These loops make all possible pairs of cubes from 0 to 1500(maxIter)
  for(var i = 1, j = 1; i < maxIter; i++) {
    for (var j = i; j < maxIter; j++) {
      var sum = i*i*i + j*j*j;
      if(!map[sum]){
        map[sum] = [i,j]
      } else {
        map[sum].push(i,j);
        taxiNums.push(sum);
      }
    }
  }

//I sorted the array of known taxi numbers from biggest to smallest
//I called the helper function because the JS method sort only does alpha sorted
//I chose not to do it as an anonymous FN, because I thought it made the code clearer
  taxiNums.sort(sortNumber);

//I itertated through taxicab array to figure out the index I need to stop at
  var stop = 0;
  for(var i=0; i < taxiNums.length; i++) {
      if (taxiNums[i] === n) {
          stop = i+1;
      } else if (taxiNums[i] < n ) {
          stop = i + 1;
      }
  }

  //Had to print out the results in a nice pretty format, of course
  for (var i = 0; i < stop; i++) {
      console.log(taxiNums[i] + ",(" + map[taxiNums[i]][0] + "," + map[taxiNums[i]][1] + "),(" + map[taxiNums[i]][2] + "," + map[taxiNums[i]]    [3] + ")");
  }

}

function sortNumber(a,b) {
  return a - b;
}

/////////////////////////////////////////////////////
///             Question  4               /////////
///////////  TAXICAB Runtime in BigO!  /////////
Forming all pairs = O(n^2)

Sorting with JS sort method = O(n *log(n))

Iterating through sorted Array = O(n)
