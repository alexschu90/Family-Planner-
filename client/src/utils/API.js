import axios from "axios";

export default {
    getHomework: function() {
        return axios.get("/api/homework");
      },
      // Gets the Homework with the given id
    //   getHomework: function(id) {
    //     return axios.get("/api/homework/" + id);
    //   },
      // Deletes the Homework with the given id
      deleteHomework: function(id) {
        return axios.delete("/api/homework/" + id);
      },
      // Saves a Homework to the database
      saveHomework: function(HomeworkData) {
        return axios.post("/api/homework", HomeworkData);
      }
};