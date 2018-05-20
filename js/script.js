/*(function(){
    //console.log(Phaser);
    var game = new Phaser.Game(800,600,Phaser.AUTO,null,{preload:preload,create:create,update:update});

    //carrega recursos
    function preload(){
        game.load.image('sky','img/sky.png');
    }

    //criação dos elementos do jogo
    function create(){
        game.add.sprite(0,0,'sky');
    }

    //estabelecer regras do jogo, lógica
    function update(){}
}()); */

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('ceu','img/ceu.png');
    this.load.image('chao','img/chao.png');
    this.load.image('arvore','img/arvore.png');
    this.load.image('altar','img/altar.png');
    this.load.image('espada','img/espada.png');
    this.load.image('arbusto','img/arbusto.png');
}

function create ()
{
    this.add.sprite(50,550,'chao');
    this.add.sprite(150,550,'chao');
    this.add.sprite(250,550,'chao');
    this.add.sprite(350,550,'chao');
    this.add.sprite(450,550,'chao');
    this.add.sprite(550,550,'chao');
    this.add.sprite(650,550,'chao');
    this.add.sprite(750,550,'chao');

    this.add.sprite(400,252,'ceu');

    this.add.sprite(140,354,'arvore').setScale(2);
    this.add.sprite(660,354,'arvore').setScale(2);

    this.add.sprite(400,430,'altar');

    this.add.sprite(404,360,'espada');

    this.add.sprite(60,480,'arbusto');
    this.add.sprite(730,480,'arbusto');
}

function update ()
{
}