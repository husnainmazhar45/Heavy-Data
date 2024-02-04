function backGround() {
    const bgButton = document.querySelector("#bgButton");
    bgButton.addEventListener("click", event => {
        if (document.body.style.backgroundColor != "green")
            document.body.style.backgroundColor = "green";
        else if (document.body.style.backgroundColor != "yellow")
            document.body.style.backgroundColor = "yellow";
        else
            document.body.style.backgroundColor = "blue";

    })
};