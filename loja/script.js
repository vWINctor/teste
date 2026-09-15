document.getElementById('botao').addEventListener('click', function() {
    // Pega todos os checkboxes da tabela
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    let conteudo = '';

    checkboxes.forEach(function(checkbox) {
        const nome = checkbox.dataset.nome; // pega do atributo data-nome
        const status = checkbox.checked ? 'checado' : 'não checado';
        conteudo += `"${nome}": ${status}\n`;
    });

    // Cria o arquivo .txt
    const blob = new Blob([conteudo], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    // Cria um link temporário para forçar o download
    const link = document.createElement('a');
    link.href = url;
    link.download = 'estoque.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
});