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
                    enableEditing(player.id, $row)
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
                    $('<td>').addClass('name').text(player.name),
                    $('<td>').addClass('title').text(player.title),
                    $('<td>').addClass('race').text(player.race),
                    $('<td>').addClass('profession').text(player.profession),
                    $('<td>').text(player.level),
                    $('<td>').text(new Date(player.birthday).toLocaleDateString()),
                    $('<td>').addClass('banned').text(player.banned),
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

    const races = ['HUMAN', 'DWARF', 'ELF', 'GIANT', 'ORC', 'TROLL', 'HOBBIT'];
    const professions = ['WARRIOR', 'ROGUE', 'SORCERER', 'CLERIC', 'PALADIN', 'NAZGUL', 'WARLOCK', 'DRUID'];

    races.forEach(function(race) {
        $('#playerRace').append(new Option(race, race));
    });

    professions.forEach(function(profession) {
        $('#playerProfession').append(new Option(profession, profession));
    });

    $('#newPlayerForm').on('submit', function(e) {
        e.preventDefault();

        var birthdayValue = $('#playerBirthday').val();
        var birthdayTimestamp = Date.parse(birthdayValue);

        var formData = {
            name: $('#playerName').val(),
            title: $('#playerTitle').val(),
            race: $('#playerRace').val(),
            profession: $('#playerProfession').val(),
            level: parseInt($('#playerLevel').val(), 10),
            birthday: birthdayTimestamp,
            banned: $('#playerBanned').val() === 'true'
        };

        if (!formData.name || !formData.title || !formData.race || !formData.profession || isNaN(formData.level) || isNaN(formData.birthday)) {
            alert('Please fill all the required fields correctly.');
            return;
        }

        if (formData.name.length > 12 || formData.title.length > 30 || formData.level < 0 || formData.level > 100 || formData.birthday < 0) {
            alert('Some fields contain invalid data.');
            return;
        }

        $.ajax({
            url: "/rest/players",
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(formData),
            success: function(result) {
                $('#newPlayerForm')[0].reset();
                loadAccountPage($('.page-button.active').index() || 0);
            },
            error: function(xhr, status, error) {
                console.error("Error creating new player", status, error);
            }
        });
    });
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

function enableEditing(playerId, $row) {
    $row.find('.name').html(createInputField($row.find('.name').text()));
    $row.find('.title').html(createInputField($row.find('.title').text()));

    var raceSelect = $('<select>').addClass('input-field');
    var races = ['HUMAN', 'DWARF', 'ELF', 'GIANT', 'ORC', 'TROLL', 'HOBBIT'];
    races.forEach(function(race) {
        raceSelect.append($('<option>').attr('value', race).text(race));
    });
    raceSelect.val($row.find('.race').text());
    $row.find('.race').empty().append(raceSelect);

    var professionSelect = $('<select>').addClass('input-field');
    var professions = ['WARRIOR', 'ROGUE', 'SORCERER', 'CLERIC', 'PALADIN', 'NAZGUL', 'WARLOCK', 'DRUID'];
    professions.forEach(function(profession) {
        professionSelect.append($('<option>').attr('value', profession).text(profession));
    });
    professionSelect.val($row.find('.profession').text());
    $row.find('.profession').empty().append(professionSelect);

    var bannedSelect = $('<select>').addClass('input-field');
    bannedSelect.append($('<option>').attr('value', 'true').text('true'));
    bannedSelect.append($('<option>').attr('value', 'false').text('false'));
    bannedSelect.val($row.find('.banned').text());
    $row.find('.banned').empty().append(bannedSelect);

    $row.find('.edit-icon').attr({
        src: '../img/save.png',
        alt: 'Save'
    }).off('click').on('click', function() {
        savePlayer(playerId, $row);
    });

    $row.find('.delete-icon').hide();
}

function createInputField(value) {
    return $('<input>').attr({
        type: 'text',
        value: value
    });
}

function savePlayer(playerId, $row) {
    var updatedData = {
        name: $row.find('.name input').val(),
        title: $row.find('.title input').val(),
        race: $row.find('.race select').val(),
        profession: $row.find('.profession select').val(),
        banned: $row.find('.banned select').val()
    };

    $.ajax({
        url: "/rest/players/" + playerId,
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(updatedData),
        success: function(result) {
            $row.find('.edit-cell').empty().append($('<img>').attr({
                src: '../img/edit.png',
                alt: 'Edit',
                class: 'action-icon edit-icon'
            }).on('click', function() {
                enableEditing(playerId, $row);
            }));

            $row.find('.delete-icon').show();

            loadAccountPage($('.page-button.active').index());
        },
        error: function(xhr, status, error) {
            console.error("Error updating player with ID: " + playerId, status, error);
        }
    });
}
