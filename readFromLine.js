const readline = require("readline");
const rlinterface = readline.createInterface(process.stdin, process.stdout);

rlinterface.question("write your name ", (fname) => {
    console.log("hello " + fname);
    rlinterface.close();
});