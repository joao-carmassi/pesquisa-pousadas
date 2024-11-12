const linkPicture = window.location.pathname.includes("/src")
    ? "../../src/imgs/picture.svg"
    : "./imgs/picture.svg";
export class Card {
    constructor(seletor, dados) {
        this.elemento = document.querySelector(seletor);
        this.update(dados);
    }
    template(modelo) {
        const divPrincipal = document.createElement("div");
        divPrincipal.classList.add("w-80", "min-h-60", "px-auto", "bg-base-100", "shadow-xl", "rounded-lg");
        const span = document.createElement("span");
        span.classList.add("block", "w-full", "aspect-video", "bg-slate-100", "grid", "place-items-center");
        const img = document.createElement("img");
        img.src = linkPicture;
        span.append(img);
        const divInterna = document.createElement("div");
        divInterna.classList.add("m-5", "flex", "gap-3", "flex-col");
        const h2 = document.createElement("h2");
        h2.classList.add("text-xl", "font-semibold");
        h2.textContent = modelo.titulo;
        const p = document.createElement("p");
        p.classList.add("text-base", "leading-5", "font-montSerrat", "break-words");
        p.textContent = modelo.conteudo;
        const ul = document.createElement("ul");
        ul.classList.add("flex", "text-sm", "flex-col", "flex-wrap", "font-medium", "text-base");
        modelo.categoria.forEach((item) => {
            ul.innerHTML += `<li class="capitalize">${item}</li>`;
        });
        const a = document.createElement("a");
        a.classList.add("btn", "btn-primary", "text-base", "mt-1");
        a.href = `/pousada?id=${modelo.id}`;
        a.target = "blanck";
        a.textContent = "Ver mais";
        divInterna.appendChild(h2);
        divInterna.appendChild(p);
        divInterna.appendChild(ul);
        divInterna.appendChild(a);
        divPrincipal.appendChild(span);
        divPrincipal.appendChild(divInterna);
        return divPrincipal;
    }
    update(dados) {
        this.limpaElemento();
        dados.forEach((modelo) => {
            const card = this.template(modelo);
            this.elemento.append(card);
        });
    }
    limpaElemento() {
        this.elemento.innerHTML = "";
    }
}
