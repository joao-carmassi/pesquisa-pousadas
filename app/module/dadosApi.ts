const URL_API = window.location.pathname.includes("/src")
  ? "../../src/db.json"
  : "./db.json";

export interface ModeloDadosApi {
  titulo: string;
  conteudo: string;
  categoria: string[];
  id: string;
}

export const api = {
  baixaDados(): Promise<ModeloDadosApi[]> {
    return fetch(URL_API)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Erro ao baixa dados da api");
        }
        return res.json();
      })
      .then((data) => {
        return data.pousadas;
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
