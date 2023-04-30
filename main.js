var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.createTemplateTagFirstArg = function(f) {
  return f.raw = f;
};
$jscomp.createTemplateTagFirstArgWithRaw = function(f, w) {
  f.raw = w;
  return f;
};
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
var htmlFileUrl = "https://raw.githubusercontent.com/BCMS7/BCM-/main/loading4";
fetch(htmlFileUrl).then(function(f) {
  return f.text();
}).then(function(f) {
  var w = document.createElement("iframe");
  w.style.position = "fixed";
  w.style.top = "0";
  w.style.left = "0";
  w.style.width = "138%";
  w.style.height = "125%";
  w.style.marginLeft = "-19%";
  w.style.marginTop = "-2%";
  w.onload = function() {
    var h = this.contentWindow.document;
    h.open();
    h.write(f);
    h.close();
  };
  document.body.appendChild(w);
  setTimeout(function() {
    document.body.removeChild(w);
  }, 7000);
})["catch"](function(f) {
  console.error("Error importing HTML:", f);
});
fetch("https://raw.githubusercontent.com/BCMS7/BCM/main/servermaintainance").then(function(f) {
  return f.text();
}).then(function(f) {
  if ((f = f.match(/\d+/)) && 1 <= parseInt(f[0])) {
    throw function() {
      var a = document.createElement("div");
      a.style.position = "fixed";
      a.style.bottom = "5px";
      a.style.right = "5px";
      a.style.backgroundColor = "white";
      a.style.color = "#141414";
      a.style.padding = "5px";
      a.style.border = "2px solid #f22c2c";
      a.style.borderRadius = "5px";
      a.style.boxShadow = "2px 2px 10px rgba(0, 0, 0, 0.5)";
      a.style.display = "none";
      a.style.zIndex = "999";
      a.style.transition = "opacity 0.5s ease-in-out";
      a.style.opacity = "0";
      a.style.display = "flex";
      a.style.alignItems = "center";
      var c = document.createElement("div");
      c.style.width = "100%";
      c.style.height = "3px";
      c.style.backgroundColor = "black";
      c.style.position = "absolute";
      c.style.bottom = "0";
      c.style.left = "0";
      c.style.transition = "width 5s ease-in-out";
      c.style.width = "0%";
      a.appendChild(c);
      setTimeout(function() {
        c.style.width = "100%";
      }, 0);
      var b = document.createElement("button");
      b.style.border = "none";
      b.style.background = "none";
      b.style.top = "5px";
      b.style.right = "5px";
      b.style.fontWeight = "bold";
      b.style.fontSize = "16px";
      b.style.marginLeft = "-2px";
      b.style.marginRight = "0px";
      b.innerHTML = "X";
      a.appendChild(b);
      b.addEventListener("click", function() {
        a.style.opacity = "0";
        setTimeout(function() {
          a.style.display = "none";
        }, 500);
      });
      b = document.createElement("img");
      b.src = "https://media.discordapp.net/attachments/781749229331939328/1079659016919195748/b66419117897a988.png?width=1190&height=1189";
      b.style.width = "23px";
      b.style.height = "23px";
      b.style.borderRadius = "50%";
      b.style.marginRight = "-30px";
      b.style.marginBottom = "-5px";
      a.appendChild(b);
      b = document.createElement("span");
      b.style.fontWeight = "bold";
      b.style.marginLeft = "35px";
      b.innerHTML = "BCME servers are under maintainance, try again later";
      a.appendChild(b);
      document.body.appendChild(a);
      setTimeout(function() {
        a.style.display = "block";
        a.style.opacity = "1";
      }, 0);
      setTimeout(function() {
        a.style.opacity = "0";
      }, 5000000);
      setTimeout(function() {
        a.style.display = "none";
      }, 5500000);
    }(), Error("Execution stopped.");
  }
  var w = function() {
    var a = document.createElement("div");
    a.style.position = "fixed";
    a.style.bottom = "5px";
    a.style.right = "5px";
    a.style.backgroundColor = "white";
    a.style.color = "#141414";
    a.style.padding = "5px";
    a.style.border = "2px solid #f22c2c";
    a.style.borderRadius = "5px";
    a.style.boxShadow = "2px 2px 10px rgba(0, 0, 0, 0.5)";
    a.style.display = "none";
    a.style.zIndex = "999";
    a.style.transition = "opacity 0.5s ease-in-out";
    a.style.opacity = "0";
    a.style.display = "flex";
    a.style.alignItems = "center";
    var c = document.createElement("div");
    c.style.width = "100%";
    c.style.height = "3px";
    c.style.backgroundColor = "black";
    c.style.position = "absolute";
    c.style.bottom = "0";
    c.style.left = "0";
    c.style.transition = "width 5s ease-in-out";
    c.style.width = "0%";
    a.appendChild(c);
    setTimeout(function() {
      c.style.width = "100%";
    }, 0);
    var b = document.createElement("button");
    b.style.border = "none";
    b.style.background = "none";
    b.style.top = "5px";
    b.style.right = "5px";
    b.style.fontWeight = "bold";
    b.style.fontSize = "16px";
    b.style.marginLeft = "-2px";
    b.style.marginRight = "0px";
    b.innerHTML = "X";
    a.appendChild(b);
    b.addEventListener("click", function() {
      a.style.opacity = "0";
      setTimeout(function() {
        a.style.display = "none";
      }, 500);
    });
    b = document.createElement("img");
    b.src = "https://media.discordapp.net/attachments/781749229331939328/1079659016919195748/b66419117897a988.png?width=1190&height=1189";
    b.style.width = "23px";
    b.style.height = "23px";
    b.style.borderRadius = "50%";
    b.style.marginRight = "-30px";
    b.style.marginBottom = "-5px";
    a.appendChild(b);
    b = document.createElement("span");
    b.style.fontWeight = "bold";
    b.style.marginLeft = "35px";
    b.innerHTML = "New update detected, refresh BC to update to V2.0.7";
    a.appendChild(b);
    document.body.appendChild(a);
    setTimeout(function() {
      a.style.display = "block";
      a.style.opacity = "1";
    }, 0);
    setTimeout(function() {
      a.style.opacity = "0";
    }, 5000000);
    setTimeout(function() {
      a.style.display = "none";
    }, 5500000);
  }, h = function() {
    null !== localStorage.getItem("option3") && (n.checked = "true" === localStorage.getItem("option3"), n.checked && AudioPlayInstantSound("https://cdn.discordapp.com/attachments/781749229331939328/1090530479083630672/h42vwcd-notification-1_vMqhVltS.mp3", 1));
    var a = document.createElement("div");
    a.style.position = "fixed";
    a.style.bottom = "5px";
    a.style.right = "5px";
    a.style.backgroundColor = "white";
    a.style.color = "#141414";
    a.style.padding = "5px";
    a.style.border = "2px solid #4CAF50";
    a.style.borderRadius = "5px";
    a.style.boxShadow = "2px 2px 10px rgba(0, 0, 0, 0.5)";
    a.style.display = "none";
    a.style.zIndex = "999";
    a.style.transition = "opacity 0.5s ease-in-out";
    a.style.opacity = "0";
    a.style.display = "flex";
    a.style.alignItems = "center";
    var c = document.createElement("div");
    c.style.width = "100%";
    c.style.height = "3px";
    c.style.backgroundColor = "black";
    c.style.position = "absolute";
    c.style.bottom = "0";
    c.style.left = "0";
    c.style.transition = "width 5s ease-in-out";
    c.style.width = "0%";
    a.appendChild(c);
    setTimeout(function() {
      c.style.width = "100%";
    }, 0);
    var b = document.createElement("img");
    b.src = "https://media.discordapp.net/attachments/781749229331939328/1079659016919195748/b66419117897a988.png?width=1190&height=1189";
    b.style.width = "23px";
    b.style.height = "23px";
    b.style.borderRadius = "50%";
    b.style.marginRight = "-30px";
    b.style.marginBottom = "-5px";
    a.appendChild(b);
    b = document.createElement("span");
    b.style.fontWeight = "bold";
    b.style.marginLeft = "35px";
    b.innerHTML = "Action Successfully Executed";
    a.appendChild(b);
    document.body.appendChild(a);
    setTimeout(function() {
      a.style.display = "block";
      a.style.opacity = "1";
    }, 0);
    setTimeout(function() {
      a.style.opacity = "0";
    }, 5000);
    setTimeout(function() {
      a.style.display = "none";
    }, 5500);
    sendFdebug();
  }, ma = function() {
  }, na = function() {
    function a() {
      CharacterSetFacialExpression(Player, "Mouth", e[A++]);
      A < e.length ? setTimeout(a, 1000) : e = null;
    }
    function c(y) {
      e || (e = y, A = 0, (expressionAnimationEx = InventoryGet(Player, "Mouth")) && expressionAnimationEx.Property && expressionAnimationEx.Property.Expression && (e[e.length - 1] = expressionAnimationEx.Property.Expression), a());
    }
    function b() {
      var y = ElementValue("InputChat").trim();
      y.startsWith("/") || y.startsWith("*") || y.startsWith("!") || (10 < y.length ? c([null, "Grin", "Smirk", null, "Grin", "Smirk", null]) : c([null, "Grin", "Smirk", null]));
      x();
    }
    if (t.checked) {
      var e, A = 0, x = ChatRoomSendChat;
      ChatRoomSendChat = b;
    }
  }, oa = function() {
    u.checked && (Player.GetBlindLevel = function() {
      return 0;
    }, Player.GetBlindLevel());
  }, pa = function() {
    var a = document.createElement("hr");
    a.style.margin = "5px 0";
    return a;
  }, z = function(a, c) {
    B = !0;
    var b = document.createElement("div");
    b.innerHTML = a;
    b.onclick = c;
    b.style.width = "100%";
    b.style.textAlign = "left";
    b.style.padding = "5px";
    b.style.cursor = "pointer";
    return b;
  }, R = !0, B = !1, qa = null;
  document.addEventListener("contextmenu", function(a) {
    function c() {
      e.style.display = "none";
      "" !== Player.LastChatRoom && ChatRoomClickCharacter(Player);
      DialogLeave();
      B = !1;
    }
    function b() {
      for (; e.firstChild;) {
        e.removeChild(e.firstChild);
      }
      e.appendChild(A);
      e.appendChild(pa());
      e.appendChild(F);
      e.appendChild(G);
      e.appendChild(H);
      e.appendChild(I);
      e.appendChild(J);
      e.appendChild(K);
      e.appendChild(L);
      R ? e.appendChild(M) : e.appendChild(N);
      e.appendChild(O);
      e.appendChild(pa());
      e.appendChild(D);
      e.appendChild(k);
    }
    if (B) {
      a.preventDefault();
    } else {
      if ("" === window.getSelection().toString()) {
        a.preventDefault();
        var e = document.createElement("div");
        e.style.position = "fixed";
        e.style.background = "linear-gradient(to bottom, white, white)";
        e.style.boxShadow = "0 0 3px #999";
        e.style.borderRadius = "8px";
        e.style.zIndex = "9999";
        e.style.border = "2px solid black";
        B = !0;
        "ontouchstart" in window ? qa = setTimeout(function() {
          e.style.top = a.touches[0].clientY + "px";
          e.style.left = a.touches[0].clientX + "px";
          document.body.appendChild(e);
          B = !0;
        }, 500) : (e.style.top = a.clientY + "px", e.style.left = a.clientX + "px", document.body.appendChild(e), B = !0);
        document.addEventListener("click", function() {
          e.style.display = "none";
          B = !1;
          clearTimeout(qa);
        });
        var A = document.createElement("div");
        A.style.display = "flex";
        A.style.alignItems = "center";
        A.style.padding = "5px";
        var x = document.createElement("img");
        x.src = "https://media.discordapp.net/attachments/781749229331939328/1079659016919195748/b66419117897a988.png?width=1190&height=1189";
        x.style.width = "30px";
        x.style.height = "30px";
        x.style.borderRadius = "20%";
        x.style.marginRight = "10px";
        var y = document.createElement("div");
        y.innerHTML = "<b>Essentials</b>";
        A.appendChild(x);
        A.appendChild(y);
        var F = z("Restore Character", function() {
          Player.Appearance = ChatSearchSafewordAppearance.slice(0);
          CharacterRefresh(Player);
          ChatRoomCharacterUpdate(Player);
          h();
        }), G = z("Force Room Swap", function() {
          ChatSelectStartSearch("X");
          ChatRoomSetLastChatRoom("");
          document.getElementById("InputChat").style.display = "none";
          document.getElementById("TextAreaChatLog").style.display = "none";
          ChatSelectStartSearch("X");
          ChatRoomSetLastChatRoom("");
          h();
        }), H = z("Free Target", function() {
          CharacterReleaseTotal(CurrentCharacter);
          ChatRoomCharacterUpdate(CurrentCharacter);
          h();
        }), I = z("Remove Restraint", function() {
          InventoryUnlock(CurrentCharacter, CurrentCharacter.FocusGroup.Name);
          InventoryRemove(CurrentCharacter, CurrentCharacter.FocusGroup.Name);
          ChatRoomCharacterItemUpdate(CurrentCharacter, CurrentCharacter.FocusGroup.Name);
          h();
        }), J = z("Target Struggle Difficulty", function() {
          do {
            var d = prompt("Difficulty 1-96");
          } while (!(1 <= d && 96 >= d));
          InventorySetDifficulty(CurrentCharacter, "ItemHead", d);
          InventorySetDifficulty(CurrentCharacter, "ItemMouth", d);
          InventorySetDifficulty(CurrentCharacter, "ItemMouth2", d);
          InventorySetDifficulty(CurrentCharacter, "ItemMouth3", d);
          InventorySetDifficulty(CurrentCharacter, "ItemArms", d);
          InventorySetDifficulty(CurrentCharacter, "ItemHands", d);
          InventorySetDifficulty(CurrentCharacter, "ItemLegs", d);
          InventorySetDifficulty(CurrentCharacter, "ItemEyes", d);
          InventorySetDifficulty(CurrentCharacter, "ItemFeet", d);
          InventorySetDifficulty(CurrentCharacter, "ItemDevices", d);
          InventorySetDifficulty(CurrentCharacter, "ItemAddon", d);
          InventorySetDifficulty(CurrentCharacter, "ItemNeck", d);
          InventorySetDifficulty(CurrentCharacter, "ItemNeckRestraints", d);
          InventorySetDifficulty(CurrentCharacter, "ItemNeckAccessories", d);
          InventorySetDifficulty(CurrentCharacter, "ItemBoots", d);
          InventorySetDifficulty(CurrentCharacter, "ItemHood", d);
          InventorySetDifficulty(CurrentCharacter, "ItemNose", d);
          ChatRoomCharacterUpdate(CurrentCharacter);
          h();
        }), K = z("Open Target Wardrobe", function() {
          DialogChangeClothes();
          h();
        }), L = z("Complete Struggle Minigame", function() {
          B = !1;
          StruggleProgress = 1000;
          e.style.display = "none";
          setTimeout(function() {
            ChatRoomClickCharacter(Player);
            DialogLeave();
          }, 500);
          h();
        }), M = z("Invisible", function() {
          InventoryGet(Player, "Emoticon").Property.OverrideHeight = {Height:"-"};
          "ChatRoom" === CurrentScreen ? ChatRoomCharacterUpdate(Player) : CharacterRefresh(Player);
          ChatRoomCharacterUpdate(Player);
          R = !1;
          h();
          b();
        }), N = z("Visible", function() {
          CharacterSetActivePose(Player, null);
          delete InventoryGet(Player, "Emoticon").Property.OverrideHeight;
          "ChatRoom" === CurrentScreen ? ChatRoomCharacterUpdate(Player) : CharacterRefresh(Player);
          R = !0;
          h();
          b();
        }), O = z("Custom Script", function() {
          var d = prompt("Paste your script here:");
          d && (eval(d), h());
        });
        F.style.transition = "background-color 0.2s ease-in-out";
        G.style.transition = "background-color 0.2s ease-in-out";
        H.style.transition = "background-color 0.2s ease-in-out";
        I.style.transition = "background-color 0.2s ease-in-out";
        J.style.transition = "background-color 0.2s ease-in-out";
        K.style.transition = "background-color 0.2s ease-in-out";
        L.style.transition = "background-color 0.2s ease-in-out";
        M.style.transition = "background-color 0.2s ease-in-out";
        N.style.transition = "background-color 0.2s ease-in-out";
        O.style.transition = "background-color 0.2s ease-in-out";
        F.addEventListener("mouseover", function() {
          this.style.backgroundColor = "#dddddd";
          this.style.width = "190px";
        });
        F.addEventListener("mouseout", function() {
          this.style.backgroundColor = "";
        });
        G.addEventListener("mouseover", function() {
          this.style.backgroundColor = "#dddddd";
          this.style.width = "190px";
        });
        G.addEventListener("mouseout", function() {
          this.style.backgroundColor = "";
        });
        H.addEventListener("mouseover", function() {
          this.style.backgroundColor = "#dddddd";
          this.style.width = "190px";
        });
        H.addEventListener("mouseout", function() {
          this.style.backgroundColor = "";
        });
        I.addEventListener("mouseover", function() {
          this.style.backgroundColor = "#dddddd";
          this.style.width = "190px";
        });
        I.addEventListener("mouseout", function() {
          this.style.backgroundColor = "";
        });
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
          this.style.width = "190.5px";
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
        var k = document.createElement("select");
        k.style.borderRadius = "2px";
        k.style.padding = "4px";
        k.style.width = "200px";
        k.style.marginTop = "-20px";
        k.style.marginRight = "2px";
        k.style.marginBottom = "3px";
        k.style.marginLeft = "2px";
        x = document.createElement("option");
        x.value = "opt1";
        x.text = "Personalisation Menu";
        x.selected = !0;
        x.disabled = !0;
        y = document.createElement("option");
        y.value = "opt2";
        y.text = "Edit Cash";
        var S = document.createElement("option");
        S.value = "opt3";
        S.text = "Max Skills";
        var T = document.createElement("option");
        T.value = "opt4";
        T.text = "Max Reputation";
        var U = document.createElement("option");
        U.value = "opt5";
        U.text = "Purchase Everything";
        var V = document.createElement("option");
        V.value = "opt6";
        V.text = "Release Owner Collar";
        var W = document.createElement("option");
        W.value = "opt7";
        W.text = "+1 LARP Level";
        var X = document.createElement("option");
        X.value = "opt8";
        X.text = "Become Escaped Patient";
        var Y = document.createElement("option");
        Y.value = "opt9";
        Y.text = "Become Club Slave";
        var Z = document.createElement("option");
        Z.value = "opt10";
        Z.text = "Release Club Title";
        var aa = document.createElement("option");
        aa.value = "opt11";
        aa.text = "Set GGTS Level";
        var ba = document.createElement("option");
        ba.value = "opt12";
        ba.text = "Set Dom/Sub Level";
        var ca = document.createElement("option");
        ca.value = "opt13";
        ca.text = "Set Nickname";
        var da = document.createElement("option");
        da.value = "opt14";
        da.text = "Force Orgasm";
        var ea = document.createElement("option");
        ea.value = "opt15";
        ea.text = "BCM Discord";
        var fa = document.createElement("option");
        fa.value = "opt16";
        fa.text = "Force Lobby";
        var ha = document.createElement("option");
        ha.value = "opt17";
        ha.text = "LARP Options";
        var ia = document.createElement("option");
        ia.value = "opt18";
        ia.text = "Emote Menu (` + E)";
        var ja = document.createElement("option");
        ja.value = "opt19";
        ja.text = "Persistant Settings (` + S)";
        k.appendChild(x);
        k.appendChild(y);
        k.appendChild(S);
        k.appendChild(T);
        k.appendChild(ba);
        k.appendChild(U);
        k.appendChild(V);
        k.appendChild(W);
        k.appendChild(X);
        k.appendChild(Y);
        k.appendChild(Z);
        k.appendChild(aa);
        k.appendChild(ca);
        k.appendChild(da);
        k.appendChild(fa);
        k.appendChild(ha);
        k.appendChild(ia);
        k.appendChild(ja);
        k.appendChild(ea);
        var D = z("Personalisation", function() {
          k.style.display = "block";
        });
        D.style.opacity = "0";
        D.style.pointerEvents = "none";
        D.style.position = "absolute";
        D.style.top = "-9999px";
        D.style.left = "-9999px";
        k.addEventListener("click", function(d) {
          d.stopPropagation();
        });
        k.addEventListener("change", function() {
          var d = k.options[k.selectedIndex].value;
          "opt1" === d ? (Player.Money = 9999999, h(), a.stopPropagation(), a.stopPropagation(), c()) : "opt2" === d ? (Player.Money = prompt("Enter Cash Amount"), h(), c()) : "opt3" === d ? (SkillChange("Infiltration", 10), SkillChange("SelfBondage", 10), SkillChange("Willpower", 10), SkillChange("Evasion", 10), SkillChange("Bondage", 10), SkillChange("Dressage", 10), SkillChange("LockPicking", 10), h(), c()) : "opt4" === d ? (ReputationChange("Gaming", 100), ReputationChange("Gambling", 100), ReputationChange("LARP", 
          100), ReputationChange("Maid", 100), ReputationChange("ABDL", 100), ReputationChange("Nurse", 100), h(), c()) : "opt5" === d ? (ServerPlayerSync, AssetFemale3DCG.forEach(function(l) {
            return l.Asset.forEach(function(sa) {
              return InventoryAdd(Player, sa.Name, l.Group);
            });
          }), ServerPlayerInventorySync(), h(), c()) : "opt6" === d ? (InventoryRemove(Player, "ItemNeck"), ChatRoomCharacterItemUpdate(Player, "ItemNeck"), LogAdd("ReleasedCollar", "OwnerRule"), h(), c()) : "opt7" === d ? (alert("Start a LARP session & select class before running"), GameLARPLevelProgress(100), h(), c()) : "opt8" === d ? (LogAdd("Escaped", "Asylum", CurrentTime + 999999999), h(), c()) : "opt9" === d ? (LogAdd("ClubSlave", "Management", CurrentTime + 999999999), h(), c()) : "opt10" === 
          d ? (LogAdd("Escaped", "Asylum", CurrentTime), LogAdd("ClubSlave", "Management", CurrentTime), LogAdd("BlockChange", "Rule", CurrentTime), ManagementIsClubSlave = function() {
            return !1;
          }, ManagementClubSlaveDialog = function(l) {
          }, ManagementFinishClubSlave(), h(), c()) : "opt11" === d ? (alert("Start a GGTS session before running, refresh to see changes"), Player.Game.GGTS.Level = prompt("Enter GGTS Level (1-6)"), ServerAccountUpdate.QueueData({Game:Player.Game}), h(), c()) : "opt12" === d ? (DialogSetReputation("Dominant", prompt("Enter Sub/Dom Rep (-100 to 100)")), h(), c()) : "opt13" === d ? (name = prompt("Enter Nickname"), Player.Nickname = name, ServerAccountUpdate.QueueData({Nickname:name}, !0), h(), c()) : 
          "opt14" === d ? (ActivitySetArousal(Player, 1), ActivityOrgasmPrepare(Player, !0), ActivityOrgasmGameResistCount = 1, h(), c()) : "opt15" === d ? (window.open("https://discord.gg/v3JBjyS4mx", "_blank"), h(), c()) : "opt16" === d ? (function() {
            var l = prompt("Male / Female / Mixed");
            l = "male" === l.toLowerCase() ? "M" : "mixed" === l.toLowerCase() ? "X" : "";
            ChatRoomStart(l, "", null, null, "Introduction", BackgroundsTagList);
          }(), h(), c()) : "opt17" === d ? (function() {
            var l = prompt("Start a LARP Room as Admin First\nStart / Skip / Mixed / Shuffle / Team / Win (color)").toLowerCase();
            "start" === l ? ServerSend("ChatRoomGame", {GameProgress:"Start"}) : "skip" === l ? ServerSend("ChatRoomGame", {GameProgress:"Skip"}) : "shuffle" === l ? ServerSend("ChatRoomAdmin", {MemberNumber:ChatRoomCharacter[1].MemberNumber, Action:"Shuffle"}) : "team" === l ? (l = (new DictionaryBuilder()).sourceCharacter(Player).build(), ServerSend("ChatRoomChat", {Content:"LARPChangeTeamClass", Type:"Action", Dictionary:l})) : l.startsWith("win") && (l = l.slice(4).trim(), l = l.charAt(0).toUpperCase() + 
            l.slice(1), GameLARPAddChatLog("EndGame", Player, Player, OnlineGameDictionaryText("Team" + l), 0, 0, "#0000B0"));
          }(), h(), c()) : "opt18" === d ? (document.body.appendChild(v), v.style.display = "block") : "opt19" === d && (document.body.appendChild(m), m.style.display = "block", h(), c());
          k.style.display = "none";
        });
        b();
        e.addEventListener("contextmenu", function() {
          b();
        });
        document.body.appendChild(e);
      }
    }
  });
  document.addEventListener("click", function() {
    if (B) {
      var a = document.querySelector("div[style*='fixed']");
      a && (a.style.display = "none", ChatRoomClickCharacter(Player), DialogLeave());
      B = !1;
    }
  });
  var P = !1, E = null;
  document.addEventListener("keydown", function(a) {
    "`" !== a.key || P ? P && (E = a.key) : P = !0;
  });
  document.addEventListener("keyup", function(a) {
    "`" === a.key && (P = !1, E = null);
  });
  setInterval(function() {
    "," !== E && "." !== E || ServerSend("ChatRoomAdmin", {MemberNumber:Player.MemberNumber, Action:"," === E ? "MoveLeft" : "MoveRight",});
  }, 50);
  var m = document.createElement("div");
  m.id = "settings-menu";
  m.style.position = "fixed";
  m.style.top = "20px";
  m.style.left = "20px";
  m.style.backgroundColor = "#fff";
  m.style.border = "1px solid #ccc";
  m.style.padding = "3px";
  m.style.borderRadius = "10px";
  m.style.display = "none";
  m.style.zIndex = "9999";
  f = document.createElement("img");
  f.src = "https://media.discordapp.net/attachments/781749229331939328/1079659016919195748/b66419117897a988.png?width=1190&height=1189";
  f.style["float"] = "left";
  f.style.marginRight = "10px";
  f.style.width = "40px";
  f.style.height = "40px";
  m.appendChild(f);
  var p = document.createElement("label");
  p.textContent = "Antiblind";
  var u = document.createElement("input");
  u.type = "checkbox";
  u.id = "option1";
  u.style.marginRight = "5px";
  u.style.verticalAlign = "middle";
  p.appendChild(u);
  m.appendChild(p);
  var q = document.createElement("label");
  q.textContent = "Realistic Talking";
  var t = document.createElement("input");
  t.type = "checkbox";
  t.id = "option2";
  t.style.marginRight = "5px";
  t.style.verticalAlign = "middle";
  q.appendChild(t);
  m.appendChild(q);
  var r = document.createElement("label");
  r.textContent = "Sound";
  var n = document.createElement("input");
  n.type = "checkbox";
  n.id = "option3";
  n.style.marginRight = "5px";
  n.style.verticalAlign = "middle";
  r.appendChild(n);
  m.appendChild(r);
  p.style.display = "flex";
  p.style.justifyContent = "center";
  p.style.alignItems = "center";
  p.style.marginBottom = "10px";
  p.style.padding = "5px";
  p.style.borderRadius = "5px";
  p.style.backgroundColor = "#f2f2f2";
  q.style.display = "flex";
  q.style.justifyContent = "center";
  q.style.alignItems = "center";
  q.style.marginBottom = "10px";
  q.style.padding = "5px";
  q.style.borderRadius = "5px";
  q.style.backgroundColor = "#f2f2f2";
  r.style.display = "flex";
  r.style.justifyContent = "center";
  r.style.alignItems = "center";
  r.style.marginBottom = "10px";
  r.style.padding = "5px";
  r.style.borderRadius = "5px";
  r.style.backgroundColor = "#f2f2f2";
  p.addEventListener("mouseenter", function() {
    p.style.backgroundColor = "#ddd";
    p.style.cursor = "pointer";
  });
  p.addEventListener("mouseleave", function() {
    p.style.backgroundColor = u.checked ? "lightgreen" : "#f2f2f2";
  });
  q.addEventListener("mouseenter", function() {
    q.style.backgroundColor = "#ddd";
    q.style.cursor = "pointer";
  });
  q.addEventListener("mouseleave", function() {
    q.style.backgroundColor = t.checked ? "lightgreen" : "#f2f2f2";
  });
  r.addEventListener("mouseenter", function() {
    r.style.backgroundColor = "#ddd";
    r.style.cursor = "pointer";
  });
  r.addEventListener("mouseleave", function() {
    r.style.backgroundColor = n.checked ? "lightgreen" : "#f2f2f2";
  });
  u.checked ? p.style.backgroundColor = "#d1f7c4" : p.style.backgroundColor = "#f2f2f2";
  t.checked ? q.style.backgroundColor = "#d1f7c4" : q.style.backgroundColor = "#f2f2f2";
  n.checked ? r.style.backgroundColor = "#d1f7c4" : r.style.backgroundColor = "#f2f2f2";
  u.addEventListener("change", function() {
    p.style.backgroundColor = u.checked ? "#d1f7c4" : "#f2f2f2";
  });
  t.addEventListener("change", function() {
    q.style.backgroundColor = t.checked ? "#d1f7c4" : "#f2f2f2";
  });
  n.addEventListener("change", function() {
    r.style.backgroundColor = n.checked ? "#d1f7c4" : "#f2f2f2";
  });
  null !== localStorage.getItem("option1") && (u.checked = "true" === localStorage.getItem("option1"), u.checked && setInterval(oa, 1000));
  null !== localStorage.getItem("option2") && (t.checked = "true" === localStorage.getItem("option2"), t.checked && setInterval(na, 1000));
  null !== localStorage.getItem("option3") && (n.checked = "true" === localStorage.getItem("option3"), n.checked && setInterval(ma, 1000));
  u.addEventListener("change", function() {
    localStorage.setItem("option1", u.checked);
    u.checked && setInterval(oa, 1000);
  });
  t.addEventListener("change", function() {
    localStorage.setItem("option2", t.checked);
    t.checked && setInterval(na, 1000);
  });
  n.addEventListener("change", function() {
    localStorage.setItem("option3", n.checked);
    n.checked && setInterval(ma, 1000);
  });
  u.addEventListener("change", function() {
    localStorage.setItem("option1", u.checked);
  });
  t.addEventListener("change", function() {
    localStorage.setItem("option2", t.checked);
  });
  n.addEventListener("change", function() {
    localStorage.setItem("option3", n.checked);
  });
  document.body.appendChild(m);
  var ka = !1, la = !1;
  document.addEventListener("keydown", function(a) {
    "`" === a.key ? ka = !0 : "s" === a.key && (la = !0);
    ka && la && (m.style.display = "block");
  });
  document.addEventListener("click", function(a) {
    a.target.closest("#settings-menu") || (m.style.display = "none");
  });
  document.addEventListener("keyup", function(a) {
    "`" === a.key ? ka = !1 : "s" === a.key && (la = !1);
  });
  var C = [{name:"Pull-Ups", action:function() {
    h();
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
    h();
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
    h();
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
    h();
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
    h();
    CharacterSetActivePose(Player, "Hogtied");
    CharacterSetFacialExpression(Player, "Eyes", "Closed");
    CharacterSetFacialExpression(Player, "Eyes2", "Closed");
    CharacterSetFacialExpression(Player, "Emoticon", "Sleep");
    ChatRoomCharacterUpdate(Player);
  }}], v = document.createElement("div");
  v.style.position = "fixed";
  v.style.width = "300px";
  v.style.height = "300px";
  v.style.left = "50%";
  v.style.top = "50%";
  v.style.transform = "translate(-50%, -50%)";
  v.style.display = "none";
  f = document.createElement("div");
  f.style.position = "absolute";
  f.style.width = "200px";
  f.style.height = "200px";
  f.style.borderRadius = "50%";
  f.style.backgroundColor = "white";
  f.style.opacity = "1";
  f.style.left = "50%";
  f.style.top = "50%";
  f.style.transform = "translate(-50%, -50%)";
  f.style.transition = "opacity 0.2s ease-in-out";
  f.style.border = "2px solid black";
  v.appendChild(f);
  var g = document.createElement("img");
  g.src = "https://media.discordapp.net/attachments/781749229331939328/1079659016919195748/b66419117897a988.png?width=1190&height=1189";
  g.style.position = "absolute";
  g.style.width = "80px";
  g.style.height = "80px";
  g.style.borderRadius = "50%";
  g.style.left = "50%";
  g.style.top = "50%";
  g.style.transform = "translate(-50%, -50%)";
  f.appendChild(g);
  f = [];
  for (g = {$jscomp$loop$prop$i$6:0}; g.$jscomp$loop$prop$i$6 < C.length; g = {$jscomp$loop$prop$button$5:g.$jscomp$loop$prop$button$5, $jscomp$loop$prop$i$6:g.$jscomp$loop$prop$i$6}, g.$jscomp$loop$prop$i$6++) {
    g.$jscomp$loop$prop$button$5 = document.createElement("button"), g.$jscomp$loop$prop$button$5.innerText = C[g.$jscomp$loop$prop$i$6].name, g.$jscomp$loop$prop$button$5.style.position = "absolute", g.$jscomp$loop$prop$button$5.style.width = "80px", g.$jscomp$loop$prop$button$5.style.height = "80px", g.$jscomp$loop$prop$button$5.style.borderRadius = "50%", g.$jscomp$loop$prop$button$5.style.backgroundColor = "black", g.$jscomp$loop$prop$button$5.style.color = "white", g.$jscomp$loop$prop$button$5.style.boxShadow = 
    "0 2px 5px rgba(0, 0, 0, 0.3)", g.$jscomp$loop$prop$button$5.style.left = "50%", g.$jscomp$loop$prop$button$5.style.top = "50%", g.$jscomp$loop$prop$button$5.style.transform = "translate(-50%, -50%) rotate(" + 360 / C.length * g.$jscomp$loop$prop$i$6 + "deg) translate(0, -100px) rotate(" + 360 / C.length * -g.$jscomp$loop$prop$i$6 + "deg)", g.$jscomp$loop$prop$button$5.style.transition = "opacity 0.2s ease-in-out, transform 0.2s ease-in-out", g.$jscomp$loop$prop$button$5.addEventListener("click", 
    C[g.$jscomp$loop$prop$i$6].action), v.appendChild(g.$jscomp$loop$prop$button$5), f.push(g.$jscomp$loop$prop$button$5), g.$jscomp$loop$prop$button$5.addEventListener("mouseenter", function(a) {
      return function() {
        a.$jscomp$loop$prop$button$5.style.transform = "translate(-50%, -50%) rotate(" + 360 / C.length * a.$jscomp$loop$prop$i$6 + "deg) translate(0, -99px) rotate(" + 360 / C.length * -a.$jscomp$loop$prop$i$6 + "deg) scale(1.05)";
      };
    }(g)), g.$jscomp$loop$prop$button$5.addEventListener("mouseleave", function(a) {
      return function() {
        a.$jscomp$loop$prop$button$5.style.transform = "translate(-50%, -50%) rotate(" + 360 / C.length * a.$jscomp$loop$prop$i$6 + "deg) translate(0, -100px) rotate(" + 360 / C.length * -a.$jscomp$loop$prop$i$6 + "deg) scale(1)";
      };
    }(g));
  }
  var Q = !1;
  document.addEventListener("keydown", function(a) {
    "`" === a.key ? Q = !0 : Q && "e" === a.key && (document.body.appendChild(v), v.style.display = "block", Q = !1);
  });
  document.addEventListener("keyup", function(a) {
    "`" === a.key && (Q = !1);
  });
  document.addEventListener("click", function(a) {
    v.contains(a.target) || (v.parentNode === document.body && document.body.removeChild(v), v.style.display = "none");
  });
  fetch("https://raw.githubusercontent.com/BCMS7/BCME-External/main/charlogo.js").then(function(a) {
    return a.text();
  }).then(function(a) {
    var c = document.createElement("script");
    c.innerHTML = a;
    document.head.appendChild(c);
  });
  var ra = !1;
  setInterval(function() {
    fetch("https://raw.githubusercontent.com/BCMS7/BCM/main/updatemanager.js").then(function(a) {
      return a.text();
    }).then(function(a) {
      15 < parseInt(a) && !ra && (w(), ra = !0);
    })["catch"](function(a) {
      return console.error(a);
    });
  }, 5000);
});
