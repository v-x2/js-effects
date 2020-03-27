"use strict";

export class V2Item {
    constructor(selector, action) {
        this.selector = selector;
        this.action = action;
    }


    /*
    It gets the size (w and h) of the element
     */
    width() {
        return $(this.selector).width();
    }

    height() {
        return $(this.selector).height();
    }

    getElementPositionTop() {
        return $(this.selector).offset().top;
    }
    getElementPositionLeft() {
        return $(this.selector).offset().left;
    }

    getCurrentScrollOffsetX() {
        return window.pageXOffset;
    }

    getCurrentScrollOffsetY() {
        return window.pageYOffset;
    }

    getDebugInfo() {
        console.log(
            'elementWidth=' + this.width()
            + " elementHeight=" + this.height()
            + " windowOffsetX=" + this.getCurrentScrollOffsetX()
            + " windowOffsetY=" + this.getCurrentScrollOffsetY()
        );
        console.log("Element Offset - top=" + this.getElementPositionTop()
        + " left=" +this.getElementPositionLeft());
    }


    performTransformation(params) {
        this.action.performTransformation(this.selector, params);
    }


}



