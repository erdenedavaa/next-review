import { ReactNode } from 'react'
import ReviewsNavbar from '@/components/ReviewsNavbar'
import { getReviews } from '@/lib/reviews'

interface LayoutProps {
  children: ReactNode
}

export default async function ReviewsLayout({ children }: LayoutProps) {
  const reviews = await getReviews()

  return (
    <div>
      <ReviewsNavbar data={reviews} />
      {children}
    </div>
  )
}
