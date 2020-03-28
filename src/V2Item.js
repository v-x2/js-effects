"use strict";

export class V2Item {
    constructor(selector, action) {
        this.selector = selector;
        this.action = action;
    }

    performTransformation(params) {
        this.action.performTransformation(this.selector, params);
    }

}



