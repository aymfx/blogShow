import{_ as t,o as l,c as a,N as d}from"./chunks/framework.4f99458b.js";const _=JSON.parse('{"title":"mysql常用语法","description":"记录一下小问题集合","frontmatter":{"title":"mysql常用语法","date":"2023-09-12T00:00:00.000Z","description":"记录一下小问题集合","tags":["技术笔记","mysql"]},"headers":[],"relativePath":"技术/mysql常用语法.md"}'),e={name:"技术/mysql常用语法.md"},i=d('<h2 id="sql-分类" tabindex="-1">SQL 分类 <a class="header-anchor" href="#sql-分类" aria-label="Permalink to &quot;SQL 分类&quot;">​</a></h2><ul><li>DDL Data Definition Language 数据定义语言 <ul><li>用于完成数据库对象（数据库、数据表、视图、索引等）的创建、删除、修改</li></ul></li><li>DML Data Manipulation Language 数据操作语言 <ul><li>用于对数据表中的数据进行增删修改操作</li></ul></li><li>DQL Data Query Language 数据查询语言 <ul><li>用于数据表中的数据查询</li></ul></li><li>DCL Data Control Language 数据控制语言 <ul><li>用于完成事务管理等控制性操作</li></ul></li></ul><h2 id="sql-指令遵循的基本规则" tabindex="-1">SQL 指令遵循的基本规则 <a class="header-anchor" href="#sql-指令遵循的基本规则" aria-label="Permalink to &quot;SQL 指令遵循的基本规则&quot;">​</a></h2><ul><li>sql 指令不区分大小写</li><li>每个 sql 表达式结束后以分号（；）结束</li><li>sql 指令之间用空号分隔</li><li>sql 指令之间不限制换行和空格</li></ul><h2 id="数据库操作" tabindex="-1">数据库操作 <a class="header-anchor" href="#数据库操作" aria-label="Permalink to &quot;数据库操作&quot;">​</a></h2><ul><li>显示数据库 <ul><li>show databases;</li></ul></li><li>显示数据库创建的指令 可以查看具体的命令 <ul><li>show create database db_test;</li></ul></li><li>创建数据库 <ul><li>create database db_test;</li><li>create database if not exists db_test; 推荐</li></ul></li><li>创建数据库的同时指定字符集 <ul><li>create database db_uat character set utf8;</li></ul></li><li>修改数据库的字符集 <ul><li>alter database db_uat character set gbk;</li></ul></li><li>切换数据库 <ul><li>use db_uat; 数据表的操作</li></ul></li><li>创建数据表 <ul><li>create table students_info (stu_num char(8) not null unique, stu_name varchar(12) not null);</li></ul></li><li>查询数据表 <ul><li>show tables;</li></ul></li><li>查询数据表结构 <ul><li>desc students_info;</li></ul></li><li>删除数据表 <ul><li>drop table students_info;</li><li>drop table if exists students_info;</li></ul></li><li>修改表名 <ul><li>alter table tableName rename to newTableName;</li><li>alter table students_info rename to students</li></ul></li><li>数据表也可以设置字符集 <ul><li>alter table tableName character set utf8;</li><li>alter table students character set utf8</li></ul></li><li>添加列（字段） <ul><li>alter table tableName add columnName varchar(200);</li><li>alter table students add age int</li></ul></li><li>修改列（字段）的列表和类型 <ul><li>alter table tableName change oldColumnName newCloumnName type;</li><li>alter table students change age stu_age varchar(9);</li></ul></li><li>只修改列（字段）类型 <ul><li>alter table tableName modify columnName newType;</li><li>alter table students modify stu_name varchar(12);</li></ul></li><li>删除列（字段） <ul><li>alter table stus drop columnName;</li><li>alter table students drop stu_age</li></ul></li></ul><h1 id="数据类型" tabindex="-1">数据类型 <a class="header-anchor" href="#数据类型" aria-label="Permalink to &quot;数据类型&quot;">​</a></h1><h2 id="数值型" tabindex="-1">数值型 <a class="header-anchor" href="#数值型" aria-label="Permalink to &quot;数值型&quot;">​</a></h2><table><thead><tr><th>类型</th><th>内存大小</th><th>说明</th></tr></thead><tbody><tr><td>tinyint</td><td>1 bt</td><td>特小型整数（年龄）</td></tr><tr><td>smallint</td><td>2 bt</td><td>小型</td></tr><tr><td>mediumint</td><td>3 bt</td><td>中型整数</td></tr><tr><td>int/integer</td><td>4 bt</td><td>整数</td></tr><tr><td>bigint</td><td>8 bt</td><td>大型整数</td></tr><tr><td>float</td><td>4 bt</td><td>单精度</td></tr><tr><td>double</td><td>8 bt</td><td>双精度</td></tr><tr><td>decimal</td><td>（参数 1+2）</td><td>decimal(10,2)表示数值一共有 10 位小数位有 2 位</td></tr></tbody></table><h2 id="字符型" tabindex="-1">字符型 <a class="header-anchor" href="#字符型" aria-label="Permalink to &quot;字符型&quot;">​</a></h2><table><thead><tr><th>类型</th><th>长度</th><th>说明</th></tr></thead><tbody><tr><td>char</td><td>0~255 字节</td><td>定⻓字符串，最多可以存储 255 个字符。当我们指定数据表字段为 char(n) 时，此列中的数据最⻓为 n 个字符，如果添加的数据少于 n，则补&#39;\\u0000&#39;⾄ n ⻓度</td></tr><tr><td>varchar</td><td>0~65536 字节</td><td>可变⻓度字符串，此类型的类最⼤⻓度为 65535</td></tr><tr><td>tinyblob</td><td>0~255 字节</td><td>存储⼆进制字符串</td></tr><tr><td>blob</td><td>0~65535 字节</td><td></td></tr><tr><td>mediumblob</td><td>0~1677215 字节</td><td></td></tr><tr><td>longblob</td><td>0~4294967295 字节</td><td></td></tr><tr><td>tinytext</td><td>0~255 字节</td><td></td></tr><tr><td>text</td><td>0~65535 字节</td><td>⽂本数据（字符串）</td></tr><tr><td>mediumtext</td><td>0~1677215 字节</td><td></td></tr><tr><td>longtext</td><td>0~4294967295 字节</td><td></td></tr></tbody></table><h2 id="日期类型" tabindex="-1">日期类型 <a class="header-anchor" href="#日期类型" aria-label="Permalink to &quot;日期类型&quot;">​</a></h2><table><thead><tr><th>类型</th><th>格式</th><th>说明</th></tr></thead><tbody><tr><td>date</td><td>2023-09-12</td><td>⽇期，只存储年⽉⽇</td></tr><tr><td>time</td><td>11:12:15</td><td>时间，只存储时分秒</td></tr><tr><td>year</td><td>2023</td><td>年份</td></tr><tr><td>datetime</td><td>2023-09-12 11:12:15</td><td>⽇期+时间，存储年⽉⽇时分秒</td></tr><tr><td>timestamp</td><td>20230913 111215</td><td>日期加时间（时间戳）</td></tr></tbody></table>',13),r=[i];function u(s,n,o,h,b,c){return l(),a("div",null,r)}const q=t(e,[["render",u]]);export{_ as __pageData,q as default};
