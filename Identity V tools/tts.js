function googleTranslateElementInit() {
        new google.translate.TranslateElement({pageLanguage: 'en-us', includedLanguages: 'en,fr,de,ru', layout:google.translate.TranslateElement.InlineLayout.SIMPLE, autoDisplay: false}, 'google_translate_element');
    }

    function cng() {
        document.getElementById('google_translate_element').innerHTML = document.getElementById('myText01').value
    }

    document.addEventListener('keydown', function(e){
        if (e.key == 'Enter') {
            document.getElementById('google_translate_element').innerHTML = document.getElementById('myText01').value
        }
    });

    function spk() {
        let myVoice
        choise = document.getElementById('sel01').value
        cstm01 = document.getElementById('myText02').value
        cstm02 = document.getElementById('myText03').value
        cstm03 = document.getElementById('myText04').value

        if (cstm01 == '') {
            cstm01 = 1
        }
        if (cstm02 == '') {
            cstm02 = 1
        }
        if (cstm03 == '') {
            cstm03 = 1
        }

        if (choise == 'a') {
            myVoice = 'US English Female'
        }

        if (choise == 'b') {
            myVoice = 'US English Male'
        }

        if (choise == 'c') {
            myVoice = 'UK English Female'
        }

        if (choise == 'd') {
            myVoice = 'UK English Male'
        }

        responsiveVoice.speak(document.getElementById('google_translate_element').innerText, myVoice, {pitch: cstm01, rate: cstm02, volume : cstm03})  
    }