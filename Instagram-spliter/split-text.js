function splitText (text) { // название хоошее +
    const FIRST_BLOCK_SIZE = Number(document.getElementById('first-block-size').value);
    const BLOCK_SIZE = Number(document.getElementById('block-size').value);


    let paragraphs = text.split('.');
    paragraphs.pop();

    for (let el of paragraphs) {
        // заменить за for без i
        el = el + ".";
    }

    let blocks = [];
    let block1 = '';
    let block2 = '';

    const parStart = paragraphs[0];


    while ((block1 + parStart).length <= FIRST_BLOCK_SIZE) {
        block1 += paragraphs.shift();
    }
    blocks.push(block1);


    while (paragraphs.length > 0) {
        while ((block2 + parStart).length <= BLOCK_SIZE) {
            block2 += paragraphs.shift();
        }
        blocks.push(block2);
        block2 = '';
    }

    return blocks;
}

function init () {
    const blocks = splitText(document.getElementById('full-text').value);
    const visibleText = blocks[0];
    const alwaysVisibleDiv = document.getElementById('always-visible');
    alwaysVisibleDiv.innerText = visibleText;
    const comments = document.getElementById('comments');
    let html = '';
    for (let i = 1; i < blocks.length; i++) {
        html += `<div class="comm">${blocks[i]}</div>`
    }
    comments.innerHTML = html;
    document.getElementById("info-button").onclick = function(event) {
        event.stopPropagation();
        showInfo();
    }
}

function getStyle (id, name) {
    const element = document.getElementById(id);
    return element.currentStyle
        ? element.currentStyle[name]
        : window.getComputedStyle
            ? window.getComputedStyle(element, null).getPropertyValue(name)
            : null;
}

function showComments () {
    const comments = document.getElementById('comments');
    const OPEN_COMMENTS = document.getElementById('Btn');
    const display = getStyle('comments', 'display');
    comments.style.display = 'block';
    OPEN_COMMENTS.style.display = 'none';
    document.getElementById("Btn").innerText = 'Скрыть комментарии';

}

function showInfo(event){
    console.log(event)
        document.getElementById('shadow').style.display = 'block';
        document.getElementById('info-dialog').style.display = 'block';
}

function hideInfo(){
    document.getElementById('shadow').style.display = 'none';
    document.getElementById('info-dialog').style.display = 'none';
}

