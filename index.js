const Discord = require("discord.js");
const  client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });

//Prefisso per TUTTI i comandi
const prefix = "!";


//Il bot va on
client.on("ready", () => {
    console.log("BOT ONLINE!");
})


client.login(process.env.token);


//Welcome Message

client.on("guildMemberAdd", member => {
    var canale = client.channels.cache.get("861186596594253837")
    canale.send(`:flag_it: **BENVENUTO** :flag_it:
    🤙 **Benvenuto ${member.toString()}** nel Server Discord della Fazione TwoSicilies!
    📜 Ricordati di **leggere le regole nel canale ${"<#884829604714528818>"}**
    💯 Sei il **${member.guild.memberCount}° membro** del Server TwoSicilies!
    🧮 Per sapere **tutti i comandi** che ha questo bot **fai !help**
    ✨ **Divertiti nel nostro Server Discord!**
    -----------------------------------------------------------------------------------------------
:england: **WELCOME** :england:
    🤙 **Welcome ${member.toString()}** in this Server Discord of TwoSicilies Faction!
    📜 Remember of **read the rules in ${"<#884829604714528818>"}**
    💯 You are the **${member.guild.memberCount}° member** of TwoSicilies Server!
    🧮 For know **all commands** of this bot **do !help**
    ✨ **Have fun in ours Discord Server!**`)

    //Member Count

    //Quando una persona entra nel server
    var canale = client.channels.cache.get("927508214973620284")
    canale.setName("🤸│Utenti: " + member.guild.memberCount)
    //Quando una persona esce dal server
    client.on("guildMemberRemove", member => { 
    var canale = client.channels.cache.get("927508214973620284r")
        canale.setName("🤸│Utenti: " + member.guild.memberCount)
    });
})

//Annuncio da modificare ogni volta !Annuncio

client.on("message", (message) => {      //NON CAMBIARE NIENTE
    if(message.content.startsWith(`${prefix}Annuncio`) || message.content.startsWith(`${prefix}annuncio`)){
        if(!message.member.permissions.has("ADMINISTRATOR")){
            message.channel.send(`No permission for execute this command.`).then(msg => {
                message.delete({ timeout: 1000 })
                msg.delete({ timeout: 3000 })
            })
            return;
        } 

    if(message.member.permissions.has("ADMINISTRATOR")){   //NON CAMBIARE NIENTE APPARTE IL MESSAGGIO
            message.channel.send(`**ANNUNCIO // ANNOUNCEMENT**
:flag_it: | La fazione TwoSicilies **è stata bannata per inattività**, per tanto, essa **uscirà definitivamente dall'Unione europea** *(EU)*
:england: | The TwoSicilies Faction **has been banned for inactivity**, therefore, it **will leave the European Union permanently** *(EU)*
${927498618569633804}`).then(msg => {
    msg.react("😭")
    message.delete({ timeout: 1000 })
})
    }
}

    if(message.content.startsWith(`${prefix}ruoli`)){
        var embedscegliruoli = new Discord.MessageEmbed()
        .setTitle("**Alert Roles**")
        .setColor("#FF0000")
        .setDescription(":flag_it: Clicca sulle seguenti reazioni, e in base ad essi, ti arriverà una notifica ogni volta che ci sarà un annuncio.                                                        :england: Click on the following reactions, and based on them, you will be notified every time there is an announcement.")
        .addField("✨ **| Annunci, Announcements**", ":flag_it: Clicca sulla reazione **per ricevere una notifica** ogni qualvolta uscirà un annuncio.   :england: Click on the reaction **to be notified** whenever an announcement is released.", true)
        .addField("🌍 **| Eventi, Events**", ":flag_it: Clicca sulla reazione **per ricevere una notifica** ogni qualvolta ci sarà un evento.   :england: Click on the reaction **to be notified** whenever an event is released.", true)
        .addField("🧰 **| Changelogs**", ":flag_it: Clicca sulla reazione **per ricevere una notifica** ogni qualvolta ci sarà un changelog.   :england: Click on the reaction **to be notified** whenever an changelog is released.", true)
        .addField("🔱 **| Promozioni, Promotions**", ":flag_it: Clicca sulla reazione **per ricevere una notifica** ogni qualvolta ci sarà una promozione.   :england: Click on the reaction **to be notified** whenever an promotion is released.", true)
        .setFooter("TwoSicilies Bot", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Coat_of_arms_of_the_Kingdom_of_the_Two_Sicilies.svg/776px-Coat_of_arms_of_the_Kingdom_of_the_Two_Sicilies.svg.png")
        .setAuthor("TwoSicilies Bot", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Coat_of_arms_of_the_Kingdom_of_the_Two_Sicilies.svg/776px-Coat_of_arms_of_the_Kingdom_of_the_Two_Sicilies.svg.png")
        .setTimestamp()

        message.channel.send(embedscegliruoli).then(msg => {
            msg.react("✨");
            msg.react("🌍");
            msg.react("🧰");
            msg.react("🔱");
        })
    }
})

//Quando una persona clicca sulla reazione riceve il ruolo...

client.on("messageReactionAdd", async function (messageReaction, user) {
    if(user.bot) return

    if (messageReaction.message.partial) await messageReaction.message.fetch();

    if(messageReaction.message.id == "927497597126574121") {
        var utente = messageReaction.message.guild.members.cache.find(x => x.id == user.id);
        if(messageReaction._emoji.name == "✨") {
            utente.roles.add("927498618569633804")
        }
        if(messageReaction._emoji.name == "🌍") {
            utente.roles.add("927499039824547900")
        }
        if(messageReaction._emoji.name == "🧰") {
            utente.roles.add("927498798106820659")
        }
        if(messageReaction._emoji.name == "🔱") {
            utente.roles.add("927498787549745243")
        }
    } 
})

//...Se invece riclicca sulla reazione lo toglie

client.on("messageReactionRemove", async function (messageReaction, user) {
    if(user.bot) return

    if (messageReaction.message.partial) await messageReaction.message.fetch();

    if(messageReaction.message.id == "927497597126574121") {
        var utente = messageReaction.message.guild.members.cache.find(x => x.id == user.id);
        if(messageReaction._emoji.name == "✨") {
            utente.roles.remove("927498618569633804")
        }
        if(messageReaction._emoji.name == "🌍") {
            utente.roles.remove("927499039824547900")
        }
        if(messageReaction._emoji.name == "🧰") {
            utente.roles.remove("927498798106820659")
        }
        if(messageReaction._emoji.name == "🔱") {
            utente.roles.remove("927498787549745243")
        }
    } 
})
//Comando !help
client.on("message", (message) => {
    if(message.content.startsWith(`${prefix}help`) || message.content.startsWith(`${prefix}Help`)){

        var EmbedScegliLinguaHelp = new Discord.MessageEmbed()
        .setTimestamp()
        .setTitle("**SCEGLI UNA LINGUA/CHOOSE A LENGUAGE**")
        .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Coat_of_arms_of_the_Kingdom_of_the_Two_Sicilies.svg/776px-Coat_of_arms_of_the_Kingdom_of_the_Two_Sicilies.svg.png")
        .setDescription("Scegli una lingua. | Choose a lenguage.")
        .addField("🟢 **| ITALIANO**", "Scegli la lingua italiano cliccando sulla reazione", true)
        .addField("🔴 **| ENGLISH**", "Choose the english lenguage clicking on the reaction", true)
        .setAuthor("TwoSicilies Bot", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Coat_of_arms_of_the_Kingdom_of_the_Two_Sicilies.svg/776px-Coat_of_arms_of_the_Kingdom_of_the_Two_Sicilies.svg.png")
        .setColor("#FFD700")
        .setFooter("TwoSicilies Bot", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Coat_of_arms_of_the_Kingdom_of_the_Two_Sicilies.svg/776px-Coat_of_arms_of_the_Kingdom_of_the_Two_Sicilies.svg.png")

        var EmbedApriMenùHelpItaliano =  new Discord.MessageEmbed()
        .setColor("#0000FF")
        .setTimestamp()
        .setTitle("**DOVE VUOI APRIRE IL MENÙ DI AIUTO?**")
        .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Coat_of_arms_of_the_Kingdom_of_the_Two_Sicilies.svg/776px-Coat_of_arms_of_the_Kingdom_of_the_Two_Sicilies.svg.png")
        .setDescription("Apri il menù di aiuto dove vuoi cliccando sulla rispettiva reazione.")
        .addField("⏬ **| APRI QUI**", "Apri il menù qui cliccando sulla reazione", true)
        .addField("⏫ **| IN PRIVATO**", "Apri il menù in privato cliccando sulla reazione", true)
        .setAuthor("TwoSicilies Bot", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Coat_of_arms_of_the_Kingdom_of_the_Two_Sicilies.svg/776px-Coat_of_arms_of_the_Kingdom_of_the_Two_Sicilies.svg.png")
        .setFooter("TwoSicilies Bot", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Coat_of_arms_of_the_Kingdom_of_the_Two_Sicilies.svg/776px-Coat_of_arms_of_the_Kingdom_of_the_Two_Sicilies.svg.png")

        var EmbedMenùHelpInglese =  new Discord.MessageEmbed()
        .setColor("#0000FF")
        .setTimestamp()
        .setTitle("**ALL BOT**")
        .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Coat_of_arms_of_the_Kingdom_of_the_Two_Sicilies.svg/776px-Coat_of_arms_of_the_Kingdom_of_the_Two_Sicilies.svg.png")
        .setDescription("Here are all bots with all commands, click on a reaction if you want to know the various commands of that bot.")
        .addField("⏫ **| OPEN HERE**", "Open the menù here clicking on the reaction", true)
        .addField("⏬ **| OPEN IN PRIVATE (DM)**", "Open the menù in private (dm) clicking on the reaction", true)
        .setAuthor("TwoSicilies Bot", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Coat_of_arms_of_the_Kingdom_of_the_Two_Sicilies.svg/776px-Coat_of_arms_of_the_Kingdom_of_the_Two_Sicilies.svg.png")
        .setFooter("TwoSicilies Bot", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Coat_of_arms_of_the_Kingdom_of_the_Two_Sicilies.svg/776px-Coat_of_arms_of_the_Kingdom_of_the_Two_Sicilies.svg.png")

        message.channel.send(EmbedScegliLinguaHelp)
        .then(messaggio => {
            messaggio.react("🟢");
            messaggio.react("🔴");

            var filtropersceglierelinguahelp = (reaction, user) => ["🟢", "🔴"].includes(reaction.emoji.name) && user.id == message.author.id;

            messaggio.awaitReactions(filtropersceglierelinguahelp, { max: 1, time: 10000 })
            .then(collected => {
                var reazione = collected.first().emoji.name;
                if(reazione == "🟢"){
                    message.channel.send(EmbedApriMenùHelpItaliano)
                }
                
                if(reazione == "🔴"){
                    message.channel.send(EmbedApriMenùHelpInglese)
                }
            })
        })
    }

    //Il bot dice che non risponderà ai comandi !Manutenzione

    if(message.member.roles.cache.has("906947995734511668")){
        if(message.content.startsWith(`${prefix}Manutenzione`) || message.content.startsWith(`${prefix}manutenzione`)){

            var ManutenzioneEmbed = new Discord.MessageEmbed()
            .setTitle("MANUTENZIONE/MAINTENANCE")
            .setTimestamp()
            .setThumbnail("https://www.pinclipart.com/picdir/middle/1-13908_clipart-wrench-and-hammer-clipart-png-download.png")
            .addField(":flag_it: | **ATTENZIONE**", "Il bot **è andato in manutenzione** e per tanto **non potrà rispondere** ai vari comandi", true)
            .addField(":england: | **Attention**", "The bot **is currently in maintence** and therefore **he can't respond** to various commands", true)
            .setAuthor("TwoSicilies Bot", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Coat_of_arms_of_the_Kingdom_of_the_Two_Sicilies.svg/776px-Coat_of_arms_of_the_Kingdom_of_the_Two_Sicilies.svg.png")
            .setFooter("TwoSicilies Bot", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Coat_of_arms_of_the_Kingdom_of_the_Two_Sicilies.svg/776px-Coat_of_arms_of_the_Kingdom_of_the_Two_Sicilies.svg.png")

            message.channel.send(ManutenzioneEmbed).then(message => {
                message.delete({ timeout: 1000})
            })
        }
    }

    //Eliminare un Messaggio !Clear <count>

    if(message.member.roles.cache.has("906934331824566354") || message.member.roles.cache.has("909437027165024286") || message.member.roles.cache.has("861186863015919666") || message.member.roles.cache.has("906947995734511668")){
        if(message.content.startsWith(`${prefix}clear`) || message.content.startsWith(`${prefix}Clear`)){
            if(!message.member.hasPermission("MANAGE_MESSAGES")){
                message.channel.send(`:flag_it: | **Non hai il permesso** per cancellare i messaggi!
:england: | **You don't have permission** for delete messages!`).then(msg => {
    message.delete({ timeout: 10000 });
    msg.delete({ timeout: 10000 })
})
                return;
            } 
                var count = message.content.slice(7)

                count = parseInt(count);
            if (!count) {
                message.channel.send(`:flag_it: | Perfavore inserisci un **numero valido!**
:england: | Please enter a **valid number!**`).then(msg => {
    message.delete({ timeout: 12000 });
    msg.delete({ timeout: 12000 })
})
                return
            }
            message.channel.bulkDelete(count, true)
            message.channel.send(`:flag_it: | **${count} messaggi eliminati** con successo!
:england: | **${count} message** are successifully **deleted!**`).then(msg => {
    msg.delete({ timeout: 7000 })
})
        }
    }

    //Bannare PERMANENTEMENTE un Utente !Ban <Utente>

    if(message.content.startsWith(`${prefix}ban`) || message.content.startsWith(`${prefix}Ban`)){
        var utenteKick = message.mentions.members.first();
        if(!message.member.hasPermission("BAN_MEMBERS")){
            message.channel.send(`:flag_it: | **Non hai il permesso** per bannare questo utente!
:england: | **You don't have permission** for ban this player!`).then(msg => {
            message.delete({ timeout: 5000 })
            msg.delete({ timeout: 5000 })
                return;
            })
        }

        if (!utenteKick) {
            message.channel.send(`:flag_it: | **Non hai menzionato** nessun utente.
:england: | **You haven't mentioned** any user.`).then(msg => {
            msg.delete({ timeout: 7000 })
            message.delete({ timeout: 7000 })
        })
            return;
        }

        utenteKick.ban()
        .then(() => message.channel.send("**<@" + utenteKick + "> banned from this server.**")).then(message => {
            message.delete({ timeout: 5000 })
        })
    }

    //Kiccare o Espellere un Utente !Kick <Utente> ATTENZIONE: Potrà rientrare nel server.

    if(message.content.startsWith(`${prefix}Kick`) || message.content.startsWith(`${prefix}kick`)){
        var utenteBan = message.mentions.members.first();
        if(!message.member.hasPermission("KICK_MEMBERS")){
            message.channel.send(`:flag_it: | **Non hai il permesso** per kiccare questo utente!
:england: | **You don't have permission** for kick this player!`).then(msg => {
            msg.delete({ timeout: 8000})
            message.delete({ timeout: 8000})
        })
            return;
        }

        if(!utenteBan) {
            message.channel.send(`:flag_it: | **Non hai menzionato** nessun utente.
:england: | **You haven't mentioned** any user.`).then(msg => {
            msg.delete({ timeout: 7000 })
            message.delete({ timeout: 7000 })
        })
            return;
        }
        
        utenteBan.kick()
        .then(() => message.channel.send("**<@" + utenteBan + "> has been kick from this server.**"))
    }

    //Vedere il codice del Bot su GitHub !Github

    if(message.content.startsWith(`${prefix}Github`) || message.content.startsWith(`${prefix}github`)){
        var GithubHost = new Discord.MessageEmbed()
        .setTimestamp()
        .setTitle("**GITHUB CODES**")
        .setThumbnail("https://image.pngaaa.com/822/1100822-middle.png")
        .addField(":TwoSiciliesFlag: **TwoSicilies Bot**", "https://github.com/Xxdome/TwoSicilies-Bot" )
        .setColor("#ffffff")
        .setAuthor("TwoSicilies Bot", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Coat_of_arms_of_the_Kingdom_of_the_Two_Sicilies.svg/776px-Coat_of_arms_of_the_Kingdom_of_the_Two_Sicilies.svg.png")
        .setFooter("TwoSicilies Bot", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Coat_of_arms_of_the_Kingdom_of_the_Two_Sicilies.svg/776px-Coat_of_arms_of_the_Kingdom_of_the_Two_Sicilies.svg.png")

        message.channel.send(GithubHost)
    }

})
