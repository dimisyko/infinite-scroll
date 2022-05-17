(function () {
    const img = document.querySelectorAll('.blocImg')
    function anim(el, init) {
        setInterval(() => {
            if (init > 100) {
                init -= 100 * 2
            }
            if (init < -100) {
                init -= -100 * 2
            }
            el.style.transform = 'translate3d(0, ' + init + '%, 0px)'
        }, 30);
        window.addEventListener('wheel', function (e) {
            init -= (e.deltaY - 0.6) / 70
            el.style.transform = 'translate3d(0, ' + init + '%, 0px)'
        })
    }

    anim(title[0], 0)
    anim(title[1], -100)
})()