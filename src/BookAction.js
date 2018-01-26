import {appDispatcher} from "./AppDispatcher";
import * as axios from "axios";

class BookActionStatic {
  retrieveBooksList() {
    // TODO(winter): try to understand why it doesn't work under Firefox
    // on Chrome it works fine, hwat?!?
    //axios.get("http://localhost:3500/books")
    axios.get("http://192.168.1.55:3500/books")
    .then((response) => {
      appDispatcher.dispatch({
        actionType: "BOOK_RETRIEVED",
        books: response.data
      });
    });
  }

  filterBySeries(series_name) {
    appDispatcher.dispatch({
      actionType: "FILTER_BY_SERIES",
      seriesName: series_name
    });
  }

  removeFilter() {
    appDispatcher.dispatch({
      actionType: "FILTER_BY_SERIES",
      seriesName: null
    });
  }
};

let BookAction = new BookActionStatic();
export default BookAction;
