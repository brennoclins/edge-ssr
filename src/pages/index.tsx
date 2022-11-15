import { GetServerSideProps } from "next"

interface HomeProps {
  users: string[]
}

export default function Home({ users }: HomeProps) {
  return (
    <ul>
      {users.map(user => <li key={user}>{user}</li>)}
    </ul>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const users = [
    'Dev Meditation',
    'Fire Kauê',
    'Mon Ray',
    'Kitana',
    'SubZero',
    'Scorpion'
  ]

  return {
    props: {
      users,
    }
  }
}
