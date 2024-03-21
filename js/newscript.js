     //CHECKOUT ALL OUR VOICES POPUP
    $( window ).on( "load", function() {
        if (audioPlaying == true) {
            currentButton.classList.toggle("paused");
            $(currentButton).find(".audioPlayerai").toggleClass("audioPlayerai-playing");
            $(currentButton).find(".audioPlayerai2").toggleClass("audioPlayerai2-playing");
        }
        audio.pause();
        audio_music.pause();
        audioPlaying = false;

        var $invoker = $(e.relatedTarget);
        if (first_time_voice_modal == 1) {
            first_time_voice_modal = 0;
            $(".all_voices_list2").empty();
            for (let i = 0; i < voices_list.length; i++) {
                var pro = "";
                if (voices_list[i].type == "1") {
                    pro = '<img src="imageswebp/crown.webp" class="img-fluid mx-auto center-block crown" alt="crown" style="position:absolute; left:80%;top:5px; ">';
                }
                var english = "all_languages";
                if (voices_list[i].lang_name.includes("English")) {
                    english = " just_english";
                }
                var temp = `<div class="flagBoxpop ${english}">
                                    
                                            <div class="flagBoxpop-inner">
                                            ${pro}
                                                <div class="row m-0">
                                                    
                                                    <div class="col-lg-3 col-md-3 col-2 align-self-center p-0">
                                                        <img data-src="images/voices/${voices_list[i]["voice_name"].toLowerCase()}.jpg" class="img-fluid mx-auto lazyload d-block person" style="border-radius: 50%;" alt="person"> 
                                                    </div>
                                                                
                                                    <div class="col-lg-7 col-md-6 col-8 align-self-center">
                                                        <p class="lg15 md14 sm12 xs14 AvertaStd-Bold lh140 black2">
                                                            ${voices_list[i]["voice_name"]} <span class="lg11 md11 sm10 xs12 AvertaStd-Regular titlebg lh120 mt2" style="color: #647ea5;">${voices_list[i]["lang_name"]} </span>
                                                        </p>
                                                        <img src="imageswebp/soundimg.webp" class="img-fluid mr-auto d-block mt6 soundimg" alt="soundimg">
                                                    </div>

                                                    <div class="col-lg-2 col-md-3 col-2 align-self-center p-0">

                                                        <div class="audioPlayer audioPlayerpop" data-src="sound_soft/${voices_list[i]["voice_name"]}.mp3">
                                                            <div class="audioPlayerai2">
                                                                <div class="audioPlayerai2-playpause" title=""><a href="#" aria-label="Click to play text to voice audio"></a></div>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>
                                                
                                            </div>
                                    
                                        </div>
            `;
                $(".all_voices_list2").append(temp);
            }
        }
        if ($(e.relatedTarget).hasClass("only_english")) {
            $(".just_english").removeClass("d-none");
            $(".all_languages").addClass("d-none");
        } else {
            $(".just_english").removeClass("d-none");
            $(".all_languages").removeClass("d-none");
        }
    }); //ALL VOICES END