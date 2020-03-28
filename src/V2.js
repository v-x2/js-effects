import {V2Builder, V2Selector} from "./V2Builder";

export const V2 = function(selector) {
    return new V2Selector(V2Builder.select(selector));
};