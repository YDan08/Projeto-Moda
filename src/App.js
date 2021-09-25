import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./styles/app.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Masculino from "./pages/Masculino";
import Feminino from "./pages/Feminino";
import Infantil from "./pages/Infantil";
import Sobre from "./pages/Sobre";
import Home from "./pages/Home";
import Menu from "./components/Menu";
import Rodape from "./components/Rodape";

import daniel from "./img/daniel.jfif";
import guilherme from "./img/guilherme.jfif";
import henrique from "./img/henrique.jfif";
import rodrigo from "./img/rodrigo.jfif";

const roupas = [
  {
    nome: "CAMISETA MANGA CURTA EM ALGODÃO ESTAMPA FRIENDS ROXO",
    valor: 49.9,
    img: "https://img.lojasrenner.com.br/item/553307766/zoom/1.jpg",
    tipo: "masculino"
  },
  {
    nome: "CAMISA MANGA CURTA COM ESTAMPA FLORAL BRANCO",
    valor: 119.9,
    img: "https://img.lojasrenner.com.br/item/561509894/zoom/1.jpg",
    tipo: "masculino"
  },
  {
    nome: "CAMISA MANGA CURTA EM VISCOSE ESTAMPA PINCELADAS ABSTRATA BEGE",
    valor: 119.9,
    img: "https://img.lojasrenner.com.br/item/574148080/zoom/1.jpg",
    tipo: "masculino"
  },
  {
    nome: "CAMISA MANGA CURTA VISCOSE ESTAMPADO NARUTO CLOUDS PRETO",
    valor: 139.9,
    img: "https://img.lojasrenner.com.br/item/569961092/zoom/1.jpg",
    tipo: "masculino"
  },
  {
    nome: "JAQUETA EM POLIAMIDA QUE BRILHA NO ESCURO BRANCO",
    valor: 159.9,
    img: "https://img.lojasrenner.com.br/item/560909554/zoom/1.jpg",
    tipo: "masculino"
  },
  {
    nome: "JAQUETA EM POLIAMIDA COM CAPUZ E RECORTE REFLETIVO PRETO",
    valor: 219.9,
    img: "https://img.lojasrenner.com.br/item/552685618/zoom/1.jpg",
    tipo: "masculino"
  },
  {
    nome: "CAMISA CROPPED EM TRICOLINE LISTRADA AZUL CLARO",
    valor: 99.9,
    img: "https://img.lojasrenner.com.br/item/578972439/zoom/1.jpg",
    tipo: "feminino"
  },
  {
    nome: "VESTIDO CURTO EM CHIFFON LISTRADO COM ALÇAS FINAS MULTICORES",
    valor: 139.9,
    img: "https://img.lojasrenner.com.br/item/571784013/zoom/1.jpg",
    tipo: "feminino"
  },
  {
    nome: "BLUSA CROPPED EM VISCOSE COM BOTÕES NAS COSTAS AZUL",
    valor: 99.9,
    img: "https://img.lojasrenner.com.br/item/580183383/zoom/1.jpg",
    tipo: "feminino"
  },
  {
    nome: "BLUSA TRANSPASSADA EM CREPE COM MANGAS BUFANTE E ESTAMPA DE BORBOLETAS PRETO",
    valor: 139.9,
    img: "https://img.lojasrenner.com.br/item/573053679/zoom/1.jpg",
    tipo: "feminino"
  },
  {
    nome: "VESTIDO MIDI EM ALGODÃO COM MANGA CURTA BUFANTE E DECOTE QUADRADO VERDE",
    valor: 119.9,
    img: "https://img.lojasrenner.com.br/item/583184381/zoom/1.jpg",
    tipo: "feminino"
  },
  {
    nome: "BLUSA MANGA BALONÊ EM CREPE ESTAMPA CORAÇÕES REBEL LOVE BRANCO",
    valor: 59.9,
    img: "https://img.lojasrenner.com.br/item/566967229/zoom/1.jpg",
    tipo: "feminino"
  },
  {
    nome: "CASACO INFANTIL EM MOLETOM COM CAPUZ E RECORTES ",
    valor: 59.9,
    img: "https://img.lojasrenner.com.br/item/581435343/zoom/1.jpg",
    tipo: "infantil"
  },
  {
    nome: "BODY INFANTIL ESTAMPA ROAR",
    valor: 29.9,
    img: "https://img.lojasrenner.com.br/item/581458721/zoom/1.jpg",
    tipo: "infantil"
  },
  {
    nome: "BLUSA INFANTIL EM COTTON COM BABADINHOS E BORDADOS",
    valor: 49.9,
    img: "https://img.lojasrenner.com.br/item/582020043/zoom/1.jpg",
    tipo: "infantil"
  },
  {
    nome: "CAMISETA INFANTIL ESTAMPA INTERATIVA DE TIGRE",
    valor: 49.9,
    img: "https://img.lojasrenner.com.br/item/583773160/zoom/1.jpg",
    tipo: "infantil"
  },
  {
    nome: "JAQUETA INFANTIL TEXTURIZADA ESTAMPA FLORA",
    valor: 59.9,
    img: "https://img.lojasrenner.com.br/item/581382018/zoom/1.jpg",
    tipo: "infantil"
  },
  {
    nome: "JARDINEIRA INFANTIL EM MOLETOM LISTRADO ESTAMPA DE SOL",
    valor: 69.9,
    img: "https://img.lojasrenner.com.br/item/581457454/zoom/1.jpg",
    tipo: "infantil"
  }
];

const integrantes = [
  {
    nome: "Daniel Augusto Sato Yamashita",
    rm: 88397,
    turma: "1TDSH",
    img: daniel
  },
  {
    nome: "Guilherme Vieira de Paiva",
    rm: 88492,
    turma: "1TDSH",
    img: guilherme
  },
  {
    nome: "João Henrique Freire de Sá",
    rm: 88822,
    turma: "1TDSH",
    img: henrique
  },
  {
    nome: "Rodrigo Avella",
    rm: 87749,
    turma: "1TDSH",
    img: rodrigo
  }
];

const lista = roupas.sort((a, b) => a.valor - b.valor);

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route path="/" exact component={() => <Home roupas={lista} />} />
          <Route path="/masculino" component={() => <Masculino roupas={lista} />} />
          <Route path="/feminino" component={() => <Feminino roupas={lista} />} />
          <Route path="/infatil" component={() => <Infantil roupas={lista} />} />
          <Route path="/sobre" component={() => <Sobre integrantes={integrantes} />} />
        </Switch>
        <Rodape />
      </BrowserRouter>
    </>
  );
}

export default App;
