export class Book {
    constructor(title, author, description, pages, currentPage=range(1, pages), read=false) {
        this.title = title;
        this.author = author;
        this.description = description;
        this.pages = Number(pages);
        this.currentPage = currentPage;
        this.read = read;
    }
    readBook(page) {
        if (page < 1 || page > this.pages) {
            return 0;
        } else if (page >= 1 && page < this.pages) {
            this.currentPage = page;
            return 1;
        } else if (page === this.pages) {
            this.currentPage = page;
            this.read = true;
            return 1;
        }
    }
}

let bookOne = new Book('On Writing Well', 'William Zinser', "a writer's guide to excellently written prose", 420, 211, true);
let bookTwo = new Book('The Earth is Flat', 'Walter Isaacson', "what everyone needs in the new flat world", 480, 324, true);
let bookThree = new Book("Ry's Git Tutorial", 'Ryan Hodson', "your gateway into version control", 220, 0, false);

export const books = [bookOne, bookTwo, bookThree];
