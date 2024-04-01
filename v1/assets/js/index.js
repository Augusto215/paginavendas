window.onload = function() {
    // Substitui o estado atual do histórico pelo URL desejado
    history.replaceState(null, null, 'https://paginavendas.onrender.com/index2.html');

    // Define o manipulador para o evento de "popstate"
    window.onpopstate = function(event) {
        // Redireciona para 'voltar.html' quando o botão voltar é pressionado
        window.location.href = 'https://paginavendas.onrender.com/index2.html';
    };
};