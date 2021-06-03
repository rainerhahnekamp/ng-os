import { Observable } from 'rxjs';
import { User } from './user';

export interface UserService {
  user$: Observable<User>
}
