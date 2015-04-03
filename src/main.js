import {Component, Template, bootstrap, If} from 'angular2/angular2';
import {PersonCard} from 'person-card';
import {RandomUser} from 'RandomUser';
import {Alert} from 'alert';

@Component({
  selector: 'main',
  services: [RandomUser]
})
@Template({
  inline: `
    <div class="new-user-button">
      <button class="ru-button --primary" autofocus (click)="getRandomUser()">Get New User</button>
    </div>
    <person-card [user]="user"></person-card>
  `,
  directives: [PersonCard]
})
export class App {
  constructor(randomUser:RandomUser) {
    this.getUser = randomUser.getUser;
  }

  getRandomUser() {
    this.getUser().then(user => this.user = user);
  }
}

bootstrap(App);
