/**
 * @author Ben Siebert
 * @copyright 2018-2021 Ben Siebert. All rights reserved.
 */

let cookies = 0
let grandmas = 0

let cookiesToAdd = 1
let cps = 0
let maxCPS = 0

let display = null
let image = null

let allowAnimation = true

function addCookie() {
    cookies += cookiesToAdd
    cps++;
    if (cps > maxCPS) {
        maxCPS = cps
    }
    if (allowAnimation) {
        allowAnimation = false
        image.classList.remove("fadeUp")
        image.classList.add("fadeUp")
        setTimeout(() => {
            image.classList.remove("fadeUp")
            allowAnimation = true
        }, 500)
    }
}

window.onload = function () {
    display = document.getElementById('display')
    image = document.getElementById('image')
    setInterval(render, 1)
    setInterval(() => {
        document.getElementById("cps").innerText = cps
        document.getElementById("max-cps").innerText = maxCPS
        let temp = cps
        if (temp >= 10) {
            cookiesToAdd = cookiesToAdd + 1
        }
        cps = 0;
    }, 1000)
    setInterval(() => {
        for (let i = 0; i < grandmas; i++) {
            cookies++
        }
    }, 2000)
}

function buyGrandma() {
    if (cookies >= 100 * (grandmas + 1)) {
        cookies -= 100 * (grandmas + 1);
        grandmas++
    } else {
        alert("You dont have enough cookies.")
    }
}

function render() {
    document.getSelection().setPosition(null);
    display.innerText = cookies;
    document.getElementById('grandmas').innerText = grandmas
    document.getElementById('grandma-prize').innerText = " (" + (100 * (grandmas + 1)) + ")"
}
