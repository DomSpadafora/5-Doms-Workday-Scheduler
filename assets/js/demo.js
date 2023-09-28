let index = [];

for (let i = 0; i < $('textarea').length; i++) {
  index.push($('textarea').eq(i).val());
};

// It initializes a for loop with the variable i starting at 0.
// The loop continues as long as i is less than the number of <textarea> elements found using the $('textarea').length selector.
// In each iteration, it uses the eq() method to select the <textarea> element at index i and retrieve its value using the val() method.
// The retrieved value is then pushed into the index array using the push() method.
// After the loop finishes, the stored array will contain the values of all the <textarea> elements.