import Header from '../Header/Header';

function DefaultLayout({ theme = 'light', children }) {
  return (
    <div>
      <Header theme={theme}></Header>
      {children}
    </div>
  );
}

export default DefaultLayout;
