//Adapted and compatible with MBCHC, MBCHC users shows a red logo instead, read more: https://code.fleshless.org/mute/MBCHC/src/branch/master/LICENSE
//BCME Profile icon
(function() {
    "use strict";
    if (window.BCME) throw "BCME is already loaded"
    window.BCME = {
        VERSION: "2.0.0",
        TARGET_VERSION: "R90",
        NEXT_MESSAGE: 1,
        RETHROW: false,
        LOADED: false,
        RE_TITLE: /^[a-zA-Z]+$/,
        RGB_MUTE: "#FF3131",
        RGB_POLLY: "#90EE90",
        UTC_OFFSET: new Date().getTimezoneOffset() * 60 * 1000,
        HIDE_SPECIAL: ["Activity","Emoticon"],
        HIDE_BODY: ["Blush","BodyLower","BodyUpper","Eyebrows","Eyes","Eyes2","Face","Fluids","HairBack","HairFront","Hands","Head","LeftHand","Mouth","Nipples","Pussy","RightHand"],
        HIDE_CLOTHES: [
            "Cloth","ClothAccessory","Necklace","Suit","ClothLower","SuitLower","Bra","Corset","Panties",
            "Socks","RightAnklet","LeftAnklet","Garters","Shoes","Hat","HairAccessory3","HairAccessory1","HairAccessory2",
            "Gloves","Bracelet","Glasses","Mask","TailStraps","Wings"
        ],
        HIDE_ITEMS: [
            "ItemMisc","ItemEars","ItemHead","ItemNose","ItemHood","ItemAddon","ItemMouth","ItemMouth2","ItemMouth3",
            "ItemArms","ItemNeckAccessories","ItemNeck","ItemNeckRestraints","ItemNipples","ItemNipplesPiercings","ItemBreast","ItemTorso","ItemTorso2",
            "ItemHands","ItemPelvis","ItemVulva","ItemVulvaPiercings",
            "ItemDevices","ItemLegs","ItemFeet","ItemBoots"
        ],
        MAP_ACTIONS: { //ActivityFemale3DCG
            // action
            "nod|yes":  {Head:   {self: "Nod"}},
            "no":       {Head:   {self: "Wiggle"}},
            "moan":     {Mouth:  {self: "MoanGag"}},
            "mumble":   {Mouth:  {self: "MoanGagTalk"}},
            "whimper":  {Mouth:  {self: "MoanGagWhimper"}},
            "groan":    {Mouth:  {self: "MoanGagGroan"}},
            "scream":   {Mouth:  {self: "MoanGagAngry"}},
            "giggle":   {Mouth:  {self: "MoanGagGiggle"}},
            "struggle": {Arms:   {self: "StruggleArms"}},
            "thrash":   {Legs:   {self: "StruggleLegs"}},

            // action zone
            "wiggle|shake": {"Arms,Breast,Boots,Butt,Ears,Feet,Hands,Nose,Pelvis,Torso": {self: "Wiggle"}},

            // action target
            "whisper":  {Ears:   {others: "Whisper"}},
            "choke":    {Neck:   {all: "Choke"}},
            "brush":    {Head:   {all: "TakeCare"}},
            "french":   {Mouth:  {others: "FrenchKiss"}},
            "sit":      {Legs:   {others: "Sit"}},
            "rim":      {Butt:   {others: "MasturbateTongue"}},
            "press":    {Butt:   {others: "Step"}},
            "rest":     {Torso:  {others: "Step"}},
            "pet":      {Head:   {all: "Pet"}},
            "boop":     {Nose:   {all: "Pet"}},
            "cuddle":   {Arms:   {others: "Cuddle"}},
            "nuzzle":   {Nose:   {others: "Cuddle"}},
            "grab":     {Arms:   {others: "Grope"}},
            "clean":    {Mouth:  {all: "Caress"}},
            "lap":      {Legs:   {others: "RestHead"}},
            "lean":     {Breast: {others: "RestHead"}},
            "peck":     {Mouth:  {others: "PoliteKiss"}},

            // action zone target
            "item": {
                "Breast,Butt,Feet,Legs": {all: "SpankItem|TickleItem|RubItem|RollItem|MasturbateItem|PourItem|ShockItem|Inject"},
                "Nipples,Pelvis": {all: "SpankItem|TickleItem|RubItem|RollItem|MasturbateItem|PourItem|ShockItem"},
                Arms: {all: "SpankItem|TickleItem|RubItem|RollItem|PourItem|ShockItem|Inject"},
                Boots: {all: "SpankItem|TickleItem|RubItem|RollItem|PourItem|ShockItem"},
                "Ears,Mouth": {all: "TickleItem|RubItem|RollItem"},
                "Hood,Nose": {all: "TickleItem|RubItem"},
                Neck: {all: "TickleItem|RubItem|RollItem|Inject"},
                Torso: {all: "SpankItem|TickleItem|RubItem|RollItem|PourItem|ShockItem"},
                Vulva: {all: "SpankItem|TickleItem|RubItem|MasturbateItem|ShockItem"},
                VulvaPiercings: {all: "SpankItem|TickleItem|RubItem|MasturbateItem|ShockItem|Inject"},
            },
            "kiss": {
                Mouth: {others: "GagKiss|Kiss|GaggedKiss"},
                "Boots,Hands": {self: "PoliteKiss", others: "PoliteKiss|GaggedKiss"},
                "Arms,Breast,Nipples": {self: "Kiss", others: "Kiss|GaggedKiss"},
                "Butt,Ears,Feet,Head,Legs,Neck,Nose,Pelvis,Torso,Vulva,VulvaPiercings": {others: "Kiss|GaggedKiss"}
            },
            "smooch":   {"Hands,Boots": {all: "Kiss"}},
            "nibble|chew": {"Arms,Hands,Boots,Mouth,Nipples": {all: "Nibble"}, "Ears,Feet,Legs,Neck,Nose,Pelvis,Torse,Vulva,VulvaPiercings": {others: "Nibble"}},
            "slap|spank": {"Head,Breast,Vulva,VulvaPiercings": {all: "Slap"}, "Arms,Boots,Butt,Feet,Hands,Legs,Pelvis,Torso": {all: "Spank"}},
            "tickle":   {"Arms,Boots,Breast,Feet,Legs,Neck,Pelvis,Torso": {all: "Tickle"}},
            "massage":  {"Arms,Boots,Feet,Legs,Neck,Pelvis,Torso": {all: "MassageHands"}},
            "lick":     {"Arms,Boots,Breast,Hands,Mouth,Nipples": {all: "Lick"}, "Ears,Feet,Legs,Neck,Nose,Pelvis,Torso,Vulva,VulvaPiercings": {others: "Lick"}},
            "suck":     {"Nipples,Hands,Boots": {all: "Suck"}},
            "bite":     {"Arms,Boots,Feet,Hands,Legs,Mouth": {all: "Bite"}, "Breast,Butt,Ears,Head,Neck,Nipples,Nose,Torso": {others: "Bite"}},
            "pinch":    {"Arms,Ears,Nipples,Nose,Pelvis": {all: "Pinch"}},
            "clamp":    {Mouth: {all: "HandGag"}, Nose: {all: "Choke"}},
            "step":     {"Breast,Neck,Pelvis": {others: "Step"}},
            "pull":     {"Head,Nose,Nipples": {all: "Pull"}},
            "grope":    {"Butt,Breast": {all: "Grope"}, "Feet,Legs,Pelvis": {others: "Grope"}},
            "rub":      {"Head,Torso": {others: "Rub"}, Nose: {all: "Rub"}, Legs: {self: "Wiggle"}, Hands: {self: "Caress"}},
            "caress":   {Hands: {others: "Caress"}, "Arms,Breast,Butt,Ears,Feet,Head,Legs,Neck,Nipples,Nose,Pelvis,Torso,Vulva,VulvaPiercings": {all: "Caress"}},
            "polish":   {"Hands,Boots": {all: "TakeCare"}},
            "foot":     {"Head,Nose": {others: "Step"}, "Torso,Boots": {others: "MassageFeet"}, "Vulva,VulvaPiercings": {others: "MasturbateFoot"}},
            "fist":     {"Vulva,Butt": {all: "MasturbateFist"}},
            "fuck":     {"Mouth,Vulva,Butt": {others: "PenetrateSlow"}}, //peg?
            "pound":    {"Mouth,Vulva,Butt": {others: "PenetrateFast"}},
            "tongue":   {"Vulva,VulvaPiercings": {others: "MasturbateTongue"}},
            "finger":   {"Breast,Butt,Vulva,VulvaPiercings": {all: "MasturbateHand"}},
        },
        MAP_ZONES: {
            "ItemBoots":          ["foot", "feet", "boot", "boots", "shoe", "shoes", "toes", "toenails", "sole", "soles", "heel", "heels"],
            "ItemFeet":           ["leg", "legs", "ankle", "ankles"],
            "ItemLegs":           ["hips", "hip", "thighs", "thigh"],
            "ItemVulva":          ["vulva", "pussy"],
            "ItemVulvaPiercings": ["clit", "clitoris"],
            "ItemButt":           ["butt", "ass"],
            "ItemPelvis":         ["tummy", "pelvis"],
            "ItemTorso":          ["body", "torso", "back", "ribs"],
            "ItemBreast":         ["breast", "breasts", "boob", "boobs", "booby", "boobie", "boobies", "tit", "tits", "titty", "tittie", "titties"],
            "ItemNipples":        ["nip", "nips", "nipple", "nipples"],
            "ItemHands":          ["hand", "hands", "fingers", "fingernails", "nails"],
            "ItemArms":           ["arm", "arms", "elbow", "elbows"],
            "ItemNeck":           ["neck"],
            "ItemMouth":          ["mouth", "lip", "lips", "teeth", "tongue", "gag", "cheek", "cheeks"],
            "ItemNose":           ["nose", "nostrils"],
            "ItemEars":           ["ear", "ears", "earlobe", "earlobes"],
            "ItemHead":           ["head", "face", "hair", "eyes", "forehead"],
        },
        BCME_TESTER_PATCHES: [
            [/^\^('s)?( )?/g, "^SourceCharacter$1\\s+"],
            [/([^\\])\$/g, "$1\\.?$$"],
        ],

        ensure: function(error, callback) {
            let result = callback.call(this)
            if (!result) throw error
            return(result)
        },
        calculate_maps: function() {
            this.DO_DATA = {verbs: {}, zones: {}}
            for (let [verbs, data] of Object.entries(this.MAP_ACTIONS)) {
                let unwound = {}
                for (let [zones, actions] of Object.entries(data)) {
                    let all = (actions.all) ? actions.all.split("|") : []
                    let processed = {self: (actions.self) ? actions.self.split("|").concat(all) : all, others: (actions.others) ? actions.others.split("|").concat(all) : all}
                    for (let zone of zones.split(",")) unwound[`Item${zone}`] = processed
                }
                for (let verb of verbs.split("|")) this.DO_DATA.verbs[verb] = unwound
            }
            for (let [ag, zones] of Object.entries(this.MAP_ZONES)) for (let zone of zones) this.DO_DATA.zones[zone] = ag
        },

        log: function(level, msg) {console[level]("MBCHC: " + String(msg))},
 

        cid2char: function(cid) {
            cid = Number.parseInt(cid)
            if (cid === window.Player.cid) return(window.Player)
            return(this.ensure(`character ${cid} not found in the room`, () => window.ChatRoomCharacter.find(c => c.cid === cid)))
        },
        pos2char: function(pos) {
            if (!this.in(pos, 0, window.ChatRoomCharacter.length - 1)) throw `invalid position ${pos}`
            return(window.ChatRoomCharacter[pos])
        },

        target2char: function(target) { // target should be lowcase
            let input = target
            if (this.empty(target)) return(window.Player)
            let int = Number.parseInt(target)
            target = String(target)
            let found = []
            if (target.startsWith("=")) return(this.cid2char(target.slice(1)))
            if (target.startsWith("<") || target.startsWith(">")) return(this.rel2char(target))
            if (!isNaN(int) && int.toString() === target) { // we got a number
                if (this.in(int, 0, 9)) return(this.pos2char(int))
                if (this.in(int, 11, 15)) return(this.pos2char(int - 11))
                if (this.in(int, 21, 25)) return(this.pos2char(int - 16))
                found.push(...window.ChatRoomCharacter.filter(c => c.cid.toString().indexOf(target) > -1))
            }
            if (target.startsWith("@")) target = target.slice(1)
            found.push(...window.ChatRoomCharacter.filter(c => c.Name.toLocaleLowerCase().indexOf(target) > -1))
            found.push(...window.ChatRoomCharacter.filter(c => c.Nickname && (c.Nickname.toLocaleLowerCase().indexOf(target) > -1)))
            let map = {}
            found.forEach(c => {if (!map[c.cid]) map[c.cid] = c} )
            found = Object.values(map)
            if (found.length < 1) throw `target "${input}": no match`
            if (found.length > 1) throw `target "${input}": multiple matches (${found.map(c => `${c.cid}|${c.Name}|${c.Nickname || c.Name}`).join(",")})`
            return(found[0])
        },
        char2targets: function(char) {
            let [result, cid] = [new Set(), char.cid.toString()]
            result.add(cid).add(`=${cid}`)
            this.tokenise(char.Name).forEach(t => {result.add(t); result.add(`@${t}`)})
            if (char.Nickname) this.tokenise(char.Nickname).forEach(t => {result.add(t); result.add(`@${t}`)})
            return result
        },

        send_activity: function(msg) {
            let dict = [{Tag: "MISSING PLAYER DIALOG: ", Text: "\u200C"}] // zero-width non-joiner, used to break up ligatures, does nothing here, but an empty string is a falsy value
            let cids = msg.match(this.RE_ACT_CIDS)
            if (cids) {
                msg = msg.replace(this.RE_ACT_CIDS, "")
                if (cids[1]) dict.push(this.cid2dict("Source", cids[1]))
                if (cids[2]) dict.push(this.cid2dict("Target", cids[2]), this.cid2dict("Destination", cids[2]))
            }
            window.ServerSend("ChatRoomChat", {Type: "Action", Content: msg, Dictionary: dict})
        },
        receive: function(data) {
            let char = this.cid2char(data.Sender)
            if (char.IsPlayer()) return true // this is our own message, sent back to us
            let payload = this.ensure("Empty message", () => data.Dictionary[0])
            switch (payload.type) {
            case "greetings": case "hello":
                char.MBCHC = payload.value
                if ("greetings" === payload.type) this.hello(char)
                break
            default: // if we don't know the type it may be from a newer version
            }
            return true
        },
        hello: function(char = null) {
            let payload = {type: "greetings", value: window.Player.MBCHC}
            if (char) payload.type = "hello"
            let message = {Content: "MBCHC", Type: "Hidden", Dictionary: [payload]}
            if (char) message.Target = char.cid
            window.ServerSend("ChatRoomChat", message)
        },

        player_enters_room: function() { // or if the mod is loaded while player is in the room
            this.hello()
        },

        update_char: function(char) {
            char.cid = char.MemberNumber // Club ID (shorter)
            char.dn = window.CharacterNickname(char) // DisplayName (shortcut)
            if (!char.MBCHC_LOCAL) char.MBCHC_LOCAL = {}
        },
        
        loader() {
            if (this.remove_load_hook) {
                this.remove_load_hook()
                delete this.remove_load_hook
            }
            if (this.LOADED) return
            // Calculated values
            const COMMANDS = [
                { Tag: "mbchc", Description: ": Utility functions (\"/mbchc\" for help)", Action: this.command_mbchc, AutoComplete: this.complete_mbchc },
                { Tag: "activity", Description: "[Message]: Send a custom activity (or \"@@Message\", or \"@Message\" as yourself)", Action: this.command_activity },
                { Tag: "do", Description: ": Do an activity, as if clicked on its button (\"/do\" for help)", Action: this.command_do, AutoComplete: this.complete_do },
            ]
            this.HIDE_ALL = this.HIDE_SPECIAL.concat(this.HIDE_BODY).concat(this.HIDE_CLOTHES).concat(this.HIDE_ITEMS)
            this.CommandsKey = CommandsKey /* eslint-disable-line no-undef */ // window.CommandsKey is undefined
            this.RE_ACTIVITY = RegExp(`^${this.CommandsKey}activity `)
            this.PREF_ACTIVITY = `${this.CommandsKey}activity `
            this.COMP_HINT = document.createElement("div")
            this.COMP_HINT.id = "mbchcCompHint"
            let css = document.createElement("style")
            css.type = "text/css"
            css.textContent = `
                #TextAreaChatLog .mbchc, #TextAreaChatLog .mbchc {
                    background-color: ${this.RGB_POLLY};
                }
                #TextAreaChatLog[data-colortheme="dark"] .mbchc, #TextAreaChatLog[data-colortheme="dark2"] .mbchc {
                    background-color: ${this.RGB_MUTE};
                }
                #${this.COMP_HINT.id} {
                    flex-flow: column wrap;
                    overflow: auto;
                    display: none;
                    background-color: ${this.RGB_POLLY};
                    color: black;
                }
                #${this.COMP_HINT.id}[data-colortheme="dark"], #${this.COMP_HINT.id}[data-colortheme="dark2"] {
                    background-color: ${this.RGB_MUTE};
                    color: white;
                }
                #${this.COMP_HINT.id} div {
                    margin: 0 0.5ex;
                }
            `
            document.head.appendChild(css)
            // Actions
            this.calculate_maps()
            window.Player.MBCHC = {VERSION: this.VERSION}
            window.CommandCombine(COMMANDS)
            // Hooks
            this.after("CharacterOnlineRefresh", char => this.update_char(char))
            this.after("ChatRoomReceiveSuitcaseMoney", () => {
              if (this.AUTOHACK_ENABLED && this.LAST_HACKED) {
                 window.CurrentCharacter = this.cid2char(this.LAST_HACKED)
                 this.LAST_HACKED = null
                 window.ChatRoomTryToTakeSuitcase()
              }
            })

            const DEV_WRENCH_LONG_IMG = "https://media.discordapp.net/attachments/788708813590495253/1111330175863504956/303ead185ade48af-1.png?width=40&height=40";
            const DEV_WRENCH_SHORT_IMG = "https://media.discordapp.net/attachments/781749229331939328/1091429368863137863/303ead185ade48af.png?width=60&height=60";
            const RGB_POLLY_IMG = "https://media.discordapp.net/attachments/781749229331939328/1090939652636151828/image_1_copy_2.png?width=60&height=58";
            const RGB_MUTE_IMG = "https://media.discordapp.net/attachments/781749229331939328/1090940026797424650/ae8a73b285184a91.png?width=60&height=58";
            const RGB_POLLY_LONG_IMG = "https://cdn.discordapp.com/attachments/788708813590495253/1111329108308279356/BCM1.png";
            const RGB_MUTE_LONG_IMG = "https://media.discordapp.net/attachments/788708813590495253/1111328053029765140/681a3848559ab63a_copy.png?width=28&height=26";
            const contributorNumbers = [112046, 113383, 112154];

            this.before("ChatRoomDrawCharacterOverlay", (C, CharX, CharY, Zoom, Pos) => {
              if (window.ChatRoomHideIconState < 1 && contributorNumbers.includes(C.MemberNumber) && C.MBCHC && window.DrawRect) {
                const iconImg = (ChatRoomCharacter.length <= 3) ? DEV_WRENCH_SHORT_IMG : DEV_WRENCH_LONG_IMG;
                window.DrawImage(iconImg, CharX + 175 * Zoom, CharY, 50 * Zoom, 50 * Zoom);
              } else if (window.ChatRoomHideIconState < 1 && C.MBCHC && window.DrawRect) {
                let iconImg;
                if (C.MBCHC.VERSION === window.Player.MBCHC.VERSION) {
                  iconImg = (contributorNumbers.includes(C.MemberNumber)) ? DEV_WRENCH_LONG_IMG : (ChatRoomCharacter.length <= 3) ? RGB_POLLY_IMG : RGB_POLLY_LONG_IMG;
                } else {
                  iconImg = (ChatRoomCharacter.length <= 3) ? RGB_MUTE_IMG : RGB_MUTE_LONG_IMG;
                }
                window.DrawImage(iconImg, CharX + 175 * Zoom, CharY, 50 * Zoom, 50 * Zoom);
              }
              if (window.ChatRoomHideIconState < 1 && C.MBCHC_LOCAL && "number" === typeof C.MBCHC_LOCAL.TZ) {
                const hours = new Date(window.CommonTime() + this.UTC_OFFSET + C.MBCHC_LOCAL.TZ * 60 * 60 * 1000).getHours();
                window.DrawTextFit(hours < 10 ? "0" + hours.toString() : hours.toString(), CharX + 200 * Zoom, CharY + 25 * Zoom, 46 * Zoom, "white", "black");
              }
            });
            // Chat room handlers
            window.ChatRoomRegisterMessageHandler({ Priority: -219, Description: "BCME room enter hook",
                Callback: (data, sender, msg, metadata) => { if (("Action" === data.Type) && ("ServerEnter" === data.Content) && (data.Sender === window.Player.cid)) this.player_enters_room() }
            })
            window.ChatRoomRegisterMessageHandler({ Priority: -219, Description: "BCME specific consumer",
                Callback: (data, sender, msg, metadata) => { if (("Hidden" === data.Type) && ("MBCHC" === data.Content)) return this.receive(data) }
            })
            window.ChatRoomRegisterMessageHandler({ Priority: -219, Description: "BCME autohack lookup",
                Callback: (data, sender, msg, metadata) => { if (("Hidden" === data.Type) && ("ReceiveSuitcaseMoney" === data.Content)) this.LAST_HACKED = data.Sender }
            })
            // footer
            this.LOADED = true
            this.log("info", `loaded version ${this.VERSION}`)
            if (window.GameVersion !== this.TARGET_VERSION) this.log("warn", `Game version doesn't match the target ("${this.TARGET_VERSION}"), beware of incompatibilities`) // TODO: betas are like R86Beta1; cheat?
            if (("Online" === window.CurrentModule) && ("ChatRoom" === window.CurrentScreen)) {
                window.ChatRoomCharacter.forEach(c => this.update_char(c))
                this.player_enters_room()
            }
        },
        preloader() {
            this.SDK = window.bcModSdk.registerMod({name:"BCME",fullName:"Bondage Club Mods Essentials",version:this.VERSION,repository:"https://bcm.site.live/bcme/"})
            this.before = (name, cb) => this.SDK.hookFunction(name, 0, (nextargs,next) => {try {cb?.(...nextargs)} catch (x) {console.error(x)} finally {return next(nextargs)}})
            this.after = (name, cb) => this.SDK.hookFunction(name, 0, (nextargs,next) => {const result = next(nextargs); try {cb?.(...nextargs)} catch (x) {console.error(x)} finally {return result}})
            if (window.CurrentModule && window.CurrentScreen && !("Character" === window.CurrentModule && "Login" === window.CurrentScreen)) return this.loader()
            this.remove_load_hook = this.before("AsylumGGTSSAddItems", () => this.loader())
        }
    } // MBCHC
    fetch("https://code.fleshless.org/mute/MBCHC/raw/branch/master/bondage-club-mod-sdk-1.1.0.js").then(r=>r.text()).then(r=>eval(r)).then(_=>window.BCME.preloader()).catch(x=>console.error(x)) /* eslint-disable-line no-eval */
})()
