document.addEventListener("DOMContentLoaded", function(event) {
    document.querySelector("html").classList.add("is-loaded");
    


    detectTouchDevice();

    if(window.matchMedia("(min-width: 768px)").matches) {
        let scene = document.getElementById('scene');
        let parallaxInstance = new Parallax(scene);
        console.log(1)
    }
});

const detectTouchDevice = () => {
    if ("ontouchstart" in document.documentElement) {
        document.querySelector("html").classList.add("touch-device");
        document.querySelectorAll(".case-1-el").forEach(el => {
            el.addEventListener("click", function(e) {
                document.querySelectorAll(".case-1-el").forEach(item => {
                    if (item !== this) {
                      item.classList.remove("is-active");
                    }
                });
                this.classList.add("is-active");
            });
        })
        
    } else {
        document.querySelector("html").classList.remove("touch-device");
        document.querySelectorAll(".case-1-el").forEach(el => {
            el.addEventListener("mouseenter", function(e) {
                this.classList.add("is-active");
            });
            el.addEventListener("mouseleave", function(e) {
                document.querySelectorAll(".case-1-el").forEach(item => {
                    item.classList.remove("is-active");
                });
            });

        })
    }
}
