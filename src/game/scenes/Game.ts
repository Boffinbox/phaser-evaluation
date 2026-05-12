import { Scene } from 'phaser';

export class Game extends Scene
{
    camera: Phaser.Cameras.Scene2D.Camera;
    background: Phaser.GameObjects.Image;
    timerText: Phaser.GameObjects.Text;
    scoreText: Phaser.GameObjects.Text;
    boff: Phaser.GameObjects.Sprite;
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

        this.currScale = 0.6
        this.boff = this.physics.add.sprite(512, 384, "boff")
        this.boff.setInteractive(this.input.makePixelPerfect())
        this.boff.scale = this.currScale

        this.nice = this.sound.add("nice")

        let countdown = 10;
        this.timerText = this.add.text(10, 10, `Time Left: ${countdown}`, {
            fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        });

        let score = 0;
        this.scoreText = this.add.text(1014, 10, `Score: ${score}`, {
            fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(1, 0)

        let playRate = 1
        this.boff.on('pointerdown', () =>
        {
            this.boff.setPosition(Math.random() * 1024, Math.random() * 768)
            this.currScale *= 0.90
            this.boff.scale = this.currScale
            score++
            if (score > 1) playRate = ((Math.random() + 0.5) * 1.4)
            this.nice.play({
                rate: playRate
            })
            this.scoreText.setText(`Score: ${score}`)
        });

        this.time.addEvent({
            delay: 1000,
            callback: () =>
            {
                countdown--
                this.timerText.setText(`Time Left: ${countdown}`)
                if (countdown <= 0)
                {
                    this.scene.start('GameOver', { score: score });
                }
            },
            callbackScope: this,
            loop: true
        })
    }
}
