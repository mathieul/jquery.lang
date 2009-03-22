$(function () {
    $('#my-list li:odd').addClass('greek');

    $('#my-list-style').bind('click', function (e) {
        e.preventDefault();
        $('#my-list li').toggleClass('greek');
    });
    
    var switch_classes = function () {
        $('#my-list li').toggleClass('greek');
    };
    
    $('#my-list').hover(switch_classes, switch_classes);
});