# Libra Translate - Frontend

Este é o frontend do projeto **Libra Translate**, desenvolvido com React Native utilizando Expo. O aplicativo permite que usuários filmem gestos da Língua Brasileira de Sinais (Libras) com a câmera do dispositivo, e envia essas imagens para um servidor backend, que retorna a letra correspondente com auxílio de inteligência artificial.



## 🧪 Tecnologias Utilizadas

- React Native
- Expo
- Axios (para requisições HTTP)  **Caso ainda não tenha instalado: npm install axios**
- Camera (via `expo-camera`)

## ⚙️ Pré-requisitos

- Node.js (recomenda-se a versão LTS)
- Expo CLI (`npm install -g expo-cli`)

## 🚀 Como Rodar o App

1. **Clone o repositório**

   ```bash
   git clone https://github.com/dev-lovers/libra-translate-fe.git
   cd libra-translate-fe
   ```

2. **Instale as dependências**

   ```bash
   npm install
   ```

   > ⚠️ Caso ocorra um erro de dependência (ERESOLVE), especialmente relacionado ao `styled-components` ou `react-dom`, use o seguinte comando alternativo:

```bash
npm install --legacy-peer-deps


3. **Configure o endereço da API**  **SE NECESSÁRIO FORA DE CASA** 

   No código-fonte (geralmente em um arquivo `config.js`, `api.js` ou direto onde for feita a requisição), atualize a URL da API:

   - Se for testar no navegador/emulador:
     ```js
     const API_URL = "http://localhost:8000";
     ```

   - Se for testar no celular real:
     ```js
     const API_URL = "http://<seu_ip_local>:8000";
     ```
     Substitua `<seu_ip_local>` por algo como `192.168.0.10`.

4. **Inicie o servidor Expo**

   ```bash
   npx expo start
   ```

5. **Teste no celular**

   - Instale o app **Expo Go** no seu celular
   - Escaneie o QR code que aparece no navegador para abrir o app

## 📡 Conexão com o Backend

O app se comunica com um servidor FastAPI disponível na porta `8000`. Certifique-se de que o backend esteja rodando com:

```bash
uvicorn app.main:app --reload
```

E que ambos os dispositivos (PC e celular) estejam conectados à **mesma rede Wi-Fi**, se for testar no celular.

## 🤝 Contribuições

Contribuições são bem-vindas! Para mudanças maiores, abra uma *issue* para discussão.

## 📄 Licença

Este projeto está licenciado sob os termos do arquivo [LICENSE](LICENSE).

---

Criado por [DevLovers](https://github.com/dev-lovers)
