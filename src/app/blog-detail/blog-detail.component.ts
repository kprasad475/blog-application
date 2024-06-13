import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogServiceService } from '../blog-service.service';
import { BlogPost } from '../blogpost-model';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.scss'
})
export class BlogDetailComponent implements OnInit {
post:BlogPost| null = null;
tempArray:any [] = [];

constructor(
  private route:ActivatedRoute,
  private service:BlogServiceService
){

}
ngOnInit(): void {
  const id = +this.route.snapshot.paramMap.get('id')!;
  console.log(id)
  this.service.getPost(id).subscribe(post => {
    this.post = post;
    console.log(this.post) 
 
  });  
}

}
