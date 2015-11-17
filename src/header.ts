import {Component, View} from 'angular2/angular2';

@Component({
  selector: 'header',
})
@View({
  template: `
    <header>This is the Header</header>
  `,
  directives: []

})
export class Header {
  constructor() {
  }
}

