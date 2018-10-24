import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  isOnline() {
    return window.navigator.onLine;
  }
}
