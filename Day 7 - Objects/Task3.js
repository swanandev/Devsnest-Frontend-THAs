/**
 * Program to count Object Length
 */

let library = 
    [ 
        { 
            author: 'Bill Gates', 
            title: 'The Road Ahead', 
            readingStatus: true }, 
        { 
            author: 'Steve Jobs', 
            title: 'Walter Isaacson', 
            readingStatus: true }, 
        { 
            author: 'Suzanne Collins', 
            title: 'Mockingjay: The Final Book of The Hunger Games',
            readingStatus: false 
        }
    ];

let student = { name : "David Rayy", sclass : "VI", rollno : 12 };

let stu_len = 0

for (let key in library)
    stu_len += 1

console.log("Student Object Length:", stu_len)