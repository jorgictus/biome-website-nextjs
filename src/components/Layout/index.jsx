import Header from '../Header'

const Layout = ({ children }) => {
  return (
    <div className="mx-auto  max-w-6xl px-4 sm:px-6 md:px-8">
      <Header />
      {children}
    </div>
  )
}

export default Layout
