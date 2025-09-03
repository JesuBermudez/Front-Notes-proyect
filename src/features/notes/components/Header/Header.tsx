import "./Header.css";

type HeaderProps = {
  toggleNewNote: () => void;
};

export default function Header({ toggleNewNote }: HeaderProps) {
  return (
    <header className="app-header">
      <h1>Gestor de Notas</h1>
      <img
        src="/post-it.png"
        alt="notes-icon"
        onClick={() => toggleNewNote()}
      />
    </header>
  );
}
