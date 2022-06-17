(function () {
    const img = document.querySelectorAll('.blocImg')

    function anim(el, init) {
        setInterval(() => {
            if (init > 100) {
                init -= 100 * 2
            } else if (init < -100) {
                init -= -100 * 2
            }
            el.style.transform = 'translate3d(0, ' + init + '%, 0px)'
        }, 30);
        window.addEventListener('wheel', function (e) {
            init -= (e.deltaY - 0.6) / 70
            el.style.transform = 'translate3d(0, ' + init + '%, 0px)'
        })

        let startTouch = 0
        function touchStart(e) {
            startTouch = e.touches[0].clientY
        }

        function move(e) {
            const touchY = e.touches[0].clientY
            init += (touchY - startTouch) * 0.15
            el.style.transform = 'translate3d(0, ' + init + '%, 0px)'
            startTouch = touchY
        }
        document.addEventListener('touchstart', touchStart)
        document.addEventListener('touchmove', move)
     
    }

    anim(img[0], 0)
    anim(img[1], -100)
})()
