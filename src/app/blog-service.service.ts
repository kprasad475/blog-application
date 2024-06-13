import { Injectable, numberAttribute } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BlogPost } from './blogpost-model'; 
import { Post } from './post.model';


@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {
  public bashArray: any []=[];
  private apiUrl='https://run.mocky.io/v3/b2dc28fa-8398-4cf9-9e3c-30e9275c8edb';

  constructor(private http:HttpClient) { }

  getPosts():Observable<BlogPost[]>{
    return this.http.get<BlogPost[]>(this.apiUrl)
  }

  getPost(id:number):Observable<BlogPost>{
    console.log( this.http.get<BlogPost>(`${this.apiUrl}/${id}`))
    return this.http.get<BlogPost>(`${this.apiUrl}/${id}`);
    
  }

  getPosting(id:number){
    return this.http.get(`${this.apiUrl}/${id}`);

  }

  createPost(post:BlogPost):Observable<BlogPost>{
    return this.http.post<BlogPost>(this.apiUrl,post )
  }
  updatePost(post:BlogPost):Observable<BlogPost>{
    return this.http.put<BlogPost>(`${this.apiUrl}/${post.id}`, post);
  }
  deletePost(id:number):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
