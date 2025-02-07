const listaSelecaoPokedevs = document.querySelectorAll(".pokemon");

listaSelecaoPokedevs.forEach(pokemon => {
	pokemon.addEventListener("click", () => {
		esconderCartaoPokedev();

		const idPokedevSelecionado = mostrarCartaoPokedevSelecionado(pokemon);

		desativarPokedevNaListagem();
		ativarPokedevSelecionadoNaListagem(idPokedevSelecionado);

	})
})


function ativarPokedevSelecionadoNaListagem(idPokedevSelecionado) {
	const pokedevSelecionadoNaListagem = document.getElementById(idPokedevSelecionado);
	pokedevSelecionadoNaListagem.classList.add("ativo");
}

function desativarPokedevNaListagem() {
	const pokedevAtivoNaListagem = document.querySelector(".ativo");
	pokedevAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartaoPokedevSelecionado(pokemon) {
	const idPokedevSelecionado = pokemon.attributes.id.value;
	const idDoCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;
	const cartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir);
	cartaoPokedevParaAbrir.classList.add("aberto");
	return idPokedevSelecionado;
}

function esconderCartaoPokedev() {
	const cartaoPokedevAberto = document.querySelector(".aberto");
	cartaoPokedevAberto.classList.remove("aberto");
}

