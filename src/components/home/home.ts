import {Component, OnInit} from 'angular2/angular2';

@Component({
	selector: 'home',
	templateUrl: 'components/home/home.html'
})

export class HomeComponent implements OnInit {

	constructor() { }

	ngOnInit() {
		console.log('ngOnInit');
	}
}