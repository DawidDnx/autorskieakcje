module.exports = {
  //---------------------------------------------------------------------
  // Action Name
  //
  // This is the name of the action displayed in the editor.
  //---------------------------------------------------------------------

  name: "Graj",

  //---------------------------------------------------------------------
  // Action Section
  //
  // This is the section the action will fall into.
  //---------------------------------------------------------------------

  section: "Audio Control",

  //---------------------------------------------------------------------
  // Action Subtitle
  //
  // This function generates the subtitle displayed next to the name.
  //---------------------------------------------------------------------

  subtitle(data, presets) {
    return `Muzyczka: ${data.url}`;
  },

  //---------------------------------------------------------------------
  // Action Meta Data
  //
  // Helps check for updates and provides info if a custom mod.
  // If this is a third-party mod, please set "author" and "authorUrl".
  //
  // It's highly recommended "preciseCheck" is set to false for third-party mods.
  // This will make it so the patch version (0.0.X) is not checked.
  //---------------------------------------------------------------------

  meta: { version: "2.1.6", preciseCheck: true, author: 'Gotowka', authorUrl: 'https://github.com/Gotowka/autorskieakcje/blob/main/play_all.js', downloadUrl: 'https://github.com/Gotowka/autorskieakcje/blob/main/play_all.js' },

  //---------------------------------------------------------------------
  // Action Fields
  //
  // These are the fields for the action. These fields are customized
  // by creating elements with corresponding IDs in the HTML. These
  // are also the names of the fields stored in the action's JSON data.
  //---------------------------------------------------------------------

  fields: ["url", "type"],

  //---------------------------------------------------------------------
  // Command HTML
  //
  // This function returns a string containing the HTML used for
  // editing actions.
  //
  // The "isEvent" parameter will be true if this action is being used
  // for an event. Due to their nature, events lack certain information,
  // so edit the HTML to reflect this.
  //---------------------------------------------------------------------

  html(isEvent, data) {
    return `
    <div>
    <p>
        <u>Mod Info:</u><br>
        Created by money#6283
    </p>
</div><br>
<div>
    <span class="dbminputlabel">YouTube</span><br>
    <input id="url" class="round" type="text" placeholder="Podaj link albo tytul">
    
    <br>

    <span class="dbminputlabel">Type</span><br>
    <select id="type" class="round">
          <option value="0">Link</option>
          <option value="1">Tytul</option>
    </select>
</div>`;
  },

  //---------------------------------------------------------------------
  // Action Editor Init Code
  //
  // When the HTML is first applied to the action editor, this code
  // is also run. This helps add modifications or setup reactionary
  // functions for the DOM elements.
  //---------------------------------------------------------------------

  init() {},

  //---------------------------------------------------------------------
  // Action Bot Function
  //
  // This is the function for the action within the Bot's Action class.
  // Keep in mind event calls won't have access to the "msg" parameter,
  // so be sure to provide checks for variable existence.
  //---------------------------------------------------------------------

  async action(cache) {
    const data = cache.actions[cache.index];
    const { QueryType } = require("discord-player")
    const { musicplayer } = require('../bot.js')
    if (!musicplayer) return console.log(`BŁĄD - Zaaktualizuj plik bot.js, https://github.com/Gotowka/autorskieakcje/blob/main/bot/bot.js`);
    const type = data.type
    const { interaction } = cache
    const url = this.evalMessage(data.url, cache)

    if (!interaction.member.voice.channel) return interaction.editReply("Błąd: Musisz być na kanale by użyć tej komendy!")
    const queue = musicplayer.createQueue(interaction.guild)
    if (!queue.connection) queue.connect(interaction.member.voice.channel)
let song
    if (type === '0') {
      const result = await musicplayer.search(url, {
          requestedBy: interaction.member,
          searchEngine: QueryType.YOUTUBE_VIDEO
      })
      if (result.tracks.length === 0) interaction.editReply('Błąd nie znaleziono piosenki')
      
      song = result.tracks[0]
      await queue.addTrack(song)
      if (queue.playing) await queue.play()
      this.storeValue(song.title, 1, 'name', cache);
      this.storeValue(song.url, 1, 'url', cache);
      this.storeValue(song.author, 1, 'author', cache);
      this.storeValue(song.views, 1, 'views', cache);
      this.storeValue(song.thumbnail, 1, 'thumbnail', cache);
      this.storeValue(song.duration, 1, 'duration', cache);
  };
  
   if (type === '1') {
      const result = await musicplayer.search(url, {
          requestedBy: interaction.member,
          searchEngine: QueryType.AUTO
      })
      if (result.tracks.length === 0) interaction.editReply('Błąd nie znaleziono piosenki')
      
      song = result.tracks[0]
      await queue.addTrack(song)
      if (!queue.playing) await queue.play()
      this.storeValue(song.title, 1, 'name', cache);
      this.storeValue(song.url, 1, 'url', cache);
      this.storeValue(song.author, 1, 'author', cache);
      this.storeValue(song.views, 1, 'views', cache);
      this.storeValue(song.thumbnail, 1, 'thumbnail', cache);
      this.storeValue(song.duration, 1, 'duration', cache);
   };
    this.callNextAction(cache);
  },

  //---------------------------------------------------------------------
  // Action Bot Mod
  //
  // Upon initialization of the bot, this code is run. Using the bot's
  // DBM namespace, one can add/modify existing functions if necessary.
  // In order to reduce conflicts between mods, be sure to alias
  // functions you wish to overwrite.
  //---------------------------------------------------------------------

  mod() {},
};