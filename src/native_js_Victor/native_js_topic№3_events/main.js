const sm = document.getElementById("small")
const md = document.getElementById("medium")
const bg = document.getElementById("big")

/*sm.onclick = () => alert('ey') /!*('old acshin')*!/
sm.onclick = null

sm.addEventListener('click', () => alert('yo!')) /!*('newest acshion')*!/
sm.removeEventListener();*/

function onClickHandler (event) {
    console.log(event)
}

sm.onclick = onClickHandler



