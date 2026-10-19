# Diretrizes do Projeto: Alojamento Local (Astro + Tailwind CSS + TypeScript + Sanity.io)

## 1. Gatilho Inteligente de Segurança (Semgrep MCP + Cloudflare `security-audit`)

- **Durante o desenvolvimento (ao criar ou editar código com `write_to_file` / `replace_file_content`):** Executa APENAS a ferramenta `semgrep_scan` do MCP `semgrep` nos ficheiros `.astro`, `.ts`, `.tsx` ou `.mjs` alterados e corrige de imediato as vulnerabilidades nas linhas afetadas. **Não carregues nenhuma skill de segurança nesta fase para poupar tokens.**
  
- **Formato de Caminho WSL:** Como o MCP `semgrep` corre em WSL (Ubuntu), ao chamar `semgrep_scan` converte sempre o caminho absoluto do Windows (`C:\...`) para o formato WSL (`/mnt/c/...`).
  
- **Apenas no Final do Projeto (Auditoria Global):** Ativa a skill **`security-audit`** (Cloudflare) em conjunto com o MCP `semgrep` exclusivamente quando o utilizador pedir a auditoria final do projeto antes de ir para produção, validando toda a arquitetura em `src/`.

---

## 2. Regras de Segurança Obrigatórias

### A. Segurança Base (Astro & TypeScript)
- **Astro XSS (`set:html`) & Variáveis:** Proíbe `set:html` sem sanitização prévia e garante que variáveis sensíveis nunca usam o prefixo `PUBLIC_`.
- **Tipagem Estrita:** Proíbe o uso de `any` em dados externos e previne SSRF/Open Redirects.

### B. Formulários e Ligação ao CMS Externo
- **Proibição de Chamadas Diretas ao CMS no Cliente:** Os formulários nunca podem comunicar diretamente do browser para a API de escrita do CMS externo. Toda a submissão tem de passar por **Astro Actions (`src/actions/`)** ou **Server Endpoints (`src/pages/api/`)**.
- **Proteção de Chaves do CMS (`import.meta.env`):** Tokens e chaves de API do CMS externo ficam exclusivamente no servidor (`.env`) e nunca em scripts do cliente.
- **Prevenção de Blind XSS e Injeção no CMS:** Antes de enviar dados do formulário para o CMS externo, valida o esquema com `zod` (tipos, tamanho máximo, email) e sanitiza/escapa tags HTML/JS para impedir que código malicioso execute quando a mensagem for aberta no painel do CMS.
- **Allowlist de Campos & Anti-Spam:** Envia para o CMS apenas os campos explicitamente permitidos, mantendo proteção CSRF ativa, validação contra bots (*honeypot*/captcha) e Rate Limiting.
- **Webhooks do CMS:** Se o CMS externo comunicar de volta com o site via Webhook, exige validação da assinatura secreta (HMAC/Secret) antes de processar o pedido.

### C. Integração Específica com Sanity.io (Se Aprovado pelo Cliente)
- **Prevenção de GROQ Injection:** Nunca interpolar variáveis ou parâmetros de URL diretamente na string de query GROQ (ex: proibido ``*[_type == "room" && slug.current == "${slug}"]``). Utilizar sempre parâmetros seguros do cliente Sanity (`sanityClient.fetch(query, { slug })` com `$slug` na query).
- **Separação de Clientes Sanity (Leitura vs. Escrita):**
  - **Cliente de Leitura:**corre exclusivamente no servidor/build do Astro (frontmatter `---`).
  - **Cliente de Escrita / Preview:** O token (`SANITY_API_WRITE_TOKEN` ou `SANITY_API_READ_TOKEN`) NUNCA pode ter o prefixo `PUBLIC_` e só pode ser usado dentro de `src/actions/` ou `src/pages/api/`.
- **Renderização Segura de Portable Text:** Utilizar componentes tipados (`astro-portabletext`) e validar URLs em links personalizados (permitir apenas `http://`, `https://`, `mailto:`, `tel:` para bloquear `javascript:`).
- **Validação de Imagens (`@sanity/image-url`):** Passar todas as imagens pelo *builder* oficial e validar se a referência existe antes de renderizar.

---

## 3. Gatilhos de Skills de Desenvolvimento (9 Skills Instaladas - Economia de Tokens)

Para poupar tokens, carrega apenas a skill correspondente à tarefa em mãos:

1. **Secções e Estilo (`tailwind-design-system`):** Ativar ao criar ou estilizar componentes modulares `.astro` com Tailwind CSS e grelhas responsivas.
2. **UX, Conversão e Layout Multilíngue (`ui-ux-designer`):** Ativar ao desenhar fluxos de reserva, galerias e garantir que botões/menus suportam textos em várias línguas (PT, EN, ES, FR) sem quebrar.
3. **Acessibilidade (`wcag-audit-patterns`):** Ativar ao criar elementos interativos (menu mobile, galeria, formulários, datas) para garantir norma **WCAG 2.2**.
4. **Código, API e Sanity (`typescript-pro`):** Ativar ao escrever lógica TypeScript, Astro Actions, validação `zod` e queries tipadas do Sanity.io.
5. **SEO Técnico, Schema e Estrutura (`seo-authority-builder`):** Ativar ao estruturar a hierarquia `H1`-`H3`, sinais de autoridade/confiança do alojamento, rotas de idiomas (`hreflang`) e JSON-LD (`LodgingBusiness` / `VacationRental`).
6. **Meta Tags e Partilha (`seo-meta-optimizer`):** Ativar ao configurar o `<head>` das páginas (Titles, Descriptions, URLs e OpenGraph).
7. **FAQs e Destaques Google (`seo-snippet-hunter`):** Ativar ao estruturar a secção de Perguntas Frequentes e informações práticas do Alojamento Local.
8. **Textos e Copywriting SEO (`seo-content-writer`):** Ativar ao redigir ou otimizar as descrições dos quartos, página "Sobre" e guias locais da região.
9. **Auditoria Final (`security-audit`):** Skill da Cloudflare exclusiva para a revisão final do projeto antes de ir para produção.