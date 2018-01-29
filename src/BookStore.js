import {appDispatcher} from "./AppDispatcher";
import * as FluxUtils from "flux/utils";

class BooksStoreStatic extends FluxUtils.Store {
  constructor(dispatcher){
		super(dispatcher);
		this.books = [];
		this.filterSeries = null;
		this.error = false;
	}

	getBooks() {
		if(this.filterSeries) {
			return this.books.filter(book => book.series === this.filterSeries);
		}
		else {
			return this.books;
		}
	}

	couldNotRetrieveBooks() {
		return this.error === true;
	}

	getSeries() {
		return this.series;
	}

	extractSeries(books) {
		const unduped_series_set = new Set(books.map(b => b.series));
		let unduped_series = [];
		unduped_series_set.forEach(series_name => unduped_series.push(series_name));
		return unduped_series.sort();
	}

	__onDispatch(data) {
		switch(data.actionType) {
			case "BOOK_RETRIEVED":
				this.books = data.books;
				this.series = this.extractSeries(data.books);
				this.error = false;
				this.__emitChange();
				break;
			case "BOOK_RETRIEVE_ERROR":
				this.books = data.books;
				this.error = true;
				 this.__emitChange();
				break;
			case "FILTER_BY_SERIES":
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
