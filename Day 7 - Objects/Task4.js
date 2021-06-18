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

for (let bookkey in library){
    let book = library[bookkey]
        console.log("\n\nBook Title:", book.title);
        console.log("Book Author:", book.author);
        console.log("Reading Status:", book.readingStatus);

}