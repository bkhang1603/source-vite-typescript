import { getAllMovie } from '~/utils/movieApi'

const Home = async () => {
  const data = await getAllMovie('/movies')
    .then((res) => res.data)
    .catch((err) => console.log(err))

  console.log(data)

  return <div>Home</div>
}

export default Home
