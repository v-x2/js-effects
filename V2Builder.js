"use strict";
import $ from 'jquery'
import {V2Actions} from "./V2Action";
import {V2Item} from "./V2Item";

 class V2Builder {
    static v2Elements = [];
    static init = false;
    static lastScrollTop = 0;
    static lastScrollLeft = 0;

    static select(selector) {
        if($(selector).get() === null) {
            console.log("The selector [" + selector+"] is not valid");
        }

        return selector;
    }

    static add(selector, action, options = {}) {
        const act = V2Actions.from(action, options);

        this.v2Elements.push(new V2Item(selector, act));

        if(!this.init) {
            this.initLibrary();
        }
    }
    static initLibrary() {
        $(window).on("scroll", this.performScrollingTransformations.bind(this));
        this.init = true;
        console.log("[V2] Init completed.");
    }

    static performScrollingTransformations() {
        let topDirection = this.lastScrollTop - window.pageYOffset;
        let leftDirection = this.lastScrollLeft - window.pageXOffset;
        let scrollDirection = {ver: topDirection, hor: leftDirection};

        this.lastScrollTop = window.pageYOffset;
        this.lastScrollLeft = window.pageXOffset;

        let params = {
            scrollDirection: scrollDirection
        };
        this.v2Elements.forEach(function(element) {
            element.performTransformation(params);
        });
    }

}

 class V2Selector {
    constructor(selector) {
        this.selector = selector;
    }

    add(action, options = {}) {
        V2Builder.add(this.selector, action, options);
    }


}

export const V2 = function(selector) {
    return new V2Selector(V2Builder.select(selector));
};



