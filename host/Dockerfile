
# Use uma imagem base Node.js para construir a aplicação
FROM node:20-alpine as build

WORKDIR /app

# Copie os arquivos de package.json e package-lock.json
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código da aplicação
COPY . .

# Construa a aplicação
RUN npm run build

# Use uma imagem Node.js menor para servir a aplicação
FROM node:20-alpine

WORKDIR /app

# Instale o pacote `serve` globalmente
RUN npm install -g serve

# Copie os arquivos de build da etapa anterior
COPY --from=build /app/dist .

# Exponha a porta que o `serve` irá usar (padrão: 3000)
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["serve", "-s", ".", "-l", "3000"]
