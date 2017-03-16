"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
var SpinnerService = (function () {
    function SpinnerService() {
        this.spinning = false;
        this.spinArray = new Array();
    }
    SpinnerService.prototype.getSpinner = function () {
        var _this = this;
        this.spinnerObservable = new Observable_1.Observable(function (observer) {
            _this.spinnerObserver = observer;
        }).share();
        return this.spinnerObservable;
    };
    SpinnerService.prototype.spin = function (spinText) {
        if (!spinText)
            return;
        if (this.spinArray.indexOf(spinText) === -1) {
            this.spinArray.push(spinText);
        }
        this.spinning = true;
    };
    SpinnerService.prototype.stop = function (spinText) {
        if (!spinText)
            return;
        var index = this.spinArray.indexOf(spinText);
        if (index > -1) {
            this.spinArray.splice(index, 1);
        }
        if (this.spinArray.length === 0) {
            this.spinning = false;
        }
    };
    return SpinnerService;
}());
SpinnerService = __decorate([
    core_1.Injectable()
], SpinnerService);
exports.SpinnerService = SpinnerService;
// https://material.angular.io/components/component/progress-spinner
// usSpinnerService.spin('deleteSpinner');
// usSpinnerService.stop('deleteSpinner');
