import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { IPost, Post } from 'app/shared/model/post.model';
import { PostService } from './post.service';
import { PostComponent } from './post.component';
import { PostDetailComponent } from './post-detail.component';

@Injectable({ providedIn: 'root' })
export class PostResolve implements Resolve<IPost> {
  constructor(private service: PostService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IPost> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((post: HttpResponse<Post>) => {
          if (post.body) {
            return of(post.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new Post());
  }
}

export const postRoute: Routes = [
  {
    path: '',
    component: PostComponent,
    data: {
      authorities: [Authority.USER],
      defaultSort: 'id,asc',
      pageTitle: 'Posts',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: PostDetailComponent,
    resolve: {
      post: PostResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'Posts',
    },
    canActivate: [UserRouteAccessService],
  },
];
