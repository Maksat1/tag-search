let input = document.querySelector('#inp');
let answer = document.querySelector('#text');
let button = document.querySelector('#btn');

input.addEventListener('keyup', function(e) {
    if (e.keyCode === 13) {
        for (let q in tags) {
        answer.textContent = tags[input.value]
    }
    }
    
})

let tags = {
    a: 'link. Defines a hyperlink',
    aside: 'Defines content aside from the page content',
    b: 'Defines bold text',
    body: 'Defines the document body',
    br: 'Defines a single line break',
    button: 'Defines a clickable button',
    canvas: 'Used to draw graphics, on the fly, via scripting (usually JS)'
}