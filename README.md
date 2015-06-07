#Installation

Just run the `npm install`, I have made some seed data available for you to try the demo

# sailsTest

This small sails project shows an issue trying to modify or reset an attribute in a model instance, for when you need nested population.

So we have 3 models: `Appointment` which has many `procedure` which has one to one `procedureItem`.

With a single REST endpoint I want to get the 3 of them.

I have created two endpoints to showcase this `http://localhost:1337/appointment/nested` and  `http://localhost:1337/appointment/nestedToObject`

#The issue
So as you can see I want to replace procedures with the new array procedures (which has the nested depth i need), but if you hit the endpoint, there is no procedure attribute available.
As a test I have attached the same new procedures array to `proceduress` (double s) attribute and this one gets properly set. 
