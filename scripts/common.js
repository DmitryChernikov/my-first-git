taskService.getTasks();

    $(document).on("click", ".chek", function () {
        $(this).parents(".task-row").toggleClass("chekon");
    });

    $(document).on("click", ".close", function () {
        var taskId = $(this).parents('.task-row').data('taskid');

        $(this).parents(".task-row").remove();

        if (taskId != undefined) {
            taskService.deleteTask(taskId);
        }
    });


    $("#save-btn").click(function () {
        var container = $("#tasks-container");
        var title = $("#input1").val();
        if (title.trim() !== '') {
            var task = {
                title: title
            };

            taskService.addTask(task);

            $('#input1').val('');

            
        } else {
            showErrorMessage('Please enter the task title');
        }
    })

    $('#input1').keydown(function () {
        $('.error-message').remove();
    })

    function buildTask(task) {
        var el = '<div class="checkbox task-row' + (task.isDone ? ' chekon' : '') + '"data-taskid=' + task.id + '><label><input type="checkbox" value="" class="chek">' + task.title + '</label>'
        el += '<i class="fa fa-times close" aria-hidden="true"></i></div>';

        $('#tasks-container').append(el);
    }

    function showErrorMessage(message) {
        var container = $('#newTask input');
        var el = $('<p></p>');
        el.addClass('error-message');
        el.text(message);
        container.after(el);
    }
