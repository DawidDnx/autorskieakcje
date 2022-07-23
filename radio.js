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
   return `Posłuchaj radia RMF/ESKA/OPENFM`;
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
               <option value="0">1 Rmf Fm</option>
               <option value="1">2 Rmf Maxxx</option>
               <option value="2">3 Rmf Dance</option>
               <option value="3">4 Rmf Club</option>
               <option value="4">5 Rmf Fitness</option>
               <option value="5">6 Rmf Hop</option>
               <option value="6">7 Rmf Party</option>
               <option value="7">8 Rmf Praca</option>
               <option value="8">9 Rmf Disco</option>
               <option value="9">10 Rmf Hot</option>
               <option value="10">11 Rmf Discopolo</option>
               <option value="11">12 Rmf Przeboje</option>
               <option value="12">13 Rmf Top</option>
               <option value="13">14 Eska Grudziadz</option>
               <option value="14">15 Vox Fm</option>
               <option value="15">16 Eska Warszawa</option>
               <option value="16">17 Eska Rock</option>
               <option value="17">18 Eska Malopolska Zakopane</option>
               <option value="18">19 Eska Wroclaw</option>
               <option value="19">20 Eska Poznan</option>
               <option value="20">21 Eska Impreska</option>
               <option value="21">22 Eska Rzeszow</option>
               <option value="22">23 Eska Kraków</option>
               <option value="23">24 Eska Goraca 20</option>
               <option value="24">25 Radio Plus</option>
               <option value="25">26 Radio Plus Krakow</option>
               <option value="26">27 Eska Białystok</option>
               <option value="27">28 Eska Trojmiasto</option>
               <option value="28">29 Eska Slask</option>
               <option value="29">30 Eska Do Pracy</option>
               <option value="30">31 Eska Rock Polska</option>
               <option value="31">32 Eska Lodz</option>
               <option value="32">33 Disco Polo Top40</option>
               <option value="33">34 Supernova Warszawa</option>
               <option value="34">35 Eska Szczecin</option>
               <option value="35">36 Eska Bydgoszcz</option>
               <option value="36">37 Radio Plus Lublin</option>
               <option value="37">38 Vox Impreza W Rytmie Hitow</option>
               <option value="38">39 Vox 90</option>
               <option value="39">40 Eska Opole</option>
               <option value="40">41 Vox Bestlista</option>
               <option value="41">42 Eska Torun</option>
               <option value="42">43 Eska Lublin</option>
               <option value="43">44 Eska Olsztyn</option>
               <option value="44">45 Top Disco Polo</option>
               <option value="45">46 Eska Kalisz Ostrow</option>
               <option value="46">47 Eska Tarnow</option>
               <option value="47">48 Eska Gorzow</option>
               <option value="48">49 Eska Zamosc</option>
               <option value="49">50 Eska Radom</option>
               <option value="50">51 Eska Koszalin</option>
               <option value="51">52 Eska Pila</option>
               <option value="52">53 Eska Elblag</option>
               <option value="53">54 Eska Beskidy</option>
               <option value="54">55 Radio Plus Koszalin</option>
               <option value="55">56 Eska Belchatow</option>
               <option value="56">57 Radio Plus Lodz</option>
               <option value="57">58 Eska Zielona Gora</option>
               <option value="58">59 Eska Siedlce</option>
               <option value="59">60 Eska Kielce</option>
               <option value="60">61 Eska Starachowice</option>
               <option value="61">62 Eska Leszno</option>
               <option value="62">63 Eska Plock</option>
               <option value="63">64 Radio Plus Szczecin</option>
               <option value="64">65 Eska Przemysl</option>
               <option value="65">66 Eska Zary</option>
               <option value="66">67 Eska Ilawa</option>
               <option value="67">68 Radio Plus Olsztyn</option>
               <option value="68">69 Eska Ostrzeszow</option>
               <option value="69">70 Disco Party</option>
               <option value="70">71 Eska Szczecinek</option>
               <option value="71">72 Radio Plus Podhale</option>
               <option value="72">73 Eska Lomza</option>
               <option value="73">74 New Pop</option>
               <option value="74">75 Disco Polo Top</option>
               <option value="75">76 Eska Krasnik</option>
               <option value="76">77 Vox Fm Poznan</option>
               <option value="77">78 Gwiazdy Dance</option>
               <option value="78">79 Rock Relaks</option>
               <option value="79">80 New Dance</option>
               <option value="80">81 Eska Rap 20</option>
               <option value="81">82 Pop Top 40</option>
               <option value="82">83 Rock Do Pracy</option>
               <option value="83">84 Eska Braniewo</option>
               <option value="84">85 Dance Top 40</option>
               <option value="85">86 Muzyka Do Pracy</option>
               <option value="86">87 Special Set</option>
               <option value="87">88 Milosc W Rytmie Rock</option>
               <option value="88">89 Supernova Rzeszow</option>
               <option value="89">90 Supernova Gdansk</option>
               <option value="90">91 Supernova Opole</option>
               <option value="91">92 Vox Fm Radom</option>
               <option value="92">93 Radio Go</option>
               <option value="93">94 Vox Fm Gorzow</option>
               <option value="94">95 Supernova Krakow</option>
               <option value="95">96 Supernova Lodz</option>
               <option value="96">97 Z Wami Fm</option>
               <option value="97">98 Supernova Wroclaw</option>
               <option value="98">99 Supernova Torun</option>
               <option value="99">100 Supernova Trzebnica</option>
               <option value="100">101 Supernova Konin</option>
               <option value="101">102 Open Fm Suumer Hits</option>
               <option value="102">103 Open Fm Summer Freszzz</option>
               <option value="103">104 Open Fm Summer Party</option>
               <option value="104">105 Open Fm Summer Chill</option>
               <option value="105">106 Open Fm Summer Classic</option>
               <option value="106">107 Open Fm Summer Polo</option>
               <option value="107">108 Open Fm Impreza</option>
               <option value="108">109 Open Fm Top 20 Impreza</option>
               <option value="109">110 Open Fm 500 Party Hits</option>
               <option value="110">111 Open Fm Lejdis Party</option>
               <option value="111">112 Open Fm Classic Party</option>
               <option value="112">113 Open Fm Dance</option>
               <option value="113">114 Open Fm Trance</option>
               <option value="114">115 Open Fm House</option>
               <option value="115">116 Open Fm Wesele</option>
               <option value="116">117 Open Fm Klub 90</option>
               <option value="117">118 Open Fm Italo Disco</option>
               <option value="118">119 Open Fm Disco Polo</option>
               <option value="119">120 Open Fm Top 20 Disco Polo</option>
               <option value="120">121 Open Fm Impreza PL</option>
               <option value="121">122 Open Fm Disco Polo Freszzz</option>
               <option value="122">123 Open Fm Disco Polo Classi</option>
               <option value="123">124 Open Fm 100% Hits</option>
               <option value="124">125 Open Fm Praca</option>
               <option value="125">126 Open Fm #Popularne</option>
               <option value="126">127 Open Fm Dzień Dobry</option>
               <option value="127">128 Open Fm Dobranoc</option>
               <option value="128">129 Open Fm Fun!</option>
               <option value="129">130 Open Fm Happy</option>
               <option value="130">131 Open Fm Sad</option>
               <option value="131">132 Open Fm Hot 20 Najnowsze</option>
               <option value="132">133 Open Fm Top 20 Pop</option>
               <option value="133">134 Open Fm Top 20 PL</option>
               <option value="134">135 Open Fm Top 40 UK</option>
               <option value="135">136 Open Fm Top 40 USA</option>
               <option value="136">137 Open Fm Love</option>
               <option value="137">138 Open Fm Sexy</option>
               <option value="138">139 Open Fm Cool</option>
               <option value="139">140 Open Fm Nauka</option>
               <option value="140">141 Open Fm Relaks</option>
               <option value="141">142 Open Fm 500 Największych Hitów</option>
               <option value="142">143 Open Fm Gwiazdy</option>
               <option value="143">144 Open Fm Freszzz</option>
               <option value="144">145 Open Fm Polskie Hity</option>
               <option value="145">146 Open Fm Po Polsku</option>
               <option value="146">147 Open Fm Po Polsku Classic</option>
               <option value="137">148 Open Fm Po Polsku Classic 2</option>
               <option value="148">149 Open Fm Lejdis Cade</option>
               <option value="149">150 Open Fm Crema Cafe</option>
               <option value="150">151 Open Fm We Dwoje</option>
               <option value="151">152 Open Fm Ballady Wszech Czasów</option>
               <option value="152">153 Open Fm Latino</option>
               <option value="153">154 Open Fm 100% Justin Biber</option>
               <option value="154">155 Open Fm 100% One Direction</option>
               <option value="155">156 Open Fm 00s Hits</option>
               <option value="156">157 Open Fm 90s Hits</option>
               <option value="157">158 Open Fm 80s Hits</option>
               <option value="158">159 Open Fm Classic Hits</option>
               <option value="159">160 Open Fm Hip-Hop PL</option>
               <option value="160">161 Open Fm 500 Hip-Hop Hits</option>
               <option value="161">162 Open Fm Hip-Hop Stacja</option>
               <option value="162">163 Open Fm Hip-Hop Freszzz</option>
               <option value="163">164 Open Fm Hip-Hop Klasyka</option>
               <option value="164">165 Open Fm Hip-Hop Ulica</option>
               <option value="165">166 Open Fm 100% O.S.T.R</option>
               <option value="166">167 Open Fm 500 R'n'B Hit</option>
               <option value="167">168 Open Fm Top 20 Rock</option>
               <option value="168">169 Open Fm 500 Rock Hits</option>
               <option value="169">170 Open Fm Praca Rock</option>
               <option value="170">171 Open Fm Rocks</option>
               <option value="171">172 Open Fm Polski Rock</option>
               <option value="172">173 Open Fm Polski Rock Classic</option>
               <option value="173">174 Open Fm Rock Ballady</option>
               <option value="174">175 Open Fm Giganci Rocka</option>
               <option value="175">176 Open Fm Classic Rock</option>
               <option value="176">177 Open Fm American Rock</option>
               <option value="177">178 Open Fm Punk Rock</option>
               <option value="178">179 Open Fm 500 Heavy Hits</option>
               <option value="179">180 Open Fm Classic Metal</option>
               <option value="180">181 Open Fm Ciężkie Brzmienia</option>
               <option value="181">182 Open Fm 100% Dżem</option>
               <option value="182">183 Open Fm 100% Grabaż</option>
               <option value="183">184 Open Fm 100% Kazik</option>
               <option value="184">185 Open Fm 100% Metallica</option>
               <option value="185">186 Open Fm 100% Linkin Park</option>
               <option value="186">187 Open Fm Top 20 Alt</option>
               <option value="187">188 Open Fm 500 Alternative Hits</option>
               <option value="188">189 Open Fm ALT Freszzz</option>
               <option value="189">190 Open Fm ALT Club</option>
               <option value="190">191 Open Fm ALT Cafe</option>
               <option value="191">192 Open Fm ALT PL</option>
               <option value="192">193 Open Fm ALT Classic</option>
               <option value="193">194 Open Fm 500 Electronic Hits</option>
               <option value="194">195 Open Fm Miejska Stacja</option>
               <option value="195">196 Open Fm Dubstep</option>
               <option value="196">197 Open Fm Drum'n'Bass</option>
               <option value="197">198 Open Fm Chillout</option>
               <option value="198">199 Open Fm Bieganie</option>
               <option value="199">200 Open Fm Fitness</option>
               <option value="199">201 Open Fm Trenicg</option>
               <option value="201">202 Open Fm 500 Reggae Hits</option>
               <option value="202">203 Open Fm Polish Reggae Stylee</option>
               <option value="203">204 Open Fm Retro Cafe</option>
               <option value="204">205 Open Fm Smooth Jazz</option>
               <option value="205">206 Open Fm Muzyka Klasyczna</option>
               <option value="206">207 Open Fm Muzyka Filmowa</option>
               <option value="207">208 Open Fm Kraina Łagodności</option>
               <option value="208">209 Open Fm Szanty</option>
               <option value="209">210 Open Fm Biesiada</option>
               <option value="210">211 Open Fm Biesiada Śląska</option>
               <option value="211">212 Open Fm Kids</option>
               <option value="212">213 Open Fm Odgłosy Natury</option>
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
          case 101:
                   url = 'https://stream.open.fm/75'
                   break;
          case 102:
                   url = 'https://stream.open.fm/86'
                   break;
          case 103:
                   url = 'https://stream.open.fm/100'
                   break;
          case 104:
                   url = 'https://stream.open.fm/119'
                   break;
          case 105:
                   url = 'https://stream.open.fm/125'
                   break;
          case 106:
                   url = 'https://stream.open.fm/122'
                   break;
          case 107:
                   url = 'https://stream.open.fm/2'
                   break;
          case 108:
                   url = 'https://stream.open.fm/95'
                   break;
          case 109:
                   url = 'https://stream.open.fm/81'
                   break;
          case 110:
                   url = 'https://stream.open.fm/102'
                   break;
          case 111:
                   url = 'https://stream.open.fm/50'
                   break;
          case 112:
                   url = 'https://stream.open.fm/31'
                   break;
          case 113:
                   url = 'https://stream.open.fm/7'
                   break;
          case 114:
                   url = 'https://stream.open.fm/5'
                   break;
          case 115:
                   url = 'https://stream.open.fm/110'
                   break;
          case 116:
                   url = 'https://stream.open.fm/8'
                   break;
          case 117:
                   url = 'https://stream.open.fm/27'
                   break;
          case 118:
                   url = 'https://stream.open.fm/21'
                   break;
          case 119:
                   url = 'https://stream.open.fm/53'
                   break;
          case 120:
                   url = 'https://stream.open.fm/12'
                   break;
          case 121:
                   url = 'https://stream.open.fm/57'
                   break;
          case 122:
                   url = 'https://stream.open.fm/49'
                   break;
          case 123:
                   url = 'https://stream.open.fm/64'
                   break;
          case 124:
                   url = 'https://stream.open.fm/109'
                   break;
          case 125:
                   url = 'https://stream.open.fm/10'
                   break;
          case 126:
                   url = 'https://stream.open.fm/69'
                   break;
          case 127:
                   url = 'https://stream.open.fm/74'
                   break;
          case 128:
                   url = 'https://stream.open.fm/51'
                   break;
          case 129:
                   url = 'https://stream.open.fm/120'
                   break;
          case 130:
                   url = 'https://stream.open.fm/103'
                   break;
          case 131:
                   url = 'https://stream.open.fm/115'
                   break;
          case 132:
                   url = 'https://stream.open.fm/96'
                   break;
          case 133:
                   url = 'http://stream.open.fm/97'
                   break;
          case 134:
                   url = 'https://stream.open.fm/70'
                   break;
          case 135:
                   url = 'https://stream.open.fm/105'
                   break;
          case 136:
                   url = 'https://stream.open.fm/121'
                   break;
          case 137:
                   url = 'https://stream.open.fm/18'
                   break;
          case 138:
                   url = 'https://stream.open.fm/123'
                   break;
          case 139:
                   url = 'https://stream.open.fm/117'
                   break;
          case 140:
                   url = 'https://stream.open.fm/112'
                   break;
          case 141:
                   url = 'https://stream.open.fm/11'
                   break;
          case 142:
                   url = 'https://stream.open.fm/58'
                   break;
          case 143:
                   url = 'https://stream.open.fm/39'
                   break;
          case 144:
                   url = 'https://stream.open.fm/111'
                   break;
          case 145:
                   url = 'https://stream.open.fm/1'
                   break;
          case 146:
                   url = 'https://stream.open.fm/79'
                   break;
          case 147:
                   url = 'https://stream.open.fm/17'
                   break;
          case 148:
                   url = 'https://stream.open.fm/48'
                   break;
          case 149:
                   url = 'https://stream.open.fm/76'
                   break;
          case 150:
                   url = 'https://stream.open.fm/4'
                   break;
          case 151:
                   url = 'https://stream.open.fm/20'
                   break;
          case 152:
                   url = 'https://stream.open.fm/19'
                   break;
          case 153:
                   url = 'https://stream.open.fm/63'
                   break;
          case 154:
                   url = 'https://stream.open.fm/80'
                   break;
          case 155:
                   url = 'https://stream.open.fm/72'
                   break;
          case 156:
                   url = 'https://stream.open.fm/14'
                   break;
          case 157:
                   url = 'https://stream.open.fm/3'
                   break;
          case 158:
                   url = 'https://stream.open.fm/46'
                   break;
          case 159:
                   url = 'https://stream.open.fm/24'
                   break;
          case 160:
                   url = 'https://stream.open.fm/98'
                   break;
          case 161:
                   url = 'https://stream.open.fm/23'
                   break;
          case 162:
                   url = 'https://stream.open.fm/93'
                   break;
          case 163:
                   url = 'https://stream.open.fm/107'
                   break;
          case 164:
                   url = 'https://stream.open.fm/92'
                   break;
          case 165:
                   url = 'https://stream.open.fm/47'
                   break;
          case 166:
                   url = 'https://stream.open.fm/26'
                   break;
          case 167:
                   url = 'https://stream.open.fm/99'
                   break;
          case 168:
                   url = 'https://stream.open.fm/82'
                   break;
          case 169:
                   url = 'https://stream.open.fm/104'
                   break;
          case 170:
                   url = 'https://stream.open.fm/77'
                   break;
          case 171:
                   url = 'https://stream.open.fm/29'
                   break;
          case 172:
                   url = 'https://stream.open.fm/45'
                   break;
          case 173:
                   url = 'https://stream.open.fm/61'
                   break;
          case 174:
                   url = 'https://stream.open.fm/118'
                   break;
          case 175:
                   url = 'https://stream.open.fm/32'
                   break;
          case 176:
                   url = 'https://stream.open.fm/40'
                   break;
          case 177:
                   url = 'https://stream.open.fm/78'
                   break;
          case 178:
                   url = 'https://stream.open.fm/54'
                   break;
          case 179:
                   url = 'https://stream.open.fm/108'
                   break;
          case 180:
                   url = 'https://stream.open.fm/13'
                   break;
          case 181:
                   url = 'https://stream.open.fm/15'
                   break;
          case 182:
                   url = 'https://stream.open.fm/73'
                   break;
          case 183:
                   url = 'https://stream.open.fm/35'
                   break;
          case 184:
                   url = 'https://stream.open.fm/62'
                   break;
          case 185:
                   url = 'https://stream.open.fm/42'
                   break;
          case 186:
                   url = 'https://stream.open.fm/83'
                   break;
          case 187:
                   url = 'https://stream.open.fm/55'
                   break;
          case 188:
                   url = 'https://stream.open.fm/6'
                   break;
          case 189:
                   url = 'https://stream.open.fm/9'
                   break;
          case 190:
                   url = 'https://stream.open.fm/34'
                   break;
          case 191:
                   url = 'https://stream.open.fm/36'
                   break;
          case 192:
                   url = 'https://stream.open.fm/43'
                   break;
          case 193:
                   url = 'https://stream.open.fm/94'
                   break;
          case 194:
                   url = 'https://stream.open.fm/106'
                   break;
          case 195:
                   url = 'https://stream.open.fm/68'
                   break;
          case 196:
                   url = 'https://stream.open.fm/41'
                   break;
          case 197:
                   url = 'http://stream.open.fm/33'
                   break;
         case 198:
                   url = 'http://stream.open.fm/116'
                   break;
         case 199:
                   url = 'http://stream.open.fm/65'
                   break;
         case 200:
                   url = 'http://stream.open.fm/101'
                   break;
         case 201:
                   url = 'http://stream.open.fm/30'
                   break;
         case 202:
                   url = 'http://stream.open.fm/22'
                   break;
         case 203:
                   url = 'http://stream.open.fm/25'
                   break;
         case 204:
                   url = 'http://stream.open.fm/60'
                   break;
         case 205:
                   url = 'http://stream.open.fm/67'
                   break;
         case 206:
                   url = 'http://stream.open.fm/38'
                   break;
         case 207:
                   url = 'http://stream.open.fm/37'
                   break;
         case 208:
                   url = 'http://stream.open.fm/28'
                   break;
         case 209:
                   url = 'http://stream.open.fm/59'
                   break;
         case 210:
                   url = 'http://stream.open.fm/66'
                   break;
         case 211:
                   url = 'http://stream.open.fm/16'
                   break;
         case 212:
                   url = 'http://stream.open.fm/52'
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