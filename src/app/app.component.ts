import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GoogleBooksSerice } from './book-list/books.serice';
import { BooksActions, BooksApiActions } from './state/books.actions';
import { selectBookCollection, selectBooks } from './state/books.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'NgRxBooklist';
  books$ = this.store.select(selectBooks);
  bookCollection$ = this.store.select(selectBookCollection);

  constructor(private booksService: GoogleBooksSerice, private store: Store) {}

  onAdd(bookId: string) {
    this.store.dispatch(BooksActions.addBook({ bookId }));
  }

  onRemove(bookId: string) {
    this.store.dispatch(BooksActions.removeBook({ bookId }));
  }

  ngOnInit(): void {
    this.booksService
      .getBooks()
      .subscribe((books) =>
        this.store.dispatch(BooksApiActions.retrievedBookList({ books }))
      );
  }
}
