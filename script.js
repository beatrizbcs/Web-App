// Registro do Service Worker
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js")
        .then(() => console.log("Service Worker registrado com sucesso"))
        .catch(err => console.error("Erro ao registrar o Service Worker:", err));
}

// Cadastro e transição para Registro de Emoções
document.querySelector("#signup-form").addEventListener("submit", event => {
    event.preventDefault();
    const username = document.querySelector("#username").value;
    const email = document.querySelector("#email").value;

    if (username && email) {
        alert(`Bem-vindo(a), ${username}! Cadastro realizado com sucesso.`);
        document.querySelector("#signup-page").classList.add("hidden");
        document.querySelector("#emotion-page").classList.remove("hidden");
    } else {
        alert("Por favor, preencha todos os campos antes de continuar.");
    }
});

// Registro de Emoções
document.querySelector("#emotion-form").addEventListener("submit", event => {
    event.preventDefault();
    const emotion = document.querySelector("#emotion").value;
    const description = document.querySelector("#description").value;

    if (emotion && description) {
        alert(`Emoção registrada:\n${emotion}\nDescrição:\n${description}`);
    } else {
        alert("Por favor, preencha todos os campos antes de registrar sua emoção.");
    }
});