/* manual update*/
insert into msg_template_by_region_soln_feature_role_lang(region, solution, feature,role_id, language_code, message, message_type) values

('DE','Betty','MVP',82a7e2f4-9aeb-4208-8022-d40b7650b743,'DE','{{getChangedbyUser}} has marked "{{addl.text}}" in {{getCategory}} as {{addl.status}}','status_Update');

/* country update*/
insert into msg_template_by_region_soln_feature_role_lang(region, solution, feature,role_id, language_code, message, message_type) values

('DE','Betty','MVP',82a7e2f4-9aeb-4208-8022-d40b7650b743,'DE','Interfaces for country-{{getChangedAttrVal}} have been activated.','country_New');



/* vertical update*/
insert into msg_template_by_region_soln_feature_role_lang(region, solution, feature,role_id, language_code, message, message_type) values

('DE','Betty','MVP',82a7e2f4-9aeb-4208-8022-d40b7650b743,'DE','Interfaces for vertical-{{getChangedAttrVal}} have been activated.','vertical_New');


/* interface deleted*/
insert into msg_template_by_region_soln_feature_role_lang(region, solution, feature,role_id, language_code, message, message_type) values

('DE','Betty','MVP',82a7e2f4-9aeb-4208-8022-d40b7650b743,'DE','Interfaces {{getChangedAttrVal}} for vertical-{{addl.vertical}} have been deleted.','interface_Delete');



/* interface update*/
insert into msg_template_by_region_soln_feature_role_lang(region, solution, feature,role_id, language_code, message, message_type) values

('DE','Betty','MVP',82a7e2f4-9aeb-4208-8022-d40b7650b743,'DE','Interfaces {{getChangedAttrVal}} for vertical-{{addl.vertical}} have been activated.','interface_New');


/* process update*/
insert into msg_template_by_region_soln_feature_role_lang(region, solution, feature,role_id, language_code, message, message_type) values

('DE','Betty','MVP',82a7e2f4-9aeb-4208-8022-d40b7650b743,'DE','Process {{getChangedAttrVal}} for Interfaces {{addl.interface}} for {{addl.vertical}} have been activated.','process_New');

/* file update*/
insert into msg_template_by_region_soln_feature_role_lang(region, solution, feature,role_id, language_code, message, message_type) values

('DE','Betty','MVP',82a7e2f4-9aeb-4208-8022-d40b7650b743,'DE','New file type {{getChangedAttrVal}} received for {{addl.interface}}.','file_New');



/* status update*/
insert into msg_template_by_region_soln_feature_role_lang(region, solution, feature,role_id, language_code, message, message_type) values

('DE','Betty','MVP',82a7e2f4-9aeb-4208-8022-d40b7650b743,'DE','Task {{addl.text}} status updated to {{getChangedAttrVal}}.','status_Update');
