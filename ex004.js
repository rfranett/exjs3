let :jogo ={
    titulo :'League Of Legends -LOL',
    desenvolvedor : 'Riot Games',
    anoLancamento :2009
}

document.write(`<div class="jogo">
<h2>Jogo</h2>
<span>Tìtulo</span>
<p>${jogo.titulo}</p>
<span>Desenvolvedor</span>
<p>${jogo.desenvolvedor}</p>
<span>Ano do Lançamento</span>
<p>${jogo.anoLancamento}</p>
</div>
`)