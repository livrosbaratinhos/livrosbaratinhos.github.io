const Books = function Books(BooksApi, BookAdapter, $q) {

    function init() {
        var defer = $q.defer();
        model.isLoading = true;

        BooksApi.getAll().then(response => {
            model.books = response.data.map(BookAdapter.objectFromData).filter(book => !book.foiVendido);
            defer.resolve(model.books);
        }).finally(() => {
            model.isLoading = false;
        });

        return defer.promise;
    }

    const model = {
        isLoading: false,
        books: [],
        init: init
    };

    return model;
};

Books.$inject = ["BooksApi", "BookAdapter", "$q"];

export default Books;