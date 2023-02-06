// Components
import { Post_Template } from '../../../components'

// get data
import { getCategoryPostsData } from '../../../lib/posts'

export default function Kamedefefe({ allPostsData }) {
    return <Post_Template siteTitle={'Sikaman Media - Agokansie'} allPostsData={allPostsData} title={'Agokansie'} />
}

export async function getServerSideProps() {
    const allPostsData = await  getCategoryPostsData('Agokansie')
    return {
      props: {
        allPostsData
      }
    }
}
