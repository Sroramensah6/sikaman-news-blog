import Link from 'next/link'

// components
import Layout from '../components/layout'
import { Banner,  PostCard } from '../components'

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
            <div className={styles.postsList}>
              {allPostsData
                .filter((post) => {
                  return (
                    post.category === 'Nsɛm Ahodoɔ' ||
                    post.category === 'Apomuden mu nsɛm' ||
                    post.category === 'Ɛdwadie' ||
                    post.category === 'Amammreɛ/Amanneɛ' ||
                    post.category === 'Amanɔnne nsem'
                  )
                }).slice(0, 6).map(post => <PostCard key={post.id} post={post} />)
              }
            </div>
            <span className={styles.divider}></span>
            <div className={styles.space}>
              <div className={styles.categoryContainer}>
                <Link href={'/category/nsem-ahoduo'}>
                  <h1 className={styles.category}>Nsɛm Ahodoɔ</h1>
                  <span className={styles.category_border} />
                </Link>
              </div>
              <div className={styles.postsList}>
                {allPostsData
                  .filter((post) => post.category === 'Nsɛm Ahodoɔ')
                  .slice(0, 4)
                  .map(post => <PostCard key={post.id} post={post} />)
                }
              </div>
            </div>
            <span className={styles.divider}></span>
            <div className={styles.space}>
              <div className={styles.categoryContainer}>
                <Link href={'/category/apomuden'}>
                  <h1 className={styles.category}>Apomuden</h1>
                  <span className={styles.category_border} />
                </Link>
              </div>
              <div className={styles.postsList}>
                {allPostsData
                  .filter((post) => post.category === 'Apomuden mu nsɛm')
                  .slice(0, 4)
                  .map(post => <PostCard key={post.id} post={post} />)
                }
              </div>
            </div>
            <span className={styles.divider}></span>
            <div className={styles.space}>
              <div className={styles.categoryContainer}>
                <Link href={'/category/edwadie'}>
                  <h1 className={styles.category}>Ɛdwadie</h1>
                  <span className={styles.category_border} />
                </Link>
              </div>
              <div className={styles.postsList}>
                {allPostsData
                  .filter((post) => post.category === 'Ɛdwadie')
                  .slice(0, 4)
                  .map(post => <PostCard key={post.id} post={post} />)
                }
              </div>
            </div>
            <span className={styles.divider}></span>
            <div className={styles.space}>
              <div className={styles.categoryContainer}>
                <Link href={'/category/amammree'}>
                  <h1 className={styles.category}>Amammreɛ</h1>
                  <span className={styles.category_border} />
                </Link>
              </div>
              <div className={styles.postsList}>
                {allPostsData
                  .filter((post) => post.category === 'Amammreɛ/Amanneɛ')
                  .slice(0, 4)
                  .map(post => <PostCard key={post.id} post={post} />)
                }
              </div>
            </div>
            <span className={styles.divider}></span>
            <div className={styles.space}>
              <div className={styles.categoryContainer}>
                <Link href={'/category/amanonne'}>
                  <h1 className={styles.category}>Amanɔnne</h1>
                  <span className={styles.category_border} />
                </Link>
              </div>
              <div className={styles.postsList}>
                {allPostsData
                  .filter((post) => post.category === 'Amanɔnne nsem')
                  .slice(0, 4)
                  .map(post => <PostCard key={post.id} post={post} />)
                }
              </div>
            </div>
            <span className={styles.divider}></span>
            <div className={styles.space}>
              <div className={styles.categoryContainer}>
                <Link href={'/category/agokansie'}>
                  <h1 className={styles.category}>Agokansie</h1>
                  <span className={styles.category_border} />
                </Link>
              </div>
              <div className={styles.postsList}>
                {allPostsData
                  .filter((post) => post.category === 'Agokansie')
                  .slice(0, 4)
                  .map(post => <PostCard key={post.id} post={post} />)
                }
              </div>
            </div>
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
