import {Component, Template, bootstrap} from 'angular2/angular2';

@Component({
  selector: 'main'
})
@Template({
  inline: `
    <div>
      <div class="person-card">
        <div class="person-avatar-container">
          <img src="fred.png"/>
        </div>
        <div class="person-properties">
          <div>
            <strong>Name: </strong> Fred Mertz
          </div>
          <div>
            <strong>Username: </strong> TheFredMertz
          </div>
          <div>
            <strong>Email: </strong> freddie@aol.com
          </div>
        </div>
      </div>
    </div>
  `
})
class Main {
}

bootstrap(Main);
