"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var core_2 = require('@angular/core');
var QuestionModel_1 = require('./../Models/QuestionModel');
var QuestionService_1 = require('./../Services/QuestionService');
var router_1 = require('@angular/router');
var QuestionComponent = (function () {
    function QuestionComponent(_questionService) {
        var _this = this;
        this._questionService = _questionService;
        this.Question = "";
        this.questions = [];
        this._questionService.getQuestions()
            .subscribe(function (a) {
            _this.jqueryfun();
            _this.questions = a;
            console.log(a);
        });
    }
    QuestionComponent.prototype.jqueryfun = function () {
        jQuery("#sortable").sortable({
            start: function (event, ui) {
                console.log(ui);
                jQuery(this).attr('data-previndex', ui.item.context.firstElementChild.id);
            },
            update: function (e, ui) {
                // gets the new and old index then removes the temporary attribute
                var newIndex = ui.item.index();
                var oldIndex = jQuery(this).attr('data-previndex');
                console.log(newIndex, oldIndex);
                jQuery(this).removeAttr('data-previndex');
            }
        });
        jQuery("#sortable").disableSelection();
        jQuery("#sortable li").mousedown(function () {
            jQuery(this).css('cursor', 'grabbing');
        });
        jQuery("#sortable li").mouseup(function () {
            jQuery(this).css('cursor', 'grab');
        });
    };
    QuestionComponent.prototype.onSubmit = function () {
        var _this = this;
        var count = 0;
        if (this.Question == undefined || this.Question == "") {
            count = count + 1;
            var div = document.getElementById("questiondiv");
            div.className += " has-error";
        }
        if (this.QuestionHeading == undefined || this.QuestionHeading == "") {
            count = count + 1;
            var div = document.getElementById("questiontypediv");
            div.className += " has-error";
        }
        if (count == 0) {
            this._questionService.addQuestion(this.QuestionHeading, this.Question).subscribe(function (a) {
                console.log(a);
                _this.QuestionMod = new QuestionModel_1.QuestionModel(_this.QuestionHeading, _this.Question, a.data._id);
                _this.questions.push(_this.QuestionMod);
                _this.populateQuestions();
            });
        }
    };
    QuestionComponent.prototype.populateQuestions = function () {
        var _this = this;
        this._questionService.getQuestions()
            .subscribe(function (a) {
            console.log(a);
            console.log("hmmm");
            _this.questions = a;
        });
    };
    QuestionComponent.prototype.deleteQuestion = function (questionId) {
        var _this = this;
        this._questionService.deleteQuestion(questionId).subscribe(function (a) {
            for (var i = 0; i < _this.questions.length; i++) {
                if (_this.questions[i]._id == questionId) {
                    _this.questions.splice(i);
                    _this.populateQuestions();
                }
            }
        });
    };
    __decorate([
        core_2.Input(), 
        __metadata('design:type', String)
    ], QuestionComponent.prototype, "Question", void 0);
    __decorate([
        core_2.Input(), 
        __metadata('design:type', String)
    ], QuestionComponent.prototype, "QuestionHeading", void 0);
    QuestionComponent = __decorate([
        core_1.Component({
            selector: 'question',
            templateUrl: './../views/Question.html',
            providers: [QuestionService_1.QuestionService],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [QuestionService_1.QuestionService])
    ], QuestionComponent);
    return QuestionComponent;
}());
exports.QuestionComponent = QuestionComponent;
//# sourceMappingURL=question.component.js.map