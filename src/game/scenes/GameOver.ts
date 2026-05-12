import { Scene } from 'phaser';

export class GameOver extends Scene
{
    camera: Phaser.Cameras.Scene2D.Camera;
    background: Phaser.GameObjects.Image;
    gameover_text: Phaser.GameObjects.Text;
    gameover2_text: Phaser.GameObjects.Text;

    constructor()
    {
        super('GameOver');
    }

    create()
    {
        this.camera = this.cameras.main
        this.camera.setBackgroundColor(0xff0000);

        this.background = this.add.image(512, 384, 'background');
        this.background.setAlpha(0.5);

        this.gameover_text = this.add.text(512, 384, 'Game Over', {
            fontFamily: 'Arial Black', fontSize: 64, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

        this.gameover2_text = this.add.text(512, 600, 'Play again?', {
            fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);
        this.tweens.add(
            {
                targets: this.gameover2_text,
                duration: 800,
                alpha: 0.0,
                ease: "Power",
                yoyo: true,
                repeat: -1,
                delay: 400
            }
        )
        this.gameover2_text.setInteractive()

        this.gameover2_text.on('pointerdown', () =>
        {
            this.scene.start('MainMenu');
        });
    }
}
