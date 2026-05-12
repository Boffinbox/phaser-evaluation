import { Scene, GameObjects } from 'phaser';

export class MainMenu extends Scene
{
    background: GameObjects.Image;
    boff: GameObjects.Image;
    title: GameObjects.Text;
    title2: GameObjects.Text;

    constructor()
    {
        super('MainMenu');
    }

    create()
    {
        this.background = this.add.image(512, 384, 'background');

        this.boff = this.add.image(512, 384, 'boff');
        this.boff.scale = 0.6

        this.title = this.add.text(512, 640, 'Nice! - The Video Game', {
            fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

        this.title2 = this.add.text(512, 700, 'Click here to start...', {
            fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

        this.tweens.add(
            {
                targets: this.title2,
                duration: 800,
                alpha: 0.0,
                ease: "Power",
                yoyo: true,
                repeat: -1,
                delay: 400
            }
        )

        this.title2.setInteractive()

        this.title2.on('pointerdown', () =>
        {
            this.scene.start('Game');
        });
    }
}
