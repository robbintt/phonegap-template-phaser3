
var startEvent = "DOMContentLoaded";
if(window.cordova){
    startEvent = "deviceready";
}
document.addEventListener(startEvent,function() {
    
    
    var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '',
                                { preload: preload, create: create });

    function preload () {
        game.load.image('logo', 'phaser.png');
    }

    function create () {
        var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
        logo.anchor.setTo(0.5, 0.5);
    }

});
