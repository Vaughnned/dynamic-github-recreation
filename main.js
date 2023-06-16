// const renderRepos = () => {
//   const container = document.querySelector("#repos-list");
//   repos.forEach((repo) => {
//     let listRepo = document
//       .querySelector("#repo-title")
//       .content.cloneNode(true);
//     listRepo.appendChild(document.createTextNode(repo));
//     container.appendChild(listRepo);
//   });
// };

const getResources = async () => {
  const request = await fetch(
    "https://api.github.com/users/vaughnned/repos?sort=updated_at"
  );
  const response = await request.json();
  response.forEach((obj) => {
    repos.push(obj.name);
  });
  console.log(response);
  // renderRepos();
};

let repos = [];
getResources();
