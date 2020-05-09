import axios from 'axios';

export const getBooks=({commit})=>{
        axios.get("http://127.0.0.1:5000/books", { params: { page: 1, limit: 10 } })
        .then(res => {
          commit('SET_BOOKS',res.data[0][0]);
        });
}