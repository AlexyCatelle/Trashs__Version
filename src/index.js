import http from 'http'; // ou node:http

console.log('Je dois créer un serveur HTTP...');

// je prépare la fonction que je passerai en callback
// elle aura accès à chaque requête reçue,
// et devra achever la construction d'une réponse
function prepareResponse(request, response) {
    console.log(`je vais devoir préparer une réponse pour ${request.url}`);
    console.log(request);
    console.log(response);
        // je peux construire ma réponse
    // avec des entêtes
    response.setHeader('Content-Type', 'text/html; charset=UTF-8');
    // et écrire dans le corps
    if(request.url === '/'){
    response.write('<h1>Coucou</h1>');
}

    else if(request.url === '/toto'){
        response.write('<h1>Coucou toto</<h1>');
    }

    else{
        response.write('<h1>ERROR 404</<h1>');
    }
    // attention l'ordre est important, on doit d'abord dire les entêtes, puis le corps
    // puis dire que j'ai terminé pour envoyer la réponse
    response.end();
    }
    const server = http.createServer(prepareResponse);

    const port = 1234;
server.listen(port, () => {
console.log(`Serveur démarré sur http://localhost:${port}/`);
});
