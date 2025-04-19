fetch("./js/loadables.json?v" + Date.now()).then((response) => response.json()).then((data) => {
    for (let i = 0; i < data.length; i++) {
        DDCInjector.injectScript(data[i].src, data[i].src, false, data[i].module);
    }
    console.log("All scripts injected successfully.");
});