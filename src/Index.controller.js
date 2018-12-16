const IndexController = function IndexController(Books) {
    const vc = this;
    vc.vm = Books;
    Books.init();

};
IndexController.$inject = ["Books"];
export default IndexController;