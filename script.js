const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-pergunta");
const caixaAlternativas = document.querySelector(".caixa-alternativa");
const caixaResultados = document.querySelector(".texto-resultado");
const imagemPergunta = document.querySelector(".imagem-pergunta");

const perguntas = [
    {
        enunciado: "1. Qual o principal local de produção da maioria dos alimentos que consumimos nas cidades?",
        imagem: "img/1.jpg",
        alternativas: [
            {
                texto: "A) Áreas rurais, como fazendas e sítios.",
                afirmacao: "afirmacao"
            },
            {
                texto: "B) Grandes indústrias alimentícias localizadas nos centros urbanos.",
                afirmacao: "negacao"
            }
        ]
    },
    {
        enunciado: "2. Qual processo essencial garante que os alimentos frescos do campo cheguem às cidades em boas condições?",
        imagem: "img/2.jpg",
        alternativas: [
            {
                texto: "A) Logística eficiente de transporte e conservação.",
                afirmacao: "afirmacao"
            },
            {
                texto: "B) Longo período de armazenamento em temperatura ambiente para maturação.",
                afirmacao: "negacao"
            }
        ]
    },
    {
        enunciado: "3. Uma prática agrícola sustentável comum no campo que beneficia a qualidade dos alimentos e o meio ambiente é:",
        imagem: "img/3.png",
        alternativas: [
            {
                texto: "A) Rotação de culturas e técnicas de manejo integrado de pragas.",
                afirmacao: "afirmacao"
            },
            {
                texto: "B) Monocultura intensiva com uso excessivo de agrotóxicos.",
                afirmacao: "negacao"
            }
        ]
    },
    {
        enunciado: "4. Qual a principal função das feiras livres e mercados municipais nas cidades em relação aos alimentos do campo?",
        imagem: "img/4.jpg",
        alternativas: [
            {
                texto: "A) Facilitar o acesso dos consumidores urbanos a produtos frescos e, muitas vezes, diretamente dos produtores rurais.",
                afirmacao: "afirmacao"
            },
            {
                texto: "B) Servir como depósito de alimentos importados.",
                afirmacao: "negacao"
            }
        ]
    },
    {
        enunciado: "5. Qual a importância da rastreabilidade dos alimentos que vêm do campo para a cidade?",
        imagem: "img/5.jpg",
        alternativas: [
            {
                texto: "A) Permite saber a origem do alimento e garantir sua segurança e qualidade.",
                afirmacao: "afirmacao"
            },
            {
                texto: "B) Apenas para aumentar o preço final do produto.",
                afirmacao: "negacao"
            }
        ]
    }
];