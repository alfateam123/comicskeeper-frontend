import {appDispatcher} from "./AppDispatcher";
import * as FluxUtils from "flux/utils";

class BooksStoreStatic extends FluxUtils.Store {
  constructor(dispatcher){
		super(dispatcher);
		this.books = [];
		this.filterSeries = null;
	}

	getBooks() {
		if(this.filterSeries) {
			return this.books.filter(book => book.series === this.filterSeries);
		}
		else {
			return this.books;
		}
	}

	__onDispatch(data) {
		switch(data.actionType) {
			case "BOOK_RETRIEVED":
				console.log(">>>", data);
				this.books = data.books;
		    this.__emitChange();
				break;
			case "FILTER_BY_SERIES":
				console.log("filter by series", data);
				if(this.filterSeries !== data.seriesName){
					this.filterSeries = data.seriesName;
					this.__emitChange();
				}
				break;
			default:
				console.log("BookStoreStatic", "received action", data.actionType);
				break;
		}
	}
}

var BookStore = new BooksStoreStatic(appDispatcher);
export default BookStore;
