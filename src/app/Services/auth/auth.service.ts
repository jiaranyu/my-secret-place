import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subscription} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private status$ = new BehaviorSubject(false);

  constructor() {
  }

  public authenticate(username, password): boolean {
    // this.router.navigate(['welcome', this.username]);
    if (username === 'jiarany' && password === '123456') {
      sessionStorage.setItem('authUser', username);
      this.status$.next(true);
      return true;
    } else {
      return false;
    }
  }

  public isUserLoggedIn(): boolean {
    const user = sessionStorage.getItem('authUser');
    return !(user == null);
  }

  public logout(): void {
    sessionStorage.removeItem('authUser');
    this.status$.next(false);
  }

  get status(): Observable<boolean> {
    return this.status$.asObservable();
  }
}
