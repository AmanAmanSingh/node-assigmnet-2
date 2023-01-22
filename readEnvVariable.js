// console.log(process.env)                           ----> object format 

const greet = "hello";
process.env.fname = "aman";
console.log(`${greet}  ${process.env.fname}`);

// console.log(process.env);