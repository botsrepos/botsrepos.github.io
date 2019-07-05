import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface FormEntry {
  contactName: string;
  contactEmail: string;
  authors: string;
  title: string;
  year: string;
  journal: string;
  paperLink: string;
  dataLink: string;
  abstract: string;
}


@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css']
})
export class EntryFormComponent implements OnInit {

  entry: FormEntry ;
  private url = 'https://63f4ba0c.ngrok.io/';
  private; post = 'test-page';

  constructor(private http: HttpClient) {}

  ngOnInit() {
  }

  submit(f) {
    console.log('entry object ');
    console.log(this.entry);
    this.http.post(this.url + this.post, this.entry).subscribe(response => {
      console.log(response);
    });
  }
}


