import firebase from '../firebase';

// ICI c'est une REF à l'endroit de notre """TABLE""" articles dans la BDD
// quand on utilise la contante db on sais qu'on vise quelque chose dans la table articles
const db  = firebase.ref("/articles");

class ArticleDataService{
    getAll() {
        return db;
    };
    create(article) {
        return db.push(article);
    };
    update(key, value) {
        db.child(key).update(value);
    };
    delete(key){
        return db.child(key).remove();
    };
    deleteAll(){
        return db.remove();
    }

};

export default new ArticleDataService();