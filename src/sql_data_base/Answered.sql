drop database answered;
create database if not exists answered;
use answered;


create table if not exists users(user_Id INT auto_increment Primary key, user_name varchar(255) not null unique , password varchar(255) not null  , email varchar(255) not null );
create table if not exists questions(question_Id INT auto_increment Primary key,question varchar(8000) not null unique, created_by INT, createdAt datetime default now(), updatedAt datetime default now(), foreign key(created_by)references users (user_Id));
create table if not exists answers(answer_Id INT auto_increment Primary key,answer varchar(8000) not null unique, created_by INT, answer_to INT, createdAt datetime default now(), updatedAt datetime default now(), foreign key(created_by)references users (user_Id), 
foreign key(answer_to)references questions (question_Id));
create table if not exists voteing(voteing_Id INT auto_increment Primary key, answer_Id INT, user_Id INT, vote_type varchar(20), foreign key(user_Id)references users (user_Id), 
foreign key(answer_Id)references answers (answer_Id),CONSTRAINT chk_user_type CHECK (vote_type IN ('up', 'down')));
