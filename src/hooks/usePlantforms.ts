import useData from "./useData"

interface Platform {
    id: number
    name: string
    slug: string
}

const usePlantforms = () => useData<Platform>('/platforms/lists/parents')

export default usePlantforms