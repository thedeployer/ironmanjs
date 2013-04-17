var vcard = {
    name: {
        firstName: 'Asta',
        lastName: 'Mañana'
    },
    emails: [
        'asta@obob.com',
        'asta.m@bleh.net',
        'manana.asta@blokarak.tk'
    ],
    address: {
        street: 'Gloria St.',
        city: 'Makati City',
        country: 'Philippines',
        postalCode: '1210'
    },
    phones: [
        {
            'area-code': '02',
            'line-number': '673-2012'
        },
        {
            'area-code': '046',
            'line-number': '752-4112'
        }
    ]
};

var e = function(id, newValue) {
    document.getElementById(id).innerHTML = newValue;
};

e('first-name', vcard.name.firstName);
e('last-name', vcard.name.lastName);

e('email-1', vcard.emails[0]);
e('email-2', vcard.emails[1]);
e('email-3', vcard.emails[2]);

e('street', vcard.address.street);
e('city', vcard.address.city);
e('country', vcard.address.country);
e('postal-code', vcard.address.postalCode);

e('phone-1-area-code',  vcard.phones[0]['area-code']);
e('phone-1-line-number',  vcard.phones[0]['line-number']);

e('phone-2-area-code',  vcard.phones[1]['area-code']);
e('phone-2-line-number',  vcard.phones[1]['line-number']);

document.getElementById('main-title').addEventListener('click', function () {
    alert('Hello Vcard!');
});



