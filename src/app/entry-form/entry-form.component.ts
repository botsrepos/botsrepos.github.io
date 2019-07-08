import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import {validate} from 'codelyzer/walkerFactory/walkerFn';
declare var $: any;

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

    // Get the values of the form fields as an object.
    let entry = f.value;
    let msg = 'The entry with title \"' + entry.title + '\" has been submitted successfully and will be reviewed shortly.' ;

    // Prepare and show the success message
    $('#successMsg').text(msg);
    $('#successMsg').show();

    // Send the post request with the entry (form) data.
    this.http.post(this.url + this.post, entry).subscribe(response => {
      console.log(response);
    });

    // Reset the form.
    f.reset();
  }

}


