namespace SpriteKind {
    export const Main_Character = SpriteKind.create()
    export const Sunny = SpriteKind.create()
    export const Stan = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Protag,
    assets.animation`protag up and down`,
    300,
    true
    )
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
	
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Stan, function (sprite3, otherSprite3) {
    if (controller.A.isPressed()) {
        Stan_the_Ninja.sayText("Tagon went into the mines and hasn't come back yet.", 20000, false)
        pause(5000)
        Stan_the_Ninja.sayText("I need you to go look for him.", 10000, false)
        pause(5000)
        music.setVolume(185)
        music.play(music.createSoundEffect(WaveShape.Triangle, 1, 2802, 255, 0, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        game.showLongText("New Objective: Find Tagon in the mines", DialogLayout.Bottom)
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    music.setVolume(255)
    music.play(music.createSoundEffect(WaveShape.Square, 188, 95, 255, 17, 300, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    pause(20000)
})
controller.up.onEvent(ControllerButtonEvent.Repeated, function () {
    if (controller.A.isPressed()) {
        Projectile_5 = sprites.createProjectileFromSprite(assets.image`Arrow up`, Protag, 0, -150)
        pause(200)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.setVolume(200)
    music.play(music.createSoundEffect(WaveShape.Square, 280, 327, 255, 255, 200, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    projectile = sprites.createProjectileFromSprite(assets.image`arrow`, Protag, 105, 0)
    pause(100)
    animation.runImageAnimation(
    projectile,
    assets.animation`arrow power`,
    100,
    false
    )
    projectile.setVelocity(150, 0)
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, Protag)
})
controller.right.onEvent(ControllerButtonEvent.Repeated, function () {
    if (controller.A.isPressed()) {
        Projectile_3 = sprites.createProjectileFromSprite(assets.image`Arrow right`, Protag, 150, 0)
        pause(200)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Protag,
    assets.animation`protag left`,
    300,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, Protag)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, Protag)
})
info.onCountdownEnd(function () {
    game.showLongText("Press A to start", DialogLayout.Center)
    game.setGameOverEffect(true, effects.confetti)
    Protag = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . f . f . f . . . . . . 
        . . . . f . . f . . f . . . . . 
        . . . . f . . f . . f . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . f . f . . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(Protag)
    info.setLife(5)
    tiles.setCurrentTilemap(tilemap`level1`)
    scene.cameraFollowSprite(Protag)
    Chromium = sprites.create(assets.image`Chromium`, SpriteKind.Enemy)
    Chromium.setPosition(141, 57)
    Chromium.follow(Protag, 45)
    animation.runImageAnimation(
    Chromium,
    assets.animation`CHrome`,
    150,
    false
    )
    Sunny_The_Paper_Girl = sprites.create(assets.image`Sunny`, SpriteKind.Sunny)
    Sunny_The_Paper_Girl.follow(Protag, 10)
    Sunny_The_Paper_Girl.setPosition(123, 15)
    music.setVolume(181)
    music.play(music.createSong(assets.song`EPIC 1st`), music.PlaybackMode.LoopingInBackground)
})
info.onScore(10, function () {
    music.stopAllSounds()
    sprites.destroy(Chromium, effects.disintegrate, 500)
    pause(500)
    game.showLongText("LAVATORE", DialogLayout.Full)
    music.play(music.createSong(hex`0004010408020404001c00100500640000041e000004000000000000000000000000000a04000424000000040001220c001000012414001800012518001c00012420002400012028002c00012205001c000f0a006400f4010a000004000000000000000000000000000000000224000000040001220c001000012414001800012518001c00012420002400012028002c00012207001c00020a006400f40164000004000000000000000000000000000000000324000000040001220c001000012414001800012518001c00012420002400012028002c00012208001c000e050046006603320000040a002d000000640014000132000201000224000000040001220c001000012414001800012518001c00012420002400012028002c000122`), music.PlaybackMode.UntilDone)
    game.showLongText("Objective: Find and Recruit Stan", DialogLayout.Full)
    tiles.setCurrentTilemap(tilemap`Stan House`)
    Stan_the_Ninja = sprites.create(assets.image`Stan`, SpriteKind.Stan)
    Stan_the_Ninja.setPosition(690, 45)
    animation.runImageAnimation(
    Stan_the_Ninja,
    assets.animation`Stan flap`,
    100,
    true
    )
    music.play(music.createSong(assets.song`Part1`), music.PlaybackMode.LoopingInBackground)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Protag,
    assets.animation`protag right`,
    300,
    true
    )
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, Protag)
})
controller.down.onEvent(ControllerButtonEvent.Repeated, function () {
    if (controller.A.isPressed()) {
        Projectile_2 = sprites.createProjectileFromSprite(assets.image`Arrow down`, Protag, 0, 150)
        pause(200)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Sunny, function (sprite2, otherSprite) {
    info.changeLifeBy(1)
    music.setVolume(255)
    music.play(music.createSoundEffect(WaveShape.Square, 379, 1449, 255, 0, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    pause(15000)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Protag,
    assets.animation`protag up and down`,
    300,
    true
    )
})
info.onLifeZero(function () {
    info.setScore(0)
    sprites.destroy(Chromium)
    music.stopAllSounds()
    scene.setBackgroundImage(assets.image`darkness`)
    game.showLongText("You Have Fallen", DialogLayout.Full)
    pause(2000)
    music.play(music.melodyPlayable(music.spooky), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite4, otherSprite4) {
    info.changeScoreBy(1)
    pause(30)
    animation.runImageAnimation(
    Chromium,
    assets.animation`Attack chrome`,
    100,
    false
    )
    music.play(music.createSoundEffect(WaveShape.Noise, 2917, 1391, 245, 68, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
    pause(1000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite22, otherSprite2) {
    info.changeLifeBy(-1)
    music.setVolume(218)
    music.play(music.createSoundEffect(WaveShape.Noise, 1113, 188, 255, 208, 350, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    pause(1000)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Change Map Right`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`Cave 1`)
})
controller.left.onEvent(ControllerButtonEvent.Repeated, function () {
    if (controller.A.isPressed()) {
        Projectile_4 = sprites.createProjectileFromSprite(assets.image`Arrow left`, Protag, -150, 0)
        pause(200)
    }
})
let Projectile_4: Sprite = null
let Projectile_2: Sprite = null
let Sunny_The_Paper_Girl: Sprite = null
let Chromium: Sprite = null
let Projectile_3: Sprite = null
let projectile: Sprite = null
let Projectile_5: Sprite = null
let Stan_the_Ninja: Sprite = null
let Protag: Sprite = null
info.startCountdown(8)
scene.setBackgroundImage(assets.image`LAVATORE`)
music.setVolume(129)
music.play(music.createSong(assets.song`Song 1`), music.PlaybackMode.InBackground)
if (controller.B.isPressed()) {
    info.stopCountdown()
    effects.clouds.startScreenEffect(2000)
    music.play(music.stringPlayable("C C C C C C C C ", 120), music.PlaybackMode.LoopingInBackground)
}
