function Navbar() {
    return (
        `
        <link rel="stylesheet" href="styles/index.css">
        <Navbar id="navbar">
        <div class="banner">
            <p>Learn how to build visual and interactive apps using Interface Designer &nbsp;<span><a href="">Watch
                        Webinar &nbsp;<h2> &#8594</h2></a></span></p>
        </div>
        <div class="menu">
            <div class="menu-div">
                <div class="menu-logo">
                    <img src="https://cdn.iconscout.com/icon/free/png-256/airtable-1482122-1254387.png" alt=""
                        class="mobile-logo" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Airtable_Logo.svg/1200px-Airtable_Logo.svg.png"
                        alt="" class="logo">
                </div>
                <div class="menu-links">
                    <a href="#">Product ></a>
                    <a href="#">Solution ></a>
                    <a href="#">Pricing </a>
                    <a href="#">Enterprise ></a>
                    <a href="#">Resources ></a>
                </div>
            </div>
            <div class="bottom">
                <a href="#">Contact Sales</a>
                <a href="#">Sign up for free</a>
                <a href="#">Sign In</a>
                <div class="ham" id='ham'>
                    <img src="https://static.thenounproject.com/png/1614628-200.png" alt="">
                </div>
                <div class="ham1" id='ham1'>
                    <img src="https://p.kindpng.com/picc/s/67-679368_black-cross-png-transparent-png.png" alt="">
                </div>
            </div>


        </div>
        <div class="mobileMenu">
            <div>
                <a href="#">Product ></a>
                <a href="#">Solution ></a>
                <a href="#">Pricing </a>
                <a href="#">Enterprise ></a>
                <a href="#">Resources ></a>
            </div>
        </div>

    </Navbar>`
    )
}

function navbarScript() {
    let scroll = window.pageYOffset;
    window.onscroll = function () {
        var currentScroll = window.pageYOffset;
        if (scroll > currentScroll) {
            document.querySelector(".mobile-logo").style.opacity = "0";
            document.querySelector(".logo").style.opacity = "1";
            document.querySelector(".menu-links").setAttribute('class', 'menu-links menuAnim menuAnim1');
            document.querySelector(".logo").style.transition = "0.5s";
            document.querySelector(".mobile-logo").style.transition = "0.5s";


        } else {
            document.querySelector(".mobile-logo").style.opacity = "1";
            document.querySelector(".logo").style.opacity = "0";
            document.querySelector(".menu-links").setAttribute('class', 'menu-links menuAnim');
            document.querySelector(".logo").style.transition = "0.5s";
            document.querySelector(".mobile-logo").style.transition = "0.5s";
        }
        scroll = currentScroll
    }

    document.querySelector('.ham').addEventListener('click', () => {
        document.querySelector('.ham1').style.display = 'inherit';
        document.querySelector('.ham').style.display = 'none';
        document.querySelector('.mobileMenu').style.display = 'inherit';
    })

    document.querySelector('.ham1').addEventListener('click', () => {
        document.querySelector('.ham').style.display = 'inherit';
        document.querySelector('.mobileMenu').style.display = 'none';
        document.querySelector('.ham1').style.display = 'none';
    })
}

export { Navbar, navbarScript }
