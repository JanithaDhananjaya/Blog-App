import { Moment } from 'moment';
import { IPost } from 'app/shared/model/post.model';

export interface IComment {
  id?: number;
  text?: string;
  createdDate?: Moment;
  post?: IPost;
}

export class Comment implements IComment {
  constructor(public id?: number, public text?: string, public createdDate?: Moment, public post?: IPost) {}
}
