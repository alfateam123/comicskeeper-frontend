import {appDispatcher} from "./AppDispatcher";
import {URLConstant} from "./Constants";
var jquery = require("jquery");

class BookActionStatic {
  retrieveBooksList() {
    jquery.getJSON(URLConstant.retrieveBooks, function(response) {
      appDispatcher.dispatch({
        actionType: "BOOK_RETRIEVED",
        books: response
      });
    }).fail(function(error){
      appDispatcher.dispatch({
        actionType: "BOOK_RETRIEVE_ERROR",
        books: []
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
