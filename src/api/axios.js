import axios from 'axios'
import React from 'react'

export default axios.create({
    baseURL: "https://dummyjson.com/"
});

