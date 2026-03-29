document.getElementById('file-upload-btn').addEventListener('click', function() {
    document.getElementById('file-upload').click();
});

document.getElementById('file-upload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const label = document.querySelector('#file-upload-btn label');
        label.textContent = file.name;
        // Change reset button to stronger red
        document.getElementById('btn_lineReset').style.backgroundColor = '#ff0000';
    }
});

// Add click listener to reset button to reset color
document.getElementById('btn_lineReset').addEventListener('click', function() {
    this.style.backgroundColor = '#ff7575';
});