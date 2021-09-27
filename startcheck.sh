#!/bin/bash
cd /root/checkuser;
if ! screen -ls | grep -q checkuser ; then
    echo "Iniciando checkuser..."
    sleep 1
	screen -r -S 'checkuser' -X quit;  
    screen -dmS checkuser node index.js
fi


