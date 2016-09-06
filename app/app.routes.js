"use strict";
var router_1 = require('@angular/router');
var question_component_1 = require('./Components/question.component');
var users_component_1 = require('./Components/users.component');
var dashboard_component_1 = require('./Components/dashboard.component');
var routes = [
    {
        path: 'questions',
        component: question_component_1.QuestionComponent
    },
    {
        path: '',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'users',
        component: users_component_1.UsersComponent
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map