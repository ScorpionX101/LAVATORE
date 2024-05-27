@namespace
class SpriteKind:
    Main_Character = SpriteKind.create()
    Sunny = SpriteKind.create()
    Stan = SpriteKind.create()

def on_hit_wall(sprite, location):
    pass
scene.on_hit_wall(SpriteKind.player, on_hit_wall)

def on_up_pressed():
    animation.run_image_animation(Protag,
        assets.animation("""
            protag up and down
        """),
        300,
        False)
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_on_overlap(sprite3, otherSprite3):
    if controller.A.is_pressed():
        Stan_the_Ninja.say_text("Tagon went into the mines and hasn't come back yet.",
            20000,
            False)
        pause(5000)
        Stan_the_Ninja.say_text("I need you to go look for him.", 10000, False)
        pause(5000)
        music.set_volume(185)
        music.play(music.create_sound_effect(WaveShape.TRIANGLE,
                1,
                2802,
                255,
                0,
                150,
                SoundExpressionEffect.NONE,
                InterpolationCurve.LINEAR),
            music.PlaybackMode.UNTIL_DONE)
        game.show_long_text("New Objective: Find Tagon in the mines",
            DialogLayout.BOTTOM)
sprites.on_overlap(SpriteKind.player, SpriteKind.Stan, on_on_overlap)

def on_b_pressed():
    music.set_volume(255)
    music.play(music.create_sound_effect(WaveShape.SQUARE,
            188,
            95,
            255,
            17,
            300,
            SoundExpressionEffect.NONE,
            InterpolationCurve.LINEAR),
        music.PlaybackMode.UNTIL_DONE)
    pause(20000)
controller.B.on_event(ControllerButtonEvent.PRESSED, on_b_pressed)

def on_up_repeated():
    global Projectile_5
    if controller.A.is_pressed():
        Projectile_5 = sprites.create_projectile_from_sprite(assets.image("""
            Arrow up
        """), Protag, 0, -150)
        pause(200)
controller.up.on_event(ControllerButtonEvent.REPEATED, on_up_repeated)

def on_a_pressed():
    global projectile
    music.set_volume(200)
    music.play(music.create_sound_effect(WaveShape.SQUARE,
            280,
            327,
            255,
            255,
            200,
            SoundExpressionEffect.NONE,
            InterpolationCurve.LINEAR),
        music.PlaybackMode.UNTIL_DONE)
    projectile = sprites.create_projectile_from_sprite(assets.image("""
        arrow
    """), Protag, 105, 0)
    pause(100)
    animation.run_image_animation(projectile,
        assets.animation("""
            arrow power
        """),
        100,
        False)
    projectile.set_velocity(150, 0)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_right_repeated():
    global Projectile_3
    if controller.A.is_pressed():
        Projectile_3 = sprites.create_projectile_from_sprite(assets.image("""
            Arrow right
        """), Protag, 150, 0)
        pause(200)
controller.right.on_event(ControllerButtonEvent.REPEATED, on_right_repeated)

def on_left_pressed():
    animation.run_image_animation(Protag,
        assets.animation("""
            protag left
        """),
        300,
        False)
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_countdown_end():
    global Protag, Chromium, Sunny_The_Paper_Girl
    game.show_long_text("Press A to start", DialogLayout.CENTER)
    game.set_game_over_effect(True, effects.confetti)
    Protag = sprites.create(img("""
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
        """),
        SpriteKind.player)
    controller.move_sprite(Protag)
    info.set_life(5)
    tiles.set_current_tilemap(tilemap("""
        level1
    """))
    scene.camera_follow_sprite(Protag)
    Chromium = sprites.create(assets.image("""
        Chromium
    """), SpriteKind.enemy)
    Chromium.set_position(141, 57)
    Chromium.follow(Protag, 45)
    animation.run_image_animation(Chromium, assets.animation("""
        CHrome
    """), 150, False)
    Sunny_The_Paper_Girl = sprites.create(assets.image("""
        Sunny
    """), SpriteKind.Sunny)
    Sunny_The_Paper_Girl.follow(Protag, 10)
    Sunny_The_Paper_Girl.set_position(123, 15)
    music.set_volume(150)
    music.play(music.create_song(assets.song("""
            EPIC 1st
        """)),
        music.PlaybackMode.LOOPING_IN_BACKGROUND)
info.on_countdown_end(on_countdown_end)

def on_on_score():
    global Stan_the_Ninja
    music.stop_all_sounds()
    sprites.destroy(Chromium, effects.disintegrate, 500)
    pause(500)
    game.show_long_text("LAVATORE", DialogLayout.FULL)
    music.play(music.create_song(hex("""
            00780004080200
        """)),
        music.PlaybackMode.UNTIL_DONE)
    game.show_long_text("Objective: Find and Recruit Stan", DialogLayout.FULL)
    tiles.set_current_tilemap(tilemap("""
        Stan House
    """))
    Stan_the_Ninja = sprites.create(assets.image("""
        Stan
    """), SpriteKind.Stan)
    Stan_the_Ninja.set_position(690, 45)
    animation.run_image_animation(Stan_the_Ninja,
        assets.animation("""
            Stan flap
        """),
        100,
        True)
info.on_score(10, on_on_score)

def on_right_pressed():
    animation.run_image_animation(Protag,
        assets.animation("""
            protag right
        """),
        300,
        False)
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_down_repeated():
    global Projectile_2
    if controller.A.is_pressed():
        Projectile_2 = sprites.create_projectile_from_sprite(assets.image("""
            Arrow down
        """), Protag, 0, 150)
        pause(200)
controller.down.on_event(ControllerButtonEvent.REPEATED, on_down_repeated)

def on_on_overlap2(sprite2, otherSprite):
    info.change_life_by(1)
    music.set_volume(255)
    music.play(music.create_sound_effect(WaveShape.SQUARE,
            379,
            1449,
            255,
            0,
            150,
            SoundExpressionEffect.NONE,
            InterpolationCurve.LINEAR),
        music.PlaybackMode.UNTIL_DONE)
    pause(15000)
sprites.on_overlap(SpriteKind.player, SpriteKind.Sunny, on_on_overlap2)

def on_down_pressed():
    animation.run_image_animation(Protag,
        assets.animation("""
            protag up and down
        """),
        300,
        False)
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

def on_life_zero():
    info.set_score(0)
    sprites.destroy(Chromium)
    music.stop_all_sounds()
    scene.set_background_image(assets.image("""
        darkness
    """))
    pause(2000)
    music.play(music.melody_playable(music.spooky),
        music.PlaybackMode.UNTIL_DONE)
info.on_life_zero(on_life_zero)

def on_on_overlap3(sprite4, otherSprite4):
    info.change_score_by(1)
    pause(30)
    animation.run_image_animation(Chromium,
        assets.animation("""
            Attack chrome
        """),
        100,
        False)
    music.play(music.create_sound_effect(WaveShape.NOISE,
            2917,
            1391,
            245,
            68,
            300,
            SoundExpressionEffect.NONE,
            InterpolationCurve.CURVE),
        music.PlaybackMode.UNTIL_DONE)
    pause(1000)
sprites.on_overlap(SpriteKind.projectile, SpriteKind.enemy, on_on_overlap3)

def on_on_overlap4(sprite22, otherSprite2):
    info.change_life_by(-1)
    music.set_volume(218)
    music.play(music.create_sound_effect(WaveShape.NOISE,
            1113,
            188,
            255,
            208,
            350,
            SoundExpressionEffect.NONE,
            InterpolationCurve.LINEAR),
        music.PlaybackMode.UNTIL_DONE)
    pause(1000)
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap4)

def on_left_repeated():
    global Projectile_4
    if controller.A.is_pressed():
        Projectile_4 = sprites.create_projectile_from_sprite(assets.image("""
            Arrow left
        """), Protag, -150, 0)
        pause(200)
controller.left.on_event(ControllerButtonEvent.REPEATED, on_left_repeated)

Projectile_4: Sprite = None
Projectile_2: Sprite = None
Sunny_The_Paper_Girl: Sprite = None
Chromium: Sprite = None
Projectile_3: Sprite = None
projectile: Sprite = None
Projectile_5: Sprite = None
Stan_the_Ninja: Sprite = None
Protag: Sprite = None
info.start_countdown(8)
scene.set_background_image(assets.image("""
    LAVATORE
"""))
music.set_volume(129)
music.play(music.create_song(assets.song("""
        Song 1
    """)),
    music.PlaybackMode.IN_BACKGROUND)

def on_on_update():
    pass
game.on_update(on_on_update)

def on_on_update2():
    pass
game.on_update(on_on_update2)
