import { Scene } from 'phaser';

export class Game extends Scene
{
    camera: Phaser.Cameras.Scene2D.Camera;
    background: Phaser.GameObjects.Image;
    msg_text: Phaser.GameObjects.Text;
    myCircle: Phaser.GameObjects.Sprite;
    nice: Phaser.Sound.BaseSound
    currScale: number

    constructor()
    {
        super('Game');
    }

    create()
    {
        this.camera = this.cameras.main;
        this.camera.setBackgroundColor(0x00ff00);

        this.background = this.add.image(512, 384, 'background');
        this.background.setAlpha(0.5);

        // this.msg_text = this.add.text(512, 384, 'Make something fun!\nand share it with us:\nsupport@phaser.io', {
        //     fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
        //     stroke: '#000000', strokeThickness: 8,
        //     align: 'center'
        // });
        // this.msg_text.setOrigin(0.5);

        this.myCircle = this.physics.add.sprite(512, 384, "circle")
        this.myCircle.setInteractive(this.input.makePixelPerfect())

        this.nice = this.sound.add("nice")

        this.currScale = 1

        this.myCircle.on('pointerdown', () =>
        {
            console.log(`pew pew`)
            this.myCircle.setPosition(Math.random() * 1024, Math.random() * 768)
            this.currScale *= 0.95
            this.myCircle.scale = this.currScale
            this.nice.play({
                rate: ((Math.random() + 0.5) * 1.4)
            })
            // this.scene.start('GameOver');
        });
    }
}
