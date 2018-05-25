var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var player;
var platforms;
var cursors;
var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('ceu','img/ceu.png');
    this.load.image('chao','img/chao.png');
    this.load.image('arvore','img/arvore.png');
    this.load.image('altar','img/altar.png');
    this.load.image('espada','img/espada.png');
    this.load.image('arbusto','img/arbusto.png');
    this.load.spritesheet('boneco','img/boneco.png', { frameWidth: 32, frameHeight: 48 });
}

function create ()
{
    this.add.sprite(400,252,'ceu');

    /*this.add.sprite(50,550,'chao');
    this.add.sprite(150,550,'chao');
    this.add.sprite(250,550,'chao');
    this.add.sprite(350,550,'chao');
    this.add.sprite(450,550,'chao');
    this.add.sprite(550,550,'chao');
    this.add.sprite(650,550,'chao');
    this.add.sprite(750,550,'chao');*/

    platforms = this.physics.add.staticGroup();

    platforms.create(50,550,'chao').refreshBody();
    platforms.create(150,550,'chao');
    platforms.create(250,550,'chao');
    platforms.create(350,550,'chao');
    platforms.create(450,550,'chao');
    platforms.create(550,550,'chao');
    platforms.create(650,550,'chao');
    platforms.create(750,550,'chao');

    this.add.sprite(140,354,'arvore');
    this.add.sprite(660,354,'arvore');

    platforms.create(400,430,'altar').refreshBody();

    this.add.sprite(404,360,'espada');

    this.add.sprite(60,480,'arbusto');
    this.add.sprite(730,480,'arbusto');

    player = this.physics.add.sprite(100, 450, 'boneco').setScale(2);

    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('boneco', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'turn',
        frames: [ { key: 'boneco', frame: 4 } ],
        frameRate: 20
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('boneco', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });

    cursors = this.input.keyboard.createCursorKeys();

    this.physics.add.collider(player, platforms);
   
}

function update ()
{
    if (cursors.left.isDown)
    {
        player.setVelocityX(-160);

        player.anims.play('left', true);
    }
    else if (cursors.right.isDown)
    {
        player.setVelocityX(160);

        player.anims.play('right', true);
    }
    else
    {
        player.setVelocityX(0);

        player.anims.play('turn');
    }

    if (cursors.up.isDown && player.body.touching.down)
    {
        player.setVelocityY(-330);
    }
}