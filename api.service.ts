import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Post {
  kind:string;
  data:Data;
}

export interface Data {
  children:Children[];
}

export interface Children {
  data:Cdata;
}

interface Cdata {
  title:string;
  thumbnail:string;
  permalink:string;
}


@Injectable({
  providedIn: 'root'
})
export class APIService {
  apiURL = "https://www.reddit.com/r/aww/.json";
  constructor(public client: HttpClient) {}
  
  getBlog(){
    return this.client.get<Post>(this.apiURL);
  }
  
}
