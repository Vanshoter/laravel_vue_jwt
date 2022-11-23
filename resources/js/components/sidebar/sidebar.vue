<template>
    <body>
    <div class="sidebar">

        <div class="toggle">
            <i class="bx bx-chevron-right"></i>
        </div>

        <div class="logo">
            <img src="./../images/logo.png" alt="...">
        </div>

        <div class="logo2">
            <img src="./../images/logo2.png" alt="...">
        </div>

        <nav>
            <div>
            <ul>
                <li class="nav-item active">
                    <i class="bx bxs-dashboard"></i>
                    <span>{{ Главная }}</span>
                </li>
                <li class="nav-item">
                    <i class="bx bxs-bar-chart-alt-2"></i>
                    <span>Личный кабинет</span>
                </li>

                <li class="nav-item">
                    <i class="bx bxs-wallet"></i>
                    <span >{name: user.login}</span>
                </li>

                <li class="nav-item">
                    <i class="bx bxs-bell"></i>
                    <span>Регистрация</span>
                </li>
                <li class="nav-item">
                    <i class="bx bxs-cog"></i>
                    <span> Выход</span>
                </li>
            </ul>
            </div>

            <hr>

            <ul>
                <li class="nav-item">
                    <i class="bx bxs-message-dots"></i>
                    <span>Send Feedback</span>
                </li>
            </ul>
        </nav>
    </div>
    </body>
</template>

<script>
export default {
    name: "PageHome",
    data() {
        return {
            accessToken: null
        }
    },
}

</script>

<style scoped>

* {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    list-style: none;
    box-sizing: border-box;
}

.sidebar {
    width: 120px;
    height: 100%;
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    background: rgba(10, 10, 10, .65);
    box-shadow: 0 8px 32px rgb(2, 4, 24);
    border-right: 2px solid rgba(255, 255, 255, .09);
    transition: .4s ease-in-out;
}

.sidebar.open {
    width: 340px;
}

.sidebar .logo {
    width: 100%;
    height: 140px;
    padding: 0 0;
    display: grid;
    align-items: center;
    justify-items: center;
}

.sidebar .logo2 {
    width: 100%;
    height: 100px;
    margin-bottom: 0;
    padding: 0 0;
    display: grid;
    align-items: center;
    justify-items: center;
}

.sidebar .logo img {
    width: 56px;
    transition: .4s;
}

.sidebar .logo2 img {
    width: 56px;
    transition: .4s;
}

.sidebar.open .logo img {
    width: 96px;
}

.sidebar.open .logo2 img {
    width: 96px;
}

.sidebar .logo h3 {
    color: #fff;
    font-size: 0;
    margin-top: 0;
    font-variant: small-caps;
    pointer-events: none;
    scale: 0;
    opacity: 0;
}

.sidebar .logo2 h3 {
    color: #fff;
    font-size: 0;
    margin-top: 0;
    font-variant: small-caps;
    pointer-events: none;
    scale: 0;
    opacity: 0;
}

.sidebar.open .logo h3 {
    scale: 1;
    opacity: 1;
    transition: .4s;
    transition-delay: .2s;
}

.sidebar.open .logo2 h3 {
    scale: 1;
    opacity: 1;
    transition: .4s;
    transition-delay: .2s;
}


.sidebar nav {
    padding: 0 30px;
}

.sidebar nav .nav-item {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-radius: 4px;
    width: 100%;
    height: 56px;
    padding: 0 16px;
    margin: 8px 0;
    color: #fff;
    transition: .3s;
}

.sidebar nav .nav-item.active {
    background: #00ce11 !important;
}

.sidebar nav .nav-item:hover {
    background: rgba(255, 255, 255, .1);
}

.sidebar nav .nav-item i {
    font-size: 26px;
}

.sidebar nav .nav-item span {
    font-size: 18px;
    margin-left: 8px;
    opacity: 0;
    pointer-events: none;
}

.sidebar.open nav .nav-item span {
    opacity: 1;
    pointer-events: visible;
    transition: .4s;
    transition-delay: .2s;
}

.sidebar hr {
    width: 100%;
    height: 2px;
    border-radius: 3px;
    margin: 40px 0 50px;
    background: rgba(255, 255, 255, .1);
    opacity: 0;
}

.sidebar.open hr {
    opacity: 1;
    transition: .4s;
}

.sidebar .toggle {
    cursor: pointer;
    position: absolute;
    color: #00ce11;
    top: 180px;
    right: -20px;
    font-size: 38px;
    line-height: 50%;
    text-align: center;
    border-radius: 50%;
    padding: 2px 0 2px 2px;
    background: linear-gradient(
        90deg,
        transparent 50%,
        rgba(10, 10, 10, .65) 50%
    );
}

.sidebar.open .toggle {
    transform: translateY(45px);
}

.sidebar .toggle i {
    transition: .4s linear;
}

.sidebar.open .toggle i {
    transform: rotateY(180deg);
}
</style>
