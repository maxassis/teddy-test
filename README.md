# Teddy Teste 🚀

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Zustand](https://img.shields.io/badge/Zustand-000000?style=for-the-badge&logo=zustand&logoColor=white)
![TanStack Query](https://img.shields.io/badge/TanStack%20Query-FF4154?style=for-the-badge&logo=react-query&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Cypress](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)



## 📌 Descrição

O projeto implementa um sistema com uma tela inicial onde o usuário pode inserir seu nome. Após isso, é redirecionado para uma tela que exibe a lista de todos os clientes cadastrados. Nessa interface, é possível **cadastrar**, **selecionar**, **atualizar** e **excluir** clientes, além de acessar uma tela dedicada para **visualização detalhada dos clientes selecionados**.


## 🛠️ Tecnologias Utilizadas

- ⚛️ React
- 🐻 Zustand
- 🔄 TanStack Query
- 🎨 Tailwind CSS
- 🔷 TypeScript
- 🧪 Cypress  

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

## 🧩 Micro FrontEnds

O projeto adota uma arquitetura baseada em **Micro Frontends**, promovendo a modularização e a reutilização de funcionalidades. Os módulos estão organizados da seguinte forma:

- **host**: Responsável por orquestrar e consumir os demais micro frontends. É a aplicação principal que integra todo o sistema.
- **mfe-design-system**: Fornece, em tempo de execução, os componentes visuais reutilizáveis da aplicação, como botões, inputs, barra lateral, entre outros.
- **mfe-store**: Expõe as stores globais utilizando **Zustand** e realiza a gestão de estado compartilhado entre os módulos.


## 📦 Instalação
Antes de começar, certifique-se de que você tem o **Node.js** instalado em sua máquina (recomenda-se a versão 18 ou superior).

1. Clone o repositório:
```bash
   git clone https://github.com/maxassis/teddy-test.git
   cd teddy-test
   ```
   
2. Instale as dependências de cada micro frontend:
```bash
cd host
npm install
cd ../mfe-design-system
npm install
cd ../mfe-store
npm install
```
## 🚀 Executando o Projeto
Para rodar o projeto localmente, você deve iniciar todos os micro frontends. Em terminais separados, execute:

1. design-system
```bash
cd mfe-design-system
npm run build
npm run preview
```
2. stores
```bash
cd mfe-store
npm run build
npm run preview
```
3. Host (Aplicação Principal)
 ```bash
cd host
npm run dev
```

**Acesse no navegador: [http://localhost:5173](http://localhost:5173)**

> Certifique-se de que as portas usadas por cada micro frontend estejam disponíveis (ou configure se necessário no `vite.config.ts`).

## 📦 Instalação e Execução com Docker

Para executar este projeto utilizando Docker, siga os passos abaixo.

### Pré-requisitos

- **Docker:** Certifique-se de que o [Docker](https://docs.docker.com/get-docker/) está instalado e em execução na sua máquina.
- **Docker Compose:** É necessário ter o [Docker Compose](https://docs.docker.com/compose/install/) instalado.

### Arquivos Docker

O projeto já contém os `Dockerfiles` necessários para cada micro frontend (`host`, `mfe-design-system`, `mfe-store`).

### Executando a Aplicação

1.  **Construa e inicie os contêineres:**
    Execute o comando abaixo no terminal, na raiz do projeto:

    ```bash
    docker-compose up -d --build
    ```
    Este comando irá construir as imagens Docker para cada serviço e iniciar os contêineres em background.

2.  **Acesse as aplicações:**
    -   **Host (Aplicação principal):** [http://localhost:8080](http://localhost:8080)
    -   **MFE Design System:** [http://localhost:8081](http://localhost:8081)
    -   **MFE Store:** [http://localhost:8082](http://localhost:8082)

3.  **Parando a aplicação:**
    Para parar todos os contêineres, execute o comando:
    ```bash
    docker-compose down
    ```
    **Observação sobre mfe Remotos:** Por padrão, o `host` esta configurado para consumir os micro-frontends a partir dos endereços de produção (Supabase). Se desejar que o `host` consuma os micro-frontends a partir dos serviços Docker locais (localhost), você precisará modificar o arquivo `host/vite.config.ts` e ajustar os `remotes` para apontar para `http://localhost:8081/assets/design-system-entry.js` para `mfe-design-system` e `http://localhost:8082/assets/store-entry.js` para `mfe-store`.

## 🧪 Executando os Testes
Os testes de ponta a ponta (E2E) são escritos com [Cypress](https://www.cypress.io/) e estão localizados no diretório `host`.

### Pré-requisitos  
Antes de executar os testes, certifique-se de que todas as dependências do projeto `host` foram instaladas.

1.  **Navegue até o diretório do host:**

```bash
cd host
```

2.  **Instale as dependências:**
```bash
npm install
```
### Comandos de Teste

Você pode executar os testes de duas maneiras:

1.  **Modo Interativo (Recomendado para desenvolvimento):**

Abre a interface do Cypress, permitindo que você veja os testes rodando em um navegador e use as ferramentas de depuração.

```bash
npm run cypress:open
```

2.  **Modo Headless (Para integração contínua ou verificação rápida):**
Executa todos os testes em segundo plano, sem abrir uma interface de navegador. Os resultados são exibidos diretamente no terminal.

```bash
npm run cypress:run
```

## 🌍 Deploy
[https://teddy-test-teal.vercel.app/](https://teddy-test-teal.vercel.app/)


## Screenshots

![Texto Alternativo](https://yellow-fascinating-badger-992.mypinata.cloud/ipfs/bafybeiciccgvej4ailmlon7l6nrkaroz7fnrd4ms5bdpyxsyhchst2j3oe/Captura%20de%20tela%20de%202025-08-04%2009-46-07.webp)
![Texto Alternativo](https://yellow-fascinating-badger-992.mypinata.cloud/ipfs/bafybeiciccgvej4ailmlon7l6nrkaroz7fnrd4ms5bdpyxsyhchst2j3oe/Captura%20de%20tela%20de%202025-08-04%2009-47-51.webp)

![Texto Alternativo](https://yellow-fascinating-badger-992.mypinata.cloud/ipfs/bafybeiciccgvej4ailmlon7l6nrkaroz7fnrd4ms5bdpyxsyhchst2j3oe/Captura%20de%20tela%20de%202025-08-04%2009-48-13.webp)

![Texto Alternativo](https://yellow-fascinating-badger-992.mypinata.cloud/ipfs/bafybeiciccgvej4ailmlon7l6nrkaroz7fnrd4ms5bdpyxsyhchst2j3oe/Captura%20de%20tela%20de%202025-08-04%2009-49-40.webp)

![Texto Alternativo](https://yellow-fascinating-badger-992.mypinata.cloud/ipfs/bafybeiciccgvej4ailmlon7l6nrkaroz7fnrd4ms5bdpyxsyhchst2j3oe/iPhone-13-PRO-localhost.webp)

![Texto Alternativo](https://yellow-fascinating-badger-992.mypinata.cloud/ipfs/bafybeiciccgvej4ailmlon7l6nrkaroz7fnrd4ms5bdpyxsyhchst2j3oe/iPhone-13-PRO-localhost%20%282%29.webp)

---

Feito por [Max Assis](https://github.com/maxassis)

