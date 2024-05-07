///part 1 ///
let counter = 0;
function myCall() {
    counter++;
    myCall();
  }
  
  try {
    // Surround the initial function call in a try/catch block
    myCall();
  } catch (error) {
    console.log("Error caught:", error);
    console.log("Counter value:", counter);
  }

  const factorial = (n) => {
    if (n === 0) return 1; // The base case, to stop recursion
    return n * factorial(n - 1); // The recursive call
  }