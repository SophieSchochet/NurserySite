export function showInfoTeddy() {
    var x = document.getElementById("teddy");

    if (x != null) {
        x.onclick = showInfo;
    }

    function showInfo() {
        var x = document.getElementById("teddy_bears");
        if (x != null) {
            if (x.style.display === "none") {
                x.style.display = "block";
            }
            else {
                x.style.display = "none";
            }
        }
    }

}

export function showInfoCubs() {
    var x = document.getElementById("cubs");

    if (x != null) {
        x.onclick = showInfo;
    }

    function showInfo() {
        var x = document.getElementById("bear_cubs");
        if (x != null) {
            if (x.style.display === "none") {
                x.style.display = "block";
            }
            else {
                x.style.display = "none";
            }
        }
    }

}

export function showInfoBears() {
    var x = document.getElementById("big");

    if (x != null) {
        x.onclick = showInfo;
    }

    function showInfo() {
        var x = document.getElementById("big_bears");
        if (x != null) {
            if (x.style.display === "none") {
                x.style.display = "block";
            }
            else {
                x.style.display = "none";
            }
        }
    }

}

export function showInfoPanda() {
    var x = document.getElementById("panda");

    if (x != null) {
        x.onclick = showInfo;
    }

    function showInfo() {
        var x = document.getElementById("panda_bear");
        if (x != null) {
            if (x.style.display === "none") {
                x.style.display = "block";
            }
            else {
                x.style.display = "none";
            }
        }
    }

}

export function showInfoSun() {
    var x = document.getElementById("sun");

    if (x != null) {
        x.onclick = showInfo;
    }

    function showInfo() {
        var x = document.getElementById("sun_bear");
        if (x != null) {
            if (x.style.display === "none") {
                x.style.display = "block";
            }
            else {
                x.style.display = "none";
            }
        }
    }

}

export function showInfoTracks() {
    var btn = document.getElementById("tracks");

    if (btn != null) {
        btn.onclick = showInfo;
    }

    function showInfo() {
        var x = document.getElementById("bear_tracks");
        var arr = btn
        if (x != null && btn != null) {
            if (x.style.display === "none") {
                x.style.display = "block";
            }
            else {
                x.style.display = "none";
            }
        }
    }

}