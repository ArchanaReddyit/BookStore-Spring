import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/model/Book';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  books: Array<Book>;
  action: any;
  selectedBook: Book;

  constructor(
    private httpClientService: HttpClientService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.refreshData();
  }
  refreshData() {
    this.httpClientService
      .getBooks()
      .subscribe((Response) => this.handleSuccessfulResponse(Response));

    this.activatedRoute.queryParams.subscribe((params) => {
      this.action = params['action'];
    });
  }

  handleSuccessfulResponse(Response) {
    this.books = Response;
  }

  addBook() {
    this.selectedBook = new Book();
    this.router.navigate(['admin', 'books'], {
      queryParams: { action: 'add' },
    });
  }
}
