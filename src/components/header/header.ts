import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
	selector: 'app-header',
	template: `
        <div class="row nav">
            <a class="button button-primary" [routerLink]="['Home']">{{title}}</a>
            <a class="button button-primary" [routerLink]="['Scene']">Scene</a>
        </div>
	`,
	directives: [ROUTER_DIRECTIVES]
})
export class Header {
	public title = 'Stitched Up';
}