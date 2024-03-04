class TransitionScreen {
    constructor(game, gameOver, loading) {
        Object.assign(this, { game, gameOver, loading });
        // this.removeFromWorld = false;
        this.elapsed = 0;
        const titlescreen = ASSET_MANAGER.getAsset("./assets/title screen.png");
        const titlecard = ASSET_MANAGER.getAsset("./assets/title.png");
        this.loadingscreen = ASSET_MANAGER.getAsset("./assets/transitionscreen.png");
        this.gameoverscreen = ASSET_MANAGER.getAsset("./assets/defeatscreen.png");

    };

    update() {
        this.elapsed += this.game.clockTick;
        this.titleActive = false;
        if (this.elapsed > 1) {
            // after 2 secs load level but false in transition flag to end transition
            // this.game.camera.loadLevel(this.level, this.x, this.y, false, this.gameOver);
            this.game.camera.loadGame(false, false, false);
        }
    };

    draw(ctx) {

        ctx.font = PARAMS.BLOCKWIDTH / 2 + 'px "Press Start 2P"';
        ctx.fillStyle = "White";

        if (this.loading) {
            ctx.drawImage(this.loadingscreen, 0, 0, PARAMS.CANVAS_WIDTH, PARAMS.CANVAS_HEIGHT);
        }

        if (this.gameOver) {
            ctx.drawImage(this.gameoverscreen, 0, 0, PARAMS.CANVAS_WIDTH, PARAMS.CANVAS_HEIGHT);
        }
    };

    // drawMinimap() {

    // };
};