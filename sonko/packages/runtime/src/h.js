import { withoutNulls } from './utils/arrays'

export const DOM_TYPES = {
    TEXT: "text",
    ELEMENT:  "element",
    FRAGMENT: "fragment",
};

function mapTextnodes(children){
    return children.map((child) =>
        typeof child === 'string' ? hString(child) : child
    )
}



export function h(tag, props = {}, children = []){
    return{
        tag,
        props,
        children: mapTextnodes(withoutNulls(children)),
        type: DOM_TYPES.ELEMENT,
    }
}

export function hString(str){
    return {type: DOM_TYPES.TEXT, value: str };
}

export function hFragment(vNodes){
    return {
        type: DOM_TYPES.FRAGMENT,
        children: mapTextnodes(withoutNulls(vNodes)),
    }
}

