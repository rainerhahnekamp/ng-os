This is a case study for an application showing the possibility to implement
an "App Store" like application in Angular by using module federation.

## Features

- Registering apps on the fly
- User Profile
- Storage
- Possibility to use just components (part of the config)
- Calculator as component app
- Notes App
- Share Common dependencies like lodash or dayjs
- Mocked Central Services for Remotes

## Bugs

- ng add material can't find bootstrap and fails
- websocket in serve is disabled
- adding material's css in angular.json keeps serve stalling

## Commands for a fresh build

```bash
npx nx create-workspace ng-app-platform

yarn add @angular/material @angular/cdk

yarn add -D ngx-build-plus @angular-architects/module-federation

npx ng g application memory --routing

npx ng g application todo --routing

npx ng g application vocabulary-trainer --routing

npx ng g application weather --routing

npx ng g application ng-amp --routing

npx nx g lib core --directory ng-app-platform

npx nx g lib security --directory ng-app-platform

npx ng g lib types

npx ng g lib feature --directory memory

npx ng g lib feature --directory todo

npx ng g lib feature --directory vocabulary-trainer

npx ng g lib feature --directory weather

npx ng add @angular-architects/module-federation --project ng-app-platform --port 4200

npx ng add @angular-architects/module-federation --project vocabulary-trainer --port 4201

npx ng add @angular-architects/module-federation --project memory --port 4202

Get-ChildItem -Path . -Recurse -Directory  | Where-Object {$_.Fullname -notlike '*node_modules*'} | Where-Object {($_.Fullname -like '*src\lib') -or ($_.FullName -like '*src\app*')}

```
