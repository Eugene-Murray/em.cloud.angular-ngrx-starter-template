import { Injectable } from '@angular/core';

export const POSTCODES : string = "postcodes";

@Injectable()
export class CurrentPostCodeService {

  postcodes : string[] = [];

  constructor() {

  }

  addPostCode(postcode : string){
    this.postcodes.push(postcode);
  }

  removePostCode(postcode : string){
    let index = this.postcodes.indexOf(postcode);
    if (index !== -1){
      this.postcodes.splice(index, 1);
    }
  }

  getPostCodes() : string[]{
    return this.postcodes;
  }
}
