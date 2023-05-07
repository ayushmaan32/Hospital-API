## My Hospital Api

This is simple Hospital Api

## Theme

     designed Hospital api for the doctors of Hospitals which have been alloted for testing purposes of COVID+

    . There can be two types of users
    . Doctors
    . Patient
    . Doctors would register
    . Doctors would login
    . each time patients visit doctor would do two steps
    . Register the patient in the app
    . After the checkup, create a Report
    . Patient Report will have the following fields
    . Created by doctor
    . Status
    . Can be either of: [Negative,
     Travelled-Quarantine, Symptoms-Quarantine, Positive-Admit] from the qn documentation

## Tech Stack

    1 Node.js
    2 Mongo DB

### install the npm first

`npm install`

### start the server

`npm start`

## Folder Structure

| --- config<br>
| --- | -- mongoose <br>
| --- | -- passport-jwt-strategy<br>
| --- controllers<br>
| --- | -- api<br>
| --- | -- | -- v1<br>
| --- | -- | -- | -- doctors_api_controllers<br>
| --- | -- | -- | -- patients_api_controllers<br>
| --- | -- | -- | -- reports_api_controllers<br>
| --- | -- homecontroller<br>
| --- models<br>
| --- | -- doctors<br>
| --- | -- patient<br>
| --- | -- reports<br>
| --- routes<br>
| --- | --api<br>
| --- | --| -- v1<br>
| --- | --| -- | --- doctors<br>
| --- | --| -- | --- index<br>
| --- | --| -- | --- patients<br>
| --- | --| -- | --- reports<br>
| --- | --| -- index<br>
| --- | -- index<br>
| --- .gitignore<br>
| --- index<br>
| --- package-lock.json<br>
| --- package.json<br>
| --- Readme.md<br>
