/**
 * Modificeret udgave af https://informatik.systime.dk/?id=1088
 */

/* Definition af en person */
class Person {
    navn;
    hankøn;
    barn;
    venstrehåndet;

    constructor(navn, hankøn = true, barn = false, venstrehåndet = false) {
        this.navn = navn;
        this.hankøn = hankøn;
        this.barn = barn;
        this.venstrehåndet = venstrehåndet;
    }

}

/* Liste over personer */
const personer = new Set();
personer.add(new Person("Jens", true, false, false));
personer.add(new Person("Viktor", true, true, false));
personer.add(new Person("Birk", true, true, true));
personer.add(new Person("Markus", true, true, true));
personer.add(new Person("Ida", false, true, false));
personer.add(new Person("Dorte", false, false, true));
personer.add(new Person("Marie", false, false, true));


/* Undersøger om personen er af hunkøn */
function erHunkøn(person) {
    return !person.hankøn;
}

/* Undersøger om personen er af hankøn og et barn */
function erDreng(person) {
    return person.hankøn && person.barn;
}

/* Undersøger om personen er af hunkøn eller et barn */
function erKvindeEllerBarn(person) {
    return erHunkøn(person) || person.barn;
}

/* Undersøger om personen er af hankøn og højrehåndet */
function erHøjrehåndetMand(person) {

}

/* Undersøger om personen er venstrehåndet og er kvinde eller barn */
function erVenstrehåndetKvindeEllerVenstrehåndetBarn(person) {

}


