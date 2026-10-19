# Design System — Vale de Camelos

Este documento estabelece as diretrizes visuais, tipográficas, cromáticas, de componentes (botões) e media queries do website **Vale de Camelos**. Serve como a fonte única da verdade para todas as futuras implementações e refinamentos de código.

---

## 1. Tipografia

O website utiliza uma combinação equilibrada de duas famílias tipográficas: uma clássica e editorial com serifa para títulos e identidade, e uma sem serifa neutra e legível para interface, leitura e corpo de texto.

### 1.1. Famílias Tipográficas
- **Display & Títulos:** `Playfair Display`, Georgia, serif (`font-serif`)
  - Uso: Títulos principais (H1, H2, H3), nomes de alojamentos, itens de destaque editorial e navegação imersiva.
  - Pesos: 400 (Regular), 600 (SemiBold), 700 (Bold).
- **Interface & Leitura:** `Open Sans`, system-ui, sans-serif (`font-sans`)
  - Uso: Textos corridos, botões, etiquetas, formulários, legendas, metadados e rodapés.
  - Pesos: 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold).

---

### 1.2. Análise do Menu e Botão "Reservar" (Estado Atual do Código)

Antes de definir onde cada tipo de letra irá encaixar definitivamente, aqui está a radiografia exata de como estão hoje implementados:

1. **Botão "Reservar" (Barra de Navegação Superior / Pill):**
   - **Tipo de Letra Atual:** `Open Sans` (herda a `font-sans` base da página).
   - **Tamanho & Formatação Atual:** `text-xs sm:text-sm` (12px em mobile, 14px a partir de 576px), `font-bold` (700), `tracking-widest` (letter-spacing amplo), `uppercase` (letras maiúsculas).
   - **Comportamento quando o Menu abre:** Mantém `Open Sans`, alterando o esquema de cores para bordas e texto bordeaux (`#69130D`).

2. **Menu Principal quando Aberto (Navegação Central no Dropdown):**
   - **Tipo de Letra Atual:** `Playfair Display` (`font-serif`).
   - **Tamanho & Formatação Atual:** `text-xl sm:text-2xl md:text-[26px]` (20px a 26px), `font-bold` (700), `tracking-widest`, `uppercase`.
   - **Cor & Hover:** Inicia em `#69130D` (Bordeaux) e no hover muda para `#000000` (Preto puro).

3. **Menu Aberto (Rodapé com Redes Sociais & Copyright):**
   - **Tipo de Letra Atual:** `Open Sans` (`font-sans`), `text-xs sm:text-sm`, `font-medium` (500).

4. **Botão Hambúrguer (Toggle):**
   - Trata-se de um botão de ação com ícone vetorial SVG animado (3 barras que rodam e transicionam para o ícone de fechar `X`), sem texto visível, dispondo de `aria-label` acessível para leitores de ecrã.

---

### 1.3. Escala Tipográfica Recomendada

| Nível / Elemento | Tipo de Letra | Mobile (`< 768px`) | Tablet / Desktop (`≥ 768px`) | Ecrãs Largos (`≥ 1200px`) | Peso | Line Height |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **H1 (Hero / Título de Página)** | `Playfair Display` | 28px - 36px | 44px - 54px | 60px - 68px | Bold (700) | 1.15 |
| **H2 (Secções Principais)** | `Playfair Display` | 24px - 28px | 32px - 38px | 42px - 48px | Bold (700) | 1.2 |
| **H3 (Subtítulos / Alojamentos)** | `Playfair Display` | 20px - 22px | 24px - 26px | 28px - 32px | SemiBold (600) | 1.3 |
| **Lead / Introdução** | `Open Sans` | 15px - 16px | 17px - 18px | 18px - 20px | Light (300) / Regular (400) | 1.6 |
| **Body (Parágrafos)** | `Open Sans` | 14px - 15px | 15px - 16px | 16px | Regular (400) | 1.65 |
| **Botões & Ações** | `Open Sans` | 12px - 13px | 13px - 14px | 14px | SemiBold (600) / Bold (700) | 1.0 |
| **Overlines / Badges / Tags** | `Open Sans` | 11px - 12px | 12px | 12px - 13px | Bold (700) | 1.0 |
| **Legendas / Metadados** | `Open Sans` | 12px | 12px - 13px | 13px | Regular (400) | 1.4 |

---

## 2. Paleta de Cores

As 4 cores base do projeto refletem a autenticidade rústica do monte alentejano e a elegância contemporânea:

```
┌─────────────────┐   ┌─────────────────┐   ┌─────────────────┐   ┌─────────────────┐
│     #FAF9F6     │   │     #69130D     │   │     #ffffff     │   │     #000000     │
│   Off-White     │   │  Bordeaux /     │   │   Branco Puro   │   │   Preto Puro    │
│   Alabaster     │   │  Vinho Tinto    │   │                 │   │                 │
└─────────────────┘   └─────────────────┘   └─────────────────┘   └─────────────────┘
```

### 2.1. Definição e Papel das Cores

1. **`#FAF9F6` — Alabaster / Linho:**
   - **Função:** Fundo principal da aplicação (`background-color`), cartões suaves, menus abertos e contraste orgânico com as fotografias da herdade. Evita o cansaço visual do branco puro em áreas extensas.

2. **`#69130D` — Bordeaux Alentejano:**
   - **Função:** Cor de assinatura e identidade visual. Usada em títulos, botões de ação primária, detalhes de interação, bordas e estados ativos.

3. **`#ffffff` — Branco Puro:**
   - **Função:** Elementos de contraste máximo sobre fundos fotográficos ou escuros, texto de destaque sobre imagens hero, cartões brancos e estados normais/hover específicos.

4. **`#000000` — Preto Puro:**
   - **Função:** Texto de alto contraste, estados hover alternativos dos botões (ex.: hover do botão Reservar no menu fechado), sombras de elevação e sobreposições.

---

## 3. Media Queries e Breakpoints

O website estrutura-se rigorosamente com base nos seguintes breakpoints estabelecidos:

```css
/* 1. Mobile Compacto */
@media (max-width: 480px) { ... }

/* 2. Mobile Geral / Smartphones em Modo Paisagem */
@media (max-width: 576px) { ... }

/* 3. Tablets / Dispositivos Médios */
@media (min-width: 768px) { ... }

/* 4. Tablets Horizontais / Laptops Compactos */
@media (min-width: 992px) { ... }

/* 5. Desktops Standard */
@media (min-width: 1200px) { ... }

/* 6. Ecrãs Largos / Large Displays */
@media (min-width: 1400px) { ... }
```

### 3.1. Mapeamento no Tailwind CSS
Configurado em `tailwind.config.mjs`:
- `xs`: `{ 'max': '480px' }`
- `sm`: `{ 'max': '576px' }`
- `md`: `'768px'`
- `lg`: `'992px'`
- `xl`: `'1200px'`
- `2xl`: `'1400px'`

---

## 4. Botões e Ações Interativas

O sistema de botões divide-se em duas categorias principais:
1. **Botões de Texto Sublinhado com Seta:** Usados em chamadas de ação no corpo das páginas, cartões, links editoriais e secções de conteúdo.
2. **Botões em Caixa / Borda (Menu e Barra de Reservas):** Usados para a ação principal de conversão ("Reservar").

---

### 4.1. Botões de Texto Sublinhado com Seta

#### Anatomia & Comportamento
- **Espaçamento Inferior:** A linha está posicionada por baixo da palavra com um espaçamento explícito (`pb-1` / `padding-bottom: 4px`), criando um efeito visual leve e arejado.
- **Transição Suave de Desaparecimento:** No estado *hover*, a linha sublinhada **desaparece suavemente** (`opacity-0` / `transition-opacity duration-300`), mantendo a palavra legível.
- **Movimento da Seta:** A seta direcional (`→`) desloca-se suavemente para a direita (`translate-x-1.5`) acompanhando a intenção de clique.

#### Variação 1: Branco Sublinhado para Branco (`#ffffff`)
- **Cenário de uso:** Secções escuras ou sobre fotografias com overlay escuro (ex.: secção Hero).
- **Estado Normal:**
  - Palavra: Branca (`#ffffff`).
  - Linha sublinhada: Branca (`#ffffff`), com espaçamento inferior.
  - Seta: Branca (`#ffffff`).
- **Estado Hover:**
  - Palavra: Permanece Branca (`#ffffff`).
  - Linha sublinhada: **Desaparece suavemente** (fade-out).
  - Seta: Desloca-se para a direita.

```html
<!-- Botão Sublinhado: Branco para Branco (#ffffff) -->
<a
  href="..."
  class="group inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#ffffff] focus:outline-none"
>
  <span class="relative pb-1">
    Explorar Quartos
    <span
      class="absolute bottom-0 left-0 w-full h-[1px] bg-[#ffffff] transition-opacity duration-300 ease-out group-hover:opacity-0"
      aria-hidden="true"
    ></span>
  </span>
  <span
    class="inline-block transform transition-transform duration-300 ease-out group-hover:translate-x-1.5"
    aria-hidden="true"
  >
    &rarr;
  </span>
</a>
```

---

#### Variação 2: Vermelho Sublinhado para Vermelho (`#69130D`)
- **Cenário de uso:** Secções claras com fundo `#FAF9F6`, grelhas de alojamentos, detalhes de comodidades e leitura editorial.
- **Estado Normal:**
  - Palavra: Vermelho / Bordeaux (`#69130D`).
  - Linha sublinhada: Vermelho / Bordeaux (`#69130D`), com espaçamento inferior.
  - Seta: Vermelho / Bordeaux (`#69130D`).
- **Estado Hover:**
  - Palavra: Permanece Vermelha (`#69130D`).
  - Linha sublinhada: **Desaparece suavemente** (fade-out).
  - Seta: Desloca-se para a direita.

```html
<!-- Botão Sublinhado: Vermelho para Vermelho (#69130D) -->
<a
  href="..."
  class="group inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#69130D] focus:outline-none"
>
  <span class="relative pb-1">
    Saber Mais
    <span
      class="absolute bottom-0 left-0 w-full h-[1px] bg-[#69130D] transition-opacity duration-300 ease-out group-hover:opacity-0"
      aria-hidden="true"
    ></span>
  </span>
  <span
    class="inline-block transform transition-transform duration-300 ease-out group-hover:translate-x-1.5"
    aria-hidden="true"
  >
    &rarr;
  </span>
</a>
```

---

### 4.2. Botões em Caixa / Borda (Menu e Barra de Reservas)

Estes botões representam o ponto central de conversão e reserva direta no website.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ 1. Botão Reservar no Menu (Menu Fechado)                                    │
│    Normal: [ Bordas: Brancas | Palavra: Branca | Fundo: Transparente ]      │
│    Hover:  [ Bordas: Brancas | Palavra: Preto  | Fundo: Branco       ]      │
├─────────────────────────────────────────────────────────────────────────────┤
│ 2. Botão Reservar no Menu (Menu Hamburger Aberto)                           │
│    Normal: [ Bordas: Vermelho | Palavra: Vermelho | Fundo: Transparente ]   │
│    Hover:  [ Bordas: Vermelho | Palavra: Branca   | Fundo: Vermelho     ]   │
├─────────────────────────────────────────────────────────────────────────────┤
│ 3. Botão da Barra de Reservas                                               │
│    (Segue o mesmo design do Botão de Reservar com Menu Aberto)              │
│    Normal: [ Bordas: Vermelho | Palavra: Vermelho | Fundo: Transparente ]   │
│    Hover:  [ Bordas: Vermelho | Palavra: Branca   | Fundo: Vermelho     ]   │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

#### 1. Botão de Reservar no Menu (Estado Normal — Menu Fechado)
- **Estado Normal:**
  - Bordas: Brancas (`border-2 border-[#ffffff]`)
  - Palavra: Branca (`text-[#ffffff]`)
  - Fundo: Transparente (`bg-transparent`)
- **Estado Hover:**
  - Bordas: Brancas (`border-2 border-[#ffffff]`)
  - Background: Branco (`bg-[#ffffff]`)
  - Palavra: Preto (`text-[#000000]`)

```html
<!-- Botão Reservar no Menu (Menu Fechado) -->
<a
  href="#reservas"
  id="nav-btn-book"
  class="inline-block border-2 border-[#ffffff] text-[#ffffff] bg-transparent hover:bg-[#ffffff] hover:text-[#000000] hover:border-[#ffffff] text-xs sm:text-sm font-bold tracking-widest uppercase px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg focus:outline-none transition-all duration-300 ease-out"
>
  Reservar
</a>
```

---

#### 2. Botão de Reservar no Menu (Quando o Menu Hambúrguer está Aberto)
- **Estado Normal:**
  - Bordas: Vermelho / Bordeaux (`border-2 border-[#69130D]`)
  - Palavra: Vermelho / Bordeaux (`text-[#69130D]`)
  - Fundo: Transparente (`bg-transparent`)
- **Estado Hover:**
  - Bordas: Vermelho / Bordeaux (`border-2 border-[#69130D]`)
  - Background: Vermelho / Bordeaux (`bg-[#69130D]`)
  - Palavra: Branca (`text-[#ffffff]`)

```html
<!-- Botão Reservar no Menu (Quando o Menu está Aberto) -->
<a
  href="#reservas"
  class="inline-block border-2 border-[#69130D] text-[#69130D] bg-transparent hover:bg-[#69130D] hover:text-[#ffffff] hover:border-[#69130D] text-xs sm:text-sm font-bold tracking-widest uppercase px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg focus:outline-none transition-all duration-300 ease-out"
>
  Reservar
</a>
```

---

#### 3. Botão da Barra de Reservas (Booking Bar)
*Segue com rigor o design do Botão de Reservar no Menu quando o menu hambúrguer está aberto.*

- **Estado Normal:**
  - Bordas: Vermelho / Bordeaux (`border-2 border-[#69130D]`)
  - Palavra: Vermelho / Bordeaux (`text-[#69130D]`)
  - Fundo: Transparente (`bg-transparent`)
- **Estado Hover:**
  - Bordas: Vermelho / Bordeaux (`border-2 border-[#69130D]`)
  - Background: Vermelho / Bordeaux (`bg-[#69130D]`)
  - Palavra: Branca (`text-[#ffffff]`)

```html
<!-- Botão da Barra de Reservas -->
<button
  type="submit"
  class="w-full sm:w-auto inline-flex items-center justify-center border-2 border-[#69130D] text-[#69130D] bg-transparent hover:bg-[#69130D] hover:text-[#ffffff] hover:border-[#69130D] text-xs sm:text-sm font-bold tracking-widest uppercase px-6 py-3 sm:px-8 sm:py-3.5 rounded-lg focus:outline-none transition-all duration-300 ease-out"
>
  Reservar
</button>
```

---

### 4.3. Tamanhos de Botões por Breakpoint

| Breakpoint | Tamanho da Fonte | Altura Mínima Recomendada | Padding Horizontal |
| :--- | :--- | :--- | :--- |
| **Mobile (`≤ 576px`)** | `12px` (`text-xs`) | 44px (touch target WCAG) | `px-5` (20px) |
| **Tablet (`768px - 991px`)** | `13px` / `14px` | 44px | `px-6` (24px) |
| **Desktop (`≥ 992px`)** | `14px` (`text-sm`) | 44px - 48px | `px-6` a `px-8` (24px - 32px) |

---

## 5. Resumo Rápido para Próximos Prompts

Ao desenvolver ou ajustar novas secções:
1. **Botões de Conteúdo (Texto Sublinhado):**
   - Variação 1: **Branco sublinhado para Branco** (`#ffffff`), linha desaparece suavemente no hover.
   - Variação 2: **Vermelho sublinhado para Vermelho** (`#69130D`), linha desaparece suavemente no hover.
2. **Botões de Ação Principal (Menu e Reservas):**
   - **Menu Fechado:** Borda branca, texto branco &rarr; Hover: Fundo branco, texto preto.
   - **Menu Aberto & Barra de Reservas:** Borda vermelha, texto vermelho &rarr; Hover: Fundo vermelho, texto branco.
3. **Breakpoints a indicar nos prompts:** `@media (max-width: 480px)`, `(max-width: 576px)`, `(min-width: 768px)`, `(min-width: 992px)`, `(min-width: 1200px)`, `(min-width: 1400px)`.
