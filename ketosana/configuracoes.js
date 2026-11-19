/**
 * Configurações da campanha.
 * Para criar outra presell, copie esta pasta, renomeie-a,
 * edite os valores abaixo e substitua as imagens em imagens/.
 */
const CONFIG = {
  produto: "Ketosana",
  idioma: "en-US",
  titulo: "Ketosana",
  texto: "Review the product details and available purchase options.",
  textoBotao: "View Offer",
  avisoAfiliado: "I may earn a commission if you buy through this link.",
  imagemCelular: "imagens/celular.webp",
  imagemComputador: "imagens/computador.webp",
  linkAfiliado: "https://myketosana.com/ketosana-pdp-fe-1?aff=grindore&cam=CAMP1",
  googleAds: {
    ativo: false,
    id: "",
    rotuloConversao: "",
    tempoLimiteMs: 450
  },
  privacidade: {
    permitirGoogleAds: true,
    exibirControles: true,
    titulo: "Cookie Settings",
    texto: "We use cookies and similar technologies to help personalize content, tailor and measure ads, and provide a better experience. By clicking accept, you agree to this as described in our Cookie Policy.",
    botaoPermitir: "Yes, I accept",
    botaoRecusar: "No, I do not accept",
    rotuloFechar: "Close"
  }
};
