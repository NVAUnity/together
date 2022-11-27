function $(a, b, c) {
    if (c) return a.querySelectorAll(b);
    else return a.querySelector(b);
}
const doc = document;
const aboutTitle = $(doc, '.part__title', true);
const container = $(doc, '.container');
aboutTitle.forEach(function(item) {
    if (document.documentElement.clientWidth > 1280) {
        item.style.paddingLeft = String(((document.documentElement.clientWidth - container.clientWidth) / 2 + 80) + 'px');
        $(doc, '.about__img--1').classList.remove('none');
    }
    else {
        item.style.paddingLeft = String(((document.documentElement.clientWidth - container.clientWidth) / 2 + 40) + 'px');
        $(doc, '.about__img--2').classList.remove('none');
    }
})
const programmContentItem = $(doc, '.programm__content--item', true);
programmContentItem.forEach(function(item) {
    item.addEventListener('click', function() {
        this.classList.toggle('active');
    })
})

let ourcomandRowItemText = $(doc, '.ourcomand__row--item-text', true);
ourcomandRowItemText.forEach(function(item) {
    item.addEventListener('mouseover', function() {
        this.classList.add('hover');
        const attribute = this.getAttribute('num');
        let comandText = $(doc, '.comand__text', true);
        comandText.forEach(function(i) {
            if (i.getAttribute('num') == attribute) i.classList.add('hover');
        })
    })
    item.addEventListener('mouseout', function() {
        this.classList.remove('hover');
        const attribute = this.getAttribute('num');
        let comandText = $(doc, '.comand__text', true);
        comandText.forEach(function(i) {
            if (i.getAttribute('num') == attribute) i.classList.remove('hover');
        })
    })
})
let comandText = $(doc, '.comand__text', true);
comandText.forEach(function(item) {
    item.addEventListener('mouseover', function() {
        this.classList.add('hover');
        const attribute = this.getAttribute('num');
        let ourcomandRowItemText = $(doc, '.ourcomand__row--item-text', true);
        ourcomandRowItemText.forEach(function(i) {
            if (i.getAttribute('num') == attribute) i.classList.add('hover');
        })
    })
    item.addEventListener('mouseout', function() {
        this.classList.remove('hover');
        const attribute = this.getAttribute('num');
        let ourcomandRowItemText = $(doc, '.ourcomand__row--item-text', true);
        ourcomandRowItemText.forEach(function(i) {
            if (i.getAttribute('num') == attribute) i.classList.remove('hover');
        })
    })
})