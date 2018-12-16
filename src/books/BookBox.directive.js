import BookBoxDirectiveController from "./BookBoxDirective.controller";
import BookBoxTemplate from "./BookBox.template";

const BookBoxDirective = function BookBoxDirective() {
    return {
        replace: true,
        scope: {
            book: "="
        },
        controllerAs: "vc",
        bindToController: true,
        controller: BookBoxDirectiveController,
        template: BookBoxTemplate
    };
};

export default BookBoxDirective;