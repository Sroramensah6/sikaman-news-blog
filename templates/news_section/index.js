// component 
import { PostCard } from "../../components"
import Layout from "../../components/layout"

// LOGO
import logo from '../../images/logo1.png'


const styles = {
    wrapper: `mx-auto`,
    main: `flex justify-center`,
    categoryContainer: `w-20 mb-10`,
    container:`flex-1 max-w-7xl mt-[2rem]`,
    category: `text-[3rem] font-poppins mb-4 text-[#0e2b19] border-b border-[#0e2b19]`,
    postsList : 'grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-5 items-start'
}
  
export default function Post_Template({ allPostsData, siteTitle, title }) {
    return (
        <Layout siteTitle={siteTitle} image={logo }>
            <div className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.categoryContainer}>
                        <h1 className={styles.category}>{title}</h1>
                    </div>
                    <div className={styles.postsList}>
                        {allPostsData.map(post => <PostCard key={post.id} post={post} />)}
                    </div>
                </div>
            </div>
        </Layout>
    )
}
