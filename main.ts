function UserInput () {
    game.splash("upon entering a number you will receive a translation of the word in Spanish")
    value = game.askForNumber("Enter a number 0-8")
}
function Interration () {
    for (let index2 = 0; index2 < 1; index2++) {
        mySprite = index[value]
        game.splash(mySprite)
    }
}
let mySprite = ""
let value = 0
let index: string[] = []
index = [
"Apple is la manzana",
"banana is banana",
"orange is la naranja",
"grapes are las uvas",
"meat is la carne",
"bread is el pan",
"milk is la leche",
"water is el agua"
]
UserInput()
Interration()
