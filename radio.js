module.exports = {

       name: "Radio",
       section: "Audio Control",
       requiresAudioLibraries: true,
         
       subtitle(data, presets) {
          const nazwa = [
            "Rmf Fm",
            "Rmf Maxxx",
            "Rmf Dance",
            "Rmf Club",
            "Rmf Fitness",
            "Rmf Hop",
            "Rmf Party",
            "Rmf Praca",
            "Rmf Disco",
            "Rmf Hot",
            "Rmf Discopolo",
            "Rmf Przeboje",
            "Rmf Top",
            "Eska Grudziadz",
            "Vox Fm",
            "Eska Warszawa",
            "Eska Rock",
            "Eska Malopolska Zakopane",
            "Eska Wroclaw",
            "Eska Poznan",
            "Eska Impreska",
            "Eska Rzeszow",
            "Eska Kraków",
            "Eska Goraca 20",
            "Radio Plus",
            "Radio Plus Krakow",
            "Eska Białystok",
            "Eska Trojmiasto",
            "Eska Slask",
            "Eska Do Pracy",
            "Eska Rock Polska",
            "Eska Lodz",
            "Disco Polo Top40",
            "Supernova Warszawa",
            "Eska Szczecin",
            "Eska Bydgoszcz",
            "Radio Plus Lublin",
            "Vox Impreza W Rytmie Hitow",
            "Vox 90",
            "Eska Opole",
            "Vox Bestlista",
            "Eska Torun",
            "Eska Lublin",
            "Eska Olsztyn",
            "Top Disco Polo",
            "Eska Kalisz Ostrow",
            "Eska Tarnow",
            "Eska Gorzow",
            "Eska Zamosc",
            "Eska Radom",
            "Eska Koszalin",
            "Eska Pila",
            "Eska Elblag",
            "Eska Beskidy",
            "Radio Plus Koszalin",
            "Eska Belchatow",
            "Radio Plus Lodz",
            "Eska Zielona Gora",
            "Eska Siedlce",
            "Eska Kielce",
            "Eska Starachowice",
            "Eska Leszno",
            "Eska Plock",
            "Radio Plus Szczecin",
            "Eska Przemysl",
            "Eska Zary",
            "Eska Ilawa",
            "Radio Plus Olsztyn",
            "Eska Ostrzeszow",
            "Disco Party",
            "Eska Szczecinek",
            "Radio Plus Podhale",
            "Eska Lomza",
            "New Pop",
            "Disco Polo Top",
            "Eska Krasnik",
            "Vox Fm Poznan",
            "Gwiazdy Dance",
            "Rock Relaks",
            "New Dance",
            "Eska Rap 20",
            "Pop Top 40",
            "Rock Do Pracy",
            "Eska Braniewo",
            "Dance Top 40",
            "Muzyka Do Pracy",
            "Special Set",
            "Milosc W Rytmie Rock",
            "Supernova Rzeszow",
            "Supernova Gdansk",
            "Supernova Opole",
            "Vox Fm Radom",
            "Radio Go",
            "Vox Fm Gorzow",
            "Supernova Krakow",
            "Supernova Lodz",
            "Z Wami Fm",
            "Supernova Wroclaw",
            "Supernova Torun",
            "Supernova Trzebnica",
            "Supernova Konin",
            "Open Fm Suumer Hits",
            "Open Fm Summer Freszzz",
            "Open Fm Summer Party",
            "Open Fm Summer Chill",
            "Open Fm Summer Classic",
            "Open Fm Summer Polo",
            "Open Fm Impreza",
            "Open Fm Top 20 Impreza",
            "Open Fm 500 Party Hits",
            "Open Fm Lejdis Party",
            "Open Fm Classic Party",
            "Open Fm Dance",
            "Open Fm Trance",
            "Open Fm House",
            "Open Fm Wesele",
            "Open Fm Klub 90",
            "Open Fm Italo Disco",
            "Open Fm Disco Polo",
            "Open Fm Top 20 Disco Polo",
            "Open Fm Impreza PL",
            "Open Fm Disco Polo Freszzz",
            "Open Fm Disco Polo Classic",
            "Open Fm 100% Hits",
            "Open Fm Praca",
            "Open Fm #Popularne",
            "Open Fm Dzień Dobry",
            "Open Fm Dobranoc",
            "Open Fm Fun!",
            "Open Fm Happy",
            "Open Fm Sad",
            "Open Fm Hot 20 Najnowsze",
            "Open Fm Top 20 Pop",
            "Open Fm Top 20 PL",
            "Open Fm Top 40 UK",
            "Open Fm Top 40 USA",
            "Open Fm Love",
            "Open Fm Sexy",
            "Open Fm Cool",
            "Open Fm Nauka",
            "Open Fm Relaks",
            "Open Fm 500 Największych Hitów",
            "Open Fm Gwiazdy",
            "Open Fm Freszzz",
            "Open Fm Polskie Hity",
            "Open Fm Po Polsku",
            "Open Fm Po Polsku Classic",
            "Open Fm Po Polsku Classic 2",
            "Open Fm Lejdis Cade",
            "Open Fm Crema Cafe",
            "Open Fm We Dwoje",
            "Open Fm Ballady Wszech Czasów",
            "Open Fm Latino",
            "Open Fm 100% Justin Biber",
            "Open Fm 100% One Direction",
            "Open Fm 00s Hits",
            "Open Fm 90s Hits",
            "Open Fm 80s Hits",
            "Open Fm Classic Hits",
            "Open Fm Hip-Hop PL",
            "Open Fm 500 Hip-Hop Hits",
            "Open Fm Hip-Hop Stacja",
            "Open Fm Hip-Hop Freszzz",
            "Open Fm Hip-Hop Klasyka",
            "Open Fm Hip-Hop Ulica",
            "Open Fm 100% O.S.T.R",
            "Open Fm 500 R'n'B Hit",
            "Open Fm Top 20 Rock",
            "Open Fm 500 Rock Hits",
            "Open Fm Praca Rock",
            "Open Fm Rocks",
            "Open Fm Polski Rock",
            "Open Fm Polski Rock Classic",
            "Open Fm Rock Ballady",
            "Open Fm Giganci Rocka",
            "Open Fm Classic Rock",
            "Open Fm American Rock",
            "Open Fm Punk Rock",
            "Open Fm 500 Heavy Hits",
            "Open Fm Classic Metal",
            "Open Fm Ciężkie Brzmienia",
            "Open Fm 100% Dżem",
            "Open Fm 100% Grabaż",
            "Open Fm 100% Kazik",
            "Open Fm 100% Metallica",
            "Open Fm 100% Linkin Park",
            "Open Fm Top 20 Alt",
            "Open Fm 500 Alternative Hits",
            "Open Fm ALT Freszzz",
            "Open Fm ALT Club",
            "Open Fm ALT Cafe",
            "Open Fm ALT PL",
            "Open Fm ALT Classic",
            "Open Fm 500 Electronic Hits",
            "Open Fm Miejska Stacja",
            "Open Fm Dubstep",
            "Open Fm Drum'n'Bass",
            "Open Fm Chillout",
            "Open Fm Bieganie",
            "Open Fm Fitness",
            "Open Fm Trenicg",
            "Open Fm 500 Reggae Hits",
            "Open Fm Polish Reggae Stylee",
            "Open Fm Retro Cafe",
            "Open Fm Smooth Jazz",
            "Open Fm Muzyka Klasyczna",
            "Open Fm Muzyka Filmowa",
            "Open Fm Kraina Łagodności",
            "Open Fm Szanty",
            "Open Fm Biesiada",
            "Open Fm Biesiada Śląska",
            "Open Fm Kids",
            "Open Fm Odgłosy Natury",
            "Radio Zlote Przeboje",
            "Radio Zet",
            "RadioParty.pl",
            "Radio Park",
            "Radio Piekary",
            "Radio Jard",
            "Radio Freee",
            "Radio Fama",
            "Radio Nuta",
            "Radio Kampus",
            "Radio Max Hit Polska 1",
            "Radio Muzo FM",
          ];
          return `Posłuchaj radia: ${nazwa[parseInt(data.type)]}`;
        },
   
     
       meta: { version: "2.1.6", preciseCheck: true, author: 'Gotowka, Hit Stary', authorUrl: 'https://github.com/Gotowka/autorskieakcje/blob/main/radio.js', downloadUrl: 'https://github.com/Gotowka/autorskieakcje/blob/main/radio.js' },
   
       fields: ["channel", "varName", "type"],
     
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
     
         <span class="dbminputlabel">Wybierz Radio</span><br>
         <select id="type" class="round" style="width: 45%;">
               <option value="0">Rmf Fm</option>
               <option value="1">Rmf Maxxx</option>
               <option value="2">Rmf Dance</option>
               <option value="3">Rmf Club</option>
               <option value="4">Rmf Fitness</option>
               <option value="5">Rmf Hop</option>
               <option value="6">Rmf Party</option>
               <option value="7">Rmf Praca</option>
               <option value="8">Rmf Disco</option>
               <option value="9">Rmf Hot</option>
               <option value="10">Rmf Discopolo</option>
               <option value="11">Rmf Przeboje</option>
               <option value="12">Rmf Top</option>
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
               <option value="101">Open Fm Suumer Hits</option>
               <option value="102">Open Fm Summer Freszzz</option>
               <option value="103">Open Fm Summer Party</option>
               <option value="104">Open Fm Summer Chill</option>
               <option value="105">Open Fm Summer Classic</option>
               <option value="106">Open Fm Summer Polo</option>
               <option value="107">Open Fm Impreza</option>
               <option value="108">Open Fm Top 20 Impreza</option>
               <option value="109">Open Fm 500 Party Hits</option>
               <option value="110">Open Fm Lejdis Party</option>
               <option value="111">Open Fm Classic Party</option>
               <option value="112">Open Fm Dance</option>
               <option value="113">Open Fm Trance</option>
               <option value="114">Open Fm House</option>
               <option value="115">Open Fm Wesele</option>
               <option value="116">Open Fm Klub 90</option>
               <option value="117">Open Fm Italo Disco</option>
               <option value="118">Open Fm Disco Polo</option>
               <option value="119">Open Fm Top 20 Disco Polo</option>
               <option value="120">Open Fm Impreza PL</option>
               <option value="121">Open Fm Disco Polo Freszzz</option>
               <option value="122">Open Fm Disco Polo Classi</option>
               <option value="123">Open Fm 100% Hits</option>
               <option value="124">Open Fm Praca</option>
               <option value="125">Open Fm #Popularne</option>
               <option value="126">Open Fm Dzień Dobry</option>
               <option value="127">Open Fm Dobranoc</option>
               <option value="128">Open Fm Fun!</option>
               <option value="129">Open Fm Happy</option>
               <option value="130">Open Fm Sad</option>
               <option value="131">Open Fm Hot 20 Najnowsze</option>
               <option value="132">Open Fm Top 20 Pop</option>
               <option value="133">Open Fm Top 20 PL</option>
               <option value="134">Open Fm Top 40 UK</option>
               <option value="135">Open Fm Top 40 USA</option>
               <option value="136">Open Fm Love</option>
               <option value="137">Open Fm Sexy</option>
               <option value="138">Open Fm Cool</option>
               <option value="139">Open Fm Nauka</option>
               <option value="140">Open Fm Relaks</option>
               <option value="141">Open Fm 500 Największych Hitów</option>
               <option value="142">Open Fm Gwiazdy</option>
               <option value="143">Open Fm Freszzz</option>
               <option value="144">Open Fm Polskie Hity</option>
               <option value="145">Open Fm Po Polsku</option>
               <option value="146">Open Fm Po Polsku Classic</option>
               <option value="137">Open Fm Po Polsku Classic 2</option>
               <option value="148">Open Fm Lejdis Cade</option>
               <option value="149">Open Fm Crema Cafe</option>
               <option value="150">Open Fm We Dwoje</option>
               <option value="151">Open Fm Ballady Wszech Czasów</option>
               <option value="152">Open Fm Latino</option>
               <option value="153">Open Fm 100% Justin Biber</option>
               <option value="154">Open Fm 100% One Direction</option>
               <option value="155">Open Fm 00s Hits</option>
               <option value="156">Open Fm 90s Hits</option>
               <option value="157">Open Fm 80s Hits</option>
               <option value="158">Open Fm Classic Hits</option>
               <option value="159">Open Fm Hip-Hop PL</option>
               <option value="160">Open Fm 500 Hip-Hop Hits</option>
               <option value="161">Open Fm Hip-Hop Stacja</option>
               <option value="162">Open Fm Hip-Hop Freszzz</option>
               <option value="163">Open Fm Hip-Hop Klasyka</option>
               <option value="164">Open Fm Hip-Hop Ulica</option>
               <option value="165">Open Fm 100% O.S.T.R</option>
               <option value="166">Open Fm 500 R'n'B Hit</option>
               <option value="167">Open Fm Top 20 Rock</option>
               <option value="168">Open Fm 500 Rock Hits</option>
               <option value="169">Open Fm Praca Rock</option>
               <option value="170">Open Fm Rocks</option>
               <option value="171">Open Fm Polski Rock</option>
               <option value="172">Open Fm Polski Rock Classic</option>
               <option value="173">Open Fm Rock Ballady</option>
               <option value="174">Open Fm Giganci Rocka</option>
               <option value="175">Open Fm Classic Rock</option>
               <option value="176">Open Fm American Rock</option>
               <option value="177">Open Fm Punk Rock</option>
               <option value="178">Open Fm 500 Heavy Hits</option>
               <option value="179">Open Fm Classic Metal</option>
               <option value="180">Open Fm Ciężkie Brzmienia</option>
               <option value="181">Open Fm 100% Dżem</option>
               <option value="182">Open Fm 100% Grabaż</option>
               <option value="183">Open Fm 100% Kazik</option>
               <option value="184">Open Fm 100% Metallica</option>
               <option value="185">Open Fm 100% Linkin Park</option>
               <option value="186">Open Fm Top 20 Alt</option>
               <option value="187">Open Fm 500 Alternative Hits</option>
               <option value="188">Open Fm ALT Freszzz</option>
               <option value="189">Open Fm ALT Club</option>
               <option value="190">Open Fm ALT Cafe</option>
               <option value="191">Open Fm ALT PL</option>
               <option value="192">Open Fm ALT Classic</option>
               <option value="193">Open Fm 500 Electronic Hits</option>
               <option value="194">Open Fm Miejska Stacja</option>
               <option value="195">Open Fm Dubstep</option>
               <option value="196">Open Fm Drum'n'Bass</option>
               <option value="197">Open Fm Chillout</option>
               <option value="198">Open Fm Bieganie</option>
               <option value="199">Open Fm Fitness</option>
               <option value="199">Open Fm Trenicg</option>
               <option value="201">Open Fm 500 Reggae Hits</option>
               <option value="202">Open Fm Polish Reggae Stylee</option>
               <option value="203">Open Fm Retro Cafe</option>
               <option value="204">Open Fm Smooth Jazz</option>
               <option value="205">Open Fm Muzyka Klasyczna</option>
               <option value="206">Open Fm Muzyka Filmowa</option>
               <option value="207">Open Fm Kraina Łagodności</option>
               <option value="208">Open Fm Szanty</option>
               <option value="209">Open Fm Biesiada</option>
               <option value="210">Open Fm Biesiada Śląska</option>
               <option value="211">Open Fm Kids</option>
               <option value="212">Open Fm Odgłosy Natury</option>
               <option value="213">Radio Zlote Przeboje</option>
               <option value="214">Radio Zet</option>
               <option value="215">RadioParty.pl</option>
               <option value="216">Radio Park</option>
               <option value="217">Radio Piekary</option>
               <option value="218">Radio Jard</option>
               <option value="219">Radio Freee</option>
               <option value="220">Radio Fama</option>
               <option value="221">Radio Nuta</option>
               <option value="222">Radio Kampus</option>
               <option value="223">Radio Max Hit Polska 1</option>
               <option value="224">Radio Muzo FM</option>
         </select>
     </div>`;
       },
     
       init() {},
     
       async action(cache) {
           const { interaction } = cache
           const data = cache.actions[cache.index];
           const Audio = this.getDBM().Audio;
           const { MessageEmbed } = require('discord.js')
           const channel = await this.getVoiceChannelFromData(data.channel, data.varName, cache);
           if (!interaction.member.voice.channel) return interaction.reply("Błąd: Musisz być na kanale by użyć tej komendy!")
           let url
           const type = parseInt(data.type)
           switch(type) {
           case 0:
               url = 'https://rs6-krk2.rmfstream.pl/RMFFM48'
               radio = 'Rmf Fm'
               img = 'https://i.imgur.com/LqyrhDv.png'
               strona = 'https://www.rmfon.pl/play,5#p'
               break;
           case 1:
               url = 'https://rs6-krk2.rmfstream.pl/RMFMAXXX48'
               radio = 'Rmf Maxxx'
               img = 'https://i.imgur.com/ze1tkOU.png'
               strona = 'https://www.rmfon.pl/play,6#p'
               break;
           case 2:
               url = 'https://rs202-krk-cyfronet.rmfstream.pl/DANCE'
               radio = 'Rmf Dance'
               img = 'https://i.imgur.com/KVTC4ei.jpg'
               strona = 'https://www.rmfon.pl/play,3#p'
               break;
           case 3:
               url = 'https://rs202-krk-cyfronet.rmfstream.pl/CLUB'
               radio = 'Rmf Club'
               img = 'https://i.imgur.com/DraLw63.png'
               strona = 'https://www.rmfon.pl/play,29#p'
               break;
           case 4:
               url = 'https://rs202-krk-cyfronet.rmfstream.pl/FITNESS'
               radio = 'Rmf Fitness'
               img = 'https://i.imgur.com/XVeDisJ.png'
               strona = 'https://www.rmfon.pl/play,117#p'
               break;
           case 5:
               url = 'https://rs202-krk-cyfronet.rmfstream.pl/HOPBEC'
               radio = 'Rmf Hop'
               img = 'https://i.imgur.com/KJ7N98V.jpg'
               strona = 'https://www.rmfon.pl/play,22#p'
               break;
           case 6:
               url = 'https://rs202-krk-cyfronet.rmfstream.pl/PARTY'
               radio = 'Rmf Party'
               img = 'https://i.imgur.com/7M07JVG.jpg'
               strona = 'https://www.rmfon.pl/play,23#p'
               break;
           case 7:
               url = 'https://rs202-krk-cyfronet.rmfstream.pl/WPRACY'
               radio = 'Rmf Praca'
               img = 'https://i.imgur.com/MjMVZE2.jpg'
               strona = 'https://www.rmfon.pl/play,115#p'
               break;
           case 8:
               url = 'https://rs202-krk-cyfronet.rmfstream.pl/DISCO'
               radio = 'Rmf Disco'
               img = 'https://i.imgur.com/ugDGbzh.png'
               strona = 'https://www.rmfon.pl/play,153#p'
               break;
           case 9:
               url = 'https://rs202-krk-cyfronet.rmfstream.pl/HOTNEW'
               radio = 'Rmf Hot'
               img = 'https://i.imgur.com/aVkp91F.jpg'
               strona = 'https://www.rmfon.pl/play,27#p'
               break;
           case 10:
               url = 'https://rs202-krk-cyfronet.rmfstream.pl/DISCOPOLO'
               radio = 'Rmf Discopolo'
               img = 'https://i.imgur.com/s4GcPLH.jpg'
               strona = 'https://www.rmfon.pl/play,110#p'
               break;
           case 11:
               url = 'https://rs203-krk.rmfstream.pl/SPRZEBOJE'
               radio = 'Rmf Przeboje'
               img = 'https://i.imgur.com/talT5P5.jpg'
               strona = 'https://www.rmfon.pl/play,10#p'
               break;
           case 12:
               url = 'https://rs202-krk-cyfronet.rmfstream.pl/TOP5DANCE'
               radio = 'Rmf Top'
               img = 'https://i.imgur.com/ugDGbzh.png'
               strona = 'https://www.rmfon.pl/play,119#p'
               break;
           case 13:
               url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-grudziadz'
               radio = 'Eska Grudziadz'
               img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
               strona = 'https://www.eska.pl/grudziadz/'
                   break;
           case 14:
                url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/vox-fm'
                radio = 'Vox Fm'
                img = 'https://cdn.onlineradiobox.com/img/l/9/1289.v19.png'
                strona = 'https://www.voxfm.pl/'
                   break;
           case 15:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-warszawa'
                   radio = 'Eska Warszawa'
                   img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                   strona = 'https://www.eska.pl/warszawa/'
                   break;
           case 16:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-rock'
                   radio = 'Eska Rock'
                   img = 'https://cdn.onlineradiobox.com/img/l/8/1398.v16.png'
                   strona = 'https://www.eskarock.pl/'
                   break;
           case 17:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-malopolska-zakopane'
                   radio = 'Eska Malopolska Zakopane'
                   img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                   strona = 'https://www.radio.pl/s/eskamalopolska'
                   break;
           case 18:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-wroclaw'
                   radio = 'Eska Wroclaw'
                   img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                   strona = 'https://www.eska.pl/wroclaw/'
                   break;
           case 19:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-poznan'
                   radio = 'Eska Poznan'
                   img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                   strona = 'https://www.eska.pl/poznan/'
                   break;
            case 20:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-impreska'
                   radio = 'Eska Impreska'
                   img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                   strona = 'https://www.eska.pl/tag/impreska,tg-mLBP-HmQv-oX7G/'
                   break;
            case 21:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-rzeszow'
                   radio = 'Eska Rzeszow'
                   img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                   strona = 'https://www.eska.pl/rzeszow/'
                   break;
           case 22:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-krakow'
                   radio = 'Eska Kraków'
                   img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                   strona = 'https://www.eska.pl/krakow/'
                   break;
           case 23:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-goraca-20'
                   radio = 'Eska Goraca 20'
                   img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                   strona = 'https://www.eska.pl/goraca20/'
                   break;
            
           case 24:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/radio-plus'
                   radio = 'Radio Plus'
                   img = 'https://cdn.onlineradiobox.com/img/l/1/1361.v10.png'
                   strona = 'https://www.radioplus.pl/'
                   break;
            case 25:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/radio-plus-krakow'
                   radio = 'Radio Plus Krakow'
                   img = 'https://cdn.onlineradiobox.com/img/l/1/1361.v10.png'
                   strona = 'https://www.radioplus.pl/'
                   break;
           case 26:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-bialystok'
                   radio = 'Eska Białystok'
                   img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                   strona = 'https://www.eska.pl/bialystok/'
                   break;
           case 27:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-trojmiasto'
                   radio = 'Eska Trojmiasto'
                   img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                   strona = 'https://www.eska.pl/trojmiasto/'
                   break;
            
         case 28:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-slask'
                   radio = 'Eska Slask'
                   img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                   strona = 'https://www.eska.pl/slaskie/'
                   break;
            case 29:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-do-pracy'
                   radio = 'Eska Do Pracy'
                   img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                   strona = 'https://onlineradiobox.com/pl/eskadopracy/'
                   break;
           case 30:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-rock-polska'
                   radio = 'Eska Rock Polska'
                   img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                   strona = 'https://www.eskarock.pl/'
                   break;
           case 31:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-lodz'
                   radio = 'Eska Lodz'
                   img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                   strona = 'https://www.eska.pl/lodz/'
                   break;
            
           case 32:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/disco-polo-top40'
                   radio = 'Disco Polo Top40'
                   img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                   strona = 'https://www.radio.pl/s/discopolotop40'
                   break;
            case 33:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/supernova-warszawa'
                   radio = 'Supernova Warszawa'
                   img = 'https://myradioonline.pl/public/uploads/radio_img/radio-wawa/play_250_250.jpg'
                   strona = 'https://www.radiosupernova.pl/'
                   break;
           case 34:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-szczecin'
                   radio = 'Eska Szczecin'
                   img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                   strona = 'https://www.eska.pl/szczecin/'
                   break;
           case 35:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-bydgoszcz'
                   radio = 'Eska Bydgoszcz'
                   img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                   strona = 'https://www.eska.pl/bydgoszcz/'
                   break;
            
           case 36:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/radio-plus-lublin'
                   radio = 'Radio Plus Lublin'
                   img = 'https://cdn.onlineradiobox.com/img/l/1/1361.v10.png'
                   strona = 'https://www.radioplus.pl/'
                   break;
            case 37:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/vox-impreza-w-rytmie-hitow'
                   radio = 'Vox Impreza W Rytmie Hitow'
                   img = 'https://cdn.onlineradiobox.com/img/l/9/1289.v19.png'
                   strona = 'https://www.voxfm.pl/'
                   break;
           case 38:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/vox-90'
                   radio = 'Vox 90'
                   img = 'https://cdn.onlineradiobox.com/img/l/9/1289.v19.png'
                   strona = 'https://www.voxfm.pl/'
                   break;
           case 39:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-opole'
                   radio = 'Eska Opole'
                   img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                   strona = 'https://www.eska.pl/opole/'
                   break;
           case 40:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/vox-bestlista'
                   radio = 'Vox Bestlista'
                   img = 'https://cdn.onlineradiobox.com/img/l/9/1289.v19.png'
                   strona = 'https://www.voxfm.pl/bestlista/'
                   break;
            case 41:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-torun'
                   radio = 'Eska Torun'
                   img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                   strona = 'https://www.eska.pl/torun/'
                   break;
           case 42:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-lublin'
                   radio = 'Eska Lublin'
                   img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                   strona = 'https://www.eska.pl/lublin/'
                   break;
           case 43:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-olsztyn'
                   radio = 'Eska Olsztyn'
                   img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                   strona = 'https://www.eska.pl/olsztyn/'
                   break;
            case 44:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/top-disco-polo'
                   radio = 'Top Disco Polo'
                   img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                   strona = 'https://www.eska.pl/tag/hity-disco-polo,tg-QHc2-djkL-78Nh/'
                   break;     
           case 45:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-kalisz-ostrow'
                   radio = 'Eska Kalisz Ostrow'
                   img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                   strona = 'https://www.eska.pl/ostrow/'
                   break;
           case 46:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-tarnow'
                   radio = 'Eska Tarnow'
                   img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                   strona = 'https://www.eska.pl/tarnow/'
                   break;
           case 47:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-gorzow'
                   radio = 'Eska Gorzow'
                   img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                   strona = 'https://www.eska.pl/gorzow/'
                   break;
           case 48:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-zamosc'
                   radio = 'Eska Zamosc'
                   img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                   strona = 'https://www.eska.pl/zamosc/'
                   break;
           case 49:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-radom'
                   radio = 'Eska Radom'
                   img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                   strona = 'https://www.eska.pl/radom/'
                   break;   
           case 50:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-koszalin'
                   radio = 'Eska Koszalin'
                   img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                   strona = 'https://www.eska.pl/koszalin/'
                   break;
           case 51:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-pila'
                   radio = 'Eska Pila'
                   img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                   strona = 'https://www.eska.pl/pila/'
                   break;
           case 52:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-elblag'
                   radio = 'Eska Elblag'
                   img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                   strona = 'https://www.eska.pl/elblag/'
                   break;
            case 53:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-beskidy'
                   radio = 'Eska Beskidy'
                   img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                   strona = 'https://www.eska.pl/beskidy/'
                   break;
            case 54:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/radio-plus-koszalin'
                   radio = 'Radio Plus Koszalin'
                   img = "https://cdn.onlineradiobox.com/img/l/1/1361.v10.png"
                   strona = 'https://www.radioplus.pl/koszalin/'
                   break;
            case 55:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-belchatow'
                   radio = 'Eska Belchatow'
                   img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                   strona = 'https://www.eska.pl/belchatow/'
                   break;
            case 56:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/radio-plus-lodz'
                   radio = 'Radio Plus Lodz'
                   img = "https://cdn.onlineradiobox.com/img/l/1/1361.v10.png"
                   strona = 'https://www.radioplus.pl/'
                   break;
            case 57:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-zielona-gora'
                   radio = 'Eska Zielona Gora'
                   img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                   strona = 'https://www.eska.pl/zielona-gora/'
                   break;
            case 59:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-siedlce'
                   radio = 'Eska Siedlce'
                   img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                   strona = 'https://www.eska.pl/siedlce/'
                   break;
            case 58:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-starachowice'
                   radio = 'Eska Starachowice'
                   img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                   strona = 'https://www.eska.pl/starachowice/'
                   break;
            case 60:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-kielce'
                   radio = 'Eska Kielce'
                   img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                   strona = 'https://www.eska.pl/kielce/'
                   break;
            case 61:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-starachowice'
                   radio = 'Eska Starachowice'
                   img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                   strona = 'https://www.eska.pl/starachowice/'
                   break;
            case 62:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-leszno'
                   radio = 'Eska Leszno'
                   img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                   strona = 'https://www.eska.pl/leszno/'
                   break;
            case 63:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-plock'
                   radio = 'Eska Plock'
                   img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                   strona = 'https://www.eska.pl/plock/'
                   break;
            case 64:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/radio-plus-szczecin'
                   radio = 'Radio Plus Szczecin'
                   img = 'https://cdn.onlineradiobox.com/img/l/1/1361.v10.png'
                   strona = 'https://www.radioplus.pl/szczecin/'
                   break;
            case 65:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-przemysl'
                   radio = 'Eska Przemysl'
                   img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                   strona = 'https://www.eska.pl/przemysl/'
                   break;
            case 66:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-zary'
                   radio = 'Eska Zary'
                   img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                   strona = 'https://www.eska.pl/zary/'
                   break;
            case 67:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-ilawa'
                   radio = 'Eska Ilawa'
                   img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                   strona = 'https://www.eska.pl/ilawa'
                   break;
            case 68:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/radio-plus-olsztyn'
                   radio = 'Radio Plus Olsztyn'
                   img = 'https://cdn.onlineradiobox.com/img/l/1/1361.v10.png'
                   strona = 'https://www.radioplus.pl/olsztyn/'
                   break;
            case 69:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-ostrzeszow'
                   radio = 'Eska Ostrzeszow'
                   img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                   strona = 'https://www.eska.pl/ostrzeszow/'
                   break;
            case 70:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/disco-party'
                   radio = 'Disco Party'
                   img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                   strona = 'https://discoparty.pl/'
                   break;
            case 71:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-szczecinek'
                   radio = 'Eska Szczecinek'
                   img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                   strona = 'https://www.eska.pl/szczecinek/'
                   break;
            case 72:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/radio-plus-podhale'
                   radio = 'Radio Plus Podhale'
                   img = 'https://cdn.onlineradiobox.com/img/l/1/1361.v10.png'
                   strona = 'https://www.radioplus.pl/podhale/'
                   break;
            case 73:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-lomza'
                   radio = 'Eska lomza'
                   img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                   strona = 'https://www.eska.pl/lomza/'
                   break;
            case 74:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/new-pop'
                   radio = 'New Pop'
                   img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                   strona = 'https://www.eska.pl/hity/'
                   break;
            case 75:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/disco-polo-top'
                   radio = 'Disco Polo Top'
                   img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                   strona = 'https://www.eska.pl/tag/hity-disco-polo,tg-QHc2-djkL-78Nh/'
                   break;
            case 77:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-krasnik'
                   radio = 'Eska Krasnik'
                   img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                   strona = 'https://www.eska.pl/krasnik/'
                   break;
           case 77:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/vox-fm-poznan'
                   radio = 'Vox Fm Poznan'
                   img = 'https://cdn.onlineradiobox.com/img/l/9/1289.v19.png'
                   strona = 'https://www.voxfm.pl/poznan/'
                   break;
            case 78:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/gwiazdy-dance'
                   radio = 'Gwiazdy Dance'
                   img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                   strona = 'https://www.eska.pl/'
                   break;
            case 79:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/rock-relaks'
                   radio = 'Rock Relaks'
                   img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                   strona = 'https://www.eska.pl/'
                   break;
            case 80:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/new-dance'
                   radio = 'New Dance'
                   img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                   strona = 'https://www.eska.pl/'
                   break;
            case 81:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-rap-20'
                   radio = 'Eska Rap 20'
                   img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                   strona = 'https://www.eska.pl/'
                   break;
            case 82:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/pop-top-40'
                   radio = 'Pop Top 40'
                   img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                   strona = 'https://www.eska.pl/'
                   break;
            case 83:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/rock-do-pracy'
                   radio = 'Rock Do Pracy'
                   img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                   strona = 'https://www.eska.pl/'
                   break;
            case 84:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/eska-braniewo'
                   radio = 'Eska Braniewo'
                   img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                   strona = 'https://www.eska.pl/braniewo/'
                   break;
            case 85:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/dance-top-40'
                   radio = 'Dance Top 40'
                   img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                   strona = 'https://www.eska.pl/'
                   break;
            case 86:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/muzyka-do-pracy'
                   radio = 'Muzyka Do Pracy'
                   img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                   strona = 'https://www.eska.pl/'
                   break;
            case 87:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/special-set'
                   radio = 'Special Set'
                   img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                   strona = 'https://www.eska.pl/'
                   break;
            case 88:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/milosc-w-rytmie-rock'
                   radio = 'Milosc W Rytmie Rock'
                   img = 'https://cdn.onlineradiobox.com/img/l/9/1289.v19.png'
                   strona = 'https://www.eska.pl/'
                   break;
            case 89:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/supernova-rzeszow'
                   radio = 'Supernova Rzeszow'
                   img = 'https://myradioonline.pl/public/uploads/radio_img/radio-wawa/play_250_250.jpg'
                   strona = 'https://www.radiosupernova.pl/'
                   break;
            case 90:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/supernova-gdansk'
                   radio = 'Supernova Gdansk'
                   img = 'https://myradioonline.pl/public/uploads/radio_img/radio-wawa/play_250_250.jpg'
                   strona = ''
                   break;
            case 91:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/supernova-opole'
                   radio = 'Supernova Opole'
                   img = 'https://myradioonline.pl/public/uploads/radio_img/radio-wawa/play_250_250.jpg'
                   strona = 'https://www.radiosupernova.pl/'
                   break;
            case 92:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/vox-fm-radom'
                   radio = 'Vox Fm Radom'
                   img = 'https://cdn.onlineradiobox.com/img/l/9/1289.v19.png'
                   strona = 'https://www.voxfm.pl/radom-grojec/'
                   break;
            case 93:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/radio-go'
                   radio = 'Radio Go'
                   img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                   strona = 'https://www.eska.pl'
                   break;
            case 94:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/vox-fm-gorzow'
                   radio = 'Vox Fm Gorzow'
                   img = 'https://cdn.onlineradiobox.com/img/l/9/1289.v19.png'
                   strona = 'https://www.voxfm.pl/gorzow-wlkp/'
                   break;
            case 95:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/supernova-krakow'
                   radio = 'Supernova Krakow'
                   img = 'https://myradioonline.pl/public/uploads/radio_img/radio-wawa/play_250_250.jpg'
                   strona = 'https://www.radiosupernova.pl/krakow/'
                   break;
            case 96:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/supernova-lodz'
                   radio = 'Supernova Lodz'
                   img = 'https://myradioonline.pl/public/uploads/radio_img/radio-wawa/play_250_250.jpg'
                   strona = 'https://www.radiosupernova.pl/lodz/'
                   break;
            case 97:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/z-wami-fm'
                   radio = 'Z Wami Fm'
                   img = 'https://cdn.onlineradiobox.com/img/l/8/1308.v22.png'
                   strona = 'https://www.radiosupernova.pl/'
                   break;
            case 98:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/supernova-wroclaw'
                   radio = 'Supernova Wroclaw'
                   img = 'https://myradioonline.pl/public/uploads/radio_img/radio-wawa/play_250_250.jpg'
                   strona = 'https://www.radiosupernova.pl/wroclaw/'
                   break;
            case 99:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/supernova-torun'
                   radio = 'Supernova Torun'
                   img = 'https://myradioonline.pl/public/uploads/radio_img/radio-wawa/play_250_250.jpg'
                   strona = 'https://www.radiosupernova.pl/torun/'
                   break;
            case 99:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/supernova-trzebnica'
                   radio = 'Supernova Trzebnica'
                   img = 'https://myradioonline.pl/public/uploads/radio_img/radio-wawa/play_250_250.jpg'
                   strona = 'https://www.radiosupernova.pl/trzebnica/'
                   break;
             case 100:
                   url = 'https://pldm.ml/radio.php?url=https://www.eskago.pl/radio/supernova-konin'
                   radio = 'Supernova Konin'
                   img = 'https://myradioonline.pl/public/uploads/radio_img/radio-wawa/play_250_250.jpg'
                   strona = 'https://www.radiosupernova.pl/konin/'
                   break;
          case 101:
                   url = 'https://stream.open.fm/75'
                   radio = 'Open Fm Suumer Hits'
                   img = 'https://open.fm/logo/125x125/75'
                   strona = 'https://open.fm/play/75'
                   break;
          case 102:
                   url = 'https://stream.open.fm/86'
                   radio = 'Open Fm Summer Freszzz'
                   img = 'https://open.fm/logo/125x125/86'
                   strona = 'https://open.fm/play/86'
                   break;
          case 103:
                   url = 'https://stream.open.fm/100'
                   radio = 'Open Fm Summer Party'
                   img = 'https://open.fm/logo/125x125/100'
                   strona = 'https://open.fm/play/100'
                   break;
          case 104:
                   url = 'https://stream.open.fm/119'
                   radio = 'Open Fm Summer Chill'
                   img = 'https://open.fm/logo/125x125/119'
                   strona = 'https://open.fm/play/119'
                   break;
          case 105:
                   url = 'https://stream.open.fm/125'
                   radio = 'Open Fm Summer Classic'
                   img = 'https://open.fm/logo/125x125/125'
                   strona = 'https://open.fm/play/125'
                   break;
          case 106:
                   url = 'https://stream.open.fm/122'
                   radio = 'Open Fm Summer Polo'
                   img = 'https://open.fm/logo/125x125/122'
                   strona = 'https://open.fm/play/122'
                   break;
          case 107:
                   url = 'https://stream.open.fm/2'
                   radio = 'Open Fm Impreza'
                   img = 'https://open.fm/logo/125x125/2'
                   strona = 'https://open.fm/play/2'
                   break;
          case 108:
                   url = 'https://stream.open.fm/95'
                   radio = 'Open Fm Top 20 Impreza'
                   img = 'https://open.fm/logo/125x125/95'
                   strona = 'https://open.fm/play/95'
                   break;
          case 109:
                   url = 'https://stream.open.fm/81'
                   radio = 'Open Fm 500 Party Hits'
                   img = 'https://open.fm/logo/125x125/81'
                   strona = 'https://open.fm/play/81'
                   break;
          case 110:
                   url = 'https://stream.open.fm/102'
                   radio = 'Open Fm Lejdis Party'
                   img = 'https://open.fm/logo/125x125/102'
                   strona = 'https://open.fm/play/102'
                   break;
          case 111:
                   url = 'https://stream.open.fm/50'
                   radio = 'Open Fm Classic Party'
                   img = 'https://open.fm/logo/125x125/50'
                   strona = 'https://open.fm/play/50'
                   break;
          case 112:
                   url = 'https://stream.open.fm/31'
                   radio = 'Open Fm Dance'
                   img = 'https://open.fm/logo/125x125/31'
                   strona = 'https://open.fm/play/31'
                   break;
          case 113:
                   url = 'https://stream.open.fm/7'
                   radio = 'Open Fm Trance'
                   img = 'https://open.fm/logo/125x125/7'
                   strona = 'https://open.fm/play/7'
                   break;
          case 114:
                   url = 'https://stream.open.fm/5'
                   radio = 'Open Fm House'
                   img = 'https://open.fm/logo/125x125/5'
                   strona = 'https://open.fm/play/5'
                   break;
          case 115:
                   url = 'https://stream.open.fm/110'
                   radio = 'Open Fm Wesele'
                   img = 'https://open.fm/logo/125x125/110'
                   strona = 'https://open.fm/play/110'
                   break;
          case 116:
                   url = 'https://stream.open.fm/8'
                   radio = 'Open Fm Klub 90'
                   img = 'https://open.fm/logo/125x125/8'
                   strona = 'https://open.fm/play/8'
                   break;
          case 117:
                   url = 'https://stream.open.fm/27'
                   radio = 'Open Fm Italo Disco'
                   img = 'https://open.fm/logo/125x125/27'
                   strona = 'https://open.fm/play/27'
                   break;
          case 118:
                   url = 'https://stream.open.fm/21'
                   radio = 'Open Fm Disco Polo'
                   img = 'https://open.fm/logo/125x125/21'
                   strona = 'https://open.fm/play/21'
                   break;
          case 119:
                   url = 'https://stream.open.fm/53'
                   radio = 'Open Fm Top 20 Disco Polo'
                   img = 'https://open.fm/logo/125x125/53'
                   strona = 'https://open.fm/play/53'
                   break;
          case 120:
                   url = 'https://stream.open.fm/12'
                   radio = 'Open Fm Impreza PL'
                   img = 'https://open.fm/logo/125x125/12'
                   strona = 'https://open.fm/play/12'
                   break;
          case 121:
                   url = 'https://stream.open.fm/57'
                   radio = 'Open Fm Disco Polo Freszzz'
                   img = 'https://open.fm/logo/125x125/57'
                   strona = 'https://open.fm/play/57'
                   break;
          case 122:
                   url = 'https://stream.open.fm/49'
                   radio = 'Open Fm Disco Polo Classic'
                   img = 'https://open.fm/logo/125x125/49'
                   strona = 'https://open.fm/play/49'
                   break;
          case 123:
                   url = 'https://stream.open.fm/64'
                   radio = 'Open Fm 100% Hits'
                   img = 'https://open.fm/logo/125x125/64'
                   strona = 'https://open.fm/play/64'
                   break;
          case 124:
                   url = 'https://stream.open.fm/109'
                   radio = 'Open Fm Praca'
                   img = 'https://open.fm/logo/125x125/109'
                   strona = 'https://open.fm/play/109'
                   break;
          case 125:
                   url = 'https://stream.open.fm/10'
                   radio = 'Open Fm #Popularne'
                   img = 'https://open.fm/logo/125x125/10'
                   strona = 'https://open.fm/play/10'
                   break;
          case 126:
                   url = 'https://stream.open.fm/69'
                   radio = 'Open Fm Dzień Dobry'
                   img = 'https://open.fm/logo/125x125/69'
                   strona = 'https://open.fm/play/69'
                   break;
          case 127:
                   url = 'https://stream.open.fm/74'
                   radio = 'Open Fm Dobranoc'
                   img = 'https://open.fm/logo/125x125/74'
                   strona = 'https://open.fm/play/74'
                   break;
          case 128:
                   url = 'https://stream.open.fm/51'
                   radio = 'Open Fm Fun'
                   img = 'https://open.fm/logo/125x125/51'
                   strona = 'https://open.fm/play/51'
                   break;
          case 129:
                   url = 'https://stream.open.fm/120'
                   radio = 'Open Fm Happy'
                   img = 'https://open.fm/logo/125x125/120'
                   strona = 'https://open.fm/play/120'
                   break;
          case 130:
                   url = 'https://stream.open.fm/103'
                   radio = 'Open Fm Sad'
                   img = 'https://open.fm/logo/125x125/103'
                   strona = 'https://open.fm/play/103'
                   break;
          case 131:
                   url = 'https://stream.open.fm/115'
                   radio = 'Open Fm Hot 20 Najnowsze'
                   img = 'https://open.fm/logo/125x125/115'
                   strona = 'https://open.fm/play/115'
                   break;
          case 132:
                   url = 'https://stream.open.fm/96'
                   radio = 'Open Fm Top 20 Pop'
                   img = 'https://open.fm/logo/125x125/96'
                   strona = 'https://open.fm/play/96'
                   break;
          case 133:
                   url = 'http://stream.open.fm/97'
                   radio = 'Open Fm Top 20 PL'
                   img = 'https://open.fm/logo/125x125/97'
                   strona = ''
                   break;
          case 134:
                   url = 'https://stream.open.fm/70'
                   radio = 'Open Fm Top 40 UK'
                   img = 'https://open.fm/logo/125x125/70'
                   strona = 'https://open.fm/play/70'
                   break;
          case 135:
                   url = 'https://stream.open.fm/105'
                   radio = 'Open Fm Top 40 USA'
                   img = 'https://open.fm/logo/125x125/105'
                   strona = 'https://open.fm/play/105'
                   break;
          case 136:
                   url = 'https://stream.open.fm/121'
                   radio = 'Open Fm Love'
                   img = 'https://open.fm/logo/125x125/121'
                   strona = '121'
                   break;
          case 137:
                   url = 'https://stream.open.fm/18'
                   radio = 'Open Fm Sexy'
                   img = 'https://open.fm/logo/125x125/18'
                   strona = 'https://open.fm/play/18'
                   break;
          case 138:
                   url = 'https://stream.open.fm/123'
                   radio = 'Open Fm Cool'
                   img = 'https://open.fm/logo/125x125/123'
                   strona = 'https://open.fm/play/123'
                   break;
          case 139:
                   url = 'https://stream.open.fm/117'
                   radio = 'Open Fm Nauka'
                   img = 'https://open.fm/logo/125x125/117'
                   strona = 'https://open.fm/play/117'
                   break;
          case 140:
                   url = 'https://stream.open.fm/112'
                   radio = 'Open Fm Relaks'
                   img = 'https://open.fm/logo/125x125/112'
                   strona = 'https://open.fm/play/112'
                   break;
          case 141:
                   url = 'https://stream.open.fm/11'
                   radio = 'Open Fm 500 Największych Hitów'
                   img = 'https://open.fm/logo/125x125/11'
                   strona = 'https://open.fm/play/11'
                   break;
          case 142:
                   url = 'https://stream.open.fm/58'
                   radio = 'Open Fm Gwiazdy'
                   img = 'https://open.fm/logo/125x125/58'
                   strona = 'https://open.fm/play/58'
                   break;
          case 143:
                   url = 'https://stream.open.fm/39'
                   radio = 'Open Fm Freszzz'
                   img = 'https://open.fm/logo/125x125/39'
                   strona = 'https://open.fm/play/39'
                   break;
          case 144:
                   url = 'https://stream.open.fm/111'
                   radio = 'Open Fm Polskie Hity'
                   img = 'https://open.fm/logo/125x125/111'
                   strona = 'https://open.fm/play/111'
                   break;
          case 145:
                   url = 'https://stream.open.fm/1'
                   radio = 'Open Fm Po Polsku'
                   img = 'https://open.fm/logo/125x125/1'
                   strona = 'https://open.fm/play/1'
                   break;
          case 146:
                   url = 'https://stream.open.fm/79'
                   radio = 'Open Fm Po Polsku Classic'
                   img = 'https://open.fm/logo/125x125/79'
                   strona = 'https://open.fm/play/79'
                   break;
          case 147:
                   url = 'https://stream.open.fm/17'
                   radio = 'Open Fm Po Polsku Classic 2'
                   img = 'https://open.fm/logo/125x125/17'
                   strona = 'https://open.fm/play/17'
                   break;
          case 148:
                   url = 'https://stream.open.fm/48'
                   radio = 'Open Fm Lejdis Cade'
                   img = 'https://open.fm/logo/125x125/48'
                   strona = 'https://open.fm/play/48'
                   break;
          case 149:
                   url = 'https://stream.open.fm/76'
                   radio = 'Open Fm Crema Cafe'
                   img = 'https://open.fm/logo/125x125/76'
                   strona = 'https://open.fm/play/76'
                   break;
          case 150:
                   url = 'https://stream.open.fm/4'
                   radio = 'Open Fm We Dwoje'
                   img = 'https://open.fm/logo/125x125/4'
                   strona = 'https://open.fm/play/4'
                   break;
          case 151:
                   url = 'https://stream.open.fm/20'
                   radio = 'Open Fm Ballady Wszech Czasów'
                   img = 'https://open.fm/logo/125x125/20'
                   strona = 'https://open.fm/play/20'
                   break;
          case 152:
                   url = 'https://stream.open.fm/19'
                   radio = 'Open Fm Latino'
                   img = 'https://open.fm/logo/125x125/19'
                   strona = 'https://open.fm/play/19'
                   break;
          case 153:
                   url = 'https://stream.open.fm/63'
                   radio = 'Open Fm 100% Justin Biber'
                   img = 'https://open.fm/logo/125x125/63'
                   strona = 'https://open.fm/play/63'
                   break;
          case 154:
                   url = 'https://stream.open.fm/80'
                   radio = 'Open Fm 100% One Direction'
                   img = 'https://open.fm/logo/125x125/80'
                   strona = 'https://open.fm/play/80'
                   break;
          case 155:
                   url = 'https://stream.open.fm/72'
                   radio = 'Open Fm 00s Hits'
                   img = 'https://open.fm/logo/125x125/72'
                   strona = 'https://open.fm/play/72'
                   break;
          case 156:
                   url = 'https://stream.open.fm/14'
                   radio = 'Open Fm 90s Hits'
                   img = 'https://open.fm/logo/125x125/14'
                   strona = 'https://open.fm/play/14'
                   break;
          case 157:
                   url = 'https://stream.open.fm/3'
                   radio = 'Open Fm 80s Hits'
                   img = 'https://open.fm/logo/125x125/3'
                   strona = 'https://open.fm/play/3'
                   break;
          case 158:
                   url = 'https://stream.open.fm/46'
                   radio = 'Open Fm Classic Hits'
                   img = 'https://open.fm/logo/125x125/46'
                   strona = 'https://open.fm/play/46'
                   break;
          case 159:
                   url = 'https://stream.open.fm/24'
                   radio = 'Open Fm Hip-Hop PL'
                   img = 'https://open.fm/logo/125x125/24'
                   strona = 'https://open.fm/play/24'
                   break;
          case 160:
                   url = 'https://stream.open.fm/98'
                   radio = 'Open Fm 500 Hip-Hop Hits'
                   img = 'https://open.fm/logo/125x125/98'
                   strona = 'https://open.fm/play/98'
                   break;
          case 161:
                   url = 'https://stream.open.fm/23'
                   radio = 'Open Fm Hip-Hop Stacja'
                   img = 'https://open.fm/logo/125x125/23'
                   strona = 'https://open.fm/play/23'
                   break;
          case 162:
                   url = 'https://stream.open.fm/93'
                   radio = 'Open Fm Hip-Hop Freszzz'
                   img = 'https://open.fm/logo/125x125/93'
                   strona = 'https://open.fm/play/93'
                   break;
          case 163:
                   url = 'https://stream.open.fm/107'
                   radio = 'Open Fm Hip-Hop Klasyka'
                   img = 'https://open.fm/logo/125x125/107'
                   strona = 'https://open.fm/play/107'
                   break;
          case 164:
                   url = 'https://stream.open.fm/92'
                   radio = 'Open Fm Hip-Hop Ulica'
                   img = 'https://open.fm/logo/125x125/92'
                   strona = 'https://open.fm/play/92'
                   break;
          case 165:
                   url = 'https://stream.open.fm/47'
                   radio = 'Open Fm 100% O.S.T.R'
                   img = 'https://open.fm/logo/125x125/47'
                   strona = 'https://open.fm/play/47'
                   break;
          case 166:
                   url = 'https://stream.open.fm/26'
                   radio = 'Open Fm 500 RnB Hit'
                   img = 'https://open.fm/logo/125x125/26'
                   strona = 'https://open.fm/play/26'
                   break;
          case 167:
                   url = 'https://stream.open.fm/99'
                   radio = 'Open Fm Top 20 Rock'
                   img = 'https://open.fm/logo/125x125/99'
                   strona = 'https://open.fm/play/99'
                   break;
          case 168:
                   url = 'https://stream.open.fm/82'
                   radio = 'Open Fm 500 Rock Hits'
                   img = 'https://open.fm/logo/125x125/82'
                   strona = 'https://open.fm/play/82'
                   break;
          case 169:
                   url = 'https://stream.open.fm/104'
                   radio = 'Open Fm Praca Rock'
                   img = 'https://open.fm/logo/125x125/104'
                   strona = 'https://open.fm/play/104'
                   break;
          case 170:
                   url = 'https://stream.open.fm/77'
                   radio = 'Open Fm Rocks'
                   img = 'https://open.fm/logo/125x125/77'
                   strona = 'https://open.fm/play/77'
                   break;
          case 171:
                   url = 'https://stream.open.fm/29'
                   radio = 'Open Fm Polski Rock'
                   img = 'https://open.fm/logo/125x125/29'
                   strona = 'https://open.fm/play/29'
                   break;
          case 172:
                   url = 'https://stream.open.fm/45'
                   radio = 'Open Fm Polski Rock Classic'
                   img = 'https://open.fm/logo/125x125/45'
                   strona = 'https://open.fm/play/45'
                   break;
          case 173:
                   url = 'https://stream.open.fm/61'
                   radio = 'Open Fm Rock Ballady'
                   img = 'https://open.fm/logo/125x125/61'
                   strona = 'https://open.fm/play/61'
                   break;
          case 174:
                   url = 'https://stream.open.fm/118'
                   radio = 'Open Fm Giganci Rocka'
                   img = 'https://open.fm/logo/125x125/118'
                   strona = 'https://open.fm/play/118'
                   break;
          case 175:
                   url = 'https://stream.open.fm/32'
                   radio = 'Open Fm Classic Rock'
                   img = 'https://open.fm/logo/125x125/32'
                   strona = 'https://open.fm/play/32'
                   break;
          case 176:
                   url = 'https://stream.open.fm/40'
                   radio = 'Open Fm American Rock'
                   img = 'https://open.fm/logo/125x125/40'
                   strona = 'https://open.fm/play/40'
                   break;
          case 177:
                   url = 'https://stream.open.fm/78'
                   radio = 'Open Fm Punk Rock'
                   img = 'https://open.fm/logo/125x125/78'
                   strona = 'https://open.fm/play/78'
                   break;
          case 178:
                   url = 'https://stream.open.fm/54'
                   radio = 'Open Fm 500 Heavy Hits'
                   img = 'https://open.fm/logo/125x125/54'
                   strona = 'https://open.fm/play/54'
                   break;
          case 179:
                   url = 'https://stream.open.fm/108'
                   radio = 'Open Fm Classic Metal'
                   img = 'https://open.fm/logo/125x125/108'
                   strona = 'https://open.fm/play/108'
                   break;
          case 180:
                   url = 'https://stream.open.fm/13'
                   radio = 'Open Fm Ciężkie Brzmienia'
                   img = 'https://open.fm/logo/125x125/13'
                   strona = 'https://open.fm/play/13'
                   break;
          case 181:
                   url = 'https://stream.open.fm/15'
                   radio = 'Open Fm 100% Dżem'
                   img = 'https://open.fm/logo/125x125/15'
                   strona = 'https://open.fm/play/15'
                   break;
          case 182:
                   url = 'https://stream.open.fm/73'
                   radio = 'Open Fm 100% Grabaż'
                   img = 'https://open.fm/logo/125x125/73'
                   strona = 'https://open.fm/play/73'
                   break;
          case 183:
                   url = 'https://stream.open.fm/35'
                   radio = 'Open Fm 100% Kazik'
                   img = 'https://open.fm/logo/125x125/35'
                   strona = 'https://open.fm/play/35'
                   break;
          case 184:
                   url = 'https://stream.open.fm/62'
                   radio = 'Open Fm 100% Metallica'
                   img = 'https://open.fm/logo/125x125/62'
                   strona = 'https://open.fm/play/62'
                   break;
          case 185:
                   url = 'https://stream.open.fm/42'
                   radio = 'Open Fm 100% Linkin Park'
                   img = 'https://open.fm/logo/125x125/42'
                   strona = 'https://open.fm/play/42'
                   break;
          case 186:
                   url = 'https://stream.open.fm/83'
                   radio = 'Open Fm Top 20 Alt'
                   img = 'https://open.fm/logo/125x125/83'
                   strona = 'https://open.fm/play/83'
                   break;
          case 187:
                   url = 'https://stream.open.fm/55'
                   radio = 'Open Fm 500 Alternative Hits'
                   img = 'https://open.fm/logo/125x125/55'
                   strona = 'https://open.fm/play/55'
                   break;
          case 188:
                   url = 'https://stream.open.fm/6'
                   radio = 'Open Fm ALT Freszzz'
                   img = 'https://open.fm/logo/125x125/6'
                   strona = 'https://open.fm/play/6'
                   break;
          case 189:
                   url = 'https://stream.open.fm/9'
                   radio = 'Open Fm ALT Club'
                   img = 'https://open.fm/logo/125x125/9'
                   strona = 'https://open.fm/play/9'
                   break;
          case 190:
                   url = 'https://stream.open.fm/34'
                   radio = 'Open Fm ALT Cafe'
                   img = 'https://open.fm/logo/125x125/34'
                   strona = 'https://open.fm/play/34'
                   break;
          case 191:
                   url = 'https://stream.open.fm/36'
                   radio = 'Open Fm ALT PL'
                   img = 'https://open.fm/logo/125x125/36'
                   strona = 'https://open.fm/play/36'
                   break;
          case 192:
                   url = 'https://stream.open.fm/43'
                   radio = 'Open Fm ALT Classic'
                   img = 'https://open.fm/logo/125x125/43'
                   strona = 'https://open.fm/play/43'
                   break;
          case 193:
                   url = 'https://stream.open.fm/94'
                   radio = 'Open Fm 500 Electronic Hits'
                   img = 'https://open.fm/logo/125x125/94'
                   strona = 'https://open.fm/play/94'
                   break;
          case 194:
                   url = 'https://stream.open.fm/106'
                   radio = 'Open Fm Miejska Stacja'
                   img = 'https://open.fm/logo/125x125/106'
                   strona = 'https://open.fm/play/106'
                   break;
          case 195:
                   url = 'https://stream.open.fm/68'
                   radio = 'Open Fm Dubstep'
                   img = 'https://open.fm/logo/125x125/68'
                   strona = 'https://open.fm/play/68'
                   break;
          case 196:
                   url = 'https://stream.open.fm/41'
                   radio = 'Open Fm Drumn Bass'
                   img = 'https://open.fm/logo/125x125/41'
                   strona = 'https://open.fm/play/41'
                   break;
          case 197:
                   url = 'https://stream.open.fm/33'
                   radio = 'Open Fm Chillout'
                   img = 'https://open.fm/logo/125x125/33'
                   strona = 'https://open.fm/play/33'
                   break;
         case 198:
                   url = 'https://stream.open.fm/116'
                   radio = 'Open Fm Bieganie'
                   img = 'https://open.fm/logo/125x125/116'
                   strona = 'https://open.fm/play/116'
                   break;
         case 199:
                   url = 'https://stream.open.fm/65'
                   radio = 'Open Fm Fitness'
                   img = 'https://open.fm/logo/125x125/65'
                   strona = 'https://open.fm/play/65'
                   break;
         case 200:
                   url = 'https://stream.open.fm/101'
                   radio = 'Open Fm Trenicg'
                   img = 'https://open.fm/logo/125x125/101'
                   strona = 'https://open.fm/play/101'
                   break;
         case 201:
                   url = 'http://stream.open.fm/30'
                   radio = 'Open Fm 500 Reggae Hits'
                   img = 'https://open.fm/logo/125x125/30'
                   strona = '30'
                   break;
         case 202:
                   url = 'https://stream.open.fm/22'
                   radio = 'Open Fm Polish Reggae Stylee'
                   img = 'https://open.fm/logo/125x125/22'
                   strona = 'https://open.fm/play/22'
                   break;
         case 203:
                   url = 'https://stream.open.fm/25'
                   radio = 'Open Fm Retro Cafe'
                   img = 'https://open.fm/logo/125x125/25'
                   strona = 'https://open.fm/play/25'
                   break;
         case 204:
                   url = 'https://stream.open.fm/60'
                   radio = 'Open Fm Smooth Jazz'
                   img = 'https://open.fm/logo/125x125/60'
                   strona = 'https://open.fm/play/60'
                   break;
         case 205:
                   url = 'https://stream.open.fm/67'
                   radio = 'Open Fm Muzyka Klasyczna'
                   img = 'https://open.fm/logo/125x125/67'
                   strona = 'https://open.fm/play/67'
                   break;
         case 206:
                   url = 'https://stream.open.fm/38'
                   radio = 'Open Fm Muzyka Filmowa'
                   img = 'https://open.fm/logo/125x125/38'
                   strona = 'https://open.fm/play/38'
                   break;
         case 207:
                   url = 'https://stream.open.fm/37'
                   radio = 'Open Fm Kraina Łagodności'
                   img = 'https://open.fm/logo/125x125/37'
                   strona = 'https://open.fm/play/37'
                   break;
         case 208:
                   url = 'https://stream.open.fm/28'
                   radio = 'Open Fm Szanty'
                   img = 'https://open.fm/logo/125x125/28'
                   strona = 'https://open.fm/play/28'
                   break;
         case 209:
                   url = 'https://stream.open.fm/59'
                   radio = 'Open Fm Biesiada'
                   img = 'https://open.fm/logo/125x125/59'
                   strona = 'https://open.fm/play/59'
                   break;
         case 210:
                   url = 'https://stream.open.fm/66'
                   radio = 'Open Fm Biesiada Śląska'
                   img = 'https://open.fm/logo/125x125/66'
                   strona = 'https://open.fm/play/66'
                   break;
         case 211:
                   url = 'https://stream.open.fm/16'
                   radio = 'Open Fm Kids'
                   img = 'https://open.fm/logo/125x125/16'
                   strona = 'https://open.fm/play/16'
                   break;
         case 212:
                   url = 'https://stream.open.fm/52'
                   radio = 'Open Fm Odgłosy Natury'
                   img = 'https://open.fm/logo/125x125/52'
                   strona = 'https://open.fm/play/52'
                   break;
          case 213:
                   url = 'https://pl2-play.adtonos.com/zote-przeboje'
                   radio = 'Radio Zlote Przeboje'
                   img = 'https://cdn.onlineradiobox.com/img/l/0/1300.v5.png'
                   strona = 'https://zloteprzeboje.pl/'
                   break;
          case 214:
                   url = 'https://n-15-13.dcs.redcdn.pl/sc/o2/Eurozet/live/audio.livx?audio=5'
                   radio = 'Radio Zet'
                   img = 'https://cdn.onlineradiobox.com/img/l/2/1312.v8.png'
                   strona = 'https://www.radiozet.pl/'
                   break;
          case 215:
                   url = 'https://s2.radioparty.pl:8015/stream'
                   radio = 'RadioParty.pl'
                   img = "https://cdn.onlineradiobox.com/img/l/7/1797.v6.png"
                   strona = 'https://radioparty.pl/'
                   break; 
          case 216:
                   url = 'https://sluchaj2.radiopark.biz.pl:8443/stream'
                   radio = 'Radio Park'
                   img = "https://cdn.onlineradiobox.com/img/l/7/1367.v3.png"
                   strona = 'https://radiopark.fm/'
                   break;  
          case 217:
                   url = 'https://stream.radiopiekary.pl/'
                   radio = 'Radio Piekary'
                   img = 'https://cdn.onlineradiobox.com/img/l/1/1421.v6.png'
                   strona = 'https://radiopiekary.pl/'
   
                   break;      
          case 218:
                   url = 'https://stream4.nadaje.com:8745/jard1'
                   radio = 'Radio Jard'
                   img = 'https://cdn.onlineradiobox.com/img/l/8/1768.v10.png'
                   strona = 'https://radio.jard.pl/'
                   break;
          case 219:
                   url = 'https://streaming.radio.lublin.pl:8843/radiofreee'
                   radio = 'Radio Freee'
                   img = "https://cdn.onlineradiobox.com/img/l/7/1397.v2.png"
                   strona = 'https://radiofreee.pl/'
   
                   break;  
          case 220:
                   url = 'http://stream2.nadaje.com:8076/;stream'
                   radio = 'Radio Fama'
                   img = 'https://cdn.onlineradiobox.com/img/l/5/46245.v3.png'
                   strona = 'https://radiofama.com.pl/'
                   break; 
          case 221:
                   url = 'https://n23a-eu.rcs.revma.com/0004tehdxzzuv?rj-ttl=5&rj-tok=AAABgivw7PIAZhEDxPMf9wHwOg'
                   radio = 'Radio Nuta'
                   img = 'https://cdn.onlineradiobox.com/img/l/2/79762.v6.png'
                   strona = 'https://www.radionuta.pl/'
                   break;
          case 222:
                   url = 'http://193.0.98.66:8005/;'
                   radio = 'Radio Kampus'
                   img = 'https://cdn.onlineradiobox.com/img/l/9/1399.v1.png'
                   strona = 'https://radiokampus.fm/'
                   break;
          case 223:
                   url = 'https://stream10.hosterion.pl/8016/stream'
                   radio = 'Radio Max Hit Polska 1'
                   img = 'https://cdn.onlineradiobox.com/img/l/5/75735.v18.png'
                   strona = 'https://onlineradiobox.com/pl/marekg/'
                   break;
          case 224:
                   url = 'https://n16a-eu.rcs.revma.com/1nnezw8qz7zuv?rj-ttl=5&rj-tok=AAABgiwAOeIAzkVhl1f3oG7tlQ'
                   radio = 'Radio Muzo FM'
                   img = 'https://cdn.onlineradiobox.com/img/l/8/1788.v3.png'
                   strona = 'https://www.muzo.fm/'
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
             if (interaction) Audio.addAudio(info, interaction.guild, false);
             const embed = new MessageEmbed()
             .setTitle('Radio')
             .setColor('RANDOM')
             .setDescription(`Słuchasz aktualnie stacji [${radio}](${strona})`)
             .setThumbnail(img)
             if (interaction) interaction.reply({ embeds: [embed] }) 
     
         this.callNextAction(cache);
         },
     
       mod() {},
   
     };