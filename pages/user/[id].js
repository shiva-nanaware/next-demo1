import { useRouter } from 'next/router'
import useSwr from 'swr'
import style from './user.module.css'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function User() {
  const router = useRouter()
  const { data, error } = useSwr(
    router.query.id ? `/api/user/${router.query.id}` : null,
    fetcher
  )

  if (error) return <div >Failed to load user</div>
  if (!data) return <div>Loading...</div>

  return <div className={style.divDemo}>{data.name}</div>
}
