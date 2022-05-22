function make_tree_at (num: number, num2: number) {
    if (tiles.tileImageAtLocation(tiles.getTileLocation(num2 - 1, num)) != assets.tile`myTile4` || tiles.tileImageAtLocation(tiles.getTileLocation(num2 + 1, num)) != assets.tile`myTile4`) {
        num1 = num
        num2 = num2
        for (let index = 0; index < 4; index++) {
            tiles.setTileAt(tiles.getTileLocation(num2, num1), assets.tile`myTile2`)
            num1 += -1
        }
        tiles.setTileAt(tiles.getTileLocation(num2, num1), assets.tile`myTile3`)
        tiles.setTileAt(tiles.getTileLocation(num2 - 1, num1), assets.tile`myTile3`)
        tiles.setTileAt(tiles.getTileLocation(num2 + 1, num1), assets.tile`myTile3`)
        tiles.setTileAt(tiles.getTileLocation(num2, num1 - 1), assets.tile`myTile3`)
    }
}
function start_day_cycle () {
    scene.setBackgroundImage(assets.image`myImage0`)
    pause(60000)
    scene.setBackgroundImage(assets.image`myImage1`)
    pause(60000)
    scene.setBackgroundImage(assets.image`myImage2`)
    pause(60000)
    scene.setBackgroundImage(assets.image`myImage3`)
    pause(60000)
    scene.setBackgroundImage(assets.image`myImage4`)
    pause(60000)
    scene.setBackgroundImage(assets.image`myImage5`)
    pause(60000)
    scene.setBackgroundImage(assets.image`myImage6`)
    pause(60000)
    scene.setBackgroundImage(assets.image`myImage7`)
    pause(60000)
    scene.setBackgroundImage(assets.image`myImage8`)
    pause(60000)
    start_day_cycle()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -150
})
function make_terrian (num: number, num2: number) {
    count = num
    count2 = num2
    if (Math.percentChance(20)) {
        make_tree_at(count, count2 + 1)
    }
    if (tiles.tileImageAtLocation(tiles.getTileLocation(num2, num - 1)) != assets.tile`myTile4` || tiles.tileImageAtLocation(tiles.getTileLocation(num2, num - 1)) != assets.tile`myTile4`) {
        tiles.setWallAt(tiles.getTileLocation(count2, count), true)
        tiles.setTileAt(tiles.getTileLocation(count2, count), assets.tile`myTile0`)
    } else {
        if (Math.percentChance(49)) {
            tiles.setTileAt(tiles.getTileLocation(count2, count), assets.tile`myTile9`)
            tiles.setWallAt(tiles.getTileLocation(count2, count), true)
        } else {
            tiles.setTileAt(tiles.getTileLocation(count2, count), assets.tile`myTile1`)
            tiles.setWallAt(tiles.getTileLocation(count2, count), true)
        }
    }
    count += 1
    for (let index = 0; index < randint(3, 5); index++) {
        tiles.setTileAt(tiles.getTileLocation(count2, count), assets.tile`myTile`)
        tiles.setWallAt(tiles.getTileLocation(count2, count), true)
        count += 1
    }
    for (let index = 0; index < 45; index++) {
        tiles.setTileAt(tiles.getTileLocation(count2, count), assets.tile`myTile1`)
        tiles.setWallAt(tiles.getTileLocation(count2, count), true)
        count += 1
    }
}
controller.B.onEvent(ControllerButtonEvent.Repeated, function () {
    if (test1 == 0) {
        if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile1`)) {
            block_destroy_speed = 1000
        } else {
            block_destroy_speed = 100
        }
        if (test1 == 0) {
            tileUtil.coverTile(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile5`)
            pause(block_destroy_speed)
            tileUtil.coverTile(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile6`)
            pause(block_destroy_speed)
            tileUtil.coverTile(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile8`)
        }
        pause(block_destroy_speed)
        tileUtil.coverTile(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom), assets.tile`myTile7`)
        tiles.setTileAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom), assets.tile`transparency16`)
        tiles.setWallAt(mySprite.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom), false)
        dirt += 1
    }
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    test1 += 1
    pause(block_destroy_speed * 3)
    test1 += -1
})
let dirt = 0
let block_destroy_speed = 0
let test1 = 0
let count2 = 0
let count = 0
let num2 = 0
let num1 = 0
let y = 0
let mySprite: Sprite = null
effects.clouds.startScreenEffect()
mySprite = sprites.create(assets.image`myImage`, SpriteKind.Player)
mySprite.ay = 500
controller.moveSprite(mySprite, 70, 0)
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level1`)
let x = 6
for (let index = 0; index < 100; index++) {
    make_terrian(x, y)
    y += 1
    x += randint(-1, 1)
}
start_day_cycle()
