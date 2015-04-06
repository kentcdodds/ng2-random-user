import {Component, Template, bootstrap} from 'angular2/angular2';

@Component({
  selector: 'main'
})
@Template({
  inline: `
    <div>
      Hello World!
    </div>
  `
})
class Main {
}

bootstrap(Main);
