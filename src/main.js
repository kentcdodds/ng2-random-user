import {Component, Template, bootstrap} from 'angular2/angular2';
import {UserCard} from 'user-card';


@Component({
  selector: 'main'
})
@Template({
  directives: [UserCard],
  inline: `
    <user-card></user-card>
  `
})
class Main {
}

bootstrap(Main);