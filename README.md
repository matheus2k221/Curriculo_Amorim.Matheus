# Currículo Digital — Matheus Amorim

Um portfólio profissional moderno e responsivo desenvolvido com HTML5, CSS3 e Bootstrap 5. Apresenta informações detalhadas sobre experiência, formação e competências, com integração de QR Code para contato via WhatsApp.

## 🎯 Características Principais

- ✨ **Design Moderno**: Interface limpa e profissional com paleta de cores sofisticada
- 📱 **Responsivo**: Totalmente adaptável para desktop, tablet e mobile
- 🎨 **UI/UX Aprimorada**: Componentes visuais consistentes com Bootstrap 5
- 🔗 **QR Code Integrado**: Geração automática de QR Code para WhatsApp
- 🚀 **Performance Otimizada**: Carregamento rápido com CDN
- ♿ **Acessível**: Desenvolvido com boas práticas de acessibilidade web

## 🛠️ Tecnologias Utilizadas

- **HTML5** — Estrutura semântica moderna
- **CSS3** — Estilos responsivos e animações
- **Bootstrap 5** — Framework CSS para componentes UI
- **Bootstrap Icons** — Ícones profissionais
- **Google Fonts** — Tipografia (Inter, Space Grotesk)
- **QRCode.js** — Biblioteca para gerar QR Codes
- **Node.js** — Runtime para scripts de geração de QR Code

## 📦 Instalação

### Pré-requisitos
- Node.js 14+ (opcional, apenas para gerar QR Code)
- Navegador moderno (Chrome, Firefox, Safari, Edge)

### Passos

1. **Clone ou baixe o repositório**
```bash
git clone <seu-repositorio>
cd "site curriculo matheus"
```

2. **Instale as dependências (opcional)**
```bash
npm install
```

3. **Abra no navegador**
```bash
# Opção 1: Abra o arquivo diretamente
open index.html

# Opção 2: Use um servidor local (recomendado)
npx http-server
# ou
python -m http.server 8000
```

## 🚀 Como Usar

### Visualizar o Currículo
- Abra `index.html` em seu navegador
- Navegue pelas seções usando o menu lateral
- Clique no ícone do WhatsApp para abrir a conversa

### Gerar QR Code
```bash
node generate-qr.js
```
Isso gera um arquivo `qr-code.png` com QR Code para seu contato WhatsApp.

## 📁 Estrutura do Projeto

```
.
├── index.html              # Arquivo principal do currículo
├── generate-qr.js          # Script para gerar QR Code
├── package.json            # Dependências do projeto
└── README.md               # Esta documentação
```

## 🎨 Paleta de Cores

| Cor | Código | Uso |
|-----|--------|-----|
| Navy | `#0d1b2a` | Fundo principal, texto escuro |
| Ink | `#1c2b3a` | Contraste secundário |
| Steel | `#2e4a65` | Destaques |
| Sky | `#4a9cc7` | Acentos principais |
| Ice | `#c8e6f4` | Destaques suaves |
| Paper | `#f5f8fa` | Fundo secundário |

## ⚙️ Customização

### Alterar Informações Pessoais
Edite o arquivo `index.html` e localize as seções:
- **Dados Pessoais**: Altere nome, título profissional e foto
- **Contato**: Atualize links de WhatsApp, email e redes sociais
- **Experiência**: Modifique histórico profissional
- **Formação**: Adicione cursos e certificações
- **Habilidades**: Customize skills e competências

### Modificar Link WhatsApp
No arquivo `generate-qr.js`, altere:
```javascript
const waLink = "https://wa.me/5561993011465"; // Coloque seu número
```

### Personalizar Cores
No arquivo `index.html`, localize a seção `:root` no CSS e modifique as variáveis:
```css
:root {
  --navy: #0d1b2a;
  --sky: #4a9cc7;
  /* ... outras cores */
}
```

## 📋 Seções do Currículo

- **Sobre** — Resumo profissional e apresentação
- **Experiência** — Histórico profissional com descrições
- **Formação** — Educação e certificações
- **Habilidades** — Competências técnicas e comportamentais
- **Contato** — Links e canais de comunicação

## 🔗 Links Úteis

- [Bootstrap 5 Documentation](https://getbootstrap.com/docs/5.3/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)
- [QRCode.js Documentation](https://davidshimjs.github.io/qrcodejs/)
- [Google Fonts](https://fonts.google.com/)

## 📱 Compatibilidade

| Navegador | Suporte |
|-----------|---------|
| Chrome | ✅ Completo |
| Firefox | ✅ Completo |
| Safari | ✅ Completo |
| Edge | ✅ Completo |
| IE 11 | ⚠️ Parcial |

## 📝 Licença

Este projeto é de uso pessoal. Sinta-se livre para usar como base para seu próprio currículo.

## � Créditos

Este projeto foi desenvolvido com base na metodologia e orientação do professor:

**Adalto Sobrinho**  
👨‍🏫 Instrutor — Criação e Deploy de Portfólios no GitHub  
🔗 GitHub: [@ADALTOSOBRINHO](https://github.com/ADALTOSOBRINHO)

Obrigado por ministrar a aula e guiar na criação deste currículo digital!

## �👤 Autor

**Matheus Amorim**  

---

**Última atualização:** 2026  
**Versão:** 1.0.0
