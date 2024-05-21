//fetch
fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => {
        console.log(response);
        return response.json();
    })
    .then((json) => console.log(json));

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));

//async await

const data = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const json = await response.json();
  console.log(json);
};
