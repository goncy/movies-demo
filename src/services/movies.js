import request from "../utils/request";

const URL = "https://yts.am/api/v2/list_movies.json";

const movies = {
  fetch: function() {
    return request(URL);
  },
};

export default movies;
