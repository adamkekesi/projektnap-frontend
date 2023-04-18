<template>
    <div class="container">
        <div class="row">
            <div class="col"></div>
            <div class="col-6 align-content-center m-4">
                <div class="input-group m-4">
                    <input type="search" id="form1" class="form-control" placeholder="Keresés..." />
                    <button type="button" class="btn btn-success btn-lg">
                        Keresés
                    </button>
                </div>
            </div>
            <div class="col"></div>
        </div>
    </div>
    <div class="container">


        <div class="row">
            <div class="d-flex">
                <h5 class="szures">Szűrés:</h5>

                <div class="dropdown col">
                    <button class="btn btn-success dropdown-toggle btn-lg" type="button" id="dropdownMenuButton1"
                        data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="../assets/teacher.png" class="img-fluid" alt="tantargy" style="padding: 2px 10px;" />
                        Tantárgy
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>

                <div class="dropdown col">
                    <button class="btn btn-success dropdown-toggle btn-lg" type="button" id="dropdownMenuButton1"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="../assets/vector.png" class="img-fluid" alt="tantargy" style="padding: 2px 10px;" />
                        Szint
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>

                <div class="dropdown col">
                    <button class="btn btn-success dropdown-toggle btn-lg" type="button" id="dropdownMenuButton1"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="../assets/location.png" class="img-fluid" alt="tantargy" style="padding: 2px 10px;" />
                        Vármegye
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>

                <div class="dropdown col">
                    <button class="btn btn-success dropdown-toggle btn-lg" type="button" id="dropdownMenuButton1"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="../assets/star.png" class="img-fluid" alt="tantargy" style="padding: 2px 10px;" />
                        Értékelés
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>

                <div class="dropdown col">
                    <button class="btn btn-success dropdown-toggle btn-lg" type="button" id="dropdownMenuButton1"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="../assets/coin.png" class="img-fluid" alt="tantargy" style="padding: 2px 10px;" />
                        Árazás
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.dropdown-toggle {
    width: 200px !important;
}
.szures{
    margin-right: 30px;
    margin-top: 10px;
}
</style>