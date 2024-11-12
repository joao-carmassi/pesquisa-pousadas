import { ModeloDadosApi } from "../module/dadosApi.js";
import { card } from "../index.js";
import { dados } from "../index.js";

export class Filtro {
  private elemento: HTMLElement;

  constructor(seletor: string, dados: string[]) {
    this.elemento = document.querySelector(seletor) as HTMLElement;
    this.update(dados);
    this.enventosFiltro();
  }

  private template(modelo: string): HTMLElement {
    const id = modelo.replace(/ /g, "-");

    const label = document.createElement("label");
    label.classList.add("label", "cursor-pointer", "p-1");
    label.id = id;

    const span = document.createElement("span");
    span.classList.add(
      "label-text",
      "font-montSerrat",
      "text-base",
      "capitalize"
    );
    span.innerHTML = modelo;
    label.append(span);

    const input = document.createElement("input");
    input.type = "checkbox";
    input.classList.add("checkbox", "w-5", "h-5");
    input.id = id;
    label.append(input);

    return label;
  }

  private update(modelo: string[]) {
    this.limpaElemento();
    modelo.forEach((item) => {
      const filtro = this.template(item);
      this.elemento.append(filtro);
    });
  }

  // Retorna os dados que possuirem a categoria que entrar
  private filtraCategorias(
    dados: ModeloDadosApi[],
    categoriaPesquisada: string
  ) {
    let listaFiltrada: ModeloDadosApi[] = [];

    dados.forEach((item) => {
      item.categoria.filter((categoria) => {
        if (categoria.includes(categoriaPesquisada)) {
          listaFiltrada.push(item);
        }
      });
    });
    return listaFiltrada;
  }

  private enventosFiltro() {
    const inputs = document.querySelectorAll(".checkbox");

    inputs.forEach((input) => {
      input.addEventListener("click", () => {
        const selecionados = this.verificaInputsSelecionados(inputs);
        const dadosFiltrados = this.aplicaFiltros(selecionados);
        card.update(dadosFiltrados);
      });
    });
  }

  private verificaInputsSelecionados(inputs: NodeListOf<Element>): string[] {
    let selecionados: string[] = [];
    inputs.forEach((input) => {
      const elemento = input as HTMLInputElement;
      if (elemento.checked) {
        const id = input.id;
        selecionados.push(id);
      }
    });
    return selecionados;
  }

  private aplicaFiltros(selecionados: string[]): ModeloDadosApi[] {
    let dadosFiltrados = dados;
    selecionados.forEach((categoria) => {
      dadosFiltrados = this.filtraCategorias(dadosFiltrados, categoria);
    });
    return dadosFiltrados;
  }

  private limpaElemento() {
    this.elemento.innerHTML = "";
  }
}
