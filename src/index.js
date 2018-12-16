import "index.scss";
import "book.scss";
import angular from "angular";
import BooksModuleName from "./books/Books.module";
import IndexController from "./Index.controller";

angular.module("livrosbaratinhos", [BooksModuleName]);
angular.module("livrosbaratinhos").controller("IndexController", IndexController);