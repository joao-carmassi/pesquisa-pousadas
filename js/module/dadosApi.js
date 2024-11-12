const URL_API = window.location.pathname.includes("/src")
    ? "../../src/db.json"
    : "./db.json";
export const api = {
    baixaDados() {
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
