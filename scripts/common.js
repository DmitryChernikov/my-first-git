taskService.getTasks();

    $(document).on("click", ".chek", function () {
        $(this).parents(".task-row").toggleClass("chekon");
    });

    $(document).on("click", ".close", function () {
        $(this).parents(".task-row").remove();
    })

    $('#input1').keydown(function () {
        $('.error-message').remove();
    })

    $("#save-btn").click(function () {
        var text1 = $("#input1").val();
        var container = $("#tasks-container");
        if (text1.trim() !== '') {
            var element = buildTask(text1);
            container.append(element);
            $('#input1').val('');
        } else {
            showErrorMessage('Please enter the task title');
        }
    })

    function buildTask(text1) {
        var el = '<div class="checkbox task-row"><label><input type="checkbox" value="" class="chek">'+text1+'</label>'
        el += '<i class="fa fa-times close" aria-hidden="true"></i></div>';

        return el;
    }

    function showErrorMessage(message) {
        var container = $('#newTask input');
        var el = $('<p></p>');
        el.addClass('error-message');
        el.text(message);
        container.after(el);
    }
