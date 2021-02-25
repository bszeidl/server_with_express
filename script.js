function pageLoad() {
	const _root = document.getElementById('root');
	_root.insertAdjacentHTML('afterbegin', <h1>Hello World!</h1>)
}

window.addEventListener('load', pageLoad);