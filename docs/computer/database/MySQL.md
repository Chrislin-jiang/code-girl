---
title: MySQL
sidebarDepth: 2
---

## MySQL 的介绍
### 数据库的相关概念
一、数据库的好处
1、可以持久化数据到本地
2、结构化查询

二、数据库的常见概念 
1、DB：数据库，存储数据的容器
2、DBMS：数据库管理系统，又称为数据库软件或数据库产品，用于创建或管理DB
3、SQL：结构化查询语言，用于和数据库通信的语言，不是某个数据库软件特有的，而是几乎所有的主流数据库软件通用的语言

三、数据库存储数据的特点
1、数据存放到表中，然后表再放到库中
2、一个库中可以有多张表，每张表具有唯一的表名用来标识自己
3、表中有一个或多个列，列又称为“字段”，相当于java中“属性”
4、表中的每一行数据，相当于java中“对象”

四、常见的数据库管理系统
mysql、oracle、db2、sqlserver

### MySQL 的介绍
一、MySQL的背景
前身属于瑞典的一家公司，MySQL AB
08年被sun公司收购
09年sun被oracle收购

二、MySQL的优点
1、开源、免费、成本低
2、性能高、移植性也好
3、体积小，便于安装

三、MySQL的安装
属于c/s架构的软件，一般来讲安装服务端
企业版
社区版

四、MySQL服务的启动和停止
方式一：通过命令行
	net start 服务名
	net stop 服务名
方式二：计算机——右击——管理——服务

五、MySQL服务的登录和退出

登录：mysql 【-h 主机名 -P 端口号】 -u 用户名 -p密码
	
退出：exit或ctrl+C

### SQL语言的分类

SQL语言共分为四大类：数据查询语言DQL，数据操纵语言DML，数据定义语言DDL，数据控制语言DCL。

1. 数据查询语言DQL
* 数据查询语言DQL基本结构是由SELECT子句，FROM子句，WHERE
* 子句组成的查询块：
	* SELECT <字段名表>
	* FROM <表或视图名>
	* WHERE <查询条件>

2. 数据操纵语言DML
数据操纵语言DML主要有三种形式：
	* 1) 插入：INSERT
	* 2) 更新：UPDATE
	* 3) 删除：DELETE

3. 数据定义语言DDL
数据定义语言DDL用来创建数据库中的各种对象-----表、视图、索引、同义词、聚簇等如：
* CREATE TABLE/VIEW/INDEX/SYN/CLUSTER
* DDL操作是隐性提交的！不能rollback 

4. 数据控制语言DCL
数据控制语言DCL用来授予或回收访问数据库的某种特权，并控制数据库操纵事务发生的时间及效果，对数据库实行监视等。如：
* 1) GRANT：授权。
* 2) ROLLBACK [WORK] TO [SAVEPOINT]：回退到某一点。
	* 回滚---ROLLBACK
	* 回滚命令使数据库状态回到上次最后提交的状态。其格式为：
	* SQL>ROLLBACK;
* 3) COMMIT [WORK]：提交。

	* 在数据库的插入、删除和修改操作时，只有当事务在提交到数据库时才算完成。在事务提交前，只有操作数据库的这个人才能有权看到所做的事情，别人只有在最后提交完成后才可以看到。提交数据有三种类型：显式提交、隐式提交及自动提交。下面分别说明这三种类型。
	* (1) 显式提交：用COMMIT命令直接完成的提交为显式提交。其格式为：SQL>COMMIT；
	* (2) 隐式提交：用SQL命令间接完成的提交为隐式提交。这些命令是：ALTER，AUDIT，COMMENT，CONNECT，CREATE，DISCONNECT，DROP，EXIT，GRANT，NOAUDIT，QUIT，REVOKE，RENAME。
	* (3) 自动提交：若把AUTOCOMMIT设置为ON，则在插入、修改、删除语句执行后，系统将自动进行提交，这就是自动提交。其格式为：SQL>SET AUTOCOMMIT ON

#### 事务控制语句TCL：
* SAVEPOINT：保存点
* ROLLBACK：回退到某点
* COMMIT：提交事务

## DQL 语言
### 基础查询
语法：
`select 查询列表 from 表名;`

类似于：System.out.println(打印东西);

特点：
1. 查询列表可以是：表中的字段、常量值、表达式、函数
2. 查询的结果是一个虚拟的表格

`USE myemployees;`

1. 查询表中的单个字段
`SELECT last_name FROM employees;`

2. 查询表中的多个字段
`SELECT last_name,salary,email FROM employees;`

3. 查询表中的所有字段
```sql
方式一：
SELECT 
    `employee_id`,
    `first_name`,
    `last_name`,
    `phone_number`,
    `last_name`,
    `job_id`,
    `phone_number`,
    `job_id`,
    `salary`,
    `commission_pct`,
    `manager_id`,
    `department_id`,
    `hiredate` 
FROM
    employees ;
方式二：  
 SELECT * FROM employees;
```

4. 查询常量值
```sql
 SELECT 100;
 SELECT 'john';
```
 
5. 查询表达式
```SELECT 100%98;```
 
6. 查询函数
```SELECT VERSION();```
 
7. 起别名
* 便于理解
* 如果要查询的字段有重名的情况，使用别名可以区分开来

方式一：使用as
```SELECT 100%98 AS 结果;```
```SELECT last_name AS 姓,first_name AS 名 FROM employees;```

方式二：使用空格
```SELECT last_name 姓,first_name 名 FROM employees;```

案例：查询salary，显示结果为 out put
```SELECT salary AS "out put" FROM employees;```

8. 去重
案例：查询员工表中涉及到的所有的部门编号
```SELECT DISTINCT department_id FROM employees;```

9. +号的作用
* java中的+号：
	* 运算符，两个操作数都为数值型
	* 连接符，只要有一个操作数为字符串

* mysql中的+号：
	* 仅仅只有一个功能：运算符

	* select 100+90; 两个操作数都为数值型，则做加法运算
	* select '123'+90;只要其中一方为字符型，试图将字符型数值转换成数值型，如果转换成功，则继续做加法运算
	* select 'john'+90;	如果转换失败，则将字符型数值转换成0
	* select null+10; 只要其中一方为null，则结果肯定为null

* 案例：查询员工名和姓连接成一个字段，并显示为 姓名
```sql
SELECT CONCAT('a','b','c') AS 结果;

SELECT 
	CONCAT(last_name,first_name) AS 姓名
FROM
	employees;
```

### 条件查询
语法：
```sql
	select 
		查询列表
	from
		表名
	where
		筛选条件;
```

分类：

一、按条件表达式筛选
	* 简单条件运算符：> < = != <> >= <=

二、按逻辑表达式筛选
```sql
	逻辑运算符：
	作用：用于连接条件表达式
		&& || !
		and or not
		
	&&和and：两个条件都为true，结果为true，反之为false
	||或or： 只要有一个条件为true，结果为true，反之为false
	!或not： 如果连接的条件本身为false，结果为true，反之为false
```

三、模糊查询
```sql
	like
	between and
	in
	is null
```

#### 按条件表达式筛选
案例1：查询工资>12000的员工信息
```sql
SELECT * FROM employees
WHERE
	salary>12000;
```
	
案例2：查询部门编号不等于90号的员工名和部门编号
```sql
SELECT 
	last_name,
	department_id
FROM
	employees
WHERE
	department_id<>90;
```

#### 按逻辑表达式筛选
案例1：查询工资z在10000到20000之间的员工名、工资以及奖金
```sql
SELECT
	last_name,
	salary,
	commission_pct
FROM
	employees
WHERE
	salary>=10000 AND salary<=20000;
```

案例2：查询部门编号不是在90到110之间，或者工资高于15000的员工信息
```sql
SELECT * FROM
	employees
WHERE
	NOT(department_id>=90 AND  department_id<=110) OR salary>15000;
```
	

### 模糊查询
```sql
like
	
between and
in
is null|is not null

```
1. like

特点：
①一般和通配符搭配使用
	通配符：
	% 任意多个字符,包含0个字符
	_ 任意单个字符

案例1：查询员工名中包含字符a的员工信息
```sql
select 
	*
from
	employees
where
	last_name like '%a%';#abc
```
案例2：查询员工名中第三个字符为e，第五个字符为a的员工名和工资
```sql
select
	last_name,
	salary
FROM
	employees
WHERE
	last_name LIKE '__n_l%';
    last_name LIKE '__e_a%';
```

案例3：查询员工名中第二个字符为_的员工名
```sql
SELECT
	last_name
FROM
	employees
WHERE
	last_name LIKE '_$_%' ESCAPE '$';
```
2. between and
* 使用between and 可以提高语句的简洁度
* 包含临界值
* 两个临界值不要调换顺序

案例1：查询员工编号在100到120之间的员工信息
```sql
SELECT
	*
FROM
	employees
WHERE
	employee_id >= 120 AND employee_id<=100;
#----------------------
SELECT
	*
FROM
	employees
WHERE
	employee_id BETWEEN 120 AND 100;
```

3. in
* 含义：判断某字段的值是否属于in列表中的某一项
* 特点：
	* 使用in提高语句简洁度
	* in列表的值类型必须一致或兼容
	* in列表中不支持通配符

案例：查询员工的工种编号是 IT_PROG、AD_VP、AD_PRES中的一个员工名和工种编号
```sql
SELECT
	last_name,
	job_id
FROM
	employees
WHERE
	job_id = 'IT_PROT' OR job_id = 'AD_VP' OR JOB_ID ='AD_PRES';
```

```sql
SELECT
	last_name,
	job_id
FROM
	employees
WHERE
	job_id IN( 'IT_PROT' ,'AD_VP','AD_PRES');
```

4. is null
* =或<>不能用于判断null值
* is null或is not null 可以判断null值

案例1：查询没有奖金的员工名和奖金率
```sql
SELECT
	last_name,
	commission_pct
FROM
	employees
WHERE
	commission_pct IS NULL;
```

案例2：查询有奖金的员工名和奖金率
```sql
SELECT
	last_name,
	commission_pct
FROM
	employees
WHERE
	commission_pct IS NOT NULL;
```
以下为×
```sql
SELECT
	last_name,
	commission_pct
FROM
	employees
WHERE 
	salary IS 12000;
```
	
安全等于  <=>

案例1：查询没有奖金的员工名和奖金率
```sql
SELECT
	last_name,
	commission_pct
FROM
	employees
WHERE
	commission_pct <=>NULL;
```	
	
案例2：查询工资为12000的员工信息
```sql
SELECT
	last_name,
	salary
FROM
	employees

WHERE 
	salary <=> 12000;
```

* is null pk <=>
* IS NULL:仅仅可以判断NULL值，可读性较高，建议使用
* <=>    :既可以判断NULL值，又可以判断普通的数值，可读性较低

### 排序查询
语法：
```sql
select 查询列表
from 表名
【where  筛选条件】
order by 排序的字段或表达式;
```

特点：
1. asc代表的是升序，可以省略，desc代表的是降序；全称是 ascend 和 descend
2. order by子句可以支持 单个字段、别名、表达式、函数、多个字段
3. order by子句在查询语句的最后面，除了limit子句


1. 按单个字段排序
```SELECT * FROM employees ORDER BY salary DESC;```

2. 添加筛选条件再排序
案例：查询部门编号>=90的员工信息，并按员工编号降序
```sql
SELECT *
FROM employees
WHERE department_id>=90
ORDER BY employee_id DESC;
```

3. 按表达式排序
案例：查询员工信息 按年薪降序
```sql
SELECT *,salary*12*(1+IFNULL(commission_pct,0))
FROM employees
ORDER BY salary*12*(1+IFNULL(commission_pct,0)) DESC;
```

4. 按别名排序
案例：查询员工信息 按年薪升序
```sql
SELECT *,salary*12*(1+IFNULL(commission_pct,0)) 年薪
FROM employees
ORDER BY 年薪 ASC;
```
5. 按函数排序
案例：查询员工名，并且按名字的长度降序
```sql
SELECT LENGTH(last_name),last_name 
FROM employees
ORDER BY LENGTH(last_name) DESC;
```
6. 按多个字段排序
案例：查询员工信息，要求先按工资降序，再按employee_id升序
```sql
SELECT *
FROM employees
ORDER BY salary DESC,employee_id ASC;
```

### 常见函数
* 概念：类似于java的方法，将一组逻辑语句封装在方法体中，对外暴露方法名
* 好处：1、隐藏了实现细节  2、提高代码的重用性
* 调用：select 函数名(实参列表) 【from 表】;
* 特点：
	* 叫什么（函数名）
	* 干什么（函数功能）
* 分类：
	* 单行函数，如 concat、length、ifnull等
	* 分组函数
* 功能：做统计使用，又称为统计函数、聚合函数、组函数
	
```sql
常见函数：
	一、单行函数
	字符函数：
	length:获取字节个数(utf-8一个汉字代表3个字节,gbk为2个字节)
	concat
	substr
	instr
	trim
	upper
	lower
	lpad
	rpad
	replace
	
	数学函数：
	round
	ceil
	floor
	truncate
	mod
	
	日期函数：
	now
	curdate
	curtime
	year
	month
	monthname
	day
	hour
	minute
	second
	str_to_date
	date_format
	其他函数：
	version
	database
	user
	控制函数
	if
	case
```

#### 一. 字符函数

1. length 获取参数值的字节个数
```sql
SELECT LENGTH('john');
SELECT LENGTH('张三丰hahaha');
```

```SHOW VARIABLES LIKE '%char%';```

2. concat 拼接字符串
```SELECT CONCAT(last_name,'_',first_name) 姓名 FROM employees;```

3. upper、lower
```sql
SELECT UPPER('john');
SELECT LOWER('joHn');
```
示例：将姓变大写，名变小写，然后拼接
```SELECT CONCAT(UPPER(last_name),LOWER(first_name))  姓名 FROM employees;```

4. substr、substring
注意：索引从1开始，截取从指定索引处后面所有字符
```SELECT SUBSTR('李莫愁爱上了陆展元',7)  out_put;```

截取从指定索引处指定字符长度的字符
```SELECT SUBSTR('李莫愁爱上了陆展元',1,3) out_put;```

案例：姓名中首字符大写，其他字符小写然后用_拼接，显示出来

```sql
SELECT CONCAT(UPPER(SUBSTR(last_name,1,1)),'_',LOWER(SUBSTR(last_name,2)))  out_put
FROM employees;
```

5. instr 返回子串第一次出现的索引，如果找不到返回0
```SELECT INSTR('杨不殷六侠悔爱上了殷六侠','殷八侠') AS out_put;```

6. trim
```sql
SELECT LENGTH(TRIM('    张翠山    ')) AS out_put;
SELECT TRIM('aa' FROM 'aaaaaaaaa张aaaaaaaaaaaa翠山aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')  AS out_put;
```

7. lpad 用指定的字符实现左填充指定长度
```SELECT LPAD('殷素素',2,'*') AS out_put;```

8. rpad 用指定的字符实现右填充指定长度
```SELECT RPAD('殷素素',12,'ab') AS out_put;```

9. replace 替换
```SELECT REPLACE('周芷若周芷若周芷若周芷若张无忌爱上了周芷若','周芷若','赵敏') AS out_put;```

#### 二、数学函数
```sql
round 四舍五入
SELECT ROUND(-1.55);
SELECT ROUND(1.567,2);

ceil 向上取整,返回>=该参数的最小整数

SELECT CEIL(-1.02);

floor 向下取整，返回<=该参数的最大整数
SELECT FLOOR(-9.99);

truncate 截断

SELECT TRUNCATE(1.69999,1);
```

mod取余
```sql
/*
mod(a,b) ：  a-a/b*b

mod(-10,-3):-10- (-10)/(-3)*（-3）=-1
*/
SELECT MOD(10,-3);
SELECT 10%3;
```

#### 三、日期函数
```sql
now 返回当前系统日期+时间
SELECT NOW();

curdate 返回当前系统日期，不包含时间
SELECT CURDATE();

curtime 返回当前时间，不包含日期
SELECT CURTIME();


可以获取指定的部分，年、月、日、小时、分钟、秒
SELECT YEAR(NOW()) 年;
SELECT YEAR('1998-1-1') 年;

SELECT  YEAR(hiredate) 年 FROM employees;

SELECT MONTH(NOW()) 月;
SELECT MONTHNAME(NOW()) 月;


str_to_date 将字符通过指定的格式转换成日期

SELECT STR_TO_DATE('1998-3-2','%Y-%c-%d') AS out_put;

查询入职日期为1992--4-3的员工信息
SELECT * FROM employees WHERE hiredate = '1992-4-3';

SELECT * FROM employees WHERE hiredate = STR_TO_DATE('4-3 1992','%c-%d %Y');


date_format 将日期转换成字符

SELECT DATE_FORMAT(NOW(),'%y年%m月%d日') AS out_put;

查询有奖金的员工名和入职日期(xx月/xx日 xx年)
SELECT last_name,DATE_FORMAT(hiredate,'%m月/%d日 %y年') 入职日期
FROM employees
WHERE commission_pct IS NOT NULL;
```

#### 四、其他函数
```sql
SELECT VERSION();
SELECT DATABASE();
SELECT USER();
```

#### 五、流程控制函数
1. if函数： if else 的效果
```sql
SELECT IF(10<5,'大','小');

SELECT last_name,commission_pct,IF(commission_pct IS NULL,'没奖金，呵呵','有奖金，嘻嘻') 备注
FROM employees;
```

2. case函数的使用一： switch case 的效果
```sql
/*
java中
switch(变量或表达式){
	case 常量1：语句1;break;
	...
	default:语句n;break;
}

mysql中

case 要判断的字段或表达式
when 常量1 then 要显示的值1或语句1;
when 常量2 then 要显示的值2或语句2;
...
else 要显示的值n或语句n;
end
*/

/*案例：查询员工的工资，要求

部门号=30，显示的工资为1.1倍
部门号=40，显示的工资为1.2倍
部门号=50，显示的工资为1.3倍
其他部门，显示的工资为原工资

*/


SELECT salary 原始工资,department_id,
CASE department_id
WHEN 30 THEN salary*1.1
WHEN 40 THEN salary*1.2
WHEN 50 THEN salary*1.3
ELSE salary
END AS 新工资
FROM employees;
```

3. case 函数的使用二：类似于 多重if
```sql
java中：
if(条件1){
	语句1；
}else if(条件2){
	语句2；
}
...
else{
	语句n;
}
```

mysql中：
```sql
case 
when 条件1 then 要显示的值1或语句1
when 条件2 then 要显示的值2或语句2
...
else 要显示的值n或语句n
end
```

案例：查询员工的工资的情况;
如果工资>20000,显示A级别;
如果工资>15000,显示B级别;
如果工资>10000，显示C级别;
否则，显示D级别.
```sql
SELECT salary,
CASE 
WHEN salary>20000 THEN 'A'
WHEN salary>15000 THEN 'B'
WHEN salary>10000 THEN 'C'
ELSE 'D'
END AS 工资级别
FROM employees;
```

### 分组函数
功能：用作统计使用，又称为聚合函数或统计函数或组函数

分类：sum 求和、avg 平均值、max 最大值 、min 最小值 、count 计算个数

特点：
* sum、avg一般用于处理数值型,max、min、count可以处理任何类型
* 以上分组函数都忽略null值
* 可以和distinct搭配实现去重的运算
* count函数的单独介绍,一般使用count(*)用作统计行数
* 和分组函数一同查询的字段要求是group by后的字段

1. 简单的使用
```sql
SELECT SUM(salary) FROM employees;
SELECT AVG(salary) FROM employees;
SELECT MIN(salary) FROM employees;
SELECT MAX(salary) FROM employees;
SELECT COUNT(salary) FROM employees;

SELECT SUM(salary) 和,AVG(salary) 平均,MAX(salary) 最高,MIN(salary) 最低,COUNT(salary) 个数
FROM employees;

SELECT SUM(salary) 和,ROUND(AVG(salary),2) 平均,MAX(salary) 最高,MIN(salary) 最低,COUNT(salary) 个数
FROM employees;
```

2. 参数支持哪些类型
```sql
SELECT SUM(last_name) ,AVG(last_name) FROM employees;
SELECT SUM(hiredate) ,AVG(hiredate) FROM employees;

SELECT MAX(last_name),MIN(last_name) FROM employees;

SELECT MAX(hiredate),MIN(hiredate) FROM employees;

SELECT COUNT(commission_pct) FROM employees;
SELECT COUNT(last_name) FROM employees;
```

3. 是否忽略null
```sql
SELECT SUM(commission_pct) ,AVG(commission_pct),SUM(commission_pct)/35,SUM(commission_pct)/107 FROM employees;

SELECT MAX(commission_pct) ,MIN(commission_pct) FROM employees;

SELECT COUNT(commission_pct) FROM employees;
SELECT commission_pct FROM employees;
```

4. 和distinct搭配
```sql
SELECT SUM(DISTINCT salary),SUM(salary) FROM employees;

SELECT COUNT(DISTINCT salary),COUNT(salary) FROM employees;
```

5. count函数的详细介绍
```sql
SELECT COUNT(salary) FROM employees;

SELECT COUNT(*) FROM employees;

SELECT COUNT(1) FROM employees;
```

效率：
* MYISAM存储引擎下  ，COUNT(*)的效率高
* INNODB存储引擎下，COUNT(*)和COUNT(1)的效率差不多，比COUNT(字段)要高一些

6. 和分组函数一同查询的字段有限制
```SELECT AVG(salary),employee_id  FROM employees;```

## DML 语言
### 插入
#### 方式一
语法：
```insert into 表名(字段名,...) values(值,...);```

特点：
1. 要求值的类型和字段的类型要一致或兼容
2. 字段的个数和顺序不一定与原始表中的字段个数和顺序一致，但必须保证值和字段一一对应
3. 假如表中有可以为null的字段，注意可以通过以下两种方式插入null值
	* 字段和值都省略
	* 字段写上，值使用null
4. 字段和值的个数必须一致
5. 字段名可以省略，默认所有列

```sql
select * from beauty;
insert into beauty(id,NAME,sex,borndate,phone,boyfriend,id) 
values (13,'刘诗诗','女','1990-4-23','18793292662',NULL,2);
```

#### 方式二
语法：
```insert into 表名 set 字段=值,字段=值,...;```

```sql
select * from beauty;
insert into beauty
set id=13,NAME='刘诗诗',sex='女',borndate='1990-4-23',phone='18793292662',boyfriend=NULL,id=2;
```

### 修改
一、修改单表的记录
语法：
```update 表名 set 字段=值,字段=值 【where 筛选条件】;```

```update beauty set phone='13833386656' where name like '刘%';```

### 删除
#### 方式一：使用delete
一、删除单表的记录★
语法：
```delete from 表名 【where 筛选条件】【limit 条目数】```

案例：删除手机号以9结尾的信息
```delete from beauty where phone like '%9';```

#### 方式二：使用truncate
语法：
```truncate table 表名```

案例：删除beauty表的数据
```truncate table beauty;```

#### 两种方式的区别【面试题】★
1. truncate删除后，如果再插入，标识列从1开始
  delete删除后，如果再插入，标识列从断点开始
2. delete可以添加筛选条件
 truncate不可以添加筛选条件
3. truncate效率较高
4. truncate没有返回值
delete可以返回受影响的行数
5. truncate不可以回滚
delete可以回滚

## DDL 语言
数据定义语言

库和表的管理

### 库的管理
1. 创建库
```create database 【if not exists】 库名【 character set 字符集名】;```
2. 修改库
```alter database 库名 character set 字符集名;```
3. 删除库
```drop database 【if exists】 库名;```


### 表的管理
#### 一、创建表 ★
```sql
create table 【if not exists】 表名(
	字段名 字段类型 【约束】,
	字段名 字段类型 【约束】,
	。。。
	字段名 字段类型 【约束】 

)
```

#### 二、修改表
1. 添加列
```alter table 表名 add column 列名 类型 【first|after 字段名】;```
2. 修改列的类型或约束
```alter table 表名 modify column 列名 新类型 【新约束】;```
3. 修改列名
```alter table 表名 change column 旧列名 新列名 类型;```
4. 删除列
```alter table 表名 drop column 列名;```
5. 修改表名
```alter table 表名 rename 【to】 新表名;```

#### 三、删除表
```drop table【if exists】 表名;```

#### 四、复制表
1. 复制表的结构
```create table 表名 like 旧表;```
2. 复制表的结构+数据
```create table 表名 select 查询列表 from 旧表【where 筛选】;```

















































































