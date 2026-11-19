/**
 * Configurações da campanha.
 * Para criar outra presell, copie esta pasta, renomeie-a,
 * edite os valores abaixo e substitua as imagens em imagens/.
 */
const CONFIG = {
  produto: "Ketosana",
  idioma: "en-US",
  imagemCelular: "imagens/celular.webp",
  imagemComputador: "imagens/computador.webp",
  linkAfiliado: "https://myketosana.com/ketosana-pdp-fe-1?aff=grindore&cam=CAMP1",
  textos: {
    "en-US": {
      titulo: "Ketosana",
      texto: "Review the product details and available purchase options.",
      textoBotao: "View Ketosana Offer",
      avisoAfiliado: "I may earn a commission if you buy through this link.",
      cookies: {
        titulo: "Cookie Settings",
        texto: "We use cookies and similar technologies to help personalize content, tailor and measure ads, and provide a better experience. By clicking accept, you agree to this as described in our Cookie Policy.",
        aceitar: "Yes, I accept",
        recusar: "No, I do not accept",
        fechar: "Close",
        gerenciar: "Cookie Settings"
      }
    },
    "pt-BR": {
      titulo: "Ketosana",
      texto: "Confira os detalhes do produto e as opções de compra disponíveis.",
      textoBotao: "Ver oferta Ketosana",
      avisoAfiliado: "Posso receber uma comissão se você comprar por este link.",
      cookies: {
        titulo: "Configurações de Cookies",
        texto: "Usamos cookies e tecnologias semelhantes para personalizar conteúdo, adaptar e medir anúncios e oferecer uma melhor experiência. Ao clicar em aceitar, você concorda com isso conforme descrito em nossa Política de Cookies.",
        aceitar: "Sim, aceito",
        recusar: "Não aceito",
        fechar: "Fechar",
        gerenciar: "Configurações de Cookies"
      }
    },
    "es-ES": {
      titulo: "Ketosana",
      texto: "Revisa los detalles del producto y las opciones de compra disponibles.",
      textoBotao: "Ver oferta de Ketosana",
      avisoAfiliado: "Puedo recibir una comisión si compras mediante este enlace.",
      cookies: {
        titulo: "Configuración de Cookies",
        texto: "Usamos cookies y tecnologías similares para personalizar el contenido, adaptar y medir anuncios y ofrecer una mejor experiencia. Al hacer clic en aceptar, aceptas esto según nuestra Política de Cookies.",
        aceitar: "Sí, acepto",
        recusar: "No acepto",
        fechar: "Cerrar",
        gerenciar: "Configuración de Cookies"
      }
    }
  },
  cookies: {
    ativo: true
  },
  googleAds: {
    ativo: false,
    id: "",
    rotuloConversao: "",
    tempoLimiteMs: 450
  }
};
