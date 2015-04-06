import {Component, Template, bootstrap} from 'angular2/angular2';
import {PersonCard} from 'person-card';

@Component({
  selector: 'main'
})
@Template({
  directives: [PersonCard],
  inline: `
    <div>
      <person-card></person-card>
    </div>
  `
})
class Main {
}

bootstrap(Main);
