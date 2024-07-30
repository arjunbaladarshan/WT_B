const EventEmitter = require('events')

class MyEvent extends EventEmitter{
	startCount(){
		setInterval(()=>{
			this.emit('arjun');
		},1000);

		setInterval(()=>{
			this.emit('bala');
		},5000);
	}
}

const obj = new MyEvent();
obj.startCount();

obj.on('arjun',()=>{
	console.log('Msg Arjun recived')
})

obj.on('bala',()=>{
	console.log('Msg Bala recived')
})