const DOMNodeCollection = require('./dom_node_collection');


function $l(selector){
  let elements;
  if(typeof selector === "string"){
    elements_arr = document.querySelectorAll(selector);
    arr = Array.from(elements_arr);
    elements = new DOMNodeCollection(arr);
  } else if(selector instanceof HTMLElement){
    let html = [selector];
    elements = new DOMNodeCollection(html);
  }
  return elements;
}

window.$l = $l;

let $a = $l(".test");


window.$a = $a;
// $a = new DOMNodeCollection($div.test)
//
// $a.$els

// html_element.setAttribute("class", "democlass");
