This is a case study for an application showing the possibility to implement an
Android-like application in Angular by using module federation.

## Features

- Registering apps on the fly
- User Profile
- Storage
- Possibility to use just components (part of the config)
- Calculator as component app
- Notes App
- WinAmp Clone
- Share Common dependencies like lodash or dayjs
- Mocked Central Services for Remotes

## Shared UserService

The UserService is provided by the host. It is splitted up into two modules. A
types lib which just contains the token (equivalent of Interface in Java or C#
DIs). The token is

- exposed to the remotes via the nx rules and
- set as shared in the webpack.config (**very important**)

The security lib contains the implementation of the `UserService` and is only
available to the host.

The providing for `UserService` is done via the decorator of the security module
itself.

## Commands for a fresh build

```bash
npx nx create-workspace ng-os

yarn add @angular/material @angular/cdk

yarn add -D ngx-build-plus @angular-architects/module-federation

npx ng g application memory --routing

npx ng g application todo --routing

npx ng g application vocabulary-trainer --routing

npx ng g application weather --routing

npx ng g application ng-amp --routing

npx nx g lib core --directory ng-os

npx nx g lib security --directory ng-os

npx ng g lib types

npx ng g lib feature --directory memory

npx ng g lib feature --directory todo

npx ng g lib feature --directory vocabulary-trainer

npx ng g lib feature --directory weather

npx ng add @angular-architects/module-federation --project ng-os --port 4200

npx ng add @angular-architects/module-federation --project vocabulary-trainer --port 4201

npx ng add @angular-architects/module-federation --project memory --port 4202

Get-ChildItem -Path . -Recurse -Directory  | Where-Object {$_.Fullname -notlike '*node_modules*'} | Where-Object {($_.Fullname -like '*src\lib') -or ($_.FullName -like '*src\app*')}

```
