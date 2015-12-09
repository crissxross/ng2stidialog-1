import {Component} from 'angular2/angular2';
import {Header} from '../header/header'

@Component({
	selector: 'app',
	template: `
	<div class="container hgt100 bg-home">
		<app-header></app-header>
		<div>Hello Angular2!</div>
	</div>
	`,
	directives: [Header]
})
export class App {}