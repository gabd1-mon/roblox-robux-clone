# Roblox Robux Clone 🎮

Clone da interface do Roblox focado no painel de saldo e transferência de Robux, desenvolvido com **React**, **TypeScript**, **Vite** e containerizado com **Docker**.

---

## 📋 Pré-requisitos

Para rodar este projeto no **Windows**, você precisará ter instalado:

1. **Git** (opcional, para clonar o repositório): [Download Git](https://git-scm.com/download/win)
2. **Node.js** (Versão 18 ou superior): [Download Node.js](https://nodejs.org/)
   * *Recomendado baixar a versão LTS.*
3. **Docker Desktop** (opcional, caso queira rodar via Docker): [Download Docker Desktop](https://www.docker.com/products/docker-desktop/)

---

## 🚀 Como Rodar o Projeto Passo a Passo (Windows)

Você pode escolher rodar o projeto usando **Node.js diretamente** ou **Docker**.

---

### Opção 1: Rodando com Node.js (Modo de Desenvolvimento)

#### 1. Abrir o Terminal
No Windows, pressione `Win + R`, digite `powershell` (ou `cmd`) e aperte **Enter**. 

#### 2. Clonar ou Acessar a Pasta do Projeto
Se você já baixou o projeto, navegue até a pasta no terminal:
```powershell
cd C:\caminho\para\o\roblox-robux-clone
```

Ou se for clonar do GitHub:
```powershell
git clone https://github.com/gabd1-mon/roblox-robux-clone.git
cd roblox-robux-clone
```

#### 3. Instalar as Dependências
Execute o comando abaixo para baixar os pacotes necessários:
```powershell
npm install
```

#### 4. Iniciar o Servidor de Desenvolvimento
Rode o servidor local:
```powershell
npm run dev
```

#### 5. Acessar no Navegador
Após rodar o comando, o terminal mostrará um endereço local (geralmente `http://localhost:5173`). 
Abra seu navegador (Chrome, Edge, Firefox) e acesse:
👉 **[http://localhost:5173](http://localhost:5173)**

---

### Opção 2: Rodando com Docker Desktop

Se você tem o **Docker Desktop** instalado e aberto no Windows:

#### 1. Certifique-se de que o Docker Desktop está rodando
Confira se o ícone da baleia do Docker está ativo perto do relógio do Windows (canto inferior direito).

#### 2. Construir a Imagem Docker
Na pasta raiz do projeto via PowerShell / Prompt de Comando:
```powershell
docker build -t roblox-robux-clone .
```

#### 3. Iniciar o Container
Rode o container mapeando a porta `8080` do Windows para a porta `80` do container:
```powershell
docker run -d -p 8080:80 --name roblox-app roblox-robux-clone
```

#### 4. Acessar no Navegador
Abra o seu navegador e acesse:
👉 **[http://localhost:8080](http://localhost:8080)**

#### 5. Parar o Container (Quando terminar)
Para parar e remover o container rodando:
```powershell
docker stop roblox-app
docker rm roblox-app
```

---

## 🛠️ Comandos Úteis

| Comando | Descrição |
| :--- | :--- |
| `npm run dev` | Inicia o servidor de desenvolvimento Vite |
| `npm run build` | Gera os arquivos otimizados para produção na pasta `dist` |
| `npm run preview` | Visualiza localmente o build de produção |

---

## 📦 Tecnologias Utilizadas

- **React 19**
- **TypeScript**
- **Vite**
- **Lucide React** (Ícones)
- **Nginx & Docker** (Produção/Containerização)
