import {Component, Template} from 'angular2/angular2';

@Component({
  selector: 'person-card'
})
@Template({
  inline: `
    <div class="person-card">
      <div class="person-avatar-container">
        <img src="fred.png" alt="Fred Mertz Profile"/>
      </div>
      <div class="person-properties">
        <div>
          <strong>Name:</strong> Fred Mertz
        </div>
        <div>
          <strong>Username:</strong> TheFredMertz
        </div>
        <div>
          <strong>Email:</strong> freddie@aol.com
        </div>
      </div>
    </div>
  `
})
export class PersonCard {
}
