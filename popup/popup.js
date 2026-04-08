document.getElementById('file-upload-btn').addEventListener('click', function() {
    document.getElementById('file-upload').click();
});

let workbook = null; // Global variable to store the workbook data

document.getElementById('file-upload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                if (file.name.endsWith('.xlsx')) {
                    const data = new Uint8Array(e.target.result);
                    workbook = XLSX.read(data, {type: 'array'});
                } else if (file.name.endsWith('.csv')) {
                    const data = e.target.result;
                    workbook = XLSX.read(data, {type: 'string'});
                } else {
                    throw new Error('Formato de arquivo não suportado. Use .xlsx ou .csv');
                }
                // If successful, show container
                const label = document.querySelector('#file-upload-btn label');
                label.textContent = file.name;
0
                const ID_map_container = document.getElementById('ID_map_container');
                ID_map_container.style.display = 'block';

                document.getElementById('btn_lineReset').style.backgroundColor = '#ffbaba';
            } catch (error) {
                alert('Erro ao ler o arquivo: ' + error.message);
            }
        };
        if (file.name.endsWith('.xlsx')) {
            reader.readAsArrayBuffer(file);
        } else if (file.name.endsWith('.csv')) {
            reader.readAsText(file);
        } else {
            alert('Formato de arquivo não suportado. Use .xlsx ou .csv');
        }
    }
});

// Add click listener to reset button to reset color
document.getElementById('btn_lineReset').addEventListener('click', function() {
    const label = document.querySelector('#file-upload-btn label');
        label.textContent = "Upload .xlxs / .csv";

    const ID_map_container = document.getElementById('ID_map_container');
    ID_map_container.style.display = 'none';
    
    this.style.backgroundColor = '#ffbaba';

    // Clear the workbook data and reset the file input
    workbook = null;
    document.getElementById('file-upload').value = '';
});

// Add ID button functionality
document.getElementById('add-id-btn').addEventListener('click', function() {
    const container = document.getElementById('ID_map_container');
    const template = document.querySelector('.id_area_container');
    const newArea = template.cloneNode(true);
    newArea.querySelector('input').value = '';
    container.insertBefore(newArea, this);
});

// Delete functionality using event delegation
document.getElementById('ID_map_container').addEventListener('click', function(e) {
    if (e.target.alt === 'trash') {
        e.target.parentElement.remove();
    }
});