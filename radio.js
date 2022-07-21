module.exports = {

    name: "Radio",
    section: "Audio Control",
    requiresAudioLibraries: true,
  
    //---------------------------------------------------------------------
    // Action Subtitle
    //
    // This function generates the subtitle displayed next to the name.
    //---------------------------------------------------------------------
  
    subtitle(data, presets) {
      return ``;
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
  
    meta: { version: "2.1.6", preciseCheck: true, author: 'Gotowka', authorUrl: 'https://github.com/Gotowka/autorskieakcje/blob/main/radio.js', downloadUrl: 'https://github.com/Gotowka/autorskieakcje/blob/main/radio.js' },
  
    //---------------------------------------------------------------------
    // Action Fields
    //
    // These are the fields for the action. These fields are customized
    // by creating elements with corresponding IDs in the HTML. These
    // are also the names of the fields stored in the action's JSON data.
    //---------------------------------------------------------------------
  
    fields: ["channel", "varName", "type"],
  
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
  <voice-channel-input dropdownLabel="Voice Channel" selectId="channel" variableContainerId="varNameContainer" variableInputId="varName" selectWidth="45%" variableInputWidth="50%"></voice-channel-input>
      
      <br><br><br>
  
      <span class="dbminputlabel">Type</span><br>
      <select id="type" class="round" style="width: 45%;">
            <option value="0">RMFFM</option>
            <option value="1">RMFMAXXX</option>
            <option value="2">RMFDANCE</option>
            <option value="3">RMFCLUB</option>
            <option value="4">RMFFITNESS</option>
            <option value="5">RMFHOP</option>
            <option value="6">RMFPARTY</option>
            <option value="7">RMFPRACA</option>
            <option value="8">RMFDISCO</option>
            <option value="9">RMFHOT</option>
            <option value="10">RMFPOLODISCO</option>
            <option value="11">RMFPRZEBOJE</option>
            <option value="12">RMFTOP</option>
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
        const { interaction } = cache
        const data = cache.actions[cache.index];
        const Audio = this.getDBM().Audio;
        const channel = await this.getVoiceChannelFromData(data.channel, data.varName, cache);
        if (!interaction.member.voice.channel) return interaction.reply("Błąd: Musisz być na kanale by użyć tej komendy!")
        let url
        const type = parseInt(data.type)
        switch(type) {
        case 0:
            url = 'https://rs6-krk2.rmfstream.pl/RMFFM48'
            break;
        case 1:
            url = 'https://rs6-krk2.rmfstream.pl/RMFMAXXX48'
            break;
        case 2:
            url = 'https://rs202-krk-cyfronet.rmfstream.pl/DANCE'
            break;
        case 3:
            url = 'https://rs202-krk-cyfronet.rmfstream.pl/CLUB'
            break;
        case 4:
            url = 'https://rs202-krk-cyfronet.rmfstream.pl/FITNESS'
            break;
        case 5:
            url = 'https://rs202-krk-cyfronet.rmfstream.pl/HOPBEC'
            break;
        case 6:
            url = 'https://rs202-krk-cyfronet.rmfstream.pl/PARTY'
            break;
        case 7:
            url = 'https://rs202-krk-cyfronet.rmfstream.pl/WPRACY'
            break;
        case 8:
            url = 'https://rs202-krk-cyfronet.rmfstream.pl/DISCO'
            break;
        case 9:
            url = 'https://rs202-krk-cyfronet.rmfstream.pl/HOTNEW'
            break;
        case 10:
            url = 'https://rs202-krk-cyfronet.rmfstream.pl/DISCOPOLO'
            break;
        case 11:
            url = 'https://rs203-krk.rmfstream.pl/SPRZEBOJE'
            break;
        case 12:
            url = 'https://rs202-krk-cyfronet.rmfstream.pl/TOP5DANCE'
            break;
        default:
        break;
        }
        Audio.connectToVoice(channel);
        const options = {};
        options.seek = '0'
        options.volume = parseInt('100') / 100
        options.bitrate = '1000'

          const info = ["url", options, url];
          Audio.addAudio(info, interaction.guild, false);

  
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