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
        const r1 = data.source
        const r2 = r1.replace('1', 'RMF')
        const r3 = r2.replace('2', 'ESKA')
        const radio = r3.replace('3', 'OPEN FM')
      return `Posłuchaj radia ${radio}`;
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
  
    meta: { version: "2.1.6", preciseCheck: true, author: 'Gotowka - Hit Stary', authorUrl: 'https://github.com/Gotowka/autorskieakcje/blob/main/radio.js', downloadUrl: 'https://github.com/Gotowka/autorskieakcje/blob/main/radio.js' },
  
    //---------------------------------------------------------------------
    // Action Fields
    //
    // These are the fields for the action. These fields are customized
    // by creating elements with corresponding IDs in the HTML. These
    // are also the names of the fields stored in the action's JSON data.
    //---------------------------------------------------------------------
  
    fields: ["channel", "varName", "source", "rmf", "type", "eska", "type2", "openfm", "type3"],
  
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
  
      <span class="dbminputlabel">Radio</span><br>
        <select id="source" class="round" style="width: 45%" onchange="glob.onChange1(this)">
                <option value="1">RMF</option>
                <option value="2">ESKA</opion>
                <option value="3">OPEN FM</option>
        </select>

      <br>
      <span id="rmf" style="display: none" class="dbminputlabel">Stacja RMF</span><br>
      <select id="type" class="round" style="display: none">
            <option value="0">RMF FM</option>
            <option value="1">RMF MAXXX</option>
            <option value="2">RMF DANCE</option>
            <option value="3">RMF CLUB</option>
            <option value="4">RM FFITNESS</option>
            <option value="5">RMF HOP</option>
            <option value="6">RMF PARTY</option>
            <option value="7">RMF PRACA</option>
            <option value="8">RMF DISCO</option>
            <option value="9">RMF HOT</option>
            <option value="10">RMF POLODISCO</option>
            <option value="11">RMF PRZEBOJE</option>
            <option value="12">RMF TOP</option>
      </select>
      <span id="eska" class="dbminputlabel">Stacja ESKA</span><br>
      <select id="type2" class="round" style="display: none">
            <option value="13">Eska Grudziadz</option>
            <option value="14">Vox Fm</option>
            <option value="15">Eska Warszawa</option>
            <option value="16">Eska Rock</option>
            <option value="17">Eska Malopolska Zakopane</option>
            <option value="18">Eska Wroclaw</option>
            <option value="19">Eska Poznan</option>
            <option value="20">Eska Impreska</option>
            <option value="21">Eska Rzeszow</option>
            <option value="22">Eska Kraków</option>
            <option value="23">Eska Goraca 20</option>
            <option value="24">Radio Plus</option>
            <option value="25">Radio Plus Krakow</option>
            <option value="26">Eska Białystok</option>
            <option value="27">Eska Trojmiasto</option>
            <option value="28">Eska Slask</option>
            <option value="29">Eska Do Pracy</option>
            <option value="30">Eska Rock Polska</option>
            <option value="31">Eska Lodz</option>
            <option value="32">Disco Polo Top40</option>
            <option value="33">Supernova Warszawa</option>
            <option value="34">Eska Szczecin</option>
            <option value="35">Eska Bydgoszcz</option>
            <option value="36">Radio Plus Lublin</option>
            <option value="37">Vox Impreza W Rytmie Hitow</option>
            <option value="38">Vox 90</option>
            <option value="39">Eska Opole</option>
            <option value="40">Vox Bestlista</option>
            <option value="41">Eska Torun</option>
            <option value="42">Eska Lublin</option>
            <option value="43">Eska Olsztyn</option>
            <option value="44">Top Disco Polo</option>
            <option value="45">Eska Kalisz Ostrow</option>
            <option value="46">Eska Tarnow</option>
            <option value="47">Eska Gorzow</option>
            <option value="48">Eska Zamosc</option>
            <option value="49">Eska Radom</option>
            <option value="50">Eska Koszalin</option>
            <option value="51">Eska Pila</option>
            <option value="52">Eska Elblag</option>
            <option value="53">Eska Beskidy</option>
            <option value="54">Radio Plus Koszalin</option>
            <option value="55">Eska Belchatow</option>
            <option value="56">Radio Plus Lodz</option>
            <option value="57">Eska Zielona Gora</option>
            <option value="58">Eska Siedlce</option>
            <option value="59">Eska Kielce</option>
            <option value="60">Eska Starachowice</option>
            <option value="61">Eska Leszno</option>
            <option value="62">Eska Plock</option>
            <option value="63">Radio Plus Szczecin</option>
            <option value="64">Eska Przemysl</option>
            <option value="65">Eska Zary</option>
            <option value="66">Eska Ilawa</option>
            <option value="67">Radio Plus Olsztyn</option>
            <option value="68">Eska Ostrzeszow</option>
            <option value="69">Disco Party</option>
            <option value="70">Eska Szczecinek</option>
            <option value="71">Radio Plus Podhale</option>
            <option value="72">Eska Lomza</option>
            <option value="73">New Pop</option>
            <option value="74">Disco Polo Top</option>
            <option value="75">Eska Krasnik</option>
            <option value="76">Vox Fm Poznan</option>
            <option value="77">Gwiazdy Dance</option>
            <option value="78">Rock Relaks</option>
            <option value="79">New Dance</option>
            <option value="80">Eska Rap 20</option>
            <option value="81">Pop Top 40</option>
            <option value="82">Rock Do Pracy</option>
            <option value="83">Eska Braniewo</option>
            <option value="84">Dance Top 40</option>
            <option value="85">Muzyka Do Pracy</option>
            <option value="86">Special Set</option>
            <option value="87">Milosc W Rytmie Rock</option>
            <option value="88">Supernova Rzeszow</option>
            <option value="89">Supernova Gdansk</option>
            <option value="90">Supernova Opole</option>
            <option value="91">Vox Fm Radom</option>
            <option value="92">Radio Go</option>
            <option value="93">Vox Fm Gorzow</option>
            <option value="94">Supernova Krakow</option>
            <option value="95">Supernova Lodz</option>
            <option value="96">Z Wami Fm</option>
            <option value="97">Supernova Wroclaw</option>
            <option value="98">Supernova Torun</option>
            <option value="99">Supernova Trzebnica</option>
            <option value="100">Supernova Konin</option>

      </select>
      <span id="openfm" class="dbminputlabel">Stacja Open Fm</span><br>
      <select id="type3" class="round" style="display: none">
            <option value="31">Soon</option>
            <option value="32">Soon</option>
            

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
    init() {
        const { document, glob } = this;
        glob.onChange1 = function onChange1(event) {
        const value = parseInt(event.value, 10);
        const eska = document.getElementById('type2');
        const rmf = document.getElementById('type')
        const rmf1 = document.getElementById('rmf')
        const eska1 = document.getElementById('eska')
        const openfm1 = document.getElementById('openfm')
        const openfm = document.getElementById('type3')
    
        if (value === 1) {
            rmf.style.display = null
            rmf.style.width = '45%'
            rmf1.style.display = null
            eska.style.display = 'none'
            eska1.style.display = 'none'
            openfm1.style.display = 'none'
            openfm.style.display = 'none'
        } else if (value === 2) {
            eska.style.display = null
            eska.style.width = '45%'
            eska1.style.display = null
            rmf1.style.display = 'none'
            rmf.style.display = 'none'
            openfm1.style.display = 'none'
            openfm.style.display = 'none'
        } else if (value === 3) {
            eska.style.display = 'none'
            eska1.style.display = 'none'
            openfm.style.width = '45%'
            rmf1.style.display = 'none'
            rmf.style.display = 'none'
            openfm1.style.display = null
            openfm.style.display = null
        }
        };
        glob.onChange1(document.getElementById('source'));
    },

  
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
        const check = data.source
        const type = parseInt(data.type)
        const type2 = parseInt(data.type2)
        const type3 = parseInt(data.type3)
        await Audio.connectToVoice(channel);
        const options = {};
        if (check === '1') { 
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
    }
    if (check === '2') {
        switch(type2) {
        case 13:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-grudziadz'
                break;
        case 14:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/vox-fm'
                break;
        case 15:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-warszawa'
                break;
        case 16:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-rock'
                break;
        case 17:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-malopolska-zakopane'
                break;
        case 18:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-wroclaw'
                break;
        case 19:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-poznan'
                break;
         case 20:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-impreska'
                break;
         case 21:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-rzeszow'
                break;
        case 22:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-krakow'
                break;
        case 23:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-goraca-20'
                break;
         
        case 24:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/radio-plus'
                break;
         case 25:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/radio-plus-krakow'
                break;
        case 26:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-bialystok'
                break;
        case 27:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-trojmiasto'
                break;
         
      case 28:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-slask'
                break;
         case 29:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-do-pracy'
                break;
        case 30:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-rock-polska'
                break;
        case 31:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-lodz'
                break;
         
        case 32:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/disco-polo-top40'
                break;
         case 33:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/supernova-warszawa'
                break;
        case 34:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-szczecin'
                break;
        case 35:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-bydgoszcz'
                break;
         
        case 36:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/radio-plus-lublin'
                break;
         case 37:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/vox-impreza-w-rytmie-hitow'
                break;
        case 38:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/vox-90'
                break;
        case 39:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-opole'
                break;
        case 40:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/vox-bestlista'
                break;
         case 41:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-torun'
                break;
        case 42:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-lublin'
                break;
        case 43:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-olsztyn'
                break;
         case 44:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/top-disco-polo'
                break;     
        
        case 45:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-kalisz-ostrow'
                break;
            
        case 46:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-tarnow'
                break;
        
        case 47:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-gorzow'
                break;
         
        case 48:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-zamosc'
                break;
         
        case 49:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-radom'
                break;   
        
        case 50:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-koszalin'
                break;
         
        case 51:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-pila'
                break;
        case 52:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-elblag'
                break;
         case 53:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-beskidy'
                break;
         case 54:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/radio-plus-koszalin'
                break;
         case 55:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-belchatow'
                break;
         case 56:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/radio-plus-lodz'
                break;
         case 57:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-zielona-gora'
                break;
         case 58:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-siedlce'
                break;
         case 59:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-starachowice'
                break;
         case 60:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-kielce'
                break;
         case 61:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-starachowice'
                break;
         case 62:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-leszno'
                break;
         case 63:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-plock'
                break;
         case 64:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/radio-plus-szczecin'
                break;
         case 65:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-przemysl'
                break;
         case 66:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-zary'
                break;
         case 67:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-ilawa'
                break;
         case 68:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/radio-plus-olsztyn'
                break;
         case 69:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-ostrzeszow'
                break;
         case 70:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/disco-party'
                break;
         case 71:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-szczecinek'
                break;
         case 72:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/radio-plus-podhale'
                break;
         case 73:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-lomza'
                break;
         case 74:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/new-pop'
                break;
         case 75:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/disco-polo-top'
                break;
         case 76:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-krasnik'
                break;
        case 77:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/vox-fm-poznan'
                break;
         case 78:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/gwiazdy-dance'
                break;
         case 79:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/rock-relaks'
                break;
         case 80:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/new-dance'
                break;
         case 81:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-rap-20'
                break;
         case 82:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/pop-top-40'
                break;
         case 83:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/rock-do-pracy'
                break;
         case 84:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-braniewo'
                break;
         case 85:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/dance-top-40'
                break;
         case 86:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/muzyka-do-pracy'
                break;
         case 87:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/special-set'
                break;
         case 88:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/milosc-w-rytmie-rock'
                break;
         case 89:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/supernova-rzeszow'
                break;
         case 90:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/supernova-gdansk'
                break;
         case 91:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/supernova-opole'
                break;
         case 92:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/vox-fm-radom'
                break;
         case 93:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/radio-go'
                break;
         case 94:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/vox-fm-gorzow'
                break;
         case 95:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/supernova-krakow'
                break;
         case 96:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/supernova-lodz'
                break;
         case 97:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/z-wami-fm'
                break;
         case 98:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/supernova-wroclaw'
                break;
         case 99:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/supernova-torun'
                break;
         case 99:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/supernova-trzebnica'
                break;
          case 100:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/supernova-konin'
                break;
        }
    }        
    if (check === '3') {
        switch(type3) {
            case 31:
                url = ''
                break;
            case 32:
                url = ''
                break;
            case 33:
                url = ''
                break;
            case 34:
                url = ''
                break;
        }
    }        
        options.seek = '0'
        options.volume = parseInt('100') / 100
        options.bitrate = '3000'

          const info = ["url", options, url];
          await Audio.addAudio(info, interaction.guild, true);

  
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