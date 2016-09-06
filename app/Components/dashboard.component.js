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
var LineChartModel_1 = require('./../Models/LineChartModel');
var Pie_1 = require('./../Models/Pie');
var QuestionService_1 = require('./../Services/QuestionService');
var DashboardComponent = (function () {
    function DashboardComponent(_questionService) {
        var _this = this;
        this._questionService = _questionService;
        this.dtooDate = null;
        this.dfrommDate = null;
        this.dtooTime = null;
        this.dfrommTime = null;
        this.dgender = null;
        this.questions = [];
        this.dates = [];
        this.rating = [];
        this.pies = [];
        this.lineChartQuestionId = null;
        this.pieChartQuestionId = null;
        this.userQuestionId = null;
        this.userRatingChar = null;
        this._questionService.getQuestions()
            .subscribe(function (a) {
            _this.questions = a;
            _this.pieChartQuestionId = _this.questions[0]._id;
            _this.lineChartQuestionId = _this.questions[0]._id;
            _this.userQuestionId = _this.questions[0]._id;
            _this.userRatingChar = _this.questions[0]._id;
            var btn = document.getElementById('mainQuestionBtn');
            btn.textContent = _this.questions[0].questionHeading;
            var btn2 = document.getElementById('mainQuesBtn');
            btn2.textContent = _this.questions[0].questionHeading;
            var btn3 = document.getElementById('userQuesBtn');
            btn3.textContent = _this.questions[0].questionHeading;
            _this._questionService.getDashboardLinechartData(_this.questions[0]._id, null, null, null, null, null)
                .subscribe(function (a) {
                _this.lineChartModel = a;
                var line;
                for (var i = 0; i < _this.lineChartModel.length; i++) {
                    line = new LineChartModel_1.LineChartModel();
                    line = _this.lineChartModel[i];
                    _this.dates.push(line.date);
                    _this.rating.push(line.dayRating);
                }
                console.log(_this.dates);
                _this.renderChart();
            });
            _this._questionService.getDashboardPieChartData(_this.questions[0]._id, null, null, null, null, null)
                .subscribe(function (a) {
                _this.piechartmodel = a;
                var p = new Pie_1.Pie();
                p.name = "A";
                p.y = (_this.piechartmodel.optionA / _this.piechartmodel.total) * 100;
                _this.pies.push(p);
                p = new Pie_1.Pie();
                p.name = "B";
                p.y = (_this.piechartmodel.optionB / _this.piechartmodel.total) * 100;
                _this.pies.push(p);
                p = new Pie_1.Pie();
                p.name = "C";
                p.y = (_this.piechartmodel.optionC / _this.piechartmodel.total) * 100;
                _this.pies.push(p);
                p = new Pie_1.Pie();
                p.name = "D";
                p.y = (_this.piechartmodel.optionD / _this.piechartmodel.total) * 100;
                _this.pies.push(p);
                _this.renderPieChart();
            });
            _this._questionService.usersPageFiltering(_this.questions[0]._id, null, null, null, null, null, null)
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
                    console.log(_this.dateTime);
                }
                _this.customerVisitsToBranches = _this.customerVisitsToBranches.slice(0, 8);
                //console.log(this.customerVisitsToBranches);
            });
        });
    }
    DashboardComponent.prototype.ngAfterViewInit = function () {
    };
    DashboardComponent.prototype.renderChart = function () {
        jQuery("#dpd1").datepicker({
            format: 'yyyy-mm-dd'
        });
        jQuery("#dpd2").datepicker({
            format: 'yyyy-mm-dd'
        });
        var time1 = jQuery('#timepicker1').timepicker({
            showMeridian: false
        });
        var time2 = jQuery('#timepicker2').timepicker({
            showMeridian: false
        });
        jQuery('#container').highcharts({
            title: {
                text: ''
            },
            xAxis: {
                gridLineWidth: 0,
                lineColor: '#c5c5c5',
                categories: this.dates,
                tickWidth: 1,
                tickColor: 'black'
            },
            yAxis: {
                gridLineWidth: 0,
                lineWidth: 1,
                tickWidth: 1,
                tickColor: 'black',
                lineColor: '#c5c5c5',
                plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080',
                        gridLineWidth: 0,
                        minorGridLineWidth: 0,
                    }]
            },
            tooltip: {
                valueSuffix: ''
            },
            series: [{
                    showInLegend: false,
                    name: 'Average Rating',
                    color: '#890055',
                    data: this.rating
                }]
        });
    };
    DashboardComponent.prototype.renderPieChart = function () {
        var pieChart = document.getElementById('#container2');
        jQuery('#container2').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: true,
                type: 'pie'
            },
            colors: ['#00a651', '#00aeef', '#f7941d', '#ed1c24'],
            title: {
                text: ''
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
                style: { fontFamily: 'montserratlight', fontSize: '12px', lineHeight: '8px', marginTop: '-10px' }
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '{point.percentage:.1f} %',
                        style: { fontFamily: 'montserratlight', fontSize: '16px' }
                    }
                }
            },
            options: {},
            series: [{
                    states: {
                        hover: {
                            enabled: false
                        }
                    },
                    point: {},
                    name: 'Brands',
                    colorByPoint: true,
                    data: this.pies
                }]
        });
    };
    DashboardComponent.prototype.dtoDate = function () {
        this.dtooDate = jQuery('#dpd1').val();
        if (this.dtooDate == "") {
            this.dtooDate = null;
        }
        if (this.dtooTime == "") {
            this.dtooTime = null;
        }
        if (this.dfrommDate == "") {
            this.dfrommDate = null;
        }
        if (this.dfrommTime == "") {
            this.dfrommTime = null;
        }
        this.dsendCall(this.pieChartQuestionId, this.dtooDate, this.dtooTime, this.dfrommDate, this.dfrommTime, this.dgender);
        console.log(this.dtooDate, this.dtooTime, this.dfrommDate, this.dfrommTime, this.dgender);
    };
    DashboardComponent.prototype.dtoTime = function () {
        this.dtooTime = jQuery('#timepicker1').val();
        if (this.dtooDate == "") {
            this.dtooDate = null;
        }
        if (this.dtooTime == "") {
            this.dtooTime = null;
        }
        if (this.dfrommDate == "") {
            this.dfrommDate = null;
        }
        if (this.dfrommTime == "") {
            this.dfrommTime = null;
        }
        this.dsendCall(this.pieChartQuestionId, this.dtooDate, this.dtooTime, this.dfrommDate, this.dfrommTime, this.dgender);
    };
    DashboardComponent.prototype.dfromDate = function () {
        this.dfrommDate = jQuery('#dpd2').val();
        if (this.dtooDate == "") {
            this.dtooDate = null;
        }
        if (this.dtooTime == "") {
            this.dtooTime = null;
        }
        if (this.dfrommDate == "") {
            this.dfrommDate = null;
        }
        if (this.dfrommTime == "") {
            this.dfrommTime = null;
        }
        this.dsendCall(this.pieChartQuestionId, this.dtooDate, this.dtooTime, this.dfrommDate, this.dfrommTime, this.dgender);
    };
    DashboardComponent.prototype.dfromTime = function () {
        this.dfrommTime = jQuery('#timepicker2').val();
        if (this.dtooDate == "") {
            this.dtooDate = null;
        }
        if (this.dtooTime == "") {
            this.dtooTime = null;
        }
        if (this.dfrommDate == "") {
            this.dfrommDate = null;
        }
        if (this.dfrommTime == "") {
            this.dfrommTime = null;
        }
        this.dsendCall(this.pieChartQuestionId, this.dtooDate, this.dtooTime, this.dfrommDate, this.dfrommTime, this.dgender);
    };
    DashboardComponent.prototype.dmale = function () {
        if (this.dgender == "male") {
            this.dgender = null;
        }
        else {
            this.dgender = "male";
        }
        this.dsendCall(this.pieChartQuestionId, this.dtooDate, this.dtooTime, this.dfrommDate, this.dfrommTime, this.dgender);
    };
    DashboardComponent.prototype.dfemale = function () {
        if (this.dgender == "female") {
            this.dgender = null;
        }
        else {
            this.dgender = "female";
        }
        this.dsendCall(this.pieChartQuestionId, this.dtooDate, this.dtooTime, this.dfrommDate, this.dfrommTime, this.dgender);
    };
    DashboardComponent.prototype.dsendCall = function (questionId, tooDate, tooTime, frommDate, frommTime, gender) {
        var _this = this;
        this._questionService.getDashboardLinechartData(questionId, tooDate, tooTime, frommDate, frommTime, gender)
            .subscribe(function (a) {
            _this.rating = [];
            _this.dates = [];
            _this.lineChartModel = a;
            var line;
            for (var i = 0; i < _this.lineChartModel.length; i++) {
                line = new LineChartModel_1.LineChartModel();
                line = _this.lineChartModel[i];
                _this.dates.push(line.date);
                _this.rating.push(line.dayRating);
            }
            console.log(_this.dates);
            _this.renderChart();
        });
        this._questionService.getDashboardPieChartData(questionId, tooDate, tooTime, frommDate, frommTime, gender)
            .subscribe(function (a) {
            _this.pies = [];
            _this.piechartmodel = a;
            var p = new Pie_1.Pie();
            p.name = "A";
            p.y = (_this.piechartmodel.optionA / _this.piechartmodel.total) * 100;
            //p.style = {color:"#00a651"};
            _this.pies.push(p);
            p = new Pie_1.Pie();
            p.name = "B";
            p.y = (_this.piechartmodel.optionB / _this.piechartmodel.total) * 100;
            //p.style = {color:"#00aeef"};
            _this.pies.push(p);
            p = new Pie_1.Pie();
            p.name = "C";
            p.y = (_this.piechartmodel.optionC / _this.piechartmodel.total) * 100;
            // p.style = {color:"#f7941d"};
            _this.pies.push(p);
            p = new Pie_1.Pie();
            p.name = "D";
            p.y = (_this.piechartmodel.optionD / _this.piechartmodel.total) * 100;
            //p.style = {color:"#ed1c24"};
            _this.pies.push(p);
            _this.renderPieChart();
        });
    };
    DashboardComponent.prototype.changeMainQuestion = function (value) {
        var _this = this;
        var btn = document.getElementById('mainQuestionBtn');
        for (var i = 0; i < this.questions.length; i++) {
            if (value == this.questions[i]._id) {
                btn.textContent = this.questions[i].questionHeading;
                this.pieChartQuestionId = value;
            }
        }
        this._questionService.getDashboardPieChartData(this.pieChartQuestionId, this.dtooDate, this.dtooTime, this.dfrommDate, this.dfrommTime, this.dgender)
            .subscribe(function (a) {
            _this.pies = [];
            _this.piechartmodel = a;
            var p = new Pie_1.Pie();
            p.name = "A";
            p.y = (_this.piechartmodel.optionA / _this.piechartmodel.total) * 100;
            _this.pies.push(p);
            p = new Pie_1.Pie();
            p.name = "B";
            p.y = (_this.piechartmodel.optionB / _this.piechartmodel.total) * 100;
            _this.pies.push(p);
            p = new Pie_1.Pie();
            p.name = "C";
            p.y = (_this.piechartmodel.optionC / _this.piechartmodel.total) * 100;
            _this.pies.push(p);
            p = new Pie_1.Pie();
            p.name = "D";
            p.y = (_this.piechartmodel.optionD / _this.piechartmodel.total) * 100;
            _this.pies.push(p);
            _this.renderPieChart();
        });
    };
    DashboardComponent.prototype.changeMainQues = function (value) {
        var _this = this;
        var btn = document.getElementById('mainQuesBtn');
        for (var i = 0; i < this.questions.length; i++) {
            if (value == this.questions[i]._id) {
                btn.textContent = this.questions[i].questionHeading;
                this.lineChartQuestionId = value;
            }
        }
        this._questionService.getDashboardLinechartData(this.lineChartQuestionId, this.dtooDate, this.dtooTime, this.dfrommDate, this.dfrommTime, this.dgender)
            .subscribe(function (a) {
            _this.rating = [];
            _this.dates = [];
            _this.lineChartModel = a;
            var line;
            for (var i = 0; i < _this.lineChartModel.length; i++) {
                line = new LineChartModel_1.LineChartModel();
                line = _this.lineChartModel[i];
                _this.dates.push(line.date);
                _this.rating.push(line.dayRating);
            }
            console.log(_this.dates);
            _this.renderChart();
        });
    };
    DashboardComponent.prototype.changeUserQues = function (value) {
        var _this = this;
        var btn = document.getElementById('userQuesBtn');
        for (var i = 0; i < this.questions.length; i++) {
            if (value == this.questions[i]._id) {
                btn.textContent = this.questions[i].questionHeading;
            }
        }
        this.userQuestionId = value;
        this._questionService.usersPageFiltering(this.userQuestionId, this.userRatingChar, this.dtooDate, this.dtooTime, this.dfrommDate, this.dfrommTime, this.dgender)
            .subscribe(function (a) {
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
                console.log(_this.dateTime);
            }
            _this.customerVisitsToBranches = _this.customerVisitsToBranches.slice(0, 8);
            console.log(_this.customerVisitsToBranches);
        });
    };
    DashboardComponent.prototype.changeRatingBtn = function (value) {
        var _this = this;
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
        var btn = document.getElementById('ratingBtn');
        btn.textContent = temp;
        this.userRatingChar = temp;
        this._questionService.usersPageFiltering(this.userQuestionId, this.userRatingChar, this.dtooDate, this.dtooTime, this.dfrommDate, this.dfrommTime, this.dgender)
            .subscribe(function (a) {
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
                console.log(_this.dateTime);
            }
            _this.customerVisitsToBranches = _this.customerVisitsToBranches.slice(0, 8);
            console.log(_this.customerVisitsToBranches);
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DashboardComponent.prototype, "dtooDate", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DashboardComponent.prototype, "dfrommDate", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DashboardComponent.prototype, "dtooTime", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DashboardComponent.prototype, "dfrommTime", void 0);
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'users',
            providers: [QuestionService_1.QuestionService],
            outputs: ['date1'],
            templateUrl: './../views/Dashboard.html'
        }), 
        __metadata('design:paramtypes', [QuestionService_1.QuestionService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map