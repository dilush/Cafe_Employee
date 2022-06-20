===Instruction to comple CafeEmployee====

Backend & fronend projects are in two different folders.

----Backend (.NET Core, SQLlite)----
Project use SQLlite as database, no installation is needed.
Database will create on startup & seed data will be added automatically

1. Open folder "CafeEmployee-Backend" use IDE like Visual Studio.
2. Set CafeEmployee.API as Startup project. (If not already set)
3. Make sure Nuget packages are getting restored.
3. Run Project.
4. Swagger index page will open on browser


----Frontend (React, Redux, Redux-saga)

1. Open folder "CafeEmployee-Frontend/cafe-employee". use IDE like Visual studio code or Visual studio
2. In terminal run "npm install"
3. In terminal run "npm start"
4. Project will open on broweser window with cafe details
5. If frontend is not connecting with backend, update .env file with correct port