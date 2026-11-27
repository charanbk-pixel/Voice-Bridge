const LANGS=[
["en","English","en-IN"],["hi","हिन्दी","hi-IN"],["kn","ಕನ್ನಡ","kn-IN"],["ta","தமிழ்","ta-IN"],["te","తెలుగు","te-IN"],
["ml","മലയാളം","ml-IN"],["mr","मराठी","mr-IN"],["bn","বাংলা","bn-IN"],["gu","ગુજરાતી","gu-IN"],["pa","ਪੰਜਾਬੀ","pa-IN"],
["or","ଓଡ଼ିଆ","or-IN"],["as","অসমীয়া","as-IN"],["ur","اردو","ur-IN"],["ne","नेपाली","ne-IN"],["mai","मैथिली","hi-IN"],
["kok","कोंकणी","hi-IN"],["sd","سنڌي","sd-IN"],["ks","کٲشُر","ur-IN"],["doi","डोगरी","hi-IN"],["brx","बड़ो","hi-IN"],
["sat","ᱥᱟᱱᱛᱟᱲᱤ","hi-IN"],["mni","ꯃꯤꯇꯩꯂꯣꯟ","hi-IN"],["sa","संस्कृतम्","hi-IN"]];
const NAMES={en:"English",hi:"Hindi",kn:"Kannada",ta:"Tamil",te:"Telugu",ml:"Malayalam",mr:"Marathi",bn:"Bengali",gu:"Gujarati",pa:"Punjabi",or:"Odia",as:"Assamese",ur:"Urdu",ne:"Nepali",mai:"Maithili",kok:"Konkani",sd:"Sindhi",ks:"Kashmiri",doi:"Dogri",brx:"Bodo",sat:"Santali",mni:"Manipuri (Meitei)",sa:"Sanskrit"};
const RTL=new Set(["ur","sd","ks"]);
// keys: title, lead, speak, ph, pickDoc, pickProblem, bring, where, office, call, listen, note
const UI={
en:{title:"Fix your documents with your voice",lead:"Tell us what needs correcting. We will tell you where to go and which originals to carry.",speak:"Tap and speak",ph:"Example: my name is wrong in my ration card",pickDoc:"Choose your document",pickProblem:"What needs to be corrected?",bring:"Bring these original documents",where:"Where to go",office:"Find nearest office",call:"Call helpline",listen:"Read aloud",note:"Rules differ by state and change over time. Confirm with the office or helpline before you go."},
hi:{title:"अपनी आवाज़ से दस्तावेज़ ठीक करवाएँ",lead:"बताइए क्या सुधार करना है। हम बताएँगे कहाँ जाना है और कौन से मूल दस्तावेज़ ले जाने हैं।",speak:"दबाएँ और बोलें",ph:"जैसे: मेरे राशन कार्ड में नाम गलत है",pickDoc:"अपना दस्तावेज़ चुनें",pickProblem:"क्या सुधार करना है?",bring:"ये मूल दस्तावेज़ साथ ले जाएँ",where:"कहाँ जाना है",office:"नज़दीकी कार्यालय खोजें",call:"हेल्पलाइन पर कॉल करें",listen:"सुनें",note:"नियम राज्य के अनुसार अलग होते हैं और बदलते रहते हैं। जाने से पहले कार्यालय या हेल्पलाइन से पुष्टि कर लें।"},
kn:{title:"ನಿಮ್ಮ ಧ್ವನಿಯಿಂದ ದಾಖಲೆಗಳನ್ನು ಸರಿಪಡಿಸಿ",lead:"ಏನು ಸರಿಪಡಿಸಬೇಕು ಎಂದು ಹೇಳಿ. ಎಲ್ಲಿಗೆ ಹೋಗಬೇಕು ಮತ್ತು ಯಾವ ಮೂಲ ದಾಖಲೆಗಳನ್ನು ಒಯ್ಯಬೇಕು ಎಂದು ನಾವು ತಿಳಿಸುತ್ತೇವೆ.",speak:"ಒತ್ತಿ ಮಾತನಾಡಿ",ph:"ಉದಾ: ನನ್ನ ರೇಷನ್ ಕಾರ್ಡ್‌ನಲ್ಲಿ ಹೆಸರು ತಪ್ಪಾಗಿದೆ",pickDoc:"ನಿಮ್ಮ ದಾಖಲೆಯನ್ನು ಆರಿಸಿ",pickProblem:"ಏನನ್ನು ಸರಿಪಡಿಸಬೇಕು?",bring:"ಈ ಮೂಲ ದಾಖಲೆಗಳನ್ನು ತನ್ನಿ",where:"ಎಲ್ಲಿಗೆ ಹೋಗಬೇಕು",office:"ಹತ್ತಿರದ ಕಚೇರಿ ಹುಡುಕಿ",call:"ಸಹಾಯವಾಣಿಗೆ ಕರೆ ಮಾಡಿ",listen:"ಓದಿ ಹೇಳಿ",note:"ನಿಯಮಗಳು ರಾಜ್ಯದಿಂದ ರಾಜ್ಯಕ್ಕೆ ಬೇರೆ ಮತ್ತು ಬದಲಾಗುತ್ತವೆ. ಹೋಗುವ ಮೊದಲು ಕಚೇರಿ ಅಥವಾ ಸಹಾಯವಾಣಿಯಲ್ಲಿ ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ."},
ta:{title:"உங்கள் குரலால் ஆவணங்களைத் திருத்துங்கள்",lead:"என்ன திருத்த வேண்டும் என்று சொல்லுங்கள். எங்கே செல்ல வேண்டும், எந்த அசல் ஆவணங்களை எடுத்துச் செல்ல வேண்டும் என்று நாங்கள் சொல்வோம்.",speak:"தொட்டுப் பேசுங்கள்",ph:"எ.கா: என் ரேஷன் அட்டையில் பெயர் தவறாக உள்ளது",pickDoc:"உங்கள் ஆவணத்தைத் தேர்ந்தெடுக்கவும்",pickProblem:"என்ன திருத்தம் தேவை?",bring:"இந்த அசல் ஆவணங்களைக் கொண்டு வாருங்கள்",where:"எங்கே செல்ல வேண்டும்",office:"அருகிலுள்ள அலுவலகத்தைத் தேடுங்கள்",call:"உதவி எண்ணை அழைக்கவும்",listen:"படித்துக் காட்டு",note:"விதிகள் மாநிலத்துக்கு மாநிலம் மாறுபடும், காலத்துடன் மாறும். செல்லும் முன் அலுவலகம் அல்லது உதவி எண்ணில் உறுதிசெய்யுங்கள்."},
te:{title:"మీ గొంతుతో పత్రాలను సరిచేసుకోండి",lead:"ఏమి సరిచేయాలో చెప్పండి. ఎక్కడికి వెళ్లాలో, ఏ అసలు పత్రాలు తీసుకెళ్లాలో మేము చెబుతాం.",speak:"నొక్కి మాట్లాడండి",ph:"ఉదా: నా రేషన్ కార్డులో పేరు తప్పుగా ఉంది",pickDoc:"మీ పత్రాన్ని ఎంచుకోండి",pickProblem:"ఏమి సరిచేయాలి?",bring:"ఈ అసలు పత్రాలను తీసుకురండి",where:"ఎక్కడికి వెళ్లాలి",office:"దగ్గరి కార్యాలయాన్ని వెతకండి",call:"హెల్ప్‌లైన్‌కు కాల్ చేయండి",listen:"చదివి వినిపించు",note:"నియమాలు రాష్ట్రాన్ని బట్టి మారుతాయి, కాలంతో కూడా మారుతాయి. వెళ్లే ముందు కార్యాలయం లేదా హెల్ప్‌లైన్‌తో నిర్ధారించుకోండి."},
ml:{title:"നിങ്ങളുടെ ശബ്ദത്തിലൂടെ രേഖകൾ തിരുത്തൂ",lead:"എന്താണ് തിരുത്തേണ്ടതെന്ന് പറയൂ. എവിടെ പോകണമെന്നും ഏതൊക്കെ അസ്സൽ രേഖകൾ കൊണ്ടുപോകണമെന്നും ഞങ്ങൾ പറയാം.",speak:"അമർത്തി സംസാരിക്കൂ",ph:"ഉദാ: എന്റെ റേഷൻ കാർഡിൽ പേര് തെറ്റാണ്",pickDoc:"നിങ്ങളുടെ രേഖ തിരഞ്ഞെടുക്കൂ",pickProblem:"എന്താണ് തിരുത്തേണ്ടത്?",bring:"ഈ അസ്സൽ രേഖകൾ കൊണ്ടുവരൂ",where:"എവിടെ പോകണം",office:"അടുത്തുള്ള ഓഫീസ് കണ്ടെത്തൂ",call:"ഹെൽപ്പ്‌ലൈനിൽ വിളിക്കൂ",listen:"വായിച്ചു കേൾപ്പിക്കൂ",note:"നിയമങ്ങൾ സംസ്ഥാനം അനുസരിച്ച് വ്യത്യാസപ്പെടും, കാലക്രമേണ മാറുകയും ചെയ്യും. പോകുന്നതിനു മുമ്പ് ഓഫീസിലോ ഹെൽപ്പ്‌ലൈനിലോ ഉറപ്പാക്കൂ."},
mr:{title:"आपल्या आवाजाने कागदपत्रे दुरुस्त करा",lead:"काय दुरुस्त करायचे ते सांगा. कुठे जायचे आणि कोणती मूळ कागदपत्रे न्यायची ते आम्ही सांगू.",speak:"दाबा आणि बोला",ph:"उदा: माझ्या रेशन कार्डवर नाव चुकीचे आहे",pickDoc:"आपले कागदपत्र निवडा",pickProblem:"काय दुरुस्त करायचे आहे?",bring:"ही मूळ कागदपत्रे सोबत आणा",where:"कुठे जायचे",office:"जवळचे कार्यालय शोधा",call:"हेल्पलाइनला कॉल करा",listen:"वाचून दाखवा",note:"नियम राज्यानुसार वेगळे असतात आणि बदलत राहतात. जाण्यापूर्वी कार्यालय किंवा हेल्पलाइनकडे खात्री करा."},
};
Object.assign(UI,{
bn:{title:"আপনার কণ্ঠে নথি সংশোধন করুন",lead:"কী ঠিক করতে হবে বলুন। কোথায় যেতে হবে আর কোন আসল নথি নিতে হবে আমরা জানিয়ে দেব।",speak:"চাপুন ও বলুন",ph:"যেমন: আমার রেশন কার্ডে নাম ভুল আছে",pickDoc:"আপনার নথি বেছে নিন",pickProblem:"কী সংশোধন করতে হবে?",bring:"এই আসল নথিগুলি সঙ্গে আনুন",where:"কোথায় যাবেন",office:"কাছের অফিস খুঁজুন",call:"হেল্পলাইনে ফোন করুন",listen:"পড়ে শোনান",note:"নিয়ম রাজ্যভেদে আলাদা এবং সময়ের সঙ্গে বদলায়। যাওয়ার আগে অফিস বা হেল্পলাইনে নিশ্চিত হয়ে নিন।"},
gu:{title:"તમારા અવાજથી દસ્તાવેજ સુધારો",lead:"શું સુધારવાનું છે તે કહો. ક્યાં જવું અને કયા અસલ દસ્તાવેજ લઈ જવા તે અમે જણાવીશું.",speak:"દબાવો અને બોલો",ph:"દા.ત.: મારા રેશન કાર્ડમાં નામ ખોટું છે",pickDoc:"તમારો દસ્તાવેજ પસંદ કરો",pickProblem:"શું સુધારવાનું છે?",bring:"આ અસલ દસ્તાવેજ સાથે લાવો",where:"ક્યાં જવું",office:"નજીકની કચેરી શોધો",call:"હેલ્પલાઇન પર કૉલ કરો",listen:"વાંચી સંભળાવો",note:"નિયમો રાજ્ય પ્રમાણે જુદા હોય છે અને બદલાતા રહે છે. જતા પહેલાં કચેરી અથવા હેલ્પલાઇન પર ખાતરી કરો."},
pa:{title:"ਆਪਣੀ ਆਵਾਜ਼ ਨਾਲ ਦਸਤਾਵੇਜ਼ ਠੀਕ ਕਰਵਾਓ",lead:"ਦੱਸੋ ਕੀ ਸੁਧਾਰਨਾ ਹੈ। ਅਸੀਂ ਦੱਸਾਂਗੇ ਕਿੱਥੇ ਜਾਣਾ ਹੈ ਅਤੇ ਕਿਹੜੇ ਅਸਲ ਦਸਤਾਵੇਜ਼ ਲੈ ਕੇ ਜਾਣੇ ਹਨ।",speak:"ਦਬਾਓ ਅਤੇ ਬੋਲੋ",ph:"ਜਿਵੇਂ: ਮੇਰੇ ਰਾਸ਼ਨ ਕਾਰਡ ਵਿੱਚ ਨਾਮ ਗਲਤ ਹੈ",pickDoc:"ਆਪਣਾ ਦਸਤਾਵੇਜ਼ ਚੁਣੋ",pickProblem:"ਕੀ ਸੁਧਾਰਨਾ ਹੈ?",bring:"ਇਹ ਅਸਲ ਦਸਤਾਵੇਜ਼ ਨਾਲ ਲਿਆਓ",where:"ਕਿੱਥੇ ਜਾਣਾ ਹੈ",office:"ਨੇੜਲਾ ਦਫ਼ਤਰ ਲੱਭੋ",call:"ਹੈਲਪਲਾਈਨ ਨੂੰ ਕਾਲ ਕਰੋ",listen:"ਪੜ੍ਹ ਕੇ ਸੁਣਾਓ",note:"ਨਿਯਮ ਰਾਜ ਮੁਤਾਬਕ ਵੱਖਰੇ ਹੁੰਦੇ ਹਨ ਅਤੇ ਬਦਲਦੇ ਰਹਿੰਦੇ ਹਨ। ਜਾਣ ਤੋਂ ਪਹਿਲਾਂ ਦਫ਼ਤਰ ਜਾਂ ਹੈਲਪਲਾਈਨ ਤੋਂ ਪੁਸ਼ਟੀ ਕਰੋ।"},
or:{title:"ଆପଣଙ୍କ ସ୍ୱରରେ ଦଲିଲ ସଂଶୋଧନ କରନ୍ତୁ",lead:"କ'ଣ ସଂଶୋଧନ କରିବାକୁ ହେବ କୁହନ୍ତୁ। କେଉଁଠିକି ଯିବେ ଏବଂ କେଉଁ ମୂଳ ଦଲିଲ ନେବେ ଆମେ କହିବୁ।",speak:"ଦବାନ୍ତୁ ଓ କୁହନ୍ତୁ",ph:"ଯଥା: ମୋ ରେସନ୍ କାର୍ଡରେ ନାମ ଭୁଲ ଅଛି",pickDoc:"ଆପଣଙ୍କ ଦଲିଲ ବାଛନ୍ତୁ",pickProblem:"କ'ଣ ସଂଶୋଧନ କରିବାକୁ ହେବ?",bring:"ଏହି ମୂଳ ଦଲିଲ ସାଙ୍ଗରେ ଆଣନ୍ତୁ",where:"କେଉଁଠିକି ଯିବେ",office:"ନିକଟତମ କାର୍ଯ୍ୟାଳୟ ଖୋଜନ୍ତୁ",call:"ହେଲ୍ପଲାଇନକୁ କଲ୍ କରନ୍ତୁ",listen:"ପଢ଼ି ଶୁଣାନ୍ତୁ",note:"ନିୟମ ରାଜ୍ୟ ଅନୁସାରେ ଭିନ୍ନ ଏବଂ ସମୟ ସହିତ ବଦଳେ। ଯିବା ପୂର୍ବରୁ କାର୍ଯ୍ୟାଳୟ କିମ୍ବା ହେଲ୍ପଲାଇନରେ ନିଶ୍ଚିତ କରନ୍ତୁ।"},
as:{title:"আপোনাৰ কণ্ঠেৰে নথি শুধৰাওক",lead:"কি শুধৰাব লাগে কওক। ক'লৈ যাব লাগে আৰু কোনবোৰ মূল নথি লৈ যাব লাগে আমি জনাম।",speak:"টিপক আৰু কওক",ph:"যেনে: মোৰ ৰেচন কাৰ্ডত নাম ভুল আছে",pickDoc:"আপোনাৰ নথি বাছক",pickProblem:"কি শুধৰাব লাগে?",bring:"এই মূল নথিবোৰ লগত লৈ আহক",where:"ক'লৈ যাব",office:"ওচৰৰ কাৰ্যালয় বিচাৰক",call:"হেল্পলাইনত ফোন কৰক",listen:"পঢ়ি শুনাওক",note:"নিয়ম ৰাজ্য অনুসৰি বেলেগ আৰু সময়ৰ লগে লগে সলনি হয়। যোৱাৰ আগতে কাৰ্যালয় বা হেল্পলাইনত নিশ্চিত কৰক।"},
ur:{title:"اپنی آواز سے دستاویزات درست کروائیں",lead:"بتائیں کیا درست کرنا ہے۔ ہم بتائیں گے کہاں جانا ہے اور کون سے اصل کاغذات ساتھ لے جانے ہیں۔",speak:"دبائیں اور بولیں",ph:"مثال: میرے راشن کارڈ میں نام غلط ہے",pickDoc:"اپنی دستاویز منتخب کریں",pickProblem:"کیا درست کرنا ہے؟",bring:"یہ اصل دستاویزات ساتھ لائیں",where:"کہاں جانا ہے",office:"قریبی دفتر تلاش کریں",call:"ہیلپ لائن پر کال کریں",listen:"پڑھ کر سنائیں",note:"قواعد ریاست کے لحاظ سے مختلف ہوتے ہیں اور بدلتے رہتے ہیں۔ جانے سے پہلے دفتر یا ہیلپ لائن سے تصدیق کر لیں۔"},
ne:{title:"आफ्नो आवाजले कागजात सच्याउनुहोस्",lead:"के सच्याउनु छ भन्नुहोस्। कहाँ जानु पर्ने र कुन सक्कली कागजात लैजानु पर्ने हामी बताउँछौं।",speak:"थिचेर बोल्नुहोस्",ph:"जस्तै: मेरो राशन कार्डमा नाम गलत छ",pickDoc:"आफ्नो कागजात छान्नुहोस्",pickProblem:"के सच्याउनु छ?",bring:"यी सक्कली कागजात ल्याउनुहोस्",where:"कहाँ जाने",office:"नजिकको कार्यालय खोज्नुहोस्",call:"हेल्पलाइनमा फोन गर्नुहोस्",listen:"पढेर सुनाउनुहोस्",note:"नियम राज्य अनुसार फरक हुन्छन् र बदलिरहन्छन्। जानु अघि कार्यालय वा हेल्पलाइनमा पुष्टि गर्नुहोस्।"},
mai:{title:"अपन आवाजसँ कागजात ठीक करबाउ",lead:"कहू की सुधार करबाक अछि। हम बताएब कतए जेबाक अछि आ कोन मूल कागजात लऽ जेबाक अछि।",speak:"दबाउ आ बाजू",ph:"जेना: हमर राशन कार्ड मे नाम गलत अछि",pickDoc:"अपन कागजात चुनू",pickProblem:"की सुधार करबाक अछि?",bring:"ई मूल कागजात संग आनू",where:"कतए जाएब",office:"लग्गीक कार्यालय ताकू",call:"हेल्पलाइन पर फोन करू",listen:"पढ़ि क सुनाउ",note:"नियम राज्यक अनुसार अलग होइत अछि आ बदलैत रहैत अछि। जेबासँ पहिने कार्यालय वा हेल्पलाइन सँ पुष्टि कऽ लिअ।"},
});
Object.assign(UI,{
kok:{title:"तुमच्या आवाजान कागदपत्रां दुरुस्त करात",lead:"कितें दुरुस्त करपाचें तें सांगात. खंय वचप आनी कोणतीं मूळ कागदपत्रां व्हरपाचीं तें आमी सांगतले.",speak:"दाबून उलयात",ph:"उदा: म्हज्या रेशन कार्डार नांव चुकीचें आसा",pickDoc:"तुमचें कागदपत्र निवडात",pickProblem:"कितें दुरुस्त करपाचें आसा?",bring:"हीं मूळ कागदपत्रां फाटीं घेवन येयात",where:"खंय वचचें",office:"लागींचें कार्यालय सोदात",call:"हेल्पलायनीक कॉल करात",listen:"वाचून आयकयात",note:"नेम राज्या प्रमाणें वेगळे आसतात आनी बदलत रावतात. वचपा पयलीं कार्यालय वा हेल्पलायनीर खात्री करात."},
sd:{title:"پنهنجي آواز سان دستاويز درست ڪرايو",lead:"ٻڌايو ڇا درست ڪرڻو آهي. اسين ٻڌائينداسين ته ڪٿي وڃڻو آهي ۽ ڪهڙا اصل ڪاغذ کڻي وڃڻا آهن.",speak:"دٻايو ۽ ڳالهايو",ph:"مثال: منهنجي راشن ڪارڊ ۾ نالو غلط آهي",pickDoc:"پنهنجو دستاويز چونڊيو",pickProblem:"ڇا درست ڪرڻو آهي؟",bring:"اهي اصل دستاويز ساڻ کڻي اچو",where:"ڪٿي وڃڻو آهي",office:"ويجهو آفيس ڳوليو",call:"هيلپ لائن تي ڪال ڪريو",listen:"پڙهي ٻڌايو",note:"ضابطا رياست مطابق مختلف آهن ۽ بدلبا رهن ٿا. وڃڻ کان اڳ آفيس يا هيلپ لائن کان تصديق ڪريو."},
ks:{title:"پنٕنۍ آوازہٕ سان دستاویز دُرُست کٔرِو",lead:"وَن کیا دُرُست کرُن چھُ۔ اسۍ ونو کتھ گَچھُن تہٕ کُنہِ اصل کاغذ نیُن۔",speak:"دباوِو تہٕ بولِو",ph:"مثال: میٲنِس راشن کارڈس منز چھُ ناو غلط",pickDoc:"پنُن دستاویز چُنِو",pickProblem:"کیا دُرُست کرُن چھُ؟",bring:"یہ اصل دستاویز ہیتھ کٔرِو",where:"کتھ گَچھُن",office:"نزدیکی دفتر لُورِو",call:"ہیلپ لائنس پؠٹھ کال کٔرِو",listen:"پَرِتھ ہُنٲوِو",note:"قاعدہ چھِ ریاستس مطابق مختلف تہٕ بدلان رٲوان۔ گژھنہٕ برونہہ دفتر یا ہیلپ لائنہٕ سان تصدیق کٔرِو۔"},
doi:{title:"अपनी अवाजै कन्नै दस्तावेज ठीक करोआओ",lead:"दस्सो के सुधारना ऐ। असें दस्सगे कुत्थें जाना ऐ ते कुन्नेह् असल कागज लेई जाने न।",speak:"दबाओ ते बोलो",ph:"जियां: मेरे राशन कार्ड च नां गलत ऐ",pickDoc:"अपना दस्तावेज चुनो",pickProblem:"के सुधारना ऐ?",bring:"एह् असल दस्तावेज कन्नै ल्याओ",where:"कुत्थें जाना ऐ",office:"नेड़ले दफ्तर खोजो",call:"हेल्पलाइन उप्पर फोन करो",listen:"पढ़ियै सुनाओ",note:"नियम राज्य मताबक बख-बख होंदे न ते बदलदे रौंहदे न। जाने कोला पैह्लें दफ्तर जां हेल्पलाइन कोला पक्का करी लैओ।"},
brx:{title:"नोंनि सोदोबजों दस्तावेज फिन्जा",lead:"मा फिन्जानो गोनां कथा। माबोरै थाङनो ओंथाइ आरो माबोर गोदान दस्तावेज लानो गोनां जों बुंनो।",speak:"नुजाथाय आरो बुं",ph:"गोरोब्बा: आं राशन कार्डआव मुं सिगां",pickDoc:"नोंनि दस्तावेज सायख",pickProblem:"मा फिन्जानो गोनां?",bring:"बे गोदान दस्तावेजफोरखौ लाङो",where:"माबोरै थाङो",office:"गोजौनिफ्राय अफिस मोन",call:"हेल्पलाइनाव फोन खालाम",listen:"फरायनाय हों",note:"नियमफोर राज्य बाहागो गुबुन आरो सानआव सोलायो। थाङनायखौ नुजाथाय अफिस नाथाय हेल्पलाइनाव थिक खालाम।"},
sat:{title:"ᱟᱢᱟᱜ ᱟᱣᱟᱡᱛᱮ ᱫᱚᱞᱤᱞ ᱥᱚᱲᱚ ᱢᱮ",lead:"ᱪᱮᱫ ᱥᱚᱲᱚᱭ ᱫᱚᱨᱟᱜ ᱠᱟᱱᱟ ᱚᱸᱰᱮ ᱵᱟᱛᱟᱣ ᱢᱮ᱾ ᱟᱞᱮ ᱵᱟᱛᱟᱣ ᱟᱭᱟ ᱪᱮᱫ ᱥᱟᱵᱟ ᱥᱮᱱᱚᱜ ᱟᱨ ᱪᱮᱫ ᱟᱥᱞᱤ ᱫᱚᱞᱤᱞ ᱡᱚᱛᱚ ᱞᱟᱹᱜᱤᱫ᱾",speak:"ᱩᱨᱩᱢ ᱠᱟᱛᱷᱟ ᱢᱮ",ph:"ᱡᱮᱞᱠᱟ: ᱤᱧᱟᱜ ᱨᱟᱥᱟᱱ ᱠᱟᱲᱰ ᱨᱮ ᱧᱩᱛᱩᱢ ᱵᱷᱩᱞ ᱜᱮᱭᱟ",pickDoc:"ᱟᱢᱟᱜ ᱫᱚᱞᱤᱞ ᱪᱚᱠᱛᱮ ᱢᱮ",pickProblem:"ᱪᱮᱫ ᱥᱚᱲᱚᱭ ᱫᱚᱨᱟᱜ ᱠᱟᱱᱟ?",bring:"ᱱᱚᱶᱟ ᱟᱥᱞᱤ ᱫᱚᱞᱤᱞ ᱠᱚ ᱫᱟᱱᱟᱝ ᱢᱮ",where:"ᱚᱠᱟ ᱥᱮᱱᱚᱜ",office:"ᱛᱟᱜᱷᱟ ᱚᱯᱷᱤᱥ ᱥᱮᱸᱫᱽᱨᱟ ᱢᱮ",call:"ᱦᱮᱞᱯᱞᱟᱭᱤᱱ ᱨᱮ ᱠᱚᱞ ᱢᱮ",listen:"ᱯᱟᱲᱦᱟᱣ ᱢᱮ",note:"ᱴᱷᱮᱱ ᱛᱷᱮᱱ ᱨᱟᱡᱽ ᱞᱮᱠᱟᱛᱮ ᱱᱤᱭᱚᱢ ᱦᱚᱸ ᱵᱟᱝ ᱢᱤᱫ ᱜᱮᱭᱟ᱾ ᱥᱮᱱᱚᱜ ᱢᱟᱨᱮ ᱚᱯᱷᱤᱥ ᱵᱟᱝ ᱦᱮᱞᱯᱞᱟᱭᱤᱱ ᱨᱮ ᱵᱷᱟᱝᱤᱭᱟ ᱢᱮ᱾"},
mni:{title:"ꯅꯪꯒꯤ ꯂꯥꯎꯗꯥ ꯗꯣꯀꯨꯃꯦꯟꯇ ꯁꯦꯝꯅꯧ",lead:"ꯀꯔꯤ ꯁꯦꯝꯅꯒꯗꯒꯦ ꯍꯥꯌꯕꯤꯌꯨ꯫ ꯀꯗꯥꯌꯗꯥ ꯆꯠꯀꯗꯒꯦ ꯑꯃꯁꯨꯡ ꯀꯔꯤ ꯑꯁꯥꯏ ꯗꯣꯀꯨꯃꯦꯟꯇ ꯁꯤꯟꯅꯒꯗꯒꯦ ꯍꯥꯌꯕꯥ ꯑꯩꯈꯣꯌꯅꯥ ꯍꯥꯌꯒꯅꯤ꯫",speak:"ꯅꯨꯡꯗꯨꯅꯥ ꯍꯥꯏꯕꯤꯌꯨ",ph:"ꯈꯨꯗꯝ: ꯑꯩꯒꯤ ꯔꯦꯁꯟ ꯀꯥꯔꯗꯇꯥ ꯃꯤꯡ ꯑꯔꯥꯅꯕꯥ ꯌꯥꯎꯔꯤ",pickDoc:"ꯅꯪꯒꯤ ꯗꯣꯀꯨꯃꯦꯟꯇ ꯈꯅꯕꯤꯌꯨ",pickProblem:"ꯀꯔꯤ ꯁꯦꯝꯅꯒꯗꯒꯦ?",bring:"ꯑꯁꯥꯏ ꯗꯣꯀꯨꯃꯦꯟꯇꯁꯤꯡ ꯁꯤꯟꯅꯧ",where:"ꯀꯗꯥꯌꯗꯥ ꯆꯠꯀꯗꯒꯦ",office:"ꯅꯛꯇꯥ ꯑꯣꯐꯤꯁ ꯊꯤꯌꯨ",call:"ꯍꯦꯜꯄꯂꯥꯏꯅꯗꯥ ꯀꯧꯌꯨ",listen:"ꯂꯥꯏꯕꯥ ꯇꯥꯕꯤꯌꯨ",note:"ꯄꯥꯡꯊꯣꯛ ꯃꯇꯨꯡꯗꯥ ꯑꯣꯏꯅꯥ ꯅꯤꯌꯃꯁꯤꯡ ꯇꯣꯅꯥꯅꯨꯡ ꯑꯃꯁꯨꯡ ꯍꯣꯡꯗꯣꯛꯅꯤ꯫ ꯆꯠꯄꯥ ꯃꯃꯥꯡꯗꯥ ꯑꯣꯐꯤꯁ ꯅꯠꯇꯅꯥ ꯍꯦꯜꯄꯂꯥꯏꯅꯗꯥ ꯌꯦꯡꯁꯤꯅꯕꯤꯌꯨ꯫"},
sa:{title:"स्वस्य वाण्या पत्राणि संशोधयत",lead:"किं संशोधनीयम् इति वदत। कुत्र गन्तव्यम् कानि मूलपत्राणि नेतव्यानि इति वयं वदामः।",speak:"नुदत वदत च",ph:"यथा: मम राशनपत्रे नाम अशुद्धम् अस्ति",pickDoc:"स्वस्य पत्रं चिनुत",pickProblem:"किं संशोधनीयम्?",bring:"एतानि मूलपत्राणि आनयत",where:"कुत्र गन्तव्यम्",office:"समीपस्थं कार्यालयं अन्विष्यत",call:"साहाय्यसंख्यां आह्वयत",listen:"पठित्वा श्रावयत",note:"नियमाः राज्यानुसारं भिन्नाः कालेन परिवर्तन्ते च। गमनात् पूर्वं कार्यालये साहाय्यसंख्यायां वा निश्चिनुत।"},
});
// Verified-at-build checklists. General guidance only; states and offices differ.
const DOCS=[
{id:"aadhaar",en:"Aadhaar",office:"Aadhaar enrolment update centre near me",tel:"1947",telName:"UIDAI helpline",
 kw:"aadhaar aadhar uidai आधार ಆಧಾರ್ ஆதார் ఆధార్ আধার",
 probs:[
 {id:"name",en:"Name spelling or change",
  where:"Aadhaar Enrolment or Update Centre. A verifier checks your documents and the operator takes your biometrics.",
  docs:["Your Aadhaar number (card or e-Aadhaar)","Original proof of identity that shows the correct name, from UIDAI's accepted list (for example passport, PAN card, voter ID, driving licence)","For a change after marriage or by gazette: the marriage certificate or gazette notification","Your mobile number registered with Aadhaar"],
  note:"UIDAI limits how many times a name can be updated, so check the spelling before you submit."},
 {id:"dob",en:"Date of birth",
  where:"Aadhaar Enrolment or Update Centre, in person.",
  docs:["Your Aadhaar number","Original proof of date of birth, for example birth certificate, SSLC or school certificate, or passport","Your mobile number registered with Aadhaar"],
  note:"Date of birth can be updated only a limited number of times. Ask the centre which documents UIDAI accepts today."},
 {id:"address",en:"Address",
  where:"Online on the myAadhaar portal with an OTP to your registered mobile, or at an Aadhaar Enrolment or Update Centre.",
  docs:["Your Aadhaar number","Original proof of address in your name, from UIDAI's accepted list (for example bank passbook, utility bill, rent agreement, passport)","Registered mobile number for the OTP"],
  note:"If you have no proof in your own name, ask the centre about other options such as an address-validation letter."},
 {id:"photo",en:"Photo or fingerprints",
  where:"Aadhaar Enrolment or Update Centre only. It cannot be done online.",
  docs:["Your Aadhaar number","No other document is usually needed for a new photo or biometrics"],
  note:"Children enrolled before age 5 must update biometrics at 5, and again at 15. This is free for children in those age bands."},
 {id:"mobile",en:"Mobile number link",
  where:"Aadhaar Enrolment or Update Centre.",
  docs:["Your Aadhaar number","The mobile number you want to link, with the phone in your hand for verification"],note:""}
 ]},
{id:"pan",en:"PAN card",office:"PAN card service centre near me",tel:"020-27218080",telName:"Protean (NSDL) PAN helpline",
 kw:"pan permanent account number पैन ಪ್ಯಾನ್ பான் పాన్ income tax",
 probs:[
 {id:"name",en:"Name spelling or change",
  where:"Online correction on the Protean (NSDL) or UTIITSL website, or through a PAN service centre. Paperless mode uses an Aadhaar OTP.",
  docs:["Copy of your existing PAN card","Proof of identity","Proof of the name change: marriage certificate or gazette notification, if the name has changed","Aadhaar for the paperless route"],
  note:"A fee applies and rates change, so check the official site before paying."},
 {id:"dob",en:"Date of birth",
  where:"Online correction on the Protean (NSDL) or UTIITSL website, or through a PAN service centre.",
  docs:["Copy of your existing PAN card","Proof of date of birth: birth certificate, 10th mark sheet, Aadhaar, passport or voter ID"],note:""},
 {id:"address",en:"Address",
  where:"Online correction on the Protean (NSDL) or UTIITSL website. In paperless mode the address is taken from your Aadhaar.",
  docs:["Copy of your existing PAN card","Proof of address: Aadhaar, voter ID, utility bill or property tax receipt"],note:""},
 {id:"lost",en:"Lost or reprint",
  where:"Reprint option on the Protean (NSDL) or UTIITSL website. No details are changed in a reprint.",
  docs:["Your PAN number","Date of birth and the mobile or email linked to the PAN"],note:""}
 ]},
{id:"voter",en:"Voter ID",office:"Electoral Registration Officer office near me",tel:"1950",telName:"Election Commission voter helpline",
 kw:"voter epic election id मतदाता ಮತದಾರ வாக்காளர் ఓటరు",
 probs:[
 {id:"name",en:"Name spelling or change",
  where:"Fill Form 8 on voters.eci.gov.in or the Voter Helpline app, or submit it to your Electoral Registration Officer or Booth Level Officer.",
  docs:["Your EPIC (voter ID) number","Proof that shows the correct name, for example Aadhaar, passport, PAN or birth certificate","Marriage certificate or gazette notification, if the name changed","Recent passport-size photo if you are also changing the photo"],note:""},
 {id:"dob",en:"Date of birth or age",
  where:"Form 8 online, or at your Electoral Registration Officer office.",
  docs:["Your EPIC number","Proof of date of birth: birth certificate, 10th mark sheet, passport or Aadhaar"],note:""},
 {id:"address",en:"Address",
  where:"Form 8 online or at your Electoral Registration Officer office.",
  docs:["Your EPIC number","Proof of current address: Aadhaar, utility bill from the last year, bank or post office passbook, or passport"],
  note:"If you moved to a different constituency you may need to apply as a new registration. The office or 1950 will tell you which."},
 {id:"photo",en:"Photo",
  where:"Form 8 online or at your Electoral Registration Officer office.",
  docs:["Your EPIC number","A recent passport-size colour photo"],note:""}
 ]},
{id:"ration",en:"Ration card",office:"Food and civil supplies taluk office near me",tel:"1967",telName:"National PDS toll-free number (your state may have its own)",
 kw:"ration card food ahara राशन ರೇಷನ್ ரேஷன் రేషన్ bpl apl",
 probs:[
 {id:"addmember",en:"Add a family member",
  where:"Your Circle, taluk or ward food office, or your state's food and civil supplies portal where it is online.",
  docs:["Your current ration card (original)","Aadhaar of the family head and of the new member","Newborn: birth certificate","New spouse: marriage certificate, and proof the name was removed from the parents' card","Photocopies of everything, with originals for verification"],
  note:"Required documents vary by state and by the type of change. Ask the office for its current list."},
 {id:"removemember",en:"Remove a family member",
  where:"Your Circle, taluk or ward food office.",
  docs:["Your current ration card (original)","Aadhaar of the family head","Death certificate if the member has died, or proof of marriage or transfer to another card","Photocopies with originals for verification"],note:""},
 {id:"name",en:"Name spelling or change",
  where:"Download the correction form from your state's ration card portal or collect it at the Circle office.",
  docs:["Your current ration card (original)","Document showing the correct name, for example Aadhaar, school certificate or voter ID","Photocopies with originals for verification","Marriage certificate or gazette notification for a legal name change"],note:""},
 {id:"address",en:"Address change",
  where:"The food office that covers your new address.",
  docs:["Your current ration card (original)","Proof of new address: rent agreement, utility bill or Aadhaar","Aadhaar of the family head","Surrender or cancellation proof from the old area, if the office asks for it"],note:""}
 ]},
{id:"marks",en:"Marks card or certificate",office:"Education board regional office near me",tel:"",telName:"",
 kw:"marks card marksheet sslc cbse icse 10th 12th board certificate अंकपत्र ಅಂಕಪಟ್ಟಿ மதிப்பெண் మార్కుల",
 probs:[
 {id:"name",en:"Student or parent name",
  where:"Apply through your school's head. The school forwards the request to the board. Some boards also take it directly.",
  docs:["Application form from the board, signed by the school head","Affidavit on stamp paper, notarised, stating the correct name and the reason","Copy of birth certificate and school leaving certificate","Copy of ID proof such as Aadhaar, passport or driving licence","Copy of the marks card that shows the mistake","Extract of the school admission register, verified by the head","For a legal name change: gazette notification"],
  note:"Boards set time limits and fees, and they differ. Ask your school for the board's current circular."},
 {id:"dob",en:"Date of birth",
  where:"Apply through your school's head to the board.",
  docs:["Application form signed by the school head","Affidavit on stamp paper, notarised","Birth certificate and school leaving certificate","ID proof such as Aadhaar","Copy of the marks card with the wrong date"],
  note:"Many boards allow a date of birth correction only within a limited time after results, often one year. Check immediately."},
 {id:"duplicate",en:"Lost or duplicate marks card",
  where:"Your school or the board office, depending on the board.",
  docs:["Police or FIR copy or an affidavit saying it was lost, if the board asks","ID proof","Copy of the old marks card or your roll number","Passport-size photo and the board's fee"],note:""}
 ]},
{id:"birth",en:"Birth certificate",office:"Municipal corporation birth and death registrar office near me",tel:"",telName:"",
 kw:"birth certificate janam जन्म ಜನನ ಜನ್ಮ பிறப்பு జనన",
 probs:[
 {id:"addname",en:"Add a child's name",
  where:"The Registrar of Births and Deaths in your municipality or gram panchayat.",
  docs:["Original birth certificate that shows no name","Parents' ID proofs, for example Aadhaar","Hospital discharge or birth record","The registrar's application form"],
  note:"Many places allow adding the name free of charge within a set time. After that, a fee or an affidavit may be needed."},
 {id:"name",en:"Name spelling correction",
  where:"The Registrar who issued the certificate.",
  docs:["Original birth certificate","Affidavit on stamp paper stating the correct spelling","School records or Aadhaar of the person, and parents' IDs","The registrar's application form"],
  note:"Larger changes may need a Magistrate's or court order. The registrar will tell you."},
 {id:"dob",en:"Date of birth correction",
  where:"The Registrar, and sometimes a Magistrate.",
  docs:["Original birth certificate","Hospital record or other early proof","Affidavit","Parents' IDs"],
  note:"This is usually stricter than a spelling correction. Ask the registrar before you spend on documents."}
 ]},
{id:"dl",en:"Driving licence",office:"RTO regional transport office near me",tel:"",telName:"",
 kw:"driving licence license dl rto वाहन चालन ಚಾಲನಾ ஓட்டுநர் డ్రైవింగ్",
 probs:[
 {id:"name",en:"Name or date of birth",
  where:"Apply on the Parivahan Sarathi portal, then visit your RTO for verification if it asks.",
  docs:["Original driving licence","Proof of the correct detail: Aadhaar, birth certificate or school certificate","Marriage certificate or gazette notification for a name change","Passport-size photographs"],note:""},
 {id:"address",en:"Address",
  where:"Parivahan Sarathi portal or the RTO that covers your new address.",
  docs:["Original driving licence","Proof of new address: Aadhaar, utility bill or rent agreement","Passport-size photographs"],note:""},
 {id:"duplicate",en:"Lost or damaged licence",
  where:"Parivahan Sarathi portal, then the RTO if it asks.",
  docs:["FIR or lost-document affidavit if the licence was lost","Copy of the licence or its number","ID and address proof","Passport-size photographs"],note:""}
 ]},
{id:"passport",en:"Passport",office:"Passport Seva Kendra near me",tel:"1800-258-1800",telName:"Passport Seva helpline",
 kw:"passport पासपोर्ट ಪಾಸ್‌ಪೋರ್ಟ್ பாஸ்போர்ட் పాస్‌పోర్ట్",
 probs:[
 {id:"name",en:"Name change or correction",
  where:"Apply for re-issue on the Passport Seva portal and book an appointment at a Passport Seva Kendra.",
  docs:["Original old passport and a photocopy of the first and last pages","Proof of the name change: marriage certificate or gazette notification","Aadhaar and other ID proof","Application receipt and appointment letter"],note:""},
 {id:"dob",en:"Date of birth",
  where:"Re-issue application on the Passport Seva portal, then an appointment at a Passport Seva Kendra.",
  docs:["Original old passport and photocopy of the first and last pages","Birth certificate, or a school certificate where accepted","Aadhaar and ID proof","Application receipt and appointment letter"],note:""},
 {id:"address",en:"Address",
  where:"Re-issue application on the Passport Seva portal, then an appointment at a Passport Seva Kendra.",
  docs:["Original old passport and photocopy of the first and last pages","Proof of new address: Aadhaar, utility bill or rent agreement","Application receipt and appointment letter"],note:""}
 ]}
];
const $=id=>document.getElementById(id);
const S={lang:"en",doc:null,prob:null,tr:{},reqId:0,micOn:false,dict:null,sample:null};
const lsGet=k=>{try{return localStorage.getItem(k)}catch(e){return null}};
const lsSet=(k,v)=>{try{localStorage.setItem(k,v)}catch(e){}};
function h(tag,props,...kids){const e=document.createElement(tag);
  for(const k in(props||{})){if(k==="class")e.className=props[k];else if(k.startsWith("on"))e.addEventListener(k.slice(2),props[k]);else e.setAttribute(k,props[k]);}
  for(const c of kids)e.append(c&&c.nodeType?c:document.createTextNode(c==null?"":c));return e}
const T=k=>(UI[S.lang]&&UI[S.lang][k])||UI.en[k];
const hash=s=>{let x=0;for(let i=0;i<s.length;i++)x=(x*31+s.charCodeAt(i))|0;return String(x)};
const doc=()=>DOCS.find(d=>d.id===S.doc);
const prob=()=>doc()&&doc().probs.find(p=>p.id===S.prob);
function setStatus(t){$("status").textContent=t||""}

function applyUI(){
  document.documentElement.lang=S.lang;
  document.querySelector(".wrap").dir=RTL.has(S.lang)?"rtl":"ltr";
  $("t-title").textContent=T("title");$("t-lead").textContent=T("lead");$("t-speak").textContent=T("speak");
  $("q").placeholder=T("ph");$("t-pickDoc").textContent=T("pickDoc");$("t-pickProblem").textContent=T("pickProblem");
  $("mic").setAttribute("aria-label",T("speak"));
  document.title="Voice Bridge";
}
/* Labels for documents and problems: native text when a translation exists, English always visible beneath. */
function label(key,en){const t=S.tr[S.lang]&&S.tr[S.lang].labels&&S.tr[S.lang].labels[key];return t||en}
function renderDocs(){
  const box=$("docs");box.replaceChildren();
  for(const d of DOCS){
    const nat=label(d.id,d.en);
    box.append(h("button",{class:"choice","aria-pressed":String(S.doc===d.id),onclick:()=>pickDoc(d.id)},
      h("b",{},nat),nat!==d.en?h("small",{},d.en):""));
  }
}
function renderProbs(){
  const d=doc();$("probWrap").hidden=!d;if(!d)return;
  const box=$("probs");box.replaceChildren();
  for(const p of d.probs){
    const nat=label(d.id+"."+p.id,p.en);
    box.append(h("button",{class:"choice","aria-pressed":String(S.prob===p.id),onclick:()=>pickProb(p.id)},
      h("b",{},nat),nat!==p.en?h("small",{},p.en):""));
  }
}
function pickDoc(id){S.doc=id;S.prob=null;renderDocs();renderProbs();$("result").hidden=true;
  $("probWrap").scrollIntoView({behavior:"smooth",block:"nearest"})}
function pickProb(id){S.prob=id;renderProbs();showResult();}

/* Translation of dynamic content through Claude (sample capability). English is the verified source. */
async function translate(payload,key){
  if(S.lang==="en"||!S.sample)return null;
  const ck="vb:"+S.lang+":"+key+":"+hash(JSON.stringify(payload));
  const hit=lsGet(ck);if(hit){try{return JSON.parse(hit)}catch(e){}}
  const prompt="Translate the string values of this JSON into "+NAMES[S.lang]+" for ordinary people with little schooling. Use short, simple, polite sentences in the native script. Keep the JSON keys and array lengths exactly. Keep numbers, phone numbers and proper names such as Aadhaar, PAN, UIDAI, EPIC, Form 8, Passport Seva unchanged. Reply with only the JSON.\n\n"+JSON.stringify(payload);
  const out=await S.sample.json(prompt,{cache:{gcTime:86400000}});
  lsSet(ck,JSON.stringify(out));return out;
}
async function ensureLabels(){
  if(S.lang==="en")return;
  S.tr[S.lang]=S.tr[S.lang]||{};
  if(S.tr[S.lang].labels)return;
  const labels={};for(const d of DOCS){labels[d.id]=d.en;for(const p of d.probs)labels[d.id+"."+p.id]=p.en}
  const id=++S.reqId;setStatus("…");
  try{const out=await translate(labels,"labels");if(id===S.reqId&&out){S.tr[S.lang].labels=out}}
  catch(e){noteFallback(e)}
  setStatus("");renderDocs();renderProbs();
}
function noteFallback(e){
  const n=$("langnote");n.hidden=false;
  n.textContent=(e&&e.code==="not_granted")?"Translation of the details is off, so they are shown in English. The buttons and headings are still in your language.":"Could not translate the details just now, so they are shown in English.";
}
/* Result "slip": what to bring, where to go, how to reach the office. */
async function showResult(){
  const d=doc(),p=prob();if(!d||!p)return;
  const res=$("result");res.hidden=false;
  let view={where:p.where,docs:p.docs,note:p.note,en:true};
  draw(view);
  if(S.lang!=="en"&&S.sample){
    const id=++S.reqId;setStatus("…");
    try{
      const out=await translate({where:p.where,docs:p.docs,note:p.note||""},"res:"+d.id+"."+p.id);
      if(id===S.reqId&&out&&Array.isArray(out.docs)&&out.docs.length===p.docs.length){view={where:out.where,docs:out.docs,note:out.note||"",en:false};$("langnote").hidden=true;}
    }catch(e){noteFallback(e)}
    setStatus("");
    if(id===S.reqId)draw(view);
  }
  res.scrollIntoView({behavior:"smooth",block:"nearest"});
}
function draw(v){
  const d=doc(),p=prob(),res=$("result");res.replaceChildren();
  const title=label(d.id,d.en)+" · "+label(d.id+"."+p.id,p.en);
  const ul=h("ul",{});for(const x of v.docs)ul.append(h("li",{},x));
  const maps="https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(d.office);
  const acts=h("div",{class:"actions"},
    h("a",{class:"btn",href:maps,target:"_blank",rel:"noopener"},"📍 "+T("office")),
    h("button",{class:"btn alt",type:"button",onclick:()=>speak(title,v)},"🔊 "+T("listen")));
  const slip=h("section",{class:"slip","aria-label":title},
    h("h3",{},title),h("p",{class:"sub"},T("bring")),ul,
    h("div",{class:"where"},h("b",{},T("where")),h("p",{style:"margin:4px 0 0"},v.where)),
    v.note?h("p",{class:"note"},v.note):"",acts);
  if(d.tel){
    const num=h("span",{class:"num",dir:"ltr"},d.tel);
    const row=h("div",{class:"where"},h("b",{},T("call")+": "),num," ",
      h("small",{},"("+d.telName+")"));
    const a=h("a",{class:"btn",href:"tel:"+d.tel.replace(/[^0-9+]/g,"")},"📞 "+d.tel);
    const cp=h("button",{class:"btn alt",type:"button",onclick:async()=>{try{await navigator.clipboard.writeText(d.tel);cp.textContent="✓"}catch(e){const r=document.createRange();r.selectNodeContents(num);const s=getSelection();s.removeAllRanges();s.addRange(r)}}},"⧉");
    acts.prepend(a,cp);slip.insertBefore(row,acts);
  }
  slip.append(h("p",{class:"note"},T("note")));
  res.append(slip);
}
function speak(title,v){
  try{
    speechSynthesis.cancel();
    const text=title+". "+T("bring")+". "+v.docs.join(". ")+". "+T("where")+". "+v.where;
    const u=new SpeechSynthesisUtterance(text);
    const l=LANGS.find(x=>x[0]===S.lang);u.lang=l?l[2]:"en-IN";u.rate=.92;
    // Android needs an explicit voice for Indian languages; use one that matches if the phone has it.
    const vs=speechSynthesis.getVoices();
    const v=vs.find(x=>x.lang===u.lang)||vs.find(x=>x.lang.replace("_","-").split("-")[0]===u.lang.split("-")[0]);
    if(v)u.voice=v;
    else if(vs.length&&u.lang!=="en-IN")setStatus("Your phone has no voice for this language. Install it in Settings, Text-to-speech output.");
    speechSynthesis.speak(u);
  }catch(e){setStatus("Reading aloud is not available in this browser.")}
}

/* Understanding what the person said or typed: Claude when available, keywords otherwise. */
const PK={name:/name|नाम|ಹೆಸರು|பெயர்|పేరు|নাম|spell/i,dob:/birth|dob|age|जन्म|ಹುಟ್ಟು|ಜನ್ಮ|பிறந்த|పుట్టిన|বয়স/i,
  address:/address|पता|ವಿಳಾಸ|முகவரி|చిరునామా|ঠিকানা|shift|moved/i,photo:/photo|picture|finger|biometric|फोटो|ಫೋಟೋ|புகைப்பட|ఫోటో/i,
  mobile:/mobile|phone|number link|मोबाइल|ಮೊಬೈಲ್|மொபைல்|మొబైల్/i,addmember:/add|new member|join|born|जोड़|ಸೇರಿ|சேர்|చేర్/i,
  removemember:/remove|delete|died|death|हटा|ತೆಗೆ|நீக்க|తొలగ/i,addname:/no name|add.*name|name.*add/i,
  lost:/lost|duplicate|reprint|damaged|खो|ಕಳೆದ|தொலை|పోయ/i};
function keywordMatch(text){
  const t=text.toLowerCase();let d=DOCS.find(x=>x.kw.split(" ").some(k=>k&&t.includes(k.toLowerCase())));
  if(!d)return {doc:null,prob:null};
  const order=["removemember","addmember","addname","duplicate","lost","photo","mobile","dob","address","name"];
  let hit=null;
  for(const k of order){const r=PK[k==="duplicate"?"lost":k];if(r&&r.test(text)){const p=d.probs.find(p=>p.id===k||(k==="lost"&&p.id==="duplicate"));if(p){hit=p.id;break}}}
  return {doc:d.id,prob:hit};
}
async function understand(text){
  text=text.trim();if(!text)return;
  setStatus("…");
  let m=null;
  if(S.sample){
    try{
      const catalog=DOCS.map(d=>d.id+": "+d.probs.map(p=>p.id).join(", ")).join("\n");
      m=await S.sample.json("A person in India described a problem with an official document, in any language.\nChoose the best match. Reply with only JSON like {\"doc\":\"aadhaar\",\"prob\":\"name\"}. Use null for prob if unclear, and null for doc if no document fits.\nValid doc ids and their prob ids:\n"+catalog+"\n\nPerson said: "+JSON.stringify(text.slice(0,500)),{modelTier:"quick"});
    }catch(e){m=null}
  }
  if(!m||!DOCS.some(d=>d.id===m.doc))m=keywordMatch(text);
  setStatus("");
  if(!m.doc){setStatus(T("pickDoc")+" ↓");return}
  pickDoc(m.doc);
  if(m.prob&&prob_ok(m.doc,m.prob))pickProb(m.prob);
}
const prob_ok=(d,p)=>DOCS.find(x=>x.id===d).probs.some(x=>x.id===p);
/* Voice: platform dictation (speech to text), shown only where it exists. */
function useKeyboard(){
  setStatus("The page cannot use the microphone here. Tap the box below, then press the microphone key on your keyboard and speak.");
  const q=$("q");q.focus();try{q.scrollIntoView({block:"center",behavior:"smooth"})}catch(e){}
}
function micUI(on){S.micOn=on;$("mic").setAttribute("aria-pressed",String(on))}
$("mic").addEventListener("click",()=>{
  const d=S.dict;
  if(!d){
    const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
    if(!SR){useKeyboard();return}
    if(S.rec){S.rec.stop();return}
    const l=LANGS.find(x=>x[0]===S.lang);
    const begin=lang=>{
      const r=new SR();S.rec=r;r.lang=lang;r.interimResults=true;r.continuous=false;r.maxAlternatives=1;
      let heard=false,failed=null;
      let started=false;
      const giveUp=setTimeout(()=>{if(!started){try{r.abort()}catch(e){}S.rec=null;micUI(false);failed="blocked";useKeyboard()}},2500);
      r.onstart=()=>{started=true;clearTimeout(giveUp);micUI(true);setStatus("Listening… speak now")};
      r.onresult=ev=>{heard=true;let t="";for(const x of ev.results)t+=x[0].transcript;$("q").value=t};
      r.onerror=ev=>{failed=ev&&ev.error||"error"};
      r.onend=()=>{
        clearTimeout(giveUp);
        if(failed==="blocked")return;
        micUI(false);S.rec=null;
        if(!started){useKeyboard();return}
        if(failed==="language-not-supported"&&lang!=="en-IN"&&lang!=="hi-IN"){setStatus("This language is not supported for voice on this phone. Speak in Hindi or English, or type.");begin("hi-IN");return}
        if(failed==="not-allowed"||failed==="service-not-allowed"){useKeyboard();return}
        if(failed==="no-speech"||(!heard&&!failed)){setStatus("Did not hear anything. Tap the mic and speak close to the phone.");return}
        if(failed==="network"){setStatus("Voice needs an internet connection. Check your data and try again, or type.");return}
        if(failed&&failed!=="aborted"){setStatus("Could not use the microphone. You can type instead.");return}
        understand($("q").value)};
      try{r.start()}catch(e){S.rec=null;setStatus("Could not start the microphone. You can type instead.")}
    };
    begin(l?l[2]:"en-IN");
    return}
  if(d.active()){d.stop();return}
  const l=LANGS.find(x=>x[0]===S.lang);
  const opts=S.noLang?{}:{language:l?l[2]:undefined};
  $("q").dataset.base=$("q").value?$("q").value.replace(/\s*$/," "):"";
  setStatus("");
  d.start(opts).catch(e=>{
    const c=e&&e.code;
    if(c==="unavailable"&&opts.language){S.noLang=true;setStatus("Voice typing is not offered for this language here. Tap the mic again to speak in your device's language, or type.")}
    else if(c==="unavailable"){useKeyboard()}
    else if(c==="not_granted"){setStatus("The microphone is off for this page. Turn it on in the page's Permissions menu, or type.")}
    else if(c==="dismissed"){setStatus("Tap the mic again and choose Allow to use your voice.")}
    else if(c==="rate_limited"){setStatus("Too many voice requests. Try again in a moment.")}
    else if(c!=="stopped"){setStatus("Could not start the microphone. You can type instead.")}
  });
});
$("form").addEventListener("submit",e=>{e.preventDefault();understand($("q").value)});
$("lang").addEventListener("change",async e=>{
  S.lang=e.target.value;S.noLang=false;lsSet("vb:lang",S.lang);$("langnote").hidden=true;applyUI();renderDocs();renderProbs();
  if(S.doc&&S.prob)showResult();
  await ensureLabels();
});
$("theme").addEventListener("click",()=>{
  const r=document.documentElement;const dark=getComputedStyle(r).colorScheme.includes("dark");
  r.setAttribute("data-theme",dark?"light":"dark");lsSet("vb:theme",dark?"light":"dark");
});

(async function init(){
  const sel=$("lang");
  for(const l of LANGS)sel.append(h("option",{value:l[0]},l[1]+(l[0]==="en"?"":" · "+NAMES[l[0]])));
  const saved=lsGet("vb:lang");if(saved&&UI[saved])S.lang=saved;sel.value=S.lang;
  const th=lsGet("vb:theme");if(th)document.documentElement.setAttribute("data-theme",th);
  applyUI();renderDocs();
  // No AI key is configured: S.sample and S.dict stay null, so built-in fallbacks run.
  if(!S.dict&&!(window.SpeechRecognition||window.webkitSpeechRecognition)){
    setStatus("Voice is not available in this app. Open this page in Chrome on your phone, or use the microphone key on your keyboard.");
  }
  try{speechSynthesis.getVoices();speechSynthesis.addEventListener("voiceschanged",()=>{})}catch(e){}
  if(S.lang!=="en")ensureLabels();
})();
