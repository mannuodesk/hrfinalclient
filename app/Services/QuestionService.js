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
/**
 * Created by Ideofuzion on 8/4/2016.
 */
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
//import {ProductModel} from './ProductModel';
var QuestionService = (function () {
    function QuestionService(http) {
        this.http = http;
        this.baseUrl = "https://hrms-ideofuzion.herokuapp.com";
    }
    QuestionService.prototype.getQuestions = function () {
        return this.http.get(this.baseUrl + '/questions/getAllQuestions')
            .map(function (res) { return res.json(); });
    };
    QuestionService.prototype.addQuestion = function (questionHeading, questionText) {
        var body = JSON.stringify({ "questionHeading": questionHeading, "questionText": questionText });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ method: 'post', headers: headers });
        return this.http.post(this.baseUrl + "/questions/ques", body, options)
            .map(function (res) { return res.json(); });
    };
    QuestionService.prototype.deleteQuestion = function (questionId) {
        return this.http.get(this.baseUrl + '/questions/deleteQuestionsById/' + questionId)
            .map(function (res) { return res.json(); });
    };
    QuestionService.prototype.getUsersPageData = function () {
        return this.http.get(this.baseUrl + '/customerVisitToBranches/getBranchReviewsandUsersCountByBranchId/57b1b91a687bfa1100446215')
            .map(function (res) { return res.json(); });
    };
    QuestionService.prototype.getAllBranches = function () {
        return this.http.get(this.baseUrl + '/branches/getAllBranches')
            .map(function (res) { return res.json(); });
    };
    QuestionService.prototype.getDashboardPieChartData = function (questionId, startDate, startTime, endDate, endTime, gender) {
        return this.http.get(this.baseUrl + '/customerVisitToBranches/getQuestionRatingsByBranchIdByQuestionId/57b1b91a687bfa1100446215/' + questionId + '/' + startDate + '/' + startTime + '/' + endDate + '/' + endTime + '/' + gender)
            .map(function (res) { return res.json(); });
    };
    QuestionService.prototype.getDashboardUsersData = function () {
        return this.http.get(this.baseUrl + '/customervisitToBranches/getQuestionRatingsByBranchIdByQuestionIdByRating/57b1b91a687bfa1100446215/57b19685265d65441f2ce2a2/D')
            .map(function (res) { return res.json(); });
    };
    QuestionService.prototype.getDashboardLinechartData = function (questionId, startDate, startTime, endDate, endTime, gender) {
        return this.http.get(this.baseUrl + '/customerVisitToBranches/getQuestionDailyRatingsByBranchIdByQuestionIdBetweenDates/57b1b91a687bfa1100446215/' + questionId + '/' + startDate + '/' + startTime + '/' + endDate + '/' + endTime + '/' + gender)
            .map(function (res) { return res.json(); });
    };
    QuestionService.prototype.usersPageFiltering = function (questionId, grade, startDate, startTime, endDate, endTime, gender) {
        return this.http.get(this.baseUrl + '/customerVisitToBranches/getBranchReviewsandUsersCountByBranchId/57b1b91a687bfa1100446215/' + questionId + '/' + grade + '/' + startDate + '/' + startTime + '/' + endDate + '/' + endTime + '/' + gender)
            .map(function (res) { return res.json(); });
    };
    QuestionService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], QuestionService);
    return QuestionService;
}());
exports.QuestionService = QuestionService;
//# sourceMappingURL=QuestionService.js.map