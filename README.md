# Landing Page para Studio Fitness

Este repositório contém o código de uma landing page desenvolvida com HTML, CSS e JavaScript, projetada para um studio fitness. A página está integrada a uma API que registra os dados de nome, e-mail e WhatsApp fornecidos pelos usuários.

## Funcionalidades

- **Interface atrativa:** Layout responsivo e otimizado para dispositivos móveis.
- **Formulário de contato:** Permite que os usuários insiram nome, e-mail e WhatsApp.
- **Integração com API:** Envia os dados do formulário para uma API REST para registro.
- **Validação de dados:** Verifica campos obrigatórios antes de enviar as informações.

## Tecnologias Utilizadas

- **HTML5:** Estrutura semântica da página.
- **CSS3:** Estilização e design responsivo.
- **JavaScript:** Lógica para validação de dados e integração com a API.
- **API REST:** Backend para registro dos dados do usuário feita em python.

## Como Executar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/GuilhermehVinicius/landing-page-gym.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd landing-page-gym
   ```

## Hospedagem

A landing page está hospedada em uma instância EC2 da AWS, acessível pelo endereço:

[http://54.197.20.170/](http://54.197.20.170/)

Um proxy reverso configurado com Nginx gerencia as requisições para a aplicação.