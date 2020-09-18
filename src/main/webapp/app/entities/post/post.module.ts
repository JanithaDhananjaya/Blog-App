import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BlogAppSharedModule } from 'app/shared/shared.module';
import { PostComponent } from './post.component';
import { PostDetailComponent } from './post-detail.component';
import { postRoute } from './post.route';

@NgModule({
  imports: [BlogAppSharedModule, RouterModule.forChild(postRoute)],
  declarations: [PostComponent, PostDetailComponent],
})
export class BlogAppPostModule {}
