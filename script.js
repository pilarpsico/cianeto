function togglemode() {

const html = document.documentElement

    if (html.classList.constains ('light')) {
                html.classList.remove ('light')
    } else {
        html.classList.add ('light')
    }
}