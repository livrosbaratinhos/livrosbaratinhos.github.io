const IndexController = function IndexController(Books) {
    const vc = this;
    vc.vm = Books;
    vc.title = "Procurando livros baratinhos ...";

    Books.init().then(() => {
        vc.title =  "Encontrados " + Books.books.length + " livros baratinhos";
    });
};
IndexController.$inject = ["Books"];
export default IndexController;