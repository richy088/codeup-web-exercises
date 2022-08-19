(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2

            return Math.PI * (this.radius * this.radius); // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
            if (doRounding === true) {
                return Math.round(this.getArea());
            } else {
                return this.getArea();
            }

            console.log("Area of a circle with radius: " + this.radius + ", is:  " + this.logInfo(this.radius));
        }
    };


    // log info about the circle
    console.log(circle.logInfo());
    circle.logInfo(false);
    console.log(circle.logInfo(false));
    circle.logInfo(true);
    console.log(circle.logInfo(true));

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
    circle.radius = 5;
    // log info about the circle
    console.log(circle.logInfo());
    circle.logInfo(false);
    console.log(circle.logInfo(false));
    circle.logInfo(true);
    console.log(circle.logInfo(true));
})();

