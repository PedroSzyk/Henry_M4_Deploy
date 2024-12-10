import HomeList from '@/components/HomeList/HomeList'

const HomeView = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 font-['Helvetica','Arial',sans-serif]">
        Best Sellers
      </h1>
      <HomeList />
    </div>
  )
}

export default HomeView