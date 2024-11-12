import { card } from "../index.js";
import { dados } from "../index.js";
export class Filtro {
    constructor(seletor, dados) {
        this.elemento = document.querySelector(seletor);
        this.update(dados);
        this.enventosFiltro();
    }
    template(modelo) {
        const id = modelo.replace(/ /g, "-");
        const label = document.createElement("label");
        label.classList.add("label", "cursor-pointer", "p-1");
        label.id = id;
        const span = document.createElement("span");
        span.classList.add("label-text", "font-montSerrat", "text-base", "capitalize");
        span.innerHTML = modelo;
        label.append(span);
        const input = document.createElement("input");
        input.type = "checkbox";
        input.classList.add("checkbox", "w-5", "h-5");
        input.id = id;
        label.append(input);
        return label;
    }
    update(modelo) {
        this.limpaElemento();
        modelo.forEach((item) => {
            const filtro = this.template(item);
            this.elemento.append(filtro);
        });
    }
    filtraCategorias(dados, categoriaPesquisada) {
        let listaFiltrada = [];
        dados.forEach((item) => {
            item.categoria.filter((categoria) => {
                if (categoria.includes(categoriaPesquisada)) {
                    listaFiltrada.push(item);
                }
            });
        });
        return listaFiltrada;
    }
    enventosFiltro() {
        const inputs = document.querySelectorAll(".checkbox");
        inputs.forEach((input) => {
            input.addEventListener("click", () => {
                const selecionados = this.verificaInputsSelecionados(inputs);
                const dadosFiltrados = this.aplicaFiltros(selecionados);
                card.update(dadosFiltrados);
            });
        });
    }
    verificaInputsSelecionados(inputs) {
        let selecionados = [];
        inputs.forEach((input) => {
            const elemento = input;
            if (elemento.checked) {
                const id = input.id;
                selecionados.push(id);
            }
        });
        return selecionados;
    }
    aplicaFiltros(selecionados) {
        let dadosFiltrados = dados;
        selecionados.forEach((categoria) => {
            dadosFiltrados = this.filtraCategorias(dadosFiltrados, categoria);
        });
        return dadosFiltrados;
    }
    limpaElemento() {
        this.elemento.innerHTML = "";
    }
}
