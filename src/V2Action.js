"use strict";

export class V2Actions {
    static from(action, options = {}) {

        if(!Object.values(V2Effects).includes(action)) {
            //console.log("[ERROR] - The action used is unknown! ");
            return null;
        }
        return new V2Action(action, options);
    }



    static setDefaultOptions(effect) {
        switch (effect) {
            case V2Effects.PARALLAX:
                return {
                    direction: "top", // top, bottom, left, right
                    speed: 2, // -10...10, where 0 means the effect is not visible (the element is moving as the scrollbar)
                    scale: 1.0 // increase or decrease the element
                };
            default:
                return {
                    direction: "top", // top, bottom, left, right
                    speed: 2, // 0...10, where 0 means the effect is not visible (the element is moving as the scrollbar)
                    scale: 1.0 // increase or decrease the element
                };
        }
    }

}

 const V2Effects = {
    "PARALLAX": 'parallax'
};


 class V2Action {
    constructor(effect, options) {
        this.effect = effect;
        this.options = {
            ...V2Actions.setDefaultOptions(effect),
            ...options
        };
    }


    performTransformation(on, params = {}) {
        switch (this.effect) {
            case V2Effects.PARALLAX:
                this.performParallax(on, params.scrollDirection);
                break;
            default:
                //console.log("[V2 - Error] I have not found any action for this transformation.");
        }
    }

    performParallax(on, scrollDirection) {
        let newPosition = $(on).offset();
        if(this.options.direction.includes("top")) {
            let step = (scrollDirection.ver * this.options.speed);
            newPosition.top += step;
        }

        if(this.options.direction.includes("bottom")) {
            let step = (scrollDirection.ver * this.options.speed);
            newPosition.top -= step;
        }

        if(this.options.direction.includes("left")) {
            let step = (scrollDirection.hor * this.options.speed);
            newPosition.left += step;

        }

        if(this.options.direction.includes("right")) {
            let step = (scrollDirection.hor * this.options.speed);
            newPosition.left -= step;
        }


        $(on).offset(newPosition);

    }

}

