document.addEventListener("DOMContentLoaded", () => {
    if (document.querySelector('#basic_gear')) {
        fetch('../data/basic_gear.json')
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

    if (document.querySelector('#background')) {
        fetch('../data/background.json')
        .then(response => response.json())
        .then(json => {
            let body = '';
            json.forEach(elem => {
                body += "<tr><td>" + elem.dice_roll + 
                        "</td><td>" + elem.details + 
                        "</td></tr>";
            });

            document.querySelector('#background').childNodes[3].innerHTML = body;
        });
    }

    if (document.querySelector('#fighter_titles')) {
        fetch('../data/fighter_titles.json')
        .then(response => response.json())
        .then(json => {
            let body = '';
            json.forEach(elem => {
                body += "<tr><td>" + elem.level + 
                        "</td><td>" + elem.lawful + 
                        "</td><td>" + elem.chaotic + 
                        "</td><td>" + elem.neutral + 
                        "</td></tr>";
            });

            document.querySelector('#fighter_titles').childNodes[3].innerHTML = body;
        });
    }

    if (document.querySelector('#priest_titles')) {
        fetch('../data/priest_titles.json')
        .then(response => response.json())
        .then(json => {
            let body = '';
            json.forEach(elem => {
                body += "<tr><td>" + elem.level + 
                        "</td><td>" + elem.lawful + 
                        "</td><td>" + elem.chaotic + 
                        "</td><td>" + elem.neutral + 
                        "</td></tr>";
            });

            document.querySelector('#priest_titles').childNodes[3].innerHTML = body;
        });
    }

    if (document.querySelector('#thief_titles')) {
        fetch('../data/thief_titles.json')
        .then(response => response.json())
        .then(json => {
            let body = '';
            json.forEach(elem => {
                body += "<tr><td>" + elem.level + 
                        "</td><td>" + elem.lawful + 
                        "</td><td>" + elem.chaotic + 
                        "</td><td>" + elem.neutral + 
                        "</td></tr>";
            });

            document.querySelector('#thief_titles').childNodes[3].innerHTML = body;
        });
    }

    if (document.querySelector('#wizard_titles')) {
        fetch('../data/wizard_titles.json')
        .then(response => response.json())
        .then(json => {
            let body = '';
            json.forEach(elem => {
                body += "<tr><td>" + elem.level + 
                        "</td><td>" + elem.lawful + 
                        "</td><td>" + elem.chaotic + 
                        "</td><td>" + elem.neutral + 
                        "</td></tr>";
            });

            document.querySelector('#wizard_titles').childNodes[3].innerHTML = body;
        });
    }

    if (document.querySelector('#common_languages')) {
        fetch('../data/common_languages.json')
        .then(response => response.json())
        .then(json => {
            let body = '';
            json.forEach(elem => {
                body += "<tr><td>" + elem.language + 
                        "</td><td>" + elem.spoken_by + 
                        "</td></tr>";
            });

            document.querySelector('#common_languages').childNodes[3].innerHTML = body;
        });
    }

    if (document.querySelector('#rare_languages')) {
        fetch('../data/rare_languages.json')
        .then(response => response.json())
        .then(json => {
            let body = '';
            json.forEach(elem => {
                body += "<tr><td>" + elem.language + 
                        "</td><td>" + elem.spoken_by + 
                        "</td></tr>";
            });

            document.querySelector('#rare_languages').childNodes[3].innerHTML = body;
        });
    }

    if (document.querySelector('#crawling_kit')) {
        fetch('../data/crawling_kit.json')
        .then(response => response.json())
        .then(json => {
            let body = '';
            json.forEach(elem => {
                body += "<tr><td>" + elem.items + 
                        "</td><td>" + elem.quantity + 
                        "</td><td>" + elem.gear_slots + 
                        "</td><td>" + elem.cost + 
                        "</td></tr>";
            });

            document.querySelector('#crawling_kit').childNodes[3].innerHTML = body;
        });
    }

    if (document.querySelector('#armor_table')) {
        fetch('../data/armor_table.json')
        .then(response => response.json())
        .then(json => {
            let body = '';
            json.forEach(elem => {
                body += "<tr><td>" + elem.item + 
                        "</td><td>" + elem.cost + 
                        "</td><td>" + elem.gear_slots + 
                        "</td><td>" + elem.ac + 
                        "</td><td>" + elem.properties + 
                        "</td></tr>";
            });

            document.querySelector('#armor_table').childNodes[3].innerHTML = body;
        });
    }

    if (document.querySelector('#weapons_table')) {
        fetch('../data/weapons_table.json')
        .then(response => response.json())
        .then(json => {
            let body = '';
            json.forEach(elem => {
                body += "<tr><td>" + elem.weapon + 
                        "</td><td>" + elem.cost + 
                        "</td><td>" + elem.type + 
                        "</td><td>" + elem.range + 
                        "</td><td>" + elem.damage + 
                        "</td><td>" + elem.properties + 
                        "</td></tr>";
            });

            document.querySelector('#weapons_table').childNodes[3].innerHTML = body;
        });
    }

    if (document.querySelector('#advancement_table')) {
        fetch('../data/advancement_table.json')
        .then(response => response.json())
        .then(json => {
            let body = '';
            json.forEach(elem => {
                body += "<tr><td>" + elem.level + 
                        "</td><td>" + elem.talent + 
                        "</td><td>" + elem.exp + 
                        "</td></tr>";
            });

            document.querySelector('#advancement_table').childNodes[3].innerHTML = body;
        });
    }
});