import {Component, Template, bootstrap} from 'angular2/angular2';
import {UserCard} from 'user-card';

@Component({
  selector: 'main'
})
@Template({
  directives: [UserCard],
  inline: `
    <div>
      <user-card [user]="user"></user-card>
    </div>
  `
})
class Main {
  constructor() {
    this.user = {
      name: {
        first: 'Fred',
        last: 'Mertz'
      },
      username: 'TheFredMertz',
      email: 'freddie@aol.com',
      picture: {
        medium: 'fred.png'
      }
    };
  }
}

bootstrap(Main);
