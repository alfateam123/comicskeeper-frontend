import {appDispatcher} from "./AppDispatcher";

class BookActionStatic {
	constructor(){
		console.log("ayyyy");
	}

	retrieveBooksList() {
		appDispatcher.dispatch({
			actionType: "BOOK_RETRIEVED",
			books: [
				{title: "The Man in the High Castle"},
				{title: "The Man in the Low Castle"},
			]
		});
	}
};

let BookAction = new BookActionStatic();
export default BookAction;
