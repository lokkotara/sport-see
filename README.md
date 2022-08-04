<p align="center"><img src="./public/images/logo.svg"></p>

# SportSee

## Comment installer le projet

Pour installer le back, rendez-vous sur [ce repo](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard) et suivez les instructions pour procéder à l'installation.

Pour installer le front, clonez ce repo sur votre ordinateur.  
Vous pouvez ensuite installer les dépendances en vous positionnant à la racine du projet et en tapant la commande `npm install` dans la console.  


## Comment lancer le projet

Une fois le projet installé, lancez d'abord le back en vous positionnant à la racine et en tapant `npm start`.  
Un message indiquant `Magic happens on port 3000` doit s'afficher dans la console pour confirmer la réussite du lancement.

Ensuite, positionnez vous à la racine du dossier du front et taper `npm start` dans la console.  
Un message dans la console vous indique que le port 3000 est déjà utilisé et vous demande si vous souhaitez en utiliser un autre.  
Tapez alors la touche `y` pour accepter. 

Une fenêtre de navigation s'ouvre et vous avez à présent accès à l'application web.  


## Concernant cette première version du projet

Cette application étant encore en phase de développement, nous avons la possibilité de récupérer les infos de l'utilisateur par 2 méthodes :
- Un appel à l'API
- les données mockées

Pour le moment, seuls deux utilisateurs sont présents pour ces 2 méthodes. Leurs ids sont `12` et `18`.

Aucun système d'authentification n'est encore en place sur ce projet.  
Lors du lancement du projet, vous pouvez constater que le système de routage redirige l'utilisateur sur la page d'erreur.  
C'est tout à fait normal puisqu'aucun utilisateur n'a encore été précisé. 

Pour rectifier cela, il suffit de modifier l'URL en ajoutant `/user/` ainsi que l'id de l'utilisateur désiré puis lancer la recherche.  
Par exemple, pour afficher les informations de Cecilia lorsque le front est lancé sur le port 3001, vous pouvez taper `http://localhost:3001/user/18`.

Si l'on souhaite plutôt consulter les données mockées, il suffit de rajouter `?mocked` après l'id de l'utilisateur.  
Pour reprendre l'exemple juste au-dessus, cela donnerait `http://localhost:3001/user/18?mocked`.