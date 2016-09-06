/*import {Component,trigger,state,style,transition,animate} from '@angular/core';
import {Input} from '@angular/core';
import {QuestionModel} from './../Models/QuestionModel';
import {QuestionService} from './../Services/QuestionService';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'question',
    templateUrl: './../views/Question.html',
    providers :[QuestionService],
    directives:[ROUTER_DIRECTIVES]

})
export class UsersListComponent {
    @Input() Question:string = "";
    @Input() QuestionHeading:string;
    private questions: QuestionModel[] = [];
    public QuestionMod : QuestionModel;
    public questionService : QuestionService;
        constructor(private _questionService : QuestionService) {
            this._questionService.getQuestions()
            .subscribe(
                a=> {
                    this.questions = a;
                    console.log(a);
                }
            );
        }
}*/ 
//# sourceMappingURL=users-list.component.js.map