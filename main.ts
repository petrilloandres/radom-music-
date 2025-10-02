let jp = 0
input.onButtonPressed(Button.A, function () {
    jp = randint(1, 11)
    basic.showNumber(jp)
    if (jp == 1) {
        flexFX.playTune(flexFX.builtInTune(flexFX.BuiltInTune.Birthday), "ting", true)
    } else if (jp == 2) {
        flexFX.playTune(flexFX.builtInTune(flexFX.BuiltInTune.JingleBells), "ting", true)
    } else if (jp == 3) {
        flexFX.playTune(flexFX.builtInTune(flexFX.BuiltInTune.TeaPot), "ting", true)
    } else if (jp == 4) {
        flexFX.playTune(flexFX.builtInTune(flexFX.BuiltInTune.IfYoureHappy), "ting", true)
    } else if (jp == 5) {
        flexFX.playTune(flexFX.builtInTune(flexFX.BuiltInTune.LondonBridge), "ting", true)
    } else if (jp == 6) {
        flexFX.playTune(flexFX.builtInTune(flexFX.BuiltInTune.OldMacdonald), "ting", true)
    } else if (jp == 7) {
        flexFX.playTune(flexFX.builtInTune(flexFX.BuiltInTune.BearMountain), "ting", true)
    } else if (jp == 8) {
        flexFX.playTune(flexFX.builtInTune(flexFX.BuiltInTune.PopWeasel), "ting", true)
    } else if (jp == 9) {
        flexFX.playTune(flexFX.builtInTune(flexFX.BuiltInTune.ThisOldMan), "ting", true)
    } else if (jp == 10) {
        flexFX.playTune(flexFX.builtInTune(flexFX.BuiltInTune.RoundMountain), "ting", true)
    } else if (jp == 11) {
        flexFX.playTune(flexFX.builtInTune(flexFX.BuiltInTune.Edelweiss), "ting", true)
    }
})
basic.forever(function () {
	
})
