import { Component } from '@angular/core';
import { BlogServiceService } from '../blog-service.service';
import { BlogPost } from '../blogpost-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrl: './blog-create.component.scss'
})
export class BlogCreateComponent {
  post: BlogPost = {
    id: 0,
    title: '',
    content: '',
    author: '',
    date: new Date()
  };

  constructor(
    private blogService:BlogServiceService,
    private router: Router
  ) { }

  createPost(): void {
    this.blogService.createPost(this.post).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
