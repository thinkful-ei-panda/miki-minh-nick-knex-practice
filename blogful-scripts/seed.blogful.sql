INSERT INTO blogful_articles(title, date_published, content)
VALUES
    ('Fish tricks', now() - '21 days'::INTERVAL, 'a problem: When we were chaining Knex methods to perform queries, the queries were getting'),
    ('Not Dogs', now() - '21 days'::INTERVAL, ' The functions were a good way to introduce re-use, but is there a better way to organize these functions?'),
    ('Bluffalo Wings', now() - '21 days'::INTERVAL,'you want to send a parcel, you go to the post office. At the post office, you can send parcels of different sizes to different locations. You could also collect parce'),
    ('SubstiTuna Salad', now() - '21 days'::INTERVAL, ' a service that "encapsulates" methods for interacting with parcels. It would be frustrating if you had to go to a different post office for each parcel with a different destina'),
    ('Tofurkey', now() - '21 days'::INTERVAL, 'an send parcels of different sizes to different locations. You could also collect parcels there if you had the correct information. The post office is a service that "enc'),
    ('Pretenderloins', now() - '9 days'::INTERVAL, 'hem less reusable and the codebase would become messier. The functions we'),
    ('Steak-believe', now() - '9 days'::INTERVAL, 'end parcels of different sizes to different locations. You could also collect parcels ther'),
    ('Kale Seitan', now() - '9 days'::INTERVAL, 'ollect parcels there if you had the correct information. The post office is a service that "encapsulates" methods for interacting with parcels. It would be frustrating i'),
    ('NoBull Burger', now() - '9 days'::INTERVAL, 'd parcels of different sizes to different locations. You could also collect parcels there if you had the correct information. The post office is a service that "en'),
    ('Turnip the Beet', now() - '9 days'::INTERVAL, 'them less reusable and the codebase would become messier. The functi'),
    ('Mascarphony', now() - '7 days'::INTERVAL, ' queries were getting more and more complicated. This would make them less'),
    ('Burgatory', now() - '7 days'::INTERVAL, 'The functions were a good way to introduce re-use, but is there a better way to organize th'),
    ('Sleight of Ham', now() - '5 days'::INTERVAL, 'his relates to potential problems when building express API applications:'),
    ('Antichovies', now() - '5 days'::INTERVAL, 'es containing endpoint code and database query code is hard to navigate'),
    ('Lettuce B. Frank', now() - '5 days'::INTERVAL, 'an send parcels of different sizes to different locations. You could also collect parc'),
    ('Chicken Noodle Spoof', now() - '2 days'::INTERVAL, 'ct parcels there if you had the correct information. The post office is a service that "encapsulates" methods for interacting with parcels. It would be fru'),
    ('Pep-parody Pizza', now() - '2 days'::INTERVAL, 'hen you want to send a parcel, you go to the post office. At the post office, you c'),
    ('Arti-fish-al pie', now() - '1 days'::INTERVAL, 'If multiple parts of the codebase need to perform similar DB queries its better to reuse them.'),
    ('Bolphony sandwiches', now(), 't would be frustrating if you had to go to a different post office for each parcel with a different destination or size! We want a single post office that can send'),
    ('Chili non-carne', now(), 'you can send parcels of different sizes'),
    ('Don''t go bacon my heart', now(), 'last one')
;
