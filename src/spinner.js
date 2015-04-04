import {Component, Template} from 'angular2/angular2';

@Component({
  selector: 'spinner'
})
@Template({
  inline: `<i class="fa fa-refresh fa-2x fa-spin"></i>`
})
export class Spinner {
}
