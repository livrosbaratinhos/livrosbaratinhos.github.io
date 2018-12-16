const template = `<div class="book-box">
    <div class="book-box__image">
        <button class="book-box__controller--prev" data-ng-click="vc.showPreviousImage()">&#9664;</button>
        <img data-ng-src="{{ vc.currentImage }}" class="book-box__image__content">
        <button class="book-box__controller--next" data-ng-click="vc.showNextImage()">&#x25B6;</button>
        <a data-ng-href="{{vc.book.linkParaMensagem}}" class="book-box__cta" target="_blank">Reservar via Whats</a>
    </div>
    <footer class="book-box__footer">
        <h2 class="book-box__footer__title" data-ng-bind="vc.book.titulo"></h2>
        <p class="book-box__footer__subtitle">{{ vc.book.preco | currency:"R$ ":2}}</p>
    </footer>
</div>`;

export default template;
