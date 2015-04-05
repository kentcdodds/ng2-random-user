import {Component, Template, bootstrap} from 'angular2/angular2';
import {PersonCard} from 'person-card';

@Component({
  selector: 'main'
})
@Template({
  directives: [PersonCard],
  inline: `
    <div>
      <person-card [person]="person"></person-card>
    </div>
  `
})
class Main {
  constructor() {
    this.person = {
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
