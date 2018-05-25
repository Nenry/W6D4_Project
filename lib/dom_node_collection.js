class DOMNodeCollection{
  constructor($els){
    this.$els = $els;
  }
  html(string){
    if(string == null){
      return this.$els[0].innerHTML;
    } else {
      this.$els.forEach( (el) => el.innerHTML = string );
      return this.$els[0].innerHTML;
    }
  }
  empty() {
      this.html("");
  }

  append(arg) {
    this.$els.forEach((htmlel) => {
      htmlel.innerHTML += arg;
    });
    return this.$els[0].innerHTML;
  }

  attr(key, value){
    if(value == null){
      return this.$els[0].getAttribute(key);
    } else {
        this.$els.forEach((html_el) =>{
          html_el.setAttribute(key, value);
        });
        return this.$els[0].getAttribute(key);
      }
  }

  addClass(classname) {
    this.$els.forEach((html_el) => {
      html_el.className = classname;
    });
    return this.$els[0].className;
  }

  removeClass() {
    this.$els.forEach((html_el) => {
      html_el.className = "";
    });
    return this.$els[0].className;
  }

  children(){
    let children = [];

    function child(arr){
      if (arr.length === 1) {
        children.push(arr[0]);
      }
    }
  }

}





module.exports = DOMNodeCollection;
