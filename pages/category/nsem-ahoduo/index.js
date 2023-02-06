// Components
import { Post_Template } from '../../../components'

// get data
import { getCategoryPostsData } from '../../../lib/posts'

  
export default function Nyadzɔdzɔwo({ allPostsData }) {
    return <Post_Template siteTitle={'Sikaman Media - Nsɛm Ahodoɔ'} allPostsData={allPostsData} title={'Nsɛm Ahodoɔ'} />
}

export async function getServerSideProps() {
  const allPostsData = await  getCategoryPostsData('Nsɛm Ahodoɔ')
  return {
    props: {
      allPostsData,
    }
  }
}
