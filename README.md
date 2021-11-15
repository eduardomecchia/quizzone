# users-crud

Semplice applicazione scritta con Vue.js 2 che permette di creare, visualizzare, modificare e cancellare dati anagrafici di utenti immagazzinati in un file .json.\
L'app fa utilizzo di VueX per gestire a livello globale due elementi: l'URL dell'API (in questo caso rappresentato in modo fittizio da json-server) in modo da avere un luogo centralizzato dove modificarlo se se ne avesse il bisogno e gli utenti da renderizzare a schermo per evitare di dover gestire tutti i vari props.\
L'utilizzo dei componenti è limitato alla Navbar presente in tutte le pagine e alle Card che rappresentano gli utenti.\
I tre form presenti nell'app non sono stati realizzati come componenti Vue poiché tutti possiedono differenze più o meno sostanziali che ne limitano la riusabilità.
