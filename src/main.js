import HelloWorld from './modules/HelloWorld.js';
import Destructuring from './modules/Destructuring.js';

class main {
	run(){
		//console.log('run main class...');
		//(new HelloWorld()).sayHello('jeremyyang824');
		(new Destructuring()).show();
	}
}
window.bootstrap = new main();