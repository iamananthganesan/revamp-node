#Prisma is ORM Object Relational Mapping

create a folder with prisma 
    -> schema.prisma
        -> it has the provider details
        -> database details like hostname, service acc no, password, database name, schema name will be placed inside the .env file
#Installation
#npm i prisma @prisma/client

if you want to create a new table you need to make use of the migration comment 
#npx prisma migrate dev name_of_the_migration init

please check the neon db tables.