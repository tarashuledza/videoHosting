import { useGetUserQuery } from '../../services/auth.services'

const Layout: React.FC = () => {
	const { data, isSuccess } = useGetUserQuery()
	return <>{isSuccess && <div>I'm {data?.user.name}</div>}</>
}

export default Layout
