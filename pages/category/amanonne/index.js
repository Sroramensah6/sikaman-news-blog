// Components
import { Post_Template } from '../../../components'

// get data
import { getCategoryPostsData } from '../../../lib/posts'

export default function Dutanyawo({ allPostsData }) {
    return <Post_Template siteTitle={'Sikaman Media - Amammreɛ'} allPostsData={allPostsData} title={'Amammreɛ'} />
}

export async function getStaticProps() {
    const allPostsData = await  getCategoryPostsData('Amanɔnne nsem')
    return {
      props: {
        allPostsData,
      }
    }
}
