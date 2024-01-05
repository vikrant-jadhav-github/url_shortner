<h1>Project - Url Shortner</h1>

<h3>Description</h3>
<p>I have named this project as a short me i.e short link. From the name itself it is clear that this is the tool to shorten long urls so that one can use it more easily, I have also added the authentication features like one should register in order to access the service and also all urls can be viewed by the individuals. </p>

<h3>Technologies</h3>
<p>I have used django for the backend and angular for the frontend, SqlDblite3 which comes as an inbuilt database. </p>

<h3>How to start the project locally</h3>
<p>Firstly, clone this project via git clone https://github.com/vikrant-jadhav-github/url_shortner.git or download it natively and then run, it is up to you. </p>
<p>After cloning the project you will see two folders - one is server and another one is client</p>

<h4>Running the server part</h4>
<p>I have mentioned the requirements.txt to install all the necessary modules which you would need to run the server<p>
<p>Run pip install -r requirements.txt to install all the modules in one go, if you get some issues for some modules then you can install individually as well.
<p>After installing modules, run this commands step by step - 
<p>python3 manage.py makemigrations to make migratitions of all models. </p>
<p>python3 manage.py migrate to make actually changes in the db. </p>
<p>One can create the super user if want, to create that - python3 manage.py createsuperuser. (This is not mandatory step just if you want to use the admin panel then run this). </p>
<p>Finally, run the server by hitting - python3 manage.py runserver. </p>
<p>You can see server will run on localhost at port 8000. </p>
<p>Please note that i have used django rest framework to create the backend</p>

<h4>Running the client part</h4>
<p>Firstly, install all the node modules by npm i, if there is an access issue then run sudo npm i. </p>
<p>Make sure to install node modules after reaching client/url_shortner_frontend then hit npm i. </p>
<p>Then hit ng serve to run the server, that's it. It will run on localhost at port 4200. </p>

<h1>Congratulations, now you can explore the features </h1>
