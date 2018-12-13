let form = document.getElementById("search-form");

form.addEventListener("submit", event=> {
  event.preventDefault();

  let input = document.getElementById("search-query");

  const query = input.value;

  logic.searchUser(query).then(userData => {
    if (userData.message === "Not Found"){ 
    return view.showUserError();
    }
    const username = userData.login;

    logic.searchUserRepos(username).then(repos => {
      view.showUserData(userData);
      view.showUserRepos(repos);
    });
  });
});
