// components
import { Banner, Divider, Layout, MainCard, NewsCard, NewsThumbnail, SecondaryCard } from '../components'

// get data
import { getSortedPostsData } from '../lib/posts'

// logo
import logo from '../images/icon.png'

const styles = {
  wrapper: `mx-auto`,
  main: `flex justify-center`,
  container:`flex-1 max-w-7xl mt-[2rem]`,
  categoryContainer: `pl-4  mb-4`,
  divider: 'h-1 flex-1 flex w-full bg-[#F2F3F2] lg:my-16 my-10',
  category_border: `border-b border-[#290916] mt-4 border-2 flex w-10`,
  category: `text-3xl lg:text-[3rem] font-mediumSerif hover:text-[#290916]`,
  postsList : 'grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-5 items-start'
}

export default function Home ({ allPostsData }) {
  return (
    <Layout home siteTitle={'Sikaman Media - Mfitiaseɛ'} image={logo} description={'Read local news in the Ghanaian Twi vernacular'}>
      <div className={styles.wrapper}>
        <Banner />
        <div className={styles.main}>
          <div className={styles.container}>
            <div className="relative mb-8 pl-3 pr-3">
              <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-5">
                {allPostsData.slice(0, 1).map(post => <MainCard post={post} />)}
                <div className="sm:col-span-4 hidden lg:block sm:grid-cols-2 lg:col-span-3">
                  {allPostsData.slice(1, 3).map(post => <SecondaryCard post={post} />)}
                </div>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:grid lg:hidden ">
                {allPostsData.slice(1, 3).map(post => <NewsCard key={post.id} post={post} />)}
              </div>
            </div>
            <NewsThumbnail slice_start={3} slice_end={9} posts={allPostsData} href={'/category/nsem-ahoduo'} />
            <Divider />
            <NewsThumbnail posts={allPostsData} title={'Nsɛm Ahodoɔ'} compare={'Nsɛm Ahodoɔ'} href={'/category/nsem-ahoduo'} />
            <Divider />
            <NewsThumbnail posts={allPostsData} title={'Apomuden'} compare={'Apomuden mu nsɛm'} href={'/category/apomuden'} />
            <Divider />
            <NewsThumbnail posts={allPostsData} title={'Ɛdwadie'} compare={'Ɛdwadie'} href={'/category/edwadie'} />
            <Divider />
            <NewsThumbnail posts={allPostsData} title={'Amammreɛ'} compare={'Amammreɛ/Amanneɛ'} href={'/category/amammree'} />
            <Divider />
            <NewsThumbnail posts={allPostsData} title={'Amanɔnne'} compare={'Amanɔnne nsem'} href={'/category/amanonne'} />
            <Divider />
            <NewsThumbnail posts={allPostsData} title={'Agokansie'} compare={'Agokansie'} href={'/category/agokansie'} />
            <Divider />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps() {
  const allPostsData = await getSortedPostsData()
  return {
    props: {
      allPostsData,
    }
  }
}
