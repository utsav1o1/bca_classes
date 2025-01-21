

console.log('First Day 11: JavaScript Classes - Part 1');

async function fetchUser() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    console.log(await response);
    const data = await response.json();
    return data;
  }
  
console.log(fetchUser());



console.log('Second Day 11: JavaScript Classes - Part 1');