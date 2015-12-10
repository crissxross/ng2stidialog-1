import {Component, OnInit} from 'angular2/angular2';

@Component({
	selector: 'scene',
	templateUrl: 'components/scene/scene.html'
})

export class SceneComponent implements OnInit {

	constructor() { }

	ngOnInit() {
        console.log('ngOnInit');
	 }
}