import axios from 'axios'

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "e3d1750efec640c5a2d9221218dae29a"
    }
})
