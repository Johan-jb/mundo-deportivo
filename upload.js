document.addEventListener('DOMContentLoaded', () => {
    const uploadForm = document.getElementById('uploadForm');
    const uploadedMaterials = document.getElementById('uploadedMaterials');

    uploadForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const fileInput = document.getElementById('file');
        const linkInput = document.getElementById('link');
        const file = fileInput.files[0];
        const link = linkInput.value;

        if (file && link) {
            const reader = new FileReader();
            reader.onload = () => {
                const img = document.createElement('img');
                img.src = reader.result;
                img.alt = file.name;
                img.style.maxWidth = '200px';
                img.style.display = 'block';
                
                const a = document.createElement('a');
                a.href = link;
                a.textContent = 'Descargar PDF';
                a.target = '_blank';
                
                const div = document.createElement('div');
                div.appendChild(img);
                div.appendChild(a);
                
                uploadedMaterials.appendChild(div);
            };
            reader.readAsDataURL(file);
        }
    });
});
