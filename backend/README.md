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

We preffered Neon DB
https://console.neon.tech/app/projects/sparkling-forest-28998972/branches/br-lucky-leaf-a18ofa3e/tables?database=neondb


Steps
1.Schema designs
2.API Planning
    GET - http:localhost:3000/v1/api/students
    GET - http:localhost:3000/v1/api/students/:rollNo
    POST -http:localhost:3000/v1/api/students
    PUT -http:localhost:3000/v1/api/students/:rollNo
    DELETE - http:localhost:3000/v1/api/students/:rollNo


3.prisma || prisma client

    server -> prisma -> DB


    4.npx prisma studio
        gives you the UI where you can see the model details which will be runnning in the port http:localhost:5555
        

