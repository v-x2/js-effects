import {V2Builder, V2Selector} from "./V2Builder";

export default function V2(selector) {
    return new V2Selector(V2Builder.select(selector));
}

