set names utf8;
set foreign_key_checks=0;
drop database if exists ecsite;

create database if not exists ecsite;
use ecsite;

drop table if exists login_user_transaction;

create table login_user_transaction(
 id int not null primary key auto_increment,
 login_id varchar(16) unique,
 login_pass varchar(16),
 user_name varchar(50),
 user_address varchar(50),
 user_address1 varchar(50),
 user_address2 varchar(50),
 user_address3 varchar(50),
 user_sex varchar(50),
 user_tell varchar(16),
 insert_date datetime,
 updated_date datetime
);

drop table if exists master_info;

create table master_info(
id int not null primary key auto_increment,
master_id varchar(30),
master_pass varchar(30),
master_name varchar(30),
insert_date datetime,
update_date datetime
);

drop table if exists item_info_transaction;

create table item_info_transaction(
 id int not null primary key auto_increment,
 item_name varchar(30),
 item_price int,
 item_stock int,
 insert_date datetime,
 update_date datetime
);

drop table if exists user_buy_item_transaction;

create table user_buy_item_transaction(
  id int not null primary key auto_increment,
  item_transaction_id int,
  total_price int,
  total_count int,
  user_master_id varchar(16),
  pay varchar(30),
  insert_date datetime,
  delete_date datetime
  );

INSERT INTO item_info_transaction(item_name,item_price,item_stock)VALUES
("NoteBook",100,50),
("Pen",120,50),
("Eraser",110,50),
("Pencil",50,50),
("BallPointPen",100,50),
("MechanicalPencil",100,50),
("scissors",400,50),
("stapler",350,50),
("cutter",300,50),
("glue",120,50),
("ruler",120,50);

INSERT INTO login_user_transaction(login_id,login_pass,user_name,user_address,user_address1,user_address2,user_address3,user_sex,user_tell)VALUES
("taro","123","test","saitama","kita","nishi","30","men","09011112222"),
("jiro","456","test","tokyo","minami","higashi","30","women","08011112222");
INSERT INTO master_info(master_id,master_pass,master_name)VALUES
("hanako","123","hanako");