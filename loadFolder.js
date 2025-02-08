(function () {
  // Display user's name
  let accountId = Number(window.location.search.slice(8));
  let name = document.createElement('h1');
  console.log();
  name.textContent = `${accounts[accountId].AccountName}'s Recipe Folders`;
  let titleContainer = document.getElementById('folder-title');
  titleContainer.appendChild(name);

  // Display folder content
  let content = document.getElementById('folder-content');
  let folders = accounts[accountId].Folders;
  for (let folder of folders) {
    let folderName = document.createElement('h3');
    folderName.textContent = folder.FolderName;
    content.appendChild(folderName);
  }
})();