import { Injectable } from '@angular/core';
import { Cookie } from 'ng2-cookies/ng2-cookies';
@Injectable()
export class AuthCookiesService {

  constructor() { }
  getToken(): string {
    return Cookie.get('id_token');
}

setToken(value: string){
    Cookie.set('id_token', value, 0.0138889);
}

deleteToken() {
    Cookie.delete('id_token');
}  
getTokenRefrech(): string {
  return Cookie.get('id_token_refrech');
}

setRefrech(value: string): void {
  Cookie.set('id_token_refrech', value, 0.0138889);
}

deleteRefrech() {
  Cookie.delete('id_token_refrech');
}  
}
