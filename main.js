const linksSocialMedia = {
  youtube: 'channel/UC6TdkDF8S4k7a8jhe4mDj_A',
  facebook: 'camila.demier.3',
  instagram: 'camilademierm',
  twitter: 'rocketseat',
  github: 'CamilaDemier'
}

function changeSocialMediaLinks() {
  //document.getElementById('userName').textContent = 'Ivana' -> faz a mesma coisa que -> userName.textContent = 'Maria'
  for (let li of socialLinks.children) {
    //i++ -> i=i+1
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
