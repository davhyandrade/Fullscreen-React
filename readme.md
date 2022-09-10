# Botão Fullscreen no React

> Status: Concluded

## Fullscreen

![Gravar_2022_09_09_20_22_42_987_Trim (2)](https://user-images.githubusercontent.com/109045257/189459041-47a9bdc7-5435-4e5c-8a76-06097454af7d.gif)

Projeto ao qual consiste em um botão que consegui deixar o elemento em tela cheia "`Fullscreen`".

# Desenvolvimento

Através da API Fullscreen, utilizando os métodos `requestFullscreen()` e `exitFullscreen()`.

* `requestFullscreen()` 
  - Abre um elemento no modo de tela cheia
  
```jsx

```

* `exitFullscreen()` 
  - Cancela o elemento no modo de tela cheia

Sendo necessário também a utilizanção dos hooks `useRef` e `useState`, para selecionar o elemento ao qual ficará em tela cheia e mudar a imagem do botão de fullscreen para aberto ou fechado.

## API Fullscreen

A API Fullscreen adiciona métodos para apresentar um específico Element(e seus descendentes) no modo de tela cheia e para sair do modo de tela cheia quando não for mais necessário. Isso torna possível apresentar o conteúdo desejado—como um jogo online—usando a tela inteira do usuário, removendo todos os elementos da interface do usuário do navegador e outros aplicativos da tela até que o modo de tela cheia seja desligado.
