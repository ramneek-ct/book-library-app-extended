let books = [ {
    book_id: 1,
    title: "the_secret",
    author: "rhonda_byrne",
    pages: 198,
    isRead: true
},
{
    book_id: 2,
    title: "harry_potter",
    author: "jk_rowling",
    pages: 636,
    isRead: false
},
{
    book_id: 3,
    title: "atomic_habits",
    author: "james_clear",
    pages: 320,
    isRead: true
},
{
    book_id: 4,
    title: "the_outsider",
    author: "stephen_king",
    pages: 496,
    isRead: false
},
{
    book_id: 5,
    title: "the_shining",
    author: "stephen_king",
    pages: 505,
    isRead: false
},
{
    book_id: 6,
    title: "the_girl_on_the_train",
    author: "paula_hawkins",
    pages: 320,
    isRead: false
},
{
    book_id: 7,
    title: "the_diary_of_a_young_girl",
    author: "anne_frank",
    pages: 328,
    isRead: false
},
{
    book_id: 8,
    title: "think_and_grow_rich",
    author: "napolean_hill",
    pages: 238,
    isRead: false
},
{
    book_id: 9,
    title: "manifest",
    author: "roxie_nafousi",
    pages: 192,
    isRead: false
},
{
    book_id: 10,
    title: "ikigai",
    author: "hector_garcia",
    pages: 119,
    isRead: true
}]

function pages(){
    let minbooks = books.filter((value) => (value.pages<200));
    let sortedminbooks = minbooks.sort((a,b) => { return a.title.localeCompare(b.title); });
    console.log(sortedminbooks);
}
function search(){
    let str = prompt("Enter the string you want to search: ");
    let matched = books.filter((item) => (item.title.includes(str) || item.author.includes(str) ));
    console.log(matched);
}
function retrieve(){
    let id = Number(prompt("Enter the id: "));
    let retrieved_book = books.findIndex((item) => item.book_id == id);
    console.log(books[retrieved_book]);
    let title = prompt("Enter the title of the book (in snake case, eg. book_title)");
    let author = prompt("Enter the author of the book (in snake case, eg. book_author)");
    let pages = Number(prompt("Enter the number of pages in the book"));
    while(isNaN(pages)){pages = Number(prompt("Enter the number of pages again: (Please enter a number only): "));}
    for(let i=0; i<books.length; i++){
        if(books[i]==books[retrieved_book]){
            books[i].title = title;
            books[i].author = author;
            books[i].pages = pages;
        }
    }
    console.log(books);
}
function remove_books(){
    let id = prompt("Enter the ID of the book that you want to remove: ");
    let index = books.findIndex((item) => item.book_id == id);
    books.splice(index,1);
    console.log(books);
}
function addDate(){
    books.forEach((item) => {
        if(item.date){
            return;
        }else{
            let date = prompt("Enter the published date for the book " + item.title);
            item["date"] = date;
        }       
    })
    console.log(books);
}
function reverse(){
    books.forEach((item) => {
        let reversedTitle = item.title.split("").reverse().join("");
        let reversedAuthor = item.author.split("").reverse().join("");

        console.log("\nReverse of title " + item.title + " is '" + reversedTitle + "'");
        console.log("Reverse of author " + item.author + " is '" + reversedAuthor + "'");
    })
}

function display_books(){
    let book_cards = books.map((book) => { 
        let book_title = book.title.split("_");
        let book_author = book.author.split("_");
        for(let i=0; i<book_title.length; i++){
            book_title[i] = book_title[i].charAt(0).toUpperCase() + book_title[i].slice(1);
            
        }
        for(let i=0; i<book_author.length; i++){
            book_author[i] = book_author[i].charAt(0).toUpperCase() + book_author[i].slice(1);
            
        }
        console.log("\nTitle: " + book_title.join(" "));
        console.log("Author: " + book_author.join(" "));
    })
}

function search_books(){
    let search = prompt("Enter the title of the book you want to search: ");
    search_book(search);
}
function search_book(search){
    const match = books.filter( (book) => {book.title.includes(search);});
    console.log(match);
}

function number_of_pages(){
    let total_pages= books.reduce(addPages, +0);
    function addPages(total, book){
        return total + book.pages;
    }
    console.log("Total number of pages in the book collection are: " + total_pages);

    let read = books.filter((value) => (value.isRead == true)).reduce(addPages, +0);
    console.log("Total number of pages that have been read: " + read);
}

function mark_book(){
    let book = prompt("Enter the book id of the book that you wanna mark read/unread: ");
    mark(book);
}
function mark(book){
    let findbook = books.find((value) => (value.book_id == book));
    console.log(findbook);

    findbook.isRead = !findbook.isRead;
    console.log("Now the book(isRead) is marked as: " + findbook.isRead);
    console.log(books);
}

function sort_books(){
    let sortedBooks = books.sort((book1, book2) => { return book1.pages - book2.pages; });
    console.log(sortedBooks);
}

function add_books(){
    let id = Number(prompt("Enter the book ID: "));
    while(isNaN(id)){id = Number(prompt("Enter the book ID again: (Please enter a number only): "));}
    let check = books.find(checkid);
    function checkid(value){
        if(value.book_id == id){
            console.log("A book with this book id already exists.");
            return id;
        }
    }
    if(check){
        console.log(check);
        return;
    }else{
        let title = prompt("Enter the title of the book (in snake case, eg. book_title)");
        let author = prompt("Enter the author of the book (in snake case, eg. book_author)");
        let pages = Number(prompt("Enter the number of pages in the book"));
        while(isNaN(pages)){pages = Number(prompt("Enter the number of pages again: (Please enter a number only): "));}
        let isRead = prompt("Enter whether the book is read or not? (true/false)");
        if(isRead == "true" || isRead == 1){
            isRead = true;
        }
        else{
            isRead = false;
        }
        books.push({book_id: id, title: title, author: author, pages: pages, isRead: isRead});
        console.log("The books array after adding the book is: \n");
        console.log(books);
    }
    
}

// function remove_books(){
//     let id = prompt("Enter the ID of the book that you want to remove");
//     let filterBook = books.filter((book) => (book.book_id != id));
//     books = filterBook;
//     console.log("The books array after removing the book is: \n");
//     console.log(books);
// }

function suggestions(){
    let id = prompt("id entered by user: ");
    suggest(id);
}
    function suggest(id){
    const book = books.find((item) => (item.book_id == id) );
    let filteredbook = books.filter((item) => (item.id !=id && item.author == book.author));
    console.log(filteredbook);
    return filteredbook;
}
