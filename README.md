# CheckUser - API para checagem da validade de logins ssh em banco de dados SQL usando JavaScript


Esta API serve para consulta de validade de logins ssh salvos em banco de dados SQL,usado em painéis de gerenciamento de logins SSH,como SSHPlus.
Após a instalação da API do lado do servidor,você pode implementar em seu aplicativo para fazer as requests,adapte e use a seu gosto!

Alguns pontos importantes (Lado do servidor):

> Verifique se as portas do seu servidor painel/banco de dados estão abertas.Por padrão a API usa a porta 8989(Pode ser alterada no .env na pasta raiz do projeto CheckUser);
> 
> Verifique o nome do banco de dados do seu painel.O padrão é "sshplus",você pode trocá-lo no arquivo index.js na pasta raiz do projeto CheckUser;
> 
> A senha do banco de dados pode ser alterada no .env na pasta raiz do projeto CheckUser;
> 
> A instalação automática (script abaixo) pode falhar em alguns casos.Se ocorrer,tente instalar e corrigir os erros manualmente,esta API está disponível gratuitamente porém não há suporte de instalação e correção de erros)

## Como instalar (Servidor)

Este projeto foi testado no Debian 9 e Ubuntu 18

Obs.: Este script abaixo pode falhar em alguns casos.Se ocorrer,tente instalar e corrigir os erros manualmente,esta API está disponível gratuitamente porém não há suporte de instalação e correção de erros)

`cd /root && wget https://raw.githubusercontent.com/Andley302/CheckUser/main/install_script.sh && chmod +x install_script.sh && ./install_script.sh`

Para verificar se a instalação foi bem sucedida,rode o comando "screen -ls" e veja se a screen "checkuser" está rodando;

## Como instalar (Android-Cliente)

Recomendo antes de tudo testar com o APK abaixo inserindo os dados de seu servidor (algum usuário ssh e a URL + Porta de seu painel,o padrão da URL é "http://exemplo.com:8989/checkUser"

APK de teste: https://raw.githubusercontent.com/Andley302/CheckUser/main/android/CheckUserAndroidExample.apk

A source (.zip) do cliente Android está disponível em: https://raw.githubusercontent.com/Andley302/CheckUser/main/android/CheckUserAndroidExample%20(Source%20%2B%20App).zip

Alguns pontos importantes (Lado do cliente-app):

> Pode ser que mude uma coisa ou outra dependendo da IDE que você irá usar (Android Studio,AIDE).Tudo depende de adaptação;
> 
> Não se esqueça das permissões de acesso à internet e de "android:usesCleartextTraffic="true" na tag application para correto funcionamento;
> 
> Adapte a parte de obter o usuário,URL servidor e URL contato conforme seu projeto


