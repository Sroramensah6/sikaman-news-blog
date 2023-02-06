// Components
import { Post_Template } from '../../../components'

// get data
import { getCategoryPostsData } from '../../../lib/posts'
  
export default function Miadekonu({ allPostsData }) {
    return <Post_Template siteTitle={'Sikaman Media - Amammreɛ'} allPostsData={allPostsData} title={'Amammreɛ'} />
}

export async function getServerSideProps() {
    const allPostsData = await  getCategoryPostsData('Amammreɛ/Amanneɛ')
    return {
      props: {
        allPostsData,
      }
    }
}
