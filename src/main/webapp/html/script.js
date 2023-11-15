function getTotalCount(currentPage) {
    $.get("/rest/players/count", function (totalCount) {
        var countPerPage = parseInt($('#countPerPage').val());
        var numberOfPages = Math.ceil(totalCount / countPerPage);

        var paginationContainer = $('.pagination-buttons');
        paginationContainer.empty();

        for (var i = 0; i < numberOfPages; i++) {
            var button = $('<button>').addClass('page-button').text(i + 1);

            button.removeClass('active');

            if (i === currentPage) {
                button.addClass('active');
            }

            button.click((function (pageNumber) {
                return function () {
                    loadAccountPage(pageNumber);
                    getTotalCount(pageNumber);
                };
            })(i));
            paginationContainer.append(button);
        }
    });
}


function loadAccountPage(pageNumber) {
    var countPerPage = parseInt($('#countPerPage').val());

    console.log("Loading page: " + pageNumber + ", size: " + countPerPage);

    $.get("/rest/players", {pageNumber: pageNumber, pageSize: countPerPage}, function (data) {
        console.log(data);
        $('#accountsTable tbody').empty();

        if (data && data.length > 0) {
            data.forEach(function (player) {
                var $editImg = $('<img>').attr({
                    src: '../img/edit.png',
                    alt: 'Edit',
                    class: 'action-icon edit-icon'
                }).on('click', function() {

                });

                var $deleteImg = $('<img>').attr({
                    src: '../img/delete.png',
                    alt: 'Delete',
                    class: 'action-icon delete-icon'
                }).on('click', function() {
                    deletePlayer(player.id);
                });

                var $row = $('<tr>').append(
                    $('<td>').text(player.id),
                    $('<td>').text(player.name),
                    $('<td>').text(player.title),
                    $('<td>').text(player.race),
                    $('<td>').text(player.profession),
                    $('<td>').text(player.level),
                    $('<td>').text(new Date(player.birthday).toLocaleDateString()),
                    $('<td>').text(player.banned),
                    $('<td>').append($editImg),
                    $('<td>').append($deleteImg)
                );
                $('#accountsTable tbody').append($row);
            });
        } else {
            console.log("No data received for page: " + pageNumber);
        }
    });
    $('.page-button').removeClass('active');
    $('.page-button').eq(pageNumber).addClass('active');
}

$(document).ready(function () {
    $('#countPerPage').empty();
    for (var i = 3; i <= 20; i++) {
        $('#countPerPage').append(new Option(i.toString(), i));
    }

    $('#countPerPage').val(3);
    getTotalCount(0);
    loadAccountPage(0);
});

$('#countPerPage').change(function () {
    getTotalCount(0);
    loadAccountPage(0);
});

function deletePlayer(playerId) {
    $.ajax({
        url: "/rest/players/" + playerId,
        type: 'DELETE',
        success: function(result) {
            loadAccountPage($('.page-button.active').index());
        },
        error: function(xhr, status, error) {
            console.error("Error deleting player with ID: " + playerId, status, error);
        }
    });
}
