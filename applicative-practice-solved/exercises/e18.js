/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  const mostDiscoveries = data.asteroids.map((asteroid)=>asteroid.discoveryYear)
  .reduce((year, occur) => {
    year[occur] = (year[occur] || 0) + 1;
    //create an obj to elem with a counter to find the mode

    if(!year.mode || year[occur] > year[year.mode]){
      //note: not = because I had it backwards.
    year.mode = occur;}
      //to have a counter assing into my # of occurances

    return year;
  }, {mode: null }).mode;
    //null is an absent value I can reassign
  return mostDiscoveries;
    //so frustrating hope it works
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
