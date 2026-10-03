(function () {
var C = {"prefix":"nafs_ar","norm":"ar","locale":"ar","dir":"rtl","htmlLang":"ar","appName":"نَفَس","brandSub":"مرشد ذاتي للدعم","pageTitle":"نَفَس | مرشد ذاتي","meta":"نَفَس مرشد ذاتي للدعم: فحص مزاج وقلق كأداة فرز مش تشخيص، دليل بكلمات محلية، خطة أيام، وتنفّس. مش بديل عن معالج مرخّص.","noscript":"هاد مرشد ذاتي للدعم، مش بديل عن معالج نفسي مرخّص. التطبيق بدّه جافاسكربت ويشتغل على جهازك من غير إنترنت خارجي.","disclaimer":"هاد مرشد ذاتي للدعم، مش بديل عن معالج نفسي مرخّص.","medNote":"ما بنصح بأدوية ولا بجرعات ولا بتغيير علاج موصوف. هاد قرار الطبيب أو الصيدلاني بس. تحت، إذا في مجال، بنحكي عن مساعدة ذاتية عامة من غير أدوية.","diagNote":"ما بنشخّص، وما بنقدر نقول إذا في عندك حالة باسمها. اللي بنعمله وصف عام لطرق مساعدة ذاتية، والفحص بالجهاز مدى تقريبي مش تشخيص.","guideNote":"الإجابات توجيه عام من طرق مساعدة ذاتية معروفة، مش علاج شخصي ولا جلسة مع معالج. إذا الضيق ثقيل، احكي مع مختص مرخّص.","choices":[{"v":0,"t":"أبدًا"},{"v":1,"t":"عدة أيام"},{"v":2,"t":"أكثر من نصف الأيام"},{"v":3,"t":"تقريبًا كل يوم"}],"phq":["قلة الاهتمام أو المتعة بعمل الأشياء","الشعور إنك نازل، حزين، أو فاقد الأمل","صعوبة بالنوم أو بالاستمرار فيه، أو نوم زيادة عن اللزوم","الشعور بالتعب أو إن الطاقة قليلة","شهية ضعيفة أو أكل زيادة عن اللزوم","الشعور إنك سيّئ بحق حالك، أو إنك فشلت، أو إنك خذلت حالك أو عيلتك","صعوبة بالتركيز على الأشياء، مثل القراءة أو مشاهدة التلفزيون","بطء بالحركة أو بالكلام لدرجة الناس ممكن يلاحظوا، أو العكس: تململ وحركة زيادة عن عادتك","أفكار إنه كان أفضل لو إنك مش موجود، أو أفكار بإيذاء حالك"],"gad":["الشعور بالعصبية أو القلق أو إنك على الحافة","ما بتقدر توقف القلق أو تسيطر عليه","القلق الزيادة على أشياء مختلفة","صعوبة بالاسترخاء","تململ لدرجة صعب تقعد مرتاح","بتتضايق أو بتعصب بسرعة","الشعور بالخوف كأن إشي مخيف رح يصير"],"areas":[{"id":"sleep","label":"النوم"},{"id":"relationships","label":"العلاقات"},{"id":"grief","label":"الحزن أو الخسارة"},{"id":"anger","label":"الغضب"},{"id":"work","label":"ضغط الشغل"}],"sleepItems":[{"id":"caffeine","label":"الكافيين خلص من بدري، مش متأخر"},{"id":"screen","label":"بخفف الشاشة قبل النوم بساعة تقريبًا"},{"id":"wake","label":"وقت الصحوة بكرا ثابت قد ما أقدر"},{"id":"bed","label":"السرير للنوم، مش للسهر ولف الأفكار"},{"id":"wind","label":"في تهدئة قصيرة قبل السرير، حوالي نص ساعة"}],"breath":{"m468":"٤-٤-٦","box":"صندوق ٤-٤-٤-٤"},"phases":{"in":"شهيق","hold":"احبس","out":"زفير","holdOut":"احبس برّه"},"bands":{"phq":[{"key":"severe","name":"شديد","plain":"الأعراض اللي وصفتها بتشبه ضيق مزاج بدرجة شديدة"},{"key":"modsevere","name":"أعلى","plain":"الأعراض اللي وصفتها بتشبه ضيق مزاج بدرجة عالية"},{"key":"moderate","name":"متوسط","plain":"الأعراض اللي وصفتها بتشبه ضيق مزاج بدرجة متوسطة"},{"key":"mild","name":"خفيف","plain":"الأعراض اللي وصفتها بتشبه ضيق مزاج بدرجة خفيفة"},{"key":"minimal","name":"قليل","plain":"الأعراض اللي وصفتها بالمدى القليل على أسئلة المزاج"}],"gad":[{"key":"severe","name":"عالٍ","plain":"الأعراض اللي وصفتها بتشبه قلق وتوتر بدرجة عالية"},{"key":"moderate","name":"متوسط","plain":"الأعراض اللي وصفتها بتشبه قلق وتوتر بدرجة متوسطة"},{"key":"mild","name":"خفيف","plain":"الأعراض اللي وصفتها بتشبه قلق وتوتر بدرجة خفيفة"},{"key":"minimal","name":"قليل","plain":"الأعراض اللي وصفتها بالمدى القليل على أسئلة القلق"}]},"ui":{"recHigh":"الدرجات بهالمدى العالي. من المهم تشوف معالج نفسي مرخّص قريب. المرشد هاد سند جانبي، مش بديل.","recMid":"الدرجات بالمدى المتوسط. منيح يكون في مختص بالصورة إذا الضيق مستمر أو مأثر على نومك أو شغلك أو علاقاتك.","recLow":"الدرجات مش بالمدى العالي. الخطة القصيرة اختيارية عشان مهارات، مش لأن في تشخيص. إذا برغم هيك يومك تقيل، فيك تحكي مع مختص.","rounds":"كم جولة؟","ready":"جاهز","start":"ابدأ","stop":"وقّف","ok":"تمام","breathHint":"الدائرة بتكبر مع الشهيق وبتصغر مع الزفير. إذا دوخت، وقّف.","breathNote":"شو لاحظت بجسمك بعد التنفّس؟","sleepNote":"ملاحظة لليل هاد","breathDone":"خلّصت الجولة. ارجع لنفسك العادي إذا بدك.","cycleLabel":"الجولة {n} من {total}","holdTitle":"التمارين واقفة","holdBody":"آخر مرة كان في كلام أو جواب فيه خطر على السلامة. عشان هيك ما منكمّل الدليل ولا الخطة ولا التنفّس هسّة.","holdStill":"إذا لسّاك بخطر، اتّصل بـ 1201 أو 101، أو روح لأقرب طوارئ.","numbers":"أرقام المساعدة","clearHold":"أنا بأمان، وبقدر أرجع للتمارين","navHome":"البداية","navCheck":"الفحص","navGuide":"الدليل","navPlan":"الخطة","navBreath":"تنفّس","history":"السجل","eyebrow":"مرشد ذاتي بهدوء","lead":"إذا الدنيا ضاغطة، فيك تفحص كيف آخر أسبوعين، تاخد خطوة صغيرة، أو بس تنفّس. نَفَس مش عيادة، وما بنشخّص، وما بنوعد بنتيجة.","homeMethods":"الطرق اللي بنستخدمها معروفة للمساعدة الذاتية: ترتيب الأفكار، الرجوع لحركة صغيرة، التنفّس، عادات النوم، حل المشكلة بخطوات، فهم الحزن، والحكي بجملة أنا.","homeBreath":"خد نفس. مش لازم تظبط كل إشي هسّة.","tileCheck":"فحص المزاج والقلق","tileCheckSub":"أسئلة مساعدة مش تشخيص، وبتتحفظ عندك.","tileGuide":"احكي اللي مضايقك","tileGuideSub":"بنطابق كلامك لطريقة معروفة، وبخطوة تعملها هسّة.","tilePlan":"خطة الأيام","tilePlanSub":"٥ أو ١٠ أو ١٤ يوم، حسب مدى الفحص.","tileBreath":"تنفّس","tileBreathSub":"دائرة وإيقاع ٤-٤-٦ أو صندوق، من غير نت.","localNote":"إجاباتك بتضل على هاد الجهاز، من غير حساب ومن غير سيرفر.","safetyLink":"إذا في خطر عليك أو على غيرك هسّة، اضغط هون للأرقام.","checkKicker":"استبيان مساعدة مش تشخيص","checkTitle":"كيف آخر أسبوعين؟","checkIntro":"في أسئلة مزاج مبنية على بنود PHQ-9، وأسئلة قلق مبنية على بنود GAD-7، بصياغة عربية واضحة. مش النسخة المعتمدة لعيادة، وما بنسمّي حالة.","checkScale":"كل بند من ٠ إلى ٣: أبدًا، عدة أيام، أكثر من نصف الأيام، تقريبًا كل يوم. جاوب على آخر أسبوعين، مش على شخصيتك كلها.","checkStart":"يلا نبلّش","moodQ":"أسئلة المزاج · استبيان مساعدة مش تشخيص","anxQ":"أسئلة القلق · استبيان مساعدة مش تشخيص","qProgress":"سؤال {n} من {total} — خلال الأسبوعين اللي فاتوا","item9warn":"السؤال هاد عن السلامة. جاوب بصراحة. إذا الجواب مش «أبدًا»، منوقف التمارين وبنفرجيك أرقام مساعدة.","back":"السابق","areasTitle":"في إشي مضايقك زيادة؟","areasBody":"علّم المجالات اللي بينطبق عليك هالفترة. اختياري، وفيك تختار أكتر من وحدة. بنقدّم تمارينها أبكر بالخطة.","showRange":"ورّيني المدى","noResult":"لسّا ما في نتيجة. ابدأ الفحص.","replacePlan":"فاهم إن الخطة الجديدة بتستبدل التقدم القديم ({done} أيام مخلّصة).","replaceErr":"علّم المربع إذا بدك تستبدل الخطة القديمة.","resultTitle":"المدى، مش اسم حالة","moodScore":"أسئلة المزاج","anxScore":"أسئلة القلق","of27":"من ٢٧ · {name}","of21":"من ٢١ · {name}","cutoffExplain":"الجمع بالطريقة المعروفة: كل بند من ٠ إلى ٣. حدود المزاج الشائعة: ٠–٤ قليل، ٥–٩ خفيف، ١٠–١٤ متوسط، ١٥–١٩ أعلى، ٢٠–٢٧ شديد. حدود القلق: ٠–٤ قليل، ٥–٩ خفيف، ١٠–١٤ متوسط، ١٥–٢١ عالٍ.","lengthExplain":"طول الخطة من أعلى مدى بين الاتنين: ٠–٩ خمسة أيام، ١٠–١٤ عشرة أيام، و١٥ وفوق أربعة عشر يوم. هسّة الخطة {len} أيام.","areasChosen":"المجالات اللي علّمتها: {names}.","noAreas":"ما علّمت مجال إضافي، وهاد تمام.","listSep":"، ","startPlan":"ابدأ خطة {len} أيام","newCheck":"فحص جديد","seeHistory":"شوف السجل","guideTitle":"احكي اللي صاير","guideIntro":"اكتب بجملتين، متل ما بتحكي لحدا قريب. في محرّك كلمات محلي، مش شخص ولا نموذج ذكي، وبجاوب من طرق معروفة.","guideLabel":"اللي مضايقك","guideRun":"ورّيني خطوة هسّة","guideEmpty":"اكتب شوي عن اللي مضايقك عشان نلاقي خطوة تناسب الكلام.","medsTitle":"عن الأدوية","medsBody":"إذا بدك تشوف مدى المزاج والقلق من غير ما نسمّي حالة، الفحص موجود. هو كمان مش تشخيص.","toCheck":"روح للفحص","pstKicker":"حل المشكلات بخطوات","pstTitle":"نرتّب المشكلة وحدة وحدة","pstIntro":"ما لقيت موضوع جاهز قريب من كلامك. هاد طبيعي. خلّينا نفك الإشي لمشكلة وحدة وخطوة وحدة، بدل ما كل الهموم تضل متلخبطة.","stepsH":"الخطوات","exerciseH":"تمرين تعمله هسّة","whatH":"شو اللي بصير","stepsNow":"خطوات هسّة","pstExercise":"عبّي الخانات. الهدف تجربة صغيرة مش حل نهائي. ومنيح تعمل الفحص عشان الخطة تتظبط على أيام.","altTopic":"كمان لمحت موضوع قريب: {title}. إذا بدك إياه، اكتبه بجملة أوضح.","openBreath":"افتح مؤقت التنفّس","noPlan":"لسّا ما في خطة","noPlanBody":"اعمل الفحص أول. من أعلى درجة بنحدد الطول: ٥ أيام إذا من ٠ إلى ٩، ١٠ إذا من ١٠ إلى ١٤، و١٤ إذا ١٥ أو أعلى. الخطة بتنحفظ على جهازك، وكل يوم فيها درس قصير وتمرين بتعبّيه.","yourPlan":"خطتك","planProgress":"{done} من {total} أيام. بدأت {start}.","todayKicker":"مهمة اليوم · يوم {n}","openToday":"افتح مهمة اليوم","allDays":"كل الأيام","dayTitle":"يوم {n} · {title}","stDone":"خلصت","stToday":"مهمة اليوم","stOpen":"مفتوحة","stLocked":"بتفتح بيومها","missingDay":"ما لقينا هاد اليوم بالخطة.","backPlan":"ارجع للخطة","lockedBody":"هاد اليوم لسّاه مو وقته. بنفتحه بتاريخ القدس عشان الخطة تضل على مهلك.","daySaved":"اليوم انسجل. منيح إنك كملت خطوة صغيرة.","dayKicker":"يوم {n} من {total} · {method}","markDone":"علّم اليوم خلص","doneCheck":"اليوم مخلّص","undoDone":"تراجع عن الإكمال","needContent":"اكتب إشي صغير، أو علّم بند، قبل ما نعلّم اليوم خلص.","breathTitle":"تنفّس هسّة","breathIntro":"اختَر إيقاع. ٤-٤-٦ يعني شهيق ٤، حبس ٤، وزفير ٦. الصندوق أربعة أضلاع، كل ضلع ٤ عدّات. بيشتغل على جهازك من غير نت.","noHistory":"لسّا ما في فحوصات محفوظة على هاد الجهاز.","crisisHistory":"توقف الاستخدام عند السلامة. ما انعملت خطة من هالسجل، وما بنعرض تفاصيل الخطر.","histLine":"مزاج {phq} من ٢٧ · {phqName} · قلق {gad} من ٢١ · {gadName} · خطة {len} أيام","histTitle":"سجل الفحوصات","histNote":"الأوقات بتوقيت القدس. السجل عندك بس.","clearYes":"متأكد، امسح الفحوصات والخطة","clearNo":"لا، خلّيهم","clearAsk":"امسح الفحوصات والخطة عن هاد الجهاز","crisisTitle":"سلامتك أهم من أي تمرين","crisisBody":"اللي وصلنا فيه خطر على سلامتك أو سلامة غيرك. مش رح نعطيك خطوات ولا تمارين، ومش رح نكمّل البرنامج هسّة.","crisisCall":"اتّصل هسّة، أو خلّي حدا قريب يتّصل معك:","eranLabel":"خط ERAN، إسعاف نفسي أولي، ٢٤ ساعة","emergencyLabel":"الطوارئ","goER":"روح لأقرب طوارئ إذا كنت بخطر فوري.","outside":"إذا أنت برا هالمنطقة، اتصل برقم الطوارئ المحلي أو أقرب مستشفى.","crisisBack":"إرجع","crisisBackHold":"إذا كنت بمكان آمن، إرجع للبداية. التمارين بتضل واقفة لين ما تؤكد إنك بأمان"},"chips":[["قلبي بيدق وخايف يصير فيي إشي","قلق"],["ما إلي خلق وما بدي أعمل إشي","مزاج"],["صارلي أرق وما بنام","نوم"],["متدايق وبدي أصرخ","غضب"],["بعد الفقدان الدنيا ثقيلة ومشتاق","خسارة"],["بفكر كتير وما بقدر أوقف تفكير","تفكير"]],"pstSpec":[["problem","المشكلة بجملة"],["goal","الهدف الصغير"],["options","٣ خيارات"],["choice","الخيار اللي رح تجربه، وأول خطوة ومتى"]],"pstSteps":["عرّف المشكلة بجملة: شو صار، ومين متأثر، ومن إمتى.","حط هدف صغير لهاد الأسبوع، مش تغيير حياتك كلها.","اكتب ٣ خيارات على الأقل، حتى لو فيها «ما أعمل إشي».","قدام كل خيار: شو ممكن ينفع، وشو الثمن.","اختَر خيار واحد، وحدد أول خطوة من ١٠ دقايق ومتى.","بعد التجربة راجع: نكمّل، نعدّل، أو منجرّب خيار ثاني."],"medKeys":["دواء","أدوية","ادويه","مضاد اكتئاب","مضاد القلق","بروزاك","سيروكسات","زاناكس","فاليوم","جرعة","جرعات","مليغرام","مليجرام","mg","medication","antidepress","prozac","sertraline","zoloft","xanax","valium","benzo","medicine","dose"],"diagKeys":["شخصني","شو تشخيص","ما هو تشخيص","تشخيصي","هل عندي اكتئاب","عندي اكتئاب","هل أنا مكتئب","do i have depression","am i depressed","diagnose me","what is my diagnosis"],"idioms":["ما بدي اموت","مش بدي اموت","مو بدي اموت","لا اريد ان اموت","بدي اموت من (ال)?(ضحك|جوع|ملل|عطش|برد|حر|خجل|تعب)","نفسي اموت من (ال)?(ضحك|جوع|ملل|عطش|برد|حر|خجل|تعب)","مش انتحار","ما في انتحار","dont want to die","do not want to die","don t want to die","not suicidal","am not suicidal","not going to kill myself","wont kill myself","will not kill myself","would not kill myself","want to die of laughter","want to die of laughing","want to die laughing","dying of laughter","dying laughing","dying of hunger","dying of boredom","dying of embarrassment","dying of shame","dying of exhaustion","youre killing me","you are killing me","this is killing me"],"crisis":["انتحار","منتحر","ا+و?ذي(ت|ه)? (حالي|نفسي)","ب?اوذي (حالي|نفسي|غيري|حدا|حد|الناس)","اقطع (حالي|نفسي)","جرح حالي","(اقتل|قتل) (حالي|نفسي)","بدي اموت","نفسي اموت","ابي اموت","ابغى اموت","ودي اموت","عايز اموت","عاوز اموت","ما بدي اعيش","مش بدي اعيش","لا اريد ان اعيش","ما اريد ان اعيش","ما عدت بدي اعيش","يا ريتني (ميت|اموت)","كان احسن لو (مت|اموت)","افضل لو (مت|اموت)","بدي اقتل","(اذي|اوذي) (حدا|حد|الناس|غيري|شخص)","اقتل (حدا|حد|الناس|شخص|واحد)","self\\s?harm","suicid","kill myself","killing myself","want to die","wanna die","end my life","end it all","hurt myself","harm myself","cut myself","want to hurt someone","kill (him|her|them|someone)","hurt (someone|him|her|them)","harm (someone|him|her|them)","\\bmurder\\b"],"topics":[{"id":"anxiety","title":"لما القلق أو الذعر يعلى","method":"تنفّس بطيء وتثبيت بالحواس","what":"لما القلق يعلى، الجسم بيدخل وضع استعداد كأنه في خطر، حتى لو الخطر مش قدامك هسّة. القلب يسرع، والنفس يضيق، والأفكار تجري. هاد رد فعل معروف، ومش معناه إنك بتفقد السيطرة.","steps":["حط رجليك على الأرض، وسمّي ٥ إشياء بتشوفها حواليك.","طوّل الزفير: شهيق ٤، احبس ٤، وزفير ٦. كرّر هيك ٥ مرات، ووقّف إذا دوخت.","قول جملة واقعية: «هاد قلق، ورح يعدّي، وأنا هسّة بهالمكان.»"],"exerciseTitle":"تنفّس ٤-٤-٦ هسّة","toBreath":true,"exercise":"اقعد مرتاح. شهيق من الأنف لحد ٤، احبس لحد ٤، وزفير من الفم لحد ٦. بعد كل زفير سمّي لون واحد قدامك. إذا حسيت بدوخة، وقّف وارجع لنفسك العادي.","pad":"بعد الجولة، اكتب إشي واحد شفته حواليك","keys":[["قلق",2],["قلقان",3],["قلقه",3],["توتر",2],["متوتر",2],["نوبة",4],["ذعر",4],["panic",4],["anxiety",3],["anxious",3],["خفقان",4],["قلبي بيدق",4],["ضيقه نفس",3],["بخنق",3],["رعبه",3],["خايف",2],["خوف",1]]},{"id":"mood","title":"لما المزاج ثقيل وما إليك خلق","method":"تنشيط السلوك: حركة صغيرة قبل ما يجيك الحماس","what":"المزاج المنخفض بقلّل الطاقة، فبتأجل الإشياء، والتأجيل بيزيد الثقل. طريقة مساعدة ذاتية معروفة بتبدأ بالفعل الصغير قبل الشعور. مش لازم تحس إنك جاهز عشان تبلّش.","steps":["اختَر شغل حوالي ١٠ دقايق بس، مش إصلاح يومك كله.","اعمله حتى لو ما إليك خلق. الحركة أول، والمزاج يمكن يلحق شوي ويمكن لا.","بعد ما تخلّص، سجّل شعورك من ٠ ل١٠ من غير حكم على حالك."],"exerciseTitle":"ثلاث شغلات صغيرة","exercise":"اكتب ٣ أشياء صغيرة لليوم، متل غسيل الوجه أو مشي ٥ دقايق أو ترتيب زاوية. اختَر وحدة وحدد متى رح تبلّشها، يفضّل خلال ساعة.","pad":"اكتب الثلاث شغلات ووقت أول وحدة","keys":[["حزين",3],["حزن",2],["مكتئب",3],["اكتئاب",2],["ما الي خلق",4],["مالي خلق",4],["ما في خلق",3],["يأس",3],["يائس",3],["فاضي",2],["ما بدي اعمل اشي",3],["low mood",3],["depressed",2],["تعبان نفسيا",3],["مزاجي نازل",4]]},{"id":"sleep","title":"لما النوم يضيع","method":"عادات النوم","what":"الأرق كتير بيصير لما السرير يتربط بالسهر والتفكير. الجسم بضل منتبه. عادات النوم بترجع تربط المكان بالنعاس على مهلك، وهي ترتيب للوقت والمكان مش دواء.","steps":["ثبّت وقت الصحوة بكرا، حتى لو نمت متأخر الليلة.","إذا ما جاك النوم تقريبًا خلال ٢٠ دقيقة، قوم لمكان هادي من غير شاشة، وارجع لما يجي النعاس.","خلّص الكافيين من بدري، وخفف الشاشة قبل النوم بساعة."],"exerciseTitle":"ورقة تهدئة الليل","exercise":"اكتب وقت الصحوة بكرا، وإشي واحد رح تعمله عشان تهدى قبل السرير: ضوء أهدى، أو صفحات من كتاب، أو نفس بطيء بعيد عن السرير.","pad":"وقت الصحوة وإشي التهدئة","keys":[["ارق",4],["ما بنام",4],["ما بقدر انام",4],["سهر",3],["insomni",4],["نومي",3],["بصحي بكير",3],["ما جاني نوم",4],["سهران",3]]},{"id":"anger","title":"لما الغضب يسبق الكلمة","method":"وقفة قصيرة، وبعدين جملة أنا","what":"الغضب إشارة إن في خط انكسر. الجسم بيمتلئ طاقة بسرعة، وأول كلمة كتير بتطلع أقسى من قصدك. الهدف مش نلغي الغضب. الهدف نختار شو نعمل فيه قبل ما نندم على الحكي.","steps":["ابتعد دقايق: مي، مشي قصير، أو غرفة ثانية. هاي وقفة مش هزيمة.","سمّي وين الغضب بجسمك: فك، كتفين، حرارة، أو إيد مقبوضة.","لما الحدة تنزل شوي، إذا لزم الحكي، استخدم جملة أنا مش اتهام."],"exerciseTitle":"جهّز الجملة قبل ما تقولها","exercise":"اكتب: «لما صار …، حسيت …، وبدي …». خلّي الطلب إشي واضح يقدر الثاني يعمله، وشيل «دايمًا» إذا قدرت.","pad":"جملة أنا جاهزة","keys":[["غضب",4],["غاضب",4],["عصبي",3],["زعلان",2],["بدي اصرخ",4],["منفعل",3],["anger",3],["angry",3],["غليان",3]]},{"id":"grief","title":"لما الخسارة تضل موجودة","method":"تفهّم الحزن: الموجة مش مرض","what":"الحزن بعد الخسارة مش مرض، ومش سلم درجات لازم تمشيه بالترتيب. بيجي موجات، يوم أثقل ويوم أخف. ما في طريقة وحدة صح. التجنّب الكامل، أو الضغط على حالك تخلّص بسرعة، الاتنين بيثقلوا.","steps":["سمّي الخسارة بجملة صريحة، من غير ما تخففها بجملة جاهزة.","اعطِ الموجة وقت قصير، حوالي ١٠ دقايق كتابة أو حكي، وبعدين ارجع لخطوة صغيرة بحياتك.","إذا في شخص آمن، قوله جملة وحدة عن اللي فقدته. مش لازم كل الإشي."],"exerciseTitle":"ذكرى وإشي لطيف لحالك","exercise":"اكتب ذكرى صغيرة، وإشي لطيف واحد لحالك اليوم: أكل، مي، اتصال قصير، أو طلعة للشمس. اللطف مش نسيان.","pad":"الذكرى والإشي اللطيف","keys":[["وفاه",4],["توفي",4],["توفى",4],["فقدان",3],["خسرت",3],["grief",4],["اشتقت",3],["فراق",3],["رحيل",3],["مات",2],["ماتت",3],["بعد الخساره",4],["حزن على",3]]},{"id":"relationship","title":"لما الخناق يسكر الحكي","method":"الحكي بجملة أنا","what":"الخناق غالبًا بيبلّش بـ«إنت دايمًا» أو «عمرك ما». الطرف الثاني بيسمع اتهام فبدافع، والحكي بيسكر. جملة أنا بتحكي عن شعورك وطلبك، مش عن محاكمة.","steps":["إذا الصوت عالي والجسم مشتعِل، أجّل الحكي ربع ساعة على الأقل.","رتّب الجملة: شو صار، شو حسيت، وطلب واحد واضح.","اختَر وقت قصير للحكي، مش تحقيق وانتوا لسّاكم زعلانين."],"exerciseTitle":"اكتب الجملة قبل ما تبعتها","exercise":"اكتب هون: «لما صار … حسيت … وبدي …». اقرأها. إذا فيها اتهام مطلق، بدّل كلمة وحدة وبعدين قرر إذا تبعتها.","pad":"جملة أنا","keys":[["علاقه",2],["زوجتي",3],["زوجي",3],["جوزي",3],["مرتي",3],["شريك",2],["خناقه",4],["خناق",3],["خلاف",2],["ما بيفهمني",4],["بيتجاهلني",3],["relationship",3],["partner",2],["انفصال",3],["خطيبي",3],["خطيبتي",3]]},{"id":"overthinking","title":"لما الأفكار تلف وما توقف","method":"نافذة القلق","what":"التفكير الزايد بيحاول يمسك خطر لسّاه مو قدامك عن طريق تكرار الأفكار. التكرار بيبين كأنه شغل، بس هو مش خطة. نافذة القلق بتعطي التفكير ميعاد، وبتفك باقي اليوم لخطوة وحدة.","steps":["اكتب الفكرة بجملة وحدة، زي ما هي من غير تجميل.","اسأل: في فعل صغير فيني أعمله اليوم، ولا هاد سيناريو لسّاه بعيد؟","إذا ما إله فعل هسّة، حطه بميعاد ١٥ دقيقة، وارجع لإشي واحد قدامك."],"exerciseTitle":"حدّد نافذة اليوم","exercise":"اكتب القلق، واختار ساعة محددة للنافذة، واكتب إشي واحد بتعمله هسّة براها. لما توصل الساعة، ١٥ دقيقة بس، وبعدين سكّر الورقة.","pad":"القلق، ساعة النافذة، وفعل هسّة","keys":[["بفكر كتير",4],["تفكير زايد",4],["تفكير زائد",4],["وسواس",3],["overthink",4],["ما بقدر اوقف تفكير",4],["لف افكار",3],["سيناريو",2],["افكار زيادة",3],["rumination",4]]},{"id":"loneliness","title":"لما الوحدة تكبر","method":"تواصل صغير، مش مثالي","what":"الوحدة بتقول إنك منفصل، فبتقل الرغبة تحكي مع حدا، والدائرة بتكبر. التواصل مش لازم يكون عميق عشان يفرق. سطرين لشخص واحد أحسن من خطة كبيرة ما بتصير.","steps":["اختَر شخص واحد بس، مش قائمة.","اكتب رسالة قصيرة، حتى «كيفك، فتت على بالي».","ذكّر حالك: الوحدة شعور هسّة، مش حكم إنك ما بتستاهل حدا."],"exerciseTitle":"رسالة من سطرين","exercise":"اكتب نص الرسالة، واكتب متى رح تبعتها خلال ٢٤ ساعة. إذا الإرسال تقيل كتير هسّة، اكتب مكان فيه ناس رح تمر عليه اليوم من غير ما يلزمك حكي طويل.","pad":"نص الرسالة أو المكان","keys":[["وحده",4],["وحيد",4],["لوحدي",3],["lonely",4],["loneliness",4],["ما في حدا",4],["معزول",3],["مقطوع",2],["ما حدا يحكيني",4]]},{"id":"burnout","title":"لما الشغل يستنزفك","method":"تخفيف الحمل قبل ما يزيد الاستنزاف","what":"الاستنزاف من الضغط الطويل بيبين تعب، وتبلّد، وقلة معنى. هاد مش كسل ولا ضعف شخصية. الراحة القصيرة وحد واضح جزء من الحفاظ على نفسك، مش جائزة لازم تستاهلها أول.","steps":["حط وقفة حقيقية اليوم، حتى ١٥ دقيقة، من غير شاشة الشغل.","اكتب إشي واحد تقدر تخففه أو تأجله، حتى لو صغير.","ارجع لإشي فيه معنى إلك، مش بس بند يتشطب من قائمة."],"exerciseTitle":"ثلاث خانات لليوم","exercise":"اكتب: إشي رح توقفه أو تأجله، وقت الراحة اليوم، ووقت النوم اللي رح تحاول تثبته. اختَر أرقام واقعية مش مثالية.","pad":"التأجيل، الراحة، ووقت النوم","keys":[["احتراق",4],["burnout",4],["استنزاف",3],["ضغط الشغل",4],["مديري",2],["الدوام",2],["زهقت من الشغل",4],["ما عاد فيني اشتغل",4],["تعبان من الشغل",4]]},{"id":"esteem","title":"لما الصوت القاسي يعمم","method":"ترتيب الفكرة القاسية عن حالك","what":"الصوت القاسي بحكي بتعميم: «دايمًا بفشل» أو «أنا مش كفاية». هاي فكرة، مش حقيقة كاملة عنك. بنفحص الدليل، وبنكتب جملة أعدل فيها واقعة، مش مجاملة فاضية ما بتصدقها.","steps":["اكتب الجملة القاسية حرفيًا زي ما مرت.","اكتب دليل معها، ودليل ضدها أو تفصيلة التعميم بينساها.","افصل الفعل عن ذاتك: صار غلط بإشي، ومش معناه إنك كله غلط."],"exerciseTitle":"جملة قاسية وجملة أعدل","exercise":"اكتب الجملة القاسية، وبعدين جملة أعدل فيها تفصيلة من واقعك. إذا «أنا رائع» مش داخلة عليك، ما تكتبها. اكتب جملة تقدر تقف قدامها.","pad":"الجملتين","keys":[["ثقتي",3],["تقدير ذاتي",4],["self esteem",4],["self-esteem",4],["مش كفايه",4],["فاشل",3],["بكره حالي",3],["ما بستاهل",3],["انا تافه",4],["ما الي قيمه",4]]}],"templates":[{"id":"t1","title":"نفس أطول من العجلة","method":"تنفّس بطيء","exercise":"breathing","lesson":"لما الجسم يتوتر، الزفير الطويل بعطي إشارة أمان. مش لازم تحس بهدوء كامل عشان التمرين يفيد. هسّة بس بدنا نبطّئ النفس. إذا حسيت بدوخة، وقّف وارجع لنفسك العادي."},{"id":"t2","title":"حركة صغيرة قبل الحماس","method":"تنشيط السلوك","exercise":"activity","lesson":"المزاج الثقيل بيقنعك تستنى تصير جاهز. الطريقة المعروفة بالعكس: بتبلّش بفعل صغير، والحماس يمكن ييجي بعدين ويمكن لا. المهم إنك عملت الإشي، مش إنه حسّيته سهل."},{"id":"t3","title":"الفكرة اللي بالنص","method":"ترتيب الأفكار","exercise":"thought","lesson":"الموقف بصير شعور عن طريق فكرة بالنص. إذا الفكرة فيها «دايمًا» أو «أبدًا» أو حكم على كل شخصك، بنكتب الدليل معها وضدها، وبعدين فكرة أعدل. هاي أداة من العلاج المعرفي السلوكي، بنستخدمها هون كتمرين ذاتي مش كجلسة علاج."},{"id":"t4","title":"وقت للقلق، مش كل اليوم","method":"نافذة القلق","exercise":"worry","lesson":"تأجيل القلق لميعاد محدد بيدرّب الدماغ إنه مش لازم يشتغل طول الوقت. برا النافذة بتكتب الفكرة وبترجع لخطوة وحدة. جوّا النافذة بتراجع الورقة حوالي ١٥ دقيقة وبس."},{"id":"t5","title":"ليل أهدى","method":"عادات النوم","exercise":"sleep","lesson":"النوم بيتأثر من الكافيين المتأخر، والشاشة، ومن السرير اللي صار مكان تفكير. مش بنوعدك تنام الليلة. بنرتّب ظروف بتخلي النعاس أسهل كم يوم لقدام."},{"id":"t6","title":"مشكلة وحدة بس","method":"حل المشكلات بخطوات","exercise":"problem","lesson":"لما كل الإشي مفتوح، الدماغ بيتجمد. بنختار مشكلة وحدة، هدف صغير، كم خيار، وتجربة واحدة. بعدين بنراجع. مش لازم القرار الأول يكون كامل."},{"id":"t7","title":"ارجع للمكان اللي أنت فيه","method":"تثبيت بالحواس","exercise":"senses","lesson":"لما الأفكار تسبقك، الحواس بترجعك للغرفة. سمّي إشياء بتشوفها وتسمعها وتلمسها. هاي وقفة عشان الجسم يهدى شوي، مش هروب من المشكلة. بعدين بنرجع لخطوة صغيرة."},{"id":"t8","title":"احكي عنك، مش اتهام","method":"جملة أنا","exercise":"istatement","lesson":"«إنت دايمًا» بتقفل أذن الثاني. جملة أنا فيها الموقف، شعورك، وطلب واضح. فيك تكتبها هون حتى لو ما بعتها اليوم. الكتابة بترتّب، والإرسال قرار لحال."},{"id":"t9","title":"الموجة مش غلط","method":"تفهّم الحزن بعد الخسارة","exercise":"grief","lesson":"الحزن بعد الخسارة ما إله ترتيب ثابت عند كل الناس. في موجة بتجي فجأة وفي يوم أخف، والاتنين مفهومين. الهدف مش تنسى. الهدف تمشي مع الموجة وترجع لخطوة حياة صغيرة من غير ما تظلم حالك."},{"id":"t10","title":"وقفة قبل الكلمة","method":"تهدئة الغضب","exercise":"anger","lesson":"الغضب طاقة سريعة، والوقفة مش ضعف. بتسمي الإحساس بجسمك، بتبعد كم دقيقة، وبترجع بجملة أنا إذا لزم الحكي. إذا في خطر عليك أو على غيرك، اترك التمرين واتصل بخط المساعدة أو الطوارئ."},{"id":"t11","title":"الصوت القاسي مش قاضي","method":"ترتيب فكرة تقدير الذات","exercise":"esteem","lesson":"«أنا فاشل» جملة مطلقة. بنفرّق بين فعل صار وبين حكم على كل شخصك. بنكتب دليل، وجملة أعدل فيها واقعة حقيقية. مش مطلوب تحب حالك اليوم. المطلوب ما تصدق التعميم من غير فحص."},{"id":"t12","title":"إشي حقيقي وفيه معنى","method":"تنشيط بلطف وانتباه لتفصيلة صغيرة","exercise":"gratitude","lesson":"الانتباه للإشي الصغير مش تمثيل إن كل إشي منيح. هو تذكير بتفصيلة صحيحة، ومعاها فعل صغير بقيمة عندك. إذا اليوم ثقيل وما لقيت إشي، اكتب الفعل بس."},{"id":"t13","title":"ورقة ليوم ثقيل","method":"خطة مسبقة لليوم الصعب","exercise":"hardday","lesson":"لما الطاقة تقع، صعب تخترع خطة. بنكتبها وانت أقدر شوي: مين شخص آمن، أي تمرين قصير، وأي شغلة تنشال عنك. إذا الأفكار صارت عن أذى، وقف وروح لخط المساعدة والطوارئ. التمارين ما بتكفي وقتها."},{"id":"t14","title":"شو زبط معك","method":"مراجعة ذاتية","exercise":"review","lesson":"آخر اليوم عشان تشوف شو بينفع معك أنت، مش عشان علامة. إذا الأعراض لسّاها ثقيلة أو مأثرة على حياتك، هاد وقت منيح تحكي مع معالج نفسي مرخّص. المرشد بضل سند جانبي."}],"fieldsets":{"activity":[["morning","الصبح: إشي صغير ومتى","text"],["noon","الظهر أو العصر","text"],["evening","المسا","text"],["before","مزاجك قبلها من ٠ إلى ١٠","text"],["after","مزاجك بعدين من ٠ إلى ١٠","text"]],"thought":[["situation","شو صار؟ الموقف باختصار","area"],["auto","الفكرة اللي مرت، حرفيًا","area"],["feeling","الإحساس وشدته من ٠ إلى ١٠٠","text"],["fore","شو الدليل اللي مع الفكرة؟","area"],["against","شو الدليل اللي ضدها أو بتنساه؟","area"],["balanced","فكرة أعدل وواقعية","area"],["after","شدة الإحساس بعد الكتابة من ٠ إلى ١٠٠","text"]],"worry":[["worries","اكتب الأفكار اللي بتلف، كل وحدة بسطر","area"],["when","ساعة نافذة القلق اليوم","time"],["now","إشي واحد بتعمله هسّة برا النافذة","text"]],"problem":[["problem","المشكلة بجملة وحدة","area"],["goal","هدف صغير لهاد الأسبوع","text"],["o1","خيار أول","text"],["o2","خيار ثاني","text"],["o3","خيار ثالث، حتى لو «ما أعمل إشي»","text"],["weigh","شو بينفع وشو ثمنه بكل خيار؟","area"],["choice","أي خيار رح تجربه؟","text"],["start","أول خطوة من ١٠ دقايق، ومتى","text"]],"senses":[["see","٥ إشياء بتشوفها هسّة","area"],["hear","٤ إشياء بتسمعها","area"],["touch","٣ إشياء بتلمسها، متل الكرسي أو رجليك على الأرض","area"]],"istatement":[["when","لما صار…","text"],["feel","حسيت…","text"],["need","وبدي… طلب واضح","area"]],"grief":[["who","مين أو شو الخسارة، بجملة صريحة","text"],["memory","ذكرى صغيرة بدك تحتفظ فيها","area"],["kind","إشي لطيف لحالك اليوم","text"]],"anger":[["body","وين طلع الغضب بجسمك؟","text"],["place","وين بروح بالوقفة؟","text"],["minutes","كم دقيقة الوقفة؟","text"],["line","جملة أنا إذا لزم الحكي","area"]],"esteem":[["harsh","الجملة القاسية حرفيًا","area"],["fore","دليل معها","area"],["against","دليل ضدها أو استثناء","area"],["fair","جملة أعدل فيها تفصيلة واقعية","area"]],"gratitude":[["g1","تفصيلة صحيحة صغيرة، إذا لقيتها","text"],["g2","تفصيلة ثانية، اختياري","text"],["g3","تفصيلة ثالثة، اختياري","text"],["act","فعل صغير فيه معنى إلك اليوم","text"]],"hardday":[["person","شخص آمن تقدر تحكيله، أو خط المساعدة إذا ما في","text"],["short","تمرين قصير بترجعله: تنفّس أو مشي","text"],["drop","شغلة بتنشال عنك بهاد اليوم","text"],["sleep","وقت محاولة النوم","time"]],"review":[["helped","شو التمرين اللي زبط معك أكتر؟","area"],["hard","شو كان تقيل وما لزمه لوم؟","area"],["repeat","إشي واحد رح تعيده الأسبوع الجاي","text"],["pro","إذا بدك مختص، شو أول خطوة واقعية؟ اتصال، سؤال صديق، أو موعد","area"]]}};
  "use strict";

  function fill(s, map) {
    return String(s).replace(/\{(\w+)\}/g, function (_, k) {
      return map[k] == null ? "" : String(map[k]);
    });
  }

  function norm(s) {
    var t = String(s || "").toLowerCase();
    if (C.norm === "ar") {
      return t
        .replace(/[\u064B-\u0652\u0640\u0670]/g, "")
        .replace(/[أإآٱ]/g, "ا")
        .replace(/ؤ/g, "و")
        .replace(/ئ/g, "ي")
        .replace(/ى/g, "ي")
        .replace(/ة/g, "ه")
        .replace(/[^\u0600-\u06FFa-z0-9\s]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
    }
    if (C.norm === "he") {
      return t
        .replace(/[\u0591-\u05C7]/g, "")
        .replace(/ך/g, "כ")
        .replace(/ם/g, "מ")
        .replace(/ן/g, "נ")
        .replace(/ף/g, "פ")
        .replace(/ץ/g, "צ")
        .replace(/[^\u0590-\u05FFa-z0-9\s]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
    }
    return t
      .replace(/['’]/g, "")
      .replace(/[^a-z0-9\s]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function lettersRe() {
    if (C.norm === "ar") return /[\u0600-\u06FFa-z0-9]/;
    if (C.norm === "he") return /[\u0590-\u05FFa-z0-9]/;
    return /[a-z0-9]/;
  }

  function scoreSum(arr) {
    var s = 0;
    for (var i = 0; i < arr.length; i++) s += Number(arr[i]) || 0;
    return s;
  }

  function bandPhq(score) {
    var b = C.bands.phq;
    if (score >= 20) return b[0];
    if (score >= 15) return b[1];
    if (score >= 10) return b[2];
    if (score >= 5) return b[3];
    return b[4];
  }

  function bandGad(score) {
    var b = C.bands.gad;
    if (score >= 15) return b[0];
    if (score >= 10) return b[1];
    if (score >= 5) return b[2];
    return b[3];
  }

  function programLength(phq, gad) {
    var m = Math.max(Number(phq) || 0, Number(gad) || 0);
    if (m >= 15) return 14;
    if (m >= 10) return 10;
    return 5;
  }

  function recommendText(phq, gad) {
    var m = Math.max(phq, gad);
    if (m >= 15) return C.ui.recHigh;
    if (m >= 10) return C.ui.recMid;
    return C.ui.recLow;
  }

  function jerusalemToday(d) {
    var date = d || new Date();
    try {
      return new Intl.DateTimeFormat("en-CA", {
        timeZone: "Asia/Jerusalem",
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      }).format(date);
    } catch (e) {
      return date.getFullYear() + "-" + String(date.getMonth() + 1).padStart(2, "0") + "-" + String(date.getDate()).padStart(2, "0");
    }
  }

  function daysBetween(startISO, todayISO) {
    var as = String(startISO).split("-").map(Number);
    var bs = String(todayISO).split("-").map(Number);
    var a = Date.UTC(as[0], as[1] - 1, as[2]);
    var b = Date.UTC(bs[0], bs[1] - 1, bs[2]);
    return Math.floor((b - a) / 86400000);
  }

  function todayIndex(program, todayISO) {
    var diff = daysBetween(program.startDate, todayISO || jerusalemToday());
    if (diff < 0) diff = 0;
    return Math.min(program.days.length - 1, diff);
  }

  function compileList(list, flags) {
    var out = [];
    for (var i = 0; i < list.length; i++) {
      try { out.push(new RegExp(list[i], flags || "")); } catch (e) {}
    }
    return out;
  }

  var IDIOMS = compileList(C.idioms || [], "g");
  var CRISIS_RES = compileList(C.crisis || []);

  function stripCrisisIdioms(t) {
    var s = t;
    for (var i = 0; i < IDIOMS.length; i++) s = s.replace(IDIOMS[i], " ");
    return s;
  }

  function isCrisisText(raw) {
    var t = stripCrisisIdioms(norm(raw));
    if (!t) return false;
    for (var i = 0; i < CRISIS_RES.length; i++) {
      if (CRISIS_RES[i].test(t)) return true;
    }
    return false;
  }

  function isSelfHarmScore(v) {
    return Number(v) > 0;
  }

  function hasAny(raw, list) {
    var t = norm(raw);
    for (var i = 0; i < list.length; i++) {
      var p = norm(list[i]);
      if (p && t.indexOf(p) !== -1) return true;
    }
    return false;
  }

  function isMedicationAsk(raw) { return hasAny(raw, C.medKeys || []); }
  function isDiagnosisAsk(raw) { return hasAny(raw, C.diagKeys || []); }

  function hasTerm(text, term) {
    if (!term) return false;
    var arabic = lettersRe();
    var from = 0;
    while (from < text.length) {
      var i = text.indexOf(term, from);
      if (i < 0) return false;
      var before = i === 0 ? " " : text.charAt(i - 1);
      var afterI = i + term.length;
      var after = afterI >= text.length ? " " : text.charAt(afterI);
      if (!arabic.test(before) && !arabic.test(after)) return true;
      if (C.norm === "he" && term.length >= 4 && "בהוכלמש".indexOf(before) !== -1) {
        var before2 = i < 2 ? " " : text.charAt(i - 2);
        if (!arabic.test(before2) && !arabic.test(after)) return true;
      }
      from = i + 1;
    }
    return false;
  }

  var TOPICS = (C.topics || []).map(function (t) {
    return {
      id: t.id,
      title: t.title,
      method: t.method,
      what: t.what,
      steps: t.steps,
      exerciseTitle: t.exerciseTitle,
      exercise: t.exercise,
      toBreath: !!t.toBreath,
      pad: t.pad,
      keys: (t.keys || []).map(function (k) { return { p: norm(k[0]), w: k[1] }; })
    };
  });

  var TEMPLATES = C.templates || [];
  var FIELDSETS = C.fieldsets || {};
  var PHQ_ITEMS = C.phq;
  var GAD_ITEMS = C.gad;
  var AREAS = C.areas;
  var SLEEP_ITEMS = C.sleepItems;
  var CHOICES = C.choices;

  function rankTopics(raw) {
    var t = norm(raw);
    var ranked = [];
    for (var i = 0; i < TOPICS.length; i++) {
      var score = 0;
      var ks = TOPICS[i].keys;
      for (var j = 0; j < ks.length; j++) {
        if (hasTerm(t, ks[j].p)) score += ks[j].w;
      }
      if (score > 0) ranked.push({ topic: TOPICS[i], score: score });
    }
    ranked.sort(function (a, b) { return b.score - a.score; });
    return ranked;
  }

  function respond(raw) {
    if (!norm(raw)) return { type: "empty" };
    if (isCrisisText(raw)) return { type: "crisis" };
    var meds = isMedicationAsk(raw);
    var diag = isDiagnosisAsk(raw);
    var ranked = rankTopics(raw);
    if (meds && !ranked.length) return { type: "meds-only", meds: true, diag: diag };
    if (!ranked.length) return { type: "pst", meds: meds, diag: diag };
    var alt = null;
    if (ranked[1] && ranked[1].score >= 2 && ranked[0].score - ranked[1].score <= 2) alt = ranked[1].topic;
    return { type: "topic", topic: ranked[0].topic, alt: alt, meds: meds, diag: diag };
  }

  function selectDayIds(areas, length) {
    var boost = [];
    if (areas.sleep) boost.push("t5");
    if (areas.grief) boost.push("t9");
    if (areas.relationships) boost.push("t8");
    if (areas.anger) boost.push("t10");
    if (areas.work) boost.push("t6");
    var ordered = [];
    function add(id) { if (ordered.indexOf(id) === -1) ordered.push(id); }
    add("t1");
    var room = Math.max(0, length - 3);
    for (var i = 0; i < boost.length && i < room; i++) add(boost[i]);
    add("t2"); add("t3");
    TEMPLATES.forEach(function (t) { add(t.id); });
    return ordered.slice(0, length);
  }

  function buildProgram(opts) {
    var areas = opts.areas || {};
    var length = programLength(opts.phq, opts.gad);
    var ids = selectDayIds(areas, length);
    var days = ids.map(function (id, index) {
      var src = null;
      for (var i = 0; i < TEMPLATES.length; i++) if (TEMPLATES[i].id === id) src = TEMPLATES[i];
      return { id: src.id, index: index, title: src.title, method: src.method, lesson: src.lesson, exercise: src.exercise, completed: false, completedAt: null, answers: {} };
    });
    return { createdAt: new Date().toISOString(), startDate: opts.startDate || jerusalemToday(), length: length, phq: opts.phq, gad: opts.gad, areas: areas, checkinId: opts.checkinId || null, days: days };
  }

  function loadJSON(key, fallback) {
    try { var raw = localStorage.getItem(key); if (!raw) return fallback; return JSON.parse(raw); } catch (e) { return fallback; }
  }
  function saveJSON(key, val) { try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) {} }

  var K_CHECKINS = C.prefix + "_checkins";
  var K_PROGRAM = C.prefix + "_program";
  var K_PST = C.prefix + "_pst";
  var K_PAD = C.prefix + "_pad";
  var K_PENDING = C.prefix + "_pending";
  var K_HOLD = C.prefix + "_hold";

  function loadCheckins() { return loadJSON(K_CHECKINS, []); }
  function loadProgram() { return loadJSON(K_PROGRAM, null); }
  function saveProgram(p) { saveJSON(K_PROGRAM, p); }

  var state = { view: "home", dayId: null, crisis: null, hold: false, guideText: "", guide: null, pad: "", pst: {}, check: null, result: null, formError: "", confirmClear: false };
  var breath = { running: false, timer: null, mode: "468", phaseIdx: 0, left: 4, cycle: 0, totalCycles: 5, dayId: null, finishedMsg: "" };

  function breathModes() {
    return {
      "468": { label: C.breath.m468, phases: [{ name: C.phases.in, sec: 4, dir: "in" }, { name: C.phases.hold, sec: 4, dir: "hold" }, { name: C.phases.out, sec: 6, dir: "out" }] },
      box: { label: C.breath.box, phases: [{ name: C.phases.in, sec: 4, dir: "in" }, { name: C.phases.hold, sec: 4, dir: "hold" }, { name: C.phases.out, sec: 4, dir: "out" }, { name: C.phases.holdOut, sec: 4, dir: "hold" }] }
    };
  }

  function esc(s) {
    return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function setHold(on) {
    state.hold = !!on;
    try { if (on) sessionStorage.setItem(K_HOLD, "1"); else sessionStorage.removeItem(K_HOLD); } catch (e) {}
  }

  function triggerCrisis(reason) {
    state.crisis = { reason: reason };
    stopBreath(false);
    if (reason !== "manual") {
      setHold(true);
      try { localStorage.setItem(K_PENDING, reason); } catch (e) {}
    }
    render();
    var h = document.getElementById("crisis-title");
    if (h) h.focus();
  }
  function dismissCrisis() {
    var reason = state.crisis && state.crisis.reason;
    state.crisis = null;
    if (reason && reason !== "manual") {
      try { localStorage.removeItem(K_PENDING); } catch (e) {}
      setHold(true);
    }
    if ((location.hash || "").replace("#", "") !== "home") location.hash = "home";
    else render();
  }
  function freshCheck() {
    return { stage: "intro", qi: 0, phq: Array(PHQ_ITEMS.length).fill(null), gad: Array(GAD_ITEMS.length).fill(null), areas: {} };
  }
  function saveCheckin(entry) {
    var list = loadCheckins();
    list.unshift(entry);
    if (list.length > 80) list = list.slice(0, 80);
    saveJSON(K_CHECKINS, list);
    return entry;
  }
  function fmtWhen(iso) {
    try {
      return new Intl.DateTimeFormat(C.locale, { timeZone: "Asia/Jerusalem", numberingSystem: "latn", dateStyle: "medium", timeStyle: "short" }).format(new Date(iso));
    } catch (e) { return iso; }
  }
  function areaLabels(areas) {
    var names = [];
    AREAS.forEach(function (a) { if (areas && areas[a.id]) names.push(a.label); });
    return names;
  }
  function hasContent(day) {
    var a = day.answers || {};
    if (day.exercise === "breathing") return a.did === true || String(a.note || "").trim().length > 1;
    if (day.exercise === "sleep") {
      for (var i = 0; i < SLEEP_ITEMS.length; i++) if (a[SLEEP_ITEMS[i].id]) return true;
      return String(a.note || "").trim().length > 1;
    }
    var vals = Object.keys(a);
    for (var k = 0; k < vals.length; k++) {
      var v = a[vals[k]];
      if (v === true) return true;
      if (String(v || "").trim().length > 1) return true;
    }
    return false;
  }
  function fieldHTML(day, spec) {
    var key = spec[0], label = spec[1], type = spec[2];
    var val = day.answers[key] == null ? "" : String(day.answers[key]);
    if (type === "area") return '<label class="field">' + esc(label) + '<textarea data-day="' + esc(day.id) + '" data-key="' + esc(key) + '">' + esc(val) + "</textarea></label>";
    var inputType = type === "time" ? "time" : "text";
    return '<label class="field">' + esc(label) + '<input type="' + inputType + '" data-day="' + esc(day.id) + '" data-key="' + esc(key) + '" value="' + esc(val) + '"></label>';
  }
  function breathBlock(dayId) {
    var modes = breathModes();
    var opts = [4, 5, 6, 8].map(function (n) {
      return '<option value="' + n + '"' + (breath.totalCycles === n ? " selected" : "") + ">" + n + "</option>";
    }).join("");
    return '<div class="breathe-wrap" data-breath-day="' + esc(dayId || "") + '">' +
      '<div class="modes">' +
      '<button type="button" class="btn secondary' + (breath.mode === "468" ? " on" : "") + '" data-action="breath-mode" data-mode="468">' + esc(modes["468"].label) + "</button>" +
      '<button type="button" class="btn secondary' + (breath.mode === "box" ? " on" : "") + '" data-action="breath-mode" data-mode="box">' + esc(modes.box.label) + "</button></div>" +
      '<label class="field">' + esc(C.ui.rounds) + '<select id="breath-cycles">' + opts + "</select></label>" +
      '<div class="orb-box" aria-hidden="true"><div id="orb" class="orb" data-scale="0.68"></div></div>' +
      '<p id="phase-name" class="phase-name">' + esc(C.ui.ready) + '</p><p id="count-num" class="count">·</p><p id="cycle-label" class="muted"></p>' +
      '<p id="breath-done" class="okbox hidden"></p>' +
      '<button type="button" class="btn olive" id="breath-toggle" data-action="breath-toggle">' + esc(C.ui.start) + "</button>" +
      '<p class="muted">' + esc(C.ui.breathHint) + "</p></div>";
  }
  function exerciseHTML(day) {
    if (day.exercise === "breathing") {
      return breathBlock(day.id) + '<label class="field">' + esc(C.ui.breathNote) + '<textarea data-day="' + esc(day.id) + '" data-key="note">' + esc(day.answers.note || "") + "</textarea></label>";
    }
    if (day.exercise === "sleep") {
      var checks = SLEEP_ITEMS.map(function (it) {
        return '<label class="check"><input type="checkbox" data-day="' + esc(day.id) + '" data-key="' + it.id + '"' + (day.answers[it.id] ? " checked" : "") + ">" + esc(it.label) + "</label>";
      }).join("");
      return checks + '<label class="field">' + esc(C.ui.sleepNote) + '<textarea data-day="' + esc(day.id) + '" data-key="note">' + esc(day.answers.note || "") + "</textarea></label>";
    }
    return (FIELDSETS[day.exercise] || []).map(function (f) { return fieldHTML(day, f); }).join("");
  }
  function holdHTML() {
    return '<section class="card"><h1>' + esc(C.ui.holdTitle) + "</h1>" +
      "<p>" + esc(C.ui.holdBody) + "</p>" +
      "<p>" + esc(C.ui.holdStill) + "</p>" +
      '<div class="stack"><button type="button" class="btn block" data-action="safety-card">' + esc(C.ui.numbers) + "</button>" +
      '<button type="button" class="btn secondary block" data-action="clear-hold">' + esc(C.ui.clearHold) + "</button></div></section>";
  }
  function navHTML() {
    var items = [["home", C.ui.navHome], ["checkin", C.ui.navCheck], ["guide", C.ui.navGuide], ["program", C.ui.navPlan], ["breathe", C.ui.navBreath]];
    return '<nav class="nav">' + items.map(function (it) {
      var on = state.view === it[0] || (it[0] === "program" && state.view === "day");
      return '<button type="button" data-go="' + it[0] + '"' + (on ? ' class="on"' : "") + ">" + esc(it[1]) + "</button>";
    }).join("") + "</nav>";
  }
  function shell(content) {
    return '<header class="topbar"><button type="button" class="brand" data-go="home"><img class="mark" src="assets/mark.svg" alt=""><span><span class="brand-name">' + esc(C.appName) + '</span><span class="brand-sub">' + esc(C.brandSub) + "</span></span></button>" +
      '<button type="button" class="top-link" data-go="history">' + esc(C.ui.history) + "</button></header>" +
      '<p class="disclaimer">' + esc(C.disclaimer) + "</p><main>" + content + "</main>" + navHTML();
  }
  function viewHome() {
    return '<section class="hero"><p class="eyebrow">' + esc(C.ui.eyebrow) + "</p><h1>" + esc(C.appName) + "</h1>" +
      '<p class="lead">' + esc(C.ui.lead) + "</p>" +
      "<p>" + esc(C.ui.homeMethods) + "</p>" +
      "<p>" + esc(C.ui.homeBreath) + "</p></section>" +
      '<div class="tiles">' +
      '<button type="button" class="tile" data-go="checkin"><strong>' + esc(C.ui.tileCheck) + "</strong><span>" + esc(C.ui.tileCheckSub) + "</span></button>" +
      '<button type="button" class="tile" data-go="guide"><strong>' + esc(C.ui.tileGuide) + "</strong><span>" + esc(C.ui.tileGuideSub) + "</span></button>" +
      '<button type="button" class="tile" data-go="program"><strong>' + esc(C.ui.tilePlan) + "</strong><span>" + esc(C.ui.tilePlanSub) + "</span></button>" +
      '<button type="button" class="tile" data-go="breathe"><strong>' + esc(C.ui.tileBreath) + "</strong><span>" + esc(C.ui.tileBreathSub) + "</span></button></div>" +
      '<p class="muted">' + esc(C.ui.localNote) + "</p>" +
      '<button type="button" class="safety-link" data-action="safety-card">' + esc(C.ui.safetyLink) + "</button>";
  }

  function choiceButtons(kind, index, current) {
    return '<div class="choices">' + CHOICES.map(function (c) {
      var on = current === c.v ? " on" : "";
      return '<button type="button" class="choice' + on + '" data-' + kind + '="' + index + '" data-v="' + c.v + '"><strong>' + c.v + "</strong> — " + esc(c.t) + "</button>";
    }).join("") + "</div>";
  }
  function viewCheckin() {
    if (!state.check) state.check = freshCheck();
    var c = state.check;
    if (c.stage === "intro") {
      return '<section class="card"><p class="kicker">' + esc(C.ui.checkKicker) + "</p><h1>" + esc(C.ui.checkTitle) + "</h1>" +
        "<p>" + esc(C.ui.checkIntro) + "</p>" +
        "<p>" + esc(C.ui.checkScale) + "</p>" +
        '<button type="button" class="btn block" data-action="check-start">' + esc(C.ui.checkStart) + "</button></section>";
    }
    if (c.stage === "phq" || c.stage === "gad") {
      var isPhq = c.stage === "phq";
      var items = isPhq ? PHQ_ITEMS : GAD_ITEMS;
      var arr = isPhq ? c.phq : c.gad;
      var i = c.qi;
      var pct = Math.round((i / items.length) * 100);
      return '<section class="card"><p class="kicker">' + esc(isPhq ? C.ui.moodQ : C.ui.anxQ) + "</p>" +
        "<p>" + esc(fill(C.ui.qProgress, { n: i + 1, total: items.length })) + "</p>" +
        '<div class="progress" aria-hidden="true"><span style="width:' + pct + '%"></span></div><h1>' + esc(items[i]) + "</h1>" +
        (isPhq && i === 8 ? '<p class="warnbox">' + esc(C.ui.item9warn) + "</p>" : "") +
        choiceButtons(isPhq ? "phq" : "gad", i, arr[i]) +
        '<div class="row" style="margin-top:10px"><button type="button" class="btn secondary" data-action="check-back">' + esc(C.ui.back) + "</button></div></section>";
    }
    if (c.stage === "areas") {
      var boxes = AREAS.map(function (a) {
        return '<label class="check"><input type="checkbox" data-area="' + a.id + '"' + (c.areas[a.id] ? " checked" : "") + ">" + esc(a.label) + "</label>";
      }).join("");
      return '<section class="card"><h1>' + esc(C.ui.areasTitle) + "</h1>" +
        "<p>" + esc(C.ui.areasBody) + "</p>" +
        boxes + '<button type="button" class="btn block" data-action="check-finish">' + esc(C.ui.showRange) + "</button>" +
        '<button type="button" class="btn secondary block" data-action="check-back">' + esc(C.ui.back) + "</button></section>";
    }
    return viewResult(state.result);
  }
  function viewResult(entry) {
    if (!entry) return '<section class="card"><p>' + esc(C.ui.noResult) + "</p></section>";
    var phqB = bandPhq(entry.phqScore);
    var gadB = bandGad(entry.gadScore);
    var len = entry.length;
    var names = areaLabels(entry.areas);
    var existing = loadProgram();
    var replace = "";
    if (existing) {
      var done = existing.days.filter(function (d) { return d.completed; }).length;
      replace = '<label class="check"><input type="checkbox" id="replace-ok">' + esc(fill(C.ui.replacePlan, { done: done })) + '</label><p id="plan-err" class="err"></p>';
    }
    return '<section class="card"><p class="kicker">' + esc(C.ui.checkKicker) + "</p><h1>" + esc(C.ui.resultTitle) + "</h1>" +
      '<div class="score-grid"><div class="score"><span>' + esc(C.ui.moodScore) + "</span><b>" + entry.phqScore + "</b><span>" + esc(fill(C.ui.of27, { name: phqB.name })) + "</span></div>" +
      '<div class="score"><span>' + esc(C.ui.anxScore) + "</span><b>" + entry.gadScore + "</b><span>" + esc(fill(C.ui.of21, { name: gadB.name })) + "</span></div></div>" +
      "<p>" + esc(phqB.plain) + "</p><p>" + esc(gadB.plain) + "</p>" +
      '<p class="warnbox">' + esc(recommendText(entry.phqScore, entry.gadScore)) + "</p>" +
      "<p>" + esc(C.ui.cutoffExplain) + "</p>" +
      "<p>" + esc(fill(C.ui.lengthExplain, { len: len })) + "</p>" +
      "<p>" + esc(names.length ? fill(C.ui.areasChosen, { names: names.join(C.ui.listSep) }) : C.ui.noAreas) + "</p>" +
      replace + '<button type="button" class="btn block" data-action="start-plan">' + esc(fill(C.ui.startPlan, { len: len })) + "</button>" +
      '<button type="button" class="btn secondary block" data-action="check-start">' + esc(C.ui.newCheck) + '</button><button type="button" class="btn secondary block" data-go="history">' + esc(C.ui.seeHistory) + "</button></section>";
  }
  function viewGuide() {
    if (state.hold) return holdHTML();
    var chipHTML = (C.chips || []).map(function (c) {
      return '<button type="button" class="chip" data-chip="' + esc(c[0]) + '">' + esc(c[1]) + "</button>";
    }).join("");
    return '<section class="card"><h1>' + esc(C.ui.guideTitle) + '</h1><p class="banner">' + esc(C.guideNote) + "</p>" +
      "<p>" + esc(C.ui.guideIntro) + "</p>" +
      '<div class="chips">' + chipHTML + "</div>" +
      '<label class="field">' + esc(C.ui.guideLabel) + '<textarea id="guide-text">' + esc(state.guideText) + "</textarea></label>" +
      '<button type="button" class="btn block" data-action="guide-run">' + esc(C.ui.guideRun) + "</button></section>" + guideResultHTML();
  }
  function pstFields() {
    return (C.pstSpec || []).map(function (f) {
      return '<label class="field">' + esc(f[1]) + '<textarea data-pst="' + f[0] + '">' + esc(state.pst[f[0]] || "") + "</textarea></label>";
    }).join("");
  }
  function guideResultHTML() {
    var g = state.guide;
    if (!g) return "";
    if (g.type === "empty") return '<section class="card"><p>' + esc(C.ui.guideEmpty) + "</p></section>";
    var notes = "";
    if (g.diag) notes += '<p class="warnbox">' + esc(C.diagNote) + "</p>";
    if (g.meds) notes += '<p class="warnbox">' + esc(C.medNote) + "</p>";
    if (g.type === "meds-only") {
      return '<section class="card"><h2>' + esc(C.ui.medsTitle) + "</h2>" + notes +
        "<p>" + esc(C.ui.medsBody) + "</p>" +
        '<button type="button" class="btn" data-go="checkin">' + esc(C.ui.toCheck) + "</button></section>";
    }
    if (g.type === "pst") {
      var steps = (C.pstSteps || []).map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("");
      return '<section class="card answer">' + notes + '<p class="kicker">' + esc(C.ui.pstKicker) + "</p><h2>" + esc(C.ui.pstTitle) + "</h2>" +
        "<p>" + esc(C.ui.pstIntro) + "</p>" +
        "<h3>" + esc(C.ui.stepsH) + "</h3><ol>" + steps + "</ol>" +
        "<h3>" + esc(C.ui.exerciseH) + "</h3><p>" + esc(C.ui.pstExercise) + "</p>" +
        pstFields() + '<button type="button" class="btn secondary" data-go="checkin">' + esc(C.ui.toCheck) + "</button></section>";
    }
    var topic = g.topic;
    var alt = g.alt ? '<p class="muted">' + esc(fill(C.ui.altTopic, { title: g.alt.title })) + "</p>" : "";
    var breathBtn = topic.toBreath ? '<button type="button" class="btn olive" data-go="breathe">' + esc(C.ui.openBreath) + "</button>" : "";
    return '<section class="card answer">' + notes + '<p class="kicker">' + esc(topic.method) + "</p><h2>" + esc(topic.title) + "</h2>" +
      "<h3>" + esc(C.ui.whatH) + "</h3><p>" + esc(topic.what) + "</p><h3>" + esc(C.ui.stepsNow) + "</h3><ol>" +
      topic.steps.map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("") + "</ol>" +
      "<h3>" + esc(C.ui.exerciseH) + "</h3><p><strong>" + esc(topic.exerciseTitle) + "</strong></p><p>" + esc(topic.exercise) + "</p>" + alt +
      '<label class="field">' + esc(topic.pad) + '<textarea data-pad="1">' + esc(state.pad || "") + "</textarea></label>" +
      '<div class="row">' + breathBtn + "</div></section>";
  }

  function viewProgram() {
    if (state.hold) return holdHTML();
    var program = loadProgram();
    if (!program) {
      return '<section class="card"><h1>' + esc(C.ui.noPlan) + "</h1>" +
        "<p>" + esc(C.ui.noPlanBody) + "</p>" +
        '<button type="button" class="btn" data-go="checkin">' + esc(C.ui.toCheck) + "</button></section>";
    }
    var today = jerusalemToday();
    var idx = todayIndex(program, today);
    var done = program.days.filter(function (d) { return d.completed; }).length;
    var pct = Math.round((done / program.days.length) * 100);
    var todayDay = program.days[idx];
    var list = program.days.map(function (d, i) {
      var unlocked = i <= idx;
      var cls = "day" + (d.completed ? " done" : "") + (unlocked ? "" : " locked");
      var status = d.completed ? C.ui.stDone : (unlocked ? (i === idx ? C.ui.stToday : C.ui.stOpen) : C.ui.stLocked);
      var title = fill(C.ui.dayTitle, { n: i + 1, title: d.title });
      if (!unlocked) return '<div class="' + cls + '"><strong>' + esc(title) + '</strong><div class="meta">' + esc(status) + "</div></div>";
      return '<button type="button" class="' + cls + '" data-go="day" data-day="' + esc(d.id) + '"><strong>' + esc(title) + '</strong><div class="meta"><span class="tag">' + esc(d.method) + "</span> " + esc(status) + "</div></button>";
    }).join("");
    return '<section class="card"><h1>' + esc(C.ui.yourPlan) + "</h1><p>" + esc(fill(C.ui.planProgress, { done: done, total: program.days.length, start: program.startDate })) + "</p>" +
      '<div class="progress"><span style="width:' + pct + '%"></span></div>' +
      '<div class="card" style="box-shadow:none"><p class="kicker">' + esc(fill(C.ui.todayKicker, { n: idx + 1 })) + "</p><h2>" + esc(todayDay.title) + "</h2>" +
      "<p>" + esc(todayDay.method) + (todayDay.completed ? " · " + esc(C.ui.stDone) : "") + "</p>" +
      '<button type="button" class="btn" data-go="day" data-day="' + esc(todayDay.id) + '">' + esc(C.ui.openToday) + "</button></div></section><h2>" + esc(C.ui.allDays) + "</h2>" + list;
  }
  function viewDay() {
    if (state.hold) return holdHTML();
    var program = loadProgram();
    if (!program) return viewProgram();
    var day = null, index = -1;
    for (var i = 0; i < program.days.length; i++) if (program.days[i].id === state.dayId) { day = program.days[i]; index = i; }
    if (!day) return '<section class="card"><p>' + esc(C.ui.missingDay) + '</p><button class="btn" type="button" data-go="program">' + esc(C.ui.backPlan) + "</button></section>";
    var idx = todayIndex(program, jerusalemToday());
    if (index > idx) return '<section class="card"><h1>' + esc(day.title) + "</h1><p>" + esc(C.ui.lockedBody) + '</p><button type="button" class="btn" data-go="program">' + esc(C.ui.backPlan) + "</button></section>";
    var err = state.formError ? '<p class="err">' + esc(state.formError) + "</p>" : "";
    var doneNote = day.completed ? '<p class="okbox">' + esc(C.ui.daySaved) + "</p>" : "";
    return '<section class="card"><p class="kicker">' + esc(fill(C.ui.dayKicker, { n: index + 1, total: program.days.length, method: day.method })) + "</p><h1>" + esc(day.title) + "</h1><p>" + esc(day.lesson) + "</p><h2>" + esc(C.ui.exerciseH) + "</h2>" +
      exerciseHTML(day) + err + doneNote +
      '<label class="check complete-check"><input type="checkbox" data-action="complete-day" data-day="' + esc(day.id) + '"' + (day.completed ? " checked" : "") + ">" + esc(day.completed ? C.ui.doneCheck : C.ui.markDone) + "</label>" +
      '<div class="stack">' +
      (day.completed ? '<button type="button" class="btn secondary block" data-action="uncomplete-day" data-day="' + esc(day.id) + '">' + esc(C.ui.undoDone) + "</button>" : "") +
      '<button type="button" class="btn secondary block" data-go="program">' + esc(C.ui.backPlan) + "</button></div></section>";
  }
  function viewBreathe() {
    if (state.hold) return holdHTML();
    return '<section class="card"><h1>' + esc(C.ui.breathTitle) + "</h1><p>" + esc(C.ui.breathIntro) + "</p>" + breathBlock("") + "</section>";
  }
  function viewHistory() {
    var list = loadCheckins();
    var body = !list.length ? "<p>" + esc(C.ui.noHistory) + "</p>" : list.map(function (item) {
      if (item.crisis) return '<article class="history-item"><strong>' + esc(fmtWhen(item.at)) + "</strong><p>" + esc(C.ui.crisisHistory) + "</p></article>";
      var names = areaLabels(item.areas);
      return '<article class="history-item"><strong>' + esc(fmtWhen(item.at)) + "</strong><p>" + esc(fill(C.ui.histLine, { phq: item.phqScore, phqName: bandPhq(item.phqScore).name, gad: item.gadScore, gadName: bandGad(item.gadScore).name, len: item.length })) + "</p><p class=\"muted\">" + esc(bandPhq(item.phqScore).plain) + " " + esc(bandGad(item.gadScore).plain) + "</p>" + (names.length ? "<p>" + esc(fill(C.ui.areasChosen, { names: names.join(C.ui.listSep) })) + "</p>" : "") + "</article>";
    }).join("");
    var clearBtn = state.confirmClear
      ? '<button type="button" class="btn block" data-action="clear-yes">' + esc(C.ui.clearYes) + '</button><button type="button" class="btn secondary block" data-action="clear-no">' + esc(C.ui.clearNo) + "</button>"
      : '<button type="button" class="btn secondary block" data-action="clear-ask">' + esc(C.ui.clearAsk) + "</button>";
    return '<section class="card"><h1>' + esc(C.ui.histTitle) + '</h1><p class="muted">' + esc(C.ui.histNote) + "</p>" + body + clearBtn + "</section>";
  }
  function viewHTML() {
    switch (state.view) {
      case "checkin": return viewCheckin();
      case "guide": return viewGuide();
      case "program": return viewProgram();
      case "day": return viewDay();
      case "breathe": return viewBreathe();
      case "history": return viewHistory();
      default: return viewHome();
    }
  }
  function renderCrisis() {
    var el = document.getElementById("crisis");
    if (!el) return;
    document.body.classList.toggle("lock", !!state.crisis);
    if (!state.crisis) { el.classList.add("hidden"); el.innerHTML = ""; return; }
    el.classList.remove("hidden");
    var backLabel = state.crisis.reason === "manual" ? C.ui.crisisBack : C.ui.crisisBackHold;
    el.innerHTML = '<div class="crisis-inner"><h1 id="crisis-title" tabindex="-1">' + esc(C.ui.crisisTitle) + "</h1>" +
      "<p>" + esc(C.ui.crisisBody) + "</p>" +
      "<p>" + esc(C.ui.crisisCall) + "</p>" +
      '<a class="call" href="tel:1201"><span>' + esc(C.ui.eranLabel) + "</span><b>1201</b></a>" +
      '<a class="call" href="tel:101"><span>' + esc(C.ui.emergencyLabel) + "</span><b>101</b></a>" +
      "<p>" + esc(C.ui.goER) + "</p>" +
      "<p>" + esc(C.ui.outside) + "</p>" +
      '<p class="disclaimer">' + esc(C.disclaimer) + "</p>" +
      '<button type="button" class="btn" id="crisis-dismiss">' + esc(backLabel) + "</button></div>";
  }
  function render() {
    var breathingHere = state.view === "breathe" || (state.view === "day" && state.dayId === "t1");
    if (!breathingHere) stopBreath(false);
    var app = document.getElementById("app");
    if (!app) return;
    app.innerHTML = shell(viewHTML());
    renderCrisis();
    if (breath.running) syncBreathDom();
  }
  function readRoute() {
    var h = (location.hash || "#home").replace("#", "");
    if (h.indexOf("day-") === 0) { state.view = "day"; state.dayId = h.slice(4); return; }
    var known = { home: 1, checkin: 1, guide: 1, program: 1, breathe: 1, history: 1 };
    state.view = known[h] ? h : "home";
  }
  function go(view, dayId) {
    var next = view === "day" ? "day-" + dayId : view;
    if ((location.hash || "").replace("#", "") === next) { readRoute(); render(); return; }
    location.hash = next;
  }

  function stopBreath(done) {
    if (breath.timer) clearInterval(breath.timer);
    breath.timer = null;
    breath.running = false;
    if (done) {
      breath.finishedMsg = C.ui.breathDone;
      if (breath.dayId) {
        var p = loadProgram();
        if (p) {
          for (var i = 0; i < p.days.length; i++) if (p.days[i].id === breath.dayId) p.days[i].answers.did = true;
          saveProgram(p);
        }
      }
    }
  }
  function syncBreathDom() {
    var orb = document.getElementById("orb");
    if (!orb) return;
    var modes = breathModes();
    var phase = modes[breath.mode].phases[breath.phaseIdx];
    var name = document.getElementById("phase-name");
    var num = document.getElementById("count-num");
    var cyc = document.getElementById("cycle-label");
    var btn = document.getElementById("breath-toggle");
    var done = document.getElementById("breath-done");
    if (name) name.textContent = breath.running ? phase.name : (breath.finishedMsg ? C.ui.ok : C.ui.ready);
    if (num) num.textContent = breath.running ? String(breath.left) : "·";
    if (cyc) cyc.textContent = breath.running ? fill(C.ui.cycleLabel, { n: breath.cycle + 1, total: breath.totalCycles }) : "";
    var scale = phase.dir === "in" ? 1 : phase.dir === "out" ? 0.68 : Number(orb.dataset.scale || 0.68);
    if (phase.dir !== "hold") orb.dataset.scale = String(scale);
    orb.style.transitionDuration = (breath.running ? phase.sec : 0.4) + "s";
    orb.style.transform = "scale(" + (breath.running ? (phase.dir === "hold" ? orb.dataset.scale : scale) : 0.72) + ")";
    if (btn) btn.textContent = breath.running ? C.ui.stop : C.ui.start;
    if (done) { done.textContent = breath.finishedMsg || ""; done.classList.toggle("hidden", !breath.finishedMsg); }
  }
  function startBreath(dayId) {
    breath.dayId = dayId || null;
    breath.finishedMsg = "";
    breath.phaseIdx = 0;
    breath.cycle = 0;
    breath.left = breathModes()[breath.mode].phases[0].sec;
    breath.running = true;
    if (breath.timer) clearInterval(breath.timer);
    syncBreathDom();
    breath.timer = setInterval(function () {
      breath.left -= 1;
      if (breath.left <= 0) {
        var phases = breathModes()[breath.mode].phases;
        breath.phaseIdx += 1;
        if (breath.phaseIdx >= phases.length) {
          breath.phaseIdx = 0;
          breath.cycle += 1;
          if (breath.cycle >= breath.totalCycles) { stopBreath(true); syncBreathDom(); return; }
        }
        breath.left = phases[breath.phaseIdx].sec;
      }
      syncBreathDom();
    }, 1000);
  }
  function onGuideRun() {
    var text = state.guideText || "";
    var box = document.getElementById("guide-text");
    if (box) text = box.value;
    if (isCrisisText(text)) {
      state.guide = null;
      state.guideText = "";
      triggerCrisis("text");
      return;
    }
    state.guideText = text;
    var res = respond(text);
    state.guide = res;
    if (res.type === "topic") {
      var saved = loadJSON(K_PAD, null);
      state.pad = saved && saved.topic === res.topic.id ? (saved.text || "") : "";
    }
    render();
  }
  function finishCheckin() {
    var c = state.check;
    var phqScore = scoreSum(c.phq);
    var gadScore = scoreSum(c.gad);
    var entry = { id: String(Date.now()), at: new Date().toISOString(), phq: c.phq.slice(), gad: c.gad.slice(), phqScore: phqScore, gadScore: gadScore, areas: Object.assign({}, c.areas), length: programLength(phqScore, gadScore), crisis: false };
    saveCheckin(entry);
    state.result = entry;
    c.stage = "result";
    render();
  }
  function saveScreenCrisis() {
    var c = state.check;
    saveCheckin({ id: String(Date.now()), at: new Date().toISOString(), phqScore: null, gadScore: null, areas: {}, length: null, crisis: true });
  }
  function startPlan() {
    var entry = state.result;
    if (!entry || entry.crisis) return;
    var existing = loadProgram();
    var box = document.getElementById("replace-ok");
    if (existing && box && !box.checked) {
      var err = document.getElementById("plan-err");
      if (err) err.textContent = C.ui.replaceErr;
      return;
    }
    saveProgram(buildProgram({ phq: entry.phqScore, gad: entry.gadScore, areas: entry.areas, startDate: jerusalemToday(), checkinId: entry.id }));
    go("program");
  }
  function completeDay(id) {
    var p = loadProgram();
    if (!p) return;
    var day = null, index = -1;
    for (var i = 0; i < p.days.length; i++) if (p.days[i].id === id) { day = p.days[i]; index = i; }
    if (!day) return;
    if (index > todayIndex(p, jerusalemToday())) return;
    if (!hasContent(day)) { state.formError = C.ui.needContent; render(); return; }
    day.completed = true;
    day.completedAt = new Date().toISOString();
    saveProgram(p);
    state.formError = "";
    render();
  }
  function onClick(e) {
    var t = e.target.closest("[data-go],[data-action],[data-chip],[data-phq],[data-gad]");
    if (!t) return;
    if (t.dataset.go) { state.formError = ""; go(t.dataset.go, t.dataset.day); return; }
    if (t.dataset.chip) { state.guideText = t.dataset.chip; var area = document.getElementById("guide-text"); if (area) area.value = state.guideText; onGuideRun(); return; }
    if (t.dataset.phq != null) {
      var i = Number(t.dataset.phq), v = Number(t.dataset.v);
      state.check.phq[i] = v;
      if (i === 8 && isSelfHarmScore(v)) { saveScreenCrisis(); state.guideText = ""; triggerCrisis("screen"); return; }
      if (i < PHQ_ITEMS.length - 1) state.check.qi = i + 1;
      else { state.check.stage = "gad"; state.check.qi = 0; }
      render(); return;
    }
    if (t.dataset.gad != null) {
      var gi = Number(t.dataset.gad);
      state.check.gad[gi] = Number(t.dataset.v);
      if (gi < GAD_ITEMS.length - 1) state.check.qi = gi + 1;
      else state.check.stage = "areas";
      render(); return;
    }
    var action = t.dataset.action;
    if (action === "safety-card") { triggerCrisis("manual"); return; }
    if (action === "clear-hold") { setHold(false); render(); return; }
    if (action === "check-start") { state.check = freshCheck(); state.check.stage = "phq"; state.check.qi = 0; state.result = null; render(); return; }
    if (action === "check-back") {
      var c = state.check;
      if (c.stage === "gad" && c.qi === 0) { c.stage = "phq"; c.qi = PHQ_ITEMS.length - 1; }
      else if (c.stage === "areas") { c.stage = "gad"; c.qi = GAD_ITEMS.length - 1; }
      else if (c.stage === "phq" && c.qi === 0) c.stage = "intro";
      else c.qi -= 1;
      render(); return;
    }
    if (action === "check-finish") { finishCheckin(); return; }
    if (action === "start-plan") { startPlan(); return; }
    if (action === "guide-run") { onGuideRun(); return; }
    if (action === "complete-day") {
      if (t.checked === false) {
        var prog0 = loadProgram();
        if (prog0) { for (var n0 = 0; n0 < prog0.days.length; n0++) if (prog0.days[n0].id === t.dataset.day) { prog0.days[n0].completed = false; prog0.days[n0].completedAt = null; } saveProgram(prog0); }
        state.formError = "";
        render();
        return;
      }
      completeDay(t.dataset.day);
      return;
    }
    if (action === "uncomplete-day") {
      var prog = loadProgram();
      if (prog) { for (var n = 0; n < prog.days.length; n++) if (prog.days[n].id === t.dataset.day) { prog.days[n].completed = false; prog.days[n].completedAt = null; } saveProgram(prog); }
      render(); return;
    }
    if (action === "breath-mode") { stopBreath(false); breath.mode = t.dataset.mode; breath.finishedMsg = ""; render(); return; }
    if (action === "breath-toggle") {
      if (breath.running) { stopBreath(false); breath.finishedMsg = ""; syncBreathDom(); }
      else {
        var sel = document.getElementById("breath-cycles");
        if (sel) breath.totalCycles = Number(sel.value) || 5;
        var wrap = t.closest("[data-breath-day]");
        startBreath(wrap ? wrap.getAttribute("data-breath-day") : "");
      }
      return;
    }
    if (action === "clear-ask") { state.confirmClear = true; render(); return; }
    if (action === "clear-no") { state.confirmClear = false; render(); return; }
    if (action === "clear-yes") {
      try { localStorage.removeItem(K_CHECKINS); localStorage.removeItem(K_PROGRAM); localStorage.removeItem(K_PST); localStorage.removeItem(K_PAD); } catch (err) {}
      state.confirmClear = false; state.result = null; state.pst = {}; state.pad = ""; render();
    }
  }
  function onInput(e) {
    var el = e.target;
    if (!el) return;
    if (el.id === "guide-text") { state.guideText = el.value; return; }
    if (el.id === "breath-cycles") { breath.totalCycles = Number(el.value) || 5; return; }
    if (el.dataset && el.dataset.area) { if (!state.check) state.check = freshCheck(); state.check.areas[el.dataset.area] = !!el.checked; return; }
    if (el.dataset && el.dataset.key && el.dataset.day) {
      var p = loadProgram();
      if (!p) return;
      for (var i = 0; i < p.days.length; i++) if (p.days[i].id === el.dataset.day) p.days[i].answers[el.dataset.key] = el.type === "checkbox" ? !!el.checked : el.value;
      saveProgram(p); return;
    }
    if (el.dataset && el.dataset.pst) { state.pst[el.dataset.pst] = el.value; saveJSON(K_PST, state.pst); return; }
    if (el.dataset && el.dataset.pad != null) {
      state.pad = el.value;
      var topicId = state.guide && state.guide.topic ? state.guide.topic.id : "";
      saveJSON(K_PAD, { topic: topicId, text: state.pad });
    }
  }
  function init() {
    try { state.hold = sessionStorage.getItem(K_HOLD) === "1"; } catch (e) {}
    var pending = null;
    try { pending = localStorage.getItem(K_PENDING); } catch (e2) {}
    if (pending === "text" || pending === "screen") state.crisis = { reason: pending };
    state.pst = loadJSON(K_PST, {}) || {};
    var pad = loadJSON(K_PAD, null);
    if (pad && pad.text) state.pad = pad.text;
    readRoute();
    var app = document.getElementById("app");
    app.addEventListener("click", onClick);
    app.addEventListener("input", onInput);
    app.addEventListener("change", onInput);
    document.getElementById("crisis").addEventListener("click", function (ev) {
      if (ev.target && ev.target.id === "crisis-dismiss") dismissCrisis();
    });
    window.addEventListener("hashchange", function () { readRoute(); render(); });
    render();
    if (state.crisis) { var h = document.getElementById("crisis-title"); if (h) h.focus(); }
  }
  if (typeof document !== "undefined") init();

  var api = {
    DISCLAIMER: C.disclaimer,
    MED_NOTE: C.medNote,
    DIAG_NOTE: C.diagNote,
    GUIDE_NOTE: C.guideNote,
    isCrisisText: isCrisisText,
    isSelfHarmScore: isSelfHarmScore,
    isMedicationAsk: isMedicationAsk,
    isDiagnosisAsk: isDiagnosisAsk,
    respond: respond,
    scoreSum: scoreSum,
    bandPhq: bandPhq,
    bandGad: bandGad,
    programLength: programLength,
    buildProgram: buildProgram,
    selectDayIds: selectDayIds,
    todayIndex: todayIndex,
    PHQ_ITEMS: PHQ_ITEMS,
    GAD_ITEMS: GAD_ITEMS,
    TOPICS: TOPICS,
    TEMPLATES: TEMPLATES,
    norm: norm,
    appName: C.appName
  };
  if (typeof module !== "undefined" && module.exports) module.exports = api;

})();
