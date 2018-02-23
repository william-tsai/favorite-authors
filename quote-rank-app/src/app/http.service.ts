import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  getAllAuthors() {
    return this.http.get("/api/authors");
  };

  createNewAuthor(newAuthor) {
    return this.http.post("/api/authors", newAuthor);
  };
}
