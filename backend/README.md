#DAY-3

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

#DAY -4

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

#DAY-5 - 06/16
    Restaurant app
    step 1 -> scehma design
    step 2 API creation
    step 3
    infra ready 

    schema -> migrate npx prisma migrate dev 

    migration_name example init 

#DAY-6 06/17
    /login
    /register
    1.Schema design
        model UserDetails {
            userId String @id default(uuid())
            email String
            password String
        }
    2.API creation
        we've use bcrypy library to hash the password with saltRound
        https://www.npmjs.com/package/bcrypt
        v1/api/register
            # Need to validate the email id wheather its exist or not
            # if Not existed we need to hash the password     
            # then we need to insert a record to userDetails table
    /refresh
    /public/protected routes
    /middleware
Model User
user_id
user_name
#DAY-7 06/18
    login API

    MIDDLEWARE   - NOTHING BUT an function

    core middleware app.use(express.json()) //parser
    custom middleware - auth middleware, RBAC middleware, 
    3rd party middleware  app.use(morgon()) //logger ,

#DAY-8

#DAY-9

#DAY-10 06/23
E-Comm

Step-1
prismalister.app
    Creating schema for the Producer API

        model Product {
            product_id String @if @default(uuid())
            title string
            description  String
            category String
            price   String
            rating String
            thumbnail String
            brand      String    
        }
Step - 2 
    -Neon DB
        Databasde connection
    -copy the schema or run npx prisma generate command to get the schema.prisma code 
Step - 3 
    npm init
        backend
            npm i express, nodemon, primsa, prismaclient

            create controller and routes for the producer list api 

            then using ai add product using prisma seed 

            -schema
                seed
                    seed.js

Deployment
    Render
        server-less(infra is handles by company)
    render.com
        Uptime
            to make your api hit in time interval 


