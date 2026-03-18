const botoesContainer = document.getElementById("botoes");
const imagem = document.getElementById("imagemAtual");

// Criar botões de 1 até 31 automaticamente
for (let i = 1; i <= 31; i++) {
    const botao = document.createElement("button");
    botao.textContent = i;

    botao.addEventListener("click", () => {
        imagem.src = `${i}.jpg`;
        imagem.alt = `Dia ${i}`;

        // Remove classe ativa de todos
        document.querySelectorAll("button").forEach(btn => {
            btn.classList.remove("ativo");
        });

        // Adiciona no botão clicado
        botao.classList.add("ativo");
    });

    botoesContainer.appendChild(botao);
}
