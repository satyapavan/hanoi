const towers = document.querySelectorAll('.tower');
let draggedDisk = null;

function createDisks() {
    const tower1 = document.getElementById('tower1');
    const diskCount = 5;
    for (let itr = diskCount; itr > 0; itr--) {
        const disk = document.createElement('div')
        disk.classList.add('disk');
        disk.style.width = `${20 + itr * 20}%`;
        disk.dataset.size = itr;
        disk.textContent = itr;
        tower1.appendChild(disk);
    }
}

function initGame() {
    createDisks();
}

initGame();