import {Component, Template, bootstrap} from 'angular2/angular2';

@Component({
  selector: 'main'
})
@Template({
  inline: `hello world!`
})
class Main {
}

bootstrap(Main);
