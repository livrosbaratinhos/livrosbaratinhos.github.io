import angular from "angular";
import AjaxModuleName from "../ajax/Ajax.module";
import BooksApi from "./BooksApi.model";
import BookAdapter from "./BookAdapter.model";
import Books from "./Books.model";
import BookBoxDirective from "./BookBox.directive";

const BooksModuleName = "livrosbaratinhos.books";

angular.module(BooksModuleName, [AjaxModuleName]);
angular.module(BooksModuleName).factory("Books", Books);
angular.module(BooksModuleName).factory("BooksApi", BooksApi);
angular.module(BooksModuleName).factory("BookAdapter", BookAdapter);
angular.module(BooksModuleName).directive("bookBox", BookBoxDirective);

export default BooksModuleName;