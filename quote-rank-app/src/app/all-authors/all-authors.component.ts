import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-all-authors',
  templateUrl: './all-authors.component.html',
  styleUrls: ['./all-authors.component.css']
})
export class AllAuthorsComponent implements OnInit {
  authors: any;
  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.displayAllAuthors();
  }

  displayAllAuthors() {
    this.httpService.getAllAuthors()
    .subscribe((response: any) => {
      this.authors = response;
      console.log("Authors:" , this.authors);
    });
  }
  
  // deleteOnComp() {

  // }

}
