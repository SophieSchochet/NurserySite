export function showInfoTeddy() {
    var x = document.getElementById("teddy");

    if (x != null) {
        x.addEventListener('click', function(){
            showInfo();
        });
    }

    function showInfo() {
        var x = document.getElementById("teddy_bears");
        var arr = document.getElementById("arrowTeddy");
        if (x != null) {
            if (x.style.display === "none") {
                x.style.display = "block";
                if(arr != null){
                    arr.style.transform = "rotate(135deg)";
                }
            }
            else{
                x.style.display = "none";
                if(arr != null){
                    arr.style.transform = "rotate(-45deg)";
                }
                
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
        var arr = document.getElementById("arrowCubs");
        if (x != null) {
            if (x.style.display === "none") {
                x.style.display = "block";
                if(arr != null){
                    arr.style.transform = "rotate(135deg)";
                }
            }
            else{
                x.style.display = "none";
                if(arr != null){
                    arr.style.transform = "rotate(-45deg)";
                }
                
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
        var arr = document.getElementById("arrowBig");
        if (x != null) {
            if (x.style.display === "none") {
                x.style.display = "block";
                if(arr != null){
                    arr.style.transform = "rotate(135deg)";
                }
            }
            else{
                x.style.display = "none";
                if(arr != null){
                    arr.style.transform = "rotate(-45deg)";
                }
                
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
        var arr = document.getElementById("arrowPanda");
        if (x != null) {
            if (x.style.display === "none") {
                x.style.display = "block";
                if(arr != null){
                    arr.style.transform = "rotate(135deg)";
                }
            }
            else{
                x.style.display = "none";
                if(arr != null){
                    arr.style.transform = "rotate(-45deg)";
                }
                
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
        var arr = document.getElementById("arrowSun");
        if (x != null) {
            if (x.style.display === "none") {
                x.style.display = "block";
                if(arr != null){
                    arr.style.transform = "rotate(135deg)";
                }
            }
            else{
                x.style.display = "none";
                if(arr != null){
                    arr.style.transform = "rotate(-45deg)";
                }
                
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
        var arr = document.getElementById("arrowTracks");
        if (x != null) {
            if (x.style.display === "none") {
                x.style.display = "block";
                if(arr != null){
                    arr.style.transform = "rotate(135deg)";
                }
            }
            else{
                x.style.display = "none";
                if(arr != null){
                    arr.style.transform = "rotate(-45deg)";
                }
                
            }
        }
    }

}