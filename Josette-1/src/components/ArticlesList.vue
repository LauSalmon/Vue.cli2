<script>
import ArticleDataService from '../services/ArticleDataService.js';
import ArticleDetails from './Article.vue';

export default {
    name : 'article-list',
    components : {ArticleDetails},

    data() {
        return {
            articles : [],
            currentArticle : null,
            currentIndex : -1,
        }
    },

    methods : {
        onDataChange(items) {
            let _articles = [];
            items.forEach(item=>{
                let key = item.key;
                let data = item.val();
                _articles.push({
                    key : key,
                    title : data.title,
                    description : data.description,
                    published : data.published,
                });
                this.articles = _articles;
            })
        },
        refreshList(){
            this.currentArticle = null;
            this.currentIndex = -1;
        },
        setArticleActive(article, index){
            this.currentArticle = article;
            this.currentIndex = index;
        },
        removeAllArticles(){
            ArticleDataService.deleteAll().then(()=>{
                this.refreshList();
                console.log("on refresh");
            }).catch((e)=>{
                console.log(e);
            });
        }
    },
    mounted(){
        ArticleDataService.getAll().on('value', this.onDataChange);
    },
    beforeUnmount(){
        ArticleDataService.getAll().off('value', this.onDataChange);
    }
};
</script>

<template>
    <div class="container list row m-auto">
        <h1>Articles LIST</h1>
        <div class="col-md-6">
            <ul class="list-group">
                <li v-for="(unArticle, index) in articles" class="list-group-item" :class="{ active: index === currentIndex }" :key="index" @click="setArticleActive(unArticle, index)">{{unArticle.title}}</li>
            </ul>
            <button class="m-3 btn btn-sm btn-danger" @click="removeAllArticles">Tout Supprimer</button>
        </div>
        <div class="col-md-6">
            <div v-if="currentArticle">
                <article-details :article="currentArticle" @refreshList="refreshList"></article-details>
            </div>
            <div v-else>
                <p>Veuillez selectionner un article</p>
            </div>
        </div>
    </div>
</template>