import { Component, OnInit } from '@angular/core';
import { BlogServiceService } from '../blog-service.service';
import { BlogPost } from '../blogpost-model';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss'
})
export class BlogListComponent implements OnInit{
 posts:BlogPost [] =  [];
  tempArray : any [] =[];
 loading: boolean = false;
 error: string | null = null;

 constructor(private service:BlogServiceService){}

//  ngOnInit(): void {
//   this.loading = true; // Indicate loading state at the start

//   this.service.getPosts().subscribe({
//     next: (posts) => {
//       this.posts = posts;
//       this.tempArray.push(posts)
//       console.log(posts)
      
//       this.loading = false; // Loading finished
//     },
//     error: (err) => {
//       console.error('Error fetching posts:', err);
//       this.error = 'Failed to load posts. Please try again later.';
//       this.loading = false; // Loading finished
//     }
//   });
// }
ngOnInit(): void {
  // Fetch data from the real API
  this.service.getPosts().subscribe(
    (data: any) => {
      if (data && data.posts && Array.isArray(data.posts)) {
        this.posts = data.posts.map((post: any) => ({
          id: post.id,
          title: post.title,
          content: post.content,
          author: post.author,
          date: new Date(post.date) // Convert string date to Date object
        }));
      } else {
        console.error("API response data structure is not as expected");
      }
    },
    (error) => {
      console.error("Error fetching data from API:", error);
    }
  );
}

}
