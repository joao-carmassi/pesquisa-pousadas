// Imports -----
import { Card } from "./view/card.js";
import { api, ModeloDadosApi } from "./module/dadosApi.js";
import { Filtro } from "./view/filtros.js";

// Vars -----
export let dados: ModeloDadosApi[];
export let card: Card;
let menuLateral: Filtro;

// Codigo -----
document.addEventListener("DOMContentLoaded", async () => {
  dados = await api.baixaDados();

  card = new Card("section", dados);

  menuLateral = new Filtro("#menuLateral", filtros);
});

const filtros = [
  "wifi",
  "cafe",
  "pet",
  "kids",
  "estacionamento",
  "netflix",
  "piscina",
  "academia",
  "spa",
  "serviço de quarto",
  "ar condicionado",
  "frigobar",
  "jardim",
  "varanda",
  "churrasqueira",
  "espaço gourmet",
  "bar",
  "sauna",
  "salão de jogos",
  "parquinho",
  "bicicletas",
  "jacuzzi",
  "lavanderia",
  "caminhadas guiadas",
  "observatório",
  "massagem",
  "recepção 24h",
  "sala de reuniões",
  "trilhas",
  "atividades ao ar livre",
  "painéis solares",
  "horta orgânica",
  "praia privativa",
  "biblioteca",
  "quadra de esportes",
  "tenda de yoga",
  "ofurô",
  "banheira",
  "serviço de transfer",
  "restaurante",
  "lareira",
];
