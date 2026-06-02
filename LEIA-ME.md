# Intensivão Caveira PMPE — Versão Otimizada

## ✅ O que mudou nesta versão

### Datas e nomenclatura
- Datas: **12 e 13 de maio às 19h45**
- Renomeado de "Aulão" → **"Intensivão Caveira PMPE"** em toda a página
- Countdown JS atualizado para `2026-05-12T19:45:00-03:00`

### Identidade visual
- ✅ Sirene azul/vermelha (preservada)
- ✅ Logos CPPEM e PMPE (preservados)
- ✅ Paleta institucional preservada
- 🔄 **Cor primária invertida**: vermelho como primária, azul/preto/branco como secundárias
- 🔄 Botões: fundo vermelho, hover/active azul (funciona em mobile também)
- 🔄 Palavras de destaque (`.verde`, `.destaque`): todas em vermelho
- 🔄 Gradientes azul→vermelho: mantidos como você pediu

### Estrutura nova
1. Hero forte com headline direta + subheadline + countdown + CTA
2. **NOVA: Faixa de prova social imediata** (14K+ aprovados, 15 concursos, 7+ anos, 100% foco PMPE)
3. Alert banner de urgência
4. **NOVA: Seção de DOR** (não sei por onde começar / medo de estudar errado / tempo apertando) + promessa de solução
5. Para quem é (mantido, com copy ajustado)
6. O Intensivão (2 dias) + CTA inline
7. O que você recebe + bônus PDF Raio-X
8. **Quem é Everton** (com **foto real** + autoridade)
9. Por que R$9,90 (filtro de comprometimento)
10. Depoimentos (placeholders prontos pra fotos)
11. FAQ
12. CTA final

### CTAs variados
- Hero: "QUERO GARANTIR MINHA VAGA NA PMPE"
- Meio: "ENTRAR NO INTENSIVÃO AGORA"
- Pós-Everton: "ESTUDAR COM EVERTON POR R$9,90"
- Final: "GARANTIR MEU PLANO DE APROVAÇÃO"
- Nav: "QUERO MINHA VAGA R$9,90"

---

## 📸 COMO TROCAR OS DEPOIMENTOS POR FOTOS REAIS

Quando você tiver os prints/fotos dos aprovados:

### 1. Salve as imagens em `assets/img/depoimentos/`
Recomendo nomes:
- `aluno-1.jpg` (Fabrício)
- `aluno-2.jpg` (Marcela)
- `aluno-3.jpg` (Vinícius)

### 2. Edite o `index.html`, na seção "DEPOIMENTOS"

Para cada card, faça **2 ajustes**:

**ANTES:**
```html
<div class="depo-avatar">
  <!-- <img src="assets/img/depoimentos/aluno-1.jpg" alt="Fabrício S."> -->
  🦁
</div>
```

**DEPOIS:**
```html
<div class="depo-avatar tem-foto">
  <img src="assets/img/depoimentos/aluno-1.jpg" alt="Fabrício S.">
</div>
```

(adiciona a classe `tem-foto` no `.depo-avatar` e descomenta o `<img>`, removendo o emoji)

O CSS já está pronto pra renderizar a foto certinho — circular, recortada, sem distorção.

### 3. Para depoimentos com prints de WhatsApp/Diário Oficial
Se quiser adicionar prints maiores em vez do avatar redondo, me avisa que crio o card específico pra isso.

---

## 🖼️ COMO ADICIONAR A IMAGEM OG (compartilhamento social)

Crie uma imagem 1200x630px com:
- Foto do Everton
- Brasão PMPE
- Texto: "Intensivão Caveira PMPE — 12 e 13 de Maio"
- Logo CPPEM

Salve em `assets/img/og-cover.jpg` — o HTML já aponta pra ela.

---

## 🛡️ FALLBACKS DE PROTEÇÃO

### Logo CPPEM (risco do hotlink)
Se o GitHub cair ou bloquear, o `onerror` da `<img>` substitui automaticamente por um bloco SVG inline com a sigla "CPPEM" estilizada com gradiente vermelho/azul. Não quebra a página em hipótese alguma.

### Foto do Everton
Já está local em `assets/img/everton-mota.jpg` (otimizada de 7.8MB → 134KB).

---

## 📱 MOBILE-FIRST

- Botões: `min-height: 56px` (toque confortável)
- CTAs: largura total em telas <480px
- Faixa de prova social: 4 colunas → 2 colunas no mobile
- Cards de dor: 3 colunas → 1 coluna no mobile
- Foco visível com outline vermelho (acessibilidade)
- `:active` aplica os mesmos efeitos de `:hover` (mobile não tem hover)

---

## 🚀 DEPLOY

Sobe o conteúdo da pasta `aulao-pmpe/` direto pro servidor. Estrutura inalterada:
- `index.html`
- `assets/css/style.css`
- `assets/js/main.js`
- `assets/img/` (pmpe.png, everton-mota.jpg, policiais-pmpe.jpg)

Nenhuma dependência de build, nenhum framework. Código puro e simples de editar.
