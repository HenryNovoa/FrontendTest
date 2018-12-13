const logic = {
  _url: "https://api.github.com",


  /**
   * 
   * @param {String} path Path given to the api
   * @param {String} method METHOD given
   * 
   * @returns {Promise} Information about the path and method specified
   */
  _call(path, method) {
    return fetch(`${this._url}/users/${path}`, {
      method: method
    })
      .then(res => res.json())
      .then(res => {
        if (res.error) throw Error(res.error);

        return res;
      });
  },

  /**
   * 
   * @param {String} query username to search
   * 
   * @throws {Error} in case of empty, blank, or non-string query
   * 
   * @returns {Promise} user Information
   *  
   */
  searchUser(query) {
    const method = "GET";
    if (typeof query !== "string") throw TypeError(query + " is not a string");

    if (!query.trim().length) throw Error("query is empty or blank");

    return this._call(query, method);
  },

   /**
   * 
   * @param {String} query username to search
   * 
   * @throws {Error} in case of empty, blank, or non-string query
   * 
   * @returns {Promise} Repositories of the user
   *  
   */
  searchUserRepos(user) {
    if (typeof user !== "string") throw TypeError(user + " is not a string");

    if (!user.trim().length) throw Error("user is empty or blank");

    const method = "GET";

    return this._call(`${user}/repos`, method);
  }
};
