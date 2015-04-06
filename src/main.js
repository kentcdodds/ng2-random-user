import {Component, Template, bootstrap} from 'angular2/angular2';
import {UserCard} from 'user-card';

@Component({
  selector: 'main'
})
@Template({
  directives: [UserCard],
  inline: `
    <div>
      <user-card></user-card>
    </div>
  `
})
class Main {
}

bootstrap(Main);
