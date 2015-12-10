import {Component, OnInit} from 'angular2/angular2';

@Component({
	selector: 'home',
	template: `
	<div class="hgt90">
         <div class="row hgt50 bg-home">
            <div class="ten columns offset-by-one column">
                <h1>Stitched Up Prototype Dialogue Engine</h1>
            </div>
        </div>
        <div class="row hgt50 bg-police">
            <div class="ten columns offset-by-one column">
                <h2>My first prototype in Angular 2</h2>
            </div>
        </div>
    </div>
	`
})

export class HomeComponent implements OnInit {

	constructor() { }

	ngOnInit() {
		console.log('ngOnInit');
	}
}