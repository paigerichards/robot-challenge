// initialise game
var model = {
    robot: null,
    init: {
        x: 0, // where the robot will be placed
        y: 0,
        f: "east" // where the robot will face
    }
};
var controls = {
    init: function () {
        model.robot = model.init;
        // Views
        input.init();
        report.init();
        axisTable.init();
    },
    getRobot: function () {
        return model.robot;
    },
    setRobot: function (robot) {
        model.robot = robot;
    },
    place: function () {

    },
    move: function () {

   },
    left: function () {
      this.rotate(false);
    },
    right: function () {
      this.rotate(true); // according to docs needed as otherwise go anit-cloc. Need to test
    },
    report: function () {

    },
    printErrors: function (error) {
        report.renderErrors(error);
    },
};

var input = {
  // init user input
  init: function () {
    // need test
      this.allowedInput = [ "left", "right", "move", "place","report"];

        this.input = document.getElementById('command');


        this.render();
    },
      render: function () {
      this.input.addEventListener('click', function () {
          this.select();
      });
    },
    processCommand: function (value) {
      // need state and variables to pass through

        if ()
        } else {
          // test to be sure
            controls.printErrors("Incorrect command");
        }
    }
  }
};

var axisTable = {
  // init table top
  init: function () {
        this.squareSize = 100; // size of each co-ordinate
        this.maxX = 5; // x total 0,1,2,3,4
        this.maxY = 5;

        this.canvas = document.getElementById("game"); // exporting to element
        this.context = this.canvas.getContext("2d"); //makes 2d canvas eg. axis
        this.renderCanvas();

        this.robotFacing = ['N', 'E', 'S', 'W'];
        this.robotSize = 15;
        this.renderRobot();

    },

    renderTable: function () {
      // render canvas and create breakpoints (where robot cannot go)
    },
    renderRobot: function () {
      // show robot on table
    }
};

var report = {
    // init report
    init: function () {

        this.report = document.getElementById("report");

    },
    renderReport: function () {

        var robot = controls.getRobot();
        //creating data into html
        this.report.innerHTML = '<p>' + 'X: ' + robot.x + '</p>' +
            '<p>' + 'Y: ' + robot.y + '</p>' +
            '<p>' + 'F: ' + robot.f + '</p>';
    },
};

window.onload = function () {
    controls.init();
};
