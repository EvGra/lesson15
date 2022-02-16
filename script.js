'use strict'

const input = document.querySelector('.input');
const btn = document.querySelector('.button');

const DomElement = function(selector, height, width, bg, fontSize) {

  this.selector = selector

  this.height = height
  this.width = width
  this.bg = bg
  this.fontSize = fontSize



  this.newAl = function() {
    let block;
    if(this.selector[0] == '.'){
      block = document.createElement('div');
      block.classList.add(this.selector.slice(1))
    } else if (this.selector[0] == '#') {
      block = document.createElement('p');
      block.id = this.selector.slice(1)
    }

    block.textContent = input.value;

    block.style.cssText=`background-color: ${this.bg};
    width: ${this.width}px;
    height: ${this.height}px;
    font-size: ${this.fontSize}px;`;

    document.body.append(block);
  }
}

btn.addEventListener('click',  () => {
    const elementTwo = new DomElement('#block', '100', '100', 'red', '20');
    elementTwo.newAl()
  input.value = ''
})