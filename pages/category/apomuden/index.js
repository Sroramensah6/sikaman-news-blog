// Components
import { Post_Template } from '../../../components'

// get data
import { getCategoryPostsData } from '../../../lib/posts'

export default function Lamese({ allPostsData }) {
    return <Post_Template siteTitle={'Sikaman Media - Apomuden'} allPostsData={allPostsData} title={'Apomuden'} />
}

export async function getServerSideProps() {
    const allPostsData = await  getCategoryPostsData('Apomuden mu nsɛm')
    return {
      props: {
        allPostsData,
      }
    }
}
