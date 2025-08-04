# Teddy Teste 🚀

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Zustand](https://img.shields.io/badge/Zustand-000000?style=for-the-badge&logo=zustand&logoColor=white)
![TanStack Query](https://img.shields.io/badge/TanStack%20Query-FF4154?style=for-the-badge&logo=react-query&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

## 📌 Descrição

O Projeto implementa um sistema com uma tela inicial onde o usuário pode inserir o nome e, em seguida, e redirecionado para uma tela com a lista de todos os clientes cadastrados, onde poderácadastrar, selecionar, atualizar e excluir clientes, além de uma tela para visualização dos clientes selecionados.

## 🛠️ Tecnologias Utilizadas

- ⚛️ React
- 🐻 Zustand
- 🔄 TanStack Query
- 🎨 Tailwind CSS
- 🔷 TypeScript

## 📦 Instalação

## 🚀 Executando o Projeto

## 🌍 Deploy

## Micro FrontEnds

O projeto utiliza arquitetura de micro FrontEnds sendo eles

- host: micro frontEnd que consome os demais mfes
- mfe-design-system - micro frontend que fornece em tempo de execução os componentes reutilizaveis
- mfe-store - micro frontend que fornece em tempo de execução as stores globais utilizendo zustand

## 📂 Estrutura do Projeto

```
/microfrontends
├── host/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Card.tsx
│   │   │   ├── Clients.tsx
│   │   │   ├── ClientsSelect.tsx
│   │   │   └── Header.tsx
│   │   ├── pages/
│   │   │   ├── Login.tsx
│   │   │   └── Dashboard.tsx
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── vite.config.ts
│   └── package.json

├── mfe-design-system/
│   ├── src/
│   │   ├── components/
│   │   │   ├── BtnOrange.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Pagination.tsx
│   │   │   └── SideBar.tsx
│   │   ├── App.tsx
│   │   └── index.ts
│   ├── vite.config.ts
│   └── package.json

├── mfe-store/
│   ├── src/
│   │   ├── pages/
│   │   │   └── Home.tsx
│   │   ├── services/
│   │   │   └── api.ts
│   │   ├── stores/
│   │   │   ├── clients-store.ts
│   │   │   ├── selected-store.ts
│   │   │   └── ui-store.ts
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── vite.config.ts
│   └── package.json
```

## ✅ Funcionalidades

- 🌐 Interface moderna e responsiva com Tailwind CSS
- 🔄 Gerenciamento de estado simplificado com Zustand utilizando micro frontend
- 🚀 Gerenciamento de requisições e cache com TanStack Query
- 📌 Tipagem segura e manutenção facilitada com TypeScript

## Screenshots

![Texto Alternativo](https://yellow-fascinating-badger-992.mypinata.cloud/ipfs/bafybeiciccgvej4ailmlon7l6nrkaroz7fnrd4ms5bdpyxsyhchst2j3oe/Captura%20de%20tela%20de%202025-08-04%2009-46-07.webp)
![Texto Alternativo](https://yellow-fascinating-badger-992.mypinata.cloud/ipfs/bafybeiciccgvej4ailmlon7l6nrkaroz7fnrd4ms5bdpyxsyhchst2j3oe/Captura%20de%20tela%20de%202025-08-04%2009-47-51.webp)

![Texto Alternativo](https://yellow-fascinating-badger-992.mypinata.cloud/ipfs/bafybeiciccgvej4ailmlon7l6nrkaroz7fnrd4ms5bdpyxsyhchst2j3oe/Captura%20de%20tela%20de%202025-08-04%2009-48-13.webp)

![Texto Alternativo](https://yellow-fascinating-badger-992.mypinata.cloud/ipfs/bafybeiciccgvej4ailmlon7l6nrkaroz7fnrd4ms5bdpyxsyhchst2j3oe/Captura%20de%20tela%20de%202025-08-04%2009-49-40.webp)

![Texto Alternativo](https://yellow-fascinating-badger-992.mypinata.cloud/ipfs/bafybeiciccgvej4ailmlon7l6nrkaroz7fnrd4ms5bdpyxsyhchst2j3oe/iPhone-13-PRO-localhost.webp)

![Texto Alternativo](https://yellow-fascinating-badger-992.mypinata.cloud/ipfs/bafybeiciccgvej4ailmlon7l6nrkaroz7fnrd4ms5bdpyxsyhchst2j3oe/iPhone-13-PRO-localhost%20%282%29.webp)

---

Feito com ❤️ por [Max Assis](https://github.com/maxassis)
