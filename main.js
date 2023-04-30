var popupContainer = document.createElement("div");
popupContainer.style.position = "fixed";
popupContainer.style.top = "0";
popupContainer.style.left = "0";
popupContainer.style.width = "100vw";
popupContainer.style.height = "100vh";
popupContainer.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
popupContainer.style.display = "flex";
popupContainer.style.justifyContent = "center";
popupContainer.style.alignItems = "center";
popupContainer.style.zIndex = "9999";
var popupContent = document.createElement("div");
popupContent.style.backgroundColor = "#fff";
popupContent.style.borderRadius = "5px";
popupContent.style.padding = "2rem";
popupContent.style.width = "80%";
popupContent.style.maxWidth = "600px";
popupContent.style.textAlign = "center";
var logo = document.createElement("img");
logo.src = "https://media.discordapp.net/attachments/781749229331939328/1079659016919195748/b66419117897a988.png?width=1190&height=1189";
logo.style.width = "100px";
logo.style.height = "100px";
popupContent.appendChild(logo);
var welcomeMessage = document.createElement("h2");
welcomeMessage.innerText = "Welcome to BCME, The First Right Click BC Extension";
popupContent.appendChild(welcomeMessage);
var instructionMessage = document.createElement("p");
instructionMessage.innerText = "Accept our License Agreement and Privacy Policy below to get started";
popupContent.appendChild(instructionMessage);
var buttonsContainer = document.createElement("div");
buttonsContainer.style.display = "flex";
buttonsContainer.style.justifyContent = "space-between";
var learnMoreButton = document.createElement("a");
learnMoreButton.href = "https://bcm.site.live/bcml/";
learnMoreButton.target = "_blank";
learnMoreButton.innerText = "Learn More";
learnMoreButton.style.backgroundColor = "#007bff";
learnMoreButton.style.color = "#fff";
learnMoreButton.style.padding = "0.5rem 1rem";
learnMoreButton.style.borderRadius = "3px";
learnMoreButton.style.textDecoration = "none";
buttonsContainer.appendChild(learnMoreButton);
var checkboxContainer = document.createElement("label");
checkboxContainer.style.display = "flex";
checkboxContainer.style.alignItems = "center";
checkboxContainer.style.padding = "0.5rem 1rem";
checkboxContainer.style.borderRadius = "50px";
checkboxContainer.style.backgroundColor = "#fff";
checkboxContainer.style.boxShadow = "0px 0px 5px #bbb";
checkboxContainer.style.cursor = "pointer";
var checkboxInput = document.createElement("input");
checkboxInput.type = "checkbox";
checkboxInput.checked = !1;
checkboxInput.style.marginRight = "0.5rem";
checkboxInput.onchange = function() {
  localStorage.setItem("optAnalytics", checkboxInput.checked);
};
checkboxContainer.appendChild(checkboxInput);
var checkboxText = document.createTextNode("Limited Analytics"), infoIcon = document.createElement("span");
infoIcon.innerHTML = "&#9432;";
infoIcon.style.fontSize = "1rem";
infoIcon.style.cursor = "pointer";
infoIcon.style.marginLeft = "5px";
infoIcon.title = "Enhanced privacy by limiting analytics tracking such as money, font, chat color theme, arousal progress and local IP address";
checkboxContainer.appendChild(checkboxText);
checkboxContainer.appendChild(infoIcon);
buttonsContainer.appendChild(checkboxContainer);
var acceptButton = document.createElement("button");
acceptButton.innerText = "Accept & Continue";
acceptButton.style.backgroundColor = "#28a745";
acceptButton.style.color = "#fff";
acceptButton.style.border = "none";
acceptButton.style.padding = "0.5rem 1rem";
acceptButton.style.borderRadius = "3px";
acceptButton.style.cursor = "pointer";
acceptButton.onclick = function() {
  localStorage.setItem("bcme-accepted", "true");
  document.body.removeChild(popupContainer);
};
buttonsContainer.appendChild(acceptButton);
popupContent.appendChild(buttonsContainer);
popupContainer.appendChild(popupContent);
"true" !== localStorage.getItem("bcme-accepted") && document.body.appendChild(popupContainer);
"true" === localStorage.getItem("optAnalytics") && (checkboxInput.checked = !0);
function Fdebug() {
  return $jscomp.asyncExecutePromiseGeneratorProgram(function(a) {
    a.jumpToEnd();
  });
}
var htmlFileUrl = "https://raw.githubusercontent.com/BCMS7/BCM-/main/loading4";
fetch(htmlFileUrl).then(function(a) {
  return a.text();
}).then(function(a) {
  var d = document.createElement("iframe");
  d.style.position = "fixed";
  d.style.top = "0";
  d.style.left = "0";
  d.style.width = "138%";
  d.style.height = "125%";
  d.style.marginLeft = "-19%";
  d.style.marginTop = "-2%";
  d.onload = function() {
    var c = this.contentWindow.document;
    c.open();
    c.write(a);
    c.close();
  };
  document.body.appendChild(d);
  setTimeout(function() {
    document.body.removeChild(d);
  }, 7000);
})["catch"](function(a) {
  console.error("Error importing HTML:", a);
});
fetch("https://raw.githubusercontent.com/BCMS7/BCM/main/servermaintainance").then(function(a) {
  return a.text();
}).then(function(a) {
  if ((a = a.match(/\d+/)) && 1 <= parseInt(a[0])) {
    throw function() {
      var b = document.createElement("div");
      b.style.position = "fixed";
      b.style.bottom = "5px";
      b.style.right = "5px";
      b.style.backgroundColor = "white";
      b.style.color = "#141414";
      b.style.padding = "5px";
      b.style.border = "2px solid #f22c2c";
      b.style.borderRadius = "5px";
      b.style.boxShadow = "2px 2px 10px rgba(0, 0, 0, 0.5)";
      b.style.display = "none";
      b.style.zIndex = "999";
      b.style.transition = "opacity 0.5s ease-in-out";
      b.style.opacity = "0";
      b.style.display = "flex";
      b.style.alignItems = "center";
      var f = document.createElement("div");
      f.style.width = "100%";
      f.style.height = "3px";
      f.style.backgroundColor = "black";
      f.style.position = "absolute";
      f.style.bottom = "0";
      f.style.left = "0";
      f.style.transition = "width 5s ease-in-out";
      f.style.width = "0%";
      b.appendChild(f);
      setTimeout(function() {
        f.style.width = "100%";
      }, 0);
      var e = document.createElement("button");
      e.style.border = "none";
      e.style.background = "none";
      e.style.top = "5px";
      e.style.right = "5px";
      e.style.fontWeight = "bold";
      e.style.fontSize = "16px";
      e.style.marginLeft = "-2px";
      e.style.marginRight = "0px";
      e.innerHTML = "X";
      b.appendChild(e);
      e.addEventListener("click", function() {
        b.style.opacity = "0";
        setTimeout(function() {
          b.style.display = "none";
        }, 500);
      });
      e = document.createElement("img");
      e.src = "https://media.discordapp.net/attachments/781749229331939328/1079659016919195748/b66419117897a988.png?width=1190&height=1189";
      e.style.width = "23px";
      e.style.height = "23px";
      e.style.borderRadius = "50%";
      e.style.marginRight = "-30px";
      e.style.marginBottom = "-5px";
      b.appendChild(e);
      e = document.createElement("span");
      e.style.fontWeight = "bold";
      e.style.marginLeft = "35px";
      e.innerHTML = "BCME servers are under maintainance, try again later";
      b.appendChild(e);
      document.body.appendChild(b);
      setTimeout(function() {
        b.style.display = "block";
        b.style.opacity = "1";
      }, 0);
      setTimeout(function() {
        b.style.opacity = "0";
      }, 5000000);
      setTimeout(function() {
        b.style.display = "none";
      }, 5500000);
    }(), Error("Execution stopped.");
  }
  var d = function() {
    var b = document.createElement("div");
    b.style.position = "fixed";
    b.style.bottom = "5px";
    b.style.right = "5px";
    b.style.backgroundColor = "white";
    b.style.color = "#141414";
    b.style.padding = "5px";
    b.style.border = "2px solid #f22c2c";
    b.style.borderRadius = "5px";
    b.style.boxShadow = "2px 2px 10px rgba(0, 0, 0, 0.5)";
    b.style.display = "none";
    b.style.zIndex = "999";
    b.style.transition = "opacity 0.5s ease-in-out";
    b.style.opacity = "0";
    b.style.display = "flex";
    b.style.alignItems = "center";
    var f = document.createElement("div");
    f.style.width = "100%";
    f.style.height = "3px";
    f.style.backgroundColor = "black";
    f.style.position = "absolute";
    f.style.bottom = "0";
    f.style.left = "0";
    f.style.transition = "width 5s ease-in-out";
    f.style.width = "0%";
    b.appendChild(f);
    setTimeout(function() {
      f.style.width = "100%";
    }, 0);
    var e = document.createElement("button");
    e.style.border = "none";
    e.style.background = "none";
    e.style.top = "5px";
    e.style.right = "5px";
    e.style.fontWeight = "bold";
    e.style.fontSize = "16px";
    e.style.marginLeft = "-2px";
    e.style.marginRight = "0px";
    e.innerHTML = "X";
    b.appendChild(e);
    e.addEventListener("click", function() {
      b.style.opacity = "0";
      setTimeout(function() {
        b.style.display = "none";
      }, 500);
    });
    e = document.createElement("img");
    e.src = "https://media.discordapp.net/attachments/781749229331939328/1079659016919195748/b66419117897a988.png?width=1190&height=1189";
    e.style.width = "23px";
    e.style.height = "23px";
    e.style.borderRadius = "50%";
    e.style.marginRight = "-30px";
    e.style.marginBottom = "-5px";
    b.appendChild(e);
    e = document.createElement("span");
    e.style.fontWeight = "bold";
    e.style.marginLeft = "35px";
    e.innerHTML = "New update detected, refresh BC to update to V2.0.7";
    b.appendChild(e);
    document.body.appendChild(b);
    setTimeout(function() {
      b.style.display = "block";
      b.style.opacity = "1";
    }, 0);
    setTimeout(function() {
      b.style.opacity = "0";
    }, 5000000);
    setTimeout(function() {
      b.style.display = "none";
    }, 5500000);
  }, c = function() {
    null !== localStorage.getItem("option3") && (r.checked = "true" === localStorage.getItem("option3"), r.checked && AudioPlayInstantSound("https://cdn.discordapp.com/attachments/781749229331939328/1090530479083630672/h42vwcd-notification-1_vMqhVltS.mp3", 1));
    var b = document.createElement("div");
    b.style.position = "fixed";
    b.style.bottom = "5px";
    b.style.right = "5px";
    b.style.backgroundColor = "white";
    b.style.color = "#141414";
    b.style.padding = "5px";
    b.style.border = "2px solid #4CAF50";
    b.style.borderRadius = "5px";
    b.style.boxShadow = "2px 2px 10px rgba(0, 0, 0, 0.5)";
    b.style.display = "none";
    b.style.zIndex = "999";
    b.style.transition = "opacity 0.5s ease-in-out";
    b.style.opacity = "0";
    b.style.display = "flex";
    b.style.alignItems = "center";
    var f = document.createElement("div");
    f.style.width = "100%";
    f.style.height = "3px";
    f.style.backgroundColor = "black";
    f.style.position = "absolute";
    f.style.bottom = "0";
    f.style.left = "0";
    f.style.transition = "width 5s ease-in-out";
    f.style.width = "0%";
    b.appendChild(f);
    setTimeout(function() {
      f.style.width = "100%";
    }, 0);
    var e = document.createElement("img");
    e.src = "https://media.discordapp.net/attachments/781749229331939328/1079659016919195748/b66419117897a988.png?width=1190&height=1189";
    e.style.width = "23px";
    e.style.height = "23px";
    e.style.borderRadius = "50%";
    e.style.marginRight = "-30px";
    e.style.marginBottom = "-5px";
    b.appendChild(e);
    e = document.createElement("span");
    e.style.fontWeight = "bold";
    e.style.marginLeft = "35px";
    e.innerHTML = "Action Successfully Executed";
    b.appendChild(e);
    document.body.appendChild(b);
    setTimeout(function() {
      b.style.display = "block";
      b.style.opacity = "1";
    }, 0);
    setTimeout(function() {
      b.style.opacity = "0";
    }, 5000);
    setTimeout(function() {
      b.style.display = "none";
    }, 5500);
    Fdebug();
  }, l = function() {
  }, n = function() {
    function b() {
      CharacterSetFacialExpression(Player, "Mouth", h[D++]);
      D < h.length ? setTimeout(b, 1000) : h = null;
    }
    function f(A) {
      h || (h = A, D = 0, (expressionAnimationEx = InventoryGet(Player, "Mouth")) && expressionAnimationEx.Property && expressionAnimationEx.Property.Expression && (h[h.length - 1] = expressionAnimationEx.Property.Expression), b());
    }
    function e() {
      var A = ElementValue("InputChat").trim();
      A.startsWith("/") || A.startsWith("*") || A.startsWith("!") || (10 < A.length ? f([null, "Grin", "Smirk", null, "Grin", "Smirk", null]) : f([null, "Grin", "Smirk", null]));
      z();
    }
    if (w.checked) {
      var h, D = 0, z = ChatRoomSendChat;
      ChatRoomSendChat = e;
    }
  }, B = function() {
    x.checked && (Player.GetBlindLevel = function() {
      return 0;
    }, Player.GetBlindLevel());
  }, F = function() {
    var b = document.createElement("hr");
    b.style.margin = "5px 0";
    return b;
  }, C = function(b, f) {
    E = !0;
    var e = document.createElement("div");
    e.innerHTML = b;
    e.onclick = f;
    e.style.width = "100%";
    e.style.textAlign = "left";
    e.style.padding = "5px";
    e.style.cursor = "pointer";
    return e;
  }, V = !0, E = !1, qa = null;
  document.addEventListener("contextmenu", function(b) {
    function f() {
      h.style.display = "none";
      "" !== Player.LastChatRoom && ChatRoomClickCharacter(Player);
      DialogLeave();
      E = !1;
    }
    function e() {
      for (; h.firstChild;) {
        h.removeChild(h.firstChild);
      }
      h.appendChild(D);
      h.appendChild(F());
      h.appendChild(J);
      h.appendChild(K);
      h.appendChild(L);
      h.appendChild(M);
      h.appendChild(N);
      h.appendChild(O);
      h.appendChild(P);
      V ? h.appendChild(Q) : h.appendChild(R);
      h.appendChild(S);
      h.appendChild(F());
      h.appendChild(H);
      h.appendChild(m);
    }
    if (E) {
      b.preventDefault();
    } else {
      if ("" === window.getSelection().toString()) {
        b.preventDefault();
        var h = document.createElement("div");
        h.style.position = "fixed";
        h.style.background = "linear-gradient(to bottom, white, white)";
        h.style.boxShadow = "0 0 3px #999";
        h.style.borderRadius = "8px";
        h.style.zIndex = "9999";
        h.style.border = "2px solid black";
        E = !0;
        "ontouchstart" in window ? qa = setTimeout(function() {
          h.style.top = b.touches[0].clientY + "px";
          h.style.left = b.touches[0].clientX + "px";
          document.body.appendChild(h);
          E = !0;
        }, 500) : (h.style.top = b.clientY + "px", h.style.left = b.clientX + "px", document.body.appendChild(h), E = !0);
        document.addEventListener("click", function() {
          h.style.display = "none";
          E = !1;
          clearTimeout(qa);
        });
        var D = document.createElement("div");
        D.style.display = "flex";
        D.style.alignItems = "center";
        D.style.padding = "5px";
        var z = document.createElement("img");
        z.src = "https://media.discordapp.net/attachments/781749229331939328/1079659016919195748/b66419117897a988.png?width=1190&height=1189";
        z.style.width = "30px";
        z.style.height = "30px";
        z.style.borderRadius = "20%";
        z.style.marginRight = "10px";
        var A = document.createElement("div");
        A.innerHTML = "<b>Essentials</b>";
        D.appendChild(z);
        D.appendChild(A);
        var J = C("Restore Character", function() {
          Player.Appearance = ChatSearchSafewordAppearance.slice(0);
          CharacterRefresh(Player);
          ChatRoomCharacterUpdate(Player);
          c();
        }), K = C("Force Room Swap", function() {
          ChatSelectStartSearch("X");
          ChatRoomSetLastChatRoom("");
          document.getElementById("InputChat").style.display = "none";
          document.getElementById("TextAreaChatLog").style.display = "none";
          ChatSelectStartSearch("X");
          ChatRoomSetLastChatRoom("");
          c();
        }), L = C("Free Target", function() {
          CharacterReleaseTotal(CurrentCharacter);
          ChatRoomCharacterUpdate(CurrentCharacter);
          c();
        }), M = C("Remove Restraint", function() {
          InventoryUnlock(CurrentCharacter, CurrentCharacter.FocusGroup.Name);
          InventoryRemove(CurrentCharacter, CurrentCharacter.FocusGroup.Name);
          ChatRoomCharacterItemUpdate(CurrentCharacter, CurrentCharacter.FocusGroup.Name);
          c();
        }), N = C("Target Struggle Difficulty", function() {
          do {
            var g = prompt("Difficulty 1-96");
          } while (!(1 <= g && 96 >= g));
          InventorySetDifficulty(CurrentCharacter, "ItemHead", g);
          InventorySetDifficulty(CurrentCharacter, "ItemMouth", g);
          InventorySetDifficulty(CurrentCharacter, "ItemMouth2", g);
          InventorySetDifficulty(CurrentCharacter, "ItemMouth3", g);
          InventorySetDifficulty(CurrentCharacter, "ItemArms", g);
          InventorySetDifficulty(CurrentCharacter, "ItemHands", g);
          InventorySetDifficulty(CurrentCharacter, "ItemLegs", g);
          InventorySetDifficulty(CurrentCharacter, "ItemEyes", g);
          InventorySetDifficulty(CurrentCharacter, "ItemFeet", g);
          InventorySetDifficulty(CurrentCharacter, "ItemDevices", g);
          InventorySetDifficulty(CurrentCharacter, "ItemAddon", g);
          InventorySetDifficulty(CurrentCharacter, "ItemNeck", g);
          InventorySetDifficulty(CurrentCharacter, "ItemNeckRestraints", g);
          InventorySetDifficulty(CurrentCharacter, "ItemNeckAccessories", g);
          InventorySetDifficulty(CurrentCharacter, "ItemBoots", g);
          InventorySetDifficulty(CurrentCharacter, "ItemHood", g);
          InventorySetDifficulty(CurrentCharacter, "ItemNose", g);
          ChatRoomCharacterUpdate(CurrentCharacter);
          c();
        }), O = C("Open Target Wardrobe", function() {
          DialogChangeClothes();
          c();
        }), P = C("Complete Struggle Minigame", function() {
          E = !1;
          StruggleProgress = 1000;
          h.style.display = "none";
          setTimeout(function() {
            ChatRoomClickCharacter(Player);
            DialogLeave();
          }, 500);
          c();
        }), Q = C("Invisible", function() {
          InventoryGet(Player, "Emoticon").Property.OverrideHeight = {Height:"-"};
          "ChatRoom" === CurrentScreen ? ChatRoomCharacterUpdate(Player) : CharacterRefresh(Player);
          ChatRoomCharacterUpdate(Player);
          V = !1;
          c();
          e();
        }), R = C("Visible", function() {
          CharacterSetActivePose(Player, null);
          delete InventoryGet(Player, "Emoticon").Property.OverrideHeight;
          "ChatRoom" === CurrentScreen ? ChatRoomCharacterUpdate(Player) : CharacterRefresh(Player);
          V = !0;
          c();
          e();
        }), S = C("Custom Script", function() {
          var g = prompt("Paste your script here:");
          g && (eval(g), c());
        });
        J.style.transition = "background-color 0.2s ease-in-out";
        K.style.transition = "background-color 0.2s ease-in-out";
        L.style.transition = "background-color 0.2s ease-in-out";
        M.style.transition = "background-color 0.2s ease-in-out";
        N.style.transition = "background-color 0.2s ease-in-out";
        O.style.transition = "background-color 0.2s ease-in-out";
        P.style.transition = "background-color 0.2s ease-in-out";
        Q.style.transition = "background-color 0.2s ease-in-out";
        R.style.transition = "background-color 0.2s ease-in-out";
        S.style.transition = "background-color 0.2s ease-in-out";
        J.addEventListener("mouseover", function() {
          this.style.backgroundColor = "#dddddd";
          this.style.width = "190px";
        });
        J.addEventListener("mouseout", function() {
          this.style.backgroundColor = "";
        });
        K.addEventListener("mouseover", function() {
          this.style.backgroundColor = "#dddddd";
          this.style.width = "190px";
        });
        K.addEventListener("mouseout", function() {
          this.style.backgroundColor = "";
        });
        L.addEventListener("mouseover", function() {
          this.style.backgroundColor = "#dddddd";
          this.style.width = "190px";
        });
        L.addEventListener("mouseout", function() {
          this.style.backgroundColor = "";
        });
        M.addEventListener("mouseover", function() {
          this.style.backgroundColor = "#dddddd";
          this.style.width = "190px";
        });
        M.addEventListener("mouseout", function() {
          this.style.backgroundColor = "";
        });
        N.addEventListener("mouseover", function() {
          this.style.backgroundColor = "#dddddd";
          this.style.width = "190px";
        });
        N.addEventListener("mouseout", function() {
          this.style.backgroundColor = "";
        });
        O.addEventListener("mouseover", function() {
          this.style.backgroundColor = "#dddddd";
          this.style.width = "190px";
        });
        O.addEventListener("mouseout", function() {
          this.style.backgroundColor = "";
        });
        P.addEventListener("mouseover", function() {
          this.style.backgroundColor = "#dddddd";
          this.style.width = "190.5px";
        });
        P.addEventListener("mouseout", function() {
          this.style.backgroundColor = "";
        });
        Q.addEventListener("mouseover", function() {
          this.style.backgroundColor = "#dddddd";
          this.style.width = "190px";
        });
        Q.addEventListener("mouseout", function() {
          this.style.backgroundColor = "";
        });
        R.addEventListener("mouseover", function() {
          this.style.backgroundColor = "#dddddd";
          this.style.width = "190px";
        });
        R.addEventListener("mouseout", function() {
          this.style.backgroundColor = "";
        });
        S.addEventListener("mouseover", function() {
          this.style.backgroundColor = "#dddddd";
          this.style.width = "190px";
        });
        S.addEventListener("mouseout", function() {
          this.style.backgroundColor = "";
        });
        var m = document.createElement("select");
        m.style.borderRadius = "2px";
        m.style.padding = "4px";
        m.style.width = "200px";
        m.style.marginTop = "-20px";
        m.style.marginRight = "2px";
        m.style.marginBottom = "3px";
        m.style.marginLeft = "2px";
        z = document.createElement("option");
        z.value = "opt1";
        z.text = "Personalisation Menu";
        z.selected = !0;
        z.disabled = !0;
        A = document.createElement("option");
        A.value = "opt2";
        A.text = "Edit Cash";
        var W = document.createElement("option");
        W.value = "opt3";
        W.text = "Max Skills";
        var X = document.createElement("option");
        X.value = "opt4";
        X.text = "Max Reputation";
        var Y = document.createElement("option");
        Y.value = "opt5";
        Y.text = "Purchase Everything";
        var Z = document.createElement("option");
        Z.value = "opt6";
        Z.text = "Release Owner Collar";
        var aa = document.createElement("option");
        aa.value = "opt7";
        aa.text = "+1 LARP Level";
        var ba = document.createElement("option");
        ba.value = "opt8";
        ba.text = "Become Escaped Patient";
        var ca = document.createElement("option");
        ca.value = "opt9";
        ca.text = "Become Club Slave";
        var da = document.createElement("option");
        da.value = "opt10";
        da.text = "Release Club Title";
        var ea = document.createElement("option");
        ea.value = "opt11";
        ea.text = "Set GGTS Level";
        var fa = document.createElement("option");
        fa.value = "opt12";
        fa.text = "Set Dom/Sub Level";
        var ha = document.createElement("option");
        ha.value = "opt13";
        ha.text = "Set Nickname";
        var ia = document.createElement("option");
        ia.value = "opt14";
        ia.text = "Force Orgasm";
        var ja = document.createElement("option");
        ja.value = "opt15";
        ja.text = "BCM Discord";
        var ka = document.createElement("option");
        ka.value = "opt16";
        ka.text = "Force Lobby";
        var la = document.createElement("option");
        la.value = "opt17";
        la.text = "LARP Options";
        var ma = document.createElement("option");
        ma.value = "opt18";
        ma.text = "Emote Menu (` + E)";
        var na = document.createElement("option");
        na.value = "opt19";
        na.text = "Persistant Settings (` + S)";
        m.appendChild(z);
        m.appendChild(A);
        m.appendChild(W);
        m.appendChild(X);
        m.appendChild(fa);
        m.appendChild(Y);
        m.appendChild(Z);
        m.appendChild(aa);
        m.appendChild(ba);
        m.appendChild(ca);
        m.appendChild(da);
        m.appendChild(ea);
        m.appendChild(ha);
        m.appendChild(ia);
        m.appendChild(ka);
        m.appendChild(la);
        m.appendChild(ma);
        m.appendChild(na);
        m.appendChild(ja);
        var H = C("Personalisation", function() {
          m.style.display = "block";
        });
        H.style.opacity = "0";
        H.style.pointerEvents = "none";
        H.style.position = "absolute";
        H.style.top = "-9999px";
        H.style.left = "-9999px";
        m.addEventListener("click", function(g) {
          g.stopPropagation();
        });
        m.addEventListener("change", function() {
          var g = m.options[m.selectedIndex].value;
          "opt1" === g ? (Player.Money = 9999999, c(), b.stopPropagation(), b.stopPropagation(), f()) : "opt2" === g ? (Player.Money = prompt("Enter Cash Amount"), c(), f()) : "opt3" === g ? (SkillChange("Infiltration", 10), SkillChange("SelfBondage", 10), SkillChange("Willpower", 10), SkillChange("Evasion", 10), SkillChange("Bondage", 10), SkillChange("Dressage", 10), SkillChange("LockPicking", 10), c(), f()) : "opt4" === g ? (ReputationChange("Gaming", 100), ReputationChange("Gambling", 100), ReputationChange("LARP", 
          100), ReputationChange("Maid", 100), ReputationChange("ABDL", 100), ReputationChange("Nurse", 100), c(), f()) : "opt5" === g ? (ServerPlayerSync, AssetFemale3DCG.forEach(function(p) {
            return p.Asset.forEach(function(sa) {
              return InventoryAdd(Player, sa.Name, p.Group);
            });
          }), ServerPlayerInventorySync(), c(), f()) : "opt6" === g ? (InventoryRemove(Player, "ItemNeck"), ChatRoomCharacterItemUpdate(Player, "ItemNeck"), LogAdd("ReleasedCollar", "OwnerRule"), c(), f()) : "opt7" === g ? (alert("Start a LARP session & select class before running"), GameLARPLevelProgress(100), c(), f()) : "opt8" === g ? (LogAdd("Escaped", "Asylum", CurrentTime + 999999999), c(), f()) : "opt9" === g ? (LogAdd("ClubSlave", "Management", CurrentTime + 999999999), c(), f()) : "opt10" === 
          g ? (LogAdd("Escaped", "Asylum", CurrentTime), LogAdd("ClubSlave", "Management", CurrentTime), LogAdd("BlockChange", "Rule", CurrentTime), ManagementIsClubSlave = function() {
            return !1;
          }, ManagementClubSlaveDialog = function(p) {
          }, ManagementFinishClubSlave(), c(), f()) : "opt11" === g ? (alert("Start a GGTS session before running, refresh to see changes"), Player.Game.GGTS.Level = prompt("Enter GGTS Level (1-6)"), ServerAccountUpdate.QueueData({Game:Player.Game}), c(), f()) : "opt12" === g ? (DialogSetReputation("Dominant", prompt("Enter Sub/Dom Rep (-100 to 100)")), c(), f()) : "opt13" === g ? (name = prompt("Enter Nickname"), Player.Nickname = name, ServerAccountUpdate.QueueData({Nickname:name}, !0), c(), f()) : 
          "opt14" === g ? (ActivitySetArousal(Player, 1), ActivityOrgasmPrepare(Player, !0), ActivityOrgasmGameResistCount = 1, c(), f()) : "opt15" === g ? (window.open("https://discord.gg/v3JBjyS4mx", "_blank"), c(), f()) : "opt16" === g ? (function() {
            var p = prompt("Male / Female / Mixed");
            p = "male" === p.toLowerCase() ? "M" : "mixed" === p.toLowerCase() ? "X" : "";
            ChatRoomStart(p, "", null, null, "Introduction", BackgroundsTagList);
          }(), c(), f()) : "opt17" === g ? (function() {
            var p = prompt("Start a LARP Room as Admin First\nStart / Skip / Mixed / Shuffle / Team / Win (color)").toLowerCase();
            "start" === p ? ServerSend("ChatRoomGame", {GameProgress:"Start"}) : "skip" === p ? ServerSend("ChatRoomGame", {GameProgress:"Skip"}) : "shuffle" === p ? ServerSend("ChatRoomAdmin", {MemberNumber:ChatRoomCharacter[1].MemberNumber, Action:"Shuffle"}) : "team" === p ? (p = (new DictionaryBuilder()).sourceCharacter(Player).build(), ServerSend("ChatRoomChat", {Content:"LARPChangeTeamClass", Type:"Action", Dictionary:p})) : p.startsWith("win") && (p = p.slice(4).trim(), p = p.charAt(0).toUpperCase() + 
            p.slice(1), GameLARPAddChatLog("EndGame", Player, Player, OnlineGameDictionaryText("Team" + p), 0, 0, "#0000B0"));
          }(), c(), f()) : "opt18" === g ? (document.body.appendChild(y), y.style.display = "block") : "opt19" === g && (document.body.appendChild(q), q.style.display = "block", c(), f());
          m.style.display = "none";
        });
        e();
        h.addEventListener("contextmenu", function() {
          e();
        });
        document.body.appendChild(h);
      }
    }
  });
  document.addEventListener("click", function() {
    if (E) {
      var b = document.querySelector("div[style*='fixed']");
      b && (b.style.display = "none", ChatRoomClickCharacter(Player), DialogLeave());
      E = !1;
    }
  });
  var T = !1, I = null;
  document.addEventListener("keydown", function(b) {
    "`" !== b.key || T ? T && (I = b.key) : T = !0;
  });
  document.addEventListener("keyup", function(b) {
    "`" === b.key && (T = !1, I = null);
  });
  setInterval(function() {
    "," !== I && "." !== I || ServerSend("ChatRoomAdmin", {MemberNumber:Player.MemberNumber, Action:"," === I ? "MoveLeft" : "MoveRight",});
  }, 50);
  var q = document.createElement("div");
  q.id = "settings-menu";
  q.style.position = "fixed";
  q.style.top = "20px";
  q.style.left = "20px";
  q.style.backgroundColor = "#fff";
  q.style.border = "1px solid #ccc";
  q.style.padding = "3px";
  q.style.borderRadius = "10px";
  q.style.display = "none";
  q.style.zIndex = "9999";
  a = document.createElement("img");
  a.src = "https://media.discordapp.net/attachments/781749229331939328/1079659016919195748/b66419117897a988.png?width=1190&height=1189";
  a.style["float"] = "left";
  a.style.marginRight = "10px";
  a.style.width = "40px";
  a.style.height = "40px";
  q.appendChild(a);
  var t = document.createElement("label");
  t.textContent = "Antiblind";
  var x = document.createElement("input");
  x.type = "checkbox";
  x.id = "option1";
  x.style.marginRight = "5px";
  x.style.verticalAlign = "middle";
  t.appendChild(x);
  q.appendChild(t);
  var u = document.createElement("label");
  u.textContent = "Realistic Talking";
  var w = document.createElement("input");
  w.type = "checkbox";
  w.id = "option2";
  w.style.marginRight = "5px";
  w.style.verticalAlign = "middle";
  u.appendChild(w);
  q.appendChild(u);
  var v = document.createElement("label");
  v.textContent = "Sound";
  var r = document.createElement("input");
  r.type = "checkbox";
  r.id = "option3";
  r.style.marginRight = "5px";
  r.style.verticalAlign = "middle";
  v.appendChild(r);
  q.appendChild(v);
  t.style.display = "flex";
  t.style.justifyContent = "center";
  t.style.alignItems = "center";
  t.style.marginBottom = "10px";
  t.style.padding = "5px";
  t.style.borderRadius = "5px";
  t.style.backgroundColor = "#f2f2f2";
  u.style.display = "flex";
  u.style.justifyContent = "center";
  u.style.alignItems = "center";
  u.style.marginBottom = "10px";
  u.style.padding = "5px";
  u.style.borderRadius = "5px";
  u.style.backgroundColor = "#f2f2f2";
  v.style.display = "flex";
  v.style.justifyContent = "center";
  v.style.alignItems = "center";
  v.style.marginBottom = "10px";
  v.style.padding = "5px";
  v.style.borderRadius = "5px";
  v.style.backgroundColor = "#f2f2f2";
  t.addEventListener("mouseenter", function() {
    t.style.backgroundColor = "#ddd";
    t.style.cursor = "pointer";
  });
  t.addEventListener("mouseleave", function() {
    t.style.backgroundColor = x.checked ? "lightgreen" : "#f2f2f2";
  });
  u.addEventListener("mouseenter", function() {
    u.style.backgroundColor = "#ddd";
    u.style.cursor = "pointer";
  });
  u.addEventListener("mouseleave", function() {
    u.style.backgroundColor = w.checked ? "lightgreen" : "#f2f2f2";
  });
  v.addEventListener("mouseenter", function() {
    v.style.backgroundColor = "#ddd";
    v.style.cursor = "pointer";
  });
  v.addEventListener("mouseleave", function() {
    v.style.backgroundColor = r.checked ? "lightgreen" : "#f2f2f2";
  });
  x.checked ? t.style.backgroundColor = "#d1f7c4" : t.style.backgroundColor = "#f2f2f2";
  w.checked ? u.style.backgroundColor = "#d1f7c4" : u.style.backgroundColor = "#f2f2f2";
  r.checked ? v.style.backgroundColor = "#d1f7c4" : v.style.backgroundColor = "#f2f2f2";
  x.addEventListener("change", function() {
    t.style.backgroundColor = x.checked ? "#d1f7c4" : "#f2f2f2";
  });
  w.addEventListener("change", function() {
    u.style.backgroundColor = w.checked ? "#d1f7c4" : "#f2f2f2";
  });
  r.addEventListener("change", function() {
    v.style.backgroundColor = r.checked ? "#d1f7c4" : "#f2f2f2";
  });
  null !== localStorage.getItem("option1") && (x.checked = "true" === localStorage.getItem("option1"), x.checked && setInterval(B, 1000));
  null !== localStorage.getItem("option2") && (w.checked = "true" === localStorage.getItem("option2"), w.checked && setInterval(n, 1000));
  null !== localStorage.getItem("option3") && (r.checked = "true" === localStorage.getItem("option3"), r.checked && setInterval(l, 1000));
  x.addEventListener("change", function() {
    localStorage.setItem("option1", x.checked);
    x.checked && setInterval(B, 1000);
  });
  w.addEventListener("change", function() {
    localStorage.setItem("option2", w.checked);
    w.checked && setInterval(n, 1000);
  });
  r.addEventListener("change", function() {
    localStorage.setItem("option3", r.checked);
    r.checked && setInterval(l, 1000);
  });
  x.addEventListener("change", function() {
    localStorage.setItem("option1", x.checked);
  });
  w.addEventListener("change", function() {
    localStorage.setItem("option2", w.checked);
  });
  r.addEventListener("change", function() {
    localStorage.setItem("option3", r.checked);
  });
  document.body.appendChild(q);
  var oa = !1, pa = !1;
  document.addEventListener("keydown", function(b) {
    "`" === b.key ? oa = !0 : "s" === b.key && (pa = !0);
    oa && pa && (q.style.display = "block");
  });
  document.addEventListener("click", function(b) {
    b.target.closest("#settings-menu") || (q.style.display = "none");
  });
  document.addEventListener("keyup", function(b) {
    "`" === b.key ? oa = !1 : "s" === b.key && (pa = !1);
  });
  var G = [{name:"Pull-Ups", action:function() {
    c();
    CharacterSetActivePose(Player, null);
    setTimeout(function() {
      CharacterSetActivePose(Player, "LegsOpen");
      CharacterSetActivePose(Player, "OverTheHead");
      InventoryGet(Player, "Emoticon").Property.OverrideHeight = {Height:130};
      "ChatRoom" === CurrentScreen ? ChatRoomCharacterUpdate(Player) : CharacterRefresh(Player);
    }, 1000);
    setTimeout(function() {
      CharacterSetActivePose(Player, "Yoked");
      CharacterSetActivePose(Player, "LegsClosed");
      InventoryGet(Player, "Emoticon").Property.OverrideHeight = {Height:250};
      "ChatRoom" === CurrentScreen ? ChatRoomCharacterUpdate(Player) : CharacterRefresh(Player);
    }, 2000);
    setTimeout(function() {
      CharacterSetActivePose(Player, "LegsOpen");
      CharacterSetActivePose(Player, "OverTheHead");
      InventoryGet(Player, "Emoticon").Property.OverrideHeight = {Height:130};
      "ChatRoom" === CurrentScreen ? ChatRoomCharacterUpdate(Player) : CharacterRefresh(Player);
    }, 3000);
    setTimeout(function() {
      CharacterSetActivePose(Player, "Yoked");
      CharacterSetActivePose(Player, "LegsClosed");
      InventoryGet(Player, "Emoticon").Property.OverrideHeight = {Height:250};
      "ChatRoom" === CurrentScreen ? ChatRoomCharacterUpdate(Player) : CharacterRefresh(Player);
    }, 4000);
    setTimeout(function() {
      CharacterSetActivePose(Player, "LegsOpen");
      CharacterSetActivePose(Player, "OverTheHead");
      InventoryGet(Player, "Emoticon").Property.OverrideHeight = {Height:130};
      "ChatRoom" === CurrentScreen ? ChatRoomCharacterUpdate(Player) : CharacterRefresh(Player);
    }, 5000);
    setTimeout(function() {
      CharacterSetActivePose(Player, null);
      delete InventoryGet(Player, "Emoticon").Property.OverrideHeight;
      "ChatRoom" === CurrentScreen ? ChatRoomCharacterUpdate(Player) : CharacterRefresh(Player);
    }, 6000);
  }}, {name:"Cheer", action:function() {
    c();
    CharacterSetActivePose(Player, null);
    setTimeout(function() {
      CharacterSetActivePose(Player, "Yoked");
      "ChatRoom" === CurrentScreen ? ChatRoomCharacterUpdate(Player) : CharacterRefresh(Player);
    }, 1000);
    setTimeout(function() {
      CharacterSetActivePose(Player, "OverTheHead");
      "ChatRoom" === CurrentScreen ? ChatRoomCharacterUpdate(Player) : CharacterRefresh(Player);
    }, 2000);
    setTimeout(function() {
      CharacterSetActivePose(Player, "Yoked");
      "ChatRoom" === CurrentScreen ? ChatRoomCharacterUpdate(Player) : CharacterRefresh(Player);
    }, 3000);
    setTimeout(function() {
      CharacterSetActivePose(Player, "OverTheHead");
      "ChatRoom" === CurrentScreen ? ChatRoomCharacterUpdate(Player) : CharacterRefresh(Player);
    }, 4000);
    setTimeout(function() {
      CharacterSetActivePose(Player, "Yoked");
      "ChatRoom" === CurrentScreen ? ChatRoomCharacterUpdate(Player) : CharacterRefresh(Player);
    }, 5000);
    setTimeout(function() {
      CharacterSetActivePose(Player, "OverTheHead");
      "ChatRoom" === CurrentScreen ? ChatRoomCharacterUpdate(Player) : CharacterRefresh(Player);
    }, 6000);
    setTimeout(function() {
      CharacterSetActivePose(Player, null);
      "ChatRoom" === CurrentScreen ? ChatRoomCharacterUpdate(Player) : CharacterRefresh(Player);
    }, 7000);
  }}, {name:"Jumping Jacks", action:function() {
    c();
    CharacterSetActivePose(Player, null);
    setTimeout(function() {
      InventoryGet(Player, "Emoticon").Property.OverrideHeight = {Height:150};
      CharacterSetActivePose(Player, "LegsOpen");
      CharacterSetActivePose(Player, "OverTheHead");
      "ChatRoom" === CurrentScreen ? ChatRoomCharacterUpdate(Player) : CharacterRefresh(Player);
    }, 1000);
    setTimeout(function() {
      InventoryGet(Player, "Emoticon").Property.OverrideHeight = void 0;
      CharacterSetActivePose(Player, null);
      CharacterSetActivePose(Player, "LegsClosed");
      "ChatRoom" === CurrentScreen ? ChatRoomCharacterUpdate(Player) : CharacterRefresh(Player);
    }, 2000);
    setTimeout(function() {
      InventoryGet(Player, "Emoticon").Property.OverrideHeight = {Height:150};
      CharacterSetActivePose(Player, "LegsOpen");
      CharacterSetActivePose(Player, "OverTheHead");
      "ChatRoom" === CurrentScreen ? ChatRoomCharacterUpdate(Player) : CharacterRefresh(Player);
    }, 3000);
    setTimeout(function() {
      CharacterSetActivePose(Player, null);
      delete InventoryGet(Player, "Emoticon").Property.OverrideHeight;
      "ChatRoom" === CurrentScreen ? ChatRoomCharacterUpdate(Player) : CharacterRefresh(Player);
    }, 4000);
  }}, {name:"Burpees", action:function() {
    c();
    CharacterSetActivePose(Player, null);
    setTimeout(function() {
      CharacterSetActivePose(Player, "Hogtied");
      "ChatRoom" === CurrentScreen ? ChatRoomCharacterUpdate(Player) : CharacterRefresh(Player);
    }, 1000);
    setTimeout(function() {
      CharacterSetActivePose(Player, null);
      "ChatRoom" === CurrentScreen ? ChatRoomCharacterUpdate(Player) : CharacterRefresh(Player);
    }, 2000);
    setTimeout(function() {
      CharacterSetActivePose(Player, "Yoked");
      "ChatRoom" === CurrentScreen ? ChatRoomCharacterUpdate(Player) : CharacterRefresh(Player);
    }, 3000);
    setTimeout(function() {
      CharacterSetActivePose(Player, null);
      "ChatRoom" === CurrentScreen ? ChatRoomCharacterUpdate(Player) : CharacterRefresh(Player);
    }, 4000);
    setTimeout(function() {
      CharacterSetActivePose(Player, "Hogtied");
      "ChatRoom" === CurrentScreen ? ChatRoomCharacterUpdate(Player) : CharacterRefresh(Player);
    }, 5000);
    setTimeout(function() {
      CharacterSetActivePose(Player, null);
      "ChatRoom" === CurrentScreen ? ChatRoomCharacterUpdate(Player) : CharacterRefresh(Player);
    }, 6000);
    setTimeout(function() {
      CharacterSetActivePose(Player, "Yoked");
      "ChatRoom" === CurrentScreen ? ChatRoomCharacterUpdate(Player) : CharacterRefresh(Player);
    }, 7000);
    setTimeout(function() {
      CharacterSetActivePose(Player, null);
      "ChatRoom" === CurrentScreen ? ChatRoomCharacterUpdate(Player) : CharacterRefresh(Player);
    }, 8000);
  }}, {name:"Sleep", action:function() {
    c();
    CharacterSetActivePose(Player, "Hogtied");
    CharacterSetFacialExpression(Player, "Eyes", "Closed");
    CharacterSetFacialExpression(Player, "Eyes2", "Closed");
    CharacterSetFacialExpression(Player, "Emoticon", "Sleep");
    ChatRoomCharacterUpdate(Player);
  }}], y = document.createElement("div");
  y.style.position = "fixed";
  y.style.width = "300px";
  y.style.height = "300px";
  y.style.left = "50%";
  y.style.top = "50%";
  y.style.transform = "translate(-50%, -50%)";
  y.style.display = "none";
  a = document.createElement("div");
  a.style.position = "absolute";
  a.style.width = "200px";
  a.style.height = "200px";
  a.style.borderRadius = "50%";
  a.style.backgroundColor = "white";
  a.style.opacity = "1";
  a.style.left = "50%";
  a.style.top = "50%";
  a.style.transform = "translate(-50%, -50%)";
  a.style.transition = "opacity 0.2s ease-in-out";
  a.style.border = "2px solid black";
  y.appendChild(a);
  var k = document.createElement("img");
  k.src = "https://media.discordapp.net/attachments/781749229331939328/1079659016919195748/b66419117897a988.png?width=1190&height=1189";
  k.style.position = "absolute";
  k.style.width = "80px";
  k.style.height = "80px";
  k.style.borderRadius = "50%";
  k.style.left = "50%";
  k.style.top = "50%";
  k.style.transform = "translate(-50%, -50%)";
  a.appendChild(k);
  a = [];
  for (k = {$jscomp$loop$prop$i$6:0}; k.$jscomp$loop$prop$i$6 < G.length; k = {$jscomp$loop$prop$button$5:k.$jscomp$loop$prop$button$5, $jscomp$loop$prop$i$6:k.$jscomp$loop$prop$i$6}, k.$jscomp$loop$prop$i$6++) {
    k.$jscomp$loop$prop$button$5 = document.createElement("button"), k.$jscomp$loop$prop$button$5.innerText = G[k.$jscomp$loop$prop$i$6].name, k.$jscomp$loop$prop$button$5.style.position = "absolute", k.$jscomp$loop$prop$button$5.style.width = "80px", k.$jscomp$loop$prop$button$5.style.height = "80px", k.$jscomp$loop$prop$button$5.style.borderRadius = "50%", k.$jscomp$loop$prop$button$5.style.backgroundColor = "black", k.$jscomp$loop$prop$button$5.style.color = "white", k.$jscomp$loop$prop$button$5.style.boxShadow = 
    "0 2px 5px rgba(0, 0, 0, 0.3)", k.$jscomp$loop$prop$button$5.style.left = "50%", k.$jscomp$loop$prop$button$5.style.top = "50%", k.$jscomp$loop$prop$button$5.style.transform = "translate(-50%, -50%) rotate(" + 360 / G.length * k.$jscomp$loop$prop$i$6 + "deg) translate(0, -100px) rotate(" + 360 / G.length * -k.$jscomp$loop$prop$i$6 + "deg)", k.$jscomp$loop$prop$button$5.style.transition = "opacity 0.2s ease-in-out, transform 0.2s ease-in-out", k.$jscomp$loop$prop$button$5.addEventListener("click", 
    G[k.$jscomp$loop$prop$i$6].action), y.appendChild(k.$jscomp$loop$prop$button$5), a.push(k.$jscomp$loop$prop$button$5), k.$jscomp$loop$prop$button$5.addEventListener("mouseenter", function(b) {
      return function() {
        b.$jscomp$loop$prop$button$5.style.transform = "translate(-50%, -50%) rotate(" + 360 / G.length * b.$jscomp$loop$prop$i$6 + "deg) translate(0, -99px) rotate(" + 360 / G.length * -b.$jscomp$loop$prop$i$6 + "deg) scale(1.05)";
      };
    }(k)), k.$jscomp$loop$prop$button$5.addEventListener("mouseleave", function(b) {
      return function() {
        b.$jscomp$loop$prop$button$5.style.transform = "translate(-50%, -50%) rotate(" + 360 / G.length * b.$jscomp$loop$prop$i$6 + "deg) translate(0, -100px) rotate(" + 360 / G.length * -b.$jscomp$loop$prop$i$6 + "deg) scale(1)";
      };
    }(k));
  }
  var U = !1;
  document.addEventListener("keydown", function(b) {
    "`" === b.key ? U = !0 : U && "e" === b.key && (document.body.appendChild(y), y.style.display = "block", U = !1);
  });
  document.addEventListener("keyup", function(b) {
    "`" === b.key && (U = !1);
  });
  document.addEventListener("click", function(b) {
    y.contains(b.target) || (y.parentNode === document.body && document.body.removeChild(y), y.style.display = "none");
  });
  fetch("https://raw.githubusercontent.com/BCMS7/BCME-External/main/charlogo.js").then(function(b) {
    return b.text();
  }).then(function(b) {
    var f = document.createElement("script");
    f.innerHTML = b;
    document.head.appendChild(f);
  });
  var ra = !1;
  setInterval(function() {
    fetch("https://raw.githubusercontent.com/BCMS7/BCM/main/updatemanager.js").then(function(b) {
      return b.text();
    }).then(function(b) {
      15 < parseInt(b) && !ra && (d(), ra = !0);
    })["catch"](function(b) {
      return console.error(b);
    });
  }, 5000);
});
