document.addEventListener("DOMContentLoaded", () => {
    if (document.querySelector('#basic_gear')) {
        fetch('./data/basic_gear.json')
        .then(response => response.json())
        .then(json => {
            let body = '';
            json.forEach(elem => {
                body += "<tr><td>" + elem.item + "</td><td>" + elem.cost + "</td><td>" + elem.quantity_per_slot + "</td></tr>";
            });

            document.querySelector('#basic_gear').childNodes[3].innerHTML = body;
        });
    }

    if (document.querySelector('#fighter_talents')) {
        fetch('../data/fighter_talents.json')
        .then(response => response.json())
        .then(json => {
            let body = '';
            json.forEach(elem => {
                body += "<tr><td nowrap>" + elem.dice_roll + "</td><td>" + elem.effect + "</td></tr>";
            });

            document.querySelector('#fighter_talents').childNodes[3].innerHTML = body;
        });
    }

    if (document.querySelector('#priest_talents')) {
        fetch('../data/priest_talents.json')
        .then(response => response.json())
        .then(json => {
            let body = '';
            json.forEach(elem => {
                body += "<tr><td nowrap>" + elem.dice_roll + "</td><td>" + elem.effect + "</td></tr>";
            });

            document.querySelector('#priest_talents').childNodes[3].innerHTML = body;
        });
    }

    if (document.querySelector('#priest_spells_known')) {
        fetch('../data/priest_spells_known.json')
        .then(response => response.json())
        .then(json => {
            let body = '';
            json.forEach(elem => {
                body += "<tr><td>" + elem.level + 
                        "</td><td>" + elem.spell_level_1 + 
                        "</td><td>" + elem.spell_level_2 + 
                        "</td><td>" + elem.spell_level_3 + 
                        "</td><td>" + elem.spell_level_4 + 
                        "</td><td>" + elem.spell_level_5 + 
                        "</td></tr>";
            });

            document.querySelector('#priest_spells_known').childNodes[3].innerHTML = body;
        });
    }

    if (document.querySelector('#thief_talents')) {
        fetch('../data/thief_talents.json')
        .then(response => response.json())
        .then(json => {
            let body = '';
            json.forEach(elem => {
                body += "<tr><td nowrap>" + elem.dice_roll + "</td><td>" + elem.effect + "</td></tr>";
            });

            document.querySelector('#thief_talents').childNodes[3].innerHTML = body;
        });
    }

    if (document.querySelector('#wizard_talents')) {
        fetch('../data/wizard_talents.json')
        .then(response => response.json())
        .then(json => {
            let body = '';
            json.forEach(elem => {
                body += "<tr><td nowrap>" + elem.dice_roll + "</td><td>" + elem.effect + "</td></tr>";
            });

            document.querySelector('#wizard_talents').childNodes[3].innerHTML = body;
        });
    }

    if (document.querySelector('#wizard_spells_known')) {
        fetch('../data/wizard_spells_known.json')
        .then(response => response.json())
        .then(json => {
            let body = '';
            json.forEach(elem => {
                body += "<tr><td>" + elem.level + 
                        "</td><td>" + elem.spell_level_1 + 
                        "</td><td>" + elem.spell_level_2 + 
                        "</td><td>" + elem.spell_level_3 + 
                        "</td><td>" + elem.spell_level_4 + 
                        "</td><td>" + elem.spell_level_5 + 
                        "</td></tr>";
            });

            document.querySelector('#wizard_spells_known').childNodes[3].innerHTML = body;
        });
    }
});