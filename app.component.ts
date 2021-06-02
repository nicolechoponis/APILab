import { Component, OnInit } from '@angular/core';
import { APIService, Children } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'API-Lab';
  post: Children[] = [];
  constructor(public api: APIService){}

ngOnInit(): void {
  this.api.getBlog().subscribe((data)=>{
    this.post = data.data.children;
  
  })
}

}
