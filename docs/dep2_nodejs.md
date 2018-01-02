---
id: dep2_nodejs
title: node.js [npm, nvm, yarn]
---

<div class="sp sp-js">
  <div class="sp__title sp-js-master">
    <div class="burgSpoiler">
      <div class="icon-left"></div>
      <div class="icon-right"></div>
    </div>
    Prerequisites
  </div>
  <div class="sp__content sp-js-slave">

[npm](npmjs.com) (Node.js Package Manager) — [менеджер пакетов /wiki/](https://ru.wikipedia.org/wiki/NPM), входящий в состав Node.js.

Сначала нужно проверить, установлен ли *git*, установлен ли *curl*

Если не установлены, ставим:

```
sudo apt-get install aptitude
```
```
sudo aptitude update && sudo aptitude -y install --add-user-tag 'curl__tag' curl
```
```
sudo aptitude update && sudo aptitude -y install --add-user-tag 'git__tag' git
```


  </div>
</div>

***

<div class="sp sp-js">
  <div class="sp__title sp-js-master">
    <div class="burgSpoiler">
      <div class="icon-left"></div>
      <div class="icon-right"></div>
    </div>
    nvm
  </div>
  <div class="sp__content sp-js-slave">

[Node Version Manager](https://github.com/creationix/nvm#install-script) - менеджер версий nodejs.

Скопировать строку, которая сейчас доступна по ссылке ниже и запустить в терминале, e.g.:
![nvm install](/test-site/img/nvm_install.gif)


Close and reopen your terminal to start using NVM

<div class="sp__inner sp-js">
  <div class="sp__title sp-js-master blink"> check if NVM works </div>
  <div class="sp__content sp-js-slave">

```
nvm --version
```
![check if NVM works](/test-site/img/nvm__check.gif)

  </div>
</div>


<div class="sp__inner sp-js">
  <div class="sp__title sp-js-master blink">switch between diff versions </div>
  <div class="sp__content sp-js-slave">

#### We also can **switch between diff versions** of node. For this lets install another version of nodejs
```
 nvm install 0.8
```
check installed node:  ```node --version```


so, we can see, that now we r using nodejs v0.8.25

If we want to use, for example, 0.12.22 node, just type:
```
nvm use 0.12
```

  </div>
</div>


<div class="sp__inner sp-js">
  <div class="sp__title sp-js-master blink"> misc </div>
  <div class="sp__content sp-js-slave">


Before closing the terminal, we ought to set the latest version of nodejs as the default version.
```
nvm alias default 0.12
```

Now we can close terminal window


After reopen terminal we can type


```
node --version
```
all ok.


To **get a list of all the versions installed** so far, simply type:
```
nvm ls
```
the _green_ one being the version in use

If you want to __check how many versions are available for install__ in the remote repository, type
```
nvm ls-remote
```

  </div>
</div>




src#1 [keymetrics.io](https://keymetrics.io/2015/02/03/installing-node-js-and-io-js-with-nvm/)
src#1 https://github.com/creationix/nvm)

  </div>
</div>


<div class="sp sp-js">
  <div class="sp__title sp-js-master">
    <div class="burgSpoiler">
      <div class="icon-left"></div>
      <div class="icon-right"></div>
    </div>
    yarn
  </div>
  <div class="sp__content sp-js-slave">

[yarn](https://yarnpkg.com) - менеджер пакетов от facebook. Работает ощутимо быстрее встроенного в nodejs npm.

yarn install:
0) install curl
1) install node.js https://github.com/creationix/nvm#install-script
nvm --version
nvm install --lts
https://github.com/yarnpkg/yarn/releases/tag/v1.3.2  ставим оттуда деб пакет
2) install yarn

  </div>
</div>







This is a link to [another document.](/docs/en/doc3.md)  
This is a link to an [external page.](http://www.example.com)
