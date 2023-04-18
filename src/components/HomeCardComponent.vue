<template>
    <div class="container ps-3 pe-3 pt-2 text-center">
        <div class="row">
            <div class="col-xl-6 col-lg-12 p-1 mb-2" id="teachersearch">
                <div class="card">
                    <img src="../img/Rectangle 2.png" class="card-img" alt="...">
                    <div class="card-img-overlay">
                        <h5 class="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path
                                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>Tanár kereső</h5>
                    </div>
                </div>
            </div>
            <div class="col-xl-6 col-lg-12 p-1">
                <div class="container">
                    <div class="row">
                        <div class=" col-12 mb-2 ms-1" id="about">
                            <div class="card">
                                <img src="../img/Rectangle 3.png" class="card-img" alt="...">
                                <div class="card-img-overlay">
                                    <h5 class="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" class="bi bi-people" viewBox="0 0 16 16">
                                            <path
                                                d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
                                        </svg>Rólunk</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 ms-1" id="goal">
                            <div class="card">
                                <img src="../img/Solid_white.svg.png" class="card-img" alt="...">
                                <div class="card-img-overlay">
                                    <h5 class="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" class="bi bi-flag" viewBox="0 0 16 16">
                                            <path
                                                d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001M14 1.221c-.22.078-.48.167-.766.255-.81.252-1.872.523-2.734.523-.886 0-1.592-.286-2.203-.534l-.008-.003C7.662 1.21 7.139 1 6.5 1c-.669 0-1.606.229-2.415.478A21.294 21.294 0 0 0 3 1.845v6.433c.22-.078.48-.167.766-.255C4.576 7.77 5.638 7.5 6.5 7.5c.847 0 1.548.28 2.158.525l.028.01C9.32 8.29 9.86 8.5 10.5 8.5c.668 0 1.606-.229 2.415-.478A21.317 21.317 0 0 0 14 7.655V1.222z" />
                                        </svg>Alkamazás célja</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped="css">
#teachersearch {
    height: clamp(250px, 40vw, 700px);
    width: clamp(250px, auto, 700px);

}

#teachersearch img {
    opacity: 45%;
    height: clamp(250px, 40vw, 700px);
    width: clamp(250px, auto, 700px);
    object-fit: cover;
}

#teachersearch .card {
    background-color: black;
}

.card:hover {
    transition: 0.3s;
    box-shadow: 10px 4px 4px 2px rgba(0, 0, 0, 0.25);
}

#about {
    height: clamp(250px, 20vw, 350px);
    width: clamp(250px, auto, 700px);
}

#about img {
    height: clamp(250px, 20vw, 350px);
    width: clamp(250px, auto, 700px);
}


#goal {
    height: clamp(250px, 20vw, 350px);
    width: clamp(250px, auto, 700px);
}

#goal img {
    height: clamp(250px, 20vw, 350px);
    width: clamp(250px, auto, 700px);
}


.card-title {
    color: white;
}

#goal .card-title {
    color: black;
}</style>