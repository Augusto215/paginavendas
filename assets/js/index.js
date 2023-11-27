window.onload = function() {
    // Substitui o estado atual do histórico pelo URL desejado
    history.replaceState(null, null, 'http://127.0.0.1:5500/main.html');

    // Define o manipulador para o evento de "popstate"
    window.onpopstate = function(event) {
        // Redireciona para 'voltar.html' quando o botão voltar é pressionado
        window.location.href = 'http://127.0.0.1:5500/main.html';
    };
};