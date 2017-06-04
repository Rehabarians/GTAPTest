"use strict";
var timers = [];
API.onUpdate.connect(function () {
    if (timers.length < 1) {
        return;
    }
    for (var i = 0; i < timers.length; i++) {
        timers[i].run();
    }
});
/**
 * Create a new timer. Milliseconds, what function to run.
 * Ex. newTimer(5000, resource.Timer.newTimer)
 * Remember to start your timer with 'instance.Running = true'
 */
function newTimer(milliseconds, whatToRun) {
    let timer = new Timer(milliseconds, whatToRun);
    return timer;
}
class Timer {
    constructor(milliseconds, whatToRun) {
        let date = new Date().getTime();
        this._increment = milliseconds;
        this._start = date;
        this._when = date + milliseconds;
        this._function = whatToRun;
        this._isRunning = false;
        this._runOnce = true;
        this._args = [];
        timers.push(this);
    }
    /**
     * Used to run the timer instance. Don't call this unless you know what you're doing.
     */
    run() {
        if (!this._isRunning) {
            return;
        }
        if (new Date().getTime() > this._when) {
            // Check if it should run once or just keep running.
            if (this._runOnce) {
                this._isRunning = false;
                this.removeFromArray();
            }
            else {
                this._when = new Date().getTime() + this._increment;
            }
            // Run our function.
            if (Array.isArray(this._args)) {
                this._function(this._args);
            }
            else {
                this._function();
            }
        }
    }
    /** Remove our timer instance from the array. */
    removeFromArray() {
        let index = null;
        for (let i = 0; i < timers.length; i++) {
            if (timers[i] === this) {
                index = i;
                break;
            }
        }
        // Remove.
        if (index !== null) {
            timers.splice(index, 1);
        }
    }
    /** Turn the timer on or off. */
    set Running(value) {
        // Remove from array if it's already running.
        if (this._isRunning && !value) {
            this.removeFromArray();
        }
        this._isRunning = value;
    }
    /** Should this run once or multiple times over and over again? */
    set RunOnce(value) {
        this._runOnce = value;
    }
    set Args(value) {
        if (!Array.isArray(value)) {
            return;
        }
        this._args = value;
    }
}
