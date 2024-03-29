import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog.component';

const routes: Routes = [
  {
    path: ':slug',
    component: BlogComponent,
  },
  {
    path: '**',
    component: BlogComponent,
  },
  { path: ":postId", redirectTo: "/404"},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
