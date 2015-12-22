import {Home} from './home';
import {Login} from './login';
import {Route} from 'angular2/router';

export class AppRoutes2 {
  public routes = {
      Home: { path: '/', as: 'Home', component: Home },
      Login: { path: '/login' , as: 'Login', component: Login}    
  }
}

export const APP_ROUTES2 = [
    { path: '/', as: 'Home', component: Home },
  { path: '/login' , as: 'Login', component: Login}
]