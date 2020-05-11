import Browse from "./pages/Browse.vue";
import Book from "./pages/Book.vue";
import Recommendation from "./pages/Recommendation.vue";
import RecommendationResults from "./pages/RecommendationResults.vue"
import Top from "./pages/Top.vue"
export default [
    {
        path: '/browse',
        component: Browse,
        name: 'browse'
    },
    {
        path: '/recommendation',
        component: Recommendation,
        name: 'recommendation',
    },
    {
        path: '/recommendation/results',
        component: RecommendationResults,
        name: 'results',
    },
    {
        path: '/top',
        component: Top,
        name: 'top'
    },
    {
        path: '/book/:id',
        component: Book,
        name: 'book',
        props: true
    }
]