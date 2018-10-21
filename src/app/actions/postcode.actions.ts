import { Action } from '@ngrx/store';

export enum PostCodeActionTypes {
    AddPostCode = '[PostCode] Add PostCode',
    RemovePostCode = '[PostCode] Remove PostCode'
}

export class AddPostCode implements Action {
    readonly type = PostCodeActionTypes.AddPostCode;
    constructor(public postcode: string){}
}

export class RemovePostCode implements Action {
    readonly type = PostCodeActionTypes.RemovePostCode;
    constructor(public postcode: string){}
}


export type PostCodeActions = AddPostCode | RemovePostCode;
