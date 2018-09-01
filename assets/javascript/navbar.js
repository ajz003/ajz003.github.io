$('#email').on('click', function () {
    var value = $(this).attr('value');

    copyToClipboard(value);

    $(this).addClass("fadeinout")
    setTimeout(remAnim,510)

});

function copyToClipboard(value) {
    var $tmpInput = $('<input>');
    $tmpInput.val(value);
    $('body').append($tmpInput);
    $tmpInput.select();
    document.execCommand('copy');
    $tmpInput.remove();
}

function remAnim() {
    console.log()
    $("#email").removeClass("fadeinout");
}