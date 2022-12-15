scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles0, function (sprite, location) {
    game.over(false)
})
info.onCountdownEnd(function () {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileDarkGrass2, function (sprite, location) {
    game.over(true)
})
let mySprite = Render.getRenderSpriteVariable()
tiles.setCurrentTilemap(tilemap`maze`)
tiles.placeOnTile(mySprite, tiles.getTileLocation(28, 28))
info.startCountdown(180)
