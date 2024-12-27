import Category from '../../components/category/Category'
import HeroSection from '../../components/heroSection/HeroSection'
import HomePageProductCard from '../../components/homePageProductCard/HomePageProductCard'
import Layout from '../../components/layout/Layout'
import Track from '../../components/track/Track'
import Testimoniaal from '../../components/testimonial/Testimonial'
import Loader from '../../components/loader/Loader'



const HomePage = () => {
  return (
    <Layout>
      <HeroSection/>
      <Category/>
      <HomePageProductCard/>
      <Track/>
      <Testimoniaal/>
      <Loader/>
    </Layout>
  )
}
export default HomePage