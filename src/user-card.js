import {Component, Template} from 'angular2/angular2';

@Component({
  selector: 'user-card',
  bind: {
    user: 'user'
  }
})
@Template({
  inline: `
    <div class="user-card">
      <div class="user-avatar-container">
        <img [src]="user.picture.medium" />
      </div>
      <div class="user-properties">
        <div>
          <strong>Name:</strong> {{user.name.first}} {{user.name.last}}
        </div>
        <div>
          <strong>Username:</strong> {{user.username}}
        </div>
        <div>
          <strong>Email:</strong> {{user.email}}
        </div>
      </div>
    </div>
  `
})
export class UserCard {
}
