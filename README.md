# This is a project for HLab

## How to run my Front-end project

1. Run ```npm install``` on ./hl-answer-next-js
2. Run ```npm run dev``` or use VSCode / VS2022 to debug.
3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
4. The answer for both backend and front-end question should be on the navbar.
5. Specifically, the test file for front-end should be at ./src/app/user-profile/UserProfile.test.tsx

## How to run my Back-end project

1. Run ```npm install``` on ./hl-answer-next-js
2. Run ```npm run start:dev``` or use VSCode / VS2022 to debug.
3. Open [http://localhost:4000](http://localhost:4000) with your browser to see the `hello world !` result.
4. Run ```npm run db:dev:restart``` to deploy PostgreSQL with `docker compose up -d` including database migration by Prisma. Make sure *NOT* to manually migrate database.
5. **Make sure you have `.env` file with this field `DATABASE_URL="postgresql://postgres:[**insert_password_here**]@localhost:5432/main?schema=public"` and  **change your password** accordingly in `docker-compose.yml`** If you have special character in the password, make sure to encode it in `UTF-8` format
6. To check for my answer on question 3 for backend
   5.1. Validator : ./src/product/dto
   5.2. Database : ./prisma/schema.prisma
   5.3. Testing Strategy : ./src/product/[controller, service]/product.[controller, service].spec.ts
7. Swagger is available at [http://localhost:4000/api](http://localhost:4000/api) for example apis.

## If all is success

- Run ```npm run test``` to do all the Jest test that I've written for both framework

## If all else fail

- I should have HTML file for my answer on the same directory as the solution file (root of this git)