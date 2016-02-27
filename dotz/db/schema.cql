CREATE KEYSPACE activation WITH replication = {'class':'SimpleStrategy', 'replication_factor':1};
USE activation;

// Q1:
CREATE TABLE users_by_username (username TEXT, password TEXT, roles SET<UUID>, PRIMARY KEY (username));

/* SELECT username, password, roles FROM users_by_username WHERE username=?; */






// Q2:
CREATE TABLE user_login_ts_by_username
(username TEXT, login_ts TIMESTAMP, PRIMARY KEY (username,login_ts))
 WITH CLUSTERING ORDER BY (login_ts DESC);

/* SELECT username, login_ts FROM user_login_ts_by_username
WHERE username=? ORDER BY login_ts DESC; */

/*
insert into user_login_ts_by_username (username,login_ts) values ('navalarya',dateof(now()));

*/




// Q3:
CREATE TABLE roles_by_id (role_id UUID, region TEXT, solution TEXT, name TEXT static,
capabilities SET<TEXT> static, feature TEXT static,
PRIMARY KEY (role_id,region,solution)) WITH CLUSTERING ORDER BY (region ASC, solution ASC);

/* SELECT role_id, region, solution, name, capabilities,
feature FROM roles_by_id WHERE role_id=? ORDER BY region ASC, solution ASC; */

// Q4:
CREATE TABLE checklist_by_region_soln_feature (region TEXT, solution TEXT,
feature TEXT, status TEXT, categories map<text, text>, PRIMARY KEY ((region,solution,feature)));


/* select region, solution, feature, status, categories from checklist_by_region_soln_feature; */
/* insert into checklist_by_region_soln_feature (region, solution, feature,
categories, status) values ('DE', 'Betty', 'MVP', {'Technical':'Incomplete'}, 'Incomplete'); */

/* update checklist_by_region_soln_feature set categories['Technical'] = 'Complete'
where region='DE' and solution='Betty' and feature='MVP'
; */

// Q5:
CREATE TABLE tasks_by_region_soln_feature_catg (region TEXT, solution TEXT, feature TEXT,
category TEXT, task_id UUID, task_name TEXT, priority TEXT, value SET<TEXT>, control_type TEXT,
vertical TEXT, task_status TEXT, task_desc TEXT, PRIMARY KEY ((region,solution,feature,category)));

/*insert into tasks_by_region_soln_feature_catg (region, solution, feature, category, control_type,
priority, task_id, task_name, task_status, value, vertical, task_desc) values ('DE', 'Betty', 'MVP', 'Technical',
 'Manual', 'Must', uuid(), 'Are all files loaded?', 'Incomplete', {'No'}, 'EX', 'some description that explains the task');
select * from tasks_by_region_soln_feature_catg WHERE feature=? and category=? and region=? and solution=?; */





// Q6:
CREATE TABLE categories_since_ts (region TEXT, solution TEXT, feature TEXT, category_last_updated_ts TIMESTAMP,
 category_name TEXT static, category_status TEXT static, PRIMARY KEY ((region,solution,feature),
 category_last_updated_ts)) WITH CLUSTERING ORDER BY (category_last_updated_ts ASC);

/* insert into categories_since_ts (region, solution, feature, category_last_updated_ts, category_name,
category_status) values ('DE', 'Betty', 'MVP', dateof(now()), 'Technical', 'Complete');

SELECT category_name, category_status, category_last_updated_ts FROM categories_since_ts
WHERE feature=? and region=? and solution=? and category_last_updated_ts>?; */



CREATE TABLE messages_by_type_language (
template as TEXT,type as int,languageCode as text Primary key (type,languageCode)
);


// Q7:
CREATE TABLE changes_since_ts (region TEXT, solution TEXT, feature TEXT, category TEXT,
create_ts TIMESTAMP, last_updated_by_user TEXT static,messageType int, attributes MAP(Text,Text)  PRIMARY KEY ((region,solution,feature,category),task_last_updated_ts))
 WITH CLUSTERING ORDER BY (task_last_updated_ts ASC);

/*insert into tasks_since_ts(region, solution, feature, category, task_last_updated_ts,
last_updated_user, priority, task_id, task_name, task_status, value, vertical)
 values ('DE', 'Betty', 'MVP', 'Technical', dateof(now()),
  'keyur.suchdeo@metrosystems.net', 'Must', uuid(), 'Are all files loaded?', 'Complete', {'Yes'}, 'EX');

SELECT task_last_updated_ts, task_id, task_name, priority, value, last_updated_user,
 task_status, vertical FROM tasks_since_ts WHERE feature=? and category =? and
 region=? and solution=? and task_last_updated_ts>?; */
