import Phaser from 'phaser';

export default class GameMain extends Phaser.Scene {
  constructor() {
    super({ key: 'GameMain' });
  }

  preload() {
    this.load.image('sprBg0', '../src/assets/sprBg0.png');
    this.load.image('sprBg1', '..src/assets/sprBg1.png');
    this.load.spritesheet('sprExplosion', '..src/assets/sprExplosion.png', {
      frameWidth: 32,
      frameHeight: 32,
    });

    this.load.spritesheet('sprEnemy0', '..src/assets/sprEnemy0.png', {
      frameWidth: 16,
      frameHeight: 16,
    });

    this.load.image('sprEnemy1', 'assets/sprEnemy1.png');
    this.load.spritesheet('sprEnemy2', '..src/assets/sprEnemy2.png', {
      frameWidth: 16,
      frameHeight: 16,
    });

    this.load.image('sprLaserEnemy0', '..src/assets/sprLaserEnemy0.png');
    this.load.image('sprLaserPlayer', '..src/assets/sprLaserPlayer.png');
    this.load.spritesheet('sprPlayer', '..src/assets/sprPlayer.png', {
      frameWidth: 16,
      frameHeight: 16,
    });

    this.load.audio('sndExplode0', '..src/assets/sndExplode0.wav');
    this.load.audio('sndExplode1', '..src/assets/sndExplode1.wav');
    this.load.audio('sndLaser', '..src/assets/sndLaser.wav');
  }

  create() {
    this.player = new Player(
      this,
      this.game.config.width * 0.5,
      this.game.config.height * 0.5,
      'sprPlayer',
    );

    this.anims.create({
      key: 'sprEnemy0',
      frames: this.anims.generateFrameNumbers('sprEnemy0'),
      frameRate: 20,
      repeat: -1,
    });

    this.anims.create({
      key: 'sprEnemy2',
      frames: this.anims.generateFrameNumbers('sprEnemy2'),
      frameRate: 20,
      repeat: -1,
    });

    this.anims.create({
      key: 'sprExplosion',
      frames: this.anims.generateFrameNumbers('sprExplosion'),
      frameRate: 20,
      repeat: 0,
    });

    this.anims.create({
      key: 'sprPlayer',
      frames: this.anims.generateFrameNumbers('sprPlayer'),
      frameRate: 20,
      repeat: -1,
    });

    this.sfx = {
      explosions: [
        this.sound.add('sndExplode0'),
        this.sound.add('sndExplode1'),
      ],
      laser: this.sound.add('sndLaser'),
    };
  }
}