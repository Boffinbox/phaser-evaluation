import { Scene } from 'phaser';

export class GameOver extends Scene
{
    camera: Phaser.Cameras.Scene2D.Camera;
    background: Phaser.GameObjects.Image;
    gameoverText: Phaser.GameObjects.Text;
    gameover2Text: Phaser.GameObjects.Text;
    scoreText: Phaser.GameObjects.Text;
    score: number

    constructor()
    {
        super('GameOver');
    }

    init(data: { score: number })
    {
        this.score = data.score
    }

    create()
    {
        this.camera = this.cameras.main
        this.camera.setBackgroundColor(0xff0000);

        this.background = this.add.image(512, 384, 'background');
        this.background.setAlpha(0.5);

        this.gameoverText = this.add.text(512, 384, 'Game Over', {
            fontFamily: 'Arial Black', fontSize: 64, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

        this.scoreText = this.add.text(512, 492, `Your Score: ${this.score}`, {
            fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

        this.gameover2Text = this.add.text(512, 600, 'Play again?', {
            fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

        this.tweens.add(
            {
                targets: this.gameover2Text,
                duration: 800,
                alpha: 0.0,
                ease: "Power",
                yoyo: true,
                repeat: -1,
                delay: 400
            }
        )
        this.gameover2Text.setInteractive()

        this.gameover2Text.on('pointerdown', () =>
        {
            this.scene.start('MainMenu');
        });
    }
}
