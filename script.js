/**
 * Alterna a visibilidade dos detalhes de um card
 * @param {string} id - O ID do elemento a ser expandido
 */
function toggle(id) {
    const el = document.getElementById(id);
    const btn = el.previousElementSibling;

    if (el.style.display === "block") {
        el.style.display = "none";
        // Altera o texto de volta para o padrão dependendo do contexto
        if (id.startsWith('git')) {
            btn.innerHTML = "Ver Detalhes ▾";
        } else {
            btn.innerHTML = "Mais Informações ▾";
        }
    } else {
        el.style.display = "block";
        btn.innerHTML = "Fechar ▴";
    }
}

// Log de carregamento para controle
console.log("Portfólio de Nicole Assis carregado.");