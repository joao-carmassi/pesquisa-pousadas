var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Card } from "./view/card.js";
import { api } from "./module/dadosApi.js";
import { Filtro } from "./view/filtros.js";
export let dados;
export let card;
let menuLateral;
document.addEventListener("DOMContentLoaded", () => __awaiter(void 0, void 0, void 0, function* () {
    dados = yield api.baixaDados();
    card = new Card("section", dados);
    menuLateral = new Filtro("#menuLateral", filtros);
}));
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
