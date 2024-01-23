fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.log(error);
  });