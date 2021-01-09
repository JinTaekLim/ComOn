class Crew {
    crewName;
    imageName = "./img/";
    position = "직위: ";
    interests = "관심사: ";
    word = "한마디: ";
    constructor(
      crewName,
      imageName,
      position,
      interests,
      word
    ) {
      this.crewName = crewName;
      this.imageName += imageName;
      this.position += position;
      this.interests += interests;
      this.word += word;
    }
    getElement = function () {
        let profileTd = document.createElement("td");
        let profileName = document.createElement("div");
        let profileBox = document.createElement("span");
        let interests = document.createElement("p");
        let word = document.createElement("p");

        profileTd.className = "profile_img";
        profileTd.style.background = "url('" + this.imageName + "')";
        profileTd.style.backgroundSize = "contain";
        profileName.className = "profile_name";
        profileBox.className = "profile_box";

        profileName.textContent = this.crewName;
        profileBox.textContent = this.position;
        interests.textContent = this.interests;
        word.textContent = this.word;

        profileBox.appendChild(interests);
        profileBox.appendChild(word);

        profileTd.appendChild(profileName);
        profileTd.appendChild(profileBox);

        return profileTd;
    };
}

window.onload = function () {
    dbAdmin = [
        {
            crewName: "운영진1",
            imageName: "profile_img.png",
            position: "부장",
            interests: "어쩌구, 저쩌구",
            word: "동아리 활동이 도움이 되길 바랍니다!",
        },
        {
            crewName: "운영진2",
            imageName: "profile_img.png",
            position: "부장",
            interests: "어쩌구, 저쩌구",
            word: "동아리 활동이 도움이 되길 바랍니다!",
        },
        {
            crewName: "운영진3",
            imageName: "profile_img.png",
            position: "부장",
            interests: "어쩌구, 저쩌구",
            word: "동아리 활동이 도움이 되길 바랍니다!",
        },
        {
            crewName: "운영진4",
            imageName: "profile_img.png",
            position: "부장",
            interests: "어쩌구, 저쩌구",
            word: "동아리 활동이 도움이 되길 바랍니다!",
        },
        {
            crewName: "운영진5",
            imageName: "profile_img.png",
            position: "부장",
            interests: "어쩌구, 저쩌구",
            word: "동아리 활동이 도움이 되길 바랍니다!",
        },
        {
            crewName: "운영진6",
            imageName: "profile_img.png",
            position: "부장",
            interests: "어쩌구, 저쩌구",
            word: "동아리 활동이 도움이 되길 바랍니다!",
        },
    ];

    profileTable = document.getElementById("profile_table");

    var adminList = new Array();

    var adminElement = new Array();

    for (var i = 0; i < dbAdmin.length; i++) {
        adminList[i] = new Crew(
            dbAdmin[i].crewName,
            dbAdmin[i].imageName,
            dbAdmin[i].position,
            dbAdmin[i].interests,  
            dbAdmin[i].word,
        );
        adminElement.push(adminList[i].getElement());
    };

    for (var i = 0; i < adminList.length; i++) {
        profileTable.appendChild(adminElement[i]);
    }
};