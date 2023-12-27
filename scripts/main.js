(() => {
    let keys = [];
    let can_use = true;

    function control() {
        if (!can_use) return;
        if (keys.includes("Control") && keys.includes("ArrowRight")) {
            const video_element = document.querySelector('video');
            if (!video_element) return;
            video_element.currentTime += 90;
            can_use = false;
            setTimeout(() => {can_use = true}, 1000);
        }
    }

    document.addEventListener("keydown", (evt) => {
        if (keys.indexOf(evt.key) == -1) keys.push(evt.key);
        control();
    })

    document.addEventListener("keyup", (evt) => {
        keys.splice(keys.indexOf(evt.key), 1);
    })
})()