const view = {
  clearList() {
    //clears previous inputs
    let search = document.getElementById("search");

    let userDiv = document.getElementById("user__data");

    if (userDiv) {
      while (userDiv.firstChild) {
        userDiv.removeChild(userDiv.firstChild);
      }

      search.removeChild(userDiv);
    }

    let repoDiv = document.getElementById("repo__data");
    if (repoDiv) {
      while (repoDiv.firstChild) {
        repoDiv.removeChild(repoDiv.firstChild);
      }

      search.removeChild(repoDiv);
    }

    let errorDiv = document.getElementById("error");

    if (errorDiv) search.removeChild(errorDiv);
  },
  showUserData(details) {
    //clear previous entry if it is there  
    this.clearList();
    if (details) {
      //Create div to hold all of the user details  
      let userData = document.createElement("div");

      userData.className = "user__data";

      userData.id = "user__data";

      //Create div to hold the image
      let profileImageContainer = document.createElement("div");

      profileImageContainer.className = "profile__container";
      
      userData.appendChild(profileImageContainer);

      //Create img
      let profileImage = document.createElement("img");

      profileImage.src = details.avatar_url;

      profileImageContainer.appendChild(profileImage);

      //Create div to hold username,fullname, and bio
      let userText = document.createElement("div");

      userData.appendChild(userText);

      userText.className = "user__data__text";
     
      //create the individual containers of the username,fullname, and bio
      
      //username
      let userName = document.createElement("p");

      userName.className = "user__data__username";

      userName.innerText = `@${details.login}`;

      userText.appendChild(userName);
      
      //fullname
      let fullName = document.createElement("p");

      fullName.className = "user__data__fullName";

      fullName.innerText = details.name;

      userText.appendChild(fullName);
      
      //bio
      let bio = document.createElement("p");

      bio.className = "user__data__bio";

      bio.innerText = details.bio;

      userText.appendChild(bio);

      //append div that holds all containers to search container
      let search = document.getElementById("search");

      search.appendChild(userData);
    }
  },

  showUserRepos(details) {
    if (details) {
      //creatediv to hold all the repositories
      let repoContainer = document.createElement("div");

      repoContainer.className = "repo__data";

      repoContainer.id = "repo__data";
      
      //create the title
      let repoTitle = document.createElement("h3");

      repoContainer.appendChild(repoTitle);

      repoTitle.className = "repo__title";

      repoTitle.innerText = "Repositories";

      //create a ul to be able to list all the repositories
      let ul = document.createElement("ul");

      repoContainer.appendChild(ul);

      ul.className = "repo__list";
      
      //map all of the repositories
      details.forEach((element, index) => {
        let li = document.createElement("li");
        //if it is the first element, I want to give it a different border
        if (index === 0) {
          li.className = "repo__first";
        }
        //create div of name and stats of the repository
        let stats = document.createElement("div");

        stats.className = "repo__stats";

        //name of the repo
        let repoName = document.createElement("p");
        
        repoName.innerText = element.name;
        
        //container of the forks
        let forkContainer = document.createElement("div");

        forkContainer.className = "repo__stats__forks";
        
        let forkIcon = document.createElement("img");
        
        forkIcon.className = "repo__stats__forks__icon";
        
        forkIcon.src = "./images/fork.svg";
        
        let forks = document.createElement("p");
        
        forks.innerText = element.forks;
        
        //container for stars
        let starContainer = document.createElement("div");

        starContainer.className = "repo__stats__stars";

        let starsIcon = document.createElement("img");

        starsIcon.src = "./images/star.svg";

        starsIcon.className = "repo__stats__stars__icon";

        let stars = document.createElement("p");



        stars.innerText = element.stargazers_count;

        //append name, stars, and forks to the div of the li
        stats.appendChild(repoName);

        stats.appendChild(starContainer);

        stats.appendChild(forkContainer);

        //append the icon and number of stars to its container
        starContainer.appendChild(starsIcon);

        starContainer.appendChild(stars);

        
        //append the icon and number of forks to its container
        forkContainer.appendChild(forkIcon);

        forkContainer.appendChild(forks);

        //append the repo div to li
        li.appendChild(stats);

        //append li to ul
        ul.appendChild(li);
      });


      //append to search container
      let search = document.getElementById("search");

      search.appendChild(repoContainer);
    }
  },

  showUserError() {
    this.clearList();

    const errorText = "Does not exist";

    //Create Error container
    let errorContainer = document.createElement("div");

    errorContainer.className = "error";

    errorContainer.id = "error";

    //Create <p> that holds error
    let errorMessage = document.createElement("p");

    errorMessage.className = "error__message";

    errorMessage.innerText = errorText;

    errorContainer.appendChild(errorMessage);

    //Append Error container and children to search container
    let search = document.getElementById("search");

    search.appendChild(errorContainer);
  }
};
