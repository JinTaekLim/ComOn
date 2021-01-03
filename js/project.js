function removeAllElement(targetId) {
  target = document.getElementById(targetId);
  while (target.hasChildNodes()) {
    target.removeChild(target.firstChild);
  }
}

function setPage(pageNow) {
  for(let i = 0; i < document.getElementsByClassName("page")[0].childNodes.length; i++) {
    document.getElementsByClassName("page")[0].children[i].classList.remove("page-now");
  } 
  document.getElementsByClassName("page")[0].children[pageNow].classList.add("page-now");
}

class Project {
  generation;
  teamName;
  projectType;
  imageName = "../img/";
  pjTitle;
  progressBar;
  constructor(generation, teamName, projectType, imageName, pjTitle, progressBar) {
    this.generation = generation;
    this.teamName = teamName;
    this.projectType = projectType;
    this.imageName += imageName;
    this.pjTitle = pjTitle;
    this.progressBar = progressBar;
  }
  getElement = function () {
    let projectContent = document.createElement("div");
    let projectImage = document.createElement("div");
    let generation = document.createElement("div");
    let projectExplain = document.createElement("div");
    let teamType = document.createElement("div");
    let teamName = document.createElement("span");
    let projectType = document.createElement("div");
    let projectName = document.createElement("div");
    let projectTitle = document.createElement("span");
    let progressBar = document.createElement("progress");
    let completeBox = document.createElement("div");

    projectContent.className = "project-content";
    projectImage.className = "project-img";
    projectImage.style.backgroundImage = "url('" + this.imageName + "')";
    generation.className = "generation";
    projectExplain.className = "project-explain";
    teamType.className = "team-type";
    teamName.className = "team-name";
    projectType.className = "project-type";
    projectName.className = "project-name";
    projectTitle.className = "project-title";
    completeBox.className = "complete-box";

    generation.textContent = this.generation;
    teamName.textContent = this.teamName;
    projectType.textContent = this.projectType;
    projectTitle.textContent = this.pjTitle;
    progressBar.max = 100;
    progressBar.value = parseInt(this.progressBar);
    completeBox.textContent = "complete";
    
    projectType.appendChild(completeBox);

    if (progressBar.value == 100) {
      completeBox.style.display = 'block';
    }
    else {
      completeBox.style.display = 'none';
    }

    teamType.appendChild(teamName);
    teamType.appendChild(projectType);
    projectName.appendChild(projectTitle);
    projectName.appendChild(progressBar);

    projectImage.appendChild(generation);
    projectExplain.appendChild(teamType);
    projectExplain.appendChild(projectName);

    projectContent.appendChild(projectImage);
    projectContent.appendChild(projectExplain);
    // projectContent.style.transform = "translateX(670%)"
    projectContent.style.transform = "translateX(100%)"
    return projectContent;
  };
}

window.onload = function () {
  db = [
    {
      generation: "1기",
      teamName: "승현1",
      projectType: "JAVA",
      imageName: "사람.jpg",
      projectTitle: "어떤거 진행중",
      progressBar: 10,
    },
    {
      generation: "2기",
      teamName: "준권2",
      projectType: "C++",
      imageName: "human.png",
      projectTitle: "어떤거 진행중",
      progressBar: 60,
    },
    {
      generation: "2기",
      teamName: "회운3",
      projectType: "Winform",
      imageName: "human.png",
      projectTitle: "어떤거 진행중",
      progressBar: 90,
    },
    {
      generation: "1기",
      teamName: "민욱4",
      projectType: "APP",
      imageName: "human.png",
      projectTitle: "어떤거 진행중",
      progressBar: 40,
    },
    {
      generation: "1기",
      teamName: "민규5",
      projectType: "WEB",
      imageName: "human.png",
      projectTitle: "어떤거 진행중",
      progressBar: 100,
    },
    {
      generation: "1기",
      teamName: "민규6",
      projectType: "WEB",
      imageName: "human.png",
      projectTitle: "어떤거 진행중",
      progressBar: 100,
    },
    {
      generation: "1기",
      teamName: "승현7",
      projectType: "JAVA",
      imageName: "human.png",
      projectTitle: "어떤거 진행중",
      progressBar: 10,
    },
    {
      generation: "2기",
      teamName: "준권8",
      projectType: "C++",
      imageName: "human.png",
      projectTitle: "어떤거 진행중",
      progressBar: 60,
    },
    {
      generation: "2기",
      teamName: "회운9",
      projectType: "Winform",
      imageName: "human.png",
      projectTitle: "어떤거 진행중",
      progressBar: 90,
    },
    {
      generation: "1기",
      teamName: "민욱10",
      projectType: "APP",
      imageName: "human.png",
      projectTitle: "어떤거 진행중",
      progressBar: 40,
    },
    {
      generation: "1기",
      teamName: "민규11",
      projectType: "WEB",
      imageName: "human.png",
      projectTitle: "어떤거 진행중",
      progressBar: 100,
    },
    {
      generation: "1기",
      teamName: "민욱12",
      projectType: "APP",
      imageName: "human.png",
      projectTitle: "어떤거 진행중",
      progressBar: 40,
    },
    {
      generation: "1기",
      teamName: "민규13",
      projectType: "WEB",
      imageName: "human.png",
      projectTitle: "어떤거 진행중",
      progressBar: 100,
    },
  ];

  projectList = new Array();
  pageNow = 0;
  pageAll = db.length % 6 == 0 ? (db.length / 6) - 1 : parseInt(db.length / 6);
  let projectSection = document.getElementById("project");
  let page = document.createElement("div");
  page.className = "page";
  projectSection.appendChild(page);

  for (let i = 0; i <= pageAll; i++) {
    projectList.push(new Array());
    let circle = document.createElement("div");
    circle.className = "circle";
    page.appendChild(circle);
    
    
    circle.classList.toggle("page-now");
  }

    index = 0;

    for (let i = 0; i <= pageAll; i++) {
        num = 0;

        for (let j = 6 * i - 6; j <= 6 * i - 1; j++) {
            if(db.length <= index) {break;}
            projectList[i][num] = new Project(db[index].generation, db[index].teamName, db[index].projectType, db[index].imageName, db[index].pjTitle, db[index].progressBar);
            num += 1;
            index += 1;
        }
    }

    for (let i = 0; i < db.length; i++) {
      item = new Project(db[i].generation, db[i].teamName, db[i].projectType, db[i].imageName, db[i].pjTitle, db[i].progressBar);
      document.getElementById("project-list").appendChild(item.getElement());
    }

    setPage(pageNow);

    //왼쪽 콤보박스에 맞는 이벤트, 해당하는 모든 항목이 한 페이지에 나타남
    document.getElementById("select_generation").onchange = function () {
        newList = [];
        removeAllElement("project-list");
        select = document.getElementById("select_generation");
        for (i of projectList) {
            if (select.options[select.selectedIndex].value == "전체") {
                newList.push(i);
            } else if (i.generation == select.options[select.selectedIndex].value) {
                newList.push(i);
            }
        }
        for (let i = 0; i < newList.length; i++) {
            document.getElementById("project-list").appendChild(newList[i].getElement());
        }
    };

    // for (let i = 0; i < pageAll; i++){
      
    // }

    //각 버튼에 맞는 이벤트, 콤보박스에서 항목을 바꾼 후에 버튼을 누르면 초기 상태로 바뀜

    //오른쪽 버튼
    document.getElementById("right_btn").onclick = function () {
        removeAllElement("project-list");
        pageNow++;
        if (pageNow > pageAll) {
            pageNow = 0;
        }
        for (let i = 0; i < projectList[pageNow].length; i++) {
            document.getElementById("project-list").appendChild(projectList[pageNow][i].getElement());
        }
        setPage(pageNow);
    };

    //왼쪽 버튼
    document.getElementById("left_btn").onclick = function () {
        removeAllElement("project-list");
        pageNow--;
        if (pageNow < 0) {
            pageNow = pageAll;
        }
        for (let i = 0; i < projectList[pageNow].length; i++) {
            document.getElementById("project-list").appendChild(projectList[pageNow][i].getElement());
        }
        setPage(pageNow);
    };
};
