const BookBoxDirectiveController = function BookBoxDirectiveController(){
    var vc = this; // eslint-disable-line
    var images = [vc.book.imagens.capa.pequena, vc.book.imagens.contraCapa.pequena];
    var imageIndex = 0;
    vc.currentImage = images[imageIndex];

    vc.showNextImage = function(){
        imageIndex = (imageIndex + 1) % 2;
        vc.currentImage = images[imageIndex];
    };

    vc.showPreviousImage = function(){
        imageIndex = ((imageIndex - 1) % 2) * -1;
        vc.currentImage = images[imageIndex];

    } ;
};

export default BookBoxDirectiveController;