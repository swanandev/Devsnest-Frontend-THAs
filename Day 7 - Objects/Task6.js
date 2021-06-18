/**
 * Program to Sort Object according to keys
 */

let library = [ 
    { 
        title: 'The Road Ahead', 
        author: 'Bill Gates', 
        libraryID: 1254 
    }, 
    { 
        title: 'Walter Isaacson', 
        author: 'Steve Jobs', 
        libraryID: 4264 
    }, 
    { 
        title: 'Mockingjay: The Final Book of The Hunger Games', 
        author: 'Suzanne Collins', 
        libraryID: 3245 
    }
];

console.log("\nLibrary before sorting:",library);

library.forEach((el, inx) => {
    let temp = {
        'author': el.author,
        'libraryID': el.libraryID,
        'title': el.title
    }

    library[inx] = JSON.parse(JSON.stringify(temp))
})

library.sort((a, b) => (a.libraryID < b.libraryID ? 1 : -1))

console.log("\n\nLibrary after sorting:",library);