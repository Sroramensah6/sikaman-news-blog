// component
import { Post_Template } from '../../../components'

// get data
import { getCategoryPostsData } from '../../../lib/posts'
  
export default function Asitsanyawo({ allPostsData }) {
    return <Post_Template siteTitle={'Sikaman Media - Ɛdwadie'} allPostsData={allPostsData} title={'Ɛdwadie'} />
}
 
export async function getStaticProps() {
    const allPostsData = await  getCategoryPostsData('Ɛdwadie')
    return {
      props: {
        allPostsData,
      }
    }
}