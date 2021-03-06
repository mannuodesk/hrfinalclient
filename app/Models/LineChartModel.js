"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by Ideofuzion on 8/4/2016.
 */
var Serializable = (function () {
    function Serializable() {
    }
    Serializable.prototype.fillFromJSON = function (json) {
        var jsonObj = JSON.parse(json).array.forEach(function (element) {
            console.log(element);
        });
        for (var propName in jsonObj) {
            this[propName] = jsonObj[propName];
        }
    };
    return Serializable;
}());
exports.Serializable = Serializable;
var LineChartModel = (function (_super) {
    __extends(LineChartModel, _super);
    function LineChartModel() {
        _super.apply(this, arguments);
    }
    return LineChartModel;
}(Serializable));
exports.LineChartModel = LineChartModel;
//# sourceMappingURL=LineChartModel.js.map