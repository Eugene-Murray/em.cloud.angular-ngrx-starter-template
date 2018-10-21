import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'old-postcodes',
  templateUrl: './old-conditions.component.html',
  styleUrls: ['./old-conditions.component.css']
})
export class OldPostCodesComponent {

    @Input()
    postcodes: Array<String>;
    @Input()
    currentConditions: Map<string, any>;
    @Output()
    postcodeRemoved = new EventEmitter<string>();

    constructor(){ }

    getConditions(postcode: string) {
        return this.currentConditions.get(postcode);
    }
}
