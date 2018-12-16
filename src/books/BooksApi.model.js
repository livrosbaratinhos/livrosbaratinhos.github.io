const BooksApi = function BooksApi(AjaxModel) {
    const sheetsuUrl = "https://sheetsu.com/apis/v1.0bu/2eae0a88e7fa";

    function getAll () {
        return AjaxModel.get(sheetsuUrl);
    }

    return {
        getAll: getAll
    };
};

BooksApi.$inject = ["AjaxModel"];

export default BooksApi;