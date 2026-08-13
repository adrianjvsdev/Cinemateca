# Nossa Cinemateca 🎞️

Um pequeno presente digital: uma cinemateca particular com filmes para assistir a dois.

Site estático, feito em HTML, CSS e JavaScript puro (sem frameworks, sem backend). Funciona direto no navegador e está pronto para publicar no GitHub Pages.

```
/cinemateca
│
├── index.html
├── style.css
├── script.js
│
├── /assets
│   ├── /images     ← pôsteres dos filmes ficam aqui
│   └── /icons
│
└── README.md
```

---

## 1. Como rodar localmente

Não precisa instalar nada. Duas opções:

**Opção simples:** dê duplo clique em `index.html` e abra no navegador.

**Opção recomendada** (evita bloqueios de segurança do navegador com imagens locais): rode um servidor local simples.

Com Python instalado:
```bash
cd cinemateca
python3 -m http.server 8000
```
Depois acesse `http://localhost:8000` no navegador.

Com Node instalado:
```bash
npx serve cinemateca
```

---

## 2. Como substituir os pôsteres dos filmes

Todos os filmes usam imagens da pasta `assets/images/`, com estes nomes exatos:

```
brilho-eterno.jpg
interestelar.jpg
obsessao.jpg
diario-de-uma-paixao.jpg
homem-aranha.jpg
homem-aranha-2.jpg
castelo-animado.jpg
antes-do-amanhecer.jpg
a-origem.jpg
ilha-do-medo.jpg
your-name.jpg
vantagens-de-ser-invisivel.jpg
10-coisas-que-odeio-em-voce.jpg
questao-de-tempo.jpg
```

Basta colocar uma imagem com esse nome exato dentro de `assets/images/` que ela passa a aparecer automaticamente nos cards, no TOP 3 e na modal — não precisa mexer em nenhum código.

Enquanto uma imagem não existir, o site mostra um pôster de espera (`placeholder.svg`) no lugar, então nada quebra visualmente.

**Dica de proporção:** as imagens são exibidas em formato de pôster (proporção 2:3, tipo 400×600px). Fotos em outras proporções são cortadas automaticamente para preencher o espaço.

---

## 3. Como adicionar (ou remover) um filme

Todos os filmes estão em um único lugar: o array `filmes` no topo do arquivo `script.js`.

Para adicionar um filme novo, copie um bloco existente e ajuste os campos:

```js
{
  id: "nome-unico-do-filme",       // sem espaços, sem acento
  titulo: "Título do Filme",
  ano: 2020,
  genero: "Gênero",
  duracao: "120 min",
  categorias: ["chorar"],          // veja as categorias abaixo
  poster: "assets/images/nome-do-arquivo.jpg",
  sinopse: "Resumo curto e sem spoiler.",
  motivo: "Por que esse filme entrou na lista.",
  trailer: "https://www.youtube.com/watch?v=XXXXXXXXXXX"
}
```

**Categorias disponíveis:** `top3`, `romance`, `aventura`, `noite`, `pensar`, `chorar`, `rir`.
Um filme pode pertencer a mais de uma categoria (é só listar todas no array `categorias`).

Se o filme entrar no TOP 3, adicione também o campo `numero` (`"01"`, `"02"` ou `"03"`) — ele controla a ordem de exibição.

Para remover um filme, basta apagar o bloco correspondente.

---

## 4. Como alterar os trailers

Cada filme tem um campo `trailer` dentro do array `filmes` em `script.js`, com o link direto do YouTube:

```js
trailer: "https://www.youtube.com/watch?v=XXXXXXXXXXX"
```

Basta trocar a URL. O botão "▶ Assistir trailer" (nos cards e na modal) sempre abre esse link em uma nova aba.

---

## 5. Como publicar no GitHub Pages

1. Crie um repositório novo no GitHub (pode ser privado, se preferir).
2. Envie os arquivos deste projeto para o repositório:
   ```bash
   cd cinemateca
   git init
   git add .
   git commit -m "Nossa Cinemateca"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
   git push -u origin main
   ```
3. No GitHub, vá em **Settings → Pages**.
4. Em "Source", selecione a branch `main` e a pasta `/ (root)`.
5. Salve. Depois de alguns instantes, o site estará disponível em:
   ```
   https://SEU-USUARIO.github.io/SEU-REPOSITORIO/
   ```

Se o repositório for privado, o GitHub Pages pode exigir uma conta paga — nesse caso, vale considerar deixá-lo público ou usar outro serviço de hospedagem gratuita para sites estáticos (Netlify, Vercel, Cloudflare Pages funcionam do mesmo jeito, bastando arrastar a pasta do projeto).

---

## 6. Estrutura geral do site

- **Hero** — tela inicial com o convite para "entrar na sessão".
- **Introdução narrativa** — sequência curta de frases antes do catálogo (pode ser pulada a qualquer momento).
- **TOP 3** — os três filmes em destaque.
- **Categorias temáticas** — Romance, Para ver juntos, Noite tranquila, Para discutir o final, Para chorar, Para não pensar demais.
- **Nossa próxima sessão** — mostra o filme escolhido (salvo no `localStorage` do navegador, ou seja, fica guardado localmente em quem abrir o link).
- **Modal de filme** — abre ao clicar em qualquer card, com sinopse, motivo da escolha, trailer e botão "Quero assistir".

Tudo funciona sem servidor, sem banco de dados e sem envio de dados para lugar nenhum — a escolha do filme fica salva apenas no navegador de quem está usando o site.

---

Feito para duas pessoas, alguns filmes e várias horas de história. ❤️
