import Heading from '@/components/Heading'
import ShareButtons from '@/components/ShareButtons'
import { getReview, getSlugs } from '@/lib/reviews'

export async function generateStaticParams() {
  const slugs = await getSlugs()
  return slugs.map((slug) => ({ slug }))
  // => { return {slug: slug}}
}

export async function generateMetadata({ params: { slug } }) {
  const review = await getReview(slug)
  return {
    title: review.title,
  }
}

export default async function ReviewPage({ params: { slug } }) {
  const review = await getReview(slug)

  console.log(`[ReviewPage] rendering:`, slug)

  return (
    <>
      <Heading>{review.title}</Heading>
      <div className='flex gap-4 items-center py-4'>
        <p className='italic'>{review.date}</p>
        <ShareButtons />
      </div>
      <img
        src={review.image}
        alt=''
        width='640'
        height='360'
        className='rounded mb-2'
      />
      <article
        dangerouslySetInnerHTML={{ __html: review.body }}
        className='prose sm:prose-xl prose-slate max-w-screen-sm'
      />
    </>
  )
}
