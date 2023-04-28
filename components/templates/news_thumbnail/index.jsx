import Link from 'next/link'

import NewsCard from '../../news_card'

const styles = {
    wrapper: `mx-auto`,
    main: `flex justify-center`,
    categoryContainer: `w-80 pl-4  mb-6`,
    container:`flex-1 max-w-7xl mt-[2rem]`,
    postsList : 'grid sm:grid-cols-2 lg:grid-cols-3 gap-10',
    category_border: `border-b border-[#290916] border-2 mt-0 flex w-8`,
    category: `font-poppins text-[2rem] lg:text-[2rem] hover:text-[#290916]`,
}

export default function NewsThumbnail ({ title, posts, href, compare, slice_start, slice_end }) {
    slice_end = slice_end ?? 6
    slice_start = slice_start ?? 0
    return (
        <div className={styles.space}>
            {title && (
                <div className={styles.categoryContainer}>
                    <Link href={href}>
                        <h1 className={styles.category}>{title}</h1>
                        <span className={styles.category_border} />
                    </Link>
                </div>
            )}
            <div className={styles.postsList}>
                {posts.filter((post) => compare !== undefined ? post.category === `${compare}` : post).slice(slice_start, slice_end).map(post => <NewsCard key={post.id} post={post} />)}
            </div>
        </div>
    )
}
