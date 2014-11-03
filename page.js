var page = function() {
    var good = [2, 5, 8, 11, 14, 17, 20];
    var player_number = 0;
    var current = 0;
    var setupClickListener = function () {
        $(document).on('click', 'li.selectable', function () {
            playerSelected($(this).text());
            selectGood();
            updateSelectable();
        });
    };
    var playerSelected = function (clickedNumber) {
        player_number = parseInt(clickedNumber);
        $('#msg1').text('Du valde ' + player_number);
    };
    var selectGood = function () {
        current = player_number + 1;
        if ($.inArray(current, good) == -1) {
            current++;
        }
        if (current === 20) {
            $('#msg2').text('Ha, jag väljer 20! Jag är bäst!');
        } else {
            $('#msg2').text('Jag väljer ' + current);
        }
    };
    var updateSelectable = function () {
        $('li').removeClass('selectable');
        if (current == 20) {
            $('#20').addClass('selectable');
            $(document).off('click', 'li.selectable');
        } else {
            var first = $('#' + (current + 1));
            first.addClass('selectable');
            first.next().addClass('selectable');
        }
    };

    return {
        setupClickListener: setupClickListener,
        selectGood: selectGood,
        updateSelectable: updateSelectable
    };
}();