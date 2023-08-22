USE cms_db
INSERT INTO department (name ) VALUES ("HR");
INSERT INTO role (title,salary,department_id) VALUES ("HR REP",50000,1);
INSERT INTO employee (first_name,last_name,role_id,manager_id) VALUES ("sam","williams",1,NULL);

