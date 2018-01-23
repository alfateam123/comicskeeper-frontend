import {appDispatcher} from "./AppDispatcher";
import * as axios from "axios";

class BookActionStatic {
  retrieveBooksList() {
    // TODO(winter): try to understand why it doesn't work under Firefox
    // on Chrome it works fine, hwat?!?
    axios.get("http://localhost:3500/books")
    .then((response) => {
      appDispatcher.dispatch({
        actionType: "BOOK_RETRIEVED",
        books: response.data
      });
    });
  }
};

let BookAction = new BookActionStatic();
export default BookAction;
