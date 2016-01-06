import {IDENTITIES} from './identities';

// export const IDENTITIES = {
//   Jen: {name: 'Jen', id: 1},
//   Joe: {name: 'Joe', id: 2}
// }


export class IdentityService {
  public currentIdentity:string ;

  setIdentity(userName) {
    this.currentIdentity = IDENTITIES[userName];
    this.name = this.currentIdentity.name;
  }

  isLoggedIn() {
    return !!this.currentIdentity;
  }
  
  logout() {
      this.currentIdentity = null;
      this.name = null;
  }

}