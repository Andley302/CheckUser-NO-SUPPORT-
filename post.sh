#!/bin/bash
clear && curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"user":"andleytest"}' \
  http://127.0.0.1:8989/checkUser