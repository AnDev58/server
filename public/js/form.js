const $signUpButton = $('#signUp');
const $signInButton = $('#signIn');
const $container = $('#container');

$signUpButton.on('click', function(){
    $container.addClass('right-panel-active');
});

$signInButton.on('click', function() {
    $container.removeClass('right-panel-active');
});