import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {
  newAuthor = {name: ""};
  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  submitToCreate() {
    this.httpService.createNewAuthor(this.newAuthor)
    .subscribe(response => {
      console.log(response);
    });
    this.newAuthor.name = "";
  };

}
