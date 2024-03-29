class levelFunctions {
    constructor() {}

    buildFloor(theType, theStartX, theLength, theLevel, theArray) {
        
        // if(PARAMS.DEBUG) console.log(theType);

        if (theType == '0') {
            for (var i = 0; i < theLength; i++) {
                theArray.push(new GrassTile(this.gameEngine, theStartX + i, theLevel));
            };
        } else if (theType == '1') {
            for (var i = 0; i < theLength; i++) {
                theArray.push(new StoneTile(this.gameEngine, theStartX + i, theLevel));
            }
        } else if (theType == '2') {
            for (var i = 0; i < theLength; i++) {
                theArray.push(new DirtTile(this.gameEngine, theStartX + i, theLevel));
            }
        } else {
            for (var i = 0; i < theLength; i++) {
                theArray.push(new DevTile(this.gameEngine, theStartX + i, theLevel));
            }
        };
    };

    killFloor(theStartX, theLength, theArray) {
        for (var i = 0; i < theLength; i++) {
            theArray.push(new KillBarrier(this.gameEngine, theStartX + i, 16));
        };
    }

    invisibleWall(theStartX, theArray) {
        for (var i = 0; i < 15; i++) {
            theArray.push(new InvWallTile(this.gameEngine, theStartX, i));
        };
    };

}

class levelOne {
    constructor(theGame, thePlayer) {
        this.functions = new levelFunctions;
        this.assets = [];
        this.music = "./assets/music/lvl1.mp3";
        this.build(theGame, thePlayer);
    }

    build(theGame, thePlayer) {
        theGame.camera.x = 0;     // reset camera 

        this.assets.push(new skelly(theGame, 500, 420, ASSET_MANAGER.getAsset("./assets/Skeleton_spritesheet.png")));
        this.assets.push(new skelly(theGame, 600, 190, ASSET_MANAGER.getAsset("./assets/Skeleton_spritesheet.png")));
        this.assets.push(new skelly(theGame, 1400, 420, ASSET_MANAGER.getAsset("./assets/Skeleton_spritesheet.png")));
        
        console.log("PLAYER: " + thePlayer);
        this.assets.push(thePlayer);

        // Types: 0 - Grass | 1 - Stone | 2 - Dirt | Any Other Int - Dev
        // Second argument is the X start position
        // Third argument is the total length in blocks
        // Fourth argument is the Y level
        // Fifth argument is the array to store assets
        this.functions.buildFloor(0, 0, 13, 11, this.assets);
        this.functions.buildFloor(2, 1, 9, 12, this.assets);
        this.functions.buildFloor(2, 2, 7, 13, this.assets);

        this.functions.buildFloor(0, 9, 5, 6, this.assets);

        this.functions.buildFloor(0, 21, 2, 7, this.assets);
        this.assets.push(new DirtTile(theGame, 21, 8));
        this.assets.push(new DirtTile(theGame, 11, 7));

        // middle spire
        this.functions.buildFloor(2, 23, 9, 13, this.assets);
        this.functions.buildFloor(2, 24, 7, 12, this.assets);
        this.functions.buildFloor(2, 25, 3, 11, this.assets);
        this.functions.buildFloor(0, 28, 3, 11, this.assets);
        this.functions.buildFloor(2, 25, 2, 10, this.assets);
        this.functions.buildFloor(2, 25, 2, 9, this.assets);
        this.functions.buildFloor(2, 25, 2, 8, this.assets);
        this.assets.push(new GrassTile(theGame, 23, 12));
        this.assets.push(new GrassTile(theGame, 24, 11));
        this.assets.push(new GrassTile(theGame, 25, 6));
        this.assets.push(new DirtTile(theGame, 25, 7));
        this.assets.push(new GrassTile(theGame, 26, 7));
        this.assets.push(new GrassTile(theGame, 27, 10));
        this.assets.push(new GrassTile(theGame, 31, 12));
        
        // Floating chest island
        this.functions.buildFloor(0, 31, 4, 5, this.assets);
        this.functions.buildFloor(2, 32, 3, 6, this.assets);
        this.assets.push(new DirtTile(theGame, 33, 7));

        this.functions.buildFloor(2, 37, 4, 13, this.assets);
        this.functions.buildFloor(2, 38, 2, 12, this.assets);
        this.functions.buildFloor(0, 38, 2, 11, this.assets);
        this.assets.push(new GrassTile(theGame, 37, 12));
        this.assets.push(new GrassTile(theGame, 40, 12));
        this.functions.buildFloor(0, 41, 2, 10, this.assets);

        this.functions.buildFloor(2, 45, 11, 13, this.assets);
        this.functions.buildFloor(2, 46, 10, 12, this.assets);
        this.functions.buildFloor(2, 47, 10, 11, this.assets);
        this.functions.buildFloor(2, 47, 12, 10, this.assets);
        this.functions.buildFloor(2, 55, 3, 9, this.assets);
        this.functions.buildFloor(0, 55, 3, 8, this.assets);
        this.functions.buildFloor(0, 47, 8, 9, this.assets);
        this.assets.push(new GrassTile(theGame, 45, 12));
        this.assets.push(new GrassTile(theGame, 46, 11));
        this.assets.push(new GrassTile(theGame, 58, 9));

        // Invisible wall to left of player start
        this.functions.invisibleWall(-1, this.assets);
        this.functions.invisibleWall(61, this.assets);
        this.functions.killFloor(0, 60, this.assets);

        this.assets.push(new GrassTile(theGame, 17, 9));
        this.assets.push(new GrassTile(theGame, 16, 10));
        this.assets.push(new DirtTile(theGame, 17, 10));
        this.assets.push(new GrassTile(theGame, 18, 9));
        this.assets.push(new DirtTile(theGame, 18, 10));
        
        this.functions.buildFloor(0, -11, 6, 6, this.assets);
        this.functions.buildFloor(2, -11, 4, 7, this.assets);
        this.functions.buildFloor(2, -11, 3, 8, this.assets);
        this.assets.push(new DirtTile(theGame, -11, 9));
        
        // items
        this.assets.push(new Chest(theGame, 11, 5));
        this.assets.push(new Chest(theGame, 32, 4));
        this.assets.push(new NextLevelDoor(theGame, 52, 7));

        // Foliage
        this.assets.push(new Bush(theGame, -8, 5));
        this.assets.push(new Bush(theGame, 9, 10));
        this.assets.push(new Bush(theGame, 32, 4));
        this.assets.push(new Bush(theGame, 17, 8));
        this.assets.push(new Bush(theGame, 41, 9));
        this.assets.push(new Bush(theGame, 48, 8));
        this.assets.push(new Tree(theGame, -10, 2));
        this.assets.push(new Tree(theGame, 5, 7));
        this.assets.push(new Tree(theGame, 0, 7));
        this.assets.push(new Tree(theGame, 9, 2));
        this.assets.push(new Tree(theGame, 28, 7));
        this.assets.push(new Tree(theGame, 49, 5));
        this.assets.push(new Tree(theGame, 55, 4));


        // Draw Background last
        this.assets.push(new Background_Day(theGame, 260));

    }

    getAssets() {
        
        return this.assets;
    }

}

// not quite different enough from level one, it's currently a placeholder
class levelTwo {
    constructor(theGame, thePlayer) {
        this.functions = new levelFunctions;
        this.assets = [];
        this.music = "./assets/music/lvl2.mp3";
        this.build(theGame, thePlayer);
    }

    build(theGame, thePlayer) {
        this.assets.push(new darkness(theGame));

        this.assets.push(new skelly(theGame, 960, 420, ASSET_MANAGER.getAsset("./assets/Skeleton_spritesheet.png")));
        this.assets.push(new SpecterKnight(theGame, 300, 100, ASSET_MANAGER.getAsset("./assets/specter knight.png")));
        this.assets.push(new SpecterKnight(theGame, 900, 300, ASSET_MANAGER.getAsset("./assets/specter knight.png")));
        this.assets.push(new SpecterKnight(theGame, 1500, 150, ASSET_MANAGER.getAsset("./assets/specter knight.png")));
        this.assets.push(new SpecterKnight(theGame, 2600, 190, ASSET_MANAGER.getAsset("./assets/specter knight.png")));
       
        this.assets.push(thePlayer);

        this.functions.killFloor(10, 80, this.assets);

        // Types: 0 - Grass | 1 - Stone | 2 - Dirt | Any Other Int - Dev
        // Second argument is the X start position
        // Third argument is the total length in blocks
        // Fourth argument is the Y level
        // Fifth argument is the array to store assets
        this.functions.buildFloor(1, -5, 11, 11, this.assets);
        this.functions.buildFloor(1, -6, 15, 12, this.assets);
        this.functions.buildFloor(1, -6, 16, 13, this.assets);

        this.functions.buildFloor(1, 12, 13, 11, this.assets);
        this.functions.buildFloor(1, 14, 9, 12, this.assets);
        this.functions.buildFloor(1, 15, 7, 13, this.assets);

        this.functions.buildFloor(1, 30, 3, 10, this.assets);
        this.assets.push(new StoneTile(theGame, 31, 11));
        this.functions.buildFloor(1, 31, 2, 12, this.assets);
        this.functions.buildFloor(1, 30, 3, 13, this.assets);
        
        this.assets.push(new StoneTile(theGame, 35, 8));
        this.assets.push(new StoneTile(theGame, 35, 9));
        this.assets.push(new StoneTile(theGame, 35, 10));
        this.assets.push(new StoneTile(theGame, 35, 11));
        this.assets.push(new StoneTile(theGame, 35, 12));
        this.assets.push(new StoneTile(theGame, 35, 13));
        this.assets.push(new StoneTile(theGame, 36, 12));
        this.assets.push(new StoneTile(theGame, 36, 13));
        
        this.assets.push(new StoneTile(theGame, 43, 10));
        this.assets.push(new StoneTile(theGame, 44, 10));
        this.assets.push(new StoneTile(theGame, 43, 11));
        this.assets.push(new StoneTile(theGame, 44, 10));
        this.assets.push(new StoneTile(theGame, 45, 10));
        this.assets.push(new StoneTile(theGame, 44, 11));
        this.assets.push(new StoneTile(theGame, 43, 12));
        this.assets.push(new StoneTile(theGame, 43, 13));

        this.functions.invisibleWall(-1, this.assets);
        
        this.assets.push(new StoneTile(theGame, 15, 10));
        this.assets.push(new StoneTile(theGame, 16, 10));
        this.functions.buildFloor(1, 0, 80, 0, this.assets);
        this.functions.buildFloor(1, -11, 5, 0, this.assets);
        this.functions.buildFloor(1, -11, 4, 1, this.assets);
        this.functions.buildFloor(1, -11, 2, 2, this.assets);
        this.functions.buildFloor(1, -1, 6, 1, this.assets);
        this.functions.buildFloor(1, -3, 4, 2, this.assets);
        this.functions.buildFloor(1, 12, 4, 1, this.assets);
        this.functions.buildFloor(1, 23, 9, 1, this.assets);
        this.functions.buildFloor(1, 25, 3, 2, this.assets);

        this.assets.push(new StoneTile(theGame, 10, 1));
        this.assets.push(new StoneTile(theGame, 11, 1));
        this.assets.push(new StoneTile(theGame, 11, 2));
        this.assets.push(new StoneTile(theGame, 11, 3));

        // items
        this.assets.push(new Chest(theGame, 13, 10));
        this.assets.push(new Chest(theGame, 43, 9));
        this.assets.push(new NextLevelDoor(theGame, 45, 8));
        
        // Draw Background last
        this.assets.push(new Background_Cave(theGame, 260));

    }

    getAssets() {
        return this.assets;
    }
}

//boss level in progres... O_O
class bossLevel {
    constructor(theGame, thePlayer) {
        this.functions = new levelFunctions;
        this.music = "./assets/music/bosslvl.mp3";
        this.assets = [];
        this.build(theGame, thePlayer);
    }

    build(theGame, thePlayer) {
        //lighting effect 
        this.assets.push(new darkness(theGame));

        this.assets.push(new SpecterKnight(theGame, -600, 200, ASSET_MANAGER.getAsset("./assets/specter knight.png")));

        // this.assets.push(new SpecterKnight(theGame, 1000, 0, ASSET_MANAGER.getAsset("./assets/specter knight.png")));
        // this.assets.push(new SpecterKnight(theGame, 1700, 50, ASSET_MANAGER.getAsset("./assets/specter knight.png")));
        this.assets.push(new SpecterBoss(theGame, 500, -10, ASSET_MANAGER.getAsset("./assets/specter boss.png")));
        // this.assets.push(new SpecterBoss(theGame, 2900, 0, ASSET_MANAGER.getAsset("./assets/specter boss.png")));
        this.assets.push(new skelly(theGame, 800, 430, ASSET_MANAGER.getAsset("./assets/Skeleton_spritesheet.png")));
        // thePlayer.x = 0;
        // thePlayer.y = 0;
        this.assets.push(thePlayer);
        // this.assets.push(new darkness(theGame));

        // Types: 0 - Grass | 1 - Stone | 2 - Dirt | Any Other Int - Dev
        // Second argument is the X start position
        // Third argument is the total length in blocks
        // Fourth argument is the Y level
        // Fifth argument is the array to store assets

        this.functions.invisibleWall(-20, this.assets);
        this.functions.killFloor(13, 100, this.assets);
        //decor floor
        this.functions.buildFloor(1, 0, 9, 12, this.assets);
        this.functions.buildFloor(1, 0, 7, 13, this.assets);
        
        //1st area (stretches to 2nd area)
        this.functions.buildFloor(1, -11, 50, 11, this.assets);
        //tester arena
        this.assets.push(new Chest(theGame, -10, 10));
        this.assets.push(new StoneTile(theGame, -11, 6));
        this.assets.push(new StoneTile(theGame, -11, 8));
        this.assets.push(new StoneTile(theGame, -11, 9));
        this.assets.push(new StoneTile(theGame, -11, 10));

        //start wall
        this.assets.push(new StoneTile(theGame, 0, 3));
        this.assets.push(new StoneTile(theGame, 0, 4));
        this.assets.push(new StoneTile(theGame, 0, 5));
        this.assets.push(new StoneTile(theGame, 0, 6));        
        // this.assets.push(new StoneTile(theGame, 0, 7));
        this.assets.push(new StoneTile(theGame, 0, 10));
        
        //1st stairs
        this.assets.push(new Chest(theGame, 10, 7));
        this.functions.buildFloor(1, 8, 4, 8, this.assets);
        this.functions.buildFloor(1, 7, 4, 9, this.assets);
        this.assets.push(new StoneTile(theGame, 6, 10));
        this.assets.push(new StoneTile(theGame, 8, 10));
        this.assets.push(new StoneTile(theGame, 10, 10));
        
        //1st top wall
        this.functions.buildFloor(1, 19, 5, 0, this.assets);
        this.assets.push(new StoneTile(theGame, 20, 0));
        this.assets.push(new StoneTile(theGame, 20, 1));
        this.assets.push(new StoneTile(theGame, 20, 2));
        this.assets.push(new StoneTile(theGame, 20, 3));
        this.assets.push(new StoneTile(theGame, 20, 9));
        //1st bot wall
        // this.assets.push(new StoneTile(theGame, 19, 10));
        this.assets.push(new StoneTile(theGame, 20, 10));
        this.assets.push(new StoneTile(theGame, 21, 10));

        //2nd area
        //floor
        this.functions.buildFloor(1, 30, 10, 9, this.assets);
        this.assets.push(new StoneTile(theGame, 30, 10));
        //hole barrier
        this.assets.push(new StoneTile(theGame, 39, 10));
        this.assets.push(new StoneTile(theGame, 39, 11));
        this.assets.push(new StoneTile(theGame, 39, 12));
        this.assets.push(new StoneTile(theGame, 39, 13));
        //hole
        //*imagine putting a hole here
        //other side of the hole
        this.functions.buildFloor(1, 45, 5, 9, this.assets);
        //hole barrier
        this.assets.push(new StoneTile(theGame, 45, 10));
        this.assets.push(new StoneTile(theGame, 45, 11));
        this.assets.push(new StoneTile(theGame, 45, 12));
        this.assets.push(new StoneTile(theGame, 45, 13));

        //*ceiling (is also a floor and sneaks the door)
        this.assets.push(new NextLevelDoor(theGame, 31, 1));
        this.assets.push(new StoneTile(theGame, 30, 1));
        this.assets.push(new StoneTile(theGame, 30, 2));
        this.functions.buildFloor(1, 30, 8, 3, this.assets);
        this.assets.push(new StoneTile(theGame, 38, 4));

        this.functions.buildFloor(1, 50, 6, 3, this.assets);
        this.assets.push(new StoneTile(theGame, 56, 4));
        this.assets.push(new StoneTile(theGame, 57, 5));
        this.assets.push(new StoneTile(theGame, 58, 6));
        this.assets.push(new StoneTile(theGame, 59, 7));
        //3rd area
        //floor
        this.assets.push(new StoneTile(theGame, 49, 10));
        this.assets.push(new StoneTile(theGame, 49, 11));
        this.functions.buildFloor(1, 50, 15, 12, this.assets);
        this.functions.buildFloor(1, 62, 10, 10, this.assets);
        this.functions.buildFloor(1, 65, 4, 8, this.assets);//table...?
        this.assets.push(new Chest(theGame, 66, 7));

        //backwall
        this.assets.push(new StoneTile(theGame, 72, 5));
        this.assets.push(new StoneTile(theGame, 72, 6));
        this.assets.push(new StoneTile(theGame, 72, 7));
        this.assets.push(new StoneTile(theGame, 72, 8));

        // items
        // this.assets.push(new Chest(theGame, 4, 10));
        // this.assets.push(new darkness(theGame));
        // Draw Background last
        this.assets.push(new Background_Cave(theGame, 260));
    }

    assetsToString() {
        console.log("assets");
        let held = "";
        for (let i = 0; i < this.assets.length; i++) {
            let item = this.assets[i];
            if(item.BB && item.BB.name) held = held + ", " + item.BB.name; 
            
        }
        console.log(held);
    }

    getAssets() {
        // this.assetsToString();
        return this.assets;
    }
}