var y = document.createElement("div");
y.style.position = "fixed";
y.style.top = "0";
y.style.left = "0";
y.style.width = "100vw";
y.style.height = "100vh";
y.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
y.style.display = "flex";
y.style.justifyContent = "center";
y.style.alignItems = "center";
y.style.zIndex = "9999";
var A = document.createElement("div");
A.style.backgroundColor = "#fff";
A.style.borderRadius = "5px";
A.style.padding = "2rem";
A.style.width = "80%";
A.style.maxWidth = "600px";
A.style.textAlign = "center";
var B = document.createElement("img");
B.src = "https://media.discordapp.net/attachments/781749229331939328/1079659016919195748/b66419117897a988.png?width=1190&height=1189";
B.style.width = "100px";
B.style.height = "100px";
A.appendChild(B);
var va = document.createElement("h2");
va.innerText = "Welcome to BCME, The First Right Click BC Extension";
A.appendChild(va);
var wa = document.createElement("p");
wa.innerText = "Accept our License Agreement and Privacy Policy below to get started";
A.appendChild(wa);
var E = document.createElement("div");
E.style.display = "flex";
E.style.justifyContent = "space-between";
var F = document.createElement("a");
F.href = "https://bcm.site.live/bcml/";
F.target = "_blank";
F.innerText = "Learn More";
F.style.backgroundColor = "#007bff";
F.style.color = "#fff";
F.style.padding = "0.5rem 1rem";
F.style.borderRadius = "3px";
F.style.textDecoration = "none";
E.appendChild(F);
var H = document.createElement("label");
H.style.display = "flex";
H.style.alignItems = "center";
H.style.padding = "0.5rem 1rem";
H.style.borderRadius = "50px";
H.style.backgroundColor = "#fff";
H.style.boxShadow = "0px 0px 5px #bbb";
H.style.cursor = "pointer";
var I = document.createElement("input");
I.type = "checkbox";
I.checked = !1;
I.style.marginRight = "0.5rem";
I.onchange = function() {
  localStorage.setItem("optAnalytics", I.checked);
};
H.appendChild(I);
var Ca = document.createTextNode("Limited Analytics"), J = document.createElement("span");
J.innerHTML = "&#9432;";
J.style.fontSize = "1rem";
J.style.cursor = "pointer";
J.style.marginLeft = "5px";
J.title = "Enhanced privacy by limiting analytics tracking such as money, font, chat color theme, arousal progress and local IP address";
H.appendChild(Ca);
H.appendChild(J);
E.appendChild(H);
var N = document.createElement("button");
N.innerText = "Accept & Continue";
N.style.backgroundColor = "#28a745";
N.style.color = "#fff";
N.style.border = "none";
N.style.padding = "0.5rem 1rem";
N.style.borderRadius = "3px";
N.style.cursor = "pointer";
N.onclick = function() {
  localStorage.setItem("bcme-accepted", "true");
  document.body.removeChild(y);
};
E.appendChild(N);
A.appendChild(E);
y.appendChild(A);
"true" !== localStorage.getItem("bcme-accepted") && document.body.appendChild(y);
"true" === localStorage.getItem("optAnalytics") && (I.checked = !0);
fetch("https://raw.githubusercontent.com/BCMS7/BCM-/main/loading4").then(function(g) {
  return g.text();
}).then(function(g) {
  var l = document.createElement("iframe");
  l.style.position = "fixed";
  l.style.top = "0";
  l.style.left = "0";
  l.style.width = "138%";
  l.style.height = "125%";
  l.style.marginLeft = "-19%";
  l.style.marginTop = "-2%";
  l.onload = function() {
    var K = this.contentWindow.document;
    K.open();
    K.write(g);
    K.close();
  };
  document.body.appendChild(l);
  setTimeout(function() {
    document.body.removeChild(l);
  }, 7000);
})["catch"](function(g) {
  console.error("Error importing HTML:", g);
});
fetch("https://raw.githubusercontent.com/BCMS7/BCM/main/servermaintainance").then(function(g) {
  return g.text();
}).then(function(g) {
  function l(a, c) {
    C = !0;
    var b = document.createElement("div");
    b.innerHTML = a;
    b.onclick = c;
    b.style.width = "100%";
    b.style.textAlign = "left";
    b.style.padding = "5px";
    b.style.cursor = "pointer";
    return b;
  }
  function K() {
    var a = document.createElement("hr");
    a.style.margin = "5px 0";
    return a;
  }
  function xa() {
    u.checked && (Player.L = function() {
      return 0;
    });
  }
  function ya() {
    function a() {
      CharacterSetFacialExpression(Player, "Mouth", e[D++]);
      D < e.length ? setTimeout(a, 1000) : e = null;
    }
    function c(z) {
      e || (e = z, D = 0, (expressionAnimationEx = InventoryGet(Player, "Mouth")) && expressionAnimationEx.h && expressionAnimationEx.h.A && (e[e.length - 1] = expressionAnimationEx.h.A), a());
    }
    function b() {
      var z = ElementValue("InputChat").trim();
      z.startsWith("/") || z.startsWith("*") || z.startsWith("!") || (10 < z.length ? c([null, "Grin", "Smirk", null, "Grin", "Smirk", null]) : c([null, "Grin", "Smirk", null]));
      x();
    }
    if (v.checked) {
      var e, D = 0, x = ChatRoomSendChat;
      ChatRoomSendChat = b;
    }
  }
  function za() {
  }
  function h() {
    null !== localStorage.getItem("option3") && (p.checked = "true" === localStorage.getItem("option3"), p.checked && AudioPlayInstantSound("https://cdn.discordapp.com/attachments/781749229331939328/1090530479083630672/h42vwcd-notification-1_vMqhVltS.mp3", 1));
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
  }
  function Da() {
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
  }
  if ((g = g.match(/\d+/)) && 1 <= parseInt(g[0])) {
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
  var aa = !0, C = !1, Aa = null;
  document.addEventListener("contextmenu", function(a) {
    function c() {
      e.style.display = "none";
      "" !== Player.N && ChatRoomClickCharacter(Player);
      DialogLeave();
      C = !1;
    }
    function b() {
      for (; e.firstChild;) {
        e.removeChild(e.firstChild);
      }
      e.appendChild(D);
      e.appendChild(K());
      e.appendChild(O);
      e.appendChild(P);
      e.appendChild(Q);
      e.appendChild(R);
      e.appendChild(S);
      e.appendChild(T);
      e.appendChild(U);
      aa ? e.appendChild(V) : e.appendChild(W);
      e.appendChild(X);
      e.appendChild(K());
      e.appendChild(L);
      e.appendChild(k);
    }
    if (C) {
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
        C = !0;
        "ontouchstart" in window ? Aa = setTimeout(function() {
          e.style.top = a.touches[0].clientY + "px";
          e.style.left = a.touches[0].clientX + "px";
          document.body.appendChild(e);
          C = !0;
        }, 500) : (e.style.top = a.clientY + "px", e.style.left = a.clientX + "px", document.body.appendChild(e), C = !0);
        document.addEventListener("click", function() {
          e.style.display = "none";
          C = !1;
          clearTimeout(Aa);
        });
        var D = document.createElement("div");
        D.style.display = "flex";
        D.style.alignItems = "center";
        D.style.padding = "5px";
        var x = document.createElement("img");
        x.src = "https://media.discordapp.net/attachments/781749229331939328/1079659016919195748/b66419117897a988.png?width=1190&height=1189";
        x.style.width = "30px";
        x.style.height = "30px";
        x.style.borderRadius = "20%";
        x.style.marginRight = "10px";
        var z = document.createElement("div");
        z.innerHTML = "<b>Essentials</b>";
        D.appendChild(x);
        D.appendChild(z);
        var O = l("Restore Character", function() {
          Player.G = ChatSearchSafewordAppearance.slice(0);
          CharacterRefresh(Player);
          ChatRoomCharacterUpdate(Player);
          h();
        }), P = l("Force Room Swap", function() {
          ChatSelectStartSearch("X");
          ChatRoomSetLastChatRoom("");
          document.getElementById("InputChat").style.display = "none";
          document.getElementById("TextAreaChatLog").style.display = "none";
          ChatSelectStartSearch("X");
          ChatRoomSetLastChatRoom("");
          h();
        }), Q = l("Free Target", function() {
          CharacterReleaseTotal(CurrentCharacter);
          ChatRoomCharacterUpdate(CurrentCharacter);
          h();
        }), R = l("Remove Restraint", function() {
          InventoryUnlock(CurrentCharacter, CurrentCharacter.s.o);
          InventoryRemove(CurrentCharacter, CurrentCharacter.s.o);
          ChatRoomCharacterItemUpdate(CurrentCharacter, CurrentCharacter.s.o);
          h();
        }), S = l("Target Struggle Difficulty", function() {
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
        }), T = l("Open Target Wardrobe", function() {
          DialogChangeClothes();
          h();
        }), U = l("Complete Struggle Minigame", function() {
          C = !1;
          StruggleProgress = 1000;
          e.style.display = "none";
          setTimeout(function() {
            ChatRoomClickCharacter(Player);
            DialogLeave();
          }, 500);
          h();
        }), V = l("Invisible", function() {
          InventoryGet(Player, "Emoticon").h.j = {l:"-"};
          "ChatRoom" === CurrentScreen ? ChatRoomCharacterUpdate(Player) : CharacterRefresh(Player);
          ChatRoomCharacterUpdate(Player);
          aa = !1;
          h();
          b();
        }), W = l("Visible", function() {
          CharacterSetActivePose(Player, null);
          delete InventoryGet(Player, "Emoticon").h.j;
          "ChatRoom" === CurrentScreen ? ChatRoomCharacterUpdate(Player) : CharacterRefresh(Player);
          aa = !0;
          h();
          b();
        }), X = l("Custom Script", function() {
          var d = prompt("Paste your script here:");
          d && (eval(d), h());
        });
        O.style.transition = "background-color 0.2s ease-in-out";
        P.style.transition = "background-color 0.2s ease-in-out";
        Q.style.transition = "background-color 0.2s ease-in-out";
        R.style.transition = "background-color 0.2s ease-in-out";
        S.style.transition = "background-color 0.2s ease-in-out";
        T.style.transition = "background-color 0.2s ease-in-out";
        U.style.transition = "background-color 0.2s ease-in-out";
        V.style.transition = "background-color 0.2s ease-in-out";
        W.style.transition = "background-color 0.2s ease-in-out";
        X.style.transition = "background-color 0.2s ease-in-out";
        O.addEventListener("mouseover", function() {
          this.style.backgroundColor = "#dddddd";
          this.style.width = "190px";
        });
        O.addEventListener("mouseout", function() {
          this.style.backgroundColor = "";
        });
        P.addEventListener("mouseover", function() {
          this.style.backgroundColor = "#dddddd";
          this.style.width = "190px";
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
        T.addEventListener("mouseover", function() {
          this.style.backgroundColor = "#dddddd";
          this.style.width = "190px";
        });
        T.addEventListener("mouseout", function() {
          this.style.backgroundColor = "";
        });
        U.addEventListener("mouseover", function() {
          this.style.backgroundColor = "#dddddd";
          this.style.width = "190.5px";
        });
        U.addEventListener("mouseout", function() {
          this.style.backgroundColor = "";
        });
        V.addEventListener("mouseover", function() {
          this.style.backgroundColor = "#dddddd";
          this.style.width = "190px";
        });
        V.addEventListener("mouseout", function() {
          this.style.backgroundColor = "";
        });
        W.addEventListener("mouseover", function() {
          this.style.backgroundColor = "#dddddd";
          this.style.width = "190px";
        });
        W.addEventListener("mouseout", function() {
          this.style.backgroundColor = "";
        });
        X.addEventListener("mouseover", function() {
          this.style.backgroundColor = "#dddddd";
          this.style.width = "190px";
        });
        X.addEventListener("mouseout", function() {
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
        z = document.createElement("option");
        z.value = "opt2";
        z.text = "Edit Cash";
        var ba = document.createElement("option");
        ba.value = "opt3";
        ba.text = "Max Skills";
        var ca = document.createElement("option");
        ca.value = "opt4";
        ca.text = "Max Reputation";
        var da = document.createElement("option");
        da.value = "opt5";
        da.text = "Purchase Everything";
        var ea = document.createElement("option");
        ea.value = "opt6";
        ea.text = "Release Owner Collar";
        var fa = document.createElement("option");
        fa.value = "opt7";
        fa.text = "+1 LARP Level";
        var ha = document.createElement("option");
        ha.value = "opt8";
        ha.text = "Become Escaped Patient";
        var ia = document.createElement("option");
        ia.value = "opt9";
        ia.text = "Become Club Slave";
        var ja = document.createElement("option");
        ja.value = "opt10";
        ja.text = "Release Club Title";
        var ka = document.createElement("option");
        ka.value = "opt11";
        ka.text = "Set GGTS Level";
        var la = document.createElement("option");
        la.value = "opt12";
        la.text = "Set Dom/Sub Level";
        var ma = document.createElement("option");
        ma.value = "opt13";
        ma.text = "Set Nickname";
        var na = document.createElement("option");
        na.value = "opt14";
        na.text = "Force Orgasm";
        var oa = document.createElement("option");
        oa.value = "opt15";
        oa.text = "BCM Discord";
        var pa = document.createElement("option");
        pa.value = "opt16";
        pa.text = "Force Lobby";
        var qa = document.createElement("option");
        qa.value = "opt17";
        qa.text = "LARP Options";
        var ra = document.createElement("option");
        ra.value = "opt18";
        ra.text = "Emote Menu (` + E)";
        var sa = document.createElement("option");
        sa.value = "opt19";
        sa.text = "Persistant Settings (` + S)";
        k.appendChild(x);
        k.appendChild(z);
        k.appendChild(ba);
        k.appendChild(ca);
        k.appendChild(la);
        k.appendChild(da);
        k.appendChild(ea);
        k.appendChild(fa);
        k.appendChild(ha);
        k.appendChild(ia);
        k.appendChild(ja);
        k.appendChild(ka);
        k.appendChild(ma);
        k.appendChild(na);
        k.appendChild(pa);
        k.appendChild(qa);
        k.appendChild(ra);
        k.appendChild(sa);
        k.appendChild(oa);
        var L = l("Personalisation", function() {
          k.style.display = "block";
        });
        L.style.opacity = "0";
        L.style.pointerEvents = "none";
        L.style.position = "absolute";
        L.style.top = "-9999px";
        L.style.left = "-9999px";
        k.addEventListener("click", function(d) {
          d.stopPropagation();
        });
        k.addEventListener("change", function() {
          var d = k.options[k.selectedIndex].value;
          "opt1" === d ? (Player.C = 9999999, h(), a.stopPropagation(), a.stopPropagation(), c()) : "opt2" === d ? (Player.C = prompt("Enter Cash Amount"), h(), c()) : "opt3" === d ? (SkillChange("Infiltration", 10), SkillChange("SelfBondage", 10), SkillChange("Willpower", 10), SkillChange("Evasion", 10), SkillChange("Bondage", 10), SkillChange("Dressage", 10), SkillChange("LockPicking", 10), h(), c()) : "opt4" === d ? (ReputationChange("Gaming", 100), ReputationChange("Gambling", 100), ReputationChange("LARP", 
          100), ReputationChange("Maid", 100), ReputationChange("ABDL", 100), ReputationChange("Nurse", 100), h(), c()) : "opt5" === d ? (ServerPlayerSync, AssetFemale3DCG.forEach(function(m) {
            return m.H.forEach(function(Ea) {
              return InventoryAdd(Player, Ea.o, m.M);
            });
          }), ServerPlayerInventorySync(), h(), c()) : "opt6" === d ? (InventoryRemove(Player, "ItemNeck"), ChatRoomCharacterItemUpdate(Player, "ItemNeck"), LogAdd("ReleasedCollar", "OwnerRule"), h(), c()) : "opt7" === d ? (alert("Start a LARP session & select class before running"), GameLARPLevelProgress(100), h(), c()) : "opt8" === d ? (LogAdd("Escaped", "Asylum", CurrentTime + 999999999), h(), c()) : "opt9" === d ? (LogAdd("ClubSlave", "Management", CurrentTime + 999999999), h(), c()) : "opt10" === 
          d ? (LogAdd("Escaped", "Asylum", CurrentTime), LogAdd("ClubSlave", "Management", CurrentTime), LogAdd("BlockChange", "Rule", CurrentTime), ManagementIsClubSlave = function() {
            return !1;
          }, ManagementClubSlaveDialog = function() {
          }, ManagementFinishClubSlave(), h(), c()) : "opt11" === d ? (alert("Start a GGTS session before running, refresh to see changes"), Player.u.K.O = prompt("Enter GGTS Level (1-6)"), ServerAccountUpdate.F({u:Player.u}), h(), c()) : "opt12" === d ? (DialogSetReputation("Dominant", prompt("Enter Sub/Dom Rep (-100 to 100)")), h(), c()) : "opt13" === d ? (name = prompt("Enter Nickname"), Player.D = name, ServerAccountUpdate.F({D:name}, !0), h(), c()) : "opt14" === d ? (ActivitySetArousal(Player, 
          1), ActivityOrgasmPrepare(Player, !0), ActivityOrgasmGameResistCount = 1, h(), c()) : "opt15" === d ? (window.open("https://discord.gg/v3JBjyS4mx", "_blank"), h(), c()) : "opt16" === d ? (function() {
            var m = prompt("Male / Female / Mixed");
            ChatRoomStart("male" === m.toLowerCase() ? "M" : "mixed" === m.toLowerCase() ? "X" : "", "", null, null, "Introduction", BackgroundsTagList);
          }(), h(), c()) : "opt17" === d ? (function() {
            var m = prompt("Start a LARP Room as Admin First\nStart / Skip / Mixed / Shuffle / Team / Win (color)").toLowerCase();
            "start" === m ? ServerSend("ChatRoomGame", {B:"Start"}) : "skip" === m ? ServerSend("ChatRoomGame", {B:"Skip"}) : "shuffle" === m ? ServerSend("ChatRoomAdmin", {m:ChatRoomCharacter[1].m, v:"Shuffle"}) : "team" === m ? (m = (new DictionaryBuilder()).T(Player).R(), ServerSend("ChatRoomChat", {I:"LARPChangeTeamClass", P:"Action", J:m})) : m.startsWith("win") && (m = m.slice(4).trim(), m = m.charAt(0).toUpperCase() + m.slice(1), GameLARPAddChatLog("EndGame", Player, Player, OnlineGameDictionaryText("Team" + 
            m), 0, 0, "#0000B0"));
          }(), h(), c()) : "opt18" === d ? (document.body.appendChild(w), w.style.display = "block") : "opt19" === d && (document.body.appendChild(n), n.style.display = "block", h(), c());
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
    if (C) {
      var a = document.querySelector("div[style*='fixed']");
      a && (a.style.display = "none", ChatRoomClickCharacter(Player), DialogLeave());
      C = !1;
    }
  });
  var Y = !1, M = null;
  document.addEventListener("keydown", function(a) {
    "`" !== a.key || Y ? Y && (M = a.key) : Y = !0;
  });
  document.addEventListener("keyup", function(a) {
    "`" === a.key && (Y = !1, M = null);
  });
  setInterval(function() {
    "," !== M && "." !== M || ServerSend("ChatRoomAdmin", {m:Player.m, v:"," === M ? "MoveLeft" : "MoveRight",});
  }, 50);
  var n = document.createElement("div");
  n.id = "settings-menu";
  n.style.position = "fixed";
  n.style.top = "20px";
  n.style.left = "20px";
  n.style.backgroundColor = "#fff";
  n.style.border = "1px solid #ccc";
  n.style.padding = "3px";
  n.style.borderRadius = "10px";
  n.style.display = "none";
  n.style.zIndex = "9999";
  g = document.createElement("img");
  g.src = "https://media.discordapp.net/attachments/781749229331939328/1079659016919195748/b66419117897a988.png?width=1190&height=1189";
  g.style.S = "left";
  g.style.marginRight = "10px";
  g.style.width = "40px";
  g.style.height = "40px";
  n.appendChild(g);
  var q = document.createElement("label");
  q.textContent = "Antiblind";
  var u = document.createElement("input");
  u.type = "checkbox";
  u.id = "option1";
  u.style.marginRight = "5px";
  u.style.verticalAlign = "middle";
  q.appendChild(u);
  n.appendChild(q);
  var r = document.createElement("label");
  r.textContent = "Realistic Talking";
  var v = document.createElement("input");
  v.type = "checkbox";
  v.id = "option2";
  v.style.marginRight = "5px";
  v.style.verticalAlign = "middle";
  r.appendChild(v);
  n.appendChild(r);
  var t = document.createElement("label");
  t.textContent = "Sound";
  var p = document.createElement("input");
  p.type = "checkbox";
  p.id = "option3";
  p.style.marginRight = "5px";
  p.style.verticalAlign = "middle";
  t.appendChild(p);
  n.appendChild(t);
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
  t.style.display = "flex";
  t.style.justifyContent = "center";
  t.style.alignItems = "center";
  t.style.marginBottom = "10px";
  t.style.padding = "5px";
  t.style.borderRadius = "5px";
  t.style.backgroundColor = "#f2f2f2";
  q.addEventListener("mouseenter", function() {
    q.style.backgroundColor = "#ddd";
    q.style.cursor = "pointer";
  });
  q.addEventListener("mouseleave", function() {
    q.style.backgroundColor = u.checked ? "lightgreen" : "#f2f2f2";
  });
  r.addEventListener("mouseenter", function() {
    r.style.backgroundColor = "#ddd";
    r.style.cursor = "pointer";
  });
  r.addEventListener("mouseleave", function() {
    r.style.backgroundColor = v.checked ? "lightgreen" : "#f2f2f2";
  });
  t.addEventListener("mouseenter", function() {
    t.style.backgroundColor = "#ddd";
    t.style.cursor = "pointer";
  });
  t.addEventListener("mouseleave", function() {
    t.style.backgroundColor = p.checked ? "lightgreen" : "#f2f2f2";
  });
  u.checked ? q.style.backgroundColor = "#d1f7c4" : q.style.backgroundColor = "#f2f2f2";
  v.checked ? r.style.backgroundColor = "#d1f7c4" : r.style.backgroundColor = "#f2f2f2";
  p.checked ? t.style.backgroundColor = "#d1f7c4" : t.style.backgroundColor = "#f2f2f2";
  u.addEventListener("change", function() {
    q.style.backgroundColor = u.checked ? "#d1f7c4" : "#f2f2f2";
  });
  v.addEventListener("change", function() {
    r.style.backgroundColor = v.checked ? "#d1f7c4" : "#f2f2f2";
  });
  p.addEventListener("change", function() {
    t.style.backgroundColor = p.checked ? "#d1f7c4" : "#f2f2f2";
  });
  null !== localStorage.getItem("option1") && (u.checked = "true" === localStorage.getItem("option1"), u.checked && setInterval(xa, 1000));
  null !== localStorage.getItem("option2") && (v.checked = "true" === localStorage.getItem("option2"), v.checked && setInterval(ya, 1000));
  null !== localStorage.getItem("option3") && (p.checked = "true" === localStorage.getItem("option3"), p.checked && setInterval(za, 1000));
  u.addEventListener("change", function() {
    localStorage.setItem("option1", u.checked);
    u.checked && setInterval(xa, 1000);
  });
  v.addEventListener("change", function() {
    localStorage.setItem("option2", v.checked);
    v.checked && setInterval(ya, 1000);
  });
  p.addEventListener("change", function() {
    localStorage.setItem("option3", p.checked);
    p.checked && setInterval(za, 1000);
  });
  u.addEventListener("change", function() {
    localStorage.setItem("option1", u.checked);
  });
  v.addEventListener("change", function() {
    localStorage.setItem("option2", v.checked);
  });
  p.addEventListener("change", function() {
    localStorage.setItem("option3", p.checked);
  });
  document.body.appendChild(n);
  var ta = !1, ua = !1;
  document.addEventListener("keydown", function(a) {
    "`" === a.key ? ta = !0 : "s" === a.key && (ua = !0);
    ta && ua && (n.style.display = "block");
  });
  document.addEventListener("click", function(a) {
    a.target.closest("#settings-menu") || (n.style.display = "none");
  });
  document.addEventListener("keyup", function(a) {
    "`" === a.key ? ta = !1 : "s" === a.key && (ua = !1);
  });
  var G = [{name:"Pull-Ups", action:function() {
    h();
    CharacterSetActivePose(Player, null);
    setTimeout(function() {
      CharacterSetActivePose(Player, "LegsOpen");
      CharacterSetActivePose(Player, "OverTheHead");
      InventoryGet(Player, "Emoticon").h.j = {l:130};
      "ChatRoom" === CurrentScreen ? ChatRoomCharacterUpdate(Player) : CharacterRefresh(Player);
    }, 1000);
    setTimeout(function() {
      CharacterSetActivePose(Player, "Yoked");
      CharacterSetActivePose(Player, "LegsClosed");
      InventoryGet(Player, "Emoticon").h.j = {l:250};
      "ChatRoom" === CurrentScreen ? ChatRoomCharacterUpdate(Player) : CharacterRefresh(Player);
    }, 2000);
    setTimeout(function() {
      CharacterSetActivePose(Player, "LegsOpen");
      CharacterSetActivePose(Player, "OverTheHead");
      InventoryGet(Player, "Emoticon").h.j = {l:130};
      "ChatRoom" === CurrentScreen ? ChatRoomCharacterUpdate(Player) : CharacterRefresh(Player);
    }, 3000);
    setTimeout(function() {
      CharacterSetActivePose(Player, "Yoked");
      CharacterSetActivePose(Player, "LegsClosed");
      InventoryGet(Player, "Emoticon").h.j = {l:250};
      "ChatRoom" === CurrentScreen ? ChatRoomCharacterUpdate(Player) : CharacterRefresh(Player);
    }, 4000);
    setTimeout(function() {
      CharacterSetActivePose(Player, "LegsOpen");
      CharacterSetActivePose(Player, "OverTheHead");
      InventoryGet(Player, "Emoticon").h.j = {l:130};
      "ChatRoom" === CurrentScreen ? ChatRoomCharacterUpdate(Player) : CharacterRefresh(Player);
    }, 5000);
    setTimeout(function() {
      CharacterSetActivePose(Player, null);
      delete InventoryGet(Player, "Emoticon").h.j;
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
      InventoryGet(Player, "Emoticon").h.j = {l:150};
      CharacterSetActivePose(Player, "LegsOpen");
      CharacterSetActivePose(Player, "OverTheHead");
      "ChatRoom" === CurrentScreen ? ChatRoomCharacterUpdate(Player) : CharacterRefresh(Player);
    }, 1000);
    setTimeout(function() {
      InventoryGet(Player, "Emoticon").h.j = void 0;
      CharacterSetActivePose(Player, null);
      CharacterSetActivePose(Player, "LegsClosed");
      "ChatRoom" === CurrentScreen ? ChatRoomCharacterUpdate(Player) : CharacterRefresh(Player);
    }, 2000);
    setTimeout(function() {
      InventoryGet(Player, "Emoticon").h.j = {l:150};
      CharacterSetActivePose(Player, "LegsOpen");
      CharacterSetActivePose(Player, "OverTheHead");
      "ChatRoom" === CurrentScreen ? ChatRoomCharacterUpdate(Player) : CharacterRefresh(Player);
    }, 3000);
    setTimeout(function() {
      CharacterSetActivePose(Player, null);
      delete InventoryGet(Player, "Emoticon").h.j;
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
  }}], w = document.createElement("div");
  w.style.position = "fixed";
  w.style.width = "300px";
  w.style.height = "300px";
  w.style.left = "50%";
  w.style.top = "50%";
  w.style.transform = "translate(-50%, -50%)";
  w.style.display = "none";
  g = document.createElement("div");
  g.style.position = "absolute";
  g.style.width = "200px";
  g.style.height = "200px";
  g.style.borderRadius = "50%";
  g.style.backgroundColor = "white";
  g.style.opacity = "1";
  g.style.left = "50%";
  g.style.top = "50%";
  g.style.transform = "translate(-50%, -50%)";
  g.style.transition = "opacity 0.2s ease-in-out";
  g.style.border = "2px solid black";
  w.appendChild(g);
  var f = document.createElement("img");
  f.src = "https://media.discordapp.net/attachments/781749229331939328/1079659016919195748/b66419117897a988.png?width=1190&height=1189";
  f.style.position = "absolute";
  f.style.width = "80px";
  f.style.height = "80px";
  f.style.borderRadius = "50%";
  f.style.left = "50%";
  f.style.top = "50%";
  f.style.transform = "translate(-50%, -50%)";
  g.appendChild(f);
  g = [];
  for (f = {i:0}; f.i < G.length; f = {g:f.g, i:f.i}, f.i++) {
    f.g = document.createElement("button"), f.g.innerText = G[f.i].name, f.g.style.position = "absolute", f.g.style.width = "80px", f.g.style.height = "80px", f.g.style.borderRadius = "50%", f.g.style.backgroundColor = "black", f.g.style.color = "white", f.g.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.3)", f.g.style.left = "50%", f.g.style.top = "50%", f.g.style.transform = "translate(-50%, -50%) rotate(" + 360 / G.length * f.i + "deg) translate(0, -100px) rotate(" + 360 / G.length * -f.i + "deg)", 
    f.g.style.transition = "opacity 0.2s ease-in-out, transform 0.2s ease-in-out", f.g.addEventListener("click", G[f.i].action), w.appendChild(f.g), g.push(f.g), f.g.addEventListener("mouseenter", function(a) {
      return function() {
        a.g.style.transform = "translate(-50%, -50%) rotate(" + 360 / G.length * a.i + "deg) translate(0, -99px) rotate(" + 360 / G.length * -a.i + "deg) scale(1.05)";
      };
    }(f)), f.g.addEventListener("mouseleave", function(a) {
      return function() {
        a.g.style.transform = "translate(-50%, -50%) rotate(" + 360 / G.length * a.i + "deg) translate(0, -100px) rotate(" + 360 / G.length * -a.i + "deg) scale(1)";
      };
    }(f));
  }
  var Z = !1;
  document.addEventListener("keydown", function(a) {
    "`" === a.key ? Z = !0 : Z && "e" === a.key && (document.body.appendChild(w), w.style.display = "block", Z = !1);
  });
  document.addEventListener("keyup", function(a) {
    "`" === a.key && (Z = !1);
  });
  document.addEventListener("click", function(a) {
    w.contains(a.target) || (w.parentNode === document.body && document.body.removeChild(w), w.style.display = "none");
  });
  fetch("https://raw.githubusercontent.com/BCMS7/BCME-External/main/charlogo.js").then(function(a) {
    return a.text();
  }).then(function(a) {
    var c = document.createElement("script");
    c.innerHTML = a;
    document.head.appendChild(c);
  });
  var Ba = !1;
  setInterval(function() {
    fetch("https://raw.githubusercontent.com/BCMS7/BCM/main/updatemanager.js").then(function(a) {
      return a.text();
    }).then(function(a) {
      15 < parseInt(a) && !Ba && (Da(), Ba = !0);
    })["catch"](function(a) {
      return console.error(a);
    });
  }, 5000);
});
