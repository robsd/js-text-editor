textbox = document.getElementById('textbox');
filenameInput = document.getElementById('filename');

function saveFile() {
	file = new Blob([textbox.value], {
		type: 'text/plain;charset=utf-8'
	});
	a = document.createElement('a');
	filename = 'Untitled.txt';
	if (filenameInput.value != '')
	{
		filename = filenameInput.value;
	}
	a.href = URL.createObjectURL(file);
	a.download = filename;
	a.click();
}

function openFile(file) {
	reader = new FileReader();
	reader.onload = function(e) {
	   textbox.value = e.target.result;
	   filenameInput.value = file.name;
	};
	reader.readAsText(file);
}