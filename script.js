window.onload = function() {
    // 1. Seleciona os elementos do HTML pelos IDs
    const botaoEntrar = document.getElementById('btnEntrar');
    const areaAutores = document.getElementById('area-autores');
    const conteudoSite = document.getElementById('conteudo-site');

    // Verificação de segurança para o desenvolvedor
    if (!botaoEntrar || !areaAutores || !conteudoSite) {
        console.error("Erro: Um ou mais IDs não foram encontrados no HTML!");
        return;
    }

    // 2. Cria a função que junta o alerta e a troca de tela
    function realizarEntrada() {
        alert("⛏️ Bem-vindo ao Mundo Minecraft! Prepare sua picareta.");
        
        areaAutores.style.display = 'none';   // Esconde autores
        conteudoSite.style.display = 'flex';  // Mostra conteúdo em formato flex
    }

    // 3. Ativa o clique no botão
    botaoEntrar.addEventListener('click', realizarEntrada);
};