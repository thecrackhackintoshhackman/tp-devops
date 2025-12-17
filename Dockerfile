# Étape 1 : Utiliser une image Nginx légère
FROM nginx:alpine

# Étape 2 : Copier les fichiers de l'application
COPY src/ /usr/share/nginx/html

# Étape 3 : Exposer le port 80
EXPOSE 80

# Étape 4 : Démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]