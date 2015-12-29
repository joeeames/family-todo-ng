import {bootstrap}    from 'angular2/platform/browser'
import {TodoService} from './todoService';
import {IdentityService} from './identityService';
import {ROUTER_PROVIDERS} from 'angular2/router';

import {App} from './app'

bootstrap(App, [ROUTER_PROVIDERS, TodoService, IdentityService]);