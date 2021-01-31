//############## библиоткчка ############################
function getEl(id) {
    return document.getElementById(id);
}

function showHideEl(idOrEl, isShow) {
    if (typeof idOrEl === "string") {
        idOrEl = getEl(idOrEl);
    }
    if (typeof idOrEl === "object") {
        idOrEl.style.display = isShow ? 'block' : 'none';
    }
}

function hideEl(idOrEl) {
    showHideEl(idOrEl, false);
}

function showEl(idOrEl) {
    showHideEl(idOrEl, true);
}

function getStyle(id, styleName) {
    const element = getEl(id);
    return element.currentStyle
        ? element.currentStyle[styleName]
        : window.getComputedStyle
            ? window.getComputedStyle(element, null).getPropertyValue(styleName)
            : null;
}
// ##############################################################

function splitText(text) { // название хоошее +
    const FIRST_BLOCK_SIZE = Number(getEl('first-block-size').value);
    const BLOCK_SIZE = Number(getEl('block-size').value);


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

function init() {
    const blocks = splitText(getEl('full-text').value);
    const visibleText = blocks[0];
    const alwaysVisibleDiv = getEl('always-visible');
    alwaysVisibleDiv.innerText = visibleText;
    const comments = getEl('comments');
    let html = '';
    for (let i = 1; i < blocks.length; i++) {
        html += `<div class="comm">${blocks[i]}</div>`
    }
    comments.innerHTML = html;
    getEl("info-button").onclick = function (event) {
        event.stopPropagation();
        showInfo();
    }
}

function showComments() {
    showEl('comments');
    const btnEl = getEl('Btn');
    hideEl(btnEl);
    btnEl.innerText = 'Скрыть комментарии';
}

function showInfo(event) {
    showEl('shadow');
    showEl('info-dialog');
}

function hideInfo() {
    hideEl('shadow');
    hideEl('info-dialog');
}

