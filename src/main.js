import {Component, Template, bootstrap} from 'angular2/angular2';

@Component({
  selector: 'main'
})
@Template({
  inline: `
    <div>{{greeting}}</div>
  `
})
class Main {
  constructor() {
    this.greeting = 'Hello Philly ETE! You rock!';
  }
}

bootstrap(Main);
