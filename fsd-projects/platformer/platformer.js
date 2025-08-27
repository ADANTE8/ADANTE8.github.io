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


     toggleGrid();
    // TODO 2 - createPlatform(100, 20, 10, 10, "lime"); // bright green for a finished platform
    createPlatform(500, 300, 20, 290) "blue";
    createPlatform(1350, 400, 50, 50, "red");
    createPlatform(100, 20, 10, 10, "lime"); // bright green for a finished platform




    // TODO 3 - createCollectable("steve", 1350, 50);
createCollectable("diamond", 200, 170, 0.5, 0.7);
createCollectable("grace", 100, 170, 0.5, 0.7);
createCollectable("kennedi" 70,120 , 0.5 ,0.70);



    
    // TODO 4 - Create Cannons
    createCannon("top", 400, 1000);
    createCannon("left", 250, 1500);
    createCannon("right", 500, 800);


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
