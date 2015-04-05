import {Component, Template, bootstrap} from 'angular2/angular2';
import {PersonCard} from 'person-card';
import {RandomUser} from 'RandomUser';

@Component({
  selector: 'main',
  services: [
    RandomUser
  ]
})
@Template({
  directives: [PersonCard],
  inline: `
    <div>
      <div class="new-user-button">
        <button class="ru-button --primary" autofocus (click)="getNewUser()">
          <i class="fa fa-user"></i>
          Get New User
        </button>
      </div>
      <person-card [person]="user" [loading]="loadingUser"></person-card>
    </div>
  `
})
class Main {
  constructor(randomUser:RandomUser) {
    this.getRandomUser = randomUser.getUser;
  }

  getNewUser() {
    this.loadingUser = true;
    this.getRandomUser().then(user => {
      this.user = user;
      this.loadingUser = false;
    });
  }
}

bootstrap(Main);
