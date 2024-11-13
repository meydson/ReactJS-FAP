let fetchRes = fetch("https://jsonplaceholder.typicode.com/todos/8");


fetchRes.then(res => res.json()).then(data => {console.log(data)});

