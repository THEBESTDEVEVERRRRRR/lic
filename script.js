document.getElementById('checkButton').addEventListener('click', function() {
    const codeInput = document.getElementById('codeInput').value;
    const loadingIndicator = document.getElementById('loadingIndicator');
    const resultContent = document.getElementById('resultContent');
    const codeContent = document.getElementById('codeContent');
    const errorMessage = document.getElementById('errorMessage');

    loadingIndicator.classList.remove('hidden');
    resultContent.classList.add('hidden');
    errorMessage.classList.add('hidden');

    fetch('database.json')
        .then(response => response.json())
        .then(data => {
            loadingIndicator.classList.add('hidden');
            if (data[codeInput]) {
                codeContent.innerHTML = data[codeInput];
                resultContent.classList.remove('hidden');
            } else {
                errorMessage.classList.remove('hidden');
            }
        })
        .catch(error => {
            loadingIndicator.classList.add('hidden');
            errorMessage.classList.remove('hidden');
            console.error('Error fetching the database:', error);
        });
});