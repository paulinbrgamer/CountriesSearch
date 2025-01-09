# SearchCountryReact

SearchCountryReact é uma aplicação web desenvolvida com React que permite aos usuários buscar e filtrar países com base em critérios específicos. Esta aplicação faz parte de um desafio relacionado ao repositorio 30 Days of React:https://github.com/Asabeneh/30-Days-Of-React

## 🚀 Demonstração

Você pode acessar o site publicado no Netlify através do link abaixo:

🔗 [SearchCountryReact](https://searchcountryreact.netlify.app)

---

## ✨ Funcionalidades

- **Busca de países**: Pesquise rapidamente por países utilizando o campo de busca.
- **Gráficos interativos**: Exibição de dados em formato gráfico gerados sem bibliotecas externas.
- **Interface responsiva**: Compatível com dispositivos móveis, tablets e desktops.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- **React.js**: Biblioteca para construção da interface de usuário.
- **React Hooks**: Para gerenciamento de estado e manipulação de referências.
- **CSS Modules**: Para estilização de componentes.
- **Shadcn/ iu**: Para utilização de alguns componentes prontos.
- **Netlify**: Para o deploy da aplicação.
- **Bibliotecas auxiliares**:
  - `axios` Para requisições HTTP.
  - `Tailwind` Para estilização de components do shadcn ui
  - `lodash` Para efeito debounce quando for feito a pesquisa

---

## 📂 Estrutura do Projeto

Abaixo está uma visão geral da estrutura do projeto:
src/ ├── components/ # Componentes reutilizáveis da aplicação │ ├── GraphComponent/ # Componente de gráficos │ ├── Header/ # Cabeçalho da aplicação │ ├── SearchComponent/ # Campo de busca │ └── SearchContainer/ # Container para o gerenciamento de filtros e resultados ├── ui/ # Estilização ou componentes de UI genéricos ├── lib/ # Funções e bibliotecas utilitárias ├── services/ # Configuração e funções para comunicação com APIs externas ├── App.jsx # Componente principal da aplicação ├── App.css # Estilização principal ├── index.css # Estilos globais └── main.jsx

