const openBox = () => {
        document.getElementById("boxContainer").classList.remove("boxHide");
    }

    const closeBox = () => {
        document.getElementById("boxContainer").classList.add("boxHide");
    }

    document.getElementById('boxContainer').addEventListener('click', function (e) {
        if (e.target.id === "boxContainer")
            closeBox()

    })

