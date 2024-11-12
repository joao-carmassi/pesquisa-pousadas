import { ModeloDadosApi } from "../module/dadosApi.js";
const linkPicture = window.location.pathname.includes("/src")
  ? "../../src/imgs/picture.svg"
  : "./imgs/picture.svg";

export class Card {
  private elemento: HTMLElement;

  constructor(seletor: string, dados: ModeloDadosApi[]) {
    this.elemento = document.querySelector(seletor) as HTMLElement;
    this.update(dados);
  }

  private template(modelo: ModeloDadosApi): HTMLElement {
    // Criando a div principal
    const divPrincipal = document.createElement("div");
    divPrincipal.classList.add(
      "w-80",
      "min-h-60",
      "px-auto",
      "bg-base-100",
      "shadow-xl",
      "rounded-lg"
    );

    // Criando o span
    const span = document.createElement("span");
    span.classList.add(
      "block",
      "w-full",
      "aspect-video",
      "bg-slate-100",
      "grid",
      "place-items-center"
    );
    const img = document.createElement("img");
    img.src = linkPicture;
    span.append(img);

    // Criando a div interna com margin
    const divInterna = document.createElement("div");
    divInterna.classList.add("m-5", "flex", "gap-3", "flex-col");

    // Criando o título
    const h2 = document.createElement("h2");
    h2.classList.add("text-xl", "font-semibold");
    h2.textContent = modelo.titulo;

    // Criando o parágrafo
    const p = document.createElement("p");
    p.classList.add("text-base", "leading-5", "font-montSerrat", "break-words");
    p.textContent = modelo.conteudo;

    // Criando a lista (vazia por enquanto)
    const ul = document.createElement("ul");
    ul.classList.add(
      "flex",
      "text-sm",
      "flex-col",
      "flex-wrap",
      "font-medium",
      "text-base"
    );
    modelo.categoria.forEach((item) => {
      ul.innerHTML += `<li class="capitalize">${item}</li>`;
    });

    // Criando o link
    const a = document.createElement("a");
    a.classList.add("btn", "btn-primary", "text-base", "mt-1");
    a.href = `/pousada?id=${modelo.id}`;
    a.target = "blanck";
    a.textContent = "Ver mais";

    // Montando a estrutura
    divInterna.appendChild(h2);
    divInterna.appendChild(p);
    divInterna.appendChild(ul);
    divInterna.appendChild(a);

    divPrincipal.appendChild(span);
    divPrincipal.appendChild(divInterna);

    return divPrincipal;
  }

  update(dados: ModeloDadosApi[]) {
    this.limpaElemento();
    dados.forEach((modelo) => {
      const card = this.template(modelo);
      this.elemento.append(card);
    });
  }

  private limpaElemento() {
    this.elemento.innerHTML = "";
  }
}
