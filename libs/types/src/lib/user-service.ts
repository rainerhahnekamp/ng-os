import { Observable } from 'rxjs';
import { User } from './user';

export abstract class UserService {
  abstract user$: Observable<User>;
}
