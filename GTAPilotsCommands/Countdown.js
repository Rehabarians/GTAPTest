API.onServerEventTrigger.connect(function (evName, args) {
    if (evName === "startCountdown") {
        API.playSoundFrontEnd("CHECKPOINT_AHEAD", "HUD_MINI_GAME_SOUNDSET");
        //API.callNative("REQUEST_SCRIPT_AUDIO_BANK", "HUD_MINI_GAME_SOUNDSET", true);
        //API.callNative("PLAY_SOUND_FRONTEND", 0, "CHECKPOINT_NORMAL", "HUD_MINI_GAME_SOUNDSET");
        API.showShard("3");
        API.sleep(1000);
        API.playSoundFrontEnd("CHECKPOINT_AHEAD", "HUD_MINI_GAME_SOUNDSET");
        //API.callNative("REQUEST_SCRIPT_AUDIO_BANK", "HUD_MINI_GAME_SOUNDSET", true);
        //API.callNative("PLAY_SOUND_FRONTEND", 0, "CHECKPOINT_NORMAL", "HUD_MINI_GAME_SOUNDSET");
        API.showShard("2");
        API.sleep(1000);
        API.playSoundFrontEnd("CHECKPOINT_AHEAD", "HUD_MINI_GAME_SOUNDSET");
        //API.callNative("REQUEST_SCRIPT_AUDIO_BANK", "HUD_MINI_GAME_SOUNDSET", true);
        //API.callNative("PLAY_SOUND_FRONTEND", 0, "CHECKPOINT_NORMAL", "HUD_MINI_GAME_SOUNDSET");
        API.showShard("1");
        API.sleep(1000);
        API.playSoundFrontEnd("GO", "HUD_MINI_GAME_SOUNDSET");
        //API.callNative("REQUEST_SCRIPT_AUDIO_BANK", "HUD_MINI_GAME_SOUNDSET", true);
        //API.callNative("PLAY_SOUND_FRONTEND", 0, "CHECKPOINT_NORMAL", "HUD_MINI_GAME_SOUNDSET");
        API.showShard("GO", 2000);
    }
});