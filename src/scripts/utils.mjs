export async function carregarPartial(tipo, caminho) {
    try {
      const res = await fetch(caminho);
      const html = await res.text();
      document.getElementById(`${tipo}-container`).innerHTML = html;
    } catch (erro) {
      console.error(`Erro ao carregar o ${tipo}:`, erro);
    }
  }