var taskService = function () {
    return {
        BaseUrl: "http://learn-todo.gear.host/api/tasks",
        getTasks: function () {
            var self = this;
            $.ajax({
                Type: "GET",
                success: function (response) {
                    console.log('Success', response);
                    for (var i = 0; i < response.length; i++) {
                        var element = buildTask(response[i]);
                        $('#tasks-container').append(element);
                    }
                    $(".task-row.chekon").find(".chek").prop('checked', true);
                },
                error: function (response) {
                    console.log('Error', response);
                }
            })

        }

    }
};