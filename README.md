# OneBot - Simple Bot for WhatsApp with many functions

Este projeto usa como base o [MyZap](https://github.com/billbarsch/myzap) e outros projetos OpenSource;

## Como instalar

Este projeto foi testado no Debian 9 e Ubuntu 18

`sudo apt update;`

`sudo apt install -y git`

`cd /root`

`git clone https://github.com/Andley302/onebot.git`

Instalando dependências:

`cd /root/onebot`

`chmod +x install_dep.sh`

`./install_dep.sh`

Caso você tenha problemas para instalar as dependências pelo script,instale manualmente:

`sudo apt-get install software-properties-common -y;`

`wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | sudo apt-key add -;`

`sudo sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list';`

`cd /root;`

`sudo apt update;`

`sudo apt install npm;`

`sudo apt install nodejs;`


`sudo apt install -y curl nano cron nano graphicsmagick gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget build-essential apt-transport-https libgbm-dev -y;`

`curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -;`

`sudo apt install google-chrome-stable -y;`

`sudo apt install ffmpeg -y;`

`cd /root/onebot;`

`mkdir media_cache;`

`cd /root/onebot/scripts &&`

`chmod +x login;`

`chmod +x restartbot;`

`chmod +x sendreq;`

`chmod +x startbot;`

`chmod +x stopbot;`

### Instalar dependências do NPM

`wget https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh`

`chmod +x install.sh`

`./install.sh`

`source ~/.bashrc;`

`nvm install 16.4.2;`

`cd /root/onebot && npm install`

### Iniciar sessão pela primeira vez

Por padrão,a sessão está com o nome de "my_session_1",você pode alterar,ou adicionar mais sessões,
porém lembre de editar o(s) nome(s) da(s) mesma(s) nos scripts no diretório /root/onebot/scripts;

Também por padrão,a porta usada é a "3333",certifique-se que a mesma esteja aberta em seu servidor;

`cd /root/onebot/scripts && ./login`

Em um navegador,acenda o seguinte endereço para iniciar a sessão:

`http://seu_ip:3333/start?sessionName=my_session_1`

*Seu IP: IP ou domínio de seu servidor

Agora no terminal,aponte seu telefone para ler o QR Code gerado,ao final deve aparecer algo como "Connected"

### Iniciar sessão depois do primeiro login

Para rodar em segundo plano,o script usa o screen para deixar o OneBot ativo,para iniciar ele,rode o seguinte comando:

`cd /root/onebot/scripts && ./startbot`

Ou se preferir,pode rodar manualmente,sem ser pela Screen

`cd /root/onebot/scripts && ./login`

ou

`cd /root/onebot && node index.js`

### Fechar sessão(parar bot)

`cd /root/onebot/scripts && ./stopbot`

### Deletar sessão

Por padrão os tokens da sessão são salvo em "/root/onebot/tokens",para remover use:

`cd /root/onebot && rm -rf tokens`


### Funções disponíveis no momento

Pesquisa na Wikipédia;
Pesquisa no Brainly (OFF)!;
Fazer sticker com imagem;
Fazer sticker animado com vídeo ou gif;
Download de aúdio(MP3) e vídeo (MP4) do YouTube;
Consulta de rastreio de pacote dos correios(Obs.:Apenas consulta,não salva o pacote);
Ver previsão do tempo para uma cidade;

/comandos > Mostra todos comandos dispoíveis no bot

### Algumas ressalvas

Em nossos testes o bot parou de funcionar as vezes(fechou a screen),não sabemos o real motivo disso;

É necessário que o dispostivo usado esteja conectado à internet para correto funcionamento do bot;

A função de fazer stickers animados pode não funcionar com algumas mídias,não sabemos ainda o que causa isso;

A função de baixar vídeos e aúdios do YouTube pode não apagar á mídia enviada ao usuário do servidor (pasta "media_cache" em "root/onebot"),
verifique e apague manualmente para não acumular lixo em sua máquina


