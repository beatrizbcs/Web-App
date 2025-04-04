// Lógica de cadastro
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!name || !email || !password) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Exibe a seção principal e oculta a de cadastro
    document.getElementById('registerSection').style.display = 'none';
    document.getElementById('mainSection').style.display = 'block';
});

// Lógica de emoções e histórico
document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const mood = document.querySelector('input[name="mood"]:checked').value;
    const userText = document.getElementById('userInput').value.trim();

    if (!userText) {
        alert('Por favor, escreva algo sobre o seu sentimento.');
        return;
    }

    const historyList = document.getElementById('historyList');
    const newItem = document.createElement('li');
    newItem.classList.add(mood);
    newItem.textContent = `Humor: ${mood} | Comentário: ${userText}`;
    historyList.appendChild(newItem);

    document.getElementById('cadastroForm').reset();
});