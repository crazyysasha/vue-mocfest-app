<template>
    <div></div>
    <h1 class="error">
        404
    </h1>
    <h2>Page Not Found</h2>
</template>
<script>
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Audiowide&display=swap');



div {
    position: absolute;
    top: 0%;
    left: 0%;
    height: 100%;
    width: 100%;
    margin: 0px;
    background: radial-gradient(circle, #240015 0%, #12000b 100%);
    overflow: hidden;
}

.wrap {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

h2 {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: 150px;
    font-size: 32px;
    text-transform: uppercase;
    transform: translate(-50%, -50%);
    display: block;
    color: #12000a;
    font-weight: 300;
    font-family: Audiowide;
    text-shadow: 0px 0px 4px #12000a;
    animation: fadeInText 3s ease-in 3.5s forwards, flicker4 5s linear 7.5s infinite, hueRotate 6s ease-in-out 3s infinite;
}

.error {
    text-align: center;
    margin-top: 150px;
    font-size: 200px;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    text-transform: uppercase;
    transform: translate(-50%, -50%);
    display: block;
    color: #12000a;
    font-weight: 300;
    font-family: Audiowide;
    text-shadow: 0px 0px 4px #12000a;
    animation: fadeInText 3s ease-in 3.5s forwards, flicker4 5s linear 7.5s infinite, hueRotate 6s ease-in-out 3s infinite;
}

@keyframes drawLine1 {
    0% {
        stroke-dashoffset: -940px;
    }

    100% {
        stroke-dashoffset: 0px;
    }
}

@keyframes drawLine2 {
    0% {
        stroke-dashoffset: -735px;
    }

    100% {
        stroke-dashoffset: 0px;
    }
}

@keyframes drawLine3 {
    0% {
        stroke-dashoffset: -940px;
    }

    100% {
        stroke-dashoffset: 0px;
    }
}

@keyframes flicker1 {
    0% {
        stroke: #ff005d;
    }

    1% {
        stroke: transparent;
    }

    3% {
        stroke: transparent;
    }

    4% {
        stroke: #ff005d;
    }

    6% {
        stroke: #ff005d;
    }

    7% {
        stroke: transparent;
    }

    13% {
        stroke: transparent;
    }

    14% {
        stroke: #ff005d;
    }

    100% {
        stroke: #ff005d;
    }
}

@keyframes flicker2 {
    0% {
        stroke: #ff005d;
    }

    50% {
        stroke: #ff005d;
    }

    51% {
        stroke: transparent;
    }

    61% {
        stroke: transparent;
    }

    62% {
        stroke: #ff005d;
    }

    100% {
        stroke: #ff005d;
    }
}

@keyframes flicker3 {
    0% {
        stroke: #ff005d;
    }

    1% {
        stroke: transparent;
    }

    10% {
        stroke: transparent;
    }

    11% {
        stroke: #ff005d;
    }

    40% {
        stroke: #ff005d;
    }

    41% {
        stroke: transparent;
    }

    45% {
        stroke: transparent;
    }

    46% {
        stroke: #ff005d;
    }

    100% {
        stroke: #ff005d;
    }
}

@keyframes flicker4 {
    0% {
        color: #ff005d;
        text-shadow: 0px 0px 4px #ff005d;
    }

    30% {
        color: #ff005d;
        text-shadow: 0px 0px 4px #ff005d;
    }

    31% {
        color: #12000a;
        text-shadow: 0px 0px 4px #12000a;
    }

    32% {
        color: #ff005d;
        text-shadow: 0px 0px 4px #ff005d;
    }

    36% {
        color: #ff005d;
        text-shadow: 0px 0px 4px #ff005d;
    }

    37% {
        color: #12000a;
        text-shadow: 0px 0px 4px #12000a;
    }

    41% {
        color: #12000a;
        text-shadow: 0px 0px 4px #12000a;
    }

    42% {
        color: #ff005d;
        text-shadow: 0px 0px 4px #ff005d;
    }

    85% {
        color: #ff005d;
        text-shadow: 0px 0px 4px #ff005d;
    }

    86% {
        color: #12000a;
        text-shadow: 0px 0px 4px #12000a;
    }

    95% {
        color: #12000a;
        text-shadow: 0px 0px 4px #12000a;
    }

    96% {
        color: #ff005d;
        text-shadow: 0px 0px 4px #ff005d;
    }

    100% {
        color: #ff005d;
        text-shadow: 0px 0px 4px #ff005d;
    }
}

@keyframes fadeInText {
    1% {
        color: #12000a;
        text-shadow: 0px 0px 4px #12000a;
    }

    70% {
        color: #ff005d;
        text-shadow: 0px 0px 14px #ff005d;
    }

    100% {
        color: #ff005d;
        text-shadow: 0px 0px 4px #ff005d;
    }
}

@keyframes hueRotate {
    0% {
        filter: hue-rotate(0deg);
    }

    50% {
        filter: hue-rotate(-120deg);
    }

    100% {
        filter: hue-rotate(0deg);
    }
}

@media only screen and (max-width: 600px) {
    .error {
        font-size: 90px;
    }
}
</style>