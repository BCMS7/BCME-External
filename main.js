const popupContainer = document.createElement("div");
(popupContainer.style.position = "fixed"),
  (popupContainer.style.top = "0"),
  (popupContainer.style.left = "0"),
  (popupContainer.style.width = "100vw"),
  (popupContainer.style.height = "100vh"),
  (popupContainer.style.backgroundColor = "rgba(0, 0, 0, 0.5)"),
  (popupContainer.style.display = "flex"),
  (popupContainer.style.justifyContent = "center"),
  (popupContainer.style.alignItems = "center"),
  (popupContainer.style.zIndex = "9999");
const popupContent = document.createElement("div");
(popupContent.style.backgroundColor = "#fff"),
  (popupContent.style.borderRadius = "5px"),
  (popupContent.style.padding = "2rem"),
  (popupContent.style.width = "80%"),
  (popupContent.style.maxWidth = "600px"),
  (popupContent.style.textAlign = "center");
const logo = document.createElement("img");
(logo.src =
  "https://media.discordapp.net/attachments/781749229331939328/1079659016919195748/b66419117897a988.png?width=1190&height=1189"),
  (logo.style.width = "100px"),
  (logo.style.height = "100px"),
  popupContent.appendChild(logo);
const welcomeMessage = document.createElement("h2");
(welcomeMessage.innerText =
  "Welcome to BCME, The First Right Click BC Extension"),
  popupContent.appendChild(welcomeMessage);
const description = document.createElement("p");
(description.innerText =
  "Accept our License Agreement and Privacy Policy below to get started"),
  popupContent.appendChild(description);
const buttonsContainer = document.createElement("div");
(buttonsContainer.style.display = "flex"),
  (buttonsContainer.style.justifyContent = "space-between");
const learnMoreButton = document.createElement("a");
(learnMoreButton.href = "https://bcm.site.live/bcml/"),
  (learnMoreButton.target = "_blank"),
  (learnMoreButton.innerText = "Learn More"),
  (learnMoreButton.style.backgroundColor = "#007bff"),
  (learnMoreButton.style.color = "#fff"),
  (learnMoreButton.style.padding = "0.5rem 1rem"),
  (learnMoreButton.style.borderRadius = "3px"),
  (learnMoreButton.style.textDecoration = "none"),
  buttonsContainer.appendChild(learnMoreButton);
const checkboxContainer = document.createElement("label");
(checkboxContainer.style.display = "flex"),
  (checkboxContainer.style.alignItems = "center"),
  (checkboxContainer.style.padding = "0.5rem 1rem"),
  (checkboxContainer.style.borderRadius = "50px"),
  (checkboxContainer.style.backgroundColor = "#fff"),
  (checkboxContainer.style.boxShadow = "0px 0px 5px #bbb"),
  (checkboxContainer.style.cursor = "pointer");
const checkboxInput = document.createElement("input");
(checkboxInput.type = "checkbox"),
  (checkboxInput.checked = !1),
  (checkboxInput.style.marginRight = "0.5rem"),
  (checkboxInput.onchange = () => {
    localStorage.setItem("optAnalytics", checkboxInput.checked);
  }),
  checkboxContainer.appendChild(checkboxInput);
const checkboxText = document.createTextNode("Limited Analytics"),
  infoIcon = document.createElement("span");
(infoIcon.innerHTML = "&#9432;"),
  (infoIcon.style.fontSize = "1rem"),
  (infoIcon.style.cursor = "pointer"),
  (infoIcon.style.marginLeft = "5px"),
  (infoIcon.title =
    "Enhanced privacy by limiting analytics tracking such as money, font, chat color theme, arousal progress and local IP address"),
  checkboxContainer.appendChild(checkboxText),
  checkboxContainer.appendChild(infoIcon),
  buttonsContainer.appendChild(checkboxContainer);
const acceptButton = document.createElement("button");
(acceptButton.innerText = "Accept & Continue"),
  (acceptButton.style.backgroundColor = "#28a745"),
  (acceptButton.style.color = "#fff"),
  (acceptButton.style.border = "none"),
  (acceptButton.style.padding = "0.5rem 1rem"),
  (acceptButton.style.borderRadius = "3px"),
  (acceptButton.style.cursor = "pointer"),
  (acceptButton.onclick = () => {
    localStorage.setItem("bcme-accepted", "true"),
      document.body.removeChild(popupContainer);
  }),
  buttonsContainer.appendChild(acceptButton),
  popupContent.appendChild(buttonsContainer);
const iconsContainer = document.createElement("div");
(iconsContainer.style.position = "absolute"),
  (iconsContainer.style.top = "1rem"),
  (iconsContainer.style.right = "1rem"),
  (iconsContainer.style.display = "flex"),
  (iconsContainer.style.gap = "1rem");
const discordIcon = document.createElement("a");
(discordIcon.href = "https://discord.com/invite/v3JBjyS4mx"),
  (discordIcon.target = "_blank"),
  (discordIcon.style.display = "flex"),
  (discordIcon.style.justifyContent = "center"),
  (discordIcon.style.alignItems = "center"),
  (discordIcon.style.width = "40px"),
  (discordIcon.style.height = "40px"),
  (discordIcon.style.backgroundColor = "#ccc"),
  (discordIcon.style.borderRadius = "50%"),
  (discordIcon.style.backgroundImage =
    "url(https://media.discordapp.net/attachments/781749229331939328/1102303883340030042/discord-logo.png?width=922&height=930)"),
  (discordIcon.style.backgroundRepeat = "no-repeat"),
  (discordIcon.style.backgroundSize = "contain"),
  iconsContainer.appendChild(discordIcon);
const websiteIcon = document.createElement("a");
async function Fdebug() {}
(websiteIcon.href = "https://bcm.site.live/bcme/"),
  (websiteIcon.target = "_blank"),
  (websiteIcon.style.display = "flex"),
  (websiteIcon.style.justifyContent = "center"),
  (websiteIcon.style.alignItems = "center"),
  (websiteIcon.style.width = "40px"),
  (websiteIcon.style.height = "40px"),
  (websiteIcon.style.backgroundColor = "#ccc"),
  (websiteIcon.style.borderRadius = "50%"),
  (websiteIcon.style.backgroundImage =
    "url(https://media.discordapp.net/attachments/781749229331939328/1102303883658809344/1024px-Globe_icon.svg.png?width=1114&height=1114)"),
  (websiteIcon.style.backgroundRepeat = "no-repeat"),
  (websiteIcon.style.backgroundSize = "contain"),
  iconsContainer.appendChild(websiteIcon),
  popupContent.appendChild(iconsContainer),
  popupContainer.appendChild(popupContent),
  "true" !== localStorage.getItem("bcme-accepted") &&
    document.body.appendChild(popupContainer),
  "true" === localStorage.getItem("optAnalytics") &&
    (checkboxInput.checked = !0);
const htmlFileUrl =
  "https://raw.githubusercontent.com/BCMS7/BCM-/main/loading4";
fetch(htmlFileUrl)
  .then((e) => e.text())
  .then((e) => {
    let t = document.createElement("iframe");
    (t.style.position = "fixed"),
      (t.style.top = "0"),
      (t.style.left = "0"),
      (t.style.width = "138%"),
      (t.style.height = "125%"),
      (t.style.marginLeft = "-19%"),
      (t.style.marginTop = "-2%"),
      (t.onload = function () {
        let t = this.contentWindow.document;
        t.open(), t.write(e), t.close();
      }),
      document.body.appendChild(t),
      setTimeout(() => {
        document.body.removeChild(t);
      }, 7e3);
  })
  .catch((e) => {
    console.error("Error importing HTML:", e);
  }),
  fetch(
    "https://raw.githubusercontent.com/BCMS7/BCME-External/main/servermaintainance"
  )
    .then((e) => e.text())
    .then((data) => {
      let regex = /\d+/,
        match = data.match(regex);
      if (match && parseInt(match[0]) >= 1) {
        function showToastMaint() {
          var e = document.createElement("div");
          (e.style.position = "fixed"),
            (e.style.bottom = "5px"),
            (e.style.right = "5px"),
            (e.style.backgroundColor = "white"),
            (e.style.color = "#141414"),
            (e.style.padding = "5px"),
            (e.style.border = "2px solid #f22c2c"),
            (e.style.borderRadius = "5px"),
            (e.style.boxShadow = "2px 2px 10px rgba(0, 0, 0, 0.5)"),
            (e.style.display = "none"),
            (e.style.zIndex = "999"),
            (e.style.transition = "opacity 0.5s ease-in-out"),
            (e.style.opacity = "0"),
            (e.style.display = "flex"),
            (e.style.alignItems = "center");
          var t = document.createElement("div");
          (t.style.width = "100%"),
            (t.style.height = "3px"),
            (t.style.backgroundColor = "black"),
            (t.style.position = "absolute"),
            (t.style.bottom = "0"),
            (t.style.left = "0"),
            (t.style.transition = "width 5s ease-in-out"),
            (t.style.width = "0%"),
            e.appendChild(t),
            setTimeout(function () {
              t.style.width = "100%";
            }, 0);
          var n = document.createElement("button");
          (n.style.border = "none"),
            (n.style.background = "none"),
            (n.style.top = "5px"),
            (n.style.right = "5px"),
            (n.style.fontWeight = "bold"),
            (n.style.fontSize = "16px"),
            (n.style.marginLeft = "-2px"),
            (n.style.marginRight = "0px"),
            (n.innerHTML = "X"),
            e.appendChild(n),
            n.addEventListener("click", function () {
              (e.style.opacity = "0"),
                setTimeout(function () {
                  e.style.display = "none";
                }, 500);
            });
          var o = document.createElement("img");
          (o.src =
            "https://media.discordapp.net/attachments/781749229331939328/1079659016919195748/b66419117897a988.png?width=1190&height=1189"),
            (o.style.width = "23px"),
            (o.style.height = "23px"),
            (o.style.borderRadius = "50%"),
            (o.style.marginRight = "-30px"),
            (o.style.marginBottom = "-5px"),
            e.appendChild(o);
          var i = document.createElement("span");
          (i.style.fontWeight = "bold"),
            (i.style.marginLeft = "35px"),
            (i.innerHTML =
              "BCME servers are under maintainance, try again later"),
            e.appendChild(i),
            document.body.appendChild(e),
            setTimeout(function () {
              (e.style.display = "block"), (e.style.opacity = "1");
            }, 0),
            setTimeout(function () {
              e.style.opacity = "0";
            }, 5e6),
            setTimeout(function () {
              e.style.display = "none";
            }, 55e5);
        }
        throw (showToastMaint(), Error("Execution stopped."));
      }
      {
        var visb = !0,
          contextMenuOpen = !1;
        function createButton(e, t) {
          contextMenuOpen = !0;
          var n = document.createElement("div");
          return (
            (n.innerHTML = e),
            (n.onclick = t),
            (n.style.width = "100%"),
            (n.style.textAlign = "left"),
            (n.style.padding = "5px"),
            (n.style.cursor = "pointer"),
            n
          );
        }
        function createSeparator() {
          var e = document.createElement("hr");
          return (e.style.margin = "5px 0"), e;
        }
        let contextMenuTimer = null;
        document.addEventListener("contextmenu", function (event) {
          if (contextMenuOpen) {
            event.preventDefault();
            return;
          }
          if ("" === window.getSelection().toString()) {
            event.preventDefault();
            var contextMenu = document.createElement("div");
            (contextMenu.style.position = "fixed"),
              (contextMenu.style.background =
                "linear-gradient(to bottom, white, white)"),
              (contextMenu.style.boxShadow = "0 0 3px #999"),
              (contextMenu.style.borderRadius = "8px"),
              (contextMenu.style.zIndex = "9999"),
              (contextMenu.style.border = "2px solid black"),
              (contextMenuOpen = !0),
              "ontouchstart" in window
                ? (contextMenuTimer = setTimeout(function () {
                    (contextMenu.style.top = event.touches[0].clientY + "px"),
                      (contextMenu.style.left =
                        event.touches[0].clientX + "px"),
                      document.body.appendChild(contextMenu),
                      (contextMenuOpen = !0);
                  }, 500))
                : ((contextMenu.style.top = event.clientY + "px"),
                  (contextMenu.style.left = event.clientX + "px"),
                  document.body.appendChild(contextMenu),
                  (contextMenuOpen = !0)),
              document.addEventListener("click", function () {
                (contextMenu.style.display = "none"),
                  (contextMenuOpen = !1),
                  clearTimeout(contextMenuTimer);
              });
            var header = document.createElement("div");
            (header.style.display = "flex"),
              (header.style.alignItems = "center"),
              (header.style.padding = "5px");
            var BCMElogo = document.createElement("img");
            (BCMElogo.src =
              "https://media.discordapp.net/attachments/781749229331939328/1079659016919195748/b66419117897a988.png?width=1190&height=1189"),
              (BCMElogo.style.width = "30px"),
              (BCMElogo.style.height = "30px"),
              (BCMElogo.style.borderRadius = "20%"),
              (BCMElogo.style.marginRight = "10px");
            var headerText = document.createElement("div");
            (headerText.innerHTML = "<b>Essentials</b>"),
              header.appendChild(BCMElogo),
              header.appendChild(headerText);
            var button1 = createButton("Restore Character", function () {
                javascript: Player.Appearance =
                  ChatSearchSafewordAppearance.slice(0);
                CharacterRefresh(Player),
                  ChatRoomCharacterUpdate(Player),
                  showToastscpg();
              }),
              button2 = createButton("Force Room Swap", function () {
                javascript: ChatSelectStartSearch("X"),
                  ChatRoomSetLastChatRoom(""),
                  (document.getElementById("InputChat").style.display = "none"),
                  (document.getElementById("TextAreaChatLog").style.display =
                    "none"),
                  ChatSelectStartSearch("X"),
                  ChatRoomSetLastChatRoom("");
                showToastscpg();
              }),
              button3 = createButton("Free Target", function () {
                javascript: CharacterReleaseTotal(CurrentCharacter),
                  ChatRoomCharacterUpdate(CurrentCharacter);
                showToastscpg();
              }),
              button4 = createButton("Remove Restraint", function () {
                javascript: InventoryUnlock(
                  CurrentCharacter,
                  CurrentCharacter.FocusGroup.Name
                );
                InventoryRemove(
                  CurrentCharacter,
                  CurrentCharacter.FocusGroup.Name
                ),
                  ChatRoomCharacterItemUpdate(
                    CurrentCharacter,
                    CurrentCharacter.FocusGroup.Name
                  ),
                  showToastscpg();
              }),
              button5 = createButton("Target Struggle Difficulty", function () {
                javascript: do var e = prompt("Difficulty 1-96");
                while (!(e >= 1 && e <= 96));
                InventorySetDifficulty(CurrentCharacter, "ItemHead", e),
                  InventorySetDifficulty(CurrentCharacter, "ItemMouth", e),
                  InventorySetDifficulty(CurrentCharacter, "ItemMouth2", e),
                  InventorySetDifficulty(CurrentCharacter, "ItemMouth3", e),
                  InventorySetDifficulty(CurrentCharacter, "ItemArms", e),
                  InventorySetDifficulty(CurrentCharacter, "ItemHands", e),
                  InventorySetDifficulty(CurrentCharacter, "ItemLegs", e),
                  InventorySetDifficulty(CurrentCharacter, "ItemEyes", e),
                  InventorySetDifficulty(CurrentCharacter, "ItemFeet", e),
                  InventorySetDifficulty(CurrentCharacter, "ItemDevices", e),
                  InventorySetDifficulty(CurrentCharacter, "ItemAddon", e),
                  InventorySetDifficulty(CurrentCharacter, "ItemNeck", e),
                  InventorySetDifficulty(
                    CurrentCharacter,
                    "ItemNeckRestraints",
                    e
                  ),
                  InventorySetDifficulty(
                    CurrentCharacter,
                    "ItemNeckAccessories",
                    e
                  ),
                  InventorySetDifficulty(CurrentCharacter, "ItemBoots", e),
                  InventorySetDifficulty(CurrentCharacter, "ItemHood", e),
                  InventorySetDifficulty(CurrentCharacter, "ItemNose", e),
                  ChatRoomCharacterUpdate(CurrentCharacter),
                  showToastscpg();
              }),
              button6 = createButton("Open Target Wardrobe", function () {
                javascript: DialogChangeClothes();
                showToastscpg();
              }),
              button7 = createButton("Complete Struggle Minigame", function () {
                contextMenuOpen = !1;
                javascript: StruggleProgress = 1e3;
                (contextMenu.style.display = "none"),
                  setTimeout(function () {
                    ChatRoomClickCharacter(Player), DialogLeave();
                  }, 500),
                  showToastscpg();
              }),
              button8 = createButton("Invisible", function () {
                javascript: InventoryGet(
                  Player,
                  "Emoticon"
                ).Property.OverrideHeight = { Height: "-" };
                "ChatRoom" === CurrentScreen
                  ? ChatRoomCharacterUpdate(Player)
                  : CharacterRefresh(Player),
                  ChatRoomCharacterUpdate(Player),
                  (visb = !1),
                  showToastscpg(),
                  updateContextMenu();
              }),
              button9 = createButton("Visible", function () {
                javascript: CharacterSetActivePose(Player, null);
                delete InventoryGet(Player, "Emoticon").Property.OverrideHeight,
                  "ChatRoom" === CurrentScreen
                    ? ChatRoomCharacterUpdate(Player)
                    : CharacterRefresh(Player),
                  (visb = !0),
                  showToastscpg(),
                  updateContextMenu();
              }),
              button10 = createButton("Custom Script", function () {
                javascript: var scrp = prompt("Paste your script here:");
                scrp && (eval(scrp), showToastscpg());
              });
            (button1.style.transition = "background-color 0.2s ease-in-out"),
              (button2.style.transition = "background-color 0.2s ease-in-out"),
              (button3.style.transition = "background-color 0.2s ease-in-out"),
              (button4.style.transition = "background-color 0.2s ease-in-out"),
              (button5.style.transition = "background-color 0.2s ease-in-out"),
              (button6.style.transition = "background-color 0.2s ease-in-out"),
              (button7.style.transition = "background-color 0.2s ease-in-out"),
              (button8.style.transition = "background-color 0.2s ease-in-out"),
              (button9.style.transition = "background-color 0.2s ease-in-out"),
              (button10.style.transition = "background-color 0.2s ease-in-out"),
              button1.addEventListener("mouseover", function () {
                (this.style.backgroundColor = "#dddddd"),
                  (this.style.width = "190px");
              }),
              button1.addEventListener("mouseout", function () {
                this.style.backgroundColor = "";
              }),
              button2.addEventListener("mouseover", function () {
                (this.style.backgroundColor = "#dddddd"),
                  (this.style.width = "190px");
              }),
              button2.addEventListener("mouseout", function () {
                this.style.backgroundColor = "";
              }),
              button3.addEventListener("mouseover", function () {
                (this.style.backgroundColor = "#dddddd"),
                  (this.style.width = "190px");
              }),
              button3.addEventListener("mouseout", function () {
                this.style.backgroundColor = "";
              }),
              button4.addEventListener("mouseover", function () {
                (this.style.backgroundColor = "#dddddd"),
                  (this.style.width = "190px");
              }),
              button4.addEventListener("mouseout", function () {
                this.style.backgroundColor = "";
              }),
              button5.addEventListener("mouseover", function () {
                (this.style.backgroundColor = "#dddddd"),
                  (this.style.width = "190px");
              }),
              button5.addEventListener("mouseout", function () {
                this.style.backgroundColor = "";
              }),
              button6.addEventListener("mouseover", function () {
                (this.style.backgroundColor = "#dddddd"),
                  (this.style.width = "190px");
              }),
              button6.addEventListener("mouseout", function () {
                this.style.backgroundColor = "";
              }),
              button7.addEventListener("mouseover", function () {
                (this.style.backgroundColor = "#dddddd"),
                  (this.style.width = "190.5px");
              }),
              button7.addEventListener("mouseout", function () {
                this.style.backgroundColor = "";
              }),
              button8.addEventListener("mouseover", function () {
                (this.style.backgroundColor = "#dddddd"),
                  (this.style.width = "190px");
              }),
              button8.addEventListener("mouseout", function () {
                this.style.backgroundColor = "";
              }),
              button9.addEventListener("mouseover", function () {
                (this.style.backgroundColor = "#dddddd"),
                  (this.style.width = "190px");
              }),
              button9.addEventListener("mouseout", function () {
                this.style.backgroundColor = "";
              }),
              button10.addEventListener("mouseover", function () {
                (this.style.backgroundColor = "#dddddd"),
                  (this.style.width = "190px");
              }),
              button10.addEventListener("mouseout", function () {
                this.style.backgroundColor = "";
              });
            var select = document.createElement("select");
            (select.style.borderRadius = "2px"),
              (select.style.padding = "4px"),
              (select.style.width = "200px"),
              (select.style.marginTop = "-20px"),
              (select.style.marginRight = "2px"),
              (select.style.marginBottom = "3px"),
              (select.style.marginLeft = "2px");
            var option1 = document.createElement("option");
            (option1.value = "opt1"),
              (option1.text = "Personalisation Menu"),
              (option1.selected = !0),
              (option1.disabled = !0);
            var option2 = document.createElement("option");
            (option2.value = "opt2"), (option2.text = "Edit Cash");
            var option3 = document.createElement("option");
            (option3.value = "opt3"), (option3.text = "Max Skills");
            var option4 = document.createElement("option");
            (option4.value = "opt4"), (option4.text = "Max Reputation");
            var option5 = document.createElement("option");
            (option5.value = "opt5"), (option5.text = "Purchase Everything");
            var option6 = document.createElement("option");
            (option6.value = "opt6"), (option6.text = "Release Owner Collar");
            var option7 = document.createElement("option");
            (option7.value = "opt7"), (option7.text = "+1 LARP Level");
            var option8 = document.createElement("option");
            (option8.value = "opt8"), (option8.text = "Become Escaped Patient");
            var option9 = document.createElement("option");
            (option9.value = "opt9"), (option9.text = "Become Club Slave");
            var option10 = document.createElement("option");
            (option10.value = "opt10"), (option10.text = "Release Club Title");
            var option11 = document.createElement("option");
            (option11.value = "opt11"), (option11.text = "Set GGTS Level");
            var option12 = document.createElement("option");
            (option12.value = "opt12"), (option12.text = "Set Dom/Sub Level");
            var option13 = document.createElement("option");
            (option13.value = "opt13"), (option13.text = "Set Nickname");
            var option14 = document.createElement("option");
            (option14.value = "opt14"), (option14.text = "Force Orgasm");
            var option15 = document.createElement("option");
            (option15.value = "opt15"), (option15.text = "BCM Discord");
            var option16 = document.createElement("option");
            (option16.value = "opt16"), (option16.text = "Force Lobby");
            var option17 = document.createElement("option");
            (option17.value = "opt17"), (option17.text = "LARP Options");
            var option18 = document.createElement("option");
            (option18.value = "opt18"), (option18.text = "Emote Menu (` + E)");
            var option19 = document.createElement("option");
            (option19.value = "opt19"),
              (option19.text = "Persistant Settings (` + S)"),
              select.appendChild(option1),
              select.appendChild(option2),
              select.appendChild(option3),
              select.appendChild(option4),
              select.appendChild(option12),
              select.appendChild(option5),
              select.appendChild(option6),
              select.appendChild(option7),
              select.appendChild(option8),
              select.appendChild(option9),
              select.appendChild(option10),
              select.appendChild(option11),
              select.appendChild(option13),
              select.appendChild(option14),
              select.appendChild(option16),
              select.appendChild(option17),
              select.appendChild(option18),
              select.appendChild(option19),
              select.appendChild(option15);
            var dropdownButton = createButton("Personalisation", function () {
              select.style.display = "block";
            });
            (dropdownButton.style.opacity = "0"),
              (dropdownButton.style.pointerEvents = "none"),
              (dropdownButton.style.position = "absolute"),
              (dropdownButton.style.top = "-9999px"),
              (dropdownButton.style.left = "-9999px"),
              select.addEventListener("click", function (e) {
                e.stopPropagation();
              }),
              select.addEventListener("change", function () {
                var e = select.options[select.selectedIndex].value;
                if ("opt1" === e) {
                  javascript: Player.Money = 9999999;
                  showToastscpg(),
                    event.stopPropagation(),
                    event.stopPropagation(),
                    forceclosemenu();
                } else if ("opt2" === e) {
                  javascript: Player.Money = prompt("Enter Cash Amount");
                  showToastscpg(), forceclosemenu();
                } else if ("opt3" === e) {
                  javascript: SkillChange("Infiltration", 10);
                  SkillChange("SelfBondage", 10),
                    SkillChange("Willpower", 10),
                    SkillChange("Evasion", 10),
                    SkillChange("Bondage", 10),
                    SkillChange("Dressage", 10),
                    SkillChange("LockPicking", 10),
                    showToastscpg(),
                    forceclosemenu();
                } else if ("opt4" === e) {
                  javascript: ReputationChange("Gaming", 100);
                  ReputationChange("Gambling", 100),
                    ReputationChange("LARP", 100),
                    ReputationChange("Maid", 100),
                    ReputationChange("ABDL", 100),
                    ReputationChange("Nurse", 100),
                    showToastscpg(),
                    forceclosemenu();
                } else if ("opt5" === e) {
                  javascript: ServerPlayerSync;
                  AssetFemale3DCG.forEach((e) =>
                    e.Asset.forEach((t) =>
                      InventoryAdd(Player, t.Name, e.Group)
                    )
                  ),
                    ServerPlayerInventorySync(),
                    showToastscpg(),
                    forceclosemenu();
                } else if ("opt6" === e) {
                  javascript: InventoryRemove(Player, "ItemNeck");
                  ChatRoomCharacterItemUpdate(Player, "ItemNeck"),
                    LogAdd("ReleasedCollar", "OwnerRule"),
                    showToastscpg(),
                    forceclosemenu();
                } else if ("opt7" === e) {
                  javascript: alert(
                    "Start a LARP session & select class before running"
                  );
                  GameLARPLevelProgress(100), showToastscpg(), forceclosemenu();
                } else if ("opt8" === e) {
                  javascript: LogAdd(
                    "Escaped",
                    "Asylum",
                    CurrentTime + 999999999
                  );
                  showToastscpg(), forceclosemenu();
                } else if ("opt9" === e) {
                  javascript: LogAdd(
                    "ClubSlave",
                    "Management",
                    CurrentTime + 999999999
                  );
                  showToastscpg(), forceclosemenu();
                } else if ("opt10" === e) {
                  javascript: LogAdd("Escaped", "Asylum", CurrentTime);
                  LogAdd("ClubSlave", "Management", CurrentTime),
                    LogAdd("BlockChange", "Rule", CurrentTime),
                    (ManagementIsClubSlave = function () {
                      return !1;
                    }),
                    (ManagementClubSlaveDialog = function (e) {}),
                    ManagementFinishClubSlave(),
                    showToastscpg(),
                    forceclosemenu();
                } else if ("opt11" === e) {
                  javascript: alert(
                    "Start a GGTS session before running, refresh to see changes"
                  );
                  (Player.Game.GGTS.Level = prompt("Enter GGTS Level (1-6)")),
                    ServerAccountUpdate.QueueData({ Game: Player.Game }),
                    showToastscpg(),
                    forceclosemenu();
                } else if ("opt12" === e) {
                  javascript: DialogSetReputation(
                    "Dominant",
                    prompt("Enter Sub/Dom Rep (-100 to 100)")
                  );
                  showToastscpg(), forceclosemenu();
                } else if ("opt13" === e) {
                  javascript: name = prompt("Enter Nickname");
                  (Player.Nickname = name),
                    ServerAccountUpdate.QueueData({ Nickname: name }, !0),
                    showToastscpg(),
                    forceclosemenu();
                } else if ("opt14" === e) {
                  javascript: ActivitySetArousal(Player, 1);
                  ActivityOrgasmPrepare(Player, !0),
                    (ActivityOrgasmGameResistCount = 1),
                    showToastscpg(),
                    forceclosemenu();
                } else if ("opt15" === e) {
                  javascript: window.open(
                    "https://discord.gg/v3JBjyS4mx",
                    "_blank"
                  );
                  showToastscpg(), forceclosemenu();
                } else if ("opt16" === e) {
                  javascript: {
                    let t, n;
                    ChatRoomStart(
                      (n =
                        "male" ===
                        (t = prompt("Male / Female / Mixed")).toLowerCase()
                          ? "M"
                          : "mixed" === t.toLowerCase()
                          ? "X"
                          : ""),
                      "",
                      null,
                      null,
                      "Introduction",
                      BackgroundsTagList
                    );
                  }
                  showToastscpg(), forceclosemenu();
                } else if ("opt17" === e) {
                  javascript: !(function () {
                    let e = prompt(
                      "Start a LARP Room as Admin First\nStart / Skip / Mixed / Shuffle / Team / Win (color)"
                    ).toLowerCase();
                    if ("start" === e)
                      ServerSend("ChatRoomGame", { GameProgress: "Start" });
                    else if ("skip" === e)
                      ServerSend("ChatRoomGame", { GameProgress: "Skip" });
                    else if ("shuffle" === e)
                      ServerSend("ChatRoomAdmin", {
                        MemberNumber: ChatRoomCharacter[1].MemberNumber,
                        Action: "Shuffle",
                      });
                    else if ("team" === e) {
                      let t = new DictionaryBuilder()
                        .sourceCharacter(Player)
                        .build();
                      ServerSend("ChatRoomChat", {
                        Content: "LARPChangeTeamClass",
                        Type: "Action",
                        Dictionary: t,
                      });
                    } else if (e.startsWith("win")) {
                      let n = e.slice(4).trim();
                      GameLARPAddChatLog(
                        "EndGame",
                        Player,
                        Player,
                        OnlineGameDictionaryText(
                          "Team" + (n = n.charAt(0).toUpperCase() + n.slice(1))
                        ),
                        0,
                        0,
                        "#0000B0"
                      );
                    }
                  })();
                  showToastscpg(), forceclosemenu();
                } else
                  "opt18" === e
                    ? (document.body.appendChild(buttonContainer),
                      (buttonContainer.style.display = "block"))
                    : "opt19" === e &&
                      (document.body.appendChild(settingsMenu),
                      (settingsMenu.style.display = "block"),
                      showToastscpg(),
                      forceclosemenu());
                select.style.display = "none";
              }),
              updateContextMenu(),
              contextMenu.addEventListener("contextmenu", function () {
                updateContextMenu();
              }),
              document.body.appendChild(contextMenu);
          }
          function forceclosemenu() {
            (contextMenu.style.display = "none"),
              "" !== Player.LastChatRoom && ChatRoomClickCharacter(Player),
              DialogLeave(),
              (contextMenuOpen = !1);
          }
          function updateContextMenu() {
            for (; contextMenu.firstChild; )
              contextMenu.removeChild(contextMenu.firstChild);
            contextMenu.appendChild(header),
              contextMenu.appendChild(createSeparator()),
              contextMenu.appendChild(button1),
              contextMenu.appendChild(button2),
              contextMenu.appendChild(button3),
              contextMenu.appendChild(button4),
              contextMenu.appendChild(button5),
              contextMenu.appendChild(button6),
              contextMenu.appendChild(button7),
              visb
                ? contextMenu.appendChild(button8)
                : contextMenu.appendChild(button9),
              contextMenu.appendChild(button10),
              contextMenu.appendChild(createSeparator()),
              contextMenu.appendChild(dropdownButton),
              contextMenu.appendChild(select);
          }
        }),
          document.addEventListener("click", function () {
            if (contextMenuOpen) {
              var e = document.querySelector("div[style*='fixed']");
              e &&
                ((e.style.display = "none"),
                ChatRoomClickCharacter(Player),
                DialogLeave()),
                (contextMenuOpen = !1);
            }
          });
        let backtickPressed = !1,
          lastKeyPressed = null;
        document.addEventListener("keydown", function (e) {
          "`" !== e.key || backtickPressed
            ? backtickPressed && (lastKeyPressed = e.key)
            : (backtickPressed = !0);
        }),
          document.addEventListener("keyup", function (e) {
            "`" === e.key && ((backtickPressed = !1), (lastKeyPressed = null));
          }),
          setInterval(function () {
            if ("," === lastKeyPressed || "." === lastKeyPressed) {
              let e = "," === lastKeyPressed ? "MoveLeft" : "MoveRight";
              ServerSend("ChatRoomAdmin", {
                MemberNumber: Player.MemberNumber,
                Action: e,
              });
            }
          }, 50);
        let settingsMenu = document.createElement("div");
        (settingsMenu.id = "settings-menu"),
          (settingsMenu.style.position = "fixed"),
          (settingsMenu.style.top = "20px"),
          (settingsMenu.style.left = "20px"),
          (settingsMenu.style.backgroundColor = "#fff"),
          (settingsMenu.style.border = "1px solid #ccc"),
          (settingsMenu.style.padding = "3px"),
          (settingsMenu.style.borderRadius = "10px"),
          (settingsMenu.style.display = "none"),
          (settingsMenu.style.zIndex = "9999");
        let BCMElogo1 = document.createElement("img");
        (BCMElogo1.src =
          "https://media.discordapp.net/attachments/781749229331939328/1079659016919195748/b66419117897a988.png?width=1190&height=1189"),
          (BCMElogo1.style.float = "left"),
          (BCMElogo1.style.marginRight = "10px"),
          (BCMElogo1.style.width = "40px"),
          (BCMElogo1.style.height = "40px"),
          settingsMenu.appendChild(BCMElogo1);
        let option1 = document.createElement("label");
        option1.textContent = "Antiblind";
        let checkbox1 = document.createElement("input");
        (checkbox1.type = "checkbox"),
          (checkbox1.id = "option1"),
          (checkbox1.style.marginRight = "5px"),
          (checkbox1.style.verticalAlign = "middle"),
          option1.appendChild(checkbox1),
          settingsMenu.appendChild(option1);
        let option2 = document.createElement("label");
        option2.textContent = "Realistic Talking";
        let checkbox2 = document.createElement("input");
        (checkbox2.type = "checkbox"),
          (checkbox2.id = "option2"),
          (checkbox2.style.marginRight = "5px"),
          (checkbox2.style.verticalAlign = "middle"),
          option2.appendChild(checkbox2),
          settingsMenu.appendChild(option2);
        let option3 = document.createElement("label");
        option3.textContent = "Sound";
        let checkbox3 = document.createElement("input");
        function runOption1() {
          if (checkbox1.checked) {
            function e() {
              return 0;
            }
            (Player.GetBlindLevel = e), Player.GetBlindLevel();
          }
        }
        function runOption2() {
          function e() {
            CharacterSetFacialExpression(Player, "Mouth", o[i++]),
              i < o.length ? setTimeout(e, 1e3) : (o = null);
          }
          function t(t) {
            !o &&
              ((o = t),
              (i = 0),
              (expressionAnimationEx = InventoryGet(Player, "Mouth")) &&
                expressionAnimationEx.Property &&
                expressionAnimationEx.Property.Expression &&
                (o[o.length - 1] = expressionAnimationEx.Property.Expression),
              e());
          }
          function n() {
            var e = ElementValue("InputChat").trim();
            e.startsWith("/") ||
              e.startsWith("*") ||
              e.startsWith("!") ||
              (e.length > 10
                ? t([null, "Grin", "Smirk", null, "Grin", "Smirk", null])
                : t([null, "Grin", "Smirk", null])),
              l();
          }
          if (checkbox2.checked) {
            var o,
              i = 0,
              l = ChatRoomSendChat;
            ChatRoomSendChat = n;
          }
        }
        function runOption3() {
          if (checkbox3.checked)
            function e() {
              AudioPlayInstantSound(
                "https://cdn.discordapp.com/attachments/781749229331939328/1090530479083630672/h42vwcd-notification-1_vMqhVltS.mp3",
                1
              );
              var e = document.createElement("div");
              (e.style.position = "fixed"),
                (e.style.bottom = "5px"),
                (e.style.right = "5px"),
                (e.style.backgroundColor = "white"),
                (e.style.color = "#141414"),
                (e.style.padding = "5px"),
                (e.style.border = "2px solid #4CAF50"),
                (e.style.borderRadius = "5px"),
                (e.style.boxShadow = "2px 2px 10px rgba(0, 0, 0, 0.5)"),
                (e.style.display = "none"),
                (e.style.zIndex = "999"),
                (e.style.transition = "opacity 0.5s ease-in-out"),
                (e.style.opacity = "0"),
                (e.style.display = "flex"),
                (e.style.alignItems = "center");
              var t = document.createElement("div");
              (t.style.width = "100%"),
                (t.style.height = "3px"),
                (t.style.backgroundColor = "black"),
                (t.style.position = "absolute"),
                (t.style.bottom = "0"),
                (t.style.left = "0"),
                (t.style.transition = "width 5s ease-in-out"),
                (t.style.width = "0%"),
                e.appendChild(t),
                setTimeout(function () {
                  t.style.width = "100%";
                }, 0);
              var n = document.createElement("img");
              (n.src =
                "https://media.discordapp.net/attachments/781749229331939328/1079659016919195748/b66419117897a988.png?width=1190&height=1189"),
                (n.style.width = "23px"),
                (n.style.height = "23px"),
                (n.style.borderRadius = "50%"),
                (n.style.marginRight = "-30px"),
                (n.style.marginBottom = "-5px"),
                e.appendChild(n);
              var o = document.createElement("span");
              (o.style.fontWeight = "bold"),
                (o.style.marginLeft = "35px"),
                (o.innerHTML = "Action Successfully Executed"),
                e.appendChild(o),
                document.body.appendChild(e),
                setTimeout(function () {
                  (e.style.display = "block"), (e.style.opacity = "1");
                }, 0),
                setTimeout(function () {
                  e.style.opacity = "0";
                }, 5e3),
                setTimeout(function () {
                  e.style.display = "none";
                }, 5500),
                Fdebug();
            }
        }
        (checkbox3.type = "checkbox"),
          (checkbox3.id = "option3"),
          (checkbox3.style.marginRight = "5px"),
          (checkbox3.style.verticalAlign = "middle"),
          option3.appendChild(checkbox3),
          settingsMenu.appendChild(option3),
          (option1.style.display = "flex"),
          (option1.style.justifyContent = "center"),
          (option1.style.alignItems = "center"),
          (option1.style.marginBottom = "10px"),
          (option1.style.padding = "5px"),
          (option1.style.borderRadius = "5px"),
          (option1.style.backgroundColor = "#f2f2f2"),
          (option2.style.display = "flex"),
          (option2.style.justifyContent = "center"),
          (option2.style.alignItems = "center"),
          (option2.style.marginBottom = "10px"),
          (option2.style.padding = "5px"),
          (option2.style.borderRadius = "5px"),
          (option2.style.backgroundColor = "#f2f2f2"),
          (option3.style.display = "flex"),
          (option3.style.justifyContent = "center"),
          (option3.style.alignItems = "center"),
          (option3.style.marginBottom = "10px"),
          (option3.style.padding = "5px"),
          (option3.style.borderRadius = "5px"),
          (option3.style.backgroundColor = "#f2f2f2"),
          option1.addEventListener("mouseenter", function () {
            (option1.style.backgroundColor = "#ddd"),
              (option1.style.cursor = "pointer");
          }),
          option1.addEventListener("mouseleave", function () {
            checkbox1.checked
              ? (option1.style.backgroundColor = "lightgreen")
              : (option1.style.backgroundColor = "#f2f2f2");
          }),
          option2.addEventListener("mouseenter", function () {
            (option2.style.backgroundColor = "#ddd"),
              (option2.style.cursor = "pointer");
          }),
          option2.addEventListener("mouseleave", function () {
            checkbox2.checked
              ? (option2.style.backgroundColor = "lightgreen")
              : (option2.style.backgroundColor = "#f2f2f2");
          }),
          option3.addEventListener("mouseenter", function () {
            (option3.style.backgroundColor = "#ddd"),
              (option3.style.cursor = "pointer");
          }),
          option3.addEventListener("mouseleave", function () {
            checkbox3.checked
              ? (option3.style.backgroundColor = "lightgreen")
              : (option3.style.backgroundColor = "#f2f2f2");
          }),
          checkbox1.checked
            ? (option1.style.backgroundColor = "#d1f7c4")
            : (option1.style.backgroundColor = "#f2f2f2"),
          checkbox2.checked
            ? (option2.style.backgroundColor = "#d1f7c4")
            : (option2.style.backgroundColor = "#f2f2f2"),
          checkbox3.checked
            ? (option3.style.backgroundColor = "#d1f7c4")
            : (option3.style.backgroundColor = "#f2f2f2"),
          checkbox1.addEventListener("change", function () {
            checkbox1.checked
              ? (option1.style.backgroundColor = "#d1f7c4")
              : (option1.style.backgroundColor = "#f2f2f2");
          }),
          checkbox2.addEventListener("change", function () {
            checkbox2.checked
              ? (option2.style.backgroundColor = "#d1f7c4")
              : (option2.style.backgroundColor = "#f2f2f2");
          }),
          checkbox3.addEventListener("change", function () {
            checkbox3.checked
              ? (option3.style.backgroundColor = "#d1f7c4")
              : (option3.style.backgroundColor = "#f2f2f2");
          }),
          null !== localStorage.getItem("option1") &&
            ((checkbox1.checked = "true" === localStorage.getItem("option1")),
            checkbox1.checked && setInterval(runOption1, 1e3)),
          null !== localStorage.getItem("option2") &&
            ((checkbox2.checked = "true" === localStorage.getItem("option2")),
            checkbox2.checked && setInterval(runOption2, 1e3)),
          null !== localStorage.getItem("option3") &&
            ((checkbox3.checked = "true" === localStorage.getItem("option3")),
            checkbox3.checked && setInterval(runOption3, 1e3)),
          checkbox1.addEventListener("change", function () {
            localStorage.setItem("option1", checkbox1.checked),
              checkbox1.checked && setInterval(runOption1, 1e3);
          }),
          checkbox2.addEventListener("change", function () {
            localStorage.setItem("option2", checkbox2.checked),
              checkbox2.checked && setInterval(runOption2, 1e3);
          }),
          checkbox3.addEventListener("change", function () {
            localStorage.setItem("option3", checkbox3.checked),
              checkbox3.checked && setInterval(runOption3, 1e3);
          }),
          checkbox1.addEventListener("change", function () {
            localStorage.setItem("option1", checkbox1.checked);
          }),
          checkbox2.addEventListener("change", function () {
            localStorage.setItem("option2", checkbox2.checked);
          }),
          checkbox3.addEventListener("change", function () {
            localStorage.setItem("option3", checkbox3.checked);
          }),
          document.body.appendChild(settingsMenu);
        let isBacktickPressed = !1,
          isSPressed = !1;
        document.addEventListener("keydown", function (e) {
          "`" === e.key
            ? (isBacktickPressed = !0)
            : "s" === e.key && (isSPressed = !0),
            isBacktickPressed &&
              isSPressed &&
              (settingsMenu.style.display = "block");
        }),
          document.addEventListener("click", function (e) {
            let t = e.target,
              n = !!t.closest("#settings-menu");
            n || (settingsMenu.style.display = "none");
          }),
          document.addEventListener("keyup", function (e) {
            "`" === e.key
              ? (isBacktickPressed = !1)
              : "s" === e.key && (isSPressed = !1);
          });
        let buttonData = [
            {
              name: "Pull-Ups",
              action() {
                showToastscpg(),
                  CharacterSetActivePose(Player, null),
                  setTimeout(function () {
                    CharacterSetActivePose(Player, "LegsOpen"),
                      CharacterSetActivePose(Player, "OverTheHead"),
                      (InventoryGet(
                        Player,
                        "Emoticon"
                      ).Property.OverrideHeight = { Height: 130 }),
                      "ChatRoom" === CurrentScreen
                        ? ChatRoomCharacterUpdate(Player)
                        : CharacterRefresh(Player);
                  }, 1e3),
                  setTimeout(function () {
                    CharacterSetActivePose(Player, "Yoked"),
                      CharacterSetActivePose(Player, "LegsClosed"),
                      (InventoryGet(
                        Player,
                        "Emoticon"
                      ).Property.OverrideHeight = { Height: 250 }),
                      "ChatRoom" === CurrentScreen
                        ? ChatRoomCharacterUpdate(Player)
                        : CharacterRefresh(Player);
                  }, 2e3),
                  setTimeout(function () {
                    CharacterSetActivePose(Player, "LegsOpen"),
                      CharacterSetActivePose(Player, "OverTheHead"),
                      (InventoryGet(
                        Player,
                        "Emoticon"
                      ).Property.OverrideHeight = { Height: 130 }),
                      "ChatRoom" === CurrentScreen
                        ? ChatRoomCharacterUpdate(Player)
                        : CharacterRefresh(Player);
                  }, 3e3),
                  setTimeout(function () {
                    CharacterSetActivePose(Player, "Yoked"),
                      CharacterSetActivePose(Player, "LegsClosed"),
                      (InventoryGet(
                        Player,
                        "Emoticon"
                      ).Property.OverrideHeight = { Height: 250 }),
                      "ChatRoom" === CurrentScreen
                        ? ChatRoomCharacterUpdate(Player)
                        : CharacterRefresh(Player);
                  }, 4e3),
                  setTimeout(function () {
                    CharacterSetActivePose(Player, "LegsOpen"),
                      CharacterSetActivePose(Player, "OverTheHead"),
                      (InventoryGet(
                        Player,
                        "Emoticon"
                      ).Property.OverrideHeight = { Height: 130 }),
                      "ChatRoom" === CurrentScreen
                        ? ChatRoomCharacterUpdate(Player)
                        : CharacterRefresh(Player);
                  }, 5e3),
                  setTimeout(function () {
                    CharacterSetActivePose(Player, null),
                      delete InventoryGet(Player, "Emoticon").Property
                        .OverrideHeight,
                      "ChatRoom" === CurrentScreen
                        ? ChatRoomCharacterUpdate(Player)
                        : CharacterRefresh(Player);
                  }, 6e3);
              },
            },
            {
              name: "Cheer",
              action() {
                showToastscpg(),
                  CharacterSetActivePose(Player, null),
                  setTimeout(function () {
                    CharacterSetActivePose(Player, "Yoked"),
                      "ChatRoom" === CurrentScreen
                        ? ChatRoomCharacterUpdate(Player)
                        : CharacterRefresh(Player);
                  }, 1e3),
                  setTimeout(function () {
                    CharacterSetActivePose(Player, "OverTheHead"),
                      "ChatRoom" === CurrentScreen
                        ? ChatRoomCharacterUpdate(Player)
                        : CharacterRefresh(Player);
                  }, 2e3),
                  setTimeout(function () {
                    CharacterSetActivePose(Player, "Yoked"),
                      "ChatRoom" === CurrentScreen
                        ? ChatRoomCharacterUpdate(Player)
                        : CharacterRefresh(Player);
                  }, 3e3),
                  setTimeout(function () {
                    CharacterSetActivePose(Player, "OverTheHead"),
                      "ChatRoom" === CurrentScreen
                        ? ChatRoomCharacterUpdate(Player)
                        : CharacterRefresh(Player);
                  }, 4e3),
                  setTimeout(function () {
                    CharacterSetActivePose(Player, "Yoked"),
                      "ChatRoom" === CurrentScreen
                        ? ChatRoomCharacterUpdate(Player)
                        : CharacterRefresh(Player);
                  }, 5e3),
                  setTimeout(function () {
                    CharacterSetActivePose(Player, "OverTheHead"),
                      "ChatRoom" === CurrentScreen
                        ? ChatRoomCharacterUpdate(Player)
                        : CharacterRefresh(Player);
                  }, 6e3),
                  setTimeout(function () {
                    CharacterSetActivePose(Player, null),
                      "ChatRoom" === CurrentScreen
                        ? ChatRoomCharacterUpdate(Player)
                        : CharacterRefresh(Player);
                  }, 7e3);
              },
            },
            {
              name: "Jumping Jacks",
              action() {
                showToastscpg(),
                  CharacterSetActivePose(Player, null),
                  setTimeout(function () {
                    (InventoryGet(Player, "Emoticon").Property.OverrideHeight =
                      { Height: 150 }),
                      CharacterSetActivePose(Player, "LegsOpen"),
                      CharacterSetActivePose(Player, "OverTheHead"),
                      "ChatRoom" === CurrentScreen
                        ? ChatRoomCharacterUpdate(Player)
                        : CharacterRefresh(Player);
                  }, 1e3),
                  setTimeout(function () {
                    (InventoryGet(Player, "Emoticon").Property.OverrideHeight =
                      void 0),
                      CharacterSetActivePose(Player, null),
                      CharacterSetActivePose(Player, "LegsClosed"),
                      "ChatRoom" === CurrentScreen
                        ? ChatRoomCharacterUpdate(Player)
                        : CharacterRefresh(Player);
                  }, 2e3),
                  setTimeout(function () {
                    (InventoryGet(Player, "Emoticon").Property.OverrideHeight =
                      { Height: 150 }),
                      CharacterSetActivePose(Player, "LegsOpen"),
                      CharacterSetActivePose(Player, "OverTheHead"),
                      "ChatRoom" === CurrentScreen
                        ? ChatRoomCharacterUpdate(Player)
                        : CharacterRefresh(Player);
                  }, 3e3),
                  setTimeout(function () {
                    CharacterSetActivePose(Player, null),
                      delete InventoryGet(Player, "Emoticon").Property
                        .OverrideHeight,
                      "ChatRoom" === CurrentScreen
                        ? ChatRoomCharacterUpdate(Player)
                        : CharacterRefresh(Player);
                  }, 4e3);
              },
            },
            {
              name: "Burpees",
              action() {
                showToastscpg(),
                  CharacterSetActivePose(Player, null),
                  setTimeout(function () {
                    CharacterSetActivePose(Player, "Hogtied"),
                      "ChatRoom" === CurrentScreen
                        ? ChatRoomCharacterUpdate(Player)
                        : CharacterRefresh(Player);
                  }, 1e3),
                  setTimeout(function () {
                    CharacterSetActivePose(Player, null),
                      "ChatRoom" === CurrentScreen
                        ? ChatRoomCharacterUpdate(Player)
                        : CharacterRefresh(Player);
                  }, 2e3),
                  setTimeout(function () {
                    CharacterSetActivePose(Player, "Yoked"),
                      "ChatRoom" === CurrentScreen
                        ? ChatRoomCharacterUpdate(Player)
                        : CharacterRefresh(Player);
                  }, 3e3),
                  setTimeout(function () {
                    CharacterSetActivePose(Player, null),
                      "ChatRoom" === CurrentScreen
                        ? ChatRoomCharacterUpdate(Player)
                        : CharacterRefresh(Player);
                  }, 4e3),
                  setTimeout(function () {
                    CharacterSetActivePose(Player, "Hogtied"),
                      "ChatRoom" === CurrentScreen
                        ? ChatRoomCharacterUpdate(Player)
                        : CharacterRefresh(Player);
                  }, 5e3),
                  setTimeout(function () {
                    CharacterSetActivePose(Player, null),
                      "ChatRoom" === CurrentScreen
                        ? ChatRoomCharacterUpdate(Player)
                        : CharacterRefresh(Player);
                  }, 6e3),
                  setTimeout(function () {
                    CharacterSetActivePose(Player, "Yoked"),
                      "ChatRoom" === CurrentScreen
                        ? ChatRoomCharacterUpdate(Player)
                        : CharacterRefresh(Player);
                  }, 7e3),
                  setTimeout(function () {
                    CharacterSetActivePose(Player, null),
                      "ChatRoom" === CurrentScreen
                        ? ChatRoomCharacterUpdate(Player)
                        : CharacterRefresh(Player);
                  }, 8e3);
              },
            },
            {
              name: "Sleep",
              action() {
                showToastscpg(),
                  CharacterSetActivePose(Player, "Hogtied"),
                  CharacterSetFacialExpression(Player, "Eyes", "Closed"),
                  CharacterSetFacialExpression(Player, "Eyes2", "Closed"),
                  CharacterSetFacialExpression(Player, "Emoticon", "Sleep"),
                  ChatRoomCharacterUpdate(Player);
              },
            },
          ],
          buttonContainer = document.createElement("div");
        (buttonContainer.style.position = "fixed"),
          (buttonContainer.style.width = "300px"),
          (buttonContainer.style.height = "300px"),
          (buttonContainer.style.left = "50%"),
          (buttonContainer.style.top = "50%"),
          (buttonContainer.style.transform = "translate(-50%, -50%)"),
          (buttonContainer.style.display = "none");
        let buttonCircle = document.createElement("div");
        (buttonCircle.style.position = "absolute"),
          (buttonCircle.style.width = "200px"),
          (buttonCircle.style.height = "200px"),
          (buttonCircle.style.borderRadius = "50%"),
          (buttonCircle.style.backgroundColor = "white"),
          (buttonCircle.style.opacity = "1"),
          (buttonCircle.style.left = "50%"),
          (buttonCircle.style.top = "50%"),
          (buttonCircle.style.transform = "translate(-50%, -50%)"),
          (buttonCircle.style.transition = "opacity 0.2s ease-in-out"),
          (buttonCircle.style.border = "2px solid black"),
          buttonContainer.appendChild(buttonCircle);
        let logo = document.createElement("img");
        (logo.src =
          "https://media.discordapp.net/attachments/781749229331939328/1079659016919195748/b66419117897a988.png?width=1190&height=1189"),
          (logo.style.position = "absolute"),
          (logo.style.width = "80px"),
          (logo.style.height = "80px"),
          (logo.style.borderRadius = "50%"),
          (logo.style.left = "50%"),
          (logo.style.top = "50%"),
          (logo.style.transform = "translate(-50%, -50%)"),
          buttonCircle.appendChild(logo);
        let buttons = [];
        for (let i = 0; i < buttonData.length; i++) {
          let button = document.createElement("button");
          (button.innerText = buttonData[i].name),
            (button.style.position = "absolute"),
            (button.style.width = "80px"),
            (button.style.height = "80px"),
            (button.style.borderRadius = "50%"),
            (button.style.backgroundColor = "black"),
            (button.style.color = "white"),
            (button.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.3)"),
            (button.style.left = "50%"),
            (button.style.top = "50%"),
            (button.style.transform = `translate(-50%, -50%) rotate(${
              i * (360 / buttonData.length)
            }deg) translate(0, -100px) rotate(${
              -i * (360 / buttonData.length)
            }deg)`),
            (button.style.transition =
              "opacity 0.2s ease-in-out, transform 0.2s ease-in-out"),
            button.addEventListener("click", buttonData[i].action),
            buttonContainer.appendChild(button),
            buttons.push(button),
            button.addEventListener("mouseenter", () => {
              button.style.transform = `translate(-50%, -50%) rotate(${
                i * (360 / buttonData.length)
              }deg) translate(0, -99px) rotate(${
                -i * (360 / buttonData.length)
              }deg) scale(1.05)`;
            }),
            button.addEventListener("mouseleave", () => {
              button.style.transform = `translate(-50%, -50%) rotate(${
                i * (360 / buttonData.length)
              }deg) translate(0, -100px) rotate(${
                -i * (360 / buttonData.length)
              }deg) scale(1)`;
            });
        }
        let isGraveKeyDown = !1;
        function showToastscpg() {
          null !== localStorage.getItem("option3") &&
            ((checkbox3.checked = "true" === localStorage.getItem("option3")),
            checkbox3.checked &&
              AudioPlayInstantSound(
                "https://cdn.discordapp.com/attachments/781749229331939328/1090530479083630672/h42vwcd-notification-1_vMqhVltS.mp3",
                1
              ));
          var e = document.createElement("div");
          (e.style.position = "fixed"),
            (e.style.bottom = "5px"),
            (e.style.right = "5px"),
            (e.style.backgroundColor = "white"),
            (e.style.color = "#141414"),
            (e.style.padding = "5px"),
            (e.style.border = "2px solid #4CAF50"),
            (e.style.borderRadius = "5px"),
            (e.style.boxShadow = "2px 2px 10px rgba(0, 0, 0, 0.5)"),
            (e.style.display = "none"),
            (e.style.zIndex = "999"),
            (e.style.transition = "opacity 0.5s ease-in-out"),
            (e.style.opacity = "0"),
            (e.style.display = "flex"),
            (e.style.alignItems = "center");
          var t = document.createElement("div");
          (t.style.width = "100%"),
            (t.style.height = "3px"),
            (t.style.backgroundColor = "black"),
            (t.style.position = "absolute"),
            (t.style.bottom = "0"),
            (t.style.left = "0"),
            (t.style.transition = "width 5s ease-in-out"),
            (t.style.width = "0%"),
            e.appendChild(t),
            setTimeout(function () {
              t.style.width = "100%";
            }, 0);
          var n = document.createElement("img");
          (n.src =
            "https://media.discordapp.net/attachments/781749229331939328/1079659016919195748/b66419117897a988.png?width=1190&height=1189"),
            (n.style.width = "23px"),
            (n.style.height = "23px"),
            (n.style.borderRadius = "50%"),
            (n.style.marginRight = "-30px"),
            (n.style.marginBottom = "-5px"),
            e.appendChild(n);
          var o = document.createElement("span");
          (o.style.fontWeight = "bold"),
            (o.style.marginLeft = "35px"),
            (o.innerHTML = "Action Successfully Executed"),
            e.appendChild(o),
            document.body.appendChild(e),
            setTimeout(function () {
              (e.style.display = "block"), (e.style.opacity = "1");
            }, 0),
            setTimeout(function () {
              e.style.opacity = "0";
            }, 5e3),
            setTimeout(function () {
              e.style.display = "none";
            }, 5500),
            Fdebug();
        }
        function showToastUpdate() {
          var e = document.createElement("div");
          (e.style.position = "fixed"),
            (e.style.bottom = "5px"),
            (e.style.right = "5px"),
            (e.style.backgroundColor = "white"),
            (e.style.color = "#141414"),
            (e.style.padding = "5px"),
            (e.style.border = "2px solid #f22c2c"),
            (e.style.borderRadius = "5px"),
            (e.style.boxShadow = "2px 2px 10px rgba(0, 0, 0, 0.5)"),
            (e.style.display = "none"),
            (e.style.zIndex = "999"),
            (e.style.transition = "opacity 0.5s ease-in-out"),
            (e.style.opacity = "0"),
            (e.style.display = "flex"),
            (e.style.alignItems = "center");
          var t = document.createElement("div");
          (t.style.width = "100%"),
            (t.style.height = "3px"),
            (t.style.backgroundColor = "black"),
            (t.style.position = "absolute"),
            (t.style.bottom = "0"),
            (t.style.left = "0"),
            (t.style.transition = "width 5s ease-in-out"),
            (t.style.width = "0%"),
            e.appendChild(t),
            setTimeout(function () {
              t.style.width = "100%";
            }, 0);
          var n = document.createElement("button");
          (n.style.border = "none"),
            (n.style.background = "none"),
            (n.style.top = "5px"),
            (n.style.right = "5px"),
            (n.style.fontWeight = "bold"),
            (n.style.fontSize = "16px"),
            (n.style.marginLeft = "-2px"),
            (n.style.marginRight = "0px"),
            (n.innerHTML = "X"),
            e.appendChild(n),
            n.addEventListener("click", function () {
              (e.style.opacity = "0"),
                setTimeout(function () {
                  e.style.display = "none";
                }, 500);
            });
          var o = document.createElement("img");
          (o.src =
            "https://media.discordapp.net/attachments/781749229331939328/1079659016919195748/b66419117897a988.png?width=1190&height=1189"),
            (o.style.width = "23px"),
            (o.style.height = "23px"),
            (o.style.borderRadius = "50%"),
            (o.style.marginRight = "-30px"),
            (o.style.marginBottom = "-5px"),
            e.appendChild(o);
          var i = document.createElement("span");
          (i.style.fontWeight = "bold"),
            (i.style.marginLeft = "35px"),
            (i.innerHTML =
              "New update detected, refresh BC to update to V2.0.7"),
            e.appendChild(i),
            document.body.appendChild(e),
            setTimeout(function () {
              (e.style.display = "block"), (e.style.opacity = "1");
            }, 0),
            setTimeout(function () {
              e.style.opacity = "0";
            }, 5e6),
            setTimeout(function () {
              e.style.display = "none";
            }, 55e5);
        }
        document.addEventListener("keydown", (e) => {
          "`" === e.key
            ? (isGraveKeyDown = !0)
            : isGraveKeyDown &&
              "e" === e.key &&
              (document.body.appendChild(buttonContainer),
              (buttonContainer.style.display = "block"),
              (isGraveKeyDown = !1));
        }),
          document.addEventListener("keyup", (e) => {
            "`" === e.key && (isGraveKeyDown = !1);
          }),
          document.addEventListener("click", (e) => {
            buttonContainer.contains(e.target) ||
              (buttonContainer.parentNode === document.body &&
                document.body.removeChild(buttonContainer),
              (buttonContainer.style.display = "none"));
          }),
          fetch(
            "https://raw.githubusercontent.com/BCMS7/BCME-External/main/charlogo.js"
          )
            .then((e) => e.text())
            .then((e) => {
              let t = document.createElement("script");
              (t.innerHTML = e), document.head.appendChild(t);
            });
        let url =
            "https://raw.githubusercontent.com/BCMS7/BCME-External/main/updatemanager.js",
          maxVersion = 15,
          alertTriggered = !1;
        function checkVersion() {
          fetch(url)
            .then((e) => e.text())
            .then((e) => {
              parseInt(e) > maxVersion &&
                !alertTriggered &&
                (showToastUpdate(), (alertTriggered = !0));
            })
            .catch((e) => console.error(e));
        }
        setInterval(checkVersion, 5e3);
      }
    });
