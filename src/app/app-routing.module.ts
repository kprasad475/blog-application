import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';

const routes: Routes = [
  { path: 'post/:id', component: BlogDetailComponent },
  { path: '', component: BlogListComponent },  
  { path: 'create', component: BlogCreateComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes ),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
