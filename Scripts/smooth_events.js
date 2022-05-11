class KeyPress {
	constructor(key, f, id) {
		this.key = key;
		this.f = f;
		this.id = id;
	}
}

var Listener = {
	id: 0,
	hold: [], // Keypresses to execute when held
	keysHeld: [], // Keys currently held
	createHoldEvent: (key, f) => {
		Listener.hold.push(new KeyPress(key, f, Listener.id));
		Listener.id ++;
	},
	addHoldEvent: (keyPress) => {
		Listener.hold.push(keyPress);
	},
	deleteById: (id) => {
		for ( var i = 0; i < Listener.hold.length; i ++ ) {
			if ( Listener.hold[i].id == id ) {
				Listener.hold.splice(i, 1);
				break;
			}
		}
	},
	deleteByKey: (key) => {
		for ( var i = Listener.hold.length - 1; i >= 0; i -- ) {
			if ( Listener.hold[i].key == key ) {
				Listener.hold.splice(i, 1);
			}
		}
	},
}

window.addEventListener("keypress", (key) => {
	if ( Listener.keysHeld.indexOf(key.key) == -1 ) {
		Listener.keysHeld.push(key.key)
	}
});

window.addEventListener("keyup", (key) => {
	Listener.keysHeld.splice(Listener.keysHeld.indexOf(key.key), 1);
});

var listen = setInterval(() => {
	Listener.hold.forEach((keyPress) => {
		if ( Listener.keysHeld.indexOf(keyPress.key) != -1 ) {
			keyPress.f()
		}
	});
}, 1000 / 60);