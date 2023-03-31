// Collect books from array of objects and return collection of books as an array
let friends = [
  {
    name: 'Anna',
    books: ['Bible', 'Geeta', 'Harry Potter'],
    age: 20
  },
  {
    name: 'Bob',
    books: ['War and Peace','Bible','Geeta', 'Quran'],
    age: 22
  },
  {
    name: 'Alice',
    books: ['The Monk', 'Pride and Prejudice', 'Good Morning'],
    age: 21
  }
];

let allBooks = friends.reduce((arr, friend) => {
  friend.books.forEach(book => {
    if (!arr.includes(book)) {
      arr.push(book);
    }
  });
  return arr;
}, []);

console.log("All books of friends are:\n", allBooks);
