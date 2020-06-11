//array of 5 friend names, 20 weapon/object names,10 location names
var friends = ['Mr Fox', 'Ms Red Panda', 'Sr Bear', 'Mrs Polar Bear', 'Lt Opossum'];
var weapons = ['Club', 'Dagger', 'Handaxe', 'Javelin', 'Mace', 'Sickle', 'Spear', 'Dart', 'Shortbow', 'Crossbow', 'Battleaxe', 'Morningstar', 'Pike', 'Rapier', 'Scimitar', 'Shortsword', 'Trident', 'Warhammer', 'Whip', 'Blowgun'];
var locales = ['Foyer', 'Library', 'Billards Room', 'Ballroom', 'Kitchen', 'Attic', 'Dinningroom', 'Conservatory', 'Seance Room', 'Dungeon'];

//100 h3 elements Accusation 1-100
for (var i = 1; i < 101; i++) {
    let h3 = $('<h3> Accusations ' + i + '</h3>');
    $('body').append(h3);
    //click, alert: Accusation i: I accuse FRIEND_NAME, with the WEAPON_NAME in the LOCATION_NAME!
    h3.click(getAlert(i))
    h3.click(function () {
        h3.css({
            color: randomColor()
        })
    })
    
    function randomColor() {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        return 'rgb(' + r + ' , ' + g + ' , ' + b + ')';
    }

    //use the value of i in the loop to determine which of the above array items to use while using modulus
    function getAlert(i) {
        var friend = friends[i % 5];
        var locale = locales[i % 10];
        var weapon = weapons[i % 20];
        function accuseAlert() {
            alert("Accusation " + i + ": I accuse " + friend + " with the " + weapon + " in " + locale + "!");
        }
        return accuseAlert;
    }
}