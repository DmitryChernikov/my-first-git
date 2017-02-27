http://localhost:54542/../styles/style.css


    $(".task-row").click(function () {
        $(this).toggleClass("chekon");
    });

    $(".close").click(function () {
        $(this).parent().remove();
    })