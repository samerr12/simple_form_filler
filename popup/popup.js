document.getElementById('file-upload-btn').addEventListener('click', function() {
    document.getElementById('file-upload').click();
});

document.getElementById('file-upload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const label = document.querySelector('#file-upload-btn label');
        label.textContent = file.name;

        const ID_map_container = document.getElementById('ID_map_container');
        ID_map_container.style.display = 'block';
        

        document.getElementById('btn_lineReset').style.backgroundColor = '#ffbaba';
    }
});

// Add click listener to reset button to reset color
document.getElementById('btn_lineReset').addEventListener('click', function() {
    const label = document.querySelector('#file-upload-btn label');
        label.textContent = "Upload .xlxs / .csv";

    const ID_map_container = document.getElementById('ID_map_container');
    ID_map_container.style.display = 'none';
    
    this.style.backgroundColor = '#ffbaba';
});