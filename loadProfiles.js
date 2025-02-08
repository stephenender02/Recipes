(function () {
  let userSection = document.getElementById('userProfiles');
  for(let account of accounts) {
    let userProfile = document.createElement('article');
    userSection.appendChild(userProfile);
    let userProfileButton = document.createElement('a');
    userProfileButton.setAttribute('href', `folder.html?userId=${account.AccountID}`);
    userSection.appendChild(userProfileButton);
    let name = document.createElement('p');
    name.textContent = `${account.AccountName}'s Recipes`;
    let picture = document.createElement('img');
    picture.setAttribute('src', account.AccountPicture);
    picture.setAttribute('width', '200rem;');
    userProfileButton.appendChild(picture);
    userProfileButton.appendChild(name);
  }
})();