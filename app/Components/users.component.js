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
var QuestionService_1 = require('./../Services/QuestionService');
var core_2 = require('@angular/core');
var UsersComponent = (function () {
    function UsersComponent(_questionService) {
        var _this = this;
        this._questionService = _questionService;
        this.tooDate = null;
        this.frommDate = null;
        this.tooTime = null;
        this.frommTime = null;
        this.gender = null;
        this.questions = [];
        this.questionUserId = null;
        this.gradeUser = null;
        this._questionService.getQuestions()
            .subscribe(function (a) {
            _this.questions = a;
        });
        this._questionService.usersPageFiltering(null, null, null, null, null, null, null)
            .subscribe(function (a) {
            _this.renderJQuery();
            _this.usersroot = a;
            _this.uniqueUserCount = _this.usersroot.uniqueUserTotal;
            _this.totalReviews = _this.usersroot.reviewsTotal;
            _this.returnRate = _this.usersroot.returnRate;
            _this.customerVisitsToBranches = _this.usersroot.customerRatings;
            for (var i = 0; i < _this.customerVisitsToBranches.length; i++) {
                _this.dateTime = new Date(_this.customerVisitsToBranches[i].ratingDate);
                _this.customerVisitsToBranches[i].rating = Math.round(_this.customerVisitsToBranches[i].rating);
                _this.dateTime.setMonth(_this.dateTime.getMonth() + 1);
                var tempDate = _this.dateTime.getDate().toString() + "-" + _this.dateTime.getMonth().toString() + "-" + _this.dateTime.getFullYear().toString();
                var time = _this.dateTime.getHours().toString() + ":" + _this.dateTime.getMinutes().toString();
                _this.customerVisitsToBranches[i].vistedDateString = tempDate;
                _this.customerVisitsToBranches[i].vistedTimeString = time;
            }
        });
    }
    UsersComponent.prototype.a = function () {
        alert();
    };
    UsersComponent.prototype.renderJQuery = function () {
        jQuery("#dpd3").datepicker({
            format: 'yyyy-mm-dd'
        });
        jQuery("#dpd4").datepicker({
            format: 'yyyy-mm-dd'
        });
        var time1 = jQuery('#timepicker3').timepicker({
            showMeridian: false
        });
        var time2 = jQuery('#timepicker4').timepicker({
            showMeridian: false
        });
    };
    UsersComponent.prototype.changeRatingBtn = function (value) {
        var btn = document.getElementById('ratingBtn');
        var temp = null;
        if (value == 1) {
            temp = "A";
        }
        if (value == 2) {
            temp = "B";
        }
        if (value == 3) {
            temp = "C";
        }
        if (value == 4) {
            temp = "D";
        }
        if (value != "0") {
            this.gradeUser = temp;
            btn.textContent = temp;
            this.sendCall(this.questionUserId, this.gradeUser, this.tooDate, this.tooTime, this.frommDate, this.frommTime, this.gender);
        }
        else {
            this.gradeUser = null;
            btn.textContent = "All Ratings";
            this.sendCall(this.questionUserId, this.gradeUser, this.tooDate, this.tooTime, this.frommDate, this.frommTime, this.gender);
        }
    };
    UsersComponent.prototype.changeUserQues = function (value) {
        var btn = document.getElementById('userQuesBtn');
        if (value != "0") {
            for (var i = 0; i < this.questions.length; i++) {
                if (value == this.questions[i]._id) {
                    this.questionUserId = this.questions[i]._id;
                    btn.textContent = this.questions[i].questionHeading;
                }
            }
        }
        else {
            this.questionUserId = null;
            btn.textContent = "All Questions";
        }
        this.sendCall(this.questionUserId, this.gradeUser, this.tooDate, this.tooTime, this.frommDate, this.frommTime, this.gender);
    };
    //
    UsersComponent.prototype.toDate = function () {
        console.log(jQuery('#dpd3').val());
        this.tooDate = jQuery('#dpd3').val();
        if (this.tooDate == "") {
            this.tooDate = null;
        }
        if (this.tooTime == "") {
            this.tooTime = null;
        }
        if (this.frommDate == "") {
            this.frommDate = null;
        }
        if (this.frommTime == "") {
            this.frommTime = null;
        }
        this.sendCall(this.questionUserId, this.gradeUser, this.tooDate, this.tooTime, this.frommDate, this.frommTime, this.gender);
    };
    UsersComponent.prototype.toTime = function () {
        console.log(this.tooTime);
        this.tooTime = jQuery('#timepicker3').val();
        if (this.tooDate == "") {
            this.tooDate = null;
        }
        if (this.tooTime == "") {
            this.tooTime = null;
        }
        if (this.frommDate == "") {
            this.frommDate = null;
        }
        if (this.frommTime == "") {
            this.frommTime = null;
        }
        this.sendCall(this.questionUserId, this.gradeUser, this.tooDate, this.tooTime, this.frommDate, this.frommTime, this.gender);
    };
    UsersComponent.prototype.fromDate = function () {
        console.log(jQuery('#dpd4').val());
        this.frommDate = jQuery('#dpd4').val();
        if (this.tooDate == "") {
            this.tooDate = null;
        }
        if (this.tooTime == "") {
            this.tooTime = null;
        }
        if (this.frommDate == "") {
            this.frommDate = null;
        }
        if (this.frommTime == "") {
            this.frommTime = null;
        }
        this.sendCall(this.questionUserId, this.gradeUser, this.tooDate, this.tooTime, this.frommDate, this.frommTime, this.gender);
    };
    UsersComponent.prototype.fromTime = function () {
        console.log(jQuery('#timepicker4').val());
        this.frommTime = jQuery('#timepicker4').val();
        if (this.tooDate == "") {
            this.tooDate = null;
        }
        if (this.tooTime == "") {
            this.tooTime = null;
        }
        if (this.frommDate == "") {
            this.frommDate = null;
        }
        if (this.frommTime == "") {
            this.frommTime = null;
        }
        this.sendCall(this.questionUserId, this.gradeUser, this.tooDate, this.tooTime, this.frommDate, this.frommTime, this.gender);
    };
    UsersComponent.prototype.male = function () {
        if (this.gender == "male") {
            this.gender = null;
        }
        else {
            this.gender = "male";
        }
        this.sendCall(this.questionUserId, this.gradeUser, this.tooDate, this.tooTime, this.frommDate, this.frommTime, this.gender);
    };
    UsersComponent.prototype.female = function () {
        if (this.gender == "female") {
            this.gender = null;
        }
        else {
            this.gender = "female";
        }
        this.sendCall(this.questionUserId, this.gradeUser, this.tooDate, this.tooTime, this.frommDate, this.frommTime, this.gender);
    };
    UsersComponent.prototype.sendCall = function (questionId, graderUser, tooDate, tooTime, frommDate, frommTime, gender) {
        var _this = this;
        this._questionService.usersPageFiltering(questionId, graderUser, tooDate, tooTime, frommDate, frommTime, gender)
            .subscribe(function (a) {
            _this.usersroot = a;
            console.log(a);
            _this.uniqueUserCount = _this.usersroot.uniqueUserTotal;
            _this.totalReviews = _this.usersroot.reviewsTotal;
            _this.returnRate = _this.usersroot.returnRate;
            _this.customerVisitsToBranches = _this.usersroot.customerRatings;
            for (var i = 0; i < _this.customerVisitsToBranches.length; i++) {
                _this.dateTime = new Date(_this.customerVisitsToBranches[i].ratingDate);
                _this.customerVisitsToBranches[i].rating = Math.round(_this.customerVisitsToBranches[i].rating);
                _this.dateTime.setMonth(_this.dateTime.getMonth() + 1);
                var tempDate = _this.dateTime.getDate().toString() + "-" + _this.dateTime.getMonth().toString() + "-" + _this.dateTime.getFullYear().toString();
                var time = _this.dateTime.getHours().toString() + ":" + _this.dateTime.getMinutes().toString();
                _this.customerVisitsToBranches[i].vistedDateString = tempDate;
                _this.customerVisitsToBranches[i].vistedTimeString = time;
            }
        });
    };
    __decorate([
        core_2.Input(), 
        __metadata('design:type', String)
    ], UsersComponent.prototype, "tooDate", void 0);
    __decorate([
        core_2.Input(), 
        __metadata('design:type', String)
    ], UsersComponent.prototype, "frommDate", void 0);
    __decorate([
        core_2.Input(), 
        __metadata('design:type', String)
    ], UsersComponent.prototype, "tooTime", void 0);
    __decorate([
        core_2.Input(), 
        __metadata('design:type', String)
    ], UsersComponent.prototype, "frommTime", void 0);
    __decorate([
        core_2.Output(), 
        __metadata('design:type', Array)
    ], UsersComponent.prototype, "customerVisitsToBranches", void 0);
    UsersComponent = __decorate([
        core_1.Component({
            selector: 'users',
            providers: [QuestionService_1.QuestionService],
            templateUrl: './../views/Users.html'
        }), 
        __metadata('design:paramtypes', [QuestionService_1.QuestionService])
    ], UsersComponent);
    return UsersComponent;
}());
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=users.component.js.map