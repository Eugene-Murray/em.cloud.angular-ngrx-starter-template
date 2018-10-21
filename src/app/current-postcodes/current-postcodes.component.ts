import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.css']
})
export class CurrentPostCodesComponent {

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
