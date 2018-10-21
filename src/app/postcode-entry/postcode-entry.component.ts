import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'postcode-entry',
  templateUrl: './postcode-entry.component.html'
})
export class PostCodeEntryComponent {

    @Output()
    postCodeAdded = new EventEmitter<string>();


}
