import { Suspense } from 'react'
import '../../styles/globals.css'

export default function Layout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <div>
          <Suspense fallback={<p>Status is loading...</p>}>
            {children}
          </Suspense>
        </div>     
    )
  }