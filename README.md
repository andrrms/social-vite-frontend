# Bluebird Back-end

Este é o front-end de um projeto full-stack que estou desenvolvendo, o Bluebird! Caso queira instalar e testar, as instruções estão abaixo.

## Instalação

Execute os comandos abaixo e siga as instruções para iniciar o seu front-end.

0. Se já não tiver feito, execute a instalação do [servidor back-end](https://github.com/andrrms/social-prisma-backend) antes.
1. `git clone https://github.com/andrrms/social-vite-frontend.git`
2. `cd social-vite-frontend`
3. `yarn install`
4. `yarn dev` (use a flag `--host` se estiver usando um serviço de tunelamento)

## Aviso

Este projeto usa session tokens além dos auth tokens. Isto significa que os session tokens são salvos no cache do navegador, e por questões de compatibilidade e segurança do próprio browser, talvez você queira rodar este projeto através de um tunnel (por exemplo, `ngrok`, `cloudfare` ou `no-ip`), já que os cookies não funcionam adequadamente no localhost.
