import {Component, Template} from 'angular2/angular2';

@Component({
  selector: 'user-card',
  bind: {
    user: 'user',
    loading: 'loading'
  }
})
@Template({
  inline: `
    <div class="user-card">
      <div [hidden]="!loading">
        <content select="[loading]"></content>
      </div>
      <div [hidden]="loading">
        <div class="user-avatar-container">
          <img [src]="user.picture.medium" alt="User Avatar"/>
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
    </div>
  `
})
export class UserCard {
  constructor() {
  }
}
