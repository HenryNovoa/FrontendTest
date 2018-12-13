describe("logic", () => {
  describe("searchUser", () => {
    it("should succeed on matching query", () => {
      let query = "HenryNovoa";

      return logic.searchUser(query).then(user => {
        expect(user).toBeDefined();
        expect(user.login).toEqual(query);
      });
    });
    it("should fail on non-matching query", () => {
      let query = "HenryNovoaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
      return logic.searchUser(query).then(data => {
        expect(data).toBeDefined;
        expect(data.message).toEqual("Not Found");
      });
    });

    it("should throw error on undefined query", () => {
      expect(() => {
        logic.searchUser(undefined);
      }).toThrowError(TypeError, "undefined is not a string");
    });

    it("should throw error on empty query", ()=> {
      expect(() => {
        logic.searchUser("");
      }).toThrowError(Error, "query is empty or blank");
    });

    it("should throw error on blank query", ()=> {
      expect(() => {
        logic.searchUser("  \t\n");
      }).toThrowError(Error, "query is empty or blank");
    });

    it("should throw error on non-string query (object)", ()=> {
      expect(() => {
        logic.searchUser({});
      }).toThrowError(TypeError, "[object Object] is not a string");
    });

    it("should throw error on non-string query (number)", ()=> {
      expect(() => {
        logic.searchUser(123);
      }).toThrowError(TypeError, "123 is not a string");
    });

    it("should throw error on non-string query (boolean)", ()=> {
      expect(() => {
        logic.searchUser(true);
      }).toThrowError(TypeError, "true is not a string");
    });

    it("should throw error on non-string query (array)", ()=> {
      expect(() => {
        logic.searchUser([]);
      }).toThrowError(TypeError, " is not a string");
    });
  });
});

describe("searchUserRepos", () => {
  it("should succeed on matching query", () => {
    let query = "HenryNovoa";

    return logic.searchUserRepos(query).then(data => {
      expect(data).toBeDefined();
      expect(data.length).toBeDefined();
    });
  });
  it("should fail on non-matching query", () => {
    let query = "HenryNovoaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
    return logic.searchUserRepos(query).then(data => {
      expect(data).toBeDefined;
      expect(data.message).toEqual("Not Found");
    });
  });
  it("should throw error on undefined query", () => {
    expect(() => {
      logic.searchUserRepos(undefined);
    }).toThrowError(TypeError, "undefined is not a string");
  });

  it("should throw error on empty query", ()=> {
    expect(() => {
      logic.searchUserRepos("");
    }).toThrowError(Error, "user is empty or blank");
  });

  it("should throw error on blank query", ()=> {
    expect(() => {
      logic.searchUserRepos("  \t\n");
    }).toThrowError(Error, "user is empty or blank");
  });

  it("should throw error on non-string query (object)", ()=> {
    expect(() => {
      logic.searchUserRepos({});
    }).toThrowError(TypeError, "[object Object] is not a string");
  });

  it("should throw error on non-string query (number)", ()=> {
    expect(() => {
      logic.searchUserRepos(123);
    }).toThrowError(TypeError, "123 is not a string");
  });

  it("should throw error on non-string query (boolean)", ()=> {
    expect(() => {
      logic.searchUserRepos(true);
    }).toThrowError(TypeError, "true is not a string");
  });

  it("should throw error on non-string query (array)", ()=> {
    expect(() => {
      logic.searchUserRepos([]);
    }).toThrowError(TypeError, " is not a string");
  });
});
