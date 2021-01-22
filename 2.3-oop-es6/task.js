class PrintEditionItem {

  constructor(name,releaseDate,pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  };

  fix() {
    let newState = this.state * 1.5;
    this.state = newState;
  };

  set state(newState) {
    if (newState == 0) {
      this._state = 0;
    }
    else if (newState >= 100) {
      this._state = 100;
    }
    else {
      this._state = newState;
    }
  };
  get state() {
    return this._state;
  };
};

class Magazine extends PrintEditionItem {
 constructor(name,releaseDate,pagesCount) {
   super(name,releaseDate,pagesCount);
   this.type = "magazine";
 };
};

class Book extends PrintEditionItem {
  constructor(author,name,releaseDate,pagesCount) {
    super(name,releaseDate,pagesCount);
    this.type = "book";
    this.author = author;
  };
};

class NovelBook extends Book {
  constructor(author,name,releaseDate,pagesCount) {
    super(author,name,releaseDate,pagesCount);
    this.type = "novel";
  };
};

class FantasticBook extends Book {
  constructor(author,name,releaseDate,pagesCount) {
    super(author,name,releaseDate,pagesCount);
    this.type = "fantastic";
  };
};

class DetectiveBook extends Book {
  constructor(author,name,releaseDate,pagesCount) {
    super(author,name,releaseDate,pagesCount);
    this.type = "detective";
  };
};

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  };
  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    };
  };
  findBookBy(type, value) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i][type] == value) {
        return this.books[i];
      }; 
    };
    return null;
  };
  giveBookByName(bookName) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].name == bookName) {
        let findedBook = this.books[i];
        this.books.splice(i,1);
        return findedBook;
      }; 
    };
    return null;
  };
};

class StudentLog {
  constructor(studentName) {
    this.name = studentName;
  };

  getName() {
    return this.name;
  };

  addGrade(grade, subject) {
    if (!this[subject]) {
      this[subject] = [];
    };
    if (grade <= 5 && grade >= 1) {
      this[subject].push(grade);
      return this[subject].length;
    }
    else {
      alert(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5`);
      return this[subject].length;
    };
  };

  getAverageBySubject(subject) {
    if (!this[subject]) {
      return 0;
    }
    else {
      let total = 0;
      for (let i = 0; i < this[subject].length; i++) {
        total = total + this[subject][i];
      };
      return total/this[subject].length;
    };
  };

  getTotalAverage() {
    let totalAmount = 0;
    let subjectAmount = 0;
    for (let prop in this) {
      if (prop != 'name') {
      totalAmount += this.getAverageBySubject(prop);
      subjectAmount++;};
  };
  return totalAmount/subjectAmount;
};
};

