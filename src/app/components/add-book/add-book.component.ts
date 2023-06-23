import { Component } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import {environment} from "../../../environments/environment";



@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  bookTitle: string;
  bookAuthor: string;

  constructor() {
    this.bookTitle = '';
    this.bookAuthor = '';
    firebase.initializeApp(environment.firebase);
  }
  addBook(): void {
    const database = firebase.database();
    const booksRef = database.ref('books');

    const newBookRef = booksRef.push();
    newBookRef.set({
      title: this.bookTitle,
      author: this.bookAuthor
    })
      .then(() => {
        console.log('Book added successfully');
        this.resetForm();
      })
      .catch((error) => {
        console.error('Error adding book:', error);
      });
  }

  resetForm(): void {
    this.bookTitle = '';
    this.bookAuthor = '';
  }
}
