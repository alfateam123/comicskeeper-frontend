import {appDispatcher} from "./AppDispatcher";
import * as FluxUtils from "flux/utils";

class BooksStoreStatic extends FluxUtils.Store {
  constructor(dispatcher){
		super(dispatcher);
		this.books = [];
	}
	__onDispatch(data) {
		switch(data.actionType) {
			case "BOOK_RETRIEVED":
				console.log(">>>", data);
				this.books = data.books;
		    this.__emitChange();
				break;
			default:
				console.log("BookStoreStatic", "received action", data.actionType);
				break;
		}
	}
}

var BookStore = new BooksStoreStatic(appDispatcher);
export default BookStore;
