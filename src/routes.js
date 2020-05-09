import Browse from "./pages/Browse.vue";
import Book from "./pages/Book.vue";

export default [
    {
        path: '/browse',
        component: Browse,
        name: 'browse'
    },
    {
        path: '/book/:id',
        component: Book,
        name: 'book',
        props: true
    }
]