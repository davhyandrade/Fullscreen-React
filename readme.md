<div align="right">
  <sub>Create in</sub>  
  
  `09/09/2022`
</div>

# Botão Fullscreen no React

> Status: Concluded

## Fullscreen

![Gravar_2022_09_09_20_22_42_987_Trim (2)](https://user-images.githubusercontent.com/109045257/189459041-47a9bdc7-5435-4e5c-8a76-06097454af7d.gif)

Projeto ao qual consiste em um botão que consegui deixar o elemento em tela cheia.

# Desenvolvimento

Através da API Fullscreen, utilizando os métodos `requestFullscreen()` e `exitFullscreen()`.

* `requestFullscreen()` 
  - Abre um elemento no modo de tela cheia

* `exitFullscreen()` 
  - Cancela o elemento no modo de tela cheia

## API Fullscreen

A API Fullscreen adiciona métodos para apresentar um específico Elemento (e seus descendentes) no modo de tela cheia e para sair do modo de tela cheia quando não for mais necessário. Isso torna possível apresentar o conteúdo desejado usando a tela inteira do usuário, removendo todos os elementos da interface do usuário do navegador e outros aplicativos da tela até que o modo de tela cheia seja desligado.

##

* requestFullscreen()

```js
  if (myDocument.current.requestFullscreen) {
      myDocument.current.requestFullscreen();
  }
  else if (myDocument.current.webkitRequestFullscreen) {
      myDocument.current.webkitRequestFullscreen();
  } 
  else if (myDocument.current.msRequestFullscreen) {
      myDocument.current.msRequestFullscreen();
  }
```

##

* exitFullscreen()

```js
  if (document.exitFullscreen) {
      document.exitFullscreen();
  } 
  else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
  } 
  else if (document.msExitFullscreen) {
      document.msExitFullscreen();
  }
```

Sendo necessário também a utilizanção dos hooks `useRef` e `useState`, para selecionar o elemento ao qual ficará em tela cheia e mudar a imagem do botão de fullscreen para aberto ou fechado.

# Interface

A Interface foi desenvolvida pelo:
 
 * SASS

Ao qual foi feito um Carrossel automático através do `@Keyframes` apenas para demostração da função principal do Projeto "`Fullscreen`".

![Captura de Tela (18)](https://user-images.githubusercontent.com/109045257/189482173-88d87536-d139-4969-a2fa-fb39502060d3.png)

## @Keyframes

O @keyframes CSS controla as etapas intermediárias em uma sequência de animação CSS definindo estilos para quadros-chave (ou waypoints) ao longo da sequência de animação. Isso dá mais controle sobre as etapas intermediárias da seqüência de animação do que as transições .

```css
  @keyframes carousel {
      from {
          transform: translateX(0);
      }
      to {
          transform: translateX(-660%);
      }
  }
```
