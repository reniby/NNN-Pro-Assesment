# NNN Pro Assesment

This repo contains 2 Nest.js apps. 

First you will need to run npm install in 4 directories
- NNN-Pro-Assesment
- NNN-Pro-Assesment/app1
- NNN-Pro-Assesment/app2
- NNN-Pro-Assesment/libraries/models
or simply run this command: `for dir in . app1 app2 libraries/models; do (cd "$dir" && npm install); done`

To run either app, navigate to `NNN-Pro-Assesment/app1` or `NNN-Pro-Assesment/app2` and then run `npm run dev`

The app can then be viewed at `http://localhost:3000/`

You will see one list of names under the heading `Server-side List of Names` which is generated using person.getAll() directly

If you click the button, another list of names will be generated by hitting the API endpoint at the apps respective route.js
(ex: `app1/app/api/route.js`)