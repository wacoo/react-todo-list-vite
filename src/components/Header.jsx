import styles from '../styles/Header.modules.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Todos</h1>
      <p>Items will persist on the browser's local storage</p>
    </header>
  );
};
export default Header;