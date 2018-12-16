const Books = function Books(BooksApi, BookAdapter) {

    function init() {
        model.isLoading = true;

        BooksApi.getAll().then(response => {
            model.books = response.data.map(BookAdapter.objectFromData);
        }).finally(() => {
            model.isLoading = false;
        });
    }

    const model = {
        isLoading: false,
        books: [],
        init: init
    };

    return model;
};

Books.$inject = ["BooksApi", "BookAdapter"];

export default Books;