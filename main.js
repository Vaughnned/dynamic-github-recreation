const renderRepos = () => {
  const container = document.querySelector("#repo-container");
  repos.forEach((repo) => {
    let listItem = document
      .querySelector("#repo-title")
      .content.cloneNode(true);
    listItem.appendChild(document.createTextNode(repo));
    container.appendChild(listItem);
  });
};

const getRepos = async () => {
  const request = await fetch(
    "https://api.github.com/users/vaughnned/repos?sort=updated_at"
  );
  const response = await request.json();
  response.forEach((obj) => repos.push(obj.name));
  console.log(repos);
  renderRepos();
};

let repos = [];
getRepos();
