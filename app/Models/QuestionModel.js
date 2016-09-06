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
var QuestionModel = (function (_super) {
    __extends(QuestionModel, _super);
    function QuestionModel(QuestionHeading, Question, id) {
        _super.call(this);
        this.questionHeading = QuestionHeading;
        this.questionText = Question;
        this._id = id;
    }
    QuestionModel.prototype.GetQuestionHeading = function () { return this.questionHeading; };
    QuestionModel.prototype.GetQuestion = function () { return this.questionText; };
    QuestionModel.prototype.GetId = function () { return this._id; };
    QuestionModel.prototype.SetQuestionHeading = function (val) {
        this.questionHeading = val;
    };
    QuestionModel.prototype.SetQuestion = function (val) {
        this.questionText = val;
    };
    return QuestionModel;
}(Serializable));
exports.QuestionModel = QuestionModel;
//# sourceMappingURL=QuestionModel.js.map