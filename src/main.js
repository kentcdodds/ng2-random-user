import {Component, Template, bootstrap} from 'angular2/angular2';

@Component({
  selector: 'main'
})
@Template({
  inline: `
    <div>Hello Philly ETE</div>
  `
})
class Main {
}

bootstrap(Main);