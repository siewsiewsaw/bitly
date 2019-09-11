import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css'],
})
export class FrontpageComponent implements OnInit {
  SERVER_URL = "http://localhost:3000/getlink";
  urlForm: FormGroup;  
  values = ''; 
  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) { }
       
  ngOnInit() {
    this.urlForm = this.formBuilder.group({
      longURL: ['']
    });
  }
  
  inputText(event) {
    if (event.target.value.length > 0) {
      this.values += event.target.value;
    }
    console.log(this.values)
  
  }

  onSubmit() {
   const formData = new FormData();
   formData.append('url', this.values);

   this.httpClient.post<any>("http://localhost:4200/frontpage", formData).subscribe(
    (res) => console.log(res),
    (err) => console.log(err)
  );
   return this.values
  }
   
}
