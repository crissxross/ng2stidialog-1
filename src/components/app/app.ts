import {Component} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Header} from '../header/header';
import {HomeComponent} from '../home/home';
import {SceneComponent} from '../scene/scene';

@Component({
	selector: 'app',
	template: `
	<div class="container hgt100">
		<app-header></app-header>
		<router-outlet></router-outlet>
	</div>
	`,
	directives: [Header, ROUTER_DIRECTIVES]
})

	@RouteConfig([
	{ path: '/', redirectTo: ['Home']},
    { path: '/home', name: 'Home', component: HomeComponent },
    { path: '/scene', name: 'Scene', component: SceneComponent }
])

export class App {}