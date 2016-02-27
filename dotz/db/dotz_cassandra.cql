create keyspace dotz with replication={'class':'SimpleStrategy', 'replication_factor':1};
use dotz;

create table dotz.users(user_id uuid primary key, user_name text);
insert into dotz.users(user_id, user_name) values(uuid(), 'Vishal');
insert into dotz.users(user_id, user_name) values(uuid(), 'Vandana');

create table dotz.events(event_type varchar primary key, object_id uuid, date timestamp, event_details map<text, text>);
insert into dotz.events (event_type, object_id, date, event_details)
values ('ChangeLocation', 799fadf3-282a-4212-9708-33e83a8d8555, dateof(now()), {'city':'Dusseldorf'});

create table dotz.user_preference(user_id uuid, preference_id text, preference_value text,PRIMARY KEY (user_id,preference_id) );
insert into dotz.user_preference(user_id, preference_id, preference_value) values (799fadf3-282a-4212-9708-33e83a8d8555, 'LevelOfInfo', 'high');
insert into dotz.user_preference(user_id, preference_id, preference_value) values (c29473cb-992e-452a-8f77-f0e42cfd0cc0, 'LevelOfInfo', 'medium');

create table dotz.user_journal(user_id text, journal_id uuid, journal_info text, created timestamp, PRIMARY KEY ((user_id, journal_id), created)) WITH CLUSTERING ORDER BY (created DESC);
insert into dotz.user_journal(user_id, journal_id, journal_info, created)
values('799fadf3-282a-4212-9708-33e83a8d8555', uuid(), 'TravelItinerary', dateof(now()));


insert into dotz.user_journal(user_id, journal_id, journal_info, created)
values('799fadf3-282a-4212-9708-33e83a8d8555', uuid(), 'Going to Karneval', dateof(now()));

insert into dotz.user_journal(user_id, journal_id, journal_info, created)
values('799fadf3-282a-4212-9708-33e83a8d8555', uuid(), 'Birthday of Aditi', dateof(now()));
