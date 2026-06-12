
# Documentação do Projeto

**Descrição do projeto**

Aplicativo mobile simples criado em React Native com Expo para apresentar o perfil de um(a) candidato(a) a Desenvolvedor(a) Mobile Júnior. O app contém telas para visualizar informações pessoais, habilidades e projetos, com navegação por abas inferiores e um menu drawer.

**Tecnologias utilizadas**

- React Native (Expo)
- React Navigation (Stack, Tabs, Drawer)
- JavaScript (ES6+)
- npm

**Funcionalidades implementadas**

- Perfil: imagem, nome, cargo, descrição, contato, habilidades e listagem de projetos.
- Habilidades: tela com lista de habilidades (FlatList).
- Projetos: página com lista de projetos.
- Home: cards que mostram usuários/produtos; ao tocar no card principal, navega para o `Perfil`.
- Navegação: abas inferiores (TabBar), Stack para detalhes e Drawer com links para categorias.

**Explicação detalhada**

- Telas principais:
   - **Home**: [src/screens/HomeScreen.js](src/screens/HomeScreen.js#L1) — lista de cards gerada a partir de `src/data/products.js`.
   - **Perfil**: [src/screens/ProfileScreen.js](src/screens/ProfileScreen.js#L1) — exibe `imagem`, `nome`, `cargo`, `sobre`, `contato`, `habilidades` e `projetos` (usa `src/data/products.js`, `src/data/skills.js`, `src/data/projects.js`).
   - **Habilidades**: [src/screens/FavoritesScreen.js](src/screens/FavoritesScreen.js#L1) — lista de habilidades com `FlatList`.
   - **Projetos**: [src/screens/CartScreen.js](src/screens/CartScreen.js#L1) — lista de projetos.
   - **Detalhes**: [src/screens/ProductDetailScreen.js](src/screens/ProductDetailScreen.js#L1) — tela de detalhe para itens.

- Navegação:
   - Drawer: [src/navigation/DrawerNavigator.js](src/navigation/DrawerNavigator.js#L1) — menu lateral com categorias que redirecionam para `Home`, `Habilidades` e `Projetos`.
   - Tabs: [src/navigation/TabNavigator.js](src/navigation/TabNavigator.js#L1) — abas inferiores (`Início`, `Habilidades`, `Projetos`, `Perfil`).
   - Stack: [src/navigation/StackNavigator.js](src/navigation/StackNavigator.js#L1) — pilha usada pela aba `Início` para navegar a `ProductDetail`.

- Organização do código:
   - `src/screens/` — telas da aplicação.
   - `src/navigation/` — arquivos de navegação (drawer, tabs, stack).
   - `src/data/` — dados estáticos usados para popular as listas (`products.js`, `skills.js`, `projects.js`, `categories.js`).
   - `assets/` — imagens (ex.: `imagem-perfil.png`).

- Decisões e observações técnicas:
   - Usei componentes nativos do React Native (`View`, `Text`, `Image`, `FlatList`, `ScrollView`, `TouchableOpacity`) para atender ao requisito de não usar bibliotecas visuais prontas.
   - Dados são locais (arquivos em `src/data/`) para simplificar o teste e a entrega; podem ser substituídos por uma API posteriormente.
   - A navegação foi separada por responsabilidade (Tabs para navegação principal, Stack para detalhes e Drawer para categorias) para facilitar manutenção.

**Diferenciais**

- Código organizado por pastas e arquivos; fácil extensibilidade.
- Uso de `FlatList` e `ScrollView` onde adequado para desempenho e UX.

**Como executar o projeto**

1. Instale dependências:

```bash
npm install
```

2. Inicie o Expo:

```bash
npx expo start
```

3. Abra no Expo Go (celular) ou emulador/navegador conforme instruções do terminal.

**Autor**

- Nome: Seu Nome (substitua pelo seu nome)

---

Se quiser, eu atualizo o autor, adiciono screenshots nas seções de telas ou incluo instruções de commit/branching para entrega no GitHub.
