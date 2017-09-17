// initialise game
var model = {
    robot: null,
    init: {
        x: 0, // where the robot will be placed
        y: 0,
        f: "north" // facing
    }
};
var controls = {
    init: function () {
        model.robot = model.init;
        // Veiws
        input.init();
        report.init();
        tableTop.init();
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

    },
    right: function () {

    },
    report: function () {

    },
    printErrors: function () {

    }
};

var input = {
  // init user input
};

var tableTop = {
  // init table top
    },

    renderTable: function () {
      // render canvas and create breakpoints (where robot cannot go)
    },
    renderRobot: function () {
      // show robot
};

var report = {
    // init report

    },
    renderReport: function () {
      // render back where robot is positioned
    },
};

window.onload = function () {
    controls.init();
};
