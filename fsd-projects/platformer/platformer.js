$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(100, 625, 120, 15, "red");
    createPlatform(250, 800, 120, 15, "green");
    createPlatform(400, 600, 120, 15, "blue");
    createPlatform(550, 500, 120, 15, "orange");
    createPlatform(700, 400, 120, 15, "purple");



    // TODO 3 - Create Collectables
    createCollectable("max", 600, 300);
    createCollectable("steve", 400, 400);
    createCollectable("grace", 500, 550);


    
    // TODO 4 - Create Cannons
    createCannon("top", 300, 1000);
    createCannon("left", 400, 1500);
    createCannon("right", 200, 800);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});