import {Injectable} from '@angular/core';
import {Network} from '@ngx-pwa/offline';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  online;

  constructor(protected network: Network) {
    this.online = this.network.online;
  }

  isOnline() {
    return this.online;
  }
}
