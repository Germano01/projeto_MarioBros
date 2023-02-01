const botaoTrailer = document.querySelector(".botao-trailer"); //buscando o botao trailer do document e armazenando em  uma variável constante
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video"); //buscando elemento pelo ID
const modal = document.querySelector(".modal");
const linkDoVideo = video.src; //pega o src (link do video) do document HTML

function alternarModal(){ 
	modal.classList.toggle("aberto"); //pega a classe modal e adiciona uma classe chamada aberto
}

botaoTrailer.addEventListener("click", () => { //adicionar um evento click para a chamada do botaoTrailer
	alternarModal();
	video.setAttribute("src", linkDoVideo); //atribui o link do video quando o botao ver trailer for clicado
});

botaoFecharModal.addEventListener("click", () => {
	alternarModal();
	video.setAttribute("src", ""); //atribuir um valor vazio ao src (link do video). Com isso, o som do video some ao fechar o vídeo
});

/*ANOTAÇÕES
document.querySelector -> busca a classe no document (no HTML)
toggle -> alterar (se ja tem a classe aberta, ele fecha, se tá fechada ele abre)
se não souber a sintaxe de um evento ou método, olhar a documentação deste no google


*/