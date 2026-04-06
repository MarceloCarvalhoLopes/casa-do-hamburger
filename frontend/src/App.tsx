import Input from "./components/Input";

const App = () => {
  return (
    <p className="p-6 bg-black flex gap-2">
      <Input placeholder="E-mail" type="text" />
      <Input placeholder="Senha" type="password"/>
    </p>
  );
};

export default App;
