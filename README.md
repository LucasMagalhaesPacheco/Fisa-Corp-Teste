# Teste Técnico Açaí - Fisa corp


# Descrição do teste 
 Um teste com intuito de testar minhas habilidades front-end utilizando React.js, ele foi feito com componentes funcionais utilizando a biblioteca SweetAlert2 para alguns alertas, Styled-components para estilização de cada um dos componentes e paginas.

#Link Deploy Surge

 Surge: 
 
# Requisitos 
- Inicialmente o usuário do sistema precisa selecionar qual sabor de açaí vai comparar, as
opções são Avelã, Guaraná, Morango e o Tradicional.
- Em seguida o usuário terá que escolher a opção do tamanho do açaí, sendo as opções
Pequeno (300ml), Médio (500ml) e Grande (700ml).
- A escolha do tamanho do produto é obrigatória, assim evitando que o usuário avance com
o pedido.
- Após escolher o tamanho do produto, o usuário poderá escolher se ele quer
acompanhamento, sendo eles Morango, Banana, Kiwi, Granola, Paçoca e Leite Ninho.
- Caso o usuário não queira acompanhamento o pedido pode ser finalizado.
- Ao final do pedido todos os itens selecionados pelo usuário deverão ser listados em tela,
mostrando também a quantidade de tempo que o usuário vai aguardar até que seu pedido
fique pronto.

# Entidades do código: 
## SABORES
- `const sabores = ["Avelã", "Guaraná", "Morango", "Tradicional"]`

## TAMANHOS 

- ` const tamanhos = [
    { tamanho: "Pequeno 300ml", tempo: 10},
    { tamanho: "Medio 500ml", tempo: 15},
    { tamanho: "Grande 700ml", tempo: 20}
];`

## ACOMPANHAMENTOS 

- `const acompanhamentos = [
    { nome: "Morango", tempo: 3},
    { nome: "Banana", tempo: 5},
    { nome: "Kiwi", tempo: 4},
    { nome: "Granola", tempo: 3},
    { nome: "Leite ninho", tempo: 0.35}
]; `

# Descrição mais aprofundada
Comecei o projeto criando o Mock com os produtos e fazendo um planejamento de quantas páginas seria necessário para melhor execução do projeto as desenhando em um caderno, tomei a decisão de fazer duas páginas e um Swall de alerta.
A primeira seria uma Home, uma pagina simples com um botão no centro, aonde clicando nele iria envia-los para pagina de produtos. 

