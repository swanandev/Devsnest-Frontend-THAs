/*
    Program to delete property of object
*/

let student = { name : "David Rayy", sclass : "VI", rollno : 12 };

console.log("Object Before Deletion :-", student);

delete student['rollno']

console.log("Object After Deletion :-", student);