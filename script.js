$(document).ready(function () {
    $('header button').click(function () {
        $('form').slideDown();
    });

    $('#cancelar').click(function () {
        $('form').slideUp();
    });

    $('form').on('submit', function (event) {
        event.preventDefault(); // Previne o envio do formulário
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();

        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${enderecoDaNovaImagem}" alt="Imagem do novo item" />`).appendTo(novoItem);

        const linkDiv = $(`
            <div class="imagem-link">
                <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">Ver imagem em tamanho real</a>
            </div>
        `);
        linkDiv.appendTo(novoItem);

        $('ul').append(novoItem);
        $(novoItem).fadeIn();
        $('#endereco-imagem-nova').val(''); // Limpa o campo de entrada
    });
});
