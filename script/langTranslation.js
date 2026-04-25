
document.addEventListener("DOMContentLoaded", function() {
  
  
  const translation = {

        ta: {
            tcap    : "அடிப்படை சீரமைப்பு",
            tmac    : "இயந்திரங்கள்",
            tmac_par : "தமிழகத்தில் உள்ள வாடிக்கையாளர்களின் தேவைகளை பூர்த்தி செய்யும் துறையில் முன்னணியில் உள்ள தொழில்நுட்பத்தை கொண்ட துப்பாக்கிகள் இரு மில்ல்களிலும் நாம் இறக்குமதி செய்யப்பட்ட இயந்திரங்களை நிறுவியுள்ளோம். இயந்திரங்கள் Bhuler, ஸ்விட்சர்லாந்து போன்ற இடங்களிருந்து இறக்குமதி செய்யப்படுகின்றன.",
            tmeq    : "நறுக்கும் உபகரணங்கள் நிறுவப்பட்டுள்ளன",

            tmeqa   : "மிள்ட்டிங் செய்யும் முன் கோதுமையை சுத்தம் செய்ய கீழ்க்காணும் இயந்திரங்களை நிறுவி உள்ளோம். கோதுமை அடித்தளத்திலிருந்து மேல்நிலை மாடிகளுக்கு ஏற்றுதல் உடனாக சுத்தம் செய்யும் இயந்திரங்களுக்கு எடுத்துச்செல்லப்படுகிறது..",
            tmeqb   : "காந்த விதிவிலக்கு: கோதுமை ஒரு ஹாப்பரின் வழியாக கடத்தப்படுகிறது. இந்த ஹாப்பரின் மீது ஒரு தட்டைமாதிரி உணவு சக்கரம் உள்ளது, இது ஹாப்பரிலிருந்து கோதுமையை ஒரு இளவான ஓட்டத்தில் வெளியேற்றுகிறது மற்றும் காந்தத்தின் முகப்புக் தாள்களின் மீது ஓடுகிறது.",
            tmeqc   : "அஸ்பிரேட்டர்: இந்த இயந்திரம் ஒளிராமையான கூந்தல் கோதுமை போன்று ஒளிராத இலமான பொருட்களை அகற்ற வடிவமைக்கப்பட்டுள்ளது",
            tmeqd   : "பெரிச்சுயும் கருவி: <br>இந்த இயந்திரம் துளை கொண்ட உலோகத்தால் மூடிய சுற்றும் சிலிண்டர்களால் அமைந்துள்ளது.. திறந்த துவாரங்கள் வழியாக செல்ல அதிக அளவில் பெரிய பொருள் அனைத்தும் அழுத்தப்படுகின்றது.",
            tmeqe   : "களிப்பான்:<br>கோதுமையை களிப்பது என்பது தேவையில்லாத துரிதமூட்டும் மற்றும் கோதுமை முடிகளை அகற்றுவதற்காக ஆகும். இந்த பொருள் கோதுமையுடன் கோதுமை உரொடுகும் செயலால் அகற்றப்படுகிறது.",
            tmeqf   : "<strong>கோதுமை கழுவிகள்:</strong><br>இவை வெறுமையான ஈரப்பத அழுத்தப் பகுதி மற்றும் துளைந்த விற்சர் பகுதியைக் கொண்ட சிலிண்டர் ஒன்றை உள்ளடக்கியவை. ஒரு சுழற்சி நூர்முனையுள்ள கலப்படக்காரி சிலிண்டரின் முழு நீளத்தில் இயங்குகிறது. பின்னர் கோதுமை இயந்திரத்திற்கு நுழையும் போது மற்றும் சிலிண்டரில் பல இடங்களில் தண்ணீர் பயன்படுத்தப்படுகிறது.",
            tmeqg   : "ரோல் மில்(சீன இயந்திரம் மற்றும் புலர் ஸ்விஸ்): <br> இந்த இயந்திரத்தில் 2 ஜோடி ரோல்கள் உள்ளன. ஒவ்வொரு ஜோடியிலும் ஒரு ரோல் சரியாக மாற்றக்கூடியதாக இருக்கும், இது ரோல்களை நெருக்க அல்லது தூரமாக வலியுறுத்த அனுமதிக்கும். ரோல்கள் சில்ல்-ஹார்டன்ட் காஸ்ட் இரும்பினால் செய்யப்பட்டவை. ரோல்கள் கோதுமை அரிசியின் தானியங்களை உடைக்க பயன்படுகின்றன. ரோல்கள் தங்கள் மேற்பரப்பில் கொம்புரியர்ப்பட்டுள்ளன, ஆகவே ஒவ்வொரு ஜோடியின் ரோல்கள் ஒருவருக்கொருவர் திரும்பும்போது, அந்த ரோல்கள் கோதுமை தானியத்தின் ப்ரான் உறைகளை நசுக்காமல் திறக்கின்றன.",
            tmeqh   : "சுத்திகரிப்பான்: <br> சுத்திகரிப்பு என்பது வெறும் எண்டோஸ்பெர்மில் இருந்து ப்ரேன் துணிகளை பிரிப்பதைக் குறிக்கும். இயந்திரம் சுழற்சி ஊட்டிகள் கொண்டு தொங்கிய சீவுக்கு செல்லும் முறையில் அமைக்கப்பட்டுள்ளது. சீவின் கீழ் காற்று இயந்திரத்தில் நுழைகிறது. சாய்ந்த சீவின் பாரஸ்பர இயக்கம் பங்குகளை尾இறுதி நோக்கி நகர்த்தி, காற்று அதன் வழியாக செல்ல அனுமதிக்கிறது. பின்னர் பங்குகள் ஹாப்பர் வழியாக கீழே செல்கின்றன.",
            tmeqi   : "சிப்டர்கள்: <br> சிப்டர்கள் ஒரு சுற்றுச் சுழற்சி முறையில் பயணிக்கும், விட்டம் 2 முதல் 4 அங்குலங்கள் வரை ஒரு பரிபூரண வட்டத்தை உருவாக்கும். பங்கு சிப்டர்களில் நுழையும் போது அது ஒரு விசை மீது விழும், கனமான துகள்கள் தொகுதியின் கீழ் செல்லும் மற்றும் திறப்புகளைக் கடக்கும். இலகுவான துகள்கள் பின்தண்டை மூலையில் வெளியேறும், ரோல்களுக்கு மீண்டும் அனுப்பப்படும்.",
            tmeqj   : "அக்ரோமேடிக் AG சிஸ்டம்: <br> இது கோதுமை ஈரப்பதத்தை கட்டுப்படுத்தும் ஒரு சிஸ்டம். இந்த உபகரணம் சுவிட்சர்லாந்தಿನಿಂದ இறக்குமதி செய்யப்பட்டதாகும். இது தயாரிக்கப்பட்ட உற்பத்திகளின் சரியான ஈரப்பத்தை பராமரிக்கும்.",
            tmeqk   : "SMAFPL & SMRFMPL-இல் 1600 எம்டி கொள்ளளவு கொண்ட கோதுமை சேமிப்புக்கான பின்",
            tmeql   : "கோடவுன் திறன்",
            tmeqm   : "இரு நிறுவனங்களில் மொத்தம் 11500 எம்டிஎஸ் கொள்ளளவு கூடைக்களம் உள்ளது. SMAFPL க்கு சுமார் 7000 எம்டிஎஸ் மற்றும் SMRFMPL க்கு சுமார் 4500 எம்டிஎஸ் கூடைக்களம் கிடைத்துள்ளது.",
            tmeqn   : "பல ஹாப்பர்களிலிருந்து கோதுமையை கலந்து கொள்ள A/C டிரைவர்களால் கட்டுப்படுகிற வால்யூமெட்ரிக் ஃபீடர் கட்டுப்பாட்டு அமைப்பு.",
            tmeqo   : "மிகவும் நீண்ட காலம் சேமிக்கக்கூடிய சூஜி 드்ரையர் அமைப்பு.",
            tmeqp   : "மேலும் மேம்படுத்தலுக்கான தேவையை உணர்ந்து, முதல் மில்ஸ் அவற்றின் தரமான உயர்தர பொருட்களை உற்பத்தி செய்ய பேறு, பின்வரும் உயர் தொழில்நுட்ப சாதனங்களுடன் தொடர்ந்து புதுப்பிக்கப்பட்டது: தேவ்ஸ்டோனர், பூரிபையர், ரோலர்கள், பின்கள் போன்றவை, ఇవన్నీ இறக்குமதி செய்யப்பட்டுள்ளன.",

            tlbr    : "கூடாரம்",
            tlbr_pr : "மில்கள் முழுமையான ஆய்வுகூடத்துடன் உயர்தர ஆய்வக உபகரணங்களை போன்ற அல்வோக்ராஹ், லேப்மில், ஈரப்பத வெல், எஸ்ஆர்சி மற்றும் கிளூட்டன் வாஷர் கொண்டு சிறப்பிக்கப்பட்டுள்ளன. நிறுவனம் விட்டு செல்லும்முன் தயாரிப்புகள் உயர்தரத்தில் உள்ளதா என்று உறுதி செய்யும் வகையில் ஒவ்வொரு மணித்தியாளத்துக்குமே தரம் பரிசோதிக்கப்படுகிறது..",
            ttran   : "யூட்டின் ரெயில்வே ஹெடிலிருந்து அரிசி மில்களுக்கு செல்ல மற்றும் அரிசி மாவு வழங்குவதற்காக, நிறுவனம் 15 லாரிகள் மற்றும் வான்கள் கொண்ட ஒரு வண்டியைக் கொண்டுள்ளது.",
            tgen    : "ஜென்செட்",
            telec1  : "மின்சாரம்",
            telec1_pr : "SMRFM மற்றும் SMAF-இல் தொடர்ச்சியான மின்சார வழங்கல் உள்ளது, SMRFMPL-இல் 500KVA, 380KVA மற்றும் 200KVA திறனைக் கொண்ட மூன்று ஜெனரேட்டர்களை நிறுவியதன் மூலம் மற்றும் SMAFPL-இல் முறையாக 500KVA, 380KVA திறனைக் கொண்ட இரண்டு ஜெனரேட்டர்களை நிறுவியதன் மூலம்.",
            telec2  : "மின்சாரம்",
            telec2_pr : "SMRFMPL-இல் 650 KVA இணைக்கப்பட்ட மொத்த பாரம் உள்ளது, இது மாதம் 250000 யூனிட்கள் பயன்படுத்துகிறது மற்றும் SMAFPL-இல் 600 KVA இணைக்கப்பட்ட மொத்த பாரம் உள்ளது, இது மாதம் 320000 யூனிட்கள் பயன்படுத்துகிறது.",
            tsolar  : "காற்று மற்றும் சோலார் சக்தி துறை",
            tsolar_pr : "இந்த குழுவிற்கு பேங்களூரு மாவட்டத்தின் yyyyz பகுதியின் அருகே 10 மெகாவாட் திறன் கொண்ட 31 காற்று மின்சார உற்பத்தியாளர்கள் (Wind Electric Generators) நிறுவப்பட்டுள்ளன. இந்த WEGs மின்சாரம் உற்பத்தி செய்ய உதவுகிறது மற்றும் எங்கள் தொழிற்சாலைகள் பயன்படுத்தும் மின்சாரத்திற்கு எதிராக மின்சார கட்டணத்தில் கழிக்கப்பட்டுள்ளது. உற்பத்தியாகும் மீதமுள்ள மின்சாரம் மற்ற தொழிற்சாலைகளுக்கு EB நெட்வார்க் மூலம் விற்கப்படுகிறது. குழு சூரிய மின் உற்பத்தியில் (Solar power plant) மூலமும் செயல்படுகிறது. தமிழகத்தின் காங்கேயம் மற்றும் தின்டுக்கல் பகுதிகளில் சுமார் 20 மெகாவாட் சூரிய மின் நிலையங்கள் நிறுவப்பட்டுள்ளன. உற்பத்தியாகும் மின்சாரம் TNEB நெட்வார்க் மூலம் வேறு தொழிற்சாலைகளுக்கு விற்கப்படுகிறது. காற்று மற்றும் சூரிய மின் உற்பத்தியின் மொத்த வருவாய் வருடத்திற்கு 25 கோடியை உருவாக்குகிறது.",

            twrk    : "பணிமனை",
            twrk_pr : "சமபெணிய பணியினை பராமரிக்க ஒரு முழுமையான பட்டறையும் போதுமான பயிற்சியுள்ள ஊழியர்களும் உள்ளனர்."

        },
        
        en : {
            tcap    : "Infrastructure",
            tmac    : "Machineries",
            tmac_par : "We have installed imported machineries in both the mills which possess the state of the art technology to cater to the needs of the customers in Tamilnadu. Machineries are imported from.. Bhuler, Swiss",
            tmeq    : "Milling Equipments Installed",
            
            tmeqa   : "We have installed the following machines for cleaning of wheat before milling. The wheat is conveyed to the cleaning machines from the bottom floor to the floors on top through elevators..",
            tmeqb   : "Magnetic separator: The wheat is passed through a hopper. On this hopper is a corrugated feed roll which feeds the wheat out of the hopper in a thin stream and runs down over the face plates of the magnet.",
            tmeqc   : "The Aspirator:This machine is designed to remove light materials such as light shriveled grains of wheat",
            tmeqd   : "Separator: <br>This machine consists of revolving cylinders covered with perforated metal.. Any material that is too large to pass through the openings is scalped off.",
            tmeqe   : "The Scourer:</strong><br>The scouring of wheat is for the removal of supferflous brewing of and wheat hairs.This material is removed by rubbing action of wheat against wheat .",
            tmeqf   : "<strong>Wheat Washers:</strong><br>They consist of a cylinder having a blank wetting section and a perforated whizzer section. A spiral bladed agitator runs the full length of the cylinder.Then water is applied to the wheat as it enters the machine and at a number of places in the cylinder.",
            tmeqg   : "Roll Mill(Chinese Machine and Bhuler Swiss): <br> This machine houses 2 pairs of rolls. In each pair of rolls, one is adjustable allowing the rolls to be drawn closer or forced farther apart.The rolls are made of chill-hardened cast iron.The rolls are used to break open the wheat kernels.The rolls are corrugated on their surface so that as the rolls in a pair turn towards each other ,they unroll the bran coats on the kernel instead of crushing them.",
            tmeqh   : "Purifier: <br> Purification is merely a separation of bran particles from the endosperm .The machine consists of roll feeders leading to suspended sieve. Air enters the machine below the sieve .The reciprocal motion of the inclined sieve moves the stock towards the tail end allowing the air to pass through it.Then the stocks are hoppered down.",
            tmeqi   : "Sifters: <br> Sifters travel in a gyratory manner,making a perfect circle of 2 to 4 inches in diameter. As the stock enters the sifters it falls upon a sieve, the heavier particles work to the bottom of the mass and pass through the openings.While the lighter particles are discharged over the tail end send back to rolls.",
            tmeqj   : "Agromatic AG system: <br> Which is a wheat dampening control system. This equipment was imported from Switzerland. This maintains the accurate moisture in the finished products.",
            tmeqk   : "Bin for storing wheat with a capacity of 1600 MT in SMAFPL & SMRFMPL",
            tmeql   : "Godown Capacity",
            tmeqm   : "There are 11500 MTS capacity of Godowns in two Companies. SMAFPL got about 7000 MTS and SMRFMPL got about 4500 MTS of storage Godown respectively",
            tmeqn   : "Volumetric Feeder Control system controlled by A/C drivers for blending wheat from various hoppers.",
            tmeqo   : "Sooji Dryer system which gives a longer shelf life.",
            tmeqp   : "Realizing the need for further upgradation the First mill was further revamped now and then with latest state of art equipments like Destoner , Purifier, Rollers, Bins etc. which are imported to produce better quality of products.",

            tlbr    : "Liboratory",
            tlbr_pr : "The mills are equipped with a full fledged laboratory with high quality laboratory Equipments like Alvograh, Labmill, Moisture Bell, SRC and Gluten washer. The quality is tested every hour to ensure that the products are of high standards before it leaves the Companys’ premises.",
            ttran   : "For movement of wheat from Railhead to mills and for delivery of wheat flour, the Company owns a fleet of 15 numbers of Lorries and Vans.",
            tgen    : "Genset",
            telec1  : "Electricity",
            telec1_pr : "We have an uninterrupted power supply in both SMRFM & SMAF with the installation of three generators having capacity of 500KVA,380 KVA and 200KVA in SMRFMPL and two generators with a capacity of 500KVA,380 KVA in SMAFPL respectively",
            telec2  : "Electricity",
            telec2_pr : "We have a connected load of 650 KVA in SMRFMPL consuming 250000 units per month and A connected load of 600 KVA in SMAFPL consuming 320000 unit per month.",
            tsolar  : "Wind & Solar Power Division",
            tsolar_pr : "The group has 31 Wind Electric Generators of 10MW installed capacity near yyyyz area of Banglore district. The WEGs helps in generating power and is set off in the EB bill against the power consumed by our mills. The Surplus power generated are sold to other Industries through EB Network Group also entered into power generation through Solar power plant. About 20 MW Solar power plants is erected in Kangeyam & Dindigul area in Tamil Nadu. The Power generated are sold to different Industries through TNEB Network The total turnover of wind & solar comprises of 25 crores Per Year.",

            twrk    : "Workshop",
            twrk_pr : "There is a full fledged workshop and adequate trained personnel are available to maintain the equipments on a regular basis."
       
        }

    }


    const langSetUp = document.querySelector("select");
    
    let icap = document.getElementById("icap"); 
    let mac = document.getElementById("mac");     
    let mac_par = document.getElementById("mac-par");   
    let meq = document.getElementById("meq");     
    
    let meqa = document.getElementById("meqa");
    let meqb = document.getElementById("meqb");
    let meqc = document.getElementById("meqc");
    let meqd = document.getElementById("meqd");
    let meqe = document.getElementById("meqe");
    let meqf = document.getElementById("meqf");
    let meqg = document.getElementById("meqg");
    let meqh = document.getElementById("meqh");
    let meqi = document.getElementById("meqi");
    let meqj = document.getElementById("meqj");
    let meqk = document.getElementById("meqk");
    let meql = document.getElementById("meql");
    let meqm = document.getElementById("meqm");
    let meqn = document.getElementById("meqn");
    let meqo = document.getElementById("meqo");
    let meqp = document.getElementById("meqp");
    let lbr = document.getElementById("lbr");
    let lbr_pr = document.getElementById("lbr_pr");
    let tran = document.getElementById("tran");
    let gen = document.getElementById("gen");
    let elec1 = document.getElementById("elec1");
    let elec1_pr = document.getElementById("elec1_pr");
    let elec2 = document.getElementById("elec2");
    let elec2_pr = document.getElementById("elec2_pr");
    let solar = document.getElementById("solar");
    let solar_pr = document.getElementById("solar_pr");
    let wrk = document.getElementById("wrk");
    let wrk_pr = document.getElementById("wrk_pr");





    langSetUp.addEventListener("change", (event) => {
        setLanguage(event.target.value)
    })

    const setLanguage = (language) => {
        // console.log("inside change" , icap);
        if(language == "ta"){
            icap.innerText = translation.ta.tcap;
            mac.innerHTML = translation.ta.tmac;
            mac_par.innerHTML = translation.ta.tmac_par;
            meq.innerHTML = translation.ta.tmeq;

            meqa.innerHTML = translation.ta.tmeqa;
            meqb.innerHTML = translation.ta.tmeqb;
            meqc.innerHTML = translation.ta.tmeqc;
            meqd.innerHTML = translation.ta.tmeqd;
            meqe.innerHTML = translation.ta.tmeqe;
            meqf.innerHTML = translation.ta.tmeqf;
            meqg.innerHTML = translation.ta.tmeqg;
            meqh.innerHTML = translation.ta.tmeqh;
            meqi.innerHTML = translation.ta.tmeqi;
            meqj.innerHTML = translation.ta.tmeqj;
            meqk.innerHTML = translation.ta.tmeqk;
            meql.innerHTML = translation.ta.tmeql;
            meqm.innerHTML = translation.ta.tmeqm;
            meqn.innerHTML = translation.ta.tmeqn;
            meqo.innerHTML = translation.ta.tmeqo;
            meqp.innerHTML = translation.ta.tmeqp;
            lbr.innerHTML = translation.ta.tlbr;
            // lbr_pr.innerHTML = translation.ta.tlbr_pr;
            // tran.innerHTML = translation.ta.ttran;
            gen.innerHTML = translation.ta.tgen;
            elec1.innerHTML = translation.ta.telec1;
            // elec1_pr.innerHTML = translation.ta.telec1_pr;
            elec2.innerHTML = translation.ta.telec2;
            // elec2_pr.innerHTML = translation.ta.telec2_pr;
            solar.innerHTML = translation.ta.tsolar;
            // solar_pr.innerHTML = translation.ta.tsolar_pr;
            // wrk.innerHTML = translation.ta.twrk;
            // wrk_pr.innerHTML = translation.ta.twrk_pr;


        }
        else if( language == "en"){
            icap.innerText = translation.en.tcap;
            mac.innerHTML = translation.en.tmac;
            mac_par.innerHTML = translation.en.tmac_par;
            meq.innerHTML = translation.en.tmeq;

            meqa.innerHTML = translation.en.tmeqa;
            meqb.innerHTML = translation.en.tmeqb;
            meqc.innerHTML = translation.en.tmeqc;
            meqd.innerHTML = translation.en.tmeqd;
            meqe.innerHTML = translation.en.tmeqe;
            meqf.innerHTML = translation.en.tmeqf;
            meqg.innerHTML = translation.en.tmeqg;
            meqh.innerHTML = translation.en.tmeqh;
            meqi.innerHTML = translation.en.tmeqi;
            meqj.innerHTML = translation.en.tmeqj;
            meqk.innerHTML = translation.en.tmeqk;
            meql.innerHTML = translation.en.tmeql;
            meqm.innerHTML = translation.en.tmeqm;
            meqn.innerHTML = translation.en.tmeqn;
            meqo.innerHTML = translation.en.tmeqo;
            meqp.innerHTML = translation.en.tmeqp;
            lbr.innerHTML = translation.en.tlbr;
            // lbr_pr.innerHTML = translation.en.tlbr_pr;
            // tran.innerHTML = translation.en.ttran;
            gen.innerHTML = translation.en.tgen;
            elec1.innerHTML = translation.en.telec1;
            // elec1_pr.innerHTML = translation.en.telec1_pr;
            elec2.innerHTML = translation.en.telec2;
            // elec2_pr.innerHTML = translation.en.telec2_pr;
            solar.innerHTML = translation.en.tsolar;
            // solar_pr.innerHTML = translation.en.tsolar_pr;
            // wrk.innerHTML = translation.en.twrk;
            // wrk_pr.innerHTML = translation.en.twrk_pr;

            
            
        }
    }


});



