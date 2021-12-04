#!/bin/bash
#INSTALA PACOTES
echo -ne "\033[1;32m INSTALADOR CHECKUSER FREE...\033[1;37m ";
sleep 5;
cd /root;
apt-get update;
apt-get install git -y;
apt-get install crontab -y;
apt-get install screen -y;
apt-get install npm -y;
apt-get install nodejs -y;
git clone https://github.com/Andley302/CheckUser.git;
cd /root/CheckUser;
clear;
chmod +x iptables.sh;
./iptables.sh;
chmod +x startcheck.sh;
wget https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh
chmod +x install.sh;
./install.sh
source ~/.bashrc;
source ~/.nvm/nvm.sh;
#git clone http://github.com/creationix/nvm.git .nvm;
nvm install 16.4.2;
npm install;

#SETCONFIG FUNCAO
set_config () {
echo -ne "\033[1;32m INFORME A SENHA DO BANCO DE DADOS DO PAINEL (PHPMYADMIN/MYSQL)\033[1;37m: "; read name
sed -i "s;1234;$name;g" /root/CheckUser/.env > /dev/null 2>&1
}

#END FUNCAO
finalizar () {
#CRONTAB
echo '* * * * * root cd /root/CheckUser && ./startcheck.sh' >> /etc/crontab
service cron reload;
service cron restart;

#INICIA SERVIDOR
./startcheck.sh
clear;
echo -ne "\033[1;32m FINALIZADO!\033[1;37m ";
echo "";
echo "Se deseja alterar a porta ou senha,basta editar o arquivo /root/CheckUser/.env";
}

#EXECUTA FUNCAO
set_config;


#FINALIZAR
finalizar;

