let :jogo ={
    titulo :'League Of Legends -LOL',
    desenvolvedor : 'Riot Games',
    anoLancamento :2009
}
let :jogo2 ={
    titulo :'Blankos Brock party',
    desenvolvedor : 'mythical Games',
    anoLancamento :2020
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

document.write(`<div class="jogo2">
<h2>Jogo</h2>
<span>Tìtulo</span>
<p>${jogo2.titulo}</p>
<span>Desenvolvedor</span>
<p>${jogo2.desenvolvedor}</p>
<span>Ano do Lançamento</span>
<p>${jogo2.anoLancamento}</p>
</div>
`)